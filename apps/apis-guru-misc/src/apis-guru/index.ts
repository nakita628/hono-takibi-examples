import { OpenAPIHono } from '@hono/zod-openapi'
import {
  listJsonHandler,
  metricsJsonHandler,
  providerHandler,
  providerJsonHandler,
  providersJsonHandler,
  specsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', listJsonHandler)
  .route('/', metricsJsonHandler)
  .route('/', providersJsonHandler)
  .route('/', specsHandler)
  .route('/', providerJsonHandler)
  .route('/', providerHandler)

export default app
