import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bankAccountTransactionsHandler = app
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
