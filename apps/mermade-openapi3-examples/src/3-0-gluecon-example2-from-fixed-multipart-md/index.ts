import { OpenAPIHono } from '@hono/zod-openapi'
import { postSubmitRoute } from './routes'
import { postSubmitRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postSubmitRoute, postSubmitRouteHandler)

export default app
