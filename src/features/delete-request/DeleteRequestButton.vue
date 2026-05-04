<script setup lang="ts">
import { useRequestStore } from '@/entities/request';
import router from '@/app/router/index.ts';

const props = defineProps<{
  id: string
}>()

const requestStore = useRequestStore();


const handleClick = () => {
    requestStore.deleteRequest(Number(props.id))
    router.push({ path: '/requests' })
}
</script>
<template>
    <button @click="handleClick">Удалить</button>
</template>