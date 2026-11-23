import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  accountsHandler,
  apiKeysHandler,
  authenticationHandler,
  blocklistHandler,
  cardIssuersHandler,
  customerIdHandler,
  customersHandler,
  disputesHandler,
  eventsHandler,
  gsmHandler,
  mandatesHandler,
  offerEngineHandler,
  organizationHandler,
  paymentLinkHandler,
  paymentMethodsHandler,
  paymentsHandler,
  payoutsHandler,
  pollHandler,
  profileAcquirersHandler,
  refundsHandler,
  relayHandler,
  routingHandler,
  subscriptionsHandler,
  telephoneOrderHandler,
  threeDsDecisionHandler,
  userHandler,
  v1Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', paymentsHandler)
  .route('/', paymentLinkHandler)
  .route('/', relayHandler)
  .route('/', refundsHandler)
  .route('/', organizationHandler)
  .route('/', accountsHandler)
  .route('/', accountHandler)
  .route('/', gsmHandler)
  .route('/', mandatesHandler)
  .route('/', customersHandler)
  .route('/', v1Handler)
  .route('/', paymentMethodsHandler)
  .route('/', customerIdHandler)
  .route('/', disputesHandler)
  .route('/', routingHandler)
  .route('/', offerEngineHandler)
  .route('/', blocklistHandler)
  .route('/', payoutsHandler)
  .route('/', apiKeysHandler)
  .route('/', eventsHandler)
  .route('/', pollHandler)
  .route('/', profileAcquirersHandler)
  .route('/', threeDsDecisionHandler)
  .route('/', authenticationHandler)
  .route('/', userHandler)
  .route('/', subscriptionsHandler)
  .route('/', cardIssuersHandler)
  .route('/', telephoneOrderHandler)

export default app
