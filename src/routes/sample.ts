import { Router } from "express"
import { SampleController } from "../controllers/sample"

const router = Router({ mergeParams: true })
const controller = new SampleController()

router.route("/").get(controller.find).post(controller.create)

router
    .route("/:slug")
    .get(controller.get)
    .put(controller.update)
    .patch(controller.update)
    .delete(controller.delete)

export default router