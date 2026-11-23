import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetstateabbreviationRoute } from './routes'
import { getGetstateabbreviationRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGetstateabbreviationRoute, getGetstateabbreviationRouteHandler)

export default app
