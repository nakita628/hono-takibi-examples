import { OpenAPIHono } from '@hono/zod-openapi'
import {
  chargersHandler,
  chargingLocationsHandler,
  healthHandler,
  meHandler,
  statisticsHandler,
  usersHandler,
  vehiclesHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', chargersHandler)
  .route('/', chargingLocationsHandler)
  .route('/', healthHandler)
  .route('/', meHandler)
  .route('/', statisticsHandler)
  .route('/', usersHandler)
  .route('/', vehiclesHandler)
  .route('/', webhooksHandler)

export default app
