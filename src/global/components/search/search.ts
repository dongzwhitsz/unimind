import Search from './index.vue'
import { App, VNode, createVNode, render } from 'vue'
import { ISearchItem } from './search.d'
export default  {
    install(app: App) {
        const vnode: VNode = createVNode(Search)
        render(vnode, document.body)
        app.config.globalProperties.$search = {
            show: (items: ISearchItem[]) => vnode?.component?.exposed?.show(items),
            hide: () => vnode?.component?.exposed?.hide()
        }
    }
}