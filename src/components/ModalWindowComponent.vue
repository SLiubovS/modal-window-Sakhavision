<script setup lang="ts">
import TreeComponent from './TreeComponent.vue';

defineProps<{
	title: string
}>()

const emit = defineEmits<{
	select: [id: number | null]
	close: []
}>()

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
			<TreeComponent @select="selectHandler">
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
	gap: 298px;

	padding-top: 0;
	padding-left: 1px;
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