import { OpenAPIHono } from '@hono/zod-openapi'
import {
  benefitsHandler,
  deductionsHandler,
  earningsOrdersHandler,
  earningsRatesHandler,
  employeesHandler,
  leaveTypesHandler,
  payRunCalendarsHandler,
  payRunsHandler,
  payslipsHandler,
  reimbursementsHandler,
  settingsHandler,
  statutoryLeavesHandler,
  timesheetsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', employeesHandler)
  .route('/', statutoryLeavesHandler)
  .route('/', benefitsHandler)
  .route('/', deductionsHandler)
  .route('/', earningsOrdersHandler)
  .route('/', earningsRatesHandler)
  .route('/', leaveTypesHandler)
  .route('/', reimbursementsHandler)
  .route('/', timesheetsHandler)
  .route('/', payRunCalendarsHandler)
  .route('/', payRunsHandler)
  .route('/', payslipsHandler)
  .route('/', settingsHandler)

export default app
