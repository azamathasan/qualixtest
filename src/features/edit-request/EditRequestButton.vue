<script setup lang="ts">
import type { Request } from '@/entities/request';
import { useRequestStore } from '@/entities/request';
import RequestForm from '@/entities/request/ui/RequestForm.vue';
import { ref } from 'vue';

const props = defineProps<{
  request: Request
}>()

const requestStore = useRequestStore();

const editedRequest = ref<Request>({ ...props.request })

const handleSave = () => {
    requestStore.updateRequest(editedRequest.value)
}
</script>
<template>
    <button command="show-modal" commandfor="my-dialog">Редактировать заявку</button>

    <dialog id="my-dialog">
        <RequestForm v-model:title="editedRequest.title" v-model:description="editedRequest.description"/>
        <div class="buttons-container">
            <button commandfor="my-dialog" command="close">Закрыть</button>
            <button commandfor="my-dialog" command="close" @click="handleSave">Сохранить</button>
        </div>
    </dialog>
</template>

<style lang="scss">
button {
    padding: 5px;
}

.buttons-container {
    margin-top: 40px;
    display: flex;
    gap: 20px;
}
</style>