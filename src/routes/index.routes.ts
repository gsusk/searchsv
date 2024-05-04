import { Router } from "express"
import { basicRecommendationSearch } from "../controller/searchController"
const router = Router()

router.get("/search", basicRecommendationSearch)

export default router
