import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetglobalnumberinfoRoute } from './routes'
import { getGetglobalnumberinfoRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGetglobalnumberinfoRoute, getGetglobalnumberinfoRouteHandler)

export default app
