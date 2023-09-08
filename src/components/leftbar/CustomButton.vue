<template>
    <span class="button">
        <div class="rect"></div>
        <IconUsers v-if="this.$props.icon == 'IconUsers'" style="width: 24px;height: 24px; color: purple; margin-left: 32px;"></IconUsers>
        <IconCheckupList v-else-if="this.$props.icon == 'IconCheckupList'" style="width: 24px;height: 24px; color: purple; margin-left: 32px;"></IconCheckupList>
        <IconNotebook v-else-if="this.$props.icon == 'IconNotebook'" style="width: 24px;height: 24px; color: purple; margin-left: 32px;"></IconNotebook>
        <IconPhotoHeart v-else-if="this.$props.icon == 'IconPhotoHeart'" style="width: 24px;height: 24px; color: purple; margin-left: 32px;"></IconPhotoHeart>
        <span>{{this.$props.buttonText}}</span>
    </span>
</template>

<script>
import { IconUsers, IconCheckupList , IconNotebook, IconPhotoHeart  } from '@tabler/icons-vue';

export default {
    name:'UsersButton',
    components: {
    IconUsers,
    IconCheckupList,
    IconNotebook,
    IconPhotoHeart
},
    props:{
        buttonText:"",
        icon:''
    }

}
</script>

<style scoped>
.button {
    display: flex;
    width: 100%;
    min-width: 260px;
    min-height: 40px;
    align-items: center;
    gap: 32px;
    background: #FFF;
}
.rect {
    width: 6px;
    height: 40px;
    flex-shrink: 0; 
    border-radius: 0px 6px 6px 0px;
background: var(--purple, #4F359B); 
}

</style>