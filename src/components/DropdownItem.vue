<template>
    <a href="" class="dropdown-item">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
   name: 'DropdownItem',
})
</script>