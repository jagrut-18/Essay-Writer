<template>
  <div id="pad_container">
    <ToolBar v-on:changeFontSize="changeFontSize" v-bind:wordCount="wordCount" />
    <textarea id="text_area" placeholder="Write here" rows="20" @input="textChange"></textarea>
  </div>
</template>

<script>
import ToolBar from "./ToolBar.vue";

export default {
  name: "WritingPad",
  components: {
    ToolBar,
  },
  methods: {
    changeFontSize(fontSize) {
      var textArea = document.getElementById("text_area");
      textArea.style.fontSize = fontSize + "px";
    },
    textChange(event) {
      var text = event.target.value;
      text = text.replace(/(^\s*)|(\s*$)/gi, "");
      text = text.replace(/[ ]{2,}/gi, " ");
      text = text.replace(/\n /, "\n");
      this.wordCount = text.match(/\S+/g).length;
      // this.wordCount = text.split(" ").length;
      if (text == "") {
        this.wordCount = 0;
      }
    },
  },
  data() {
    return {
      wordCount: 0,
    };
  },
};
</script>

<style scoped>
#pad_container {
  background-color: white;
  border-radius: 7px;
  box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.05);
  width: 100%;
  margin: auto;
  overflow-x: hidden;
}
#text_area {
  font-size: 16px;
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
  resize: none;
  background-color: transparent;
  border-radius: 7px;
  padding: 0;
  margin: 10px;
}
</style>