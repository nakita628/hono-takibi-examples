import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollPeriodsPayrollPeriodIdPayrollperioddataRoute } from '../routes'

const app = new OpenAPIHono()

export const payrollPeriodDataOnAdministrationLevelHandler = app.openapi(
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollPeriodsPayrollPeriodIdPayrollperioddataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
