import { OpenAPIHono } from '@hono/zod-openapi'
import { getQuestionsRoute, postQuestionsRoute } from './routes'
import { getQuestionsRouteHandler, postQuestionsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getQuestionsRoute, getQuestionsRouteHandler)
  .openapi(postQuestionsRoute, postQuestionsRouteHandler)

export default app
