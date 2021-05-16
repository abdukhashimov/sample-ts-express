import { Router } from "express"
import { SampleController } from "../controllers/sample"
import { Storage } from "../storage/main"

const router = Router({ mergeParams: true })
const storage = new Storage()
const controller = new SampleController(storage)

router.route("/").get(controller.find).post(controller.create)

router
    .route("/:id")
    .get(controller.get)
    .put(controller.update)
    .patch(controller.update)
    .delete(controller.delete)
