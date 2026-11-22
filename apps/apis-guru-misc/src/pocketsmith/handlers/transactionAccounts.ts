import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTransactionAccountsIdRoute,
  getUsersIdTransactionAccountsRoute,
  putTransactionAccountsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionAccountsHandler = app
  .openapi(getTransactionAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTransactionAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdTransactionAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
