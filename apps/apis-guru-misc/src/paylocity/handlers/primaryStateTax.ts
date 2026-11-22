import { OpenAPIHono } from '@hono/zod-openapi'
import { putV2CompaniesCompanyIdEmployeesEmployeeIdPrimaryStateTaxRoute } from '../routes'

const app = new OpenAPIHono()

export const primaryStateTaxHandler = app.openapi(
  putV2CompaniesCompanyIdEmployeesEmployeeIdPrimaryStateTaxRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
