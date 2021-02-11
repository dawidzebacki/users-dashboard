export const validate = (values) => {
    let errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexLetters = /^[a-zA-Ząćśńółę\s]+$/;

    if (!values.name) {
        errors.name = "Cannot be blank";
    } else if (values.name.length < 4 && regexLetters.test(values.name)) {
        errors.name = "Name must be more than 4 characters";
    } else if (!regexLetters.test(values.name)) {
        errors.name = "Name must contain only latin letters";
    }

    if (!values.email) {
        errors.email = "Cannot be blank";
    } else if (!regexEmail.test(values.email)) {
        errors.email = "Invalid email format";
    }

    return errors;
};