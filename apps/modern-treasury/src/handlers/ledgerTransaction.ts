import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiLedgerTransactionsIdRoute,
  getApiLedgerTransactionsIdVersionsRoute,
  getApiLedgerTransactionsRoute,
  getApiLedgerTransactionVersionsRoute,
  patchApiLedgerTransactionsIdRoute,
  postApiLedgerTransactionsIdPartialPostRoute,
  postApiLedgerTransactionsIdReversalRoute,
  postApiLedgerTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ledgerTransactionHandler = app
  .openapi(getApiLedgerTransactionVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLedgerTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLedgerTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLedgerTransactionsIdPartialPostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLedgerTransactionsIdReversalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerTransactionsIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
