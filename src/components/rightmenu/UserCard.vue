<template>
  <div class="card" >
    <h1>{{this.$props.user.name}}</h1>
    <h1>{{this.$props.user.surname}}</h1>
    
    <sub-info header="Location" :text='this.$props.user.location' :iconpath="this.$props.user.name + '.png'"></sub-info>
    <sub-info header="Company" :text='this.$props.user.company' :iconpath="this.$props.user.name + '.png'"></sub-info>
    <sub-info header="Website" :text='this.$props.user.website' :iconpath="this.$props.user.name + '.png'"></sub-info>
  </div>
</template>

<script>
import SubInfo from './SubInfo.vue';
export default {
    name: "UserCard",
    components: {
      SubInfo
    },
    props:{
      user: { 
        name:'',
        surname:'',
        email:'',
        phone:'',
        location:'',
        company:'',
        website:'',
        photo:''
      }
    }
}
</script>

<style>
.card{
    float: left;
    display: flex;
    padding: 20px 24px;
    align-items: flex-start;
    gap: 10px;
    flex: 1 0 0;
    align-self: stretch; 

    height: 36%;
    width: 25%;
    border-radius: 12px;
    border: 1px solid var(--gray-light, #D8D9DD);
    background: #FFF;
    margin: 20px;
}

</style>