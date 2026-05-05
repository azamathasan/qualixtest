<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  title: string,
  description: string
}>()

const emit = defineEmits(['update:title', 'update:description'])

const localTitle = computed({
  get: () => props.title,
  set: (newValue) => emit('update:title', newValue)
})

const localDescription = computed({
  get: () => props.description,
  set: (newValue) => emit('update:description', newValue)
})

</script>
<template>
    <div class="dialog-input-list">
        <div class="regform-container">
            <div class="regform-box">
                <div class="regform-box__inputs">
                    <div class="regform-box__input">
                        <label>Заголовок </label>
                        <input v-model="localTitle" type="text">
                    </div>
                    <div class="regform-box__input">
                        <label>Описание </label>
                        <input v-model="localDescription" type="text">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">

.regform-box__input {
    display: flex;
    flex-direction: column;
    margin-top: 34px;
}

.regform-box__input>input {
    border: 1px solid #DBE2EA;
    box-sizing: border-box;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
    border-radius: 6px;
    padding: 16px;
}
.regform-box__input>input:focus,
.regform-box__input>input:focus-visible{
    border: 2px solid #0880AE;
}
.regform-box__input>input::placeholder {
    font-size: 16px;
    line-height: 21px;
    color: #7C9CBF;
    opacity: 1;
}
</style>