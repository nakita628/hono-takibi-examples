import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmployeesIdRoute } from './routes'
import { getEmployeesIdRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getEmployeesIdRoute, getEmployeesIdRouteHandler)

export default app
