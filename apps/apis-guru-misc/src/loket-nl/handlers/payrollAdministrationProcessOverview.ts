import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollprocessoverviewRoute } from '../routes'

const app = new OpenAPIHono()

export const payrollAdministrationProcessOverviewHandler = app.openapi(
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollprocessoverviewRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
