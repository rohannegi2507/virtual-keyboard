<template>
  <div id="app" class="container">
    <textarea
      readonly
      id="textarea"
      class="input"
      :value="inputData"
      autofocus
      placeholder="Tap on the virtual keyboard to start"
    />
    <button class="reset-btn" @click="input = ''">Reset Textbox</button>
    <Keyboard
      class="keyboard"
      big=""
      @keyValue="updateInput"
      @capsLockPressed="updateCapsLock"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Keyboard from "./components/Keyboard.vue";
import { ArrowKeys } from "./components/model";

@Component({
  components: {
    Keyboard,
  },
})
export default class App extends Vue {
  input = "";
  isCapsLockOn = true;
  textArea: any = document.querySelector("#textarea");

  created() {
    let data: any = localStorage.getItem("textData");
    if (data) {
      this.input = data;
    }
  }

  updateCapsLock(e: boolean) {
    this.isCapsLockOn = !e;
  }

  updateInput(e: any) {
    switch (e) {
      case "backspace":
        this.input = this.input.substring(0, this.input.length - 1);
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
      case ArrowKeys.ArrowLeft:
        this.updateCursorMovement(e);
        break;
      case ArrowKeys.ArrowRight:
        this.updateCursorMovement(e);
        break;
      default:
        this.input +=
          this.isCapsLockOn === true && typeof e === "string"
            ? e.toLowerCase()
            : e;
    }
  }

  get inputData() {
    this.updateCursorMovement();
    localStorage.setItem("textData", this.input);
    return this.input;
  }

  updateCursorMovement(where?: string) {
    let textArea: any = document.querySelector("#textarea");

    if (textArea && textArea.setSelectionRange) {
      textArea.focus();
      if (!where) {
        textArea.setSelectionRange(this.input.length, this.input.length);
      } else if (where === ArrowKeys.ArrowLeft) {
        textArea.setSelectionRange(
          this.input.length,
          textArea.selectionStart - 1
        );
      } else if (where === ArrowKeys.ArrowRight) {
        textArea.setSelectionRange(
          this.input.length,
          textArea.selectionStart + 1
        );
      }
    }
  }
}
</script>

<style>
body {
  background-color: teal;
}
.container {
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: auto;
}

.input {
  min-width: 65%;
  min-height: 30vh;
  padding: 20px;
  font-size: 20px;
}

.keyboard {
  min-width: 30vh;
  min-height: 40vh;
  padding: 0.5vh;
  background: white;
}

.reset-btn {
  font-size: 2vh;
  padding: 0.5rem 2rem;
  background-color: indigo;
  color: white;
}
</style>
