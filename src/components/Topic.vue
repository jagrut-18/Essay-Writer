<template>
  <div id="topic_container">
    <h3>{{text}}</h3>
    <h3>
      <i>{{question}}</i>
    </h3>
  </div>
</template>

<script>
export default {
  name: "Topic",
  props: {
    text: String,
    question: String,
  },
};
</script>

<style scoped>
#topic_container {
  padding: 10px;
  margin: 20px 0 25px 0;
}
h3 {
  font-size: 16px;
  font-weight: 400;
  white-space: pre-line;
}
</style>