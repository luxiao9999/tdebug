import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import ElmentPlus from 'element-plus';
import 'element-plus/dist/index.css'
import App from './App.vue'

import method from './components/method.vue'
import tools from './components/tools.vue'


const routes = [
    { path: '/tools', component: tools }
]

for (var key in gMethodMap) {
    routes.push({path:key, component: method})
}


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).use(ElmentPlus).mount('#app')