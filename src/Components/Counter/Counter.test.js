import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    // const existsButton = screeen.getAllBuRole("button"); //verifica em todo o component se existe algum bottom All=> todos
     expect(existsButton).toBeInTheDocument();
  
});

test("Se classe a classe button e button--increment no component", () => {
    render(<Counter />) //vai renderizar meu component count, render retorna um obj
   
    const existsButton = screen.getByRole("button", {name: /incrementar/i}); //se existe um elemento button no components
  
     expect(existsButton).toHaveClass("button");
     expect(existsButton).toHaveClass("button--increment");

  
});

test("Deve conter um botao decrementar com as classes button e button--decrement", () => {
    render(<Counter />) //vai renderizar meu component count, render retorna um obj
   
    const buttonDecrement = screen.getByRole("button", {name: /decrementar/i}); //se existe um elemento button no components
  
     expect(buttonDecrement).toHaveClass("button");
     expect(buttonDecrement).toHaveClass("button--decrement");

     
});

test("Se esta incrementando uma unidade no button incrementar", () => {
    render(<Counter />) //vai renderizar meu component count, render retorna um obj
   
    const buttonIncrement = screen.getByRole("button", {name: /incrementar/i}); //se existe um elemento button no components

   
    // testar se antes de ocorrer o evento do click ele esta nulo, que é o correto
   expect(screen.queryByText("1")).toBeNull();

    //testar o evento do botão, se esta acionando.
    userEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toBeInTheDocument(); //verifico se esta com o valor no documento apos testar o evento
       
});




test("Se esta decrementando, quando aciona o botão", () => {
    render(<Counter />) //vai renderizar meu component count, render retorna um obj
   
    const buttonDecrement= screen.getByRole("button", {name: /decrementar/i}); //se existe um elemento button no components

   
    // testar se antes de ocorrer o evento do click ele esta tira uma unidade, que é o correto
   expect(screen.queryByText("-1")).toBeNull();

    //testar o evento do botão, se esta acionando.
    userEvent.click(buttonDecrement);
    expect(screen.getByText("-1")).toBeInTheDocument(); //verifico se esta com o valor no documento apos testar o evento
       
});



test("Deve adiconar a classe counter no titulo quando o valor for > que 0", () => {
    render(<Counter />) //vai renderizar meu component count, render retorna um obj
   
    const buttonIncrement= screen.getByRole("button", {name: /increment/i}); //se existe um elemento button no components

   
    // testar se antes de ocorrer o evento do click ele esta tira uma unidade, que é o correto
   expect(screen.queryByText("0")).not.toHaveClass('counter__title--increment')

    //testar o evento do botão, se esta acionando.
    userEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toHaveClass('counter__title--increment'); //verifico se esta com o valor no documento apos testar o evento
       
});


test("Deve adiconar a classe counter__title--decrement no titlo, quando o valor for menor do que 0", () => {
    render(<Counter />) //vai renderizar meu component count, render retorna um obj
   
    const buttonDecrement= screen.getByRole("button", {name: /decrementar/i}); //se existe um elemento button no components

   
    // testar se antes de ocorrer o evento do click ele esta tira uma unidade, que é o correto
   expect(screen.quSeryByText("0")).not.toHaveClass('counter__title--decrement')

    //testar o evento do botão, se esta acionando.
    userEvent.click(buttonDecrement);
    expect(screen.getByText("-1")).toHaveClass('counter__title--decrement'); //verifico se esta com o valor no documento apos testar o evento
       
});










  
});








