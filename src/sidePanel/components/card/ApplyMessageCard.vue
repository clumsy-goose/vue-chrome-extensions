<template>
    <div>
      <div class="chat-message-bot">
        <div class="chat-message-bubble" >
          <span>{{ sendType }}</span>
          <slot></slot>
        </div>
      </div>
    </div>
  </template>

<script setup>
const props = defineProps(['type']);
const sendType = computed(()=>{
    if(props.type === 'baidu'){
        return "百度翻译";
    }else if(props.type === 'youdao'){
        return '有道翻译';
    }
})
</script>

  <style scoped lang="less">
  
  .chat-message-bubble {
    font-size: 14px;
    padding: 10px;
    word-wrap: break-word;
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    text-align: left;
    display: flex;
    box-shadow: 0 8px 5px #919eab29;
    flex-direction: column;
    max-width: 95%;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
  }
  
  .chat-message-bot .chat-message-bubble {
    background-color: rgb(246, 248, 250); // background-color: rgb(110, 129, 156);
    border-radius: 10px 10px 10px 0px;
    // box-shadow: 0 8px 5px #919eab29;
    width: fit-content;
    max-width: 90%;
  }
  
  .chat-message-bubble--active:hover {
    box-shadow: 2px 2px 2px #14161929; //  box-shadow: 0 5px 2px #14161929;
    // cursor: pointer;
  }
  </style>
  