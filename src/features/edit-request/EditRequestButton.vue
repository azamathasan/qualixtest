<script setup lang="ts">
import type { Request } from '@/entities/request';
import { useRequestStore } from '@/entities/request';
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
        <div class="dialog-input-list">
            <div>
                <span>Заголовок </span>
                <input v-model="editedRequest.title" type="text">
            </div>
            <div>
                <span>Описание </span>
                <input v-model="editedRequest.description" type="text">
            </div>
        </div>
        <button commandfor="my-dialog" command="close">Закрыть</button>
        <button commandfor="my-dialog" command="close" @click="handleSave">Сохранить</button>
    </dialog>
</template>