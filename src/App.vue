<template>
  <div id="app">
    <ConfigOverlay @topicChanged="changeSelectedTopic" @selectedExam="changeSelectedExam" />
    <TimeUpOverlay></TimeUpOverlay>
    <!-- <div id="left_div">
      <div id="header">Essayister</div>
    </div>-->
    <div id="right_div">
      <div class="top_bar">
        <div id="header">Essay Writer</div>
        <button @click="writeNew">Write New</button>
      </div>
      <Topic :text="selectedTopicText" :question="selectedTopicQuestion" id="main_topic" />
      <WritingPad />
    </div>
  </div>
</template>

<script>
import Topic from "./components/Topic.vue";
import WritingPad from "./components/WritingPad.vue";
import ConfigOverlay from "./components/ConfigOverlay.vue";
import TimeUpOverlay from "./components/TimeUpOverlay.vue";

export default {
  name: "App",
  data() {
    return {
      selectedExam: "GRE",
      selectedTopicText: "",
      selectedTopicQuestion: "",
    };
  },
  components: {
    Topic,
    WritingPad,
    ConfigOverlay,
    TimeUpOverlay,
  },
  methods: {
    changeSelectedExam(newSelectedExam) {
      this.selectedExam = newSelectedExam;
    },
    changeSelectedTopic(newSelectedTopic) {
      this.selectedTopicText = newSelectedTopic.text;
      this.selectedTopicQuestion = newSelectedTopic.question;
    },
    writeNew() {
      var configDiv = document.getElementById("config_div");
      configDiv.style.display = "flex";
      var closeBtn = document.getElementById("close_btn");
      closeBtn.style.display = "block";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}

body,
html {
  background-color: #f4fff7;
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#left_div {
  float: left;
  width: 25%;
  height: 100vh;
  background-color: white;
}
#right_div {
  margin: auto;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#header {
  font-size: 20;
  font-weight: bold;
  color: #007969;
  margin: 10px 0;
  text-align: left;
}
#header_bar {
  display: flex;
  flex-direction: row;
  justify-content: left;
  border-bottom: 1px solid #e7e7e7;
}
#main_topic {
  border: 0.5px solid #007969;
  border-radius: 7px;
  margin-bottom: 20px;
  padding: 0 10px;
}
.top_bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
}
.top_bar button {
  background-color: #007969;
  color: white;
  border-radius: 7px;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
