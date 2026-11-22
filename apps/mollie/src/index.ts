import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsAPIHandler,
  balancesAPIHandler,
  balanceTransfersAPIHandler,
  capabilitiesAPIHandler,
  capturesAPIHandler,
  chargebacksAPIHandler,
  checkoutSessionsAPIHandler,
  clientLinksAPIHandler,
  clientsAPIHandler,
  customersAPIHandler,
  delayedRoutingAPIHandler,
  draftTransfersAPIHandler,
  invoicesAPIHandler,
  mandatesAPIHandler,
  methodsAPIHandler,
  oAuthAPIHandler,
  onboardingAPIHandler,
  organizationsAPIHandler,
  paymentLinksAPIHandler,
  paymentsAPIHandler,
  payoutsAPIHandler,
  permissionsAPIHandler,
  profilesAPIHandler,
  refundsAPIHandler,
  reportsAPIHandler,
  salesInvoicesAPIHandler,
  settlementsAPIHandler,
  subscriptionsAPIHandler,
  terminalsAPIHandler,
  transfersAPIHandler,
  unmatchedCreditTransfersAPIHandler,
  verifyPayeeAPIHandler,
  walletsAPIHandler,
  webhookEventsAPIHandler,
  webhooksAPIHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', oAuthAPIHandler)
  .route('/', balancesAPIHandler)
  .route('/', reportsAPIHandler)
  .route('/', settlementsAPIHandler)
  .route('/', invoicesAPIHandler)
  .route('/', permissionsAPIHandler)
  .route('/', organizationsAPIHandler)
  .route('/', profilesAPIHandler)
  .route('/', onboardingAPIHandler)
  .route('/', capabilitiesAPIHandler)
  .route('/', clientsAPIHandler)
  .route('/', clientLinksAPIHandler)
  .route('/', webhooksAPIHandler)
  .route('/', webhookEventsAPIHandler)
  .route('/', balanceTransfersAPIHandler)
  .route('/', paymentsAPIHandler)
  .route('/', unmatchedCreditTransfersAPIHandler)
  .route('/', checkoutSessionsAPIHandler)
  .route('/', methodsAPIHandler)
  .route('/', refundsAPIHandler)
  .route('/', chargebacksAPIHandler)
  .route('/', capturesAPIHandler)
  .route('/', walletsAPIHandler)
  .route('/', paymentLinksAPIHandler)
  .route('/', terminalsAPIHandler)
  .route('/', delayedRoutingAPIHandler)
  .route('/', customersAPIHandler)
  .route('/', mandatesAPIHandler)
  .route('/', subscriptionsAPIHandler)
  .route('/', salesInvoicesAPIHandler)
  .route('/', accountsAPIHandler)
  .route('/', transfersAPIHandler)
  .route('/', verifyPayeeAPIHandler)
  .route('/', draftTransfersAPIHandler)
  .route('/', payoutsAPIHandler)

export default app
