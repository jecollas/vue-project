<script lang="ts">
import ColorSelect from './components/ColorSelect.vue'

export default {
  components: {
    ColorSelect
  }
}
</script>

<template>
  <h1>Test Project</h1>
  <p>Select a color from the menu to change the below text.</p>
  
  <ColorSelect />
  <!-- <br> -->
  <!-- <ColorSelect /> -->
</template>

<style>

h1 {
  text-decoration: underline;
}

</style>