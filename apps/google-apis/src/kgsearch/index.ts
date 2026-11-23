import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1EntitiesSearchRoute } from './routes'
import { getV1EntitiesSearchRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getV1EntitiesSearchRoute, getV1EntitiesSearchRouteHandler)

export default app
