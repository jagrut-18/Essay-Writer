<template>
  <div id="config_div">
    <div id="header_bar">
      <div id="header">Essayister</div>
    </div>
    <div id="config_divs">
      <div id="default_config_divs">
        <SelectExamDropDown @changeExam="changeExam" />
        <TopicOptions @topicOptionChanged="topicOptionChanged" />
        <TimeLimit />
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
    };
  },
  methods: {
    topicOptionChanged(newTopic) {
      var topicSelector = document.getElementById("topic_selector_div");
      if (newTopic == "from_pool") {
        var screenWidth = window.innerWidth;
        topicSelector.className = "animate_selector";
        topicSelector.style.width = screenWidth * (0.6).toString() + "px";
        topicSelector.style.opacity = "1";
      } else {
        topicSelector.style.width = "0px";
        topicSelector.style.opacity = "0";
      }
    },
    changeExam(newExam) {
      this.selectedExam = newExam;
      this.$emit("selectedExam", this.selectedExam);
    },
    startWriting() {
      var configDiv = document.getElementById("config_div");
      configDiv.style.display = "none";
    },
    topicChanged(newTopic) {
      this.$emit("topicChanged", newTopic);
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