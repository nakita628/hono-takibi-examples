import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountManagementAccountsHandler,
  accountManagementBankingHandler,
  accountManagementReportsHandler,
  accountManagementUtilitiesHandler,
  authorizationSSOBrowserSessionsHandler,
  authorizationSSOSessionsHandler,
  authorizationTokenHandler,
  preTradeComplianceRestrictionsHandler,
  thirdPartiesCashBalancesHandler,
  thirdPartiesTaxVouchersHandler,
  tradingAccountsHandler,
  tradingAlertsHandler,
  tradingContractsHandler,
  tradingEventContractsHandler,
  tradingFAAllocationManagementHandler,
  tradingFAModelPortfoliosHandler,
  tradingFYIsAndNotificationsHandler,
  tradingMarketDataHandler,
  tradingOAuth10aHandler,
  tradingOrdersHandler,
  tradingPortfolioAnalystHandler,
  tradingPortfolioHandler,
  tradingScannerHandler,
  tradingSessionHandler,
  tradingWatchlistsHandler,
  tradingWebsocketHandler,
  utilitiesEchoHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountManagementAccountsHandler)
  .route('/', thirdPartiesCashBalancesHandler)
  .route('/', accountManagementBankingHandler)
  .route('/', utilitiesEchoHandler)
  .route('/', preTradeComplianceRestrictionsHandler)
  .route('/', authorizationSSOBrowserSessionsHandler)
  .route('/', authorizationSSOSessionsHandler)
  .route('/', accountManagementReportsHandler)
  .route('/', thirdPartiesTaxVouchersHandler)
  .route('/', authorizationTokenHandler)
  .route('/', tradingFAModelPortfoliosHandler)
  .route('/', tradingFYIsAndNotificationsHandler)
  .route('/', tradingAccountsHandler)
  .route('/', tradingFAAllocationManagementHandler)
  .route('/', tradingAlertsHandler)
  .route('/', tradingOrdersHandler)
  .route('/', tradingSessionHandler)
  .route('/', tradingContractsHandler)
  .route('/', tradingMarketDataHandler)
  .route('/', tradingScannerHandler)
  .route('/', tradingWatchlistsHandler)
  .route('/', tradingOAuth10aHandler)
  .route('/', tradingPortfolioAnalystHandler)
  .route('/', tradingPortfolioHandler)
  .route('/', accountManagementUtilitiesHandler)
  .route('/', tradingEventContractsHandler)
  .route('/', tradingWebsocketHandler)

export default app
