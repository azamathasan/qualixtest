<script setup lang="ts">
import { computed } from 'vue';
import { useRequestStore } from '@/entities/request';

const props = defineProps<{
  id: string
}>()

const requestStore = useRequestStore();

const currentRequest = computed(() => requestStore.getRequestById(Number(props.id)));

</script>

<template>
    <table>
        <tbody>
            <tr>
                <td>ID:</td>
                <td>{{ currentRequest?.id }}</td>
            </tr>
            <tr>
                <td>Заголовок:</td>
                <td>{{ currentRequest?.title }}</td>
            </tr>
            <tr>
                <td>Описание:</td>
                <td>{{ currentRequest?.description }}</td>
            </tr>
            <tr>
                <td>Дата создания:</td>
                <td>{{ currentRequest?.createdAt }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped lang="scss">
tr {
    td:first-child {
        font-weight: bold;
    }
}
button {
    padding: 5px;
}
.buttons-container {
    display: flex;
    gap: 20px;
}
</style>