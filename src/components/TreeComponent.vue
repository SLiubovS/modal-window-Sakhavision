<script setup lang="ts">
import { ref } from 'vue';
import type { IFolder } from '../models/IFolder';
import type { Ref } from 'vue';
import TreeItemComponent from './TreeItemComponent.vue';

const emit = defineEmits<{
    select: [id: number]
}>();

const selectedId = ref<number | null>(null);

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

function selectHandler(id: number): void {
    selectedId.value = id;
    emit('select', id);
}

</script>

<template>
    <TreeItemComponent v-for="mockFolder in mockFolders" :key="mockFolder.id" :folder="mockFolder"
        :selected-id="selectedId" @select="selectHandler">
    </TreeItemComponent>
</template>

<style scoped></style>