<script setup lang="ts">
import { ref } from 'vue'
import type { IFolder } from '../models/IFolder'
import type { Ref } from 'vue'

defineProps({
	title: String
})

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
]);

function okModalWindow() {
	alert('ok');
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
			Дерево папок 
			<ul v-for="mockFolder in mockFolders" :key="mockFolder.id">
				<li>
					{{ mockFolder.name }}
					<ul v-for="children in mockFolder.children" :key="children.id">
						<li>
							{{ children.name }}
						</li>
					</ul>
				</li>
				</ul>
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