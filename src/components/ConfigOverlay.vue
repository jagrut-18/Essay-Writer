<template>
    <div id="config_div">
        <div id="header_bar">
      <div id="header">Essayister</div>
    </div>
    <div id="config_divs">
        <SelectExamDropDown/>
        <TopicOptions/>
        <TimeLimit/>
        <button id="write_btn">Start Writing</button>
    </div>
    </div>
</template>

<script>
    import SelectExamDropDown from './SelectExamDropDown.vue';
    import TopicOptions from './TopicOptions.vue';
    import TimeLimit from './TimeLimit.vue';
    export default {
        name: 'ConfigOverlay',
        components: {
            SelectExamDropDown,
            TopicOptions,
            TimeLimit
        },
    }
</script>

<style scoped>
#config_div {
    display: flex;
    flex-direction: column;
    background-color: #F4FFF7;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
}
#config_divs {
    margin: auto;
}
#write_btn {
    color: white;
    font-size: 14px;
    font-weight: 500;
    width: 300px;
    height: 40px;
    text-align: center;
    background-color: #007969;
    border-radius: 7px;
    border: none;
    outline: none;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.08);
    cursor: pointer;
}




</style>