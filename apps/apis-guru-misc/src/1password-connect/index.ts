import { OpenAPIHono } from '@hono/zod-openapi'
import {
  activityHandler,
  filesHandler,
  healthHandler,
  itemsHandler,
  metricsHandler,
  vaultsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', activityHandler)
  .route('/', healthHandler)
  .route('/', metricsHandler)
  .route('/', vaultsHandler)
  .route('/', itemsHandler)
  .route('/', filesHandler)

export default app
