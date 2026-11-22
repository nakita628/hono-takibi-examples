import { OpenAPIHono } from '@hono/zod-openapi'
import { getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountBalancesRoute } from '../routes'

const app = new OpenAPIHono()

export const accountBalancesHandler = app.openapi(
  getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountBalancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
