import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import EmergenciaScreen from '../src/EmergenciaScreen';

it('renderiza HomeView por defecto', () => {
  render(<EmergenciaScreen />);
  expect(screen.getByText('Cerrajería de Confianza')).toBeInTheDocument();
});

it('navega a MODO EMERGENCIA', () => {
  render(<EmergenciaScreen />);
  fireEvent.click(screen.getByText('EMERGENCIA'));
  expect(screen.getByText('MODO EMERGENCIA')).toBeInTheDocument();
});

it('vuelve a Home desde Emergencia', () => {
  render(<EmergenciaScreen />);
  fireEvent.click(screen.getByText('EMERGENCIA'));
  fireEvent.click(screen.getAllByRole('button')[0]);
  expect(screen.getByText('Cerrajería de Confianza')).toBeInTheDocument();
});

it('abre WhatsApp con el mensaje correcto', () => {
  const openSpy = jest.spyOn(window, 'open').mockImplementation(() => {});
  render(<EmergenciaScreen />);
  fireEvent.click(screen.getByText('Contactar por WhatsApp'));
  expect(openSpy).toHaveBeenCalled();
  const url = openSpy.mock.calls[0][0];
  expect(url).toContain('https://wa.me/');
  openSpy.mockRestore();
});
