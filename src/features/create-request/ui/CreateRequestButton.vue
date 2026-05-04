<script setup lang="ts">
import router from '@/app/router/index.ts';

const handleClick = () => {
    router.push({ path: '/requests/new' })
}
</script>
<template>
    <button @click="handleClick">Создать заявку</button>
</template>
<style scoped lang="scss">
button {
    padding: 12px;
}
</style>