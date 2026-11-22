import { OpenAPIHono } from '@hono/zod-openapi'
import {
  acatsHandler,
  accountsHandler,
  agreementsHandler,
  assetsHandler,
  calendarHandler,
  cashInterestHandler,
  corporateActionsHandler,
  countryInfoHandler,
  cryptoFundingHandler,
  documentsHandler,
  eventsHandler,
  fpslProgramHandler,
  fundingHandler,
  fundingWalletsHandler,
  instantFundingHandler,
  ipoHandler,
  iraHandler,
  journalsHandler,
  kycHandler,
  logosHandler,
  oAuthHandler,
  portfolioHistoryHandler,
  rebalancingHandler,
  reportingHandler,
  tokenizationHandler,
  tradingHandler,
  watchlistHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', fundingWalletsHandler)
  .route('/', acatsHandler)
  .route('/', logosHandler)
  .route('/', accountsHandler)
  .route('/', fundingHandler)
  .route('/', kycHandler)
  .route('/', documentsHandler)
  .route('/', tokenizationHandler)
  .route('/', cryptoFundingHandler)
  .route('/', iraHandler)
  .route('/', tradingHandler)
  .route('/', agreementsHandler)
  .route('/', assetsHandler)
  .route('/', calendarHandler)
  .route('/', cashInterestHandler)
  .route('/', corporateActionsHandler)
  .route('/', countryInfoHandler)
  .route('/', eventsHandler)
  .route('/', fpslProgramHandler)
  .route('/', instantFundingHandler)
  .route('/', ipoHandler)
  .route('/', journalsHandler)
  .route('/', oAuthHandler)
  .route('/', rebalancingHandler)
  .route('/', reportingHandler)
  .route('/', portfolioHistoryHandler)
  .route('/', watchlistHandler)

export default app
