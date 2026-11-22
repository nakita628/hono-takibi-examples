import { OpenAPIHono } from '@hono/zod-openapi'
import {
  clusterAPIHandler,
  geocodingAPIHandler,
  isochroneAPIHandler,
  mapMatchingAPIHandler,
  matrixAPIHandler,
  routeOptimizationAPIHandler,
  routingAPIHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', clusterAPIHandler)
  .route('/', geocodingAPIHandler)
  .route('/', isochroneAPIHandler)
  .route('/', mapMatchingAPIHandler)
  .route('/', matrixAPIHandler)
  .route('/', routingAPIHandler)
  .route('/', routeOptimizationAPIHandler)

export default app
