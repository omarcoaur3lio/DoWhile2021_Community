import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { createMessageController } from './controllers/CreateMessageController';
import { GetLass3MessagesController } from './controllers/GetLass3MessagesController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post('/messages',  ensureAuthenticated, new createMessageController().handle);

router.get("/messages/last3", new GetLass3MessagesController().handle)

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle)

export { router };