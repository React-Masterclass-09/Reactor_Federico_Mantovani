export default function SignInForm() {
    return (
        <>
            <h2 className="font-color">Registrati alla nostra piattaforma e vai a scrutare informazioni di ogni genere in campo videoludico!!!</h2>
        <form>
            <div className="mb-3">
            <label className="form-label font-color">Nome</label>
            <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label font-color">Cognome</label>
            <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label font-color">UserName</label>
            <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label font-color">Email address</label>
            <input type="email" placeholder="Email" className="form-controll" name="email" onChange={handleChange} />
            <div className="form-text font-color">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label className="form-label font-color">Password</label>
            <input type="password" placeholder="Password" className="form-controll" name="password" onChange={handleChange} />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label font-color" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Registrati</button>
        </form>

        </>
    )
}