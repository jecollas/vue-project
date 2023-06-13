import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ColorSelect from '../ColorSelect.vue'

describe('ColorSelect', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(ColorSelect, { 
        props: { 
            color: 'black',
            colorSelect: 'red'
        } 
    })
    expect(wrapper.text()).toContain('black')
  })
})
