import { Router } from "express";
import authorize from "../middleware/auth.middlware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET All Subscriptions' }))

subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'Get subscription details' }))

subscriptionRouter.post('/', authorize , createSubscription)

subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE Subscription' }))

subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'Delete Subscription' }))

subscriptionRouter.get('/user/:id',authorize , getUserSubscriptions)

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'CANCEL Subscription' }))

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'Get Upcoming Renewls' }))

export default subscriptionRouter;