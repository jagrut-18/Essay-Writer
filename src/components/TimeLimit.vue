<template>
  <div id="time_limit_div">
    <div id="title_div">
      <div class="btn_title">Set time limit</div>
      <div id="radio_bg_div" @click="toggleTimeLimit">
        <div class="time_limit_radio active"></div>
      </div>
    </div>
    <div id="time_limit_content_div">
      <button @click="changeTimeLimit(false)" class="time_limit_btn">-</button>
      <div id="time_limit">{{timeLimit}} Mins</div>
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
    toggleTimeLimit(event) {
      var radio = event.target.childNodes[0];
      var content_div = document.getElementById("time_limit_content_div");
      if (radio.className.includes("active")) {
        radio.className = radio.className.replace(" active", "");
        content_div.style.display = "none";
        document.getElementById("toolbar_time_limit").style.display = "none";
        this.$emit("changeTimeLimit", 0);
      } else {
        radio.className += " active";
        content_div.style.display = "flex";
        document.getElementById("toolbar_time_limit").style.display = "block";
        this.$emit("changeTimeLimit", this.timeLimit);
      }
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
  max-height: 500px;
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
  display: inline-block;
  white-space: nowrap;
}
#title_div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px 10px 10px;
}
.time_limit_radio {
  width: 20px;
  height: 20px;
  background-color: #959998;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  pointer-events: none;
  position: relative;
  left: 0%;
  transition: left 0.5s ease-in-out;
}
.time_limit_radio.active {
  background-color: #007969;
  left: 50%;
}
#radio_bg_div {
  background-color: #e7e7e7;
  border-radius: 30px;
  width: 40px;
  height: 25px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2px;
}
</style>