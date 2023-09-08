<template>
  <div class="leftbar">
    <CustomButton v-if="this.$route.name=='HomePage'" :buttonText="`Users`" icon="IconUsers"></CustomButton>
    <CustomButton v-if="this.$route.name=='UserPage'" :buttonText="`Todos`" icon="IconCheckupList"></CustomButton>
    <CustomButton v-if="this.$route.name=='UserPage'" :buttonText="`Posts`" icon="IconNotebook" ></CustomButton>
    <CustomButton v-if="this.$route.name=='UserPage'" :buttonText="`Albums`" icon="IconPhotoHeart"></CustomButton>
  </div>
</template>

<script>
import CustomButton from './leftbar/CustomButton.vue';
export default {
    name: 'LeftBar',
    components:{
        CustomButton
    },
    data(){
      return {
        openedpage: 'home'
      }
    }
}
</script>

<style scoped>
.leftbar{
    border-right: 1px solid var(--gray-light, #D8D9DD);
    background: #F5F5F5; 
    min-width: 260px;
    width: 18%;

    display: inline-flex;
    min-height: 1024px;
    padding: 32px 0px;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0; 
}

</style>