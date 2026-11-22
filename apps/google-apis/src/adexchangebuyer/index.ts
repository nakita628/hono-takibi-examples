import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  billingInfoHandler,
  budgetHandler,
  creativesHandler,
  marketplacedealsHandler,
  marketplacenotesHandler,
  marketplaceprivateauctionHandler,
  performanceReportHandler,
  pretargetingConfigHandler,
  productsHandler,
  proposalsHandler,
  pubprofilesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', billingInfoHandler)
  .route('/', budgetHandler)
  .route('/', creativesHandler)
  .route('/', performanceReportHandler)
  .route('/', pretargetingConfigHandler)
  .route('/', marketplaceprivateauctionHandler)
  .route('/', productsHandler)
  .route('/', proposalsHandler)
  .route('/', marketplacedealsHandler)
  .route('/', marketplacenotesHandler)
  .route('/', pubprofilesHandler)

export default app
