import { OpenAPIHono } from '@hono/zod-openapi'
import { postPostReviewRoute } from './routes'
import { postPostReviewRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postPostReviewRoute, postPostReviewRouteHandler)

export default app
