import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdYearendstatementsRoute,
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdYearendstatementsYearRoute,
} from '../routes'

const app = new OpenAPIHono()

export const yearEndStatementAtAdministrationLevelHandler = app
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdYearendstatementsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdYearendstatementsYearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
