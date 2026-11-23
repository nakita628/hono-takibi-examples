import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  accountHandler,
  adjustmentsHandler,
  checkoutDomainsHandler,
  clientTokensHandler,
  countriesHandler,
  currenciesHandler,
  customersHandler,
  discountGroupsHandler,
  discountsHandler,
  eventsHandler,
  eventTypesHandler,
  ipsHandler,
  metricsHandler,
  notificationSettingsHandler,
  notificationsHandler,
  pricesHandler,
  pricingPreviewHandler,
  productsHandler,
  reportsHandler,
  settingsHandler,
  simulationsHandler,
  simulationTypesHandler,
  subscriptionsHandler,
  transactionsHandler,
  verificationsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', customersHandler)
  .route('/', adjustmentsHandler)
  .route('/', settingsHandler)
  .route('/', checkoutDomainsHandler)
  .route('/', clientTokensHandler)
  .route('/', countriesHandler)
  .route('/', currenciesHandler)
  .route('/', discountGroupsHandler)
  .route('/', discountsHandler)
  .route('/', eventTypesHandler)
  .route('/', eventsHandler)
  .route('/', ipsHandler)
  .route('/', metricsHandler)
  .route('/', notificationSettingsHandler)
  .route('/', notificationsHandler)
  .route('/', pricesHandler)
  .route('/', pricingPreviewHandler)
  .route('/', productsHandler)
  .route('/', reportsHandler)
  .route('/', __rootHandler)
  .route('/', simulationTypesHandler)
  .route('/', simulationsHandler)
  .route('/', subscriptionsHandler)
  .route('/', transactionsHandler)
  .route('/', verificationsHandler)

export default app
