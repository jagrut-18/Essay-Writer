<template>
    <div id="tool_bar_container">
        <div id="tools_container">
            <p id="wordCount">{{wordCount}}</p>
            <div class="divider"></div>
            <p>20:00</p>
            <div class="divider"></div>
            <ChangeFontSizeBar @changeFontSize="changeFontSize" />
            <div class="divider"></div>
        </div>
        <div id="download_container"></div>
    </div>
</template>

<script>
    import ChangeFontSizeBar from './ChangeFontSizeBar.vue';
    export default {
        name: 'ToolBar',
        props: ['wordCount'],
        components: {
            ChangeFontSizeBar,
        },
        methods: {
            changeFontSize(fontSize){
                this.$emit('changeFontSize', fontSize);
            },
        }
    }
</script>

<style scoped>
#tool_bar_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
#tools_container {
    display: flex;
    flex-direction: row;
}
.divider{
    background-color: #c4c4c4;
    height: 100%;
    width: 1px;
}
p {
    font-size: 20px;
    font-weight: 500;
    margin: 15px 30px;
    color: #444242;
}
</style>