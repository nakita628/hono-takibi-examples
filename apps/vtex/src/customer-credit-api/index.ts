import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCreditcontrolAccountsCreditAccountIdHoldersHolderIdRoute,
  deleteApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute,
  deleteApiCreditcontrolAccountsCreditAccountIdRoute,
  deleteApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRoute,
  getApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute,
  getApiCreditcontrolAccountsCreditAccountIdInvoicesRoute,
  getApiCreditcontrolAccountsCreditAccountIdRoute,
  getApiCreditcontrolAccountsCreditAccountIdStatementsRoute,
  getApiCreditcontrolAccountsRoute,
  getApiCreditcontrolInvoicesRoute,
  getApiCreditcontrolStoreconfigRoute,
  postApiCreditcontrolAccountsCreditAccountIdHoldersRoute,
  postApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPaymentsRoute,
  postApiCreditcontrolAccountsCreditAccountIdTransactionRoute,
  postApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRefundsRoute,
  postApiCreditcontrolAccountsRoute,
  putApiCreditcontrolAccountsAccountIdRoute,
  putApiCreditcontrolAccountsCreditAccountIdCreditlimitRoute,
  putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPostponementRoute,
  putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute,
  putApiCreditcontrolAccountsCreditAccountIdRoute,
  putApiCreditcontrolAccountsCreditAccountIdStatementsStatementIdRoute,
  putApiCreditcontrolAccountsCreditAccountIdToleranceRoute,
  putApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRoute,
  putApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdSettlementRoute,
  putApiCreditcontrolStoreconfigRoute,
} from './routes'
import {
  deleteApiCreditcontrolAccountsCreditAccountIdHoldersHolderIdRouteHandler,
  deleteApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRouteHandler,
  deleteApiCreditcontrolAccountsCreditAccountIdRouteHandler,
  deleteApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRouteHandler,
  getApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRouteHandler,
  getApiCreditcontrolAccountsCreditAccountIdInvoicesRouteHandler,
  getApiCreditcontrolAccountsCreditAccountIdRouteHandler,
  getApiCreditcontrolAccountsCreditAccountIdStatementsRouteHandler,
  getApiCreditcontrolAccountsRouteHandler,
  getApiCreditcontrolInvoicesRouteHandler,
  getApiCreditcontrolStoreconfigRouteHandler,
  postApiCreditcontrolAccountsCreditAccountIdHoldersRouteHandler,
  postApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPaymentsRouteHandler,
  postApiCreditcontrolAccountsCreditAccountIdTransactionRouteHandler,
  postApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRefundsRouteHandler,
  postApiCreditcontrolAccountsRouteHandler,
  putApiCreditcontrolAccountsAccountIdRouteHandler,
  putApiCreditcontrolAccountsCreditAccountIdCreditlimitRouteHandler,
  putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPostponementRouteHandler,
  putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRouteHandler,
  putApiCreditcontrolAccountsCreditAccountIdRouteHandler,
  putApiCreditcontrolAccountsCreditAccountIdStatementsStatementIdRouteHandler,
  putApiCreditcontrolAccountsCreditAccountIdToleranceRouteHandler,
  putApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRouteHandler,
  putApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdSettlementRouteHandler,
  putApiCreditcontrolStoreconfigRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiCreditcontrolAccountsRoute, getApiCreditcontrolAccountsRouteHandler)
  .openapi(postApiCreditcontrolAccountsRoute, postApiCreditcontrolAccountsRouteHandler)
  .openapi(
    putApiCreditcontrolAccountsAccountIdRoute,
    putApiCreditcontrolAccountsAccountIdRouteHandler,
  )
  .openapi(
    deleteApiCreditcontrolAccountsCreditAccountIdRoute,
    deleteApiCreditcontrolAccountsCreditAccountIdRouteHandler,
  )
  .openapi(
    getApiCreditcontrolAccountsCreditAccountIdRoute,
    getApiCreditcontrolAccountsCreditAccountIdRouteHandler,
  )
  .openapi(
    putApiCreditcontrolAccountsCreditAccountIdRoute,
    putApiCreditcontrolAccountsCreditAccountIdRouteHandler,
  )
  .openapi(
    putApiCreditcontrolAccountsCreditAccountIdCreditlimitRoute,
    putApiCreditcontrolAccountsCreditAccountIdCreditlimitRouteHandler,
  )
  .openapi(
    postApiCreditcontrolAccountsCreditAccountIdHoldersRoute,
    postApiCreditcontrolAccountsCreditAccountIdHoldersRouteHandler,
  )
  .openapi(
    deleteApiCreditcontrolAccountsCreditAccountIdHoldersHolderIdRoute,
    deleteApiCreditcontrolAccountsCreditAccountIdHoldersHolderIdRouteHandler,
  )
  .openapi(
    getApiCreditcontrolAccountsCreditAccountIdInvoicesRoute,
    getApiCreditcontrolAccountsCreditAccountIdInvoicesRouteHandler,
  )
  .openapi(
    deleteApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute,
    deleteApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRouteHandler,
  )
  .openapi(
    getApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute,
    getApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRouteHandler,
  )
  .openapi(
    putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute,
    putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRouteHandler,
  )
  .openapi(
    postApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPaymentsRoute,
    postApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPaymentsRouteHandler,
  )
  .openapi(
    putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPostponementRoute,
    putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPostponementRouteHandler,
  )
  .openapi(
    getApiCreditcontrolAccountsCreditAccountIdStatementsRoute,
    getApiCreditcontrolAccountsCreditAccountIdStatementsRouteHandler,
  )
  .openapi(
    putApiCreditcontrolAccountsCreditAccountIdStatementsStatementIdRoute,
    putApiCreditcontrolAccountsCreditAccountIdStatementsStatementIdRouteHandler,
  )
  .openapi(
    putApiCreditcontrolAccountsCreditAccountIdToleranceRoute,
    putApiCreditcontrolAccountsCreditAccountIdToleranceRouteHandler,
  )
  .openapi(
    postApiCreditcontrolAccountsCreditAccountIdTransactionRoute,
    postApiCreditcontrolAccountsCreditAccountIdTransactionRouteHandler,
  )
  .openapi(
    deleteApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRoute,
    deleteApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRouteHandler,
  )
  .openapi(
    putApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRoute,
    putApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRouteHandler,
  )
  .openapi(
    postApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRefundsRoute,
    postApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRefundsRouteHandler,
  )
  .openapi(
    putApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdSettlementRoute,
    putApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdSettlementRouteHandler,
  )
  .openapi(getApiCreditcontrolInvoicesRoute, getApiCreditcontrolInvoicesRouteHandler)
  .openapi(getApiCreditcontrolStoreconfigRoute, getApiCreditcontrolStoreconfigRouteHandler)
  .openapi(putApiCreditcontrolStoreconfigRoute, putApiCreditcontrolStoreconfigRouteHandler)

export default app
