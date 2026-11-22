import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  addressesHandler,
  adjustmentsHandler,
  apiRootHandler,
  businessesHandler,
  checkoutDomainsHandler,
  clientTokensHandler,
  countriesHandler,
  currenciesHandler,
  customerPortalsHandler,
  customersHandler,
  discountGroupsHandler,
  discountsHandler,
  eventsHandler,
  eventTypesHandler,
  ipAddressesHandler,
  metricsHandler,
  notificationLogsHandler,
  notificationSettingsHandler,
  notificationsHandler,
  paymentMethodsHandler,
  pricesHandler,
  pricingPreviewHandler,
  productsHandler,
  reportsHandler,
  settingsHandler,
  simulationRunEventsHandler,
  simulationRunsHandler,
  simulationsHandler,
  simulationTypesHandler,
  subscriptionHistoryHandler,
  subscriptionsHandler,
  transactionsHandler,
  verificationsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', addressesHandler)
  .route('/', adjustmentsHandler)
  .route('/', settingsHandler)
  .route('/', businessesHandler)
  .route('/', checkoutDomainsHandler)
  .route('/', clientTokensHandler)
  .route('/', countriesHandler)
  .route('/', currenciesHandler)
  .route('/', customersHandler)
  .route('/', customerPortalsHandler)
  .route('/', discountGroupsHandler)
  .route('/', discountsHandler)
  .route('/', eventTypesHandler)
  .route('/', eventsHandler)
  .route('/', ipAddressesHandler)
  .route('/', metricsHandler)
  .route('/', notificationSettingsHandler)
  .route('/', notificationsHandler)
  .route('/', notificationLogsHandler)
  .route('/', paymentMethodsHandler)
  .route('/', pricesHandler)
  .route('/', pricingPreviewHandler)
  .route('/', productsHandler)
  .route('/', reportsHandler)
  .route('/', apiRootHandler)
  .route('/', simulationTypesHandler)
  .route('/', simulationsHandler)
  .route('/', simulationRunsHandler)
  .route('/', simulationRunEventsHandler)
  .route('/', subscriptionHistoryHandler)
  .route('/', subscriptionsHandler)
  .route('/', transactionsHandler)
  .route('/', verificationsHandler)

export default app
