<template>
  <div id="topic_container">
    <h3>{{topicText}}</h3>
  </div>
</template>

<script>
export default {
  name: "Topic",
  props: {
    topicText: String
  }
};
</script>

<style scoped>
#topic_container {
  border: 0.5px solid #007969;
  border-radius: 7px;
  padding: 10px;
  margin: 0 0 25px 0;
}
h3{
  font-size: 16px;
  font-weight: 400;
}
</style>