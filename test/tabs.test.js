const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import Tabs from '../src/tabs.vue'
import TabsHead from '../src/tabs-head.vue'
import TabsBody from '../src/tabs-body.vue'
import TabsItem from '../src/tabs-item.vue'
import TabsPane from '../src/tabs-pane.vue'

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)


describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })
    describe('接受外部数据', () => {
        it('子组件只能是 tabs-head 和 tabs-body', () => {

        })
    })

})