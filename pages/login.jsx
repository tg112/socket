import React, { useEffect, useRef, useState } from 'react'
import { Form, Message, Segment, Icon, Divider, Button } from 'semantic-ui-react';
import { FooterMessage, HeaderMessage } from '../components/Common/WelcomeMessage'

const Signup = () => {
    const [user, setUser] = useState({
        name: '',
        password: '',
    });

    const { email, password } = user;
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [formLoading, setFormLoading] = useState(false);
    const [submitDisabled, setSubmitDiabled] = useState(true);
    

    useEffect(() => {
        const isUser = Object.values({  email, password }).every(item => Boolean(item));
        isUser ? setSubmitDiabled(false) : setSubmitDiabled(true);
    }, [user])


    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => e.preventDefault();

    return (
        <>
            <HeaderMessage />

            <Form loading={formLoading} error={errorMsg !== null} onSubmit={handleSubmit}>
                {errorMsg ? <Message error header='Oops' content={errorMsg} onDismiss={() => setErrorMsg(null)} /> : ''}
                <Segment>
                    
                    
                    <Form.Input
                        required
                        label="email"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        fluid
                        icon='envelope'
                        iconPosition='left'
                        type="email"
                    />

                    <Form.Input
                        required
                        label="password"
                        placeholder="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        fluid
                        icon={{
                            name: 'eye',
                            circular: true,
                            link: true,
                            onClick: () => {setShowPassword(!showPassword)}
                        }}
                        iconPosition='left'
                        type={showPassword ? "tesxt" : "password"}
                    />

                    <Divider hidden />
                    <Button icon="signup" content="Login" type="submit" color="orange" disabled={submitDisabled} />
                </Segment>

            </Form>
            <FooterMessage />
        </>
  )
}

export default Signup