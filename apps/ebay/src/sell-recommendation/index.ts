import { OpenAPIHono } from '@hono/zod-openapi'
import { listingRecommendationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', listingRecommendationHandler)

export default app
