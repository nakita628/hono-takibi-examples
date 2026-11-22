import { OpenAPIHono } from '@hono/zod-openapi'
import {
  carCachedImageHandler,
  carSearchHandler,
  carsHistoryAPIHandler,
  carsMarketAPIHandler,
  clientFiltersHandler,
  crmCleanseAPIHandler,
  dealerAPIHandler,
  heavyEquipmentSearchHandler,
  motorcycleSearchHandler,
  oemIncentiveSearchHandler,
  rankCarListingsHandler,
  recallSearchHandler,
  rvSearchHandler,
  vinDecoderAPIHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', carSearchHandler)
  .route('/', recallSearchHandler)
  .route('/', clientFiltersHandler)
  .route('/', crmCleanseAPIHandler)
  .route('/', dealerAPIHandler)
  .route('/', vinDecoderAPIHandler)
  .route('/', carsHistoryAPIHandler)
  .route('/', carCachedImageHandler)
  .route('/', heavyEquipmentSearchHandler)
  .route('/', motorcycleSearchHandler)
  .route('/', rvSearchHandler)
  .route('/', carsMarketAPIHandler)
  .route('/', rankCarListingsHandler)
  .route('/', oemIncentiveSearchHandler)

export default app
