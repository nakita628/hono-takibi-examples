import { OpenAPIHono } from '@hono/zod-openapi'
import { getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsRoute } from '../routes'

const app = new OpenAPIHono()

export const taxComponentsHandler = app.openapi(
  getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTaxComponentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
