
var jsondata = new Object();
jsondata = {
  "0" : "わらび",
  "1" : "ぜんまい",
  "2" : "うど",
  "3" : "わらび2",
  "4" : "ぜんまい2",
  "5" : "うど2",
  "6" : "わらび3",
  "7" : "ぜんまい3",
  "8" : "うど3",
  "9" : "うど4"
};

var herbs = jsondata;

//ランダムに数値を表示させる処理。
function slot(num) {
  var i = Math.floor(Math.random()*10);
  document.getElementById('slot_'+ num).innerHTML = herbs[i] ;
}
