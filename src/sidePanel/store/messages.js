import { defineStore } from 'pinia'

export const useMessagesStore = defineStore('messages', () => {
  /**
   * 翻译引擎类型  baidu:百度;youdao:有道...
   */
  const type = ref('baidu');

  /**
   * 翻译引擎名称 
   */
  const typeName = computed(()=>{
    if(mode.value){
      return '历史记录';
    }
    if(type.value === 'baidu'){
      return '百度翻译';
    }else if(type.value === 'youdao'){
      return '有道翻译';
    }else if(type.value === 'google'){
      return '谷歌翻译';
    }
  })

  /**
   * 当前模式 false: 对话模式; true: 历史记录模式;
   */
  const mode = ref(false);

  /**
   * 改变模式
   */
  const modeChange = ()=>{
    mode.value = !mode.value;
  }

  /**
   * 消息列表
   */
  const message = ref([]);

  // const doubleCount = computed(() => )
  /**
   * 将单条输入和输出插入消息列表
   * @param {Object} item 单条消息对象{role:"",msg:""} role为输入方式/翻译引擎
   */
  function increment(item) {
    message.value.push(item);
  }
  /**
   * 删除最后一条消息，用于取消划词
   */
  function popMessage() {
    message.value.pop();
  }

  return { type,typeName,message,mode,increment,popMessage,modeChange }
})
