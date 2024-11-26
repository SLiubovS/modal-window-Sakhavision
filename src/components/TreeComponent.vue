<script setup lang="ts">
import { ref } from 'vue';
import type { IFolder } from '../models/IFolder';
import type { Ref } from 'vue';
import TreeItemComponent from './TreeItemComponent.vue';

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
        id: 7, name: 'Папка 7', children: [
            { id: 8, name: 'Папка 7.1', children: [] },
            {
                id: 9, name: 'Папка 7.2', children: [
                    { id: 10, name: 'Папка 7.2.1', children: [] }
                ]
            }
        ]
    },
]);

function selectHandler(id: number): void {
    console.log(id);
}

</script>

<template>
    <TreeItemComponent v-for="mockFolder in mockFolders" :key="mockFolder.id" :folder="mockFolder" @select="selectHandler">
    </TreeItemComponent>
</template>

<style scoped>
</style>