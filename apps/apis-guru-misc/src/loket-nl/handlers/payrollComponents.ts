import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollcomponentsYearYearRoute } from '../routes'

const app = new OpenAPIHono()

export const payrollComponentsHandler = app.openapi(
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollcomponentsYearYearRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
