<template>
    <div id="chat-input"> 
        <div class="chat-container">
            <div class="setting">
                <OptionBtn></OptionBtn>
                <div class="btn-right">
                    <HistoryBtn class="set-margin" @click="setRoleTest"></HistoryBtn>
                    <SendMessageBtn @click="sendMessage"></SendMessageBtn>
                </div>
            </div>
            <Input v-model="tempMessage"></Input>
        </div>
    </div>
</template>

<script setup>
import {useMessagesStore} from '@/sidePanel/store/messages.js'
const messages = useMessagesStore()
console.log("messages.value",messages.mode)
const tempMessage = ref('')
const sendMessage = ()=>{
    const newMessage = { role: 'user', msg: tempMessage.value };
    if(tempMessage.value != ''){
      messages.increment(newMessage);
    }   
    let dst;
    chrome.runtime.sendMessage({
            action: "getBaidu",
            text: tempMessage.value
          },
          (response) => {
            dst = response;
            const newMessage = { role: messages.type, msg: dst };
            if(dst !==''){
                messages.increment(newMessage);
            }
            tempMessage.value = '';
          }
        );
}

const setRoleTest = ()=>{
    // console.log("messages.value",messages.mode)
    // const newMessage = { role: 'baidu', msg: '测试' };
    // messages.increment(newMessage);
    // console.log(messages.message);
    ElMessageBox.alert('暂时没有精力写了，留个坑，后面有时间再补，思路是再写个页面，点击按钮后切换，本地存储消息队列，每次点击拉取渲染', 'Tip', {
    confirmButtonText: 'OK',
  })
}
</script>

<style lang="less" scoped>
div#chat-input{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.chat-container {
  transition: all 0.3s ease-in-out;
  flex-shrink: 0;
  height: 150px;
  width: calc(100% - 4px);
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: right;
  align-items: center;
  padding: 5px 15px 20px 15px;
  border-radius: 2px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  max-height: 240px;
  border: 1px solid var(--fb-color-border);
  border:2px solid var(--them-color);
}

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
  border-radius: 10px;
}

.setting{
    width:100%;
    display: flex;
    justify-content: space-between;
    padding:5px 0px 5px 0px;
    .btn-right{
        display:flex;
        align-items: center;
        .set-margin {
            margin-right: 15px; 
        }
    }
}
</style>