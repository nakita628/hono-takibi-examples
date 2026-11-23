import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetemailinfoRoute } from './routes'
import { getGetemailinfoRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGetemailinfoRoute, getGetemailinfoRouteHandler)

export default app
