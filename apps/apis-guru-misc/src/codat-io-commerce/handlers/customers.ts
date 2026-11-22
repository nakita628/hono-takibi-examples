import { OpenAPIHono } from '@hono/zod-openapi'
import { getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersRoute } from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app.openapi(
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
