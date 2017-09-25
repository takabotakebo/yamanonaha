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
      "1" : "わらび",
      "2" : "のびる"
    },
    foodData : {
      "0" : "マカロニ",
      "1" : "パスタ",
      "2" : "ケーキ"
    }
  },
  methods: {
    // Vue.jsで使う関数はここで記述する
    viewslot: function(){

        if(vm.viewslotData.state == true){
          var viewslotdiv = function(){vm.viewslotData.state = true;};
          vm.viewslotData.state = false;
          setTimeout(viewslotdiv, 500);
        }else {
          vm.viewslotData.state = true;
        }

        var numSansai = Math.floor(Math.random()*3);
        var numFood = Math.floor(Math.random()*3);
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
