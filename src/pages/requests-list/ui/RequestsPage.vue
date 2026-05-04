<script setup lang="ts">
import CreateRequestButton from '@/features/create-request/ui/CreateRequestButton.vue';
import RequestsList from '@/widgets/request-list/ui/RequestsList.vue';


</script>
<template>
    <div class="container">
        <div class="header">
            <h1>Список заявок</h1>
        </div>
        <div class="content">
            <RequestsList />
        </div>
        <div>
             <CreateRequestButton />
        </div>
    </div>
</template>
<style lang="scss">
.container {
    display: flex;
    flex-direction: column;
}
table {
    border-collapse: collapse;
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