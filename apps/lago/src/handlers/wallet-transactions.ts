import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletTransactionsLagoIdConsumptionsRoute,
  getWalletTransactionsLagoIdFundingsRoute,
  getWalletTransactionsLagoIdRoute,
  postWalletTransactionsLagoIdPaymentUrlRoute,
  postWalletTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const walletTransactionsHandler = app
  .openapi(postWalletTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletTransactionsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletTransactionsLagoIdPaymentUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletTransactionsLagoIdConsumptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletTransactionsLagoIdFundingsRoute, (c) => {
    throw new Error('Not implemented')
  })
