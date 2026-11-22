import { OpenAPIHono } from '@hono/zod-openapi'
import {
  pricesAndFixedPricesHandler,
  priceTablesHandler,
  pricingConfigurationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', pricingConfigurationHandler)
  .route('/', priceTablesHandler)
  .route('/', pricesAndFixedPricesHandler)

export default app
