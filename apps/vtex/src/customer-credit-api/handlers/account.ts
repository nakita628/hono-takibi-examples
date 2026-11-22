import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCreditcontrolAccountsCreditAccountIdHoldersHolderIdRoute,
  deleteApiCreditcontrolAccountsCreditAccountIdRoute,
  deleteApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRoute,
  getApiCreditcontrolAccountsCreditAccountIdRoute,
  getApiCreditcontrolAccountsCreditAccountIdStatementsRoute,
  getApiCreditcontrolAccountsRoute,
  postApiCreditcontrolAccountsCreditAccountIdHoldersRoute,
  postApiCreditcontrolAccountsCreditAccountIdTransactionRoute,
  postApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRefundsRoute,
  postApiCreditcontrolAccountsRoute,
  putApiCreditcontrolAccountsAccountIdRoute,
  putApiCreditcontrolAccountsCreditAccountIdCreditlimitRoute,
  putApiCreditcontrolAccountsCreditAccountIdRoute,
  putApiCreditcontrolAccountsCreditAccountIdStatementsStatementIdRoute,
  putApiCreditcontrolAccountsCreditAccountIdToleranceRoute,
  putApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdRoute,
  putApiCreditcontrolAccountsCreditAccountIdTransactionsTransactionIdSettlementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
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
