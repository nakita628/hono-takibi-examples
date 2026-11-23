import { OpenAPIHono } from '@hono/zod-openapi'
import { getCityRoute } from './routes'
import { getCityRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getCityRoute, getCityRouteHandler)

export default app
