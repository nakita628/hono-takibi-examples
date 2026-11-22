import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  analysisCategoriesHandler,
  bankAccountsHandler,
  bookTranTypesHandler,
  cashPaymentsHandler,
  cashReceiptsHandler,
  categoryTypesHandler,
  companySettingsHandler,
  companySetupConfigHandler,
  customersHandler,
  emailHandler,
  ownerTypeGroupsHandler,
  ownerTypesHandler,
  paymentsHandler,
  productsHandler,
  productTypesHandler,
  purchasesHandler,
  quoteHandler,
  salesCreditNotesHandler,
  salesEntriesHandler,
  salesHandler,
  salesInvoicesHandler,
  salesRepHandler,
  suppliersHandler,
  userDefinedFieldsHandler,
  vatAnalysisTypesHandler,
  vatCategoriesHandler,
  vatRatesHandler,
  vatTypesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', analysisCategoriesHandler)
  .route('/', bankAccountsHandler)
  .route('/', bookTranTypesHandler)
  .route('/', cashPaymentsHandler)
  .route('/', cashReceiptsHandler)
  .route('/', categoryTypesHandler)
  .route('/', companySettingsHandler)
  .route('/', companySetupConfigHandler)
  .route('/', customersHandler)
  .route('/', emailHandler)
  .route('/', ownerTypeGroupsHandler)
  .route('/', ownerTypesHandler)
  .route('/', paymentsHandler)
  .route('/', productTypesHandler)
  .route('/', productsHandler)
  .route('/', purchasesHandler)
  .route('/', quoteHandler)
  .route('/', salesHandler)
  .route('/', salesCreditNotesHandler)
  .route('/', salesEntriesHandler)
  .route('/', salesInvoicesHandler)
  .route('/', salesRepHandler)
  .route('/', suppliersHandler)
  .route('/', userDefinedFieldsHandler)
  .route('/', vatAnalysisTypesHandler)
  .route('/', vatCategoriesHandler)
  .route('/', vatRatesHandler)
  .route('/', vatTypesHandler)

export default app
