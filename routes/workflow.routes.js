import { Router } from "express";

const workflowRouter = Router();

workflowRouter.get('/', (req, res) => res.send({ title: 'GET All Workflows' }))

export default workflowRouter;