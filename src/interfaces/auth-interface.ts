interface ISignUpBody {
  username?: string;
  email?: string;
  password?: string;
}

interface ISignInBody {
  username?: string;
  password?: string;
}

export { ISignUpBody, ISignInBody };
