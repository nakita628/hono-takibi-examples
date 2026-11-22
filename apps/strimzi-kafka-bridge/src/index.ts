import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  consumersHandler,
  healthyHandler,
  metricsHandler,
  openapiHandler,
  readyHandler,
  seekHandler,
  topicsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', consumersHandler)
  .route('/', seekHandler)
  .route('/', topicsHandler)
  .route('/', healthyHandler)
  .route('/', readyHandler)
  .route('/', openapiHandler)
  .route('/', metricsHandler)
  .route('/', __rootHandler)

export default app
