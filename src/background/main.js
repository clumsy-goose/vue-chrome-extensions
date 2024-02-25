import { hotReload } from "@/utils/hot_reload"
import {getBaidu} from "@/background/API/baidu.js"
import {BaiDu} from "@/config/index"
import { MD5 } from "@/utils/md5";
console.log('this is background.js')
hotReload();


chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error))

chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
  console.log(request.action)
  if(request.action == 'getBaidu'){
    let query = request.text;
    let salt = (new Date).getTime();
    let str1 = BaiDu.appid + query + salt + BaiDu.key;
    let sign = MD5(str1);
    let prams = {};
    prams['q'] = query;
    prams['appid'] = BaiDu.appid;
    prams['salt'] = salt;
    prams['from'] = 'en';
    prams['to'] = 'zh';
    prams['sign'] = sign;
    getBaidu(BaiDu.url,prams).then(res=>{
      sendResponse(res.trans_result[0].dst)
    })
    return true;
  }
})