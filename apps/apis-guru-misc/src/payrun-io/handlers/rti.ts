import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdRtiTransactionRtiTransactionIdRoute,
  getEmployerEmployerIdRtiTransactionRtiTransactionIdRoute,
  getEmployerEmployerIdRtiTransactionRtiTransactionIdSummaryRoute,
  getEmployerEmployerIdRtiTransactionsRoute,
  getEmployerEmployerIdRtiTransactionsSummaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rtiHandler = app
  .openapi(deleteEmployerEmployerIdRtiTransactionRtiTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRtiTransactionRtiTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRtiTransactionRtiTransactionIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRtiTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRtiTransactionsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
