<template>
  <div id="topic_options_div">
    <div id="option_header">Topic</div>
    <div @click="selectOption" class="topic_option" id="from_pool_option">
      <div class="radio_btn"></div>
      <div class="option_title">From Pool</div>
    </div>
    <div @click="selectOption" class="topic_option" id="random_option">
      <div class="radio_btn active"></div>
      <div class="option_title">Random</div>
    </div>
    <!-- <div @click="selectOption" class="topic_option" id="none_option">
          <div class="radio_btn"></div>
          <div class="option_title">None</div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "TopicOptions",
  methods: {
    selectOption(event) {
      var radios = document.getElementsByClassName("radio_btn");
      radios.forEach((radio) => {
        radio.className = "radio_btn";
      });
      event.target.firstElementChild.className += " active";
      this.selectedOption = event.target.id.replace("_option", "");
      this.$emit("topicOptionChanged", this.selectedOption);
    },
  },
  data() {
    return {
      selectedOption: "random",
    };
  },
};
</script>

<style scoped>
#topic_options_div {
  margin: 20px auto;
  background-color: white;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #444242;
  font-size: 20px;
  font-weight: 700;
  width: 300px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.08);
  text-align: left;
  padding: 10px 0;
}
#option_header {
  margin: 0 10px;
}

.topic_option {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

.radio_btn {
  width: 20px;
  height: 20px;
  background-color: #0079693a;
  border-radius: 50%;
  margin: 10px;
  cursor: pointer;
  pointer-events: none;
}
.radio_btn.active {
  background-color: #007969;
  box-shadow: 0px 6px 15px 0px #00796979;
}
.option_title {
  color: #444242;
  font-size: 13px;
  font-weight: 500;
  pointer-events: none;
}
</style>