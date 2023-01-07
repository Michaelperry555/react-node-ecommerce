import express from 'express';
import authRouter from './auth.js';
import categoryRouter from './category.js';
import productRouter from './product.js';

const appRouter = express.Router();

appRouter.use(authRouter);
appRouter.use(categoryRouter);
appRouter.use(productRouter)


export default appRouter;