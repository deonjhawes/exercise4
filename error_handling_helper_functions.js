// TODO: Create a function that validates user input
function validateInput(input) {
    if (typeof input !== "string") {
        return { valid: false, message: "it must be a string." };
    }
    if (input.trim() === "") {
        return { valid: false, message: "cant leave this empty." };
    }
    return { valid: true, message: " Input is Valid." };
}
// TODO: Create a function that demonstrates multiple error types
function demonstrateErrors() {
    try {
        console.log(nonExistentVariable);
    } catch (e) {
        console.log("ERROR!!!!!!!", e.message);
    }
    try {
        null.f();
    } catch (e) {
        console.log("ERROR!!!", e.message);
    }
}
// TODO: Create a collection of helper functions for string manipulation
function stringHelpers() {
    return {
        toUpper(str) {
            return str.toUpperCase();
        },
        toLower(str) {
            return str.toLowerCase();
        },
        reverse(str) {
            return str.split("").reverse().join("");
        }
    };
}


// TODO: Create helper functions for array operations
function arrayHelpers() {
    return {
        first(any) {
            return arr[0];
        },
        last(any) {
            return arr[arr.length - 1];
        },
        unique(any) {
            return [...new Set(arr)];
        },
        flatten(any) {
            return arr.reduce((acc, val) => acc.concat(val), []);
        }
    };
}
console.log(validateInput("hi"));
demonstrateErrors(57,9);
console.log(stringHelpers().reverse("hello hi"));
console.log(arrayHelpers(["hi", "hello", "bye"]));