import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1BankTransactionsIdRoute,
  getApiV1BankTransactionsCreateRoute,
  getApiV1BankTransactionsIdEditRoute,
  getApiV1BankTransactionsIdRoute,
  getApiV1BankTransactionsRoute,
  postApiV1BankTransactionsBulkRoute,
  postApiV1BankTransactionsMatchRoute,
  postApiV1BankTransactionsRoute,
  putApiV1BankTransactionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bankTransactionsHandler = app
  .openapi(getApiV1BankTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1BankTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BankTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankTransactionsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BankTransactionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankTransactionsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BankTransactionsMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
