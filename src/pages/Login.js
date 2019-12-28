import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { usePost } from '../utils/rest'

const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCU2lF0YJx8F8Qrx7E-l12oqAOijHtaL9k'
const Login = () => {
    const [postData, signin] = usePost(url)
    const [logado, setLogado] = useState(false)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    useEffect(() => {
        if (Object.keys(postData.data).length > 0) {
            localStorage.setItem('token', postData.data.idToken)
            window.location.reload()
        }
    }, [postData])
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setLogado(true)
        }
    })
    const login = async () => {
        await signin({
            email,
            password: senha,
            returnSecureToken: true
        })
    }
    if (logado) {
        return <Redirect to='/' />
    }
    const onChangeEmail = evt => {
        setEmail(evt.target.value)
    }
    const onChangeSenha = evt => {
        setSenha(evt.target.value)
    }
    return (
        <div>
            <h1>Login</h1>
            {
                postData.error && postData.error.length > 0 &&
                <p>E-mail e/ou senha inválidos.</p>
            }
            <input type='email' value={email} onChange={onChangeEmail} placeholder='Seu email' />
            <input type='password' value={senha} onChange={onChangeSenha} placeholder='Sua senha' />
            <button onClick={login}>Login</button>
        </div>
    )
}
export default Login