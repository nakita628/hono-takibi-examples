import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHealthRoute,
  getInfoRoute,
  getMetricsRoute,
  getV1ModelsRoute,
  postChatTokenizeRoute,
  postGenerateRoute,
  postGenerateStreamRoute,
  postInvocationsRoute,
  postRoute,
  postTokenizeRoute,
  postV1ChatCompletionsRoute,
  postV1CompletionsRoute,
} from './routes'
import {
  getHealthRouteHandler,
  getInfoRouteHandler,
  getMetricsRouteHandler,
  getV1ModelsRouteHandler,
  postChatTokenizeRouteHandler,
  postGenerateRouteHandler,
  postGenerateStreamRouteHandler,
  postInvocationsRouteHandler,
  postRouteHandler,
  postTokenizeRouteHandler,
  postV1ChatCompletionsRouteHandler,
  postV1CompletionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postRoute, postRouteHandler)
  .openapi(postChatTokenizeRoute, postChatTokenizeRouteHandler)
  .openapi(postGenerateRoute, postGenerateRouteHandler)
  .openapi(postGenerateStreamRoute, postGenerateStreamRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getInfoRoute, getInfoRouteHandler)
  .openapi(postInvocationsRoute, postInvocationsRouteHandler)
  .openapi(getMetricsRoute, getMetricsRouteHandler)
  .openapi(postTokenizeRoute, postTokenizeRouteHandler)
  .openapi(postV1ChatCompletionsRoute, postV1ChatCompletionsRouteHandler)
  .openapi(postV1CompletionsRoute, postV1CompletionsRouteHandler)
  .openapi(getV1ModelsRoute, getV1ModelsRouteHandler)

export default app
