import { OpenAPIHono } from '@hono/zod-openapi'
import { postCompaniesCompanyIdSyncExpensesSyncsRoute } from '../routes'

const app = new OpenAPIHono()

export const syncHandler = app.openapi(postCompaniesCompanyIdSyncExpensesSyncsRoute, (c) => {
  throw new Error('Not implemented')
})
