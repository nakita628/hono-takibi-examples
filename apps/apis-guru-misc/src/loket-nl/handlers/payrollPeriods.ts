import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollperiodsMinimizedRoute,
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollperiodsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payrollPeriodsHandler = app
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollperiodsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollperiodsMinimizedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
