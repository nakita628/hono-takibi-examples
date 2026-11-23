import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHoldersHandler,
  balanceAccountsHandler,
  balancePlatformsHandler,
  cardordersHandler,
  grantAccountsHandler,
  grantOffersHandler,
  mandatesHandler,
  networkTokensHandler,
  paymentInstrumentGroupsHandler,
  paymentInstrumentsHandler,
  pinsHandler,
  publicKeyHandler,
  registeredDevicesHandler,
  scaAssociationsHandler,
  scaDevicesHandler,
  transactionRulesHandler,
  transferRoutesHandler,
  validateBankAccountIdentificationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHoldersHandler)
  .route('/', balanceAccountsHandler)
  .route('/', balancePlatformsHandler)
  .route('/', cardordersHandler)
  .route('/', grantAccountsHandler)
  .route('/', grantOffersHandler)
  .route('/', networkTokensHandler)
  .route('/', paymentInstrumentGroupsHandler)
  .route('/', paymentInstrumentsHandler)
  .route('/', pinsHandler)
  .route('/', publicKeyHandler)
  .route('/', registeredDevicesHandler)
  .route('/', transactionRulesHandler)
  .route('/', transferRoutesHandler)
  .route('/', validateBankAccountIdentificationHandler)
  .route('/', mandatesHandler)
  .route('/', scaAssociationsHandler)
  .route('/', scaDevicesHandler)

export default app
