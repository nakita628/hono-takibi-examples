import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsRoute,
  getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionStatusHandler = app
  .openapi(getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
