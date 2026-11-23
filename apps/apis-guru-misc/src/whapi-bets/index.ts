import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFreebetsRoute,
  getHistoryRoute,
  postBetComplexRoute,
  postBetSingleRoute,
  postBetslipsRoute,
  putBetIdCashinRoute,
} from './routes'
import {
  getFreebetsRouteHandler,
  getHistoryRouteHandler,
  postBetComplexRouteHandler,
  postBetSingleRouteHandler,
  postBetslipsRouteHandler,
  putBetIdCashinRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBetComplexRoute, postBetComplexRouteHandler)
  .openapi(postBetSingleRoute, postBetSingleRouteHandler)
  .openapi(postBetslipsRoute, postBetslipsRouteHandler)
  .openapi(getFreebetsRoute, getFreebetsRouteHandler)
  .openapi(getHistoryRoute, getHistoryRouteHandler)
  .openapi(putBetIdCashinRoute, putBetIdCashinRouteHandler)

export default app
