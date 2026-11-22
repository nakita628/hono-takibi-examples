import { OpenAPIHono } from '@hono/zod-openapi'
import {
  configHandler,
  jobHandler,
  metricsHandler,
  mockHandler,
  resourcesHandler,
  testHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', jobHandler)
  .route('/', mockHandler)
  .route('/', configHandler)
  .route('/', metricsHandler)
  .route('/', resourcesHandler)
  .route('/', testHandler)

export default app
