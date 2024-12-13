<template>
 <v-btn :color="color">text</v-btn>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
 name: 'GButton',
 props: {
  color: {
   type: String,
   default: '#00ffff'
  }
 },
})
</script>