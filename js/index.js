var vm = new Vue({
  el: "#app", // Vue.jsを使うタグのIDを指定
  data: {
    // Vue.jsで使う変数はここに記述する
    viewslotData:{
      state:false,
      textSansai:"変化前",
      textFood:"変化前",
      imgSansai:"img",
      imgFood:"img",
    },
    sansaiData : {
      "0" : "ふきのとう",
      "1" : "ぜんまい",
      "2" : "うど",
      "3" : "せり",
      "4" : "しおで",
      "5" : "あいこ",
      "6" : "たら",
      "7" : "のびる",
      "8" : "ふき",
      "9" : "わらび"
    },
    foodData : {
      "0" : "マカロニ",
      "1" : "パスタ",
      "2" : "ジェラート",
      "3" : "ケーキ",
      "4" : "ローグルト",
      "5" : "ピザ",
      "6" : "オムらいず",
      "7" : "ハンバーグ",
      "8" : "スープ",
      "9" : "パン"
    }
  },
  methods: {
    // Vue.jsで使う関数はここで記述する
    viewslot: function(){

        if(vm.viewslotData.state == true){
          var viewslotdiv = function(){vm.viewslotData.state = true;};
          vm.viewslotData.state = false;
          setTimeout(viewslotdiv, 1000);
        }else {
          vm.viewslotData.state = true;
        }


        var numSansai = Math.floor(Math.random()*10);
        var numFood = Math.floor(Math.random()*10);
        vm.viewslotData.textSansai = vm.sansaiData[numSansai];
        vm.viewslotData.textFood = vm.foodData[numFood];

        vm.viewslotData.imgSansai = "./img/sansai/" + numSansai + ".png";
        vm.viewslotData.imgFood = "./img/food/" + numFood + ".png";
    }
  },
  created: function() {
    // Vue.jsの読み込みが完了したときに実行する処理はここに記述する
  },
  computed: {
    // 計算した結果を変数として利用したいときはここに記述する

  }
});
