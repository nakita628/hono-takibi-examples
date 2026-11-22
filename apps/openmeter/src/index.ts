import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appCustomInvoicingHandler,
  appsHandler,
  appStripeHandler,
  billingHandler,
  customersHandler,
  debugHandler,
  entitlementsHandler,
  eventsHandler,
  lookupInformationHandler,
  metersHandler,
  notificationsHandler,
  portalHandler,
  productCatalogHandler,
  subjectsHandler,
  subscriptionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', productCatalogHandler)
  .route('/', appsHandler)
  .route('/', appCustomInvoicingHandler)
  .route('/', appStripeHandler)
  .route('/', billingHandler)
  .route('/', customersHandler)
  .route('/', entitlementsHandler)
  .route('/', debugHandler)
  .route('/', eventsHandler)
  .route('/', lookupInformationHandler)
  .route('/', metersHandler)
  .route('/', notificationsHandler)
  .route('/', portalHandler)
  .route('/', subjectsHandler)
  .route('/', subscriptionsHandler)

export default app
