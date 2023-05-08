import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const { SECRET } = process.env

function hello() {
    const hello = "Hello " + SECRET
    return hello
}

export { hello }