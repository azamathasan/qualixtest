<script setup lang="ts">
import { ref } from 'vue';
import type { Request } from '@/entities/request';
import { useRequestStore } from '@/entities/request';
import { storeToRefs } from 'pinia';
import router from '@/app/router/index';
import RequestForm from '@/entities/request/ui/RequestForm.vue';


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
        router.push({
            name: 'request-details',
            params: { id: newId },
            query: { success: 'true' }
        })
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
        <RequestForm v-model:title="editedRequest.title" v-model:description="editedRequest.description"/>
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