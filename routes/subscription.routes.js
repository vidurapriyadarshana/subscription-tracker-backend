import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET All Subscriptions' }))

subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'Get subscription details' }))

subscriptionRouter.post('/', (req, res) => res.send({ title: 'Create Subscription' }))

subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE Subscription' }))

subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'Delete Subscription' }))

subscriptionRouter.get('/user/:id', (req, res) => res.send({ title: 'Get All User Subscription' }))

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'CANCEL Subscription' }))

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'Get Upcoming Renewls' }))

export default subscriptionRouter;