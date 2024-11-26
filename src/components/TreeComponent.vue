<script setup lang="ts">
import { ref } from 'vue';
import type { IFolder } from '../models/IFolder';
import type { Ref } from 'vue';
import TreeItem from './TreeItem.vue';

const showMockFolder = ref(false);

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

function openChild(mockFolder: IFolder): void {

    if (mockFolder.children.length > 0) {
        
        showMockFolder.value = !showMockFolder.value;
        return;
    }
}
</script>

<template>
    <ul v-for="mockFolder in mockFolders" :key="mockFolder.id" @click="openChild(mockFolder)">
        <li>
            {{ mockFolder.name }}
            <span v-show="showMockFolder">
                <TreeItem :folder="mockFolder">
                </TreeItem>
            </span>
        </li>
    </ul>
</template>

<style scoped>
</style>