import { OpenAPIHono } from '@hono/zod-openapi'
import {
  asyncFunctionHandler,
  functionHandler,
  healthzHandler,
  metricsHandler,
  systemHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', healthzHandler)
  .route('/', metricsHandler)
  .route('/', systemHandler)
  .route('/', asyncFunctionHandler)
  .route('/', functionHandler)

export default app
