import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  accountTransactionsHandler,
  bankAccountsHandler,
  bankAccountTransactionsHandler,
  billCreditNotesHandler,
  billPaymentsHandler,
  billsHandler,
  companyInfoHandler,
  creditNotesHandler,
  customersHandler,
  directCostsHandler,
  directIncomesHandler,
  financialsHandler,
  invoicesHandler,
  itemsHandler,
  journalEntriesHandler,
  journalsHandler,
  paymentMethodsHandler,
  paymentsHandler,
  purchaseOrdersHandler,
  reportsHandler,
  salesOrdersHandler,
  suppliersHandler,
  taxRatesHandler,
  trackingCategoriesHandler,
  transfersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountTransactionsHandler)
  .route('/', bankAccountsHandler)
  .route('/', bankAccountTransactionsHandler)
  .route('/', billsHandler)
  .route('/', customersHandler)
  .route('/', directCostsHandler)
  .route('/', directIncomesHandler)
  .route('/', invoicesHandler)
  .route('/', suppliersHandler)
  .route('/', transfersHandler)
  .route('/', billCreditNotesHandler)
  .route('/', billPaymentsHandler)
  .route('/', accountsHandler)
  .route('/', creditNotesHandler)
  .route('/', itemsHandler)
  .route('/', journalEntriesHandler)
  .route('/', journalsHandler)
  .route('/', paymentsHandler)
  .route('/', purchaseOrdersHandler)
  .route('/', financialsHandler)
  .route('/', companyInfoHandler)
  .route('/', paymentMethodsHandler)
  .route('/', salesOrdersHandler)
  .route('/', taxRatesHandler)
  .route('/', trackingCategoriesHandler)
  .route('/', reportsHandler)

export default app
