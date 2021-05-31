<template>
  <div id="kbd" class="keyboard">
    <div class="keyboard__row">
      <button id="Backquote" class="keyboard__key">`</button>
      <button
        v-for="digitChar in digitsCharsObj"
        :key="digitChar.digit"
        class="btn keyboard__key"
        @click="pressed(digitChar.digit, isShiftPressed)"
      >
        {{ digitChar.digit }}
      </button>
      <button id="Digit0" class="keyboard__key">0</button>
      <button id="Minus" class="keyboard__key">-</button>
      <button id="Equal" class="keyboard__key">=</button>
      <button
        id="Backspace"
        class="keyboard__key keyboard__key--w2"
        @click="pressed('backspace')"
      >
        Backspace
      </button>
    </div>
    <div class="keyboard__row">
      <Button
        class="keyboard__key keyboard__key--w1-5 btn"
        @click="pressed('tab')"
        >Tab</Button
      >
      <Button
        v-for="char in alphaCharsRow1"
        :key="char"
        class="keyboard__key btn"
        @click="pressed(char)"
        >{{ char }}</Button
      >

      <button class="keyboard__key">[</button>
      <button class="keyboard__key">]</button>
      <button class="keyboard__key keyboard__key--w1-5">\</button>
    </div>
    <div class="keyboard__row">
      <button
        id="CapsLock"
        :class="{
          greenColor: showSelected,
          keyboard__key: true,
          'keyboard__key--w1-75': true,
          btn: true,
        }"
        @click="pressed('capsLock')"
      >
        Caps Lock
      </button>
      <button
        v-for="char in alphaCharsRow2"
        :key="char"
        class="keyboard__key btn"
        @click="pressed(char)"
      >
        {{ char }}
      </button>
      <button class="keyboard__key">;</button>
      <button class="keyboard__key">'</button>
      <button
        class="keyboard__key keyboard__key--w2-25 btn"
        @click="pressed('enter')"
      >
        Enter
      </button>
    </div>
    <div class="keyboard__row">
      <button id="ShiftLeft" class="keyboard__key keyboard__key--w2-75">
        Shift
      </button>

      <Button
        v-for="char in alphaCharsRow3"
        :key="char"
        class="keyboard__key btn"
        @click="pressed(char)"
        >{{ char }}</Button
      >
      <button class="keyboard__key">,</button>
      <button class="keyboard__key">.</button>
      <button class="keyboard__key">/</button>
      <button id="ShiftRight" class="keyboard__key keyboard__key--w2-75">
        Shift
      </button>
    </div>
    <div class="keyboard__row">
      <button class="keyboard__key">Ctrl</button>
      <button id="ControlLeft" class="keyboard__key">Fun</button>
      <button id="AltLeft" class="keyboard__key">Win</button>
      <button id="MetaLeft" class="keyboard__key keyboard__key--w1-25">
        Alt
      </button>
      <button
        id="Space"
        class="keyboard__key keyboard__key--space btn"
        @click="pressed('spacebar')"
      >
        Spacebar
      </button>
      <button id="MetaRight" class="keyboard__key keyboard__key--w1-25">
        Alt
      </button>
      <button id="AltRight" class="keyboard__key">Ctrl</button>
      <button
        id="ArrowLeft"
        class="keyboard__key keyboard__key--h0-5 keyboard__key-arrow-left"
      >
        <i class="fas fa-arrow-left"></i>
      </button>
      <button
        id="ArrowUp"
        class="keyboard__key keyboard__key--h0-5 keyboard__key-arrow-up"
      >
        <i class="fas fa-arrow-up"></i>
      </button>
      <button
        id="ArrowDown"
        class="keyboard__key keyboard__key--h0-5 keyboard__key-arrow-down"
      >
        <i class="fas fa-arrow-down"></i>
      </button>
      <button
        id="ArrowRight"
        class="keyboard__key keyboard__key--h0-5 keyboard__key-arrow-right"
      >
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { KeyType } from "./model";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Keyboard extends Vue {
  @Prop() private msg!: string;

  digitsCharsObj: any;
  showSelected = false;
  alphaCharsRow1: string[] = ["Q", "W", "E", "R", "T", "Y", "I", "O", "P"];
  alphaCharsRow2: string[] = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  alphaCharsRow3: string[] = ["Z", "X", "C", "V", "B", "N", "M"];
  lastRowKeys: string[] = [
    "Ctrl",
    "Com",
    "Alt",
    "Spacebar",
    "<",
    ">",
    "?",
    "Shift",
  ];
  isShiftPressed = true;

  pressed(value: any) {
    if (value === "capsLock") {
      this.showSelected = !this.showSelected;
    }
    this.$emit("keyValue", value);
  }

  created() {
    this.digitsCharsObj = [];
    const digits: any = Array.from({ length: 9 }, (_, i) => i + 1);
    const specialChars: string[] = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
    ];
    digits.forEach((digit: number, index: number) => {
      const char = specialChars[index];
      this.digitsCharsObj.push({ digit, char });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");

button {
  font-size: 1.5rem;
}
.greenColor {
  background-color: green;
  color: white;
}
.keyboard {
  width: 1550px;
  height: 400px;
  background: white;
  display: grid;
  gap: 2px;
}
.keyboard__row {
  display: grid;
  gap: 3px;
  grid-template-columns: repeat(60, 1fr);
  grid-template-rows: 1fr 1fr;
}
.keyboard__key {
  height: 100%;
  width: 100%;
  grid-column: span 4;
  grid-row: span 2;
  border-radius: 3px;
  border: 1px solid gray;
  transition: 0.05s background ease-in;
}

.keyboard__key--h0-5 {
  grid-row: span 1;
}
.keyboard__key-arrow-up {
  grid-row: 1;
  grid-column-end: -5;
}
.keyboard__key-arrow-down {
  grid-column-end: -5;
  grid-row: 2;
}
.keyboard__key-arrow-left {
  grid-column-end: -9;
  grid-row: 2;
}
.keyboard__key-arrow-right {
  grid-column-end: -1;
  grid-row: 2;
}

.keyboard__key--w1-25 {
  grid-column: span 5;
}

.keyboard__key--w1-5 {
  grid-column: span 7;
}

.keyboard__key--w1-75 {
  grid-column: span 7;
}

.keyboard__key--w2 {
  grid-column: span 8;
}

.keyboard__key--w2-25 {
  grid-column: span 9;
}

.keyboard__key--w2-75 {
  grid-column: span 10;
}

.keyboard__key--space {
  grid-column: span 22;
}

.keyboard__key--pressed {
  background: lightblue;
}

.two_value {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  padding: 0 5px;
}
</style>
