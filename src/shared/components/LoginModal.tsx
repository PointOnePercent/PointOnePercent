// @ts-nocheck
// TODO this entire file is wrong

export {};

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useSelector, useDispatch } from 'react-redux';
// import { showLoginModal, logInUser } from '../../store/modules/Login';
// import { sha256 } from '../../helpers/hash';
// import logins from '../../mock/credentials.json';

// .login-modal-wrapper
//     position: fixed
//     display: flex
//     align-items: center
//     justify-content: center
//     width: 100%
//     height: 100%
//     z-index: 100000
//     background-color: rgba(0,0,0,0.8)
// .login-modal
//     padding: 10px
//     border: 1px solid #fff
//     background-color: $lightgrey
//     font-family: $font-raleway
//     display: flex
//     flex-direction: column
//     align-items: center
//     justify-content: space-evenly
// .login-modal-form
//     padding: 10px
//     margin: 10px
//     border: 1px solid $lightgrey
//     display: flex
//     flex-direction: column
//     align-items: center
//     justify-content: space-evenly
// .login-modal-input
//     margin: 5px 0
//     width: 250px
//     height: 40px
//     text-align: center
// .login-modal-button
// width: 250px

// const loginModalVisible = (show: boolean) =>
//   show
//     ? 'login-modal-wrapper display-flex'
//     : 'login-modal-wrapper display-none';

// export default function LoginModal(): JSX.Element {
//   const dispatch = useDispatch();

//   const showLoginModal = useSelector((state: any) => state.showLoginModal);
//   const [username, setUsername] = useState(null);
//   const [password, setPassword] = useState(null);
//   const [privilege, setPrivilege] = useState(null);
//   const [repeatedPassword, setRepeatedPassword] = useState(null);
//   const [registration, setRegistration] = useState(false);

//   const handleUsernameChange = (event: any) => setUsername(event.target.value);
//   const handlePasswordChange = (event: any) =>
//     setPassword(sha256(event.target.value));
//   const handleRepeatedPasswordChange = (event: any) =>
//     setRepeatedPassword(sha256(event.target.value));

//   const showLogin = () => dispatch(showLoginModal());
//   const showRegistration = () => setRegistration(!registration);
//   const logInOrRegister = () => (registration ? register() : logIn());

//   const logIn = () => {
//     if (
//       username &&
//       logins.hasOwnProperty(username) &&
//       logins[username].password === password
//     ) {
//       showLogin();
//       dispatch(
//         logInUser(
//           username,
//           logins[username].privilege,
//           logins[username].banned,
//         ),
//       );
//       return;
//     }
//     alert('Incorrect password or username.');
//   };

//   const register = () => {
//     if (password !== repeatedPassword) {
//       alert('Passwords differ.');
//       return;
//     }
//     logins[username] = password;
//     alert('User created! Now you can log in.');
//   };

//   return (
//     <div className={loginModalVisible(showLoginModal)}>
//       <div className="login-modal">
//         <div className="login-modal-form">
//           <input
//             className="login-modal-input"
//             placeholder="Username"
//             onChange={handleUsernameChange}></input>
//           <input
//             className="login-modal-input"
//             placeholder="Email"
//             hidden={true}></input>
//           <input
//             className="login-modal-input"
//             placeholder="Password"
//             type="password"
//             onChange={handlePasswordChange}></input>
//           <input
//             className="login-modal-input"
//             placeholder="Repeat password"
//             type="password"
//             onChange={handleRepeatedPasswordChange}
//             hidden={!registration}></input>
//           <button
//             className="custom-button login-modal-button"
//             onClick={logInOrRegister}>
//             {!registration ? 'Log in' : 'Register'}
//           </button>
//           <div onClick={showRegistration}>
//             {registration ? 'Log in' : 'Register'}
//           </div>
//         </div>
//         <button className="custom-button" onClick={showLogin}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }
