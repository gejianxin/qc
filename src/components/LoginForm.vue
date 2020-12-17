<template>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        v-model="emailRef.val" @blur="validateEmail">
      <small id="emailHelp" class="form-text text-muted" v-if="emailRef.error">{{ emailRef.message }}</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  Ref
} from 'vue'

const emailReg = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');

export default defineComponent({
  setup() {
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateEmail = () => {
      if (emailRef.val.trim() == '') {
        emailRef.error = true
        emailRef.message = 'can not be empty'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = 'wrong email'
      }
    }
    return {
      emailRef,
      validateEmail
    }
  }
})
</script>