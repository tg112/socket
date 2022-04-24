import React, { useEffect, useRef, useState } from 'react'
import { Form, Message, Segment, Icon, Divider, Button } from 'semantic-ui-react';
import CommonInputs from '../components/Common/CommonInputs';
import ImageDropDiv from '../components/Common/ImageDropDiv';
import { FooterMessage, HeaderMessage } from '../components/Common/WelcomeMessage'

const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;


const Signup = () => {
    const [user, setUser] = useState({
        name: '',
        password: '',
        email: '',
        username: '',
        bio: '',
        facebook: '',
        youtube: '',
        twitter: '',
        instagram: ''
    });

    const { name, email, password, bio } = user;
    const [showSocialLinks, setShowSocialLinks] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [username, setUsername] = useState();
    const [usernameLoading, setUsernameLoading] = useState(false);
    const [formLoading, setFormLoading] = useState(false);
    const [usernameAvailable, setUsernameAvailable] = useState(false);
    const [submitDisabled, setSubmitDiabled] = useState(true);
    const [media, setMedia] = useState(null);
    const [mediaPreview, setMediaPreview] = useState(null);
    const [highlighted, setHighlighted] = useState(false);
    const inputRef = useRef();
    

    useEffect(() => {
        const isUser = Object.values({ name, email, password, bio }).every(item => Boolean(item));
        isUser ? setSubmitDiabled(false) : setSubmitDiabled(true);
    }, [user])


    const handleChange = (event) => {
        const { name, value, files } = event.target;
        if (name === 'media') {
            setMedia(files[0]);
            setMediaPreview(URL.createObjectURL(files[0]));
        }
        setUser(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => e.preventDefault();

    return (
        <>
            <HeaderMessage />

            <Form loading={formLoading} error={errorMsg !== null} onSubmit={handleSubmit}>
                {errorMsg ? <Message error header='Oops' content={errorMsg} onDismiss={() => setErrorMsg(null)} /> : ''}
                <Segment>
                    <ImageDropDiv
                        mediaPreview={mediaPreview}
                        setMediaPreview={setMediaPreview}
                        inputRef={inputRef}
                        highlighted={highlighted}
                        setMedia={setMedia}
                        setHighlighted={setHighlighted}
                        handleChange={handleChange}
                    />
                    <Form.Input
                        label="Name"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        fluid
                        icon='user'
                        iconPosition='left'
                    />

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

                    <Form.Input
                        loading={usernameLoading}
                        error={!usernameAvailable}
                        required
                        label="username"
                        placeholder="username"
                        value={username}
                        onChange={e => {
                            setUsername(e.target.value)
                            if (regexUserName.test(e.target.value)) {
                                setUsernameAvailable(true);
                            } else {
                                setUsernameAvailable(false);
                            }
                        }}
                        fluid
                        icon={usernameAvailable? 'check' : 'close'}
                        iconPosition='left'
                    />

                    <CommonInputs user={user} showSocialLinks={showSocialLinks} setShowSocialLinks={setShowSocialLinks} handleChange={handleChange} />
                    <Divider hidden />
                    <Button icon="signup" content="Signup" type="submit" color="orange" disabled={submitDisabled || !usernameAvailable} />
                </Segment>

            </Form>
            <FooterMessage />
        </>
  )
}

export default Signup