import { OpenAPIHono } from '@hono/zod-openapi'
import {
  activityLogsHandler,
  addOnsHandler,
  analyticsHandler,
  apiLogsHandler,
  billableMetricsHandler,
  billingEntitiesHandler,
  couponsHandler,
  creditNotesHandler,
  customersHandler,
  entitlementsHandler,
  eventsHandler,
  featuresHandler,
  feesHandler,
  invoicesHandler,
  orderFormsHandler,
  ordersHandler,
  organizationsHandler,
  paymentMethodsHandler,
  paymentReceiptsHandler,
  paymentRequestsHandler,
  paymentsHandler,
  plansHandler,
  quotesHandler,
  subscriptionsHandler,
  taxesHandler,
  usageAttributionTypesHandler,
  walletsHandler,
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
  .route('/', couponsHandler)
  .route('/', billableMetricsHandler)
  .route('/', featuresHandler)
  .route('/', creditNotesHandler)
  .route('/', customersHandler)
  .route('/', walletsHandler)
  .route('/', paymentMethodsHandler)
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
  .route('/', entitlementsHandler)
  .route('/', quotesHandler)
  .route('/', subscriptionsHandler)
  .route('/', taxesHandler)
  .route('/', usageAttributionTypesHandler)
  .route('/', webhooksHandler)
  .route('/', webhookEndpointsHandler)

export default app
