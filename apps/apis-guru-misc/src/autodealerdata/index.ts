import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authenticationHandler,
  dealershipDataHandler,
  pricingDataHandler,
  salesDataHandler,
  staticDataHandler,
  supplyDataHandler,
  vehicleDataHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', supplyDataHandler)
  .route('/', staticDataHandler)
  .route('/', dealershipDataHandler)
  .route('/', salesDataHandler)
  .route('/', authenticationHandler)
  .route('/', pricingDataHandler)
  .route('/', vehicleDataHandler)

export default app
