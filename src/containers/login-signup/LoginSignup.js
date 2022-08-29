import "./loginpage.css";
export default function LoginSignup() {
  return (
    <div className=" container-fluid login-body">
      <div className="login">
        <h1>Sign In</h1>
        <form className="form-margin">
          <div className="form-floating form-margin bg-secondary">
            <input
              type="Email"
              className="form-control "
              id="floatingEmail"
              placeholder="email"
            />
            <label for="floatingPassword">Email or phone number</label>
          </div>

          <div className="form-floating form-margin bg-dark">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <button
            type="submit"
            className="btn bg-danger w-100 form-margin text-white"
          >
            Sign In
          </button>
          {/* <div className="row mt-2">
            <div className="col-6">
              <label>
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span style="font-size: 0.7rem">Remember me</span>
              </label>
            </div>
            <div className="col-6">
              <span className="forgotpassword">Need Help?</span>
            </div> */}
        </form>
      </div>
    </div>
  );
}
