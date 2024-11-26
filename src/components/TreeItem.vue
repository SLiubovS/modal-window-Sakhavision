<script setup lang="ts">
import { ref } from 'vue';
import type { IFolder } from '../models/IFolder';

defineProps<{
    folder: IFolder
}>()

const showChild = ref(false);

function openChild(child: IFolder) {

    if (child.children.length > 0) {
        showChild.value = !showChild.value;
    }
}
</script>

<template>
    <ul v-for="child in folder.children" :key="child.id" @click="openChild(child)">
        <li>
            {{ child.name }}
            <span v-show="showChild">
                <TreeItem :folder="child">
                </TreeItem>
            </span>
        </li>
    </ul>
</template>