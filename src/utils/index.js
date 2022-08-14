export function isValidEmail(email) {
   return /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i.test(email);
}

export function isValidPassword(pw) {
    return (pw && pw.length > 8)
}