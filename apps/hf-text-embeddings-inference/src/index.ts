import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHealthRoute,
  getInfoRoute,
  getMetricsRoute,
  postDecodeRoute,
  postEmbedAllRoute,
  postEmbedRoute,
  postEmbedSparseRoute,
  postPredictRoute,
  postRerankRoute,
  postSimilarityRoute,
  postTokenizeRoute,
  postV1EmbeddingsRoute,
} from './routes'
import {
  getHealthRouteHandler,
  getInfoRouteHandler,
  getMetricsRouteHandler,
  postDecodeRouteHandler,
  postEmbedAllRouteHandler,
  postEmbedRouteHandler,
  postEmbedSparseRouteHandler,
  postPredictRouteHandler,
  postRerankRouteHandler,
  postSimilarityRouteHandler,
  postTokenizeRouteHandler,
  postV1EmbeddingsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDecodeRoute, postDecodeRouteHandler)
  .openapi(postEmbedRoute, postEmbedRouteHandler)
  .openapi(postEmbedAllRoute, postEmbedAllRouteHandler)
  .openapi(postEmbedSparseRoute, postEmbedSparseRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getInfoRoute, getInfoRouteHandler)
  .openapi(getMetricsRoute, getMetricsRouteHandler)
  .openapi(postPredictRoute, postPredictRouteHandler)
  .openapi(postRerankRoute, postRerankRouteHandler)
  .openapi(postSimilarityRoute, postSimilarityRouteHandler)
  .openapi(postTokenizeRoute, postTokenizeRouteHandler)
  .openapi(postV1EmbeddingsRoute, postV1EmbeddingsRouteHandler)

export default app
