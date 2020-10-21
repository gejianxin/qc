<template>
  <div class="dropdown">
    <button type="button" class="btn btn-outline-primary dropdown-toggle" @click="toogleOpen" data-toggle="dropdown">{{action}}</button>
  <div>{{i}}</div>
    <div class="dropdown-menu" :style="{display: 'block'}" :hidden="isOpen">
      <a class="dropdown-item" href="#">登录</a>
      <!-- <a v-if="login" class="dropdown-item" href="#">注销</a> -->
      <a class="dropdown-item" href="#">zhuxiao</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, Ref } from 'vue';

export default defineComponent({
  name: 'Dropdown',
  props: {
    login: {
      type: Boolean,
      required: true
    },
    action: {
      type: String,
      required: true,
    }
  },
  setup() {
    let isOpen = ref(false);
    let i = ref(0);
    const toogleOpen = () => {
      isOpen.value = !isOpen.value;
      i.value = i.value+1;
    };
    return { i, isOpen, toogleOpen };
  }

});
</script>

<style>

</style>