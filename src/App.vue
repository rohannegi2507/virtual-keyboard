<template>
  <div id="app" class="container">
    <textarea
      class="input"
      :value="input"
      autofocus
      placeholder="Tap on the virtual keyboard to start"
    />
    <button class="reset-btn" @click="input = ''">Reset Textbox</button>
    <Keyboard class="keyboard" @keyValue="updateInput" />
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
export default class App extends Vue {
  input = "";
  isCapsLockOn = true;
  updateInput(e: any) {
    switch (e) {
      case "backspace":
        this.input = this.input.substring(0, this.input.length - 1);
        break;
      case "capsLock":
        this.isCapsLockOn = !this.isCapsLockOn;
        break;
      case "spacebar":
        this.input += " ";
        break;
      case "tab":
        this.input += "    ";
        break;
      case "enter":
        this.input += "\n";
        break;
      default:
        this.input +=
          this.isCapsLockOn === true && typeof e === "string"
            ? e.toLowerCase()
            : e;
    }
  }
}
</script>

<style>
.container {
  border: 3px solid black;
  margin: 0;
  background: indianred;
  height: 98vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.input {
  width: 70%;
  margin: 0 auto;
  height: 200px;
  padding: 20px;
  font-size: 20px;
  border: none;
  box-sizing: border-box;
}

.keyboard {
  width: 70%;
  height: 40vh;
  padding: 10px;
  font-size: 20px;
  background: white;
}

.reset-btn {
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  background-color: indigo;
  color: white;
}
</style>
