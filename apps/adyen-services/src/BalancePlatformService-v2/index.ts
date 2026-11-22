import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHoldersHandler,
  authorizedCardUsersHandler,
  balanceAccountsHandler,
  balancesHandler,
  bankAccountValidationHandler,
  cardOrdersHandler,
  customPayoutSchedulesSweepsHandler,
  directDebitMandatesHandler,
  grantAccountsHandler,
  grantOffersHandler,
  manageCardPINHandler,
  managedPayoutSchedulesHandler,
  manageSCADevicesHandler,
  networkTokensHandler,
  paymentInstrumentGroupsHandler,
  paymentInstrumentsHandler,
  platformHandler,
  recurringTopUpsHandler,
  scaAssociationManagementHandler,
  scaDeviceManagementHandler,
  transactionRulesHandler,
  transferLimits__balanceAccountLevelHandler,
  transferLimits__balancePlatformLevelHandler,
  transferRoutesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHoldersHandler)
  .route('/', balanceAccountsHandler)
  .route('/', customPayoutSchedulesSweepsHandler)
  .route('/', platformHandler)
  .route('/', cardOrdersHandler)
  .route('/', grantAccountsHandler)
  .route('/', grantOffersHandler)
  .route('/', networkTokensHandler)
  .route('/', paymentInstrumentGroupsHandler)
  .route('/', paymentInstrumentsHandler)
  .route('/', manageCardPINHandler)
  .route('/', manageSCADevicesHandler)
  .route('/', transactionRulesHandler)
  .route('/', transferRoutesHandler)
  .route('/', bankAccountValidationHandler)
  .route('/', managedPayoutSchedulesHandler)
  .route('/', recurringTopUpsHandler)
  .route('/', transferLimits__balanceAccountLevelHandler)
  .route('/', balancesHandler)
  .route('/', transferLimits__balancePlatformLevelHandler)
  .route('/', directDebitMandatesHandler)
  .route('/', authorizedCardUsersHandler)
  .route('/', scaAssociationManagementHandler)
  .route('/', scaDeviceManagementHandler)

export default app
