const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.be.exist
    })

    it('设置position', (done) => {
        Vue.component('g-popover', Popover)
        const div = document.createElement('div')
        document.body.append(div)
        div.innerHTML = `
            <g-popover position="left" ref="a">
            <template slot="content">
                弹出内容
            </template>
            <button>点我</button>
            </g-popover>
            `
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            expect(vm.$refs.a.$refs.contentWrapper.classList.contains('position-left')).to.be.true
            done()
        })
    })

    it('可以接受trigger', (done) => {
        Vue.component('g-popover', Popover)
        const div = document.createElement('div')
        document.body.append(div)
        div.innerHTML = `
                <g-popover trigger="hover" ref="a">
                <template slot="content">
                    弹出内容  
                </template>
                <button>点我</button>
                </g-popover>
                `
        const vm = new Vue({
            el: div
        })
        let popover = vm.$el.querySelector('.popover')
        let event = new Event('mouseenter')
        popover.dispatchEvent(event)
        vm.$nextTick(() => {
            expect(vm.$refs.a.$refs.contentWrapper).to.be.exist
            done()
        })
    })
})