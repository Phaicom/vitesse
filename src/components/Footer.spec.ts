import { shallowMount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import en from '../../locales/en.json'
import ja from '../../locales/ja.json'
import Footer from './Footer.vue'

describe('Footer', () => {
  it('renders props.msg when passed', () => {
    const i18n = createI18n({
      legacy: false,
      locale: 'en',
      messages: {
        en,
        ja,
      },
    })
    const wrapper = shallowMount(Footer, {
      global: {
        plugins: [i18n],
        stubs: {
          'carbon-campsite': {
            template: '<span />',
          },
          'carbon-moon': {
            template: '<span />',
          },
          'carbon-sun': {
            template: '<span />',
          },
          'carbon-language': {
            template: '<span />',
          },
          'carbon-dicom-overlay': {
            template: '<span />',
          },
          'carbon-logo-github': {
            template: '<span />',
          },
          'router-link': {
            template: '<a />',
          },
        },
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
