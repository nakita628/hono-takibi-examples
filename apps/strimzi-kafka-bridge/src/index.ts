import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  adminHandler,
  consumersHandler,
  healthyHandler,
  metricsHandler,
  openapiHandler,
  readyHandler,
  topicsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', consumersHandler)
  .route('/', topicsHandler)
  .route('/', adminHandler)
  .route('/', healthyHandler)
  .route('/', readyHandler)
  .route('/', openapiHandler)
  .route('/', metricsHandler)
  .route('/', __rootHandler)

export default app
