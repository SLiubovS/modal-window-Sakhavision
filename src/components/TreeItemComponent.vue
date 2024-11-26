<script setup lang="ts">
import { ref } from 'vue';
import type { IFolder } from '../models/IFolder';

const props = defineProps<{
    folder: IFolder
}>()

const showChild = ref(false);

function openChild(): void {

    if (props.folder.children.length > 0) {
        showChild.value = !showChild.value;
    }
}

</script>

<template>
<ul>
    <li @click.self="openChild">
        {{ folder.name }}
        <span v-show="showChild">
            <TreeItemComponent v-for="child in folder.children" :key="child.id" :folder="child">
            </TreeItemComponent>
        </span>
    </li>
</ul>
</template>