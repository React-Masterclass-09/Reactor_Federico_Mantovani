import SignInForm from "../components/SignInForm/SignInForm"

export default function SignInView(){
    return (
        <div className="container">
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-12 col-md-8">
                    <SignInForm/>
                </div>
            </div>
        </div>
    )
}