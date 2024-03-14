import { mount } from '@vue/test-utils';
import DemoButton from '../../button';

test('render demo button', () => {
  const wrapper = mount(DemoButton);
  expect(wrapper.html()).toMatchSnapshot();
});
