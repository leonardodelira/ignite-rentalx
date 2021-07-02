import { Router } from 'express';
import { AuthenticationController } from '../modules/accounts/usecases/authentication/AuthenticationController';

const authenticationRoute = Router();

const authenticationController = new AuthenticationController();

authenticationRoute.post('/sessions', authenticationController.handle);

export { authenticationRoute };
