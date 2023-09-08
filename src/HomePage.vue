<template>
  <LeftBar></LeftBar>
  <RightBar></RightBar>
</template>

<script>
import LeftBar from './components/LeftBar.vue'
import RightBar from './components/RightMenu.vue'


export default {
    name: 'HomePage',
    components: {
        LeftBar,
        RightBar,
    }
}
</script>

<style>

</style>