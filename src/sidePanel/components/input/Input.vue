<template>
        <textarea
            v-foucs
            autofocus
            ref="textarea"
            placeholder="Enter 换行"
            spellcheck="false"
            autocomplete="off"
            class="chat-input-text"
            v-model="inputMessage"
            ></textarea>
</template>

<script setup>
const inputMessage = defineModel()
</script>

<style lang="less" scoped>


.chat-input-text {
  resize: none;
  box-sizing: border-box;
  outline: none;
  border-width: 0px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 100px;
  width: 100%;
  color:black;
  background-color: var(--vt-c-white-mute);
  border-radius: 15px;
}

</style>