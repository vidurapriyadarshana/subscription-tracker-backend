import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middlware.js";

const userRouter = Router();

userRouter.get('/', getUsers)
userRouter.get('/:id', authorize ,  getUser)
userRouter.post('/', (req, res) => res.send({ title: 'Create new user' }))
userRouter.put('/:id', (req, res) => res.send({ title: 'Update User' }))
userRouter.delete('/:id', (req, res) => res.send({ title: 'Delete User' }))

export default userRouter;