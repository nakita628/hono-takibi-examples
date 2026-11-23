import { OpenAPIHono } from '@hono/zod-openapi'
import { postSvgconvertRoute } from './routes'
import { postSvgconvertRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postSvgconvertRoute, postSvgconvertRouteHandler)

export default app
