<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">QC管理平台</a>
    <Dropdown :isOpen="isOpen" @click.prevent="toogleOpen" ref="dropdownRef" :sayHello="'你好啊'">
      <dropdown-item href="#">登录</dropdown-item>
      <dropdown-item href="#">注销</dropdown-item>
    </Dropdown>
  </nav>>
</template>

<script lang="ts">
import { ref, Ref, defineComponent, PropType, watch } from 'vue'
import { User } from '@/interface'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
import useClickOutside from '../hooks/useClickOutside'

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
    id: { type: Number },
  },

  setup() {
    const isOpen = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    const  toogleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const isClickOutside = useClickOutside(dropdownRef)
    watch(isClickOutside, () => {
      if (isOpen && isClickOutside) {
        isOpen.value = false
        console.log('clicked outside')
      } else {
        isOpen.value = true
      }
    })

   return { isOpen, toogleOpen, dropdownRef }
  }

});
</script>

<style>

</style>