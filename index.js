const { default: axios } = require('axios')
const http = require('http')

const host = "192.168.1.50"

const user = "admin"
const pass = "admin"
const URL = "http://192.168.1.50"


async function requestSession(){
    const data =  await axios.post('http://192.168.1.50/login.fcgi',{
        login: user,
        password: pass
    })
        .then((response) => {
            console.log(JSON.stringify(response.data))    
        })
        .catch(erro => console.log(erro))
}

requestSession()