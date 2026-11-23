import { OpenAPIHono } from '@hono/zod-openapi'
import {
  advanceReceiptsHandler,
  businessesHandler,
  costBudgetsHandler,
  deliveriesHandler,
  masterHandler,
  otherCostsHandler,
  periodicSalesHandler,
  procurementsHandler,
  purchaseOrdersHandler,
  quotationsHandler,
  salesHandler,
  salesOrdersHandler,
  salesSchedulesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', businessesHandler)
  .route('/', costBudgetsHandler)
  .route('/', masterHandler)
  .route('/', purchaseOrdersHandler)
  .route('/', quotationsHandler)
  .route('/', salesOrdersHandler)
  .route('/', deliveriesHandler)
  .route('/', salesHandler)
  .route('/', periodicSalesHandler)
  .route('/', salesSchedulesHandler)
  .route('/', otherCostsHandler)
  .route('/', procurementsHandler)
  .route('/', advanceReceiptsHandler)

export default app
