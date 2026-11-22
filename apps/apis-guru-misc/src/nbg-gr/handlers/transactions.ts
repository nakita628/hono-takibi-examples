import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdStatementsStatementIdTransactionsRoute,
  getAccountsAccountIdTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getAccountsAccountIdStatementsStatementIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
