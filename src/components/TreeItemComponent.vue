<script setup lang="ts">
import { ref, computed } from 'vue';
import type { IFolder } from '../models/IFolder';

const props = defineProps<{
    folder: IFolder
    selectedId: number | null
}>()

const emit = defineEmits<{
    select: [id: number]
}>()

const isSelected = computed<boolean>(() => {
    return (props.selectedId == props.folder.id);
})

const showChild = ref<boolean>(false);

function openChild(): void {

    if (props.folder.children.length > 0) {
        showChild.value = !showChild.value;
    }
    emit('select', props.folder.id);
}

function selectChildHandler(id: number): void {
    emit('select', id);
}

</script>

<template>
    <ul>
        <li>
            <span @click.self="openChild" :class="{ active: isSelected }"
                class="modal__body-list modal__body-list_cursor">
                {{ folder.name }}, id: {{ folder.id }}
            </span>
            <span v-show="showChild" class="container__list container__list_cursor">
                <TreeItemComponent v-for="child in folder.children" :key="child.id" :folder="child"
                    :selected-id="selectedId" @select="selectChildHandler">
                </TreeItemComponent>
            </span>
        </li>
    </ul>
</template>

<style scoped>
.active {
    color: cornflowerblue;
}

ul {
    list-style: none;
}

ul li:before {
    content: "—";
    position: relative;
    left: -5px;
}

.modal__body-list_cursor {
    cursor: pointer;
}
</style>