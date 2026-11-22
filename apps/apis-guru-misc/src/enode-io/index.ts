import { OpenAPIHono } from '@hono/zod-openapi'
import {
  chargersHandler,
  chargingLocationsHandler,
  meHandler,
  serviceHealthHandler,
  statisticsHandler,
  userManagementHandler,
  vehiclesHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', chargersHandler)
  .route('/', chargingLocationsHandler)
  .route('/', serviceHealthHandler)
  .route('/', meHandler)
  .route('/', statisticsHandler)
  .route('/', userManagementHandler)
  .route('/', vehiclesHandler)
  .route('/', webhooksHandler)

export default app
