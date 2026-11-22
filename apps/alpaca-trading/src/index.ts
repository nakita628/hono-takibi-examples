import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountActivitiesHandler,
  accountConfigurationsHandler,
  accountsHandler,
  assetsHandler,
  calendarHandler,
  corporateActionsHandler,
  cryptoFundingHandler,
  eventsHandler,
  locatesHandler,
  ordersHandler,
  portfolioHistoryHandler,
  positionsHandler,
  tokenizationHandler,
  watchlistsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', locatesHandler)
  .route('/', eventsHandler)
  .route('/', accountsHandler)
  .route('/', accountActivitiesHandler)
  .route('/', accountConfigurationsHandler)
  .route('/', portfolioHistoryHandler)
  .route('/', assetsHandler)
  .route('/', calendarHandler)
  .route('/', corporateActionsHandler)
  .route('/', ordersHandler)
  .route('/', positionsHandler)
  .route('/', tokenizationHandler)
  .route('/', cryptoFundingHandler)
  .route('/', watchlistsHandler)

export default app
