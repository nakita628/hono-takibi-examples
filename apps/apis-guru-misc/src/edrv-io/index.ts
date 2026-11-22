import { OpenAPIHono } from '@hono/zod-openapi'
import {
  chargeStationsHandler,
  commandsHandler,
  configurationsHandler,
  connectorsHandler,
  driversHandler,
  locationsHandler,
  organizationsHandler,
  realtimeHandler,
  reservationsHandler,
  smartChargingHandler,
  tokensHandler,
  transactionsHandler,
  vehiclesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', chargeStationsHandler)
  .route('/', commandsHandler)
  .route('/', smartChargingHandler)
  .route('/', configurationsHandler)
  .route('/', connectorsHandler)
  .route('/', driversHandler)
  .route('/', locationsHandler)
  .route('/', organizationsHandler)
  .route('/', realtimeHandler)
  .route('/', reservationsHandler)
  .route('/', tokensHandler)
  .route('/', transactionsHandler)
  .route('/', vehiclesHandler)

export default app
