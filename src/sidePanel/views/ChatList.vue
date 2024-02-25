<template>
    <div id="chat-list" ref="chatMessages">
        <div v-for="item in messages.message">
            <component :is="getComponentType(item.role)" :type="item.role">
                {{ item.msg }}
            </component>
        </div>
    </div>
</template>

<script setup>
import UserMessageCard from '@/sidePanel/components/card/UserMessageCard.vue'
import ApplyMessageCard from '@/sidePanel/components/card/ApplyMessageCard.vue'
import {useMessagesStore} from '@/sidePanel/store/messages.js'
import { checkboxGroupEmits } from 'element-plus';
const messages = useMessagesStore()
/**
 * 根据对话框类型渲染对话框
 */
const getComponentType = (role) => {
  switch (role) {
    case "user":
    case "selector":
      return UserMessageCard;
    case "baidu":
    case "youdao":
      return ApplyMessageCard;
    default:
      return null;
  }
}


onUpdated(()=>{
    scrollToBottom();
})

onMounted(() => {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
  console.log("request.action",request.action)
  if(request.action == 'getSelectText'){
    console.log("selectText",request.selectText)
  }
})
})

const chatMessages = ref(null);
// nextTick(() => {
//     scrollToBottom();
// });

const scrollToBottom = () => {
    chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
}



</script>

<style lang="less" scoped>
#chat-list{
  margin: 0 2px;
  width: calc(100% - 4px);
    border:2px solid var(--them-color);
    border-bottom: none;
    border-top: none;
    flex: 1;
    overflow: auto;
}
</style>