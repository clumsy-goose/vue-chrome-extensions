import {get} from './request'

const getBaidu = (url,params)=>{
    return get(url,params);
}

export{getBaidu}