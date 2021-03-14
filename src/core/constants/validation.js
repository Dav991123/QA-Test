export const passwordValidation = {
    regExp:  /^.*(?=.{7,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
    text: 'Password has to be 7 characters including a number, a lowercase letter and an uppercase letter.'
}
export const emailValidation = {
    regExp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    text: 'Invalid email address'
}