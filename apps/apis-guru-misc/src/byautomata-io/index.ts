import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContentproSearchRoute,
  getSearchRoute,
  getSimilarRoute,
  postContentproSimilarTextRoute,
} from './routes'
import {
  getContentproSearchRouteHandler,
  getSearchRouteHandler,
  getSimilarRouteHandler,
  postContentproSimilarTextRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getContentproSearchRoute, getContentproSearchRouteHandler)
  .openapi(postContentproSimilarTextRoute, postContentproSimilarTextRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(getSimilarRoute, getSimilarRouteHandler)

export default app
