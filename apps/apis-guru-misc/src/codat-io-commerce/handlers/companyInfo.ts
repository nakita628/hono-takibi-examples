import { OpenAPIHono } from '@hono/zod-openapi'
import { getCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const companyInfoHandler = app.openapi(
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
