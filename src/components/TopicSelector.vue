<template>
    <div id="selector_div">
        <div v-for="topic in topics" :key="topic" id="selector_item">
            <div id="topic_text">{{ topic }}</div>
            <div class="radio_button" @click="selectTopic"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TopicSelector',
        components: {
        },
        data(){
            return {
                topics: ['To understand the most important characteristics of a society, one must study its major cities. Write a response in which you discuss the extent to which you agree or disagree with the statement and explain your reasoning for the position you take. In developing and supporting your position, you should consider ways in which the statement might or might not hold true and explain how these considerations shape your position.',
                'Educational institutions have a responsibility to dissuade students from pursuing fields of study in which they are unlikely to succeed. Write a response in which you discuss the extent to which you agree or disagree with the claim. In developing and supporting your position, be sure to address the most compelling reasons and/or examples that could be used to challenge your position.',
                'Scandals are useful because they focus our attention on problems in ways that no speaker or reformer ever could. Write a response in which you discuss the extent to which you agree or disagree with the claim. In developing and supporting your position, be sure to address the most compelling reasons and/or examples that could be used to challenge your position.'
                ]
            }
        },
        methods: {
            selectTopic(event){
                var radios = document.getElementsByClassName("radio_button");
                radios.forEach(radio => {
                    radio.className = "radio_button";
                });
                event.target.className += " selected"
            }
        }
    }
</script>

<style scoped>

#selector_div {
    background-color: white;
    box-shadow: 0px 20px 30px 0px rgba(0, 0, 0, 0.05);
    width: 100%;
    height: 500px;
    overflow-x: hidden;
    overflow-y: auto;
    border-radius: 7px;
}

#selector_item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    border-top: 1px solid rgb(196, 196, 196);
}
#selector_item:first-child {
    border-top: 0;
}  

#topic_text {
    margin: 0 10px 0 0;
    width: 80%;
}

.radio_button {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: rgb(241, 241, 241);
    position: relative;
    border: 5px solid rgb(241, 241, 241);
    cursor: pointer;
}
.selected {
    background-color: #007969;
}
</style>