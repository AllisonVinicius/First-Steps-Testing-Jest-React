import { render, screen } from '@testing-library/react';
import Counter from './Counter';


describe('Component Counte de test', () => {
    test("Se o h1 do component se inicia zerado", () => {
         render(<Counter />) //vai renderizar meu component count, render retorna um obj

         const title = screen.getByText('0'); //pega texto que tenha o 0

         expect(title).toBeInTheDocument(); //espera que o titulo esteja no doc

    });
});
