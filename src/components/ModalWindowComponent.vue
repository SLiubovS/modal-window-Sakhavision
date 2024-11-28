<script setup lang="ts">
import { ref, type Ref } from 'vue';
import TreeComponent from './TreeComponent.vue';
import type { IFolder } from '../models/IFolder';

defineProps<{
	title: string
}>()

const emit = defineEmits<{
	select: [id: number | null]
	close: []
}>()

const mockFolders: Ref<Array<IFolder>> = ref([
    {
        id: 1, name: 'Папка 1', children: [
            { id: 2, name: 'Папка 1.1', children: [] },
            {
                id: 3, name: 'Папка 1.2', children: [
                    { id: 4, name: 'Папка 1.2.1', children: [] }
                ]
            }
        ]
    },
    { id: 5, name: 'Папка 2', children: [] },
    {
        id: 6, name: 'Папка 3', children: [
            { id: 7, name: 'Папка 3.1', children: [] },
            {
                id: 8, name: 'Папка 3.2', children: [
                    { id: 9, name: 'Папка 3.2.1', children: [] }
                ]
            }
        ]
    },
]);

let selectedId: number | null = null;

function okModalWindow() {
	emit('select', selectedId);
	emit('close');
}

function closeModalWindow() {
	emit('close');
}

function selectHandler(id: number): void {
	selectedId = id;
}
</script>


<template>
	<div class="modal">

		<h3 class="modal__header">
			{{ title }}
		</h3>

		<div class="modal__body">
			<TreeComponent @select="selectHandler" :folders="mockFolders">
			</TreeComponent>

		</div>
		<div class="modal__footer modal__footer_pozition">
			<button type="button" @click="okModalWindow" class="modal__button modal__button_cursor">
				OK
			</button>
			<button type="button" @click="closeModalWindow" class="modal__button modal__button_cursor">
				Закрыть
			</button>
		</div>
	</div>
</template>

<style scoped>
.modal {
	position: absolute;
	top: 50px;
	left: 37%;
	border: 1px solid gainsboro;
	border-radius: 20px;
	display: grid;
	grid-template-columns: 500px;
	grid-template-rows: 50px 300px 50px;
	gap: 20px;
	z-index: 10;
	background-color: rgb(255, 255, 255);
	box-sizing: border-box;
	overflow: auto;
}

.modal__header {
	display: grid;
	border: 1px solid gainsboro;
	/* border-radius: 20px; */
	padding: 20px;
	margin: 0;
	/* align-items: center; */
	align-content: center;
}

.modal__footer_pozition {
	display: grid;
	grid-template-columns: 100px 100px;
	gap: 258px;
	padding: 0 20px;
	padding-bottom: 20px;
}

.modal__button {
	border: 1px solid gainsboro;
	border-radius: 5px;
}

.modal__button_cursor {
	cursor: pointer;
}
</style>