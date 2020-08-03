<template>
  <div id="topic_container">
    <h3>{{text ? text : initText}}</h3>
    <h3>
      <i>{{question ? question : initQuestion}}</i>
    </h3>
  </div>
</template>

<script>
import issues from "../assets/issues.json";
export default {
  name: "Topic",
  props: {
    text: String,
    question: String,
  },
  data() {
    return {
      initText: issues.issues[0].text,
      initQuestion: issues.issues[0].question,
    };
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