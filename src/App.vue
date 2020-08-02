<template>
  <div id="app">
    <ConfigOverlay @topicChanged="changeSelectedTopic" @selectedExam="changeSelectedExam" />
    <div id="header">Essayister</div>
    <!-- <div id="left_div">
      <div id="header">Essayister</div>
    </div>-->
    <div id="right_div">
      <Topic :text="selectedTopicText" :question="selectedTopicQuestion" id="main_topic" />
      <WritingPad />
    </div>
  </div>
</template>

<script>
import Topic from "./components/Topic.vue";
import WritingPad from "./components/WritingPad.vue";
import ConfigOverlay from "./components/ConfigOverlay.vue";

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
  },
  methods: {
    changeSelectedExam(newSelectedExam) {
      this.selectedExam = newSelectedExam;
    },
    changeSelectedTopic(newSelectedTopic) {
      this.selectedTopicText = newSelectedTopic.text;
      this.selectedTopicQuestion = newSelectedTopic.question;
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
  margin: 10px;
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
</style>
