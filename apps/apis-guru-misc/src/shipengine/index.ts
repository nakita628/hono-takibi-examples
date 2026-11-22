import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addressesHandler,
  batchesHandler,
  carrierAccountsHandler,
  carriersHandler,
  downloadsHandler,
  insuranceHandler,
  labelsHandler,
  manifestsHandler,
  packagePickupsHandler,
  packageTypesHandler,
  ratesHandler,
  servicePointsHandler,
  shipmentsHandler,
  tagsHandler,
  tokensHandler,
  trackingHandler,
  warehousesHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', addressesHandler)
  .route('/', batchesHandler)
  .route('/', carriersHandler)
  .route('/', carrierAccountsHandler)
  .route('/', insuranceHandler)
  .route('/', downloadsHandler)
  .route('/', webhooksHandler)
  .route('/', labelsHandler)
  .route('/', manifestsHandler)
  .route('/', packageTypesHandler)
  .route('/', packagePickupsHandler)
  .route('/', ratesHandler)
  .route('/', servicePointsHandler)
  .route('/', shipmentsHandler)
  .route('/', tagsHandler)
  .route('/', tokensHandler)
  .route('/', trackingHandler)
  .route('/', warehousesHandler)

export default app
