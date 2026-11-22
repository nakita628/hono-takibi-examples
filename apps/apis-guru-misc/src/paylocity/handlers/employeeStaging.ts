import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2WeblinkstagingCompaniesCompanyIdEmployeesNewemployeesRoute } from '../routes'

const app = new OpenAPIHono()

export const employeeStagingHandler = app.openapi(
  postV2WeblinkstagingCompaniesCompanyIdEmployeesNewemployeesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
