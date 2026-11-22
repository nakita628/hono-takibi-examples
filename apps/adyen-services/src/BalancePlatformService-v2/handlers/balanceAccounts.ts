import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBalanceAccountsIdPaymentInstrumentsRoute,
  getBalanceAccountsIdRoute,
  getBalanceAccountsIdTransactionRulesRoute,
  patchBalanceAccountsIdRoute,
  postBalanceAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const balanceAccountsHandler = app
  .openapi(postBalanceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalanceAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBalanceAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalanceAccountsIdPaymentInstrumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalanceAccountsIdTransactionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
