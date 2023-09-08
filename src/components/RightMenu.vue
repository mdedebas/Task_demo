<template>
  <div class="rightbar">
    <h2>All Users</h2>
    
      <UserCard v-for="user in users" :key="user.name" :user="user" @click="openUserPage()"></UserCard>
    
    
  </div>
</template>


<script>
import UserCard from './rightmenu/UserCard.vue'

export default {
    name: 'RightBar',
    components:{
      UserCard
    },
    data() {
      return {
        users: [
          {
            name:'Jane',
            surname:'Doe',
            email: 'jane@lorem.com',
            phone: '+90 555 678 12 23',
            location:'Timko sokak no:2 Yeni Mahalle / Ankara',
            company:"Timko sokak no:2 Yeni Mahalle / Ankara",
            website: 'jane.doe.com',
            photo: 'jane.png'
          },
          {
            name:'Jhon',
            surname:'Doe',
            email: 'jane@lorem.com',
            phone: '+90 555 678 12 23',
            location:'Timko sokak no:2 Yeni Mahalle / Ankara',
            company:"Timko sokak no:2 Yeni Mahalle / Ankara",
            website: 'jhon.doe.com',
            photo: 'jhon.png'
          },
          {
            name:'Nazli',
            surname:'Uysal',
            email: 'jane@lorem.com',
            phone: '+90 555 678 12 23',
            location:'Timko sokak no:2 Yeni Mahalle / Ankara',
            company:"Timko sokak no:2 Yeni Mahalle / Ankara",
            website: 'nazli.doe.com',
            photo: 'nazli.png'
          },
        ]
      }
    },
    methods: {
      openUserPage() {
        this.$router.push('/userpage');
      }
    }
}
</script>


<style scoped>
.rightbar{
    height: 1024px;
    background: #FFF;
    min-width: 1180px;  
    width: 82%;
}

</style>
