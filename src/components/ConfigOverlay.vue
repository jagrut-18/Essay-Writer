<template>
  <div id="config_div">
    <div id="config_divs">
      <div id="default_config_divs">
        <SelectExamDropDown @changeExam="changeExam" />
        <TopicOptions @topicOptionChanged="topicOptionChanged" />
        <TimeLimit @changeTimeLimit="changeTimeLimit" />
        <button @click="startWriting" id="write_btn">Start Writing</button>
        <div class="footnote">* After clicking this button, the timer will start automatically.</div>
        <div id="close_btn" @click="closeOverlay">Close</div>
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
import issues from "../assets/issues.json";
import argues from "../assets/arguments.json";
import gmat from "../assets/gmat.json";
import ielts from "../assets/ielts.json";
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
      selectedTopicOption: "random",
      timeLimit: 30,
      timeinterval: null,
    };
  },
  methods: {
    topicOptionChanged(newOption) {
      this.selectedTopicOption = newOption;
      var topicSelector = document.getElementById("topic_selector_div");
      topicSelector.style.width = "0px";
      topicSelector.style.opacity = "0";
      document.getElementById("main_topic").style.display = "block";
      if (newOption == "from_pool") {
        var screenWidth = window.innerWidth;
        topicSelector.className = "animate_selector";
        topicSelector.style.minWidth = "60%";
        topicSelector.style.width = screenWidth * (0.6).toString() + "px";
        topicSelector.style.opacity = "1";
      }
    },
    closeOverlay() {
      var configDiv = document.getElementById("config_div");
      configDiv.style.display = "none";
    },
    changeExam(newExam) {
      this.selectedExam = newExam;
      this.$emit("selectedExam", this.selectedExam);
    },
    startWriting() {
      if (this.selectedTopicOption == "random") {
        if (this.selectedExam === "GRE") {
          var fullGre = issues.issues.concat(argues.arguments);
          var randomGRE = Math.floor(Math.random() * fullGre.length);
          this.topicChanged(fullGre[randomGRE]);
        } else if (this.selectedExam === "GMAT") {
          var randomGMAT = Math.floor(Math.random() * gmat.essays.length);
          this.topicChanged(gmat.essays[randomGMAT]);
        } else if (this.selectedExam === "IELTS") {
          var randomIELTS = Math.floor(Math.random() * ielts.essays.length);
          this.topicChanged(ielts.essays[randomIELTS]);
        }
      }

      var configDiv = document.getElementById("config_div");
      configDiv.style.display = "none";
      if (this.timeLimit > 0) {
        clearInterval(this.timeinterval);
        this.timeinterval = null;
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
          clearInterval(self.timeinterval);
          this.timeinterval = null;
          document.getElementById("popup1").className += " show";
        }
      }
      update_clock();
      this.timeinterval = setInterval(update_clock, 1000);
    },
  },
};
</script>

<style scoped>
#config_div {
  display: flex;
  flex-direction: column;
  background-color: #00000062;
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
  background-color: #f4fff7;
  padding: 50px;
  border-radius: 10px;
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

.footnote {
  margin-top: 10px;
  font-size: 10px;
}

#close_btn {
  display: none;
  margin-top: 10px;
  cursor: pointer;
}
#close_btn:hover {
  color: red;
}
</style>