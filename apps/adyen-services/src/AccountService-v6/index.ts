import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCheckAccountHolderRoute,
  postCloseAccountHolderRoute,
  postCloseAccountRoute,
  postCloseStoresRoute,
  postCreateAccountHolderRoute,
  postCreateAccountRoute,
  postDeleteBankAccountsRoute,
  postDeleteLegalArrangementsRoute,
  postDeletePayoutMethodsRoute,
  postDeleteShareholdersRoute,
  postDeleteSignatoriesRoute,
  postGetAccountHolderRoute,
  postGetTaxFormRoute,
  postGetUploadedDocumentsRoute,
  postSuspendAccountHolderRoute,
  postUnSuspendAccountHolderRoute,
  postUpdateAccountHolderRoute,
  postUpdateAccountHolderStateRoute,
  postUpdateAccountRoute,
  postUploadDocumentRoute,
} from './routes'
import {
  postCheckAccountHolderRouteHandler,
  postCloseAccountHolderRouteHandler,
  postCloseAccountRouteHandler,
  postCloseStoresRouteHandler,
  postCreateAccountHolderRouteHandler,
  postCreateAccountRouteHandler,
  postDeleteBankAccountsRouteHandler,
  postDeleteLegalArrangementsRouteHandler,
  postDeletePayoutMethodsRouteHandler,
  postDeleteShareholdersRouteHandler,
  postDeleteSignatoriesRouteHandler,
  postGetAccountHolderRouteHandler,
  postGetTaxFormRouteHandler,
  postGetUploadedDocumentsRouteHandler,
  postSuspendAccountHolderRouteHandler,
  postUnSuspendAccountHolderRouteHandler,
  postUpdateAccountHolderRouteHandler,
  postUpdateAccountHolderStateRouteHandler,
  postUpdateAccountRouteHandler,
  postUploadDocumentRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCheckAccountHolderRoute, postCheckAccountHolderRouteHandler)
  .openapi(postCloseAccountRoute, postCloseAccountRouteHandler)
  .openapi(postCloseAccountHolderRoute, postCloseAccountHolderRouteHandler)
  .openapi(postCloseStoresRoute, postCloseStoresRouteHandler)
  .openapi(postCreateAccountRoute, postCreateAccountRouteHandler)
  .openapi(postCreateAccountHolderRoute, postCreateAccountHolderRouteHandler)
  .openapi(postDeleteBankAccountsRoute, postDeleteBankAccountsRouteHandler)
  .openapi(postDeleteLegalArrangementsRoute, postDeleteLegalArrangementsRouteHandler)
  .openapi(postDeletePayoutMethodsRoute, postDeletePayoutMethodsRouteHandler)
  .openapi(postDeleteShareholdersRoute, postDeleteShareholdersRouteHandler)
  .openapi(postDeleteSignatoriesRoute, postDeleteSignatoriesRouteHandler)
  .openapi(postGetAccountHolderRoute, postGetAccountHolderRouteHandler)
  .openapi(postGetTaxFormRoute, postGetTaxFormRouteHandler)
  .openapi(postGetUploadedDocumentsRoute, postGetUploadedDocumentsRouteHandler)
  .openapi(postSuspendAccountHolderRoute, postSuspendAccountHolderRouteHandler)
  .openapi(postUnSuspendAccountHolderRoute, postUnSuspendAccountHolderRouteHandler)
  .openapi(postUpdateAccountRoute, postUpdateAccountRouteHandler)
  .openapi(postUpdateAccountHolderRoute, postUpdateAccountHolderRouteHandler)
  .openapi(postUpdateAccountHolderStateRoute, postUpdateAccountHolderStateRouteHandler)
  .openapi(postUploadDocumentRoute, postUploadDocumentRouteHandler)

export default app
