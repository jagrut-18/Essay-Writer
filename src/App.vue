<template>
  <div id="app">
    <div id="header_bar">
      <p id="header">Essayister</p>
    </div>
    <Topic topicText="To understand the most important characteristics of a society, one must study its major cities. Write a response in which you discuss the extent to which you agree or disagree with the statement and explain your reasoning for the position you take. In developing and supporting your position, you should consider ways in which the statement might or might not hold true and explain how these considerations shape your position." />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vueebbbbaaae.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Topic from "./components/Topic.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Topic
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
