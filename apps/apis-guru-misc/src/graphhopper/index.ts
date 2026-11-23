import { OpenAPIHono } from '@hono/zod-openapi'
import {
  clusterHandler,
  geocodeHandler,
  isochroneHandler,
  matchHandler,
  matrixHandler,
  routeHandler,
  vrpHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', clusterHandler)
  .route('/', geocodeHandler)
  .route('/', isochroneHandler)
  .route('/', matchHandler)
  .route('/', matrixHandler)
  .route('/', routeHandler)
  .route('/', vrpHandler)

export default app
