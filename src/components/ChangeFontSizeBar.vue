<template>
    <div id="fontsize_bar">
        <div id="small_text_14" class="fontsize" v-on:click="selectFont('small_text_14')">A</div>
        <div id="medium_text_16" class="fontsize active" v-on:click="selectFont('medium_text_16')">A</div>
        <div id="large_text_20" class="fontsize" v-on:click="selectFont('large_text_20')">A</div>
    </div>
</template>

<script>
    export default {
        name: 'ChangeFontSizeBar',
        methods: {
            selectFont(selectedId){
                var fonts = document.getElementsByClassName('fontsize');
                fonts.forEach(font => {
                    font.className = 'fontsize';
                });
                document.getElementById(selectedId).className += ' active';
                this.$emit('changeFontSize', selectedId.slice(-2));
            },

        }
    }
</script>

<style scoped>
#fontsize_bar {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0px 10px;
}
.active {
    background-color: #d1ffdd;
    border-radius: 5px;
    padding: 10px;
    height: min-content;
    align-self: center;
    cursor: pointer;
}
.fontsize {
    padding: 10px;
    height: min-content;
    align-self: center;
    cursor: pointer;
}
#small_text {
    font-size: 14px;
}
#medium_text {
    font-size: 18px;
}
#large_text {
    font-size: 22px;
}
</style>