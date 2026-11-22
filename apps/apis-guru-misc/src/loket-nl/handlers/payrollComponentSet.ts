import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAvailablepayrollcomponentsetsRoute } from '../routes'

const app = new OpenAPIHono()

export const payrollComponentSetHandler = app.openapi(
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAvailablepayrollcomponentsetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
