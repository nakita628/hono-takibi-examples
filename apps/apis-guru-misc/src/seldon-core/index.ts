import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAggregateRoute,
  getPredictRoute,
  getRouteRoute,
  getSendFeedbackRoute,
  getTransformInputRoute,
  getTransformOutputRoute,
  postAggregateRoute,
  postPredictRoute,
  postRouteRoute,
  postSendFeedbackRoute,
  postTransformInputRoute,
  postTransformOutputRoute,
} from './routes'
import {
  getAggregateRouteHandler,
  getPredictRouteHandler,
  getRouteRouteHandler,
  getSendFeedbackRouteHandler,
  getTransformInputRouteHandler,
  getTransformOutputRouteHandler,
  postAggregateRouteHandler,
  postPredictRouteHandler,
  postRouteRouteHandler,
  postSendFeedbackRouteHandler,
  postTransformInputRouteHandler,
  postTransformOutputRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAggregateRoute, getAggregateRouteHandler)
  .openapi(postAggregateRoute, postAggregateRouteHandler)
  .openapi(getPredictRoute, getPredictRouteHandler)
  .openapi(postPredictRoute, postPredictRouteHandler)
  .openapi(getRouteRoute, getRouteRouteHandler)
  .openapi(postRouteRoute, postRouteRouteHandler)
  .openapi(getSendFeedbackRoute, getSendFeedbackRouteHandler)
  .openapi(postSendFeedbackRoute, postSendFeedbackRouteHandler)
  .openapi(getTransformInputRoute, getTransformInputRouteHandler)
  .openapi(postTransformInputRoute, postTransformInputRouteHandler)
  .openapi(getTransformOutputRoute, getTransformOutputRouteHandler)
  .openapi(postTransformOutputRoute, postTransformOutputRouteHandler)

export default app
