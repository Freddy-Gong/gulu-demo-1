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


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: 'hi'
    },
    created() {
        this.$toast('asaaaaaadddddddaaaaaaaaaaaaaaaaaaaaaaaaaaa', {
            closeButton: {
                text: '知道了',
                callback() {
                    console.log('用户说他知道了')
                }
            },
            enableHtml: true
        })
    },
    methods: {
        showToast() {
        }
    }
}
)

