<script setup lang="ts">
import { ref } from 'vue';

const isVisible = ref(false);

const show = () => {
  if (isVisible.value) return;
  
  isVisible.value = true;
  
  setTimeout(() => {
    isVisible.value = false;
  }, 2000);
};

defineExpose({ show });

</script>
<template>
    <Transition name="toast-fade">
        <div v-if="isVisible" class="snackbar">
            <slot>Успешно!</slot> 
        </div>
  </Transition>
</template>

<style lang="scss">
.snackbar {
  position: fixed;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  
  min-width: 250px;
  padding: 16px;
  border-radius: 8px;
  
  background-color: #333;
  color: #fff;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 9999;
}

.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: all 0.4s ease;
}

.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}
</style>