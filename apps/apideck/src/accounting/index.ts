import { OpenAPIHono } from '@hono/zod-openapi'
import {
  balanceSheetHandler,
  billsHandler,
  companyInfoHandler,
  creditNotesHandler,
  customersHandler,
  invoiceItemsHandler,
  invoicesHandler,
  journalEntriesHandler,
  ledgerAccountsHandler,
  paymentsHandler,
  profitAndLossHandler,
  suppliersHandler,
  taxRatesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', balanceSheetHandler)
  .route('/', billsHandler)
  .route('/', companyInfoHandler)
  .route('/', creditNotesHandler)
  .route('/', customersHandler)
  .route('/', invoiceItemsHandler)
  .route('/', invoicesHandler)
  .route('/', journalEntriesHandler)
  .route('/', ledgerAccountsHandler)
  .route('/', paymentsHandler)
  .route('/', profitAndLossHandler)
  .route('/', suppliersHandler)
  .route('/', taxRatesHandler)

export default app
