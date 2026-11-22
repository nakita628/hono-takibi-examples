import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2BusinessAccountsAccountsBusinessAccountIdRoute,
  getV2BusinessAccountsAccountsBusinessAccountIdTransactionsRoute,
  getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdRoute,
  getV2BusinessAccountsAccountsRoute,
  postV2BusinessAccountsAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsAPIHandler = app
  .openapi(postV2BusinessAccountsAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BusinessAccountsAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BusinessAccountsAccountsBusinessAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BusinessAccountsAccountsBusinessAccountIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
