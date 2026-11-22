import { OpenAPIHono } from '@hono/zod-openapi'
import { getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app.openapi(
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
