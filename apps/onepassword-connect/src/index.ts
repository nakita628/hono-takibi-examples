import { OpenAPIHono } from '@hono/zod-openapi'
import {
  activityHandler,
  healthHandler,
  heartbeatHandler,
  metricsHandler,
  vaultsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', activityHandler)
  .route('/', vaultsHandler)
  .route('/', heartbeatHandler)
  .route('/', healthHandler)
  .route('/', metricsHandler)

export default app
