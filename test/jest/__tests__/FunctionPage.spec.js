import FunctionPage from 'src/pages/FunctionPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(FunctionPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('Vue is awesome.')
  })
})

it('check text content to be as defined in variable', () => {
  const wrapper = shallowMount(FunctionPage, {
    data () {
      return {
        title: 'I love Vue.'
      }
    }
  })
  let header = wrapper.find('.htmlClass h1')
  expect(header.text()).toBe('I love Vue.')
})

test('should show the form element on the user output', () => {
  const wrapper = shallowMount(FunctionPage)
  expect(wrapper.find('form').exists()).toBe(true)
})

test('should contain input fields in template', () => {
  const wrapper = shallowMount(FunctionPage)
  expect(wrapper.find('form > input').exists()).toBe(true)
})

test('should have button', () => {
  const wrapper = shallowMount(FunctionPage)
  expect(wrapper.find('button').exists()).toBe(true)
})

//test function addtitoin
test('trigger click event on button ', async () => {
  const wrapper = shallowMount(FunctionPage)
  const button = wrapper.find('button')
  await button.trigger('click')
  expect(wrapper.vm.addition(1,2)).toBe(3)
})

//test function subtraction
test('trigger click event on button', async () => {
  const wrapper = shallowMount(FunctionPage)
  const button = wrapper.find('button')
  await button.trigger('click')
  expect(wrapper.vm.subtraction(2,1)).toBe(1)
})

//test function multiplication
test('trigger click event on button', async () => {
  const wrapper = shallowMount(FunctionPage)
  const button = wrapper.find('button')
  await button.trigger('click')
  expect(wrapper.vm.multiplication(2,1)).toBe(2)
})

//test function divide
test('trigger click event on button', async () => {
  const wrapper = shallowMount(FunctionPage)
  const button = wrapper.find('button')
  await button.trigger('click')
  expect(wrapper.vm.divide(2,1)).toBe(2)
})
