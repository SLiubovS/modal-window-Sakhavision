<script setup lang="ts">
import ModalWindow from './components/ModalWindow.vue';
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
    <button type="button" @click="openModalWindow()">
      Открыть
    </button>
  </div>

  <ModalWindow title="Модальное окно" v-if="openWindow" @close-modal-window="closeModalWindow">
  </ModalWindow>

</template>

<style scoped>
.active {
  background-color: gainsboro;
}
</style>