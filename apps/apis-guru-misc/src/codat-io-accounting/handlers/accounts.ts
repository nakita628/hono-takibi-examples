import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccountsRoute,
  getCompaniesCompanyIdDataAccountsAccountIdRoute,
  getCompaniesCompanyIdDataAccountsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsChartOfAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
