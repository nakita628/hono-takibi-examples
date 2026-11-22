import { OpenAPIHono } from '@hono/zod-openapi'
import { postProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollperiodsInitialiseRoute } from '../routes'

const app = new OpenAPIHono()

export const initialisePayrollPeriodHandler = app.openapi(
  postProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollperiodsInitialiseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
