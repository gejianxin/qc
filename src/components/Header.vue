<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">QC管理平台</a>
    <Dropdown :login="login" :action="'占位符'"></Dropdown>
  </nav>>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from 'vue';
import { User } from '@/interface';
import Dropdown from './Dropdown.vue';

export default defineComponent({
  name: 'Header',
  components: {
    Dropdown,
  },
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
    id: { type: Number },
  },

  setup() {
    const  login = ref(true);
    const  aaa = () => {
      login = !login;
};
    return {login, aaa} ;
  }

});
</script>

<style>

</style>