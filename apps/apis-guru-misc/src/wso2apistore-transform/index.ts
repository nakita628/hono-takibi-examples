import { OpenAPIHono } from '@hono/zod-openapi'
import { postJsontoxmlRoute, postXmltojsonRoute } from './routes'
import { postJsontoxmlRouteHandler, postXmltojsonRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postJsontoxmlRoute, postJsontoxmlRouteHandler)
  .openapi(postXmltojsonRoute, postXmltojsonRouteHandler)

export default app
