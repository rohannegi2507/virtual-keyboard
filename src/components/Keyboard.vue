<template>
  <div class="wrapper">
    <div class="row1">
      <span class="key">1</span>
      <span class="key">2</span>
      <span class="key">3</span>
      <span class="key">4</span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
    </div>
    <div class="row2">
      <span class="key">1</span>
      <span class="key">2</span>
      <span class="key">3</span>
      <span class="key">4</span>
      <span class="key">5</span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
    </div>
    <div class="row3">
      <span class="key">1</span>
      <span class="key">2</span>
      <span class="key">3</span>
      <span class="key">4</span>
      <span class="key">5</span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
    </div>
    <div class="row4">
      <span class="key">1</span>
      <span class="key">2</span>
      <span class="key">3</span>
      <span class="key">4</span>
      <span class="key">5</span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
    </div>
    <div class="row5">
      <span class="key">1</span>
      <span class="key">2</span>
      <span class="key">3</span>
      <span class="key">4</span>
      <span class="key">5</span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
    </div>
    <div class="row6">
      <span class="key">1</span>
      <span class="key">2</span>
      <span class="key">3</span>
      <span class="key">4</span>
      <span class="key">5</span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
      <span class="key"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Keyboard extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: grid;
  grid-gap: 5px;
}
.row1 {
  border: 1px;

  grid-row: 1/2;
  border: 1px solid;
}
.row2 {
  grid-row: 2/3;
  border: 1px solid;
}
.row3 {
  grid-row: 3/4;
  border: 1px solid;
}
.row4 {
  grid-row: 4/5;
  border: 1px solid;
}
.row5 {
  grid-row: 5/6;
  border: 1px solid;
}
.row6 {
  border: 1px solid;
}

.keyboard-box {
  width: 70%;
  height: 40vh;
  padding: 0.5rem;
  background: white;
  display: flex;
  display: column;
  border: 1px dashed black;
}

.two_value {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  padding: 0 5px;
}
</style>
