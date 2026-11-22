import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCompaniesCompanyIdSyncExpensesDataExpenseTransactionsRoute,
  postCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const expensesHandler = app
  .openapi(postCompaniesCompanyIdSyncExpensesDataExpenseTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
