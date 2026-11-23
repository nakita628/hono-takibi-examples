import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSimilarityBySongRoute,
  getSongSearchRoute,
  postSimilarityByContentRoute,
} from './routes'
import {
  getSimilarityBySongRouteHandler,
  getSongSearchRouteHandler,
  postSimilarityByContentRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postSimilarityByContentRoute, postSimilarityByContentRouteHandler)
  .openapi(getSimilarityBySongRoute, getSimilarityBySongRouteHandler)
  .openapi(getSongSearchRoute, getSongSearchRouteHandler)

export default app
