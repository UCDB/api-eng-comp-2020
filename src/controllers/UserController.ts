import { Request, Response } from 'express';
import User from '../schemas/User';

class UserController {
  public static async find(req: Request, res: Response): Promise<Response> {
    const users = await User.find();

    return res.json(users);
  }

  public static async create(req: Request, res: Response): Promise<Response> {
    const users = await User.create(req.body);

    return res.status(201).json(users);
  }
}

export default UserController;
