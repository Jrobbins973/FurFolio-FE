import React from 'react'
import "./LoginPage.css"
function LoginPage() {
    return (
        <div>
                <div class="container">
            <div class="brand-logo"></div>
            <div class="brand-title">TWITTER</div>
            <div class="inputs">
                <label>EMAIL</label>
                <input type="email" placeholder="example@test.com" />
                <label>PASSWORD</label>
                <input type="password" placeholder="Min 6 charaters long" />
                <button type="submit">LOGIN</button>
            </div>
            
            </div>
        </div>
    )
}

export default LoginPage