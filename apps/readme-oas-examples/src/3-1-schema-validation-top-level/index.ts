import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnythingNumbersRoute } from './routes'
import { getAnythingNumbersRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getAnythingNumbersRoute, getAnythingNumbersRouteHandler)

export default app
