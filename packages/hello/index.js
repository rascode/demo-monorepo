import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config({ path: './../../.env' })

const { SECRET } = process.env

export default function hello() {
    const hello = "Hello " + SECRET
    return hello
}