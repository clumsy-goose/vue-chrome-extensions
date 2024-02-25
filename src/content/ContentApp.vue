<template>
    <div id="contentView">
        12
    </div>
</template>

<script setup>
import { selectorMessage } from'@/utils/selector'
import {useMessagesStore} from '@/sidePanel/store/messages.js'
const messages = useMessagesStore()
const selectText = ref('');



selectorMessage(selectText.value);
console.log(selectText.value);
watch(selectText,()=>{
    chrome.runtime.sendMessage({
            action: "getSelectText",
            selectText: selectText.value
          },
        );
})


</script>

<style scoped lang="less">
#contentView{
    width: 66px;
    height: 40px;
    border-top-left-radius: 32px;
    border-bottom-left-radius: 32px;
    background-color: #f02525;
    position: fixed;
    z-index: 9999;
    top: 50%;
    right: 0px;
    :hover{
        width: 120px;
        ::after{
            content: '点击打开翻译';
        }
    }
}
#contentView:hover{
    width: 120px;
    background-color: #897373;
    
}
</style>
