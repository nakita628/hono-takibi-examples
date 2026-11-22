import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdRoute,
  getHrisPayrollsEmployeesEmployeeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employeePayrollsHandler = app
  .openapi(getHrisPayrollsEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
