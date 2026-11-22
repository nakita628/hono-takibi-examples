import { OpenAPIHono } from '@hono/zod-openapi'
import {
  companiesHandler,
  departmentsHandler,
  employeePayrollsHandler,
  employeeSchedulesHandler,
  employeesHandler,
  jobsHandler,
  payrollsHandler,
  timeOffRequestsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', companiesHandler)
  .route('/', departmentsHandler)
  .route('/', employeesHandler)
  .route('/', jobsHandler)
  .route('/', payrollsHandler)
  .route('/', employeePayrollsHandler)
  .route('/', employeeSchedulesHandler)
  .route('/', timeOffRequestsHandler)

export default app
