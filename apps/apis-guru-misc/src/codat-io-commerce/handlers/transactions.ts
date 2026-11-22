import { OpenAPIHono } from '@hono/zod-openapi'
import { getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app.openapi(
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
