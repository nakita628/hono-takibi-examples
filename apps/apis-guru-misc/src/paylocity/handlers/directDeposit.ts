import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositRoute } from '../routes'

const app = new OpenAPIHono()

export const directDepositHandler = app.openapi(
  getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDepositRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
