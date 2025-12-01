import RegistrationForm from "../components/RegistrationForm"
import { GoogleOAuthProvider } from '@react-oauth/google';

const cliendid=import.meta.env.VITE_GOOGLE_CLIENT_ID

export default function RegistrationPage(){
    return (
    <GoogleOAuthProvider clientId={cliendid}>
        <RegistrationForm></RegistrationForm>
    </GoogleOAuthProvider>
    )
}