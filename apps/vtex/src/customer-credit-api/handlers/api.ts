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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiCreditcontrolAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCreditcontrolAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCreditcontrolAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCreditcontrolAccountsCreditAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCreditcontrolAccountsCreditAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCreditcontrolAccountsCreditAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCreditcontrolAccountsCreditAccountIdCreditlimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCreditcontrolAccountsCreditAccountIdHoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCreditcontrolAccountsCreditAccountIdHoldersHolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCreditcontrolAccountsCreditAccountIdInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCreditcontrolAccountsCreditAccountIdInvoicesInvoiceIdPostponementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCreditcontrolAccountsCreditAccountIdStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCreditcontrolAccountsCreditAccountIdStatementsStatementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCreditcontrolAccountsCreditAccountIdToleranceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCreditcontrolAccountsCreditAccountIdTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRefundsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdSettlementRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiCreditcontrolInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCreditcontrolStoreconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCreditcontrolStoreconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
