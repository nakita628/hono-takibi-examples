import { OpenAPIHono } from '@hono/zod-openapi'
import {
  auditCaseHandler,
  auditCategoryHandler,
  auditPrimaryCategoryHandler,
  calendarDatesHandler,
  candidateHandler,
  candidatesHandler,
  committeeHandler,
  committeesHandler,
  communicationCostsHandler,
  efileHandler,
  electionDatesHandler,
  electioneeringHandler,
  electionsHandler,
  filingsHandler,
  legalHandler,
  namesHandler,
  operationsLogHandler,
  presidentialHandler,
  radAnalystHandler,
  reportingDatesHandler,
  reportsHandler,
  schedulesHandler,
  stateElectionOfficeHandler,
  totalsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', auditCaseHandler)
  .route('/', auditCategoryHandler)
  .route('/', auditPrimaryCategoryHandler)
  .route('/', calendarDatesHandler)
  .route('/', candidateHandler)
  .route('/', candidatesHandler)
  .route('/', committeeHandler)
  .route('/', committeesHandler)
  .route('/', communicationCostsHandler)
  .route('/', efileHandler)
  .route('/', electionDatesHandler)
  .route('/', electioneeringHandler)
  .route('/', electionsHandler)
  .route('/', filingsHandler)
  .route('/', legalHandler)
  .route('/', namesHandler)
  .route('/', operationsLogHandler)
  .route('/', presidentialHandler)
  .route('/', radAnalystHandler)
  .route('/', reportingDatesHandler)
  .route('/', reportsHandler)
  .route('/', schedulesHandler)
  .route('/', stateElectionOfficeHandler)
  .route('/', totalsHandler)

export default app
