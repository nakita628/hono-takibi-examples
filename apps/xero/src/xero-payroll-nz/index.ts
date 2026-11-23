import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deductionsHandler,
  earningsRatesHandler,
  employeesHandler,
  leaveTypesHandler,
  payRunCalendarsHandler,
  payRunsHandler,
  paySlipsHandler,
  reimbursementsHandler,
  settingsHandler,
  statutoryDeductionsHandler,
  superannuationsHandler,
  timesheetsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', employeesHandler)
  .route('/', deductionsHandler)
  .route('/', statutoryDeductionsHandler)
  .route('/', superannuationsHandler)
  .route('/', earningsRatesHandler)
  .route('/', leaveTypesHandler)
  .route('/', reimbursementsHandler)
  .route('/', timesheetsHandler)
  .route('/', payRunCalendarsHandler)
  .route('/', payRunsHandler)
  .route('/', paySlipsHandler)
  .route('/', settingsHandler)

export default app
