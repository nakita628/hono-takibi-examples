import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getModelsRoute,
  postAnalyzeRoute,
  postAreaOfInterestRoute,
  postDescribeRoute,
  postDetectRoute,
  postGenerateThumbnailRoute,
  postModelsModelAnalyzeRoute,
  postOcrRoute,
  postTagRoute,
} from './routes'
import {
  getModelsRouteHandler,
  postAnalyzeRouteHandler,
  postAreaOfInterestRouteHandler,
  postDescribeRouteHandler,
  postDetectRouteHandler,
  postGenerateThumbnailRouteHandler,
  postModelsModelAnalyzeRouteHandler,
  postOcrRouteHandler,
  postTagRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAnalyzeRoute, postAnalyzeRouteHandler)
  .openapi(postAreaOfInterestRoute, postAreaOfInterestRouteHandler)
  .openapi(postDescribeRoute, postDescribeRouteHandler)
  .openapi(postDetectRoute, postDetectRouteHandler)
  .openapi(postGenerateThumbnailRoute, postGenerateThumbnailRouteHandler)
  .openapi(getModelsRoute, getModelsRouteHandler)
  .openapi(postModelsModelAnalyzeRoute, postModelsModelAnalyzeRouteHandler)
  .openapi(postOcrRoute, postOcrRouteHandler)
  .openapi(postTagRoute, postTagRouteHandler)

export default app
