import Link from 'next/link';
import { useRouter } from 'next/router';
import { Divider, Message, Icon } from 'semantic-ui-react';

export const HeaderMessage = () => {
    const router = useRouter();
    const signupRouter = router.pathname === '/signup';
    return <Message
        attached
        header={signupRouter ? 'Get Started' : 'Welcome back'}
        icon={signupRouter ? 'settings' : 'privacy'}
        content={signupRouter ? 'Create new account' : 'Login with Email and Password'}
    />
};

export const FooterMessage = () => {
    const router = useRouter();
    const signupRouter = router.pathname === '/signup';

    return (
        <>
        {signupRouter ? (
          <>
            <Message attached='bottom' warning color='teal'> 
              <Icon name='help' />
              Exsiting User ?
              <Link href="/login">Login Here Instead</Link>
            </Message>
            <Divider hidden />
          </>
        ) : (
            <>
            <Message attached='bottom' info color='teal'> 
              <Icon name='lock' />
              <Link href="/reset">Forgot Password</Link>
            </Message>
            <Message attached='bottom' warning color='teal'> 
              <Icon name='help' />
              New user?<Link href="/reset">Signup here</Link>
            </Message>
            </>
        )
      }
      </>
    )

}