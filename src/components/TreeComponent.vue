<script setup lang="ts">
import { ref } from 'vue';
import type { IFolder } from '../models/IFolder';
import type { Ref } from 'vue';
import TreeItem from './TreeItem.vue';

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

</script>

<template>
    <ul>
        <li v-for="mockFolder in mockFolders" :key="mockFolder.id">
            {{ mockFolder.name }}
            <TreeItem :folder="mockFolder">
            </TreeItem>
        </li>
    </ul>
</template>

<style scoped>
</style>