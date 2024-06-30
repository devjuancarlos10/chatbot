import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from './App';

// Configuración del mock de axios
const mock = new MockAdapter(axios);

describe('App Component', () => {
  afterEach(() => {
    mock.reset();
  });

  it('renders correctly', () => {
    const { getByPlaceholderText, getByRole } = render(<App />);
    expect(getByPlaceholderText('Escribe un mensaje...')).toBeTruthy();
    expect(getByRole('button')).toBeTruthy();
  });

  it('sends a user message and receives a bot response', async () => {
    const { getByPlaceholderText, getByText, getByRole, queryByText } = render(<App />);
    const input = getByPlaceholderText('Escribe un mensaje...');
    const sendButton = getByRole('button');

    // Mock de la respuesta del servidor
    mock.onPost('http://52.14.122.227:5000/api/chatbot').reply(200, { response: 'Hola, soy el bot' });

    // Simular la entrada de texto y el envío del mensaje
    fireEvent.changeText(input, 'Hola');
    fireEvent.press(sendButton);

    // Verificar que el mensaje del usuario aparece en la lista
    expect(queryByText('Hola')).toBeTruthy();

    // Esperar a que el mensaje del bot aparezca en la lista
    await waitFor(() => {
      expect(queryByText('Hola, soy el bot')).toBeTruthy();
    });
  });

  it('does not send empty messages', () => {
    const { getByRole, queryByText } = render(<App />);
    const sendButton = getByRole('button');

    fireEvent.press(sendButton);

    // Verificar que no se envía un mensaje vacío
    expect(mock.history.post.length).toBe(0);
    expect(queryByText('')).toBeNull();
  });
});
