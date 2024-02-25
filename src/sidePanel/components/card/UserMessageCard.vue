<template>
    <div>
        <div class="chat-message-user chat-message">
            <!-- <CardHead v-if="hasHead" role="user"></CardHead> -->
            <div class="chat-message-bubble" >
                <span>{{ sendType }}</span><br>
                <slot></slot>
            </div>
        </div>

    </div>
</template>

<script setup>
const props = defineProps(['type']);
const sendType = computed(()=>{
    console.log(props.type)
    if(props.type === 'user'){
        return "您发送的文本为：";
    }else{
        return '您选中的文本为：';
    }
})
</script>

<style scoped lang="less">
.chat-message-bubble {
    padding: 10px;
    word-wrap: break-word;
    white-space: pre-line;
    word-wrap: break-word;
    word-break: break-all;
    text-align: left;
    margin-right: 10px;
}

.chat-message-bubble {
    border-radius: 10px 10px 0px 10px;
    background-color: rgb(110, 129, 156);
    width: fit-content;
    box-shadow: 0 8px 5px #919eab29;
    color: white;
    max-width: 100%;

}

.chat-message-bubble--active:hover {
    box-shadow: 0 5px 2px #14161929;
    cursor: pointer;
}

.chat-message-user {
    align-items: flex-end;

    &-head {
        margin-right: 15px;
    }
}

.chat-message {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 100%;
}
</style>