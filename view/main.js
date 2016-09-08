$(document).ready(function(){
  console.log("DOM content loaded!");

  $('#area').on('click',getApi);
  $('#Development').on('click',getApi);


/* End of DOMContentLoaded */
});


////-----Function Hoisting-----/////

function getApi(){

  //---Get id name----//
  console.log($(this).attr('id'));
  var id = $(this).attr('id');
  var value = $(this).text();

  $.get('http://carparks-sg.herokuapp.com/api',function(data){
    // console.log(data);
      iterate(data,id,value);
    });
}

function iterate(data,id,value){
  /*  API format:
        Object {
        CarParkID: 1,
        Area: "Marina",
        Development: "Suntec City",
        Latitude: 1.29375,
        Longitude: 103.85718…} */


  //---Labelling List Header---//

    $('<h3>').text(value).insertBefore('#listAll')

  //---iterating through API data-----
      for(i=0; i<data.length; i++){
        // console.log("Loading forIn() " + i);
        forIn(data[i],value);
      }

        function forIn(obj,value){
          //----For In Loop to run through each object---//
          for (key in obj){
            // console.log(key, obj[key]);
            if(key === value){
              $('<li>').text(obj[key]).appendTo("#listAll");
              }
            }
          }


/* End of iterate() */
}
