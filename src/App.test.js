import { render, screen ,cleanup, fireEvent} from '@testing-library/react';
import MyMap from './components/MyMap/mymap';



afterEach(cleanup);

test('testing for map component with button',()=>{
  render(<MyMap/>);
  const show_map = screen.getByRole('button',{name:'show map'});
  expect(show_map).toBeInTheDocument();
})

test('for input field and changing inputs',()=>{
  render(<MyMap/>);
  const input = screen.getByLabelText('min_lon');
  fireEvent.change(input, { target: { value: '12345' } });
  expect(input).toBeInTheDocument();
})

test('for button click',()=>{
  const {getByText}= render(<MyMap/>);
  fireEvent.click(getByText('show map'))
})
