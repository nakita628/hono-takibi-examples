import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  applicationHandler,
  assetReportHandler,
  authHandler,
  bankTransferHandler,
  betaHandler,
  categoriesHandler,
  creditHandler,
  dashboardUserHandler,
  depositSwitchHandler,
  employersHandler,
  employmentHandler,
  fdxHandler,
  identityHandler,
  identityVerificationHandler,
  incomeHandler,
  institutionsHandler,
  investmentsHandler,
  itemHandler,
  liabilitiesHandler,
  linkDeliveryHandler,
  linkHandler,
  partnerHandler,
  paymentInitiationHandler,
  paymentProfileHandler,
  processorHandler,
  sandboxHandler,
  signalHandler,
  transactionsHandler,
  transferHandler,
  userHandler,
  walletHandler,
  watchlistScreeningHandler,
  webhookVerificationKeyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', applicationHandler)
  .route('/', assetReportHandler)
  .route('/', authHandler)
  .route('/', bankTransferHandler)
  .route('/', betaHandler)
  .route('/', categoriesHandler)
  .route('/', creditHandler)
  .route('/', dashboardUserHandler)
  .route('/', depositSwitchHandler)
  .route('/', employersHandler)
  .route('/', employmentHandler)
  .route('/', fdxHandler)
  .route('/', identityHandler)
  .route('/', identityVerificationHandler)
  .route('/', incomeHandler)
  .route('/', institutionsHandler)
  .route('/', investmentsHandler)
  .route('/', itemHandler)
  .route('/', liabilitiesHandler)
  .route('/', linkHandler)
  .route('/', linkDeliveryHandler)
  .route('/', partnerHandler)
  .route('/', paymentInitiationHandler)
  .route('/', paymentProfileHandler)
  .route('/', processorHandler)
  .route('/', sandboxHandler)
  .route('/', signalHandler)
  .route('/', transactionsHandler)
  .route('/', transferHandler)
  .route('/', userHandler)
  .route('/', walletHandler)
  .route('/', watchlistScreeningHandler)
  .route('/', webhookVerificationKeyHandler)

export default app
