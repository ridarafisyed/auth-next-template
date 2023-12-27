export type FormDataType = {
    email: string;
    password: string;
    username?: string;
    confirmPassword?: string;
}

export type ErrorDataType = {
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
  systemError?:string
}