import { render, screen } from '@testing-library/react';
import Counter from './Counter';


describe('Component Counte de test', () => {
    test("Se o h1 do component se inicia zerado", () => {
         render(<Counter />) //vai renderizar meu component count, render retorna um obj

         const title = screen.getByText('0'); //pega texto que tenha o 0
       
         expect(title).toBeInTheDocument(); //espera que o titulo esteja no doc

    });

    test("Verifica se contém a classe do style", () => {
        render(<Counter />) //vai renderizar meu component count, render retorna um obj

        const title = screen.getByText('0'); //pega texto que tenha o 0
      
        expect(title).toHaveClass("counter__title"); //verifica se existe a classe do className

   });


   test("Se existe  classe de na tag do title", () => {
    render(<Counter />) //vai renderizar meu component count, render retorna um obj

    const title = screen.getByText('0'); //pega texto que tenha o 0
  
    expect(title).not.toHaveClass("counter__title--increment"); //verifica se existe a classe do className
    expect(title).not.toHaveClass("counter__title--decrement"); //verifica se existe a classe do className

});


test("Se existe button no component", () => {
    render(<Counter />) //vai renderizar meu component count, render retorna um obj

   
    const existsButton = screen.getByRole("button", {name: /incrementar/i}); //se existe um elemento button no components
    expect(existsButton).toBeInTheDocument();
  


});


});



