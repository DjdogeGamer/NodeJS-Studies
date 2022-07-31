const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? e o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hoje?",
]

const ask = ( index = 0) => {
    process.stdout.write(`\n\n${questions[index]}\n`)
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
})

process.on("exit", () => {
    console.log(`
    Você respondeu as seguintes perguntas:

    O que você aprendeu hoje?
    ${answers[0]}

    O que te aborreceu hoje e você poderia melhorar foi:
    ${answers[1]}

    O que te deixou feliz hoje:
    ${answers[2]}

    Quantas pessoas você ajudou hoje:
    ${answers[3]}
    `)
})