import { User } from '../../client/users/schemas/user.schema';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
