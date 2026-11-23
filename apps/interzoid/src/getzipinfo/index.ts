import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetzipcodeinfoRoute } from './routes'
import { getGetzipcodeinfoRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGetzipcodeinfoRoute, getGetzipcodeinfoRouteHandler)

export default app
