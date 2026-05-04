<script setup lang="ts">
import { ref } from 'vue';
import type { Request } from '@/entities/request';
import { useRequestStore } from '@/entities/request';
import { storeToRefs } from 'pinia';
import router from '@/app/router/index.ts';


const requestStore = useRequestStore();

const editedRequest = ref<Request>({
    id: 0,
    title: '',
    description: '',
    createdAt: ''
})

const handleSave = () => {
    if(editedRequest.value.title.length) {
        const newId: number = requestStore.addRequest(editedRequest.value)
        router.push({ name: 'request-details', params: { id: newId } })
    }
    else
        alert('Заполните обязательное поле "Заголовок"')
}

const handleCancel = () => {
    router.push({ path: '/requests' })
}

</script>

<template>
    <div class="create-content">
        <div>
            <span>Заголовок* </span>
            <input v-model="editedRequest.title" type="text">
        </div>
        <div>
            <span>Описание </span>
            <input v-model="editedRequest.description" type="text">
        </div>
    </div>
    <div class="buttons-container">
        <button @click="handleSave">Сохранить</button>
        <button @click="handleCancel">Отмена</button>
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

.create-content {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding-bottom: 25px;
}

.buttons-container {
    display: flex;
    gap: 20px;
}

</style>