import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Search from "./global/components/search/search"
import { ISearchItem } from './global/components/search/search.d'

const app = createApp(App)
// app.use(Search)
app.use(createPinia()) //use pinia
app.use(router) //use router


// type SearchHint = {
//     show: (items: ISearchItem[]) =>void
//     hide: () => void
// }
// //编写ts loading 声明文件放置报错 和 智能提示
// declare module '@vue/runtime-core' {
//     export interface ComponentCustomProperties {
//         $search: SearchHint
//     }
// }


app.mount('#app')
