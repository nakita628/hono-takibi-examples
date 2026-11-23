import { OpenAPIHono } from '@hono/zod-openapi'
import { postVisitorIdentification202609TokensCreateRoute } from './routes'
import { postVisitorIdentification202609TokensCreateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postVisitorIdentification202609TokensCreateRoute,
  postVisitorIdentification202609TokensCreateRouteHandler,
)

export default app
