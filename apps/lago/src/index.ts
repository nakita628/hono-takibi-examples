import { OpenAPIHono } from '@hono/zod-openapi'
import {
  activityLogsHandler,
  addOnsHandler,
  analyticsHandler,
  apiLogsHandler,
  appliedCouponsHandler,
  billableMetricsHandler,
  billingEntitiesHandler,
  couponsHandler,
  creditNotesHandler,
  customersHandler,
  eventsHandler,
  featuresHandler,
  feesHandler,
  invoicesHandler,
  orderFormsHandler,
  ordersHandler,
  organizationsHandler,
  paymentReceiptsHandler,
  paymentRequestsHandler,
  paymentsHandler,
  plansHandler,
  quotesHandler,
  quoteVersionsHandler,
  subscriptionsHandler,
  taxesHandler,
  usageAttributionTypesHandler,
  walletsHandler,
  walletTransactionsHandler,
  webhookEndpointsHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', billingEntitiesHandler)
  .route('/', activityLogsHandler)
  .route('/', addOnsHandler)
  .route('/', apiLogsHandler)
  .route('/', analyticsHandler)
  .route('/', appliedCouponsHandler)
  .route('/', billableMetricsHandler)
  .route('/', featuresHandler)
  .route('/', couponsHandler)
  .route('/', creditNotesHandler)
  .route('/', customersHandler)
  .route('/', eventsHandler)
  .route('/', feesHandler)
  .route('/', invoicesHandler)
  .route('/', orderFormsHandler)
  .route('/', ordersHandler)
  .route('/', organizationsHandler)
  .route('/', paymentReceiptsHandler)
  .route('/', paymentRequestsHandler)
  .route('/', paymentsHandler)
  .route('/', plansHandler)
  .route('/', quotesHandler)
  .route('/', quoteVersionsHandler)
  .route('/', subscriptionsHandler)
  .route('/', taxesHandler)
  .route('/', usageAttributionTypesHandler)
  .route('/', walletsHandler)
  .route('/', walletTransactionsHandler)
  .route('/', webhooksHandler)
  .route('/', webhookEndpointsHandler)

export default app
