<template>
    <div class="option">
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
            {{ messages.typeName }}
            <DownIcon></DownIcon>
            </span>

            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item command="baidu">百度翻译</el-dropdown-item>
                <el-dropdown-item command="youdao">有道翻译</el-dropdown-item>
                <el-dropdown-item command="google">谷歌翻译</el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>

    </div>
</template>
<script setup>
import {useMessagesStore} from '@/sidePanel/store/messages.js'
const messages = useMessagesStore()

const handleCommand = (command) => {
    messages.type = command; 
  ElMessage({
    message: "切换为"+messages.typeName,
    type: 'success',
  })
}
</script>
<style lang="less" scope>
.option{
    height: 30px;
    width: 100px;
    padding: 5px 5px 5px 5px;
    border-radius: 16px;
    background-color:var(--vt-c-white-mute);
    line-height:16px;
    border:2px solid var(--them-color);
    text-align: center;
    vertical-align: middle;
}
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  color: var(--them-color);
  font-weight:600;
}    
</style>