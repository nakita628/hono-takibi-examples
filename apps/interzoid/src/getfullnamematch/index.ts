import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetfullnamematchRoute } from './routes'
import { getGetfullnamematchRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGetfullnamematchRoute, getGetfullnamematchRouteHandler)

export default app
