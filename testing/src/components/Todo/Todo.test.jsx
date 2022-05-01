import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Todo from './index';

describe("Todo testleri", () => {
    let button, input;

    beforeEach(() => {
        render(<Todo />)

        button = screen.getByText("Add");
        input = screen.getByLabelText("İçerik:")
    })

    test("Varsayılan olarak verilen 3 nesne render edilmeli", () => {
        // Item ile başlayan textleri bulmak için düzenli ifade kullanıldı
        const items = screen.getAllByText(/Item/i);

        expect(items.length).toEqual(3)
    })

    test("Input ve button dökümanda bulunmalı.", () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })

    test("Inputa string girilip butona basılınca listeye eklenmeli", () => {
        // inputu doldur
        const name = "Mehmet";
        //input değişkenine tanımladığımız input değerini ve atamak istediğiniz değeri aşağıda tanımladık.
        userEvent.type(input, name);

        // Butona tıkla
        userEvent.click(button);

        // assertion
        expect(screen.getByText(name)).toBeInTheDocument();
    })
})