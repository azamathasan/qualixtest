<script setup lang="ts">
import { computed } from 'vue';
import { useRequestStore } from '@/entities/request';
import DeleteRequestButton from '@/features/delete-request/DeleteRequestButton.vue';
import EditRequestButton from '@/features/edit-request/EditRequestButton.vue';
import RequestDetails from '@/widgets/request-details/ui/RequestDetails.vue';

const props = defineProps<{
  id: string
}>()

const requestStore = useRequestStore();

const currentRequest = computed(() => requestStore.getRequestById(Number(props.id)));

</script>

<template>
    <div v-if="currentRequest" class="container">
        <div class="header">
            <h1>Детальная страница заявки</h1>
        </div>
        <div class="content">
            <RequestDetails :id="id" />
        </div>
        <div class="buttons-container">
              <DeleteRequestButton :id="id" />
              <EditRequestButton :request="currentRequest" />
        </div>
    </div>
    <div v-else>
        <p>Заявка не найдена</p>
    </div>
</template>

<style scoped lang="scss">
*{
    font-family: Arial, Helvetica, sans-serif;
}
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