import { Router } from 'express';
import { authenticationRoute } from './authentication.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationRoutes } from './specification.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specification', specificationRoutes);
router.use('/users', usersRoutes);
router.use(authenticationRoute);

export { router };
