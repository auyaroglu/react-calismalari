import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from './index';

describe("Counter Tests", () => {
    let count, increaseBtn, decreaseBtn

    beforeEach(() => {
        // Her test başlamadan önce tekrar çalışır
        render(<Counter />)
        count = screen.getByText("0")
        increaseBtn = screen.getByText("Increase")
        decreaseBtn = screen.getByText("Decrease")
    })

    beforeAll(() => {
        // Test işlemi başladığında hepsinden önce bir kez çalışır.
        console.log("En başta bir kez çalışacağım");
    })

    afterAll(() => {
        // Test işlemi bittikten sonra bir kez çalışır.
        console.log("En son bir kez çalışacağım");
    })

    afterEach(() => {
        // Tüm testler bittikten sonra tekrar çalışır.      
        console.log("Her testten sonra çalışacağım")
    })

    test("increase btn", () => {
        userEvent.click(increaseBtn)
        expect(count).toHaveTextContent("1");
    })

    test("decrease btn", () => {
        userEvent.click(decreaseBtn)
        expect(count).toHaveTextContent("-1");
    })
})