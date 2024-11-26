<script setup lang="ts">
import { ref } from 'vue';
import type { IFolder } from '../models/IFolder';

const props = defineProps<{
    folder: IFolder
}>()

const emit = defineEmits<{
    select: [id: number]
}>()

const showChild = ref(false);
const isSelected = ref(false);

function openChild(): void {

    if (props.folder.children.length > 0) {
        showChild.value = !showChild.value;
    }
    isSelected.value = true;
    emit('select', props.folder.id);
}

function clearSelect(): void {
    isSelected.value = false;
}

function selectChildHandler(id: number): void  {
    isSelected.value = false;
    emit('select', id);
}

</script>

<template>
    <ul>
        <li>
            <span @click.self="openChild" :class="{ active: isSelected }">
                {{ folder.name }}
            </span>
            <span v-show="showChild">
                <TreeItemComponent v-for="child in folder.children" :key="child.id" :folder="child" @select="selectChildHandler">
                </TreeItemComponent>
            </span>
        </li>
    </ul>
</template>

<style scoped>
.active {
    background-color: yellow;
}
</style>