<template>
    <LeftBar></LeftBar>
    <RightBar></RightBar>
</template>

<script>
import LeftBar from './components/LeftBar.vue'
import RightBar from './components/RightMenu.vue'

export default {
    name:"UserPage",
    components: {
        LeftBar,
        RightBar,
    }
}
</script>

<style scoped>

</style>