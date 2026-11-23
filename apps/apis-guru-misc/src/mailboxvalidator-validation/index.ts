import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ValidationSingleRoute } from './routes'
import { getV1ValidationSingleRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getV1ValidationSingleRoute, getV1ValidationSingleRouteHandler)

export default app
