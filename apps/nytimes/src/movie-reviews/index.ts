import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCriticsResourceTypeJsonRoute,
  getReviewsResourceTypeJsonRoute,
  getReviewsSearchJsonRoute,
} from './routes'
import {
  getCriticsResourceTypeJsonRouteHandler,
  getReviewsResourceTypeJsonRouteHandler,
  getReviewsSearchJsonRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCriticsResourceTypeJsonRoute, getCriticsResourceTypeJsonRouteHandler)
  .openapi(getReviewsSearchJsonRoute, getReviewsSearchJsonRouteHandler)
  .openapi(getReviewsResourceTypeJsonRoute, getReviewsResourceTypeJsonRouteHandler)

export default app
