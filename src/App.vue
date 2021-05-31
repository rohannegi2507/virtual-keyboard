<template>
  <div id="app" class="container">
    <input
      class="input"
      :value="input"
      @input="onInputChange"
      placeholder="Tap on the virtual keyboard to start"
    />
    <Keyboard class="keyboard" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Keyboard from "./components/Keyboard.vue";

@Component({
  components: {
    Keyboard,
  },
})
export default class App extends Vue {}
</script>

<style>
.container {
  border: 3px solid black;
  margin: 0;
  background: indianred;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.input {
  width: 70%;
  margin: 0 auto;
  height: 100px;
  padding: 20px;
  font-size: 20px;
  border: none;
  box-sizing: border-box;
}

.keyboard {
  width: 70%;
  height: 40vh;
  padding: 20px;
  font-size: 20px;

  background: white;
}
</style>
