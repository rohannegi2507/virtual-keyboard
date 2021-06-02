<template>
  <div id="app" class="container">
    <textarea
      id="textarea"
      class="input"
      :value="inputData"
      autofocus
      placeholder="Tap on the virtual keyboard to start"
    />
    <button class="reset-btn" @click="input = ''">Reset Textbox</button>
    <span class="label"
      >Please select number for rows for keyboard:
      <select class="selectTag" v-model="selectedNumOfRow">
        <option v-for="row in numOfRows" :key="row">{{ row }}</option>
      </select>
    </span>

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

@Component({
  components: {
    Keyboard,
  },
})
export default class App extends Vue {
  input = "";
  numOfRows = [5, 4, 3, 2, 1];
  isCapsLockOn = true;
  selectedNumOfRow = 5;
  moveLeft = 0;
  moveRight = 0;

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
      case "arrowLeft":
        this.arrowMovement(e);
        break;
      case "arrowRight":
        this.arrowMovement(e);
        break;
      default:
        this.input +=
          this.isCapsLockOn === true && typeof e === "string"
            ? e.toLowerCase()
            : e;
    }
  }

  get inputData() {
    let len = this.input.length;
    this.arrowMovement();
    localStorage.setItem("textData", this.input);
    return this.input;
  }
  get move() {
    return this.input.length;
  }

  set move(data: number) {
    let datacheck: number = data;
  }
  arrowMovement(where?: string) {
    let textArea: any = document.querySelector("#textarea");

    if (textArea && textArea.setSelectionRange) {
      textArea.focus();

      if (where === "arrowLeft") {
        this.move--;
      } else {
        this.move++;
      }
      textArea.setSelectionRange(this.input.length, this.move);
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
  width: 70%;
  margin: 0 auto;
  height: 200px;
  padding: 20px;
  font-size: 20px;
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

.label {
  color: white;
  font-size: 2rem;
}

.selectTag {
  display: inline;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
}
</style>
