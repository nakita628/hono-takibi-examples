import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1betaNameRoute } from './routes'
import { getV1betaNameRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getV1betaNameRoute, getV1betaNameRouteHandler)

export default app
