import { OpenAPIHono } from '@hono/zod-openapi'
import { postCompaniesCompanyIdSyncCommerceLatestRoute } from '../routes'

const app = new OpenAPIHono()

export const companiesHandler = app.openapi(postCompaniesCompanyIdSyncCommerceLatestRoute, (c) => {
  throw new Error('Not implemented')
})
