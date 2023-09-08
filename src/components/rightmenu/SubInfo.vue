<template>
    <i class="icon" :style="'background: url(assets/userphotos/' + this.$props.iconpath +'), lightgray 50% / cover no-repeat;'"></i>
    <span class="header">{{ this.$props.header }}</span>
    <span class="text">{{ this.$props.text}}</span>
</template>

<script>
export default {
    name: 'SubInfo',
    props: {
        header: '',
        text: '',
        iconpath : '',
    }
}
</script>

<style>
.text {
    color: var(--gray, #5C6672);
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 14px; /* 100% */ 
}
.header {
    color: var(--black, #26303E);
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.icon{
    width: 183.197px;
    height: 122.02px;
    flex-shrink: 0; 
}
</style>