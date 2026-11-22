import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsRoute,
  getCompaniesCompanyIdDataBankAccountsAccountIdRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsRoute,
  putCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bankAccountsHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataBankAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
