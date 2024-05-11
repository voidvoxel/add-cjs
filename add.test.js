const add = require(".");


test(
    "add 2 positive numbers together",
    () => {
        expect(add(1, 2)).toBe(3);
        expect(add(400, 20)).toBe(420);
    }
);


test(
    "add 2 negative numbers together",
    () => {
        expect(add(-1, -2)).toBe(-3);
        expect(add(-400, -20)).toBe(-420);
    }
);


test(
    "add a positive to a negative number",
    () => {
        expect(add(1, -2)).toBe(-1);
        expect(add(400, -20)).toBe(380);
    }
);


test(
    "add 0 to 0",
    () => {
        expect(add(0, 0)).toBe(0);
    }
);


test(
    "add 0 to a positive number",
    () => {
        expect(add(1, 0)).toBe(1);
        expect(add(400, 0)).toBe(400);
    }
);


test(
    "add 0 to a negative number",
    () => {
        expect(add(-1, 0)).toBe(-1);
        expect(add(-400, 0)).toBe(-400);
    }
);


test(
    "add a positive number to 0",
    () => {
        expect(add(0, 1)).toBe(1);
        expect(add(0, 400)).toBe(400);
    }
);


test(
    "add a negative number to 0",
    () => {
        expect(add(0, -1)).toBe(-1);
        expect(add(0, -400)).toBe(-400);
    }
);
