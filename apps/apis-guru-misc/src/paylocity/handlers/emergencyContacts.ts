import { OpenAPIHono } from '@hono/zod-openapi'
import { putV2CompaniesCompanyIdEmployeesEmployeeIdEmergencyContactsRoute } from '../routes'

const app = new OpenAPIHono()

export const emergencyContactsHandler = app.openapi(
  putV2CompaniesCompanyIdEmployeesEmployeeIdEmergencyContactsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
