import { Router } from "express"
import sampleRouter from "./sample"

const router = Router({ mergeParams: true })

router.use("/sample", sampleRouter)

export default router