import { OpenAPIHono } from '@hono/zod-openapi'
import { postFormatRoute } from './routes'
import { postFormatRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postFormatRoute, postFormatRouteHandler)

export default app
