import { OpenAPIHono } from '@hono/zod-openapi'
import { getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesRoute } from '../routes'

const app = new OpenAPIHono()

export const disputesHandler = app.openapi(
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
