import { render, screen } from '@testing-library/react';
import { Info } from './';

const testData = {
  name: [{
    family: 'Levin', given: 'Henry'
  }],
  gender: 'male',
  managingOrganization: {display: 'Test Organization'},
  conditions: [
    "Diabetes",
    "High blood pressure",
    "Asthma"
  ]
};

test('renders patient name', () => {
  render(<Info data={testData}/>);
  const nameElement = screen.getByText(/Name of patient: Henry Levin/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders organization name', () => {
  render(<Info data={testData}/>);
  const orgElement = screen.getByText(/Organization name: Test Organization/i);
  expect(orgElement).toBeInTheDocument();
});

test('renders patient gender', () => {
  render(<Info data={testData}/>);
  const genderElement = screen.getByText(/Gender: Male/i);
  expect(genderElement).toBeInTheDocument();
});

test('renders conditions count', () => {
  render(<Info data={testData}/>);
  const countElement = screen.getByText(/Number of conditions they have: 3/i);
  expect(countElement).toBeInTheDocument();
});

test('renders first condition', () => {
  render(<Info data={testData}/>);
  const conditionElement = screen.getByText(/diabetes/i);
  expect(conditionElement).toBeInTheDocument();
});

test('renders second condition', () => {
  render(<Info data={testData}/>);
  const conditionElement = screen.getByText(/High blood pressure/i);
  expect(conditionElement).toBeInTheDocument();
});

test('renders third condition', () => {
  render(<Info data={testData}/>);
  const conditionElement = screen.getByText(/Asthma/i);
  expect(conditionElement).toBeInTheDocument();
});