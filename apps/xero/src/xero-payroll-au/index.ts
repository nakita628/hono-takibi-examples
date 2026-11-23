import { OpenAPIHono } from '@hono/zod-openapi'
import {
  employeesHandler,
  leaveApplicationsHandler,
  payItemsHandler,
  payrollCalendarsHandler,
  payRunsHandler,
  payslipHandler,
  settingsHandler,
  superfundProductsHandler,
  superfundsHandler,
  timesheetsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', employeesHandler)
  .route('/', leaveApplicationsHandler)
  .route('/', payItemsHandler)
  .route('/', payrollCalendarsHandler)
  .route('/', payRunsHandler)
  .route('/', payslipHandler)
  .route('/', settingsHandler)
  .route('/', superfundsHandler)
  .route('/', superfundProductsHandler)
  .route('/', timesheetsHandler)

export default app
