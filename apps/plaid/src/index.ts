import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  applicationHandler,
  assetReportHandler,
  authHandler,
  bankTransferHandler,
  beaconHandler,
  betaHandler,
  businessVerificationHandler,
  cashflowReportHandler,
  categoriesHandler,
  consentHandler,
  consumerReportHandler,
  craHandler,
  creditHandler,
  dashboardUserHandler,
  employersHandler,
  employmentHandler,
  fdxHandler,
  identityHandler,
  identityVerificationHandler,
  incomeHandler,
  institutionsHandler,
  investmentsHandler,
  issuesHandler,
  itemHandler,
  liabilitiesHandler,
  linkHandler,
  networkHandler,
  oauthHandler,
  partnerHandler,
  paymentInitiationHandler,
  paymentProfileHandler,
  processorHandler,
  profileHandler,
  protectHandler,
  sandboxHandler,
  sessionHandler,
  signalHandler,
  statementsHandler,
  transactionsHandler,
  transferHandler,
  userAccountHandler,
  userHandler,
  walletHandler,
  watchlistScreeningHandler,
  webhookVerificationKeyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', assetReportHandler)
  .route('/', craHandler)
  .route('/', creditHandler)
  .route('/', consumerReportHandler)
  .route('/', oauthHandler)
  .route('/', statementsHandler)
  .route('/', consentHandler)
  .route('/', itemHandler)
  .route('/', applicationHandler)
  .route('/', userAccountHandler)
  .route('/', profileHandler)
  .route('/', networkHandler)
  .route('/', authHandler)
  .route('/', transactionsHandler)
  .route('/', sandboxHandler)
  .route('/', cashflowReportHandler)
  .route('/', userHandler)
  .route('/', institutionsHandler)
  .route('/', accountsHandler)
  .route('/', categoriesHandler)
  .route('/', identityHandler)
  .route('/', dashboardUserHandler)
  .route('/', identityVerificationHandler)
  .route('/', watchlistScreeningHandler)
  .route('/', beaconHandler)
  .route('/', protectHandler)
  .route('/', businessVerificationHandler)
  .route('/', processorHandler)
  .route('/', betaHandler)
  .route('/', webhookVerificationKeyHandler)
  .route('/', liabilitiesHandler)
  .route('/', paymentInitiationHandler)
  .route('/', investmentsHandler)
  .route('/', linkHandler)
  .route('/', sessionHandler)
  .route('/', transferHandler)
  .route('/', bankTransferHandler)
  .route('/', employersHandler)
  .route('/', incomeHandler)
  .route('/', employmentHandler)
  .route('/', signalHandler)
  .route('/', walletHandler)
  .route('/', issuesHandler)
  .route('/', paymentProfileHandler)
  .route('/', partnerHandler)
  .route('/', fdxHandler)

export default app
