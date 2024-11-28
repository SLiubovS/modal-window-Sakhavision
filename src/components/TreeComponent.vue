<script setup lang="ts">
import { ref } from 'vue';
import type { IFolder } from '../models/IFolder';
import TreeItemComponent from './TreeItemComponent.vue';

defineProps<{
    folders: Array<IFolder>
}>();

const emit = defineEmits<{
    select: [id: number]
}>();

const selectedId = ref<number | null>(null);

function selectHandler(id: number): void {
    selectedId.value = id;
    emit('select', id);
}

</script>

<template>
    <TreeItemComponent v-for="folder in folders" :key="folder.id" :folder="folder" :selected-id="selectedId"
        @select="selectHandler">
    </TreeItemComponent>
</template>

<style scoped></style>