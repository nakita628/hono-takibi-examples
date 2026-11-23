import { OpenAPIHono } from '@hono/zod-openapi'
import { getNameConceptTypeSpecificConceptJsonRoute, getSearchJsonRoute } from './routes'
import {
  getNameConceptTypeSpecificConceptJsonRouteHandler,
  getSearchJsonRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getNameConceptTypeSpecificConceptJsonRoute,
    getNameConceptTypeSpecificConceptJsonRouteHandler,
  )
  .openapi(getSearchJsonRoute, getSearchJsonRouteHandler)

export default app
