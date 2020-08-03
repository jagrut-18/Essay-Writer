<template>
  <div id="tool_bar_container">
    <div id="tools_container">
      <p id="wordCount">{{wordCount}}</p>
      <div class="divider"></div>
      <p id="toolbar_time_limit">30:00</p>
      <div class="divider"></div>
      <ChangeFontSizeBar @changeFontSize="changeFontSize" />
      <div class="divider"></div>
    </div>
    <div id="download_container">
      Download as
      <button class="btn_download" @click="saveDoc">DOC</button>
      <button class="btn_download" @click="savePdf">PDF</button>
    </div>
  </div>
</template>

<script>
import ChangeFontSizeBar from "./ChangeFontSizeBar.vue";
import { Document, Packer, Paragraph, HeadingLevel } from "docx";
import { saveAs } from "file-saver";
var pdfmake = require("pdfmake");
var pdfFonts = require("pdfmake/build/vfs_fonts.js");
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
    savePdf() {
      pdfmake.vfs = pdfFonts.pdfMake.vfs;
      var topicNodes = document.getElementById("main_topic").children;
      var textArea = document.getElementById("text_area");
      var docDefinition = {
        content: [
          { text: topicNodes[0].innerHTML, style: "header" },
          { text: topicNodes[1].firstChild.innerHTML, style: "header" },
          "\n",
          { text: textArea.value, style: "default" },
        ],

        styles: {
          header: {
            color: "#2e74b5",
            italics: true,
            fontSize: 10,
          },
          default: {
            fontSize: 10,
          },
        },
      };
      pdfmake.createPdf(docDefinition).download();
    },
    saveDoc() {
      var topicNodes = document.getElementById("main_topic").children;
      var textArea = document.getElementById("text_area");

      event.preventDefault();
      let doc = new Document();
      doc.addSection({
        children: [
          new Paragraph({
            text: topicNodes[0].innerHTML,
            heading: HeadingLevel.HEADING_4,
          }),
          new Paragraph({
            text: topicNodes[1].firstChild.innerHTML,
            heading: HeadingLevel.HEADING_4,
          }),
          new Paragraph(""),
          new Paragraph(textArea.value),
        ],
      });
      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "Essay.docx");
      });
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
  flex-direction: row;
  align-items: center;
  min-width: fit-content;
  padding: 0 10px;
  font-size: 14px;
}
.btn_download {
  background-color: #007969;
  color: white;
  padding: 7px 10px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}
</style>