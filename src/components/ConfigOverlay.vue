<template>
  <div id="config_div">
    <div id="config_divs">
      <div id="default_config_divs">
        <SelectExamDropDown @changeExam="changeExam" />
        <TopicOptions @topicOptionChanged="topicOptionChanged" />
        <TimeLimit @changeTimeLimit="changeTimeLimit" />
        <button @click="startWriting" id="write_btn">Start Writing</button>
      </div>
      <div id="topic_selector_div">
        <TopicSelector v-bind:selectedExam="selectedExam" @topicSelected="topicChanged" />
      </div>
    </div>
  </div>
</template>

<script>
import SelectExamDropDown from "./SelectExamDropDown.vue";
import TopicOptions from "./TopicOptions.vue";
import TimeLimit from "./TimeLimit.vue";
import TopicSelector from "./TopicSelector.vue";
export default {
  name: "ConfigOverlay",
  components: {
    SelectExamDropDown,
    TopicOptions,
    TimeLimit,
    TopicSelector,
  },
  data() {
    return {
      selectedExam: "GRE",
      timeLimit: 30,
    };
  },
  methods: {
    topicOptionChanged(newOption) {
      var topicSelector = document.getElementById("topic_selector_div");
      topicSelector.style.width = "0px";
      topicSelector.style.opacity = "0";
      document.getElementById("main_topic").style.display = "block";
      if (newOption == "from_pool") {
        var screenWidth = window.innerWidth;
        topicSelector.className = "animate_selector";
        topicSelector.style.width = screenWidth * (0.6).toString() + "px";
        topicSelector.style.opacity = "1";
      } else if (newOption === "random") {
        console.log(newOption);
      } else if (newOption === "none") {
        document.getElementById("main_topic").style.display = "none";
      }
    },
    changeExam(newExam) {
      this.selectedExam = newExam;
      this.$emit("selectedExam", this.selectedExam);
    },
    startWriting() {
      var configDiv = document.getElementById("config_div");
      configDiv.style.display = "none";
      if (this.timeLimit > 0) {
        var current_time = Date.parse(new Date());
        var deadline = new Date(current_time + this.timeLimit * 60 * 1000);
        this.run_clock("toolbar_time_limit", deadline);
      }
    },
    topicChanged(newTopic) {
      this.$emit("topicChanged", newTopic);
    },
    changeTimeLimit(newTimeLimit) {
      this.timeLimit = newTimeLimit;
    },
    time_remaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    },
    run_clock(id, endtime) {
      var self = this;
      var clock = document.getElementById(id);
      function update_clock() {
        var t = self.time_remaining(endtime);
        clock.innerHTML =
          t.minutes + " : " + String(t.seconds).padStart(2, "0");
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
      update_clock();
      var timeinterval = setInterval(update_clock, 1000);
    },
  },
};
</script>

<style scoped>
#config_div {
  display: flex;
  flex-direction: column;
  background-color: #f4fff7;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
#config_divs {
  margin: auto;
  min-width: min-content;
  display: flex;
  flex-direction: row;
}
#default_config_divs {
  margin-right: 5%;
}
#write_btn {
  color: white;
  font-size: 14px;
  font-weight: 500;
  width: 300px;
  height: 40px;
  text-align: center;
  background-color: #007969;
  border-radius: 7px;
  border: none;
  outline: none;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}
#topic_selector_div {
  width: 0;
  min-width: 60%;
  opacity: 0;
}
.animate_selector {
  animation: slide-in 0.7s ease-in-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateX(60%);
  }
  to {
    transform: translateX(0);
  }
}
</style>