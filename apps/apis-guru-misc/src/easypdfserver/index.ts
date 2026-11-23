import { OpenAPIHono } from '@hono/zod-openapi'
import { postMakePdfRoute } from './routes'
import { postMakePdfRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postMakePdfRoute, postMakePdfRouteHandler)

export default app
