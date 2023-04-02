import { render, screen } from '@testing-library/react'; //Imports the testing library 
import { BrowserRouter } from 'react-router-dom';
import MyNav from './MyNav';

//As this component uses link we need to create a mock component 
const MockMyNav = () => {
    return (
        <BrowserRouter>
            <MyNav></MyNav>
        </BrowserRouter>
    )
}
//Set the test to async
test('should render component, find component within Document', () => {
    render(<MockMyNav />); //Render the component
    //8. find lets us use await so we use find instead of get
    const divElement = screen.getByText(/Welcome/i) //waits for data to load
    expect(divElement).toBeInTheDocument(); //Detail what you expect the element to contain  
});

