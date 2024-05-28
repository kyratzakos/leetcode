function checkRecord(n: number): number {
    const modOperator = 1000000007

    const dp = Array.from({ length: n + 1 }, () =>
        Array.from({ length: 2 }, () =>
            Array(3).fill(0)
        )
    )

    dp[0][0][0] = 1

    for (let i = 1; i <= n; i++) {
        for (let a = 0; a < 2; a++) {
            for (let l = 0; l < 3; l++) {
                dp[i][a][0] = (dp[i][a][0] + dp[i - 1][a][l]) % modOperator

                if (a > 0) {
                    dp[i][a][0] = (dp[i][a][0] + dp[i - 1][a - 1][l]) % modOperator
                }

                if (l > 0) {
                    dp[i][a][l] = (dp[i][a][l] + dp[i - 1][a][l - 1]) % modOperator
                }
            }
        }
    }

    let result = 0
    for (let a = 0; a < 2; a++) {
        for (let l = 0; l < 3; l++) {
            result = (result + dp[n][a][l]) % modOperator
        }
    }

    return result
};