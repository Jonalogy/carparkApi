$(document).ready(function(){
  console.log("DOM content loaded!");

  $('#test').on('click',getApi);







});


////-----Function Hoisting-----/////

function getApi(){
  console.log('button works!');
  $.get('http://carparks-sg.herokuapp.com/api',function(data){
    // console.log(data);
      iterate(data);
    });
}

function iterate(data){
  console.log(data[0])
  /*
    API format:

      Object {
      CarParkID: 1,
      Area: "Marina",
      Development: "Suntec City",
      Latitude: 1.29375,
      Longitude: 103.85718…} */

  // $('<li>')

  


}
