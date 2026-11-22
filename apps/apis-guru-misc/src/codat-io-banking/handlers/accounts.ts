import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountsAccountIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
