import React from 'react';

const NGOHospitalLogin = () => {
  return (
    <>
      <style>{`
        .overlay {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 4px 15px rgb(0 0 0 / 0.1);
          width: 320px;
          padding: 30px 25px 35px 25px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #000;
          position: relative;
          box-sizing: border-box;
        }
        .close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          font-weight: 700;
          font-size: 18px;
          color: #000;
          cursor: pointer;
          user-select: none;
          border: none;
          background: transparent;
          line-height: 1;
        }
        .title-main {
          font-weight: 900;
          font-size: 26px;
          text-align: center;
          margin-bottom: 7px;
          letter-spacing: 0.02em;
        }
        .title-login {
          color: #0051ff;
          font-weight: 700;
          font-size: 22px;
          text-align: center;
          margin-bottom: 28px;
          letter-spacing: 0.03em;
        }
        .input-field {
          display: block;
          width: 100%;
          background: #d2d2d2;
          border-radius: 10px;

          border: none;
          padding: 11px 18px;
          margin-bottom: 20px;
          font-weight: 600;
          font-size: 14px;
          color: #555;
          outline: none;
          box-sizing: border-box;
          transition: background-color 0.3s ease;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
         

        .input-field::placeholder {
          color: #8a8a8a;
          font-weight: 600;
        }
        .input-field:focus {
          background-color: #c1c1c1;
        }
          input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px #d2d2d2 inset !important;
  -webkit-text-fill-color: #555 !important;
  border-radius: 10px !important;  /* Match Darpan ID input */
}

        .btn-login {
          background-color: #0a76ff;
          color: #fff;
          font-size: 17px;
          font-weight: 700;
          width: 130px;
          height: 45px;
          border-radius: 25px;
          border: none;
          box-shadow: 0 4px 11px rgb(10 118 255 / 0.6);
          margin: 0 auto;
          display: block;
          cursor: pointer;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .btn-login:hover {
          background-color: #0051cc;
          box-shadow: 0 6px 15px rgb(0 81 204 / 0.8);
        }
      `}</style>
      <div className="overlay" role="dialog" aria-modal="true" aria-labelledby="formTitle">
        <button aria-label="Close login form" className="close-btn" type="button" onClick={() => alert('Close button clicked')}>×</button>
        <h1 id="formTitle" className="title-main">NGO/HOSPITAL</h1>
        <h2 className="title-login">LOGIN</h2>
        <form>
          <input
            aria-label="Darpan ID or UIN"
            className="input-field"
            type="text"
            placeholder="Darpan ID or UIN"
            name="darpanId"
            autoComplete="username"
          />
          <input
            aria-label="Password"
            className="input-field"
            type="text"
            placeholder="Password"
            name="password"
            autoComplete="current-password"
          />
          <button className="btn-login" type="submit" aria-label="Login to NGO or Hospital portal">Login</button>
        </form>
      </div>
    </>
  );
};

export default NGOHospitalLogin;

