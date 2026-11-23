import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHealthRoute,
  getMetricsRoute,
  getModelsRoute,
  getRoute,
  postClassifyRoute,
  postEmbeddingsAudioRoute,
  postEmbeddingsImageRoute,
  postEmbeddingsRoute,
  postRerankRoute,
} from './routes'
import {
  getHealthRouteHandler,
  getMetricsRouteHandler,
  getModelsRouteHandler,
  getRouteHandler,
  postClassifyRouteHandler,
  postEmbeddingsAudioRouteHandler,
  postEmbeddingsImageRouteHandler,
  postEmbeddingsRouteHandler,
  postRerankRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getRoute, getRouteHandler)
  .openapi(getModelsRoute, getModelsRouteHandler)
  .openapi(postEmbeddingsRoute, postEmbeddingsRouteHandler)
  .openapi(postRerankRoute, postRerankRouteHandler)
  .openapi(postClassifyRoute, postClassifyRouteHandler)
  .openapi(postEmbeddingsImageRoute, postEmbeddingsImageRouteHandler)
  .openapi(postEmbeddingsAudioRoute, postEmbeddingsAudioRouteHandler)
  .openapi(getMetricsRoute, getMetricsRouteHandler)

export default app
