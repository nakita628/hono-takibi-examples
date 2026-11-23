import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  chatTokenizeHandler,
  generateHandler,
  generateStreamHandler,
  healthHandler,
  infoHandler,
  invocationsHandler,
  metricsHandler,
  tokenizeHandler,
  v1Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', chatTokenizeHandler)
  .route('/', generateHandler)
  .route('/', generateStreamHandler)
  .route('/', healthHandler)
  .route('/', infoHandler)
  .route('/', invocationsHandler)
  .route('/', metricsHandler)
  .route('/', tokenizeHandler)
  .route('/', v1Handler)

export default app
