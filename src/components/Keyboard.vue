<template>
  <div id="kbd" class="keyboard">
    <div class="keyboardRow">
      <button
        class="keyboardKey flex"
        @click="pressed(firstRowSpecialCharacter[0])"
      >
        <span>{{ firstRowSpecialCharacter[0].first }}</span>
        <span>{{ firstRowSpecialCharacter[0].second }}</span>
      </button>
      <button
        v-for="digitChar in digitsCharsObj"
        :key="digitChar.second"
        class="keyboardKey flex"
        @click="pressed(digitChar)"
      >
        <span>{{ digitChar.first }}</span> <span>{{ digitChar.second }}</span>
      </button>
      <button
        class="keyboardKey flex"
        @click="pressed(firstRowSpecialCharacter[1])"
      >
        <span>{{ firstRowSpecialCharacter[1].first }}</span>
        <span>{{ firstRowSpecialCharacter[1].second }}</span>
      </button>
      <button
        class="keyboardKey flex"
        @click="pressed(firstRowSpecialCharacter[2])"
      >
        <span>{{ firstRowSpecialCharacter[2].first }}</span>
        <span>{{ firstRowSpecialCharacter[2].second }}</span>
      </button>
      <button
        class="keyboardKey flex"
        @click="pressed(firstRowSpecialCharacter[3])"
      >
        <span>{{ firstRowSpecialCharacter[3].first }}</span>
        <span>{{ firstRowSpecialCharacter[3].second }}</span>
      </button>

      <button
        id="Backspace"
        class="keyboardKey keyboardKeyBackspace"
        @click="pressed('backspace')"
      >
        <span> <i class="fas fa-arrow-left"></i> Backspace</span>
      </button>
    </div>
    <div class="keyboardRow">
      <Button class="keyboardKey keyboardKeyTab" @click="pressed('tab')"
        ><span>Tab</span></Button
      >
      <Button
        v-for="char in alphaCharsRow1"
        :key="char"
        class="keyboardKey"
        @click="pressed(char)"
        ><span>{{ char }}</span></Button
      >

      <button
        class="keyboardKey flex"
        @click="pressed(secondRowSpecialCharacter[0])"
      >
        <span>{{ secondRowSpecialCharacter[0].first }}</span>
        <span>{{ secondRowSpecialCharacter[0].second }}</span>
      </button>
      <button
        class="keyboardKey flex"
        @click="pressed(secondRowSpecialCharacter[1])"
      >
        <span>{{ secondRowSpecialCharacter[1].first }}</span>
        <span>{{ secondRowSpecialCharacter[1].second }}</span>
      </button>
      <button
        class="keyboardKey keyboardKeyTab flex-end-space"
        @click="pressed(secondRowSpecialCharacter[2])"
      >
        <span>{{ secondRowSpecialCharacter[2].first }}</span>
        <span>{{ secondRowSpecialCharacter[2].second }}</span>
      </button>
    </div>
    <div class="keyboardRow">
      <button
        id="CapsLock"
        :class="{
          greenColor: showCapsSelected,
          keyboardKey: true,
          keyboardKeyCapsLock: true,
        }"
        @click="capsLockEvent()"
      >
        <span> Caps Lock</span>
      </button>
      <button
        v-for="char in alphaCharsRow2"
        :key="char"
        class="keyboardKey"
        @click="pressed(char)"
      >
        <span>{{ char }}</span>
      </button>
      <button
        class="keyboardKey flex"
        @click="pressed(thirdRowSpecialCharacter[0])"
      >
        <span>{{ thirdRowSpecialCharacter[0].first }}</span>
        <span>{{ thirdRowSpecialCharacter[0].second }}</span>
      </button>
      <button
        class="keyboardKey flex"
        @click="pressed(thirdRowSpecialCharacter[1])"
      >
        <span>{{ thirdRowSpecialCharacter[1].first }}</span>
        <span>{{ thirdRowSpecialCharacter[1].second }}</span>
      </button>
      <button class="keyboardKey keyboardKeyEnter" @click="pressed('enter')">
        <span>Enter</span>
      </button>
    </div>
    <div class="keyboardRow">
      <button
        id="ShiftLeft"
        :class="{
          greenColor: showShiftLeftSelected,
          keyboardKey: true,
          keyboardKeyShift: true,

          'flex-start': true,
        }"
        @click="shiftEvent('left')"
      >
        <span> <i class="fas fa-arrow-up"></i> Shift</span>
      </button>

      <Button
        v-for="char in alphaCharsRow3"
        :key="char"
        class="keyboardKey"
        @click="pressed(char)"
        ><span>{{ char }}</span></Button
      >
      <button
        class="keyboardKey flex"
        @click="pressed(fourthRowSpecialCharacter[0])"
      >
        <span>{{ fourthRowSpecialCharacter[0].first }}</span>
        <span>{{ fourthRowSpecialCharacter[0].second }}</span>
      </button>
      <button
        class="keyboardKey flex"
        @click="pressed(fourthRowSpecialCharacter[1])"
      >
        <span>{{ fourthRowSpecialCharacter[1].first }}</span>
        <span>{{ fourthRowSpecialCharacter[1].second }}</span>
      </button>
      <button
        class="keyboardKey flex"
        @click="pressed(fourthRowSpecialCharacter[2])"
      >
        <span>{{ fourthRowSpecialCharacter[2].first }}</span>
        <span>{{ fourthRowSpecialCharacter[2].second }}</span>
      </button>
      <button
        :class="{
          greenColor: showShiftRightSelected,
          keyboardKey: true,
          keyboardKeyShift: true,

          'flex-start': true,
        }"
        @click="shiftEvent('right')"
      >
        <span> <i class="fas fa-arrow-up"></i> Shift</span>
      </button>
    </div>
    <div class="keyboardRow">
      <button class="keyboardKey"><span>Ctrl</span></button>
      <button id="ControlLeft" class="keyboardKey"><span>Fun</span></button>
      <button id="AltLeft" class="keyboardKey">
        <span><i class="fab fa-windows"></i></span>
      </button>
      <button id="MetaLeft" class="keyboardKey keyboardKeyAlt">
        <span>Alt</span>
      </button>
      <button
        id="Space"
        class="keyboardKey keyboardKeySpace"
        @click="pressed('spacebar')"
      >
        <span> Spacebar</span>
      </button>
      <button id="MetaRight" class="keyboardKey keyboardKeyAlt">
        <span>Alt</span>
      </button>
      <button id="AltRight" class="keyboardKey"><span>Ctrl</span></button>
      <button
        id="ArrowLeft"
        class="keyboardKey keyboardArrowKeys keyboardKeyArrowLeft"
        @click="pressed('arrowLeft')"
      >
        <span><i class="fas fa-arrow-left"></i></span>
      </button>
      <button
        id="ArrowUp"
        class="keyboardKey keyboardArrowKeys keyboardKeyArrowUp"
      >
        <span> <i class="fas fa-arrow-up"></i></span>
      </button>
      <button
        id="ArrowDown"
        class="keyboardKey keyboardArrowKeys keyboardKeyArrowDown"
      >
        <span><i class="fas fa-arrow-down"></i></span>
      </button>
      <button
        id="ArrowRight"
        class="keyboardKey keyboardArrowKeys keyboardKeyArrowRight"
        @click="pressed('arrowRight')"
      >
        <span><i class="fas fa-arrow-right"></i></span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  firstRowSpecialCharacter,
  secondRowSpecialCharacter,
  thirdRowSpecialCharacter,
  fourthRowSpecialCharacter,
  digitsCharsObj,
  sides,
} from "./model";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Keyboard extends Vue {
  digitsCharsObj = digitsCharsObj;
  firstRowSpecialCharacter = firstRowSpecialCharacter;
  secondRowSpecialCharacter = secondRowSpecialCharacter;
  thirdRowSpecialCharacter = thirdRowSpecialCharacter;
  fourthRowSpecialCharacter = fourthRowSpecialCharacter;
  alphaCharsRow1: string[] = ["Q", "W", "E", "R", "T", "U", "Y", "I", "O", "P"];
  alphaCharsRow2: string[] = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  alphaCharsRow3: string[] = ["Z", "X", "C", "V", "B", "N", "M"];

  showCapsSelected = false;
  showShiftLeftSelected = false;
  showShiftRightSelected = false;
  showCtrlLeftSelected = false;
  showCtrlRightSelected = false;

  capsLockEvent() {
    this.showCapsSelected = !this.showCapsSelected;
    this.$emit("capsLockPressed", this.showCapsSelected);
  }

  shiftEvent(side: string) {
    if (side === sides.left)
      this.showShiftLeftSelected = !this.showShiftLeftSelected;
    else this.showShiftRightSelected = !this.showShiftRightSelected;
  }

  shuffleAlphabetKeys() {
    this.alphaCharsRow1.sort(() => Math.random() - 0.5);
    this.alphaCharsRow2.sort(() => Math.random() - 0.5);
    this.alphaCharsRow3.sort(() => Math.random() - 0.5);
  }

  pressed(value: any) {
    if (
      (this.showShiftLeftSelected || this.showShiftRightSelected) &&
      typeof value === "object"
    ) {
      this.$emit("keyValue", value.first);
    } else if (typeof value === "object") {
      this.$emit("keyValue", value.second);
    } else {
      this.$emit("keyValue", value);
    }

    ///shuffle keys feature
    if (value.length === 1) {
      this.shuffleAlphabetKeys();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");

.keyboard {
  width: 1550px;
  height: 400px;
  background: white;
  display: grid;
  gap: 2px;
  border-radius: 10px;
  overflow: auto;
}

.keyboardRow {
  display: grid;
  gap: 3px;
  grid-template-columns: repeat(60, 1fr);
  grid-template-rows: 1fr 1fr;
}

.keyboardKey {
  height: 100%;
  width: 100%;
  grid-column: span 4;
  grid-row: span 2;
  border-radius: 6px;
  border: 1px solid black;
  transition: 0.05s background ease-in;
  padding: 5px, 0;
}

.keyboardArrowKeys {
  grid-row: span 1;
}

.keyboardKeyArrowUp {
  grid-row: 1;
  grid-column-end: -5;
}

.keyboardKeyArrowDown {
  grid-column-end: -5;
  grid-row: 2;
}

.keyboardKeyArrowLeft {
  grid-column-end: -9;
  grid-row: 2;
}

.keyboardKeyArrowRight {
  grid-column-end: -1;
  grid-row: 2;
}

.keyboardKeyAlt {
  grid-column: span 5;
}

.keyboardKeyTab {
  grid-column: span 6;
}

.keyboardKeyCapsLock {
  grid-column: span 7;
}

.keyboardKeyBackspace {
  grid-column: span 8;
}

.keyboardKeyEnter {
  grid-column: span 9;
}

.keyboardKeyShift {
  grid-column: span 10;
}

.keyboardKeySpace {
  grid-column: span 22;
}

.two_value {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  padding: 0 5px;
}

span {
  margin: 0;
  padding: 0;
}

.flex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.flex-start {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.flex-end {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.flex-end-space {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

button {
  font-size: 1.5rem;
  padding: 5px, 5px;
  background-color: black;
  color: white;
  cursor: pointer;
  outline-offset: 4px;
}

span {
  display: block;
  color: white;
  transform: translateY(-6px);
}

button:active span {
  transform: translateY(-2px);
}

.greenColor {
  background-color: green;
  color: white;
}
</style>
