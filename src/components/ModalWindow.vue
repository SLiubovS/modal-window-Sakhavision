<script setup lang="ts">
import TreeComponent from './TreeComponent.vue';

defineProps<{
	title: string
}>()

function okModalWindow() {
	emit('closeModalWindow');
	// Генерирует кастомное событие select, передающее идентификатор выбранной папки.

}

const emit = defineEmits(['close-modal-window', 'closeModalWindow']);

function closeModalWindow() {
	emit('closeModalWindow');
}

</script>


<template>
	<div class="container">
		<h3 style="background-color: blanchedalmond;">
			{{ title }}
		</h3>

		<div class="content">
			<TreeComponent>
			</TreeComponent>

		</div>
		<div class="container-btn_pozition">
			<button type="button" @click="okModalWindow">
				OK
			</button>
			<button type="button" @click="closeModalWindow">
				Закрыть
			</button>
		</div>
	</div>
</template>

<style scoped>
.container {
	position: absolute;
	top: 50px;
	left: 37%;
	background-color: gainsboro;
	display: grid;
	grid-template-columns: 500px;
	grid-template-rows: 100px 400px 50px;
	gap: 20px;
	border: 2px solid black;
}

.container-btn_pozition {
	display: grid;
	grid-template-columns: 100px 100px;
	gap: 300px;
}
</style>