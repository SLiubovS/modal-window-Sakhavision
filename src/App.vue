<script setup lang="ts">
import ModalWindowComponent from './components/ModalWindowComponent.vue';
import { ref } from 'vue';

const openWindow = ref<boolean>(false);
const selectedId = ref<number | null>(null);

function openModalWindow() {
  openWindow.value = true;
}

function closeModalWindow() {
  openWindow.value = false;
}

function selectHandler(id: number | null): void {
  selectedId.value = id;
}
</script>

<template>
  <div>
    <button type="button" @click="openModalWindow">
      Открыть
    </button>
    <div>
      <span>
        {{ selectedId ?? "" }}
      </span>
    </div>
  </div>

  <ModalWindowComponent title="Модальное окно" v-if="openWindow" @close="closeModalWindow" @select="selectHandler">
  </ModalWindowComponent>

</template>

<style scoped>
.active {
  background-color: gainsboro;
}
</style>