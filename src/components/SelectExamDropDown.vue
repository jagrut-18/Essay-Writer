<template>
  <div id="main_div">
    <div id="dropdown_header">Select Exam</div>
    <div id="dropdown_exam">
      <button @click="toggleDropDown()" id="dropbtn">
        {{ selectedExam }}
        <div class="arrow_down" id="arr_down"></div>
      </button>

      <div id="exam_dropdown" class="dropdown-content">
        <a class="dropdown_item active" @click="selectExam">GRE</a>
        <a class="dropdown_item" @click="selectExam">GMAT</a>
        <a class="dropdown_item" @click="selectExam">IELTS</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectExamDropDown",
  data() {
    return {
      selectedExam: "GRE",
    };
  },
  methods: {
    toggleDropDown() {
      document.getElementById("exam_dropdown").classList.toggle("show");
    },
    selectExam(event) {
      var dropdown = document.getElementById("exam_dropdown");
      var items = dropdown.childNodes;
      items.forEach((item) => {
        item.className = "dropdown_item";
      });
      event.target.className += " active";
      this.selectedExam = event.target.innerHTML;
      this.$emit("changeExam", this.selectedExam);
      this.toggleDropDown();
    },
  },
};
</script>

<style scoped>
#main_div {
  width: 300px;
  margin: 0 auto;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.08);
  padding: 10px 0;
}
#dropbtn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  width: 300px;
  font-size: 16px;
  font-weight: 500;
  color: #444242;
  cursor: pointer;
  height: 40px;
  border: none;
  outline: none;
  background-size: 300% 100%;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  border-radius: 7px;
  background-color: white;
}
#dropbtn:hover {
  background-position: 100% 0;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

#dropdown_exam {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  width: 100%;
  overflow: auto;
  box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.1);
  z-index: 1;
  border-radius: 6px;
  margin-top: 15px;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
}

.dropdown_item {
  display: block;
  font-size: 13px;
  padding: 13px 5px;
  text-align: left;
  color: #727272;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  border-bottom: 1px solid #e0e2e9;
}
.dropdown_item:hover {
  background-color: rgb(241, 241, 241);
}
.dropdown_item:last-of-type {
  border-bottom: 0;
}
.active {
  font-weight: 700;
}

.dropdown a:hover {
  background-color: rgb(240, 240, 240);
}

.show {
  visibility: visible;
  opacity: 1;
}

.dropdown_title {
  font-size: 12px;
  font-weight: 500;
  color: #727272;
  text-align: left;
}
.arrow_down {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #444242;
}
#dropdown_header {
  color: #444242;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  margin: 0 10px;
}
</style>