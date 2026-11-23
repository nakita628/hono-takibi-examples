import { OpenAPIHono } from '@hono/zod-openapi'
import { getActivitiesRoute } from './routes'
import { getActivitiesRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getActivitiesRoute, getActivitiesRouteHandler)

export default app
