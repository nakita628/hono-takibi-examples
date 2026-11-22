import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1TransactionsInvoicesAccountsAccountKeyRoute,
  getV1TransactionsPaymentsAccountsAccountKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getV1TransactionsInvoicesAccountsAccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionsPaymentsAccountsAccountKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
