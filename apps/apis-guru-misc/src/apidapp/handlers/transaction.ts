import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTransactionHashReceiptRoute,
  getTransactionHashRoute,
  optionsTransactionHashReceiptRoute,
  optionsTransactionHashRoute,
  optionsTransactionRoute,
  postTransactionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionHandler = app
  .openapi(optionsTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsTransactionHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionHashReceiptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsTransactionHashReceiptRoute, (c) => {
    throw new Error('Not implemented')
  })
