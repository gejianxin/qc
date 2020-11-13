<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">QC管理平台</a>
    <Dropdown :sayHello="'你好啊 ${user.name}'">
      <dropdown-item href="#">登录</dropdown-item>
      <dropdown-item href="#">注销</dropdown-item>
    </Dropdown>
  </nav>>
  <div>This is a div element</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { User } from '@/interface'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'

export default defineComponent({
  name: 'Header',
  components: {
    Dropdown,
    DropdownItem,
  },
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  }
});
</script>

<style>

</style>