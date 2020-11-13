<template>
  <div class="dropdown" ref="dropdownRef">
    <button
      type="button"
      class="btn btn-outline-primary dropdown-toggle"
      data-toggle="dropdown"
      @click.prevent="toogleHidden"
    >
      {{ sayHello }}
    </button>
    <div class="dropdown-menu" :style="{ display: 'block' }" :hidden="isHidden">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch, onMounted, onUnmounted } from "vue";
import useClickOutside from "../hooks/useClickOutside";

export default defineComponent({
  name: "Dropdown",
  props: {
    sayHello: {
      type: String,
      required: true,
    },
  },
  setup() {
    const dropdownRef = ref<null | HTMLElement>(null);
    const isHidden = ref(true);
    const toogleHidden = () => {
      isHidden.value = !isHidden.value;
    };
    const isClickOutside = useClickOutside(dropdownRef);
    watch(isClickOutside, () => {
      if (!isHidden.value && isClickOutside.value) {
        isHidden.value = true;
      }
    });
    return { isHidden, dropdownRef, toogleHidden };
  },
});
</script>

<style>
</style>