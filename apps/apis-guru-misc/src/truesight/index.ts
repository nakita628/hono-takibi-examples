import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionsHandler,
  applicationsHandler,
  devicesHandler,
  groupsHandler,
  historicalDataHandler,
  servicesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionsHandler)
  .route('/', applicationsHandler)
  .route('/', devicesHandler)
  .route('/', groupsHandler)
  .route('/', historicalDataHandler)
  .route('/', servicesHandler)

export default app
