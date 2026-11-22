import { OpenAPIHono } from '@hono/zod-openapi'
import { putV2CompaniesCompanyIdEmployeesEmployeeIdBenefitSetupRoute } from '../routes'

const app = new OpenAPIHono()

export const employeeBenefitSetupHandler = app.openapi(
  putV2CompaniesCompanyIdEmployeesEmployeeIdBenefitSetupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
