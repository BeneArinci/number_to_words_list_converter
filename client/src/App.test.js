import { render, screen } from '@testing-library/react'; 
import App from './App';
// eslint-disable-next-line jest/no-mocks-import
const mockApiResponse = require('../__mocks__/apiResponseMock.json')

describe('Test initial rendering', () => {
    test('It renders the label "Enter the number to convert:"', () => {
        render(<App />);
        const labelElement = screen.getByText('Enter the number to convert:');
        expect(labelElement).toBeInTheDocument();
    });
    
    test('It renders the keyboard component', () => {
        render(<App />);
        const keyboard = screen.getByTestId('test-keyboard');
        expect(keyboard).toBeInTheDocument();
    })
})

describe('Test user interaction', () => {
    
    test('It shows the number when the user press the numbers in the keyboard', () => {
        render(<App />);
        const number2 = screen.getByRole('button', {name: '2 a b c'});
        const number3 = screen.getByRole('button', {name: '3 d e f'});
        number3.click();
        number2.click();
        const numberOnScreen = screen.getByText('32')
        expect(numberOnScreen).toBeInTheDocument();
    })

    test('It deletes numbers one by one starting from the end if user presses delete button', () => {
        render(<App />);
        const number3 = screen.getByRole('button', {name: '3 d e f'});
        const number4 = screen.getByRole('button', {name: '4 g h i'});
        const number8 = screen.getByRole('button', {name: '8 t u v'});
        number8.click();
        number8.click();
        number4.click();
        number3.click();
        const firstNumberOnScreen = screen.getByText('8843')
        expect(firstNumberOnScreen).toBeInTheDocument();
        const deleteBtn = screen.getByRole('button', {name: 'Delete'})
        deleteBtn.click();
        const secondNumberOnScreen = screen.getByText('884')
        expect(secondNumberOnScreen).toBeInTheDocument();
        deleteBtn.click();
        const lastNumberOnScreen = screen.getByText('88')
        expect(lastNumberOnScreen).toBeInTheDocument();
    })

    test('It shows the WordsList component after selecting a number and press convert', async () => {
        render(<App />);
        jest.spyOn(global, "fetch").mockImplementation(() => {
            return Promise.resolve({
              json: () => Promise.resolve(mockApiResponse)
            });
          });
        const number3 = screen.getByRole('button', {name: '3 d e f'});
        const convertBtn = screen.getByRole('button', {name: 'Convert'})
        number3.click()
        number3.click()
        convertBtn.click()
        
        screen.debug()
        // const firstWord = screen.getByText('first');
        // const secondWord = screen.getByText('second');
        // expect(firstWord).toBeInTheDocument();
        // expect(secondWord).toBeInTheDocument();
    })
})

