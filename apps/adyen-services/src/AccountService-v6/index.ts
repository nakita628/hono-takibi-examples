import { OpenAPIHono } from '@hono/zod-openapi'
import {
  checkAccountHolderHandler,
  closeAccountHandler,
  closeAccountHolderHandler,
  closeStoresHandler,
  createAccountHandler,
  createAccountHolderHandler,
  deleteBankAccountsHandler,
  deleteLegalArrangementsHandler,
  deletePayoutMethodsHandler,
  deleteShareholdersHandler,
  deleteSignatoriesHandler,
  getAccountHolderHandler,
  getTaxFormHandler,
  getUploadedDocumentsHandler,
  suspendAccountHolderHandler,
  unSuspendAccountHolderHandler,
  updateAccountHandler,
  updateAccountHolderHandler,
  updateAccountHolderStateHandler,
  uploadDocumentHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', checkAccountHolderHandler)
  .route('/', closeAccountHandler)
  .route('/', closeAccountHolderHandler)
  .route('/', closeStoresHandler)
  .route('/', createAccountHandler)
  .route('/', createAccountHolderHandler)
  .route('/', deleteBankAccountsHandler)
  .route('/', deleteLegalArrangementsHandler)
  .route('/', deletePayoutMethodsHandler)
  .route('/', deleteShareholdersHandler)
  .route('/', deleteSignatoriesHandler)
  .route('/', getAccountHolderHandler)
  .route('/', getTaxFormHandler)
  .route('/', getUploadedDocumentsHandler)
  .route('/', suspendAccountHolderHandler)
  .route('/', unSuspendAccountHolderHandler)
  .route('/', updateAccountHandler)
  .route('/', updateAccountHolderHandler)
  .route('/', updateAccountHolderStateHandler)
  .route('/', uploadDocumentHandler)

export default app
