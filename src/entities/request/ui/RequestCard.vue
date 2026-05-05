<script setup lang="ts">
import router from '@/app/router/index';
import type { Request } from '../model/types';

interface Props {
    data: Request
}

const props = defineProps<Props>();

const handleClick = () => {
    router.push({ name: 'request-details', params: { id: props.data.id } })
}

</script>

<template>
    <tr @click="handleClick">
        <td>{{ data.title }}</td>
        <td>{{ data.createdAt }}</td>
    </tr>
</template>