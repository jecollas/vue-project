import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ColorSelect from '../ColorSelect.vue'

describe('ColorSelect', () => {
  it('renders properly', () => {
    const wrapper = mount(ColorSelect, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
