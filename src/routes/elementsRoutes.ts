import express from 'express';
const ElementsRouter = express.Router();
import { CreateElement } from '../controllers/elementsControlles';

ElementsRouter.route('/').post(CreateElement);

// router
//   .route('/:id')
//   .get(getUserById)
//   .patch(updateUserById)
//   .delete(deleteUserById);

export default ElementsRouter;
