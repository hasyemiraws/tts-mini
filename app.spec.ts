import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import App from './app.vue';

describe('App', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(App);
    expect(wrapper.vm).toBeTruthy();
  });
});
