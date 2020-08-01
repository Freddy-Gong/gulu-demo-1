const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
    it('存在.', () => {
        expect(Collapse).to.be.exist
    })
    it('接受single属性', (done) => {
        Vue.component('g-collapse', Collapse)
        Vue.component('g-collapse-item', CollapseItem)
        const div = document.createElement('div')
        document.body.append(div)
        div.innerHTML = `
        <g-collapse  single>
        <g-collapse-item title="标题1" name="1" class="first">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2" class="second">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
            `
        const vm = new Vue({
            el: div
        })
        let first = vm.$el.querySelector('.title')
        let second = vm.$el.querySelector('.first')

        first.click()
        setTimeout(() => {
            console.log(second)
            done()
        })
    })

})