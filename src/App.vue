<script setup lang="ts">
import ModalWindowComponent from './components/ModalWindowComponent.vue';
import { ref } from 'vue';

const openWindow = ref<boolean>(false);
const selectedId = ref<number | null>(null);

const backgroundColor = ref<boolean>(false);
const modalMask = ref<string>('modal-mask');

function openModalWindow() {
  openWindow.value = true;
  backgroundColor.value = true;
  selectedId.value = null;
}

function closeModalWindow() {
  openWindow.value = false;
  backgroundColor.value = false;
}

function selectHandler(id: number | null): void {
  selectedId.value = id;
}
</script>

<template>

  <div :class="[backgroundColor ? modalMask : '']">
    <div class="container">
      <button type="button" @click="openModalWindow" class="container__btn-open">
        Открыть
      </button>
      <div class="container__selectId">
        <span v-if="selectedId != null">
          id папки: {{ selectedId ?? "" }}
        </span>
        <span v-else>
          {{ selectedId ?? "" }}
        </span>
      </div>
    </div>
    <Transition>
      <ModalWindowComponent title="Модальное окно" v-if="openWindow" @close="closeModalWindow" @select="selectHandler">
      </ModalWindowComponent>
    </Transition>
  </div>

</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.404);
  display: table;
}

.container {
  z-index: -1;
  position: absolute;
  top: 45%;
  left: 45%;
}

.container__btn-open {
  padding: 0.5em 1.5em;
  font-size: 0.9em;
  text-transform: uppercase;
  border: 1px solid;
  border-radius: 0.4em;
}

.container__selectId {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 20px;
}

/* .container__btn-open,
.container__selectId {
  left: 50%;
 transform: translateX(-50%); 
} */

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>