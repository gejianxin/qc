<template>
  <Header :user="user"></Header>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import LoginForm from './components/LoginForm.vue'
import { User } from './interface';

const user = {
  isLogin: true,
  name: 'garden',
  cell: 138,
  department: '综合部'
 }

export default defineComponent({
  name: 'App',
  components: {
    Header,
    LoginForm
  }
});
</script>

