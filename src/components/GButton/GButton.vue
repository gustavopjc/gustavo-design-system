<template>
  <button
    :style="{
      '--btn-bg-color': color,
    }"
    :class="[`variant-${variant}`, `size-${size}`]"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <div class="content" :class="{ 'hidden-content': loading }">
      <slot />
    </div>
    <div class="loading" v-if="loading"></div>
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
    loading: {
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
  border-radius: 0.475rem;
  font-weight: 600;
  color: white;
  background-color: var(--btn-bg-color, var(--color-primary));
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    visibility: visible;
    transition: visibility 0.2s ease-in-out;
  }

  .hidden-content {
    visibility: hidden;
  }

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
    padding: 0.4rem 0.6rem;
    font-size: 10px;
  }

  &.size-small {
    padding: 0.4rem 0.8rem;
    font-size: 12px;
  }

  &.size-medium {
    padding: 0.4rem 1rem;
    font-size: 15px;
  }

  &.size-large {
    padding: 0.4rem 1.2rem;
    font-size: 18px;
  }

  &.size-x-large {
    padding: 0.4rem 1.4rem;
    font-size: 22px;
  }

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.4;
  }

  .loading {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border-top-color: transparent;
    box-sizing: border-box;
    animation: rotation 0.8s ease-in-out infinite;
    border-top: 3px solid #fff;
    border-left: 3px solid #fff;
    border-right: 3px solid transparent;
    position: absolute;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
