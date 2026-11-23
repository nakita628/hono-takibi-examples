import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsIdRoute,
  getAccountsIdRoute,
  getAccountsIdTransactionsRoute,
  putAccountsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(deleteAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
