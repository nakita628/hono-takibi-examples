import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  bankTransactionsHandler,
  bankTransfersHandler,
  batchPaymentsHandler,
  brandingThemesHandler,
  budgetsHandler,
  contactGroupsHandler,
  contactsHandler,
  creditNotesHandler,
  currenciesHandler,
  expenseClaimsHandler,
  invoiceRemindersHandler,
  invoicesHandler,
  itemsHandler,
  journalsHandler,
  linkedTransactionsHandler,
  manualJournalsHandler,
  organisationHandler,
  overpaymentsHandler,
  paymentServicesHandler,
  paymentsHandler,
  prepaymentsHandler,
  purchaseOrdersHandler,
  quotesHandler,
  receiptsHandler,
  repeatingInvoicesHandler,
  reportsHandler,
  setupHandler,
  taxRatesHandler,
  trackingCategoriesHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', batchPaymentsHandler)
  .route('/', bankTransactionsHandler)
  .route('/', bankTransfersHandler)
  .route('/', brandingThemesHandler)
  .route('/', budgetsHandler)
  .route('/', contactsHandler)
  .route('/', contactGroupsHandler)
  .route('/', creditNotesHandler)
  .route('/', currenciesHandler)
  .route('/', expenseClaimsHandler)
  .route('/', invoicesHandler)
  .route('/', invoiceRemindersHandler)
  .route('/', itemsHandler)
  .route('/', journalsHandler)
  .route('/', linkedTransactionsHandler)
  .route('/', manualJournalsHandler)
  .route('/', organisationHandler)
  .route('/', overpaymentsHandler)
  .route('/', paymentsHandler)
  .route('/', paymentServicesHandler)
  .route('/', prepaymentsHandler)
  .route('/', purchaseOrdersHandler)
  .route('/', quotesHandler)
  .route('/', receiptsHandler)
  .route('/', repeatingInvoicesHandler)
  .route('/', reportsHandler)
  .route('/', setupHandler)
  .route('/', taxRatesHandler)
  .route('/', trackingCategoriesHandler)
  .route('/', usersHandler)

export default app
