import { OpenAPIHono } from '@hono/zod-openapi'
import {
  advancedHandler,
  analysisHandler,
  currenciesHandler,
  etfsHandler,
  fundamentalsHandler,
  marketDataHandler,
  moneyMarketFundsHandler,
  mutualFundsHandler,
  referenceDataHandler,
  regulatoryHandler,
  technicalIndicatorHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', technicalIndicatorHandler)
  .route('/', analysisHandler)
  .route('/', advancedHandler)
  .route('/', fundamentalsHandler)
  .route('/', referenceDataHandler)
  .route('/', currenciesHandler)
  .route('/', regulatoryHandler)
  .route('/', marketDataHandler)
  .route('/', etfsHandler)
  .route('/', moneyMarketFundsHandler)
  .route('/', mutualFundsHandler)

export default app
