<template>
  <div id="app">
    <ConfigOverlay @topicChanged="changeSelectedTopic" @selectedExam="changeSelectedExam" />
    <div id="header_bar">
      <div id="header">Essayister</div>
    </div>
    <div id="left_div"></div>
    <div id="right_div">
      <Topic :topicText="selectedTopic" id="main_topic" />
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
      selectedTopic: "",
    };
  },
  components: {
    Topic,
    WritingPad,
    ConfigOverlay,
  },
  methods: {
    changeSelectedExam(newSelectedExam) {
      console.log(newSelectedExam);
      this.selectedExam = newSelectedExam;
    },
    changeSelectedTopic(newSelectedTopic) {
      console.log(newSelectedTopic);
      console.log(this.selectedExam);
      if (this.selectedExam === "GRE") {
        this.selectedTopic =
          newSelectedTopic.text + " " + newSelectedTopic.question;
      } else {
        this.selectedTopic = newSelectedTopic;
      }
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
}
#right_div {
  float: right;
  width: 70%;
  padding: 20px;
}
#header {
  font-size: 20;
  font-weight: bold;
  color: #007969;
  margin: 10px;
}
#header_bar {
  display: flex;
  flex-direction: row;
  justify-content: left;
  border-bottom: 1px solid #e7e7e7;
}
</style>
