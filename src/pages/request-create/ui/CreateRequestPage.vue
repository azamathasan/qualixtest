<script setup lang="ts">
import { useRequestStore } from '@/entities/request';
import RequestCreate from '@/widgets/request-create/RequestCreate.vue';

const requestStore = useRequestStore();

</script>

<template>
    <div class="container">
        <div class="header">
            <h1>Создание заявки</h1>
        </div>
        <div class="content">
            <RequestCreate />
        </div>
    </div>
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