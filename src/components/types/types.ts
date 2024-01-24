export type formValues = {
    username: string;
    email: string;
    channel: string;
    social: {
        facebook : string;
        twitter : string;
    }
    phoneNumbers: string[]
    phNumbers: {
        number: string;
    }[];
    age: number;
    dob: Date;
  };

  export type FormData ={
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
    confirmPassword: string;
  }

  export type InputFields = {
    email: string;
    password: string
  }