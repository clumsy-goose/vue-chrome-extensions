<script setup></script>

<template>
  <div class="container">
    <header>
      <ChatHeader><h2>{{ messages.typeName }}</h2></ChatHeader>
    </header>
    <main ref="chatMessages">
      <ChatList></ChatList>
    </main>
    <footer>
      <ChatInput></ChatInput>
    </footer>
  </div>

</template>

<script setup>
import {useMessagesStore} from '@/sidePanel/store/messages.js'
const messages = useMessagesStore()

</script>

<style lang="less" scoped>
.container{
  font-family: var(--fb-fontfamily);
  // overflow: hidden;
  width: 100%;
  height: 100vh;
  background-color: var(--vt-c-white-mute);
  display: flex;
  flex-direction: column;
  align-items: center;
  header{
    width: 100%;
    height: 55px;
  }
  main{
    position: relative;
    width: 100%;
    height: 50%;
    // overflow: auto;
    flex: 1;
    display: flex;
    flex-direction: row;
  }
  footer{
    width: 100%;
    height: 152px;
  }
}

</style>
