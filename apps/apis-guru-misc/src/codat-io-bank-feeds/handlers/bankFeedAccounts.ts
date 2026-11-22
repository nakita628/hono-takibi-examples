import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsRoute,
  patchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsAccountIdRoute,
  putCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bankFeedAccountsHandler = app
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
