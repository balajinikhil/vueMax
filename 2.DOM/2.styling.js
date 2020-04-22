new Vue({
  el: "#app",
  data: {
    attachRed: false,
    attachGreen: "green",
  },
  computed: {
    attachBlue() {
      return {
        blue: !this.attachRed,
        red: this.attachRed,
      };
    },
  },
});

new Vue({
  el: "#app1",
  data: {
    color: "red",
    width: 50,
  },
  computed: {
    changeWidth() {
      return this.width + "px";
    },
  },
});
