import { OpenAPIHono } from '@hono/zod-openapi'
import { getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app.openapi(
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
