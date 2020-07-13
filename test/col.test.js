const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.be.ok
    })
    it('接受span 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 1
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接受offset 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: 1
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('offset-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接受ipad 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad: {
                    span: 1,
                    offset: 2
                }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('offset-ipad-2')).to.equal(true)
        expect(vm.$el.classList.contains('col-ipad-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接受pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {
                    span: 1,
                    offset: 2
                }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('offset-pc-2')).to.equal(true)
        expect(vm.$el.classList.contains('col-pc-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接受narrowPc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc: {
                    span: 1,
                    offset: 2
                }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('offset-narrow-pc-2')).to.equal(true)
        expect(vm.$el.classList.contains('col-narrow-pc-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接受widePc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                widePc: {
                    span: 1,
                    offset: 2
                }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('offset-wide-pc-2')).to.equal(true)
        expect(vm.$el.classList.contains('col-wide-pc-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
})
