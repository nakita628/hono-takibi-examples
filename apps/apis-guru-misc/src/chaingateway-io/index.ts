import { OpenAPIHono } from '@hono/zod-openapi'
import {
  clearAddressHandler,
  deleteAddressHandler,
  exportAddressHandler,
  getBlockHandler,
  getEthereumBalanceHandler,
  getExchangeRateHandler,
  getGasPriceHandler,
  getLastBlockNumberHandler,
  getTokenBalanceHandler,
  getTokenHandler,
  getTransactionsHandler,
  importAddressHandler,
  listAddressesHandler,
  listFailedIpNsHandler,
  listSubscribedAddressesHandler,
  newAddressHandler,
  resendFailedIpnHandler,
  sendEthereumHandler,
  sendTokenHandler,
  subscribeAddressHandler,
  unsubscribeAddressHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', clearAddressHandler)
  .route('/', deleteAddressHandler)
  .route('/', exportAddressHandler)
  .route('/', getBlockHandler)
  .route('/', getEthereumBalanceHandler)
  .route('/', getExchangeRateHandler)
  .route('/', getGasPriceHandler)
  .route('/', getLastBlockNumberHandler)
  .route('/', getTokenHandler)
  .route('/', getTokenBalanceHandler)
  .route('/', getTransactionsHandler)
  .route('/', importAddressHandler)
  .route('/', listAddressesHandler)
  .route('/', listFailedIpNsHandler)
  .route('/', listSubscribedAddressesHandler)
  .route('/', newAddressHandler)
  .route('/', resendFailedIpnHandler)
  .route('/', sendEthereumHandler)
  .route('/', sendTokenHandler)
  .route('/', subscribeAddressHandler)
  .route('/', unsubscribeAddressHandler)

export default app
