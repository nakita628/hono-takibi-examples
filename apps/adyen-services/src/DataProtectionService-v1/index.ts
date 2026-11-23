import { OpenAPIHono } from '@hono/zod-openapi'
import { postRequestSubjectErasureRoute } from './routes'
import { postRequestSubjectErasureRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postRequestSubjectErasureRoute,
  postRequestSubjectErasureRouteHandler,
)

export default app
