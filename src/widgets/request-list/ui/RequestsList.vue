<script setup lang="ts">
import { storeToRefs } from 'pinia';
import RequestCard from '@/entities/request/ui/RequestCard.vue';
import { useRequestStore } from '@/entities/request';

const requestStore = useRequestStore();
const { requests } = storeToRefs(requestStore);


</script>
<template>
    <div v-if="requests.length">
        <table>
            <thead>
                <tr>
                    <td>Заголовок</td>
                    <td>Дата создания</td>
                </tr>
            </thead>
            <tbody>
                <RequestCard
                v-for="item in requests"
                :key="item.id"
                :data="item"
                ></RequestCard>
            </tbody>
        </table>
    </div>
    <div v-else>
        <span>Нет данных</span>
    </div>
</template>
<style lang="scss">
.container {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
}
table {
    border-collapse: collapse;
    thead {
        td {
            font-weight: bold;
        }
    }
}
tbody {
    tr {
        &:hover {
            cursor: pointer;
            background-color: gray;
        }
    }
}
td {
    text-align: left;
	padding: 10px;
}
 th {
  text-align: center;
  padding: 10px;
 }
</style>