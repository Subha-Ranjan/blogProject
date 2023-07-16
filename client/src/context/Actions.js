export const LoginStart = (userCredentials) => ({ type: "LOGIN_START" });

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user, //37min:to updatre the state we gonna use "user"
});
export const LoginFailure = () => ({ type: "LOGIN_FAILURE" });

export const Logout = () => ({ type: "LOGOUT" });

