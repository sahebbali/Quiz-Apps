import { Router } from 'express';
const router = Router();

/** import controllers */
import * as controller from "../controller/controller.js"

/** Questions Routes API */

 router.route('/questions')
        .get(controller.getQuestions)
        .post(controller.insertQuestions)
        .delete(controller.dropQuestions)
        

router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

export default router;
// module.exports = router;