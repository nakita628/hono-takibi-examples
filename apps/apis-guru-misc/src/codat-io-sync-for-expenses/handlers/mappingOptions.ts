import { OpenAPIHono } from '@hono/zod-openapi'
import { getCompaniesCompanyIdSyncExpensesMappingOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const mappingOptionsHandler = app.openapi(
  getCompaniesCompanyIdSyncExpensesMappingOptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
