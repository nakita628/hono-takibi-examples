import { OpenAPIHono } from '@hono/zod-openapi'
import { getArticlesearchJsonRoute } from './routes'
import { getArticlesearchJsonRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getArticlesearchJsonRoute, getArticlesearchJsonRouteHandler)

export default app
