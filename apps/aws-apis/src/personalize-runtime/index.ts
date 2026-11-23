import { OpenAPIHono } from '@hono/zod-openapi'
import { postPersonalizeRankingRoute, postRecommendationsRoute } from './routes'
import { postPersonalizeRankingRouteHandler, postRecommendationsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postPersonalizeRankingRoute, postPersonalizeRankingRouteHandler)
  .openapi(postRecommendationsRoute, postRecommendationsRouteHandler)

export default app
