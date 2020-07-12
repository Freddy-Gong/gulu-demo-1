import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.Vue'
import Col from './col.Vue'



Vue.component('g-input', Input)
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-row', Row)
Vue.component('g-col', Col)



new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message: 'hi'
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
            console.log(e)
        }
    }
})

