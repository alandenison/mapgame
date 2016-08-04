var Local = require('./../js/map-model.js').localModule;
// var apiKey = require('./../.env').apiKey;

var locationObjects = [["Aberdeen, Scotland","57","2"],
["Adelaide, Australia","34","138"],
["Algiers, Algeria","36","3"],
["Amsterdam, Netherlands","52","4"],
["Ankara, Turkey","39","32"],
["Asunción, Paraguay","25","57"],
["Athens, Greece","37","23"],
["Auckland, New Zealand","36","174"],
["Bangkok, Thailand","13","100"],
["Barcelona, Spain","41","2"],
["Belfast, Northern Ireland","54","5"],
["Belgrade, Serbia","44","20"],
["Berlin, Germany","52","13"],
["Birmingham, England","52","1"],
["Bombay, India","19","72"],
["Bordeaux, France","44","0"],
["Bremen, Germany","53","8"],
["Brisbane, Australia","27","153"],
["Bristol, England","51","2"],
["Brussels, Belgium","50","4"],
["Bucharest, Romania","44","26"],
["Budapest, Hungary","47","19"],
["Buenos Aires, Argentina","34","58"],
["Cairo, Egypt","30","31"],
["Calcutta, India","22","88"],
["Canton, China","23","113"],
["Cape Town, South Africa","33","18"],
["Caracas, Venezuela","10","67"],
["Cayenne, French Guiana","4","52"],
["Chihuahua, Mexico","28","106"],
["Chongqing, China","29","106"],
["Copenhagen, Denmark","55","12"],
["Dakar, Senegal","14","17"],
["Darwin, Australia","12","130"],
["Djibouti, Djibouti","11","43"],
["Dublin, Ireland","53","6"],
["Durban, South Africa","29","30"],
["Edinburgh, Scotland","55","3"],
["Frankfurt, Germany","50","8"],
["Georgetown, Guyana","6","58"],
["Glasgow, Scotland","55","4"],
["Guatemala City, Guatemala","14","90"],
["Guayaquil, Ecuador","2","79"],
["Hamburg, Germany","53","10"],
["Hammerfest, Norway","70","23"],
["Havana, Cuba","23","82"],
["Helsinki, Finland","60","25"],
["Hobart, Tasmania","42","147"],
["Hong Kong, China","22","114"],
["Iquique, Chile","20","70"],
["Irkutsk, Russia","52","104"],
["Jakarta, Indonesia","6","106"],
["Johannesburg, South Africa","26","28"],
["Kingston, Jamaica","17","76"],
["Kinshasa, Congo","4","15"],
["Kuala Lumpur, Malaysia","3","101"],
["La Paz, Bolivia","16","68"],
["Leeds, England","53","1"],
["Lima, Peru","12","77"],
["Lisbon, Portugal","38","9"],
["Liverpool, England","53","3"],
["London, England","51","0"],
["Lyons, France","45","4"],
["Madrid, Spain","40","3"],
["Manchester, England","53","2"],
["Manila, Philippines","14","120"],
["Marseilles, France","43","5"],
["Mazatlán, Mexico","23","106"],
["Mecca, Saudi Arabia","21","39"],
["Melbourne, Australia","37","144"],
["Mexico City, Mexico","19","99"],
["Milan, Italy","45","9"],
["Montevideo, Uruguay","34","56"],
["Moscow, Russia","55","37"],
["Munich, Germany","48","11"],
["Nagasaki, Japan","32","129"],
["Nagoya, Japan","35","136"],
["Nairobi, Kenya","1","36"],
["Nanjing (Nanking), China","32","118"],
["Naples, Italy","40","14"],
["New Delhi, India","28","77"],
["Newcastle-on-Tyne, England","54","1"],
["Odessa, Ukraine","46","30"],
["Osaka, Japan","34","135"],
["Oslo, Norway","59","10"],
["Panama City, Panama","8","79"],
["Paramaribo, Suriname","5","55"],
["Paris, France","48","2"],
["Perth, Australia","31","115"],
["Plymouth, England","50","4"],
["Port Moresby, Papua New Guinea","9","147"],
["Prague, Czech Republic","50","14"],
["Rangoon, Myanmar","16","96"],
["Reykjavík, Iceland","64","21"],
["Rio de Janeiro, Brazil","22","43"],
["Rome, Italy","41","12"],
["Salvador, Brazil","12","38"],
["Santiago, Chile","33","70"],
["St. Petersburg, Russia","59","30"],
["São Paulo, Brazil","23","46"],
["Shanghai, China","31","121"],
["Singapore, Singapore","1","103"],
["Sofia, Bulgaria","42","23"],
["Stockholm, Sweden","59","18"],
["Sydney, Australia","34","151"],
["Tananarive, Madagascar","18","47"],
["Teheran, Iran","35","51"],
["Tokyo, Japan","35","139"],
["Tripoli, Libya","32","13"],
["Venice, Italy","45","12"],
["Veracruz, Mexico","19","96"],
["Vienna, Austria","48","16"],
["Vladivostok, Russia","43","132"],
["Warsaw, Poland","52","21"],
["Wellington, New Zealand","41","174"],
["Zürich, Switzerland","47","8"]];

$('document').ready(function() {
  var choices = [];
  for (i=0; i<5; i++) {
    newNum = Math.floor((Math.random() * 119)+1);
    if (choices.indexOf(newNum) === -1) {
      choices.push(locationObjects[newNum][0]);
      $("#" + i).append(choices[i]);
    } else {
      num = Math.floor((Math.random() * 119)+1);
      choices.push(locationObjects[num][0]);
      $("#" + i).text(choices[i]);
    }
    correctCity = choices[Math.floor(Math.random() * 4)];
  }
  alert (correctCity + "hi")
  var newCity = new Local(correctCity);
  var zoomNumber = 18;
  newCity.getCoordinates(zoomNumber);





  var score = 1000;
  $('#score').text(score);
  var newCity = new Local(locationObjects[locationNumber][0]);
  newCity.getCoordinates(zoomNumber);

  // User input

  $('#next-map').click(function(){
    locationNumber++;
    var newCity = new Local(locationObjects[locationNumber][0])
    newCity.getCoordinates(18);
  });

  $('#guess').click(function() {
    var cityGuess = $('#city').val();
    if (cityGuess === currentMap.city) {
      alert("correct");
      score = score + (10 * zoomNumber);
      locationNumber++;
      currentMap = locationObjects[locationNumber][0];
      zoomNumber = 18;
      currentMap.createMap(zoomNumber, thisCity);
    } else {
      alert("wrong");
      score = score - 50;
    }
    $('#score').text(score);
    console.log(locationNumber);
    console.log(this.zoom);
  });

  $('#zoom-button').click(function(){
    zoomNumber -= 1;
    var newCity = new Local(locationObjects[locationNumber][0]);
    newCity.getCoordinates(zoomNumber);
  });
  // $('#portland').click(function(){
  //   var newCity = new Local("portland, us");
  //   newCity.getCoordinates();
  //
  // })
});
