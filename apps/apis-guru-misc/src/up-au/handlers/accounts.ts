import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdTransactionsRoute,
  getAccountsIdRoute,
  getAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
