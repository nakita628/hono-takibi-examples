import { OpenAPIHono } from '@hono/zod-openapi'
import { postOfrepV1EvaluateFlagsKeyRoute, postOfrepV1EvaluateFlagsRoute } from './routes'
import {
  postOfrepV1EvaluateFlagsKeyRouteHandler,
  postOfrepV1EvaluateFlagsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postOfrepV1EvaluateFlagsKeyRoute, postOfrepV1EvaluateFlagsKeyRouteHandler)
  .openapi(postOfrepV1EvaluateFlagsRoute, postOfrepV1EvaluateFlagsRouteHandler)

export default app
