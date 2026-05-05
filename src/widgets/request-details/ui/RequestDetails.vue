<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRequestStore } from '@/entities/request';
import router from '@/app/router';
import Toast from '@/shared/ui/Toast.vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps<{
  id: string
}>()

const requestStore = useRequestStore();

const currentRequest = computed(() => requestStore.getRequestById(Number(props.id)));

const route = useRoute();
const toastRef = ref<InstanceType<typeof Toast> | null>(null);

onMounted(() => {
  if (route.query.success === 'true') {
    toastRef.value?.show();
    
    router.replace({ query: { ...route.query, success: undefined } });
  }
});

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
    <Toast ref="toastRef" />
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