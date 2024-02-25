/**
 * 自定义vite插件，实现热重载
 * @module buildNotifier
 */
import { WebSocketServer } from "ws";
/**
 * 自定义vite插件，实现热重载
 * @function buildNotifier
 */
export default function() {
    let wss,ws,timer;
    
    // 发送通知
    const send = (msg) => {
        if (!ws) return
        msg = JSON.stringify(msg)
        ws.send(msg)
    }
    
    // 清理资源
    // 如果不清空变量的引用，插件将不会自动退出
    const close = () => {
        ws && ws.close()
        wss && wss.close()
        clearTimeout(timer)
        ws = null
        wss = null
        timer = null
    }
    
    return {
        name: 'build-notifier',
        apply(config, { command }) {
            // 我们只在 build 且 watch 的情况下使用插件
            const canUse = command === 'build' && Boolean(config.build.watch)
            if (canUse) {
                // 创建 websocket server
                wss = new WebSocketServer({ port: 2333 })
                wss.on('connection', (client) => {
                    ws = client
                })
            }
            return canUse
        },
        closeBundle() {
            timer = setTimeout(() => send('watch-build-ok'), 500)
        },
        watchChange() {
            clearTimeout(timer)
        },
        closeWatcher() {
            close()
        }
    }
}
