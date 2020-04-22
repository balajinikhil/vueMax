new Vue({
  el: "#app",
  data: {
    title: "Hello World",
    myLink: "https://www.google.com",
    count: 0,
    finishedLink: "<a href='https://www.google.com'>Link</a>",
    x: 0,
    y: 0,
    model: "v-model",
    counter: 0,
    secondCounter: 0,
  },
  computed: {
    result() {
      console.log("executed");
      return this.counter > 5 ? ">5" : "<5";
    },
  },
  watch: {
    counter() {
      let val = this;
      setTimeout(() => {
        this.counter = 0;
      }, 2000);
    },
  },
  methods: {
    updateCount: function () {
      this.count++;
    },
    onIpt: function (e) {
      this.title = e.target.value;
    },
    updateCo: function () {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function () {
      alert("alert");
    },
  },
});
