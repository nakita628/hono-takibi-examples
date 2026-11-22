import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTransactionsIdRoute,
  getAccountsIdTransactionsRoute,
  getCategoriesIdTransactionsRoute,
  getTransactionAccountsIdTransactionsRoute,
  getTransactionsIdRoute,
  getUsersIdTransactionsRoute,
  postTransactionAccountsIdTransactionsRoute,
  putTransactionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getAccountsIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionAccountsIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionAccountsIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
