import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.Vue'
import Col from './col.Vue'
import Layout from './layout.vue'
import Content from './content.vue'
import Sider from './sider.vue'
import Header from './header.vue'
import Footer from './footer.vue'
import Toast from './toast.vue'
import Plugin from './plugin.js'
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsBody from './tabs-body.vue'
import TabsItem from './tabs-item.vue'
import TabsPane from './tabs-pane.vue'
import Popover from './popover.vue'



Vue.component('g-input', Input)
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-content', Content)
Vue.component('g-sider', Sider)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.use(Plugin)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)


new Vue({
    el: '#app',
    data: {
        selectedTab: 'sports'
    },
    created() {

    },
    methods: {
        yyy() {
            console.log('yyy')
        },
        showToast() {
            this.$toast('wasdawsdaasdasdadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssss', {
                position: 'middle',
                closeButton: {
                    text: '知道',
                    callback() {
                        console.log('用户说他知道了')
                    }
                },
                enableHtml: true,
            })
        }
    }
}
)

