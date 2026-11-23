import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountBalancesRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountsAccountIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesTransactionCategoryIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsTransactionIdRoute,
  getCompaniesCompanyIdDataBankingTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companiesHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesTransactionCategoryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsTransactionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdDataBankingTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
