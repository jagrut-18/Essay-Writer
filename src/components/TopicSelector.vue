<template>
  <div id="selector_div">
    <div v-if="selectedExam === 'GRE'">
      <div id="tab_bar">
        <div @click="selectTab" id="issue_tab" class="topic_tab selected_tab">Issue</div>
        <div @click="selectTab" id="argument_tab" class="topic_tab">Argument</div>
      </div>
      <div v-if="topicsToShow === 'issue'">
        <div v-for="topic in gre.issues" :key="topic" class="selector_item" @click="selectTopic">
          <div class="topic_text">
            <div>{{ topic.text }}</div>
            <div class="topic_question">{{ topic.question }}</div>
          </div>
          <div class="radio_button"></div>
        </div>
      </div>
      <div v-else>
        <div v-for="topic in gre.arguments" :key="topic" class="selector_item" @click="selectTopic">
          <div class="topic_text">
            <div>{{ topic.text }}</div>
            <div class="topic_question">{{ topic.question }}</div>
          </div>
          <div class="radio_button"></div>
        </div>
      </div>
    </div>
    <div v-else-if="selectedExam === 'GMAT'">
      <div v-for="topic in gmat" :key="topic" class="selector_item" @click="selectTopic">
        <div class="topic_text">
          <div>{{ topic.text }}</div>
          <div class="topic_question">{{ topic.question }}</div>
        </div>
        <div class="radio_button"></div>
      </div>
    </div>
    <div v-else-if="selectedExam === 'IELTS'">
      <div v-for="topic in ielts" :key="topic" class="selector_item" @click="selectTopic">
        <div class="topic_text">
          <div>{{ topic.text }}</div>
          <div class="topic_question">{{ topic.question }}</div>
        </div>
        <div class="radio_button"></div>
      </div>
    </div>
  </div>
</template>

<script>
import argues from "../assets/arguments.json";
import issues from "../assets/issues.json";
import gmat from "../assets/gmat.json";
import ielts from "../assets/ielts.json";
export default {
  name: "TopicSelector",
  props: ["selectedExam"],
  data() {
    return {
      topicsToShow: "issue",
      gre: {
        issues: issues.issues,
        arguments: argues.arguments,
      },
      gmat: gmat.essays,
      ielts: ielts.essays,
    };
  },
  methods: {
    selectTopic(event) {
      var radios = document.getElementsByClassName("radio_button");
      radios.forEach((radio) => {
        radio.className = "radio_button";
      });
      var childNodes = event.target.childNodes;
      childNodes[1].className += " selected";
      var topicChildNodes = childNodes[0].childNodes;
      this.$emit("topicSelected", {
        text: topicChildNodes[0].innerHTML,
        question: topicChildNodes[1].innerHTML,
      });
    },
    selectTab(event) {
      var tabs = document.getElementsByClassName("topic_tab");
      tabs.forEach((tab) => {
        tab.className = "topic_tab";
      });
      event.target.className += " selected_tab";
      if (event.target.id == "issue_tab") {
        this.topicsToShow = "issue";
      } else {
        this.topicsToShow = "argument";
      }
    },
  },
};
</script>

<style scoped>
#selector_div {
  background-color: white;
  box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.05);
  height: 500px;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 7px;
  width: 100%;
}

.selector_item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid rgb(196, 196, 196);
  cursor: pointer;
}
.selector_item:last-child {
  border-bottom: 0;
}
.selector_item:hover {
  background-color: #eeeeee;
}

.topic_text {
  margin: 0 10px 0 0;
  width: 80%;
  pointer-events: none;
  text-align: left;
  white-space: pre-line;
}

.radio_button {
  width: 20px;
  height: 20px;
  background-color: #0079693a;
  border-radius: 50%;
  margin: 10px;
  cursor: pointer;
  pointer-events: none;
}
.radio_button.selected {
  background-color: #007969;
  box-shadow: 0px 6px 15px 0px #00796979;
}
#tab_bar {
  display: flex;
  flex-direction: row;
}
.topic_tab {
  width: 50%;
  padding: 10px 0px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 14px;
  color: lightslategrey;
  cursor: pointer;
}
.topic_tab:first-of-type {
  border-right: 1px solid #e0e0e0;
}
.selected_tab {
  border-bottom: none;
  font-weight: 500;
  color: #444242;
}
.topic_question {
  margin-top: 10px;
  font-style: italic;
}
</style>