var vm = new Vue({
  el: "#app", // Vue.jsを使うタグのIDを指定
  data: {
    // Vue.jsで使う変数はここに記述する
    viewslotData:{
      state:false,
      textSansai:"変化前",
      textFood:"変化前"
    },
    sansaiData : {
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
    },
    foodData : {
      "0" : "パスタ",
      "1" : "マカロニ",
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

        vm.viewslotData.state = true;

        var numSansai = Math.floor(Math.random()*10);
        var numFood = Math.floor(Math.random()*10);
        vm.viewslotData.textSansai = vm.sansaiData[numSansai];
        vm.viewslotData.textFood = vm.foodData[numFood];
    }
  },
  created: function() {
    // Vue.jsの読み込みが完了したときに実行する処理はここに記述する
  },
  computed: {
    // 計算した結果を変数として利用したいときはここに記述する

  }
});
