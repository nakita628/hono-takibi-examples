import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdTransactionsRoute,
  getTransactionsIdRoute,
  getTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getAccountsAccountIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
