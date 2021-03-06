import { Router } from 'express';
import { ensureAuthentication } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/accounts/usecases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/usecases/updateUserAvatar/UpdateUserAvatarController';
import multer from 'multer';
import uploadConfig from '../config/upload';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.patch('/avatar', ensureAuthentication, uploadAvatar.single('avatar'), updateUserAvatarController.handle);

export { usersRoutes };
