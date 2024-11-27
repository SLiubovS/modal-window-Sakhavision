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
	<div class="container">
		<h3 style="background-color: blanchedalmond;">
			{{ title }}
		</h3>

		<div class="content">
			<TreeComponent @select="selectHandler">
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
	border: 1px solid gainsboro;
	border-radius: 30px;
	padding: 10px;
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