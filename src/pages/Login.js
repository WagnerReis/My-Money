import React, { useEffect } from 'react'
import { usePost } from '../utils/rest'

const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCU2lF0YJx8F8Qrx7E-l12oqAOijHtaL9k'
const Login = () => {
    const [postData, signin] = usePost(url)
    useEffect(() => {
        if (Object.keys(postData.data).length > 0) {
            localStorage.setItem('token', postData.data.idToken)
        }
    }, [postData])
    const login = async () => {
        await signin({
            email: 'wagner@gmail.com',
            password: 'trevao1231',
            returnSecureToken: true
        })
    }
    return (
        <div>
            <h1>Login</h1>
            {JSON.stringify(postData)}
            <button onClick={login}>Login</button>
        </div>
    )
}
export default Login