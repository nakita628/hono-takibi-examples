import { OpenAPIHono } from '@hono/zod-openapi'
import {
  docksHandler,
  freightValuesHandler,
  holidaysHandler,
  inventoryHandler,
  pickupPointsHandler,
  polygonsHandler,
  reservationsHandler,
  scheduledDeliveryHandler,
  shippingPoliciesHandler,
  slaHandler,
  warehousesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', scheduledDeliveryHandler)
  .route('/', docksHandler)
  .route('/', freightValuesHandler)
  .route('/', polygonsHandler)
  .route('/', holidaysHandler)
  .route('/', pickupPointsHandler)
  .route('/', warehousesHandler)
  .route('/', inventoryHandler)
  .route('/', reservationsHandler)
  .route('/', shippingPoliciesHandler)
  .route('/', slaHandler)

export default app
