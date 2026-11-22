import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollperiodsCompareRoute,
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollperiodsPayrollPeriodIdPayrollresultsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payrollResultsHandler = app
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollperiodsCompareRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollperiodsPayrollPeriodIdPayrollresultsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
