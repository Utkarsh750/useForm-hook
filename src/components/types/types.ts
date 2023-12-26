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