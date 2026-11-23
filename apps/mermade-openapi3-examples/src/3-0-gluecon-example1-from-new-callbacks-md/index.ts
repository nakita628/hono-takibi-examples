import { OpenAPIHono } from '@hono/zod-openapi'
import { postSubscribeRoute } from './routes'
import { postSubscribeRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postSubscribeRoute, postSubscribeRouteHandler)

export default app
