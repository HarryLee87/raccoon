import { z } from 'zod';

const UserSchema = z.object({
  uid: z.string(),
  firstname: z.string().nullish(),
  lastname: z.string().nullish(),
  phone_number: z.string().nullish(),
  email: z.string().email().nullish(),
});

type IUser = z.infer<typeof UserSchema>;

export class User {
  readonly uid: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly phone_number: string;
  readonly email: string;

  constructor(data: Partial<IUser>) {
    const parsedData = UserSchema.parse(data);

    this.uid = parsedData.uid;
    this.firstname = parsedData.firstname ?? '';
    this.lastname = parsedData.lastname ?? '';
    this.phone_number = parsedData.lastname ?? '';
    this.email = parsedData.email ?? '';
  }
}
