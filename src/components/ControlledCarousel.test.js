import { render, screen } from '@testing-library/react'; //Imports the testing library 
import { BrowserRouter } from 'react-router-dom';
import ControlledCarousel from './ControlledCarousel';

//Set the test to async
test('Check for render', () => {
	render(<ControlledCarousel />); //Render the component
	//8. find lets us use await so we use find instead of get
	const divElement = screen.getAllByText(/Buy now/i) //waits for data to load
	expect(divElement.length).toEqual(3) //Detail what you expect the element to contain  
});

