<template>
    <div id="chat-header">
        <div class="title">
            <slot></slot>
        </div>
        
        <SettingsBtn class="settings_btn" @click="handleToSetting"></SettingsBtn>
    </div>
</template>

<script setup>
const handleToSetting = () => {
  // console.log("触发失败");
  // 打开新标签页
  window.open(chrome.runtime.getURL("src/options/index.html"));
};
</script>

<style lang="less" scoped>
    div#chat-header{
        position: relative;
        margin: 2px 2px;
        width: calc(100% - 4px);
        height: 55px;
        background-color:white;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border:2px solid var(--them-color);
        div.title{
            line-height: 55px;
            vertical-align: middle;
            text-align: center;
            font-weight: bold;
            color: #62969d;
        }
        .settings_btn{
            position: absolute;
            top: 20px;
            right: 15px;
        }
    }
</style>