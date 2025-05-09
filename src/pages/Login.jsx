import gympactsemfundo from '../images/gympactsemfundo.png';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Login() {
    const pageWrapperStyle = {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#121212',
        padding: '40px',
    };

    const heroWrapperStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.1,
    };

    const loginContainerStyle = {
        zIndex: 1,
        position: 'relative',
        color: 'white',
        fontFamily: 'Montserrat, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        padding: '60px',
        borderRadius: '24px',
        backgroundColor: '#1e1e1e',
    };

    const inputStyle = {
        width: '300px',
        padding: '10px',
        margin: '5px',
        borderRadius: '10px',
        backgroundColor: '#272525',
        color: 'white',
        border: 'none',
    };

    const buttonStyle = {
        marginTop: '10px',
        padding: '10px 20px',
        borderRadius: '10px',
        backgroundColor: '#333',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    };

    return (
        <>
            <Header />
            <div style={pageWrapperStyle}>
                <div style={heroWrapperStyle}>
                    <Hero />
                </div>
                <form style={loginContainerStyle}>
                    <img
                        src={gympactsemfundo}
                        alt="Gympact logo"
                        style={{ width: '100px', marginBottom: '10px' }}
                    />
                    <h1>Login</h1>
                    <input type="text" placeholder="Email" style={inputStyle} />
                    <input type="password" placeholder="Senha" style={inputStyle} />
                    <button type="submit" style={buttonStyle}>Login</button>
                    <a href="#" style={{ color: 'white', marginTop: '10px' }}>Esqueceu sua Senha?</a>
                </form>
            </div>
        </>
    );
}
