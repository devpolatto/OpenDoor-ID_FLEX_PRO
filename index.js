const { default: axios } = require('axios')
const http = require('http')

const host = "192.168.1.50"
const user = "admin"
const pass = "admin"

async function OpenDor (session){
    await axios.post('http://' + host + '/execute_actions.fcgi?session=' + session, {
        actions: [ { action: "sec_box", parameters: "id=65793, reason=3" } ]
    })
}

async function requestSession(){
    const data =  await axios.post('http://' + host + '/login.fcgi',{
        login: user,
        password: pass
    })
        .then((response) => {
            console.log(response.data.session)  
            OpenDor(response.data.session)

        })
        .catch(erro => console.log(erro))
}

requestSession()