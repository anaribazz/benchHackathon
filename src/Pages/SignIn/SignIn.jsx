import './SignIn.scss';

function SignIn() {
    return (
        <div className='SignIn'>
            <div className='SignIn__form-block'>
                <h1 className='SignIn__primary-text'>Get started with America's largest bookkeeping service</h1>
                <p className='SignIn__secondary-text'>A Bench financial expert will give you a call and ask a few questions to ensure that Bench is the best fit for your business.</p>
                <form>
                    <input className='SignIn__name-input' name='name' placeholder='Full Name'/>
                    <input className='SignIn__email-input' name='email' type='email' placeholder='Email'/>
                    <button className='SignIn__form-btn' type='submit'>Start a free trial</button>
                </form>
            </div>
            <div className='SignIn__secondary-block'>
                <h1>What you get from the call</h1>

            </div>

        </div>
    )

}

export default SignIn;
