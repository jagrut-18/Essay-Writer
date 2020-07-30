<template>
  <div id="tool_bar_container">
    <div id="tools_container">
      <p id="wordCount">{{wordCount}}</p>
      <div class="divider"></div>
      <p id="toolbar_time_limit">20:00</p>
      <div class="divider"></div>
      <ChangeFontSizeBar @changeFontSize="changeFontSize" />
      <div class="divider"></div>
    </div>
    <div id="download_container">
      <button id="btn_download">Download</button>
    </div>
  </div>
</template>

<script>
import ChangeFontSizeBar from "./ChangeFontSizeBar.vue";
export default {
  name: "ToolBar",
  props: ["wordCount"],
  components: {
    ChangeFontSizeBar,
  },
  methods: {
    changeFontSize(fontSize) {
      this.$emit("changeFontSize", fontSize);
    },
  },
};
</script>

<style scoped>
#tool_bar_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;
}
#tools_container {
  display: flex;
  flex-direction: row;
  float: left;
  width: 100%;
}
.divider {
  background-color: #c4c4c4;
  height: 100%;
  width: 1px;
}
p {
  font-size: 20px;
  font-weight: 500;
  margin: 15px 30px;
  color: #444242;
  min-width: fit-content;
  width: 50px;
}
#toolbar_time_limit {
  width: 100px;
}
#download_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#btn_download {
  background-color: #007969;
  color: white;
  padding: 7px 20px;
  border: none;
  border-radius: 5px;
  margin: 0 10px;
}
</style>