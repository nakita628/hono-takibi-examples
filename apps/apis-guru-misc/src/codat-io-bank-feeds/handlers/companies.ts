import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsRoute,
  patchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsAccountIdRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsRoute,
  putCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companiesHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsAccountIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
