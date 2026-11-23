import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReviewReviewIdRoute,
  deleteReviewsRoute,
  getRatingProductIdRoute,
  getReviewReviewIdRoute,
  getReviewsRoute,
  patchReviewReviewIdRoute,
  postReviewRoute,
  postReviewsRoute,
} from './routes'
import {
  deleteReviewReviewIdRouteHandler,
  deleteReviewsRouteHandler,
  getRatingProductIdRouteHandler,
  getReviewReviewIdRouteHandler,
  getReviewsRouteHandler,
  patchReviewReviewIdRouteHandler,
  postReviewRouteHandler,
  postReviewsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRatingProductIdRoute, getRatingProductIdRouteHandler)
  .openapi(postReviewRoute, postReviewRouteHandler)
  .openapi(deleteReviewReviewIdRoute, deleteReviewReviewIdRouteHandler)
  .openapi(getReviewReviewIdRoute, getReviewReviewIdRouteHandler)
  .openapi(patchReviewReviewIdRoute, patchReviewReviewIdRouteHandler)
  .openapi(deleteReviewsRoute, deleteReviewsRouteHandler)
  .openapi(getReviewsRoute, getReviewsRouteHandler)
  .openapi(postReviewsRoute, postReviewsRouteHandler)

export default app
