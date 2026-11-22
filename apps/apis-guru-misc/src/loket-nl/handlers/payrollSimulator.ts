import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersEmployersEmployeesEmploymentsEmploymentIdPayrollSimulatorDataRoute } from '../routes'

const app = new OpenAPIHono()

export const payrollSimulatorHandler = app.openapi(
  getProvidersEmployersEmployeesEmploymentsEmploymentIdPayrollSimulatorDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
