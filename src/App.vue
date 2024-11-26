<script setup lang="ts">
import ModalWindowComponent from './components/ModalWindowComponent.vue';
import { ref } from 'vue';

const openWindow = ref(false);

function openModalWindow() {
  openWindow.value = true;
}

function closeModalWindow() {
  openWindow.value = false;
}
</script>

<template>
  <div>
    <button type="button" @click="openModalWindow">
      Открыть
    </button>
  </div>

  <ModalWindowComponent title="Модальное окно" v-if="openWindow" @close="closeModalWindow">
  </ModalWindowComponent>

</template>

<style scoped>
.active {
  background-color: gainsboro;
}
</style>