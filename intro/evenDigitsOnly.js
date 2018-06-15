// Check if all digits of the given integer are even.

function evenDigitsOnly(n) {
    n = String(n).split("")
    return n.every(num => Number(num) % 2 == 0)
}
