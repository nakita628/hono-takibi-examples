import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const payrollRunResultsHandler = app.openapi(
  getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdResultsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
