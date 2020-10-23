<template>
  <div class="dropdown">
    <button type="button" class="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown">{{sayHello}}</button>
    <div class="dropdown-menu" :style="{display: 'block'}" :hidden="isLogin">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import DropdownItem from './DropdownItem.vue';

export default defineComponent({
  name: 'Dropdown',
  props: {
    isLogin: {
      type: Boolean,
      required: true
    },
    sayHello: {
      type: String,
      required: true,
    }
  },
});
</script>

<style>

</style>