import { OpenAPIHono } from '@hono/zod-openapi'
import { postCompaniesCompanyIdSyncExpensesConnectionsPartnerExpenseRoute } from '../routes'

const app = new OpenAPIHono()

export const connectionsHandler = app.openapi(
  postCompaniesCompanyIdSyncExpensesConnectionsPartnerExpenseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
