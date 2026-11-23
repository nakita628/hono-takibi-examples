import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1EmailDisposableRoute } from './routes'
import { getV1EmailDisposableRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getV1EmailDisposableRoute, getV1EmailDisposableRouteHandler)

export default app
