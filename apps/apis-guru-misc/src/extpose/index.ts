import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserExtensionsRoute } from './routes'
import { getUserExtensionsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getUserExtensionsRoute, getUserExtensionsRouteHandler)

export default app
