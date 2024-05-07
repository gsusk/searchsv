import { Router } from "express"
import { suggestionSearch } from "../controller/searchController"
const router = Router()

router.get("/search", suggestionSearch)

export default router
