<script setup lang="ts">
import type { IFolder } from '../models/IFolder';

defineProps<{
    folder: IFolder
}>()

</script>

<template>
    <ul v-for="child in folder.children" :key="child.id">
        <li>
            {{ child.name }}
            <TreeItem :folder="child">
            </TreeItem>
        </li>
    </ul>
</template>