<template>
  <div id="time_limit_div">
    <div class="btn_title">Set time limit</div>
    <div id="time_limit_content_div">
      <button @click="changeTimeLimit(false)" class="time_limit_btn">-</button>
      <div id="time_limit">{{timeLimit}}</div>
      <button @click="changeTimeLimit(true)" class="time_limit_btn">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeLimit",
  data() {
    return {
      timeLimit: 30,
    };
  },
  methods: {
    changeTimeLimit(inc) {
      if (inc) {
        this.timeLimit += 5;
      } else {
        if (this.timeLimit > 5) {
          this.timeLimit -= 5;
        }
      }
      this.$emit("changeTimeLimit", this.timeLimit);
    },
  },
};
</script>

<style scoped>
#time_limit_div {
  margin: 20px auto;
  width: 300px;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.08);
  padding: 10px 0;
}
#time_limit_content_div {
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 7px;
}
.time_limit_btn {
  cursor: pointer;
  width: 50px;
  font-size: 20px;
  font-weight: 600;
  border: none;
  outline: none;
  border-radius: 4px;
  color: white;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.08);
  background-color: #007969;
  margin: 10px;
}
#time_limit {
  font-weight: 600;
  width: 50px;
}
.btn_title {
  color: #444242;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  margin: 0 10px;
}
</style>