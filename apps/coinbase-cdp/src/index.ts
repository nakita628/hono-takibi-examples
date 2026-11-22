import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  customersHandler,
  depositDestinationsHandler,
  disbursementsHandler,
  endUserAccountManagementHandler,
  endUserAccountsHandler,
  evmAccountsHandler,
  evmSmartAccountsHandler,
  evmSwapsHandler,
  evmTokenBalancesHandler,
  faucetsHandler,
  lendHandler,
  mandatesHandler,
  onchainDataHandler,
  onrampApp2AppHandler,
  onrampHandler,
  paymentMethodsHandler,
  paymentSessionsHandler,
  policyEngineHandler,
  solanaAccountsHandler,
  solanaTokenBalancesHandler,
  sqlapiHandler,
  topUpLinksHandler,
  transfersHandler,
  webhooksHandler,
  x402FacilitatorHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', customersHandler)
  .route('/', depositDestinationsHandler)
  .route('/', transfersHandler)
  .route('/', paymentSessionsHandler)
  .route('/', mandatesHandler)
  .route('/', topUpLinksHandler)
  .route('/', disbursementsHandler)
  .route('/', endUserAccountManagementHandler)
  .route('/', endUserAccountsHandler)
  .route('/', evmAccountsHandler)
  .route('/', evmSmartAccountsHandler)
  .route('/', lendHandler)
  .route('/', evmSwapsHandler)
  .route('/', evmTokenBalancesHandler)
  .route('/', faucetsHandler)
  .route('/', policyEngineHandler)
  .route('/', solanaAccountsHandler)
  .route('/', solanaTokenBalancesHandler)
  .route('/', sqlapiHandler)
  .route('/', onchainDataHandler)
  .route('/', webhooksHandler)
  .route('/', x402FacilitatorHandler)
  .route('/', onrampHandler)
  .route('/', onrampApp2AppHandler)
  .route('/', paymentMethodsHandler)

export default app
