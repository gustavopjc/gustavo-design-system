<template>
  <button
    :style="{
      '--btn-bg-color': color,
    }"
    :class="[`variant-${variant}`, `size-${size}`]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GButton",
  props: {
    variant: {
      type: String,
      default: "elevated",
    },
    color: {
      type: String,
      default: "var(--color-primary)",
    },
    size: {
      type: String,
      default: "medium",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isPredefinedColor() {
      return /^(\w+)(-\d{1,3})?$/.test(this.color);
    },
  },
});
</script>
<style scoped lang="scss">
button {
  padding: 0.3rem 1rem;
  border-radius: 0.475rem;
  font-weight: 600;
  color: white;
  background-color: var(--btn-bg-color, var(--color-primary));
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &.variant-outlined {
    background-color: #fff;
    outline: 2px solid var(--btn-bg-color, var(--color-primary));
    color: var(--btn-bg-color, var(--color-primary));

    &:hover {
      background-color: rgb(202, 201, 201);
    }
  }

  &.variant-text {
    background-color: #fff;
    color: var(--btn-bg-color, var(--color-primary));
  }

  &.size-x-small {
    padding: 0.3rem 0.6rem;
    font-size: 12px;
  }

  &.size-small {
    padding: 0.3rem 0.8rem;
    font-size: 14px;
  }

  &.size-medium {
    padding: 0.3rem 1rem;
    font-size: 16px;
  }

  &.size-large {
    padding: 0.3rem 1.2rem;
    font-size: 18px;
  }

  &.size-x-large {
    padding: 0.3rem 1.4rem;
    font-size: 22px;
  }

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.4;
  }
}
</style>
