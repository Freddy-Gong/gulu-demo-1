import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'



Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
    }
})

//单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
    button.$el.remove()
    button.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
    button.$el.remove()
    button.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })
    button.$mount('#test')
    let svgElement = button.$el.querySelector('svg')
    expect(window.getComputedStyle(svgElement).order).to.eq('1')
    button.$el.remove()
    button.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    button.$mount()//一个div一次只能mounted一个元素
    let svgElement = button.$el.querySelector('svg')
    expect(window.getComputedStyle(svgElement).order).to.eq('')
    button.$el.remove()
    button.$destroy()
}
{
    //mock
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
        }
    })
    vm.$mount()
    let spy = chai.spy(() => { })

    vm.$on('click', spy)//期望函数被执行
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}