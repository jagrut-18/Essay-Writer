<template>
  <div id="app">
    <div id="header_bar">
      <p id="header">Essayister</p>
    </div>
    <Topic topicText="To understand the most important characteristics of a society, one must study its major cities. Write a response in which you discuss the extent to which you agree or disagree with the statement and explain your reasoning for the position you take. In developing and supporting your position, you should consider ways in which the statement might or might not hold true and explain how these considerations shape your position." />
    <WritingPad/>
  </div>
</template>

<script>
import Topic from "./components/Topic.vue";
import WritingPad from "./components/WritingPad.vue";

export default {
  name: "App",
  components: {
    Topic,
    WritingPad,
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}

body, html {
  background-color: #F4FFF7;
  margin: 0px 40px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#header {
  font-size: 20;
  font-weight: bold;
  color: #007969;
}
#header_bar {
  display: flex;
  flex-direction: row;
  justify-content: left;
}
</style>
