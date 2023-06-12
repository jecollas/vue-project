<script lang="ts">
export default {
  data() {
    return {
      color: 'black',
      colorSelect: 'red',
    }
  },
  methods: {
    colorClick() {
      this.color = this.color === this.colorSelect ? 'black' : this.colorSelect
    }
  }
}
</script>

<template>
  <p :style="{ color }">
    This text should toggle between black and whatever color is selected.
  </p>
  
  <select v-model="colorSelect" multiple>
    <option disabled value="">Please Select Your Color</option>
    <option value="red" @click="colorClick">Red</option>
    <option value="orange" @click="colorClick">Orange</option>
    <option value="gold" @click="colorClick">Yellow</option>
    <option value="green" @click="colorClick">Green</option>
    <option value="blue" @click="colorClick">Blue</option>
    <option value="purple" @click="colorClick">Purple</option>
    <option value="fuchsia" @click="colorClick">Pink</option>
  </select>
  
  <br>
  <p>Selected: {{ colorSelect }}</p>
</template>