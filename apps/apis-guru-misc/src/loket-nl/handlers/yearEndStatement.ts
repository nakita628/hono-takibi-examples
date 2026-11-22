import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployeesEmploymentsEmploymentIdYearendstatementsRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdYearendstatementsYearRoute,
} from '../routes'

const app = new OpenAPIHono()

export const yearEndStatementHandler = app
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdYearendstatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdYearendstatementsYearRoute, (c) => {
    throw new Error('Not implemented')
  })
