function judgeSquareSum(c: number): boolean {
    let a = 0
    let b = Math.floor(Math.sqrt(c))

    while (a <= b) {
        const sumOfSquares = a * a + b * b

        if (sumOfSquares === c) {
            return true
        } else if (sumOfSquares < c) {
            a++
        } else {
            b--
        }
    }

    return false
}