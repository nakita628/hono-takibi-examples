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
  .route('/', vaultsHandler)
  .route('/', itemsHandler)
  .route('/', filesHandler)
  .route('/', healthHandler)
  .route('/', metricsHandler)

export default app
