import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aiSessionsHandler,
  automateWorkflowsHandler,
  documentSplitsHandler,
  notesHandler,
  queryHandler,
  queryInsightsHandler,
  shuttleDiscoveredSubjectsHandler,
  shuttleJobSchedulesHandler,
  shuttleJobsHandler,
  shuttleMappingErrorsHandler,
  shuttlePathEntriesHandler,
  shuttlePathMappingImportsHandler,
  shuttlePathMappingsHandler,
  shuttleReportsHandler,
  shuttleRunsHandler,
  shuttleSubjectMappingImportsHandler,
  shuttleSubjectMappingsHandler,
  shuttleSystemsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', automateWorkflowsHandler)
  .route('/', notesHandler)
  .route('/', documentSplitsHandler)
  .route('/', queryHandler)
  .route('/', queryInsightsHandler)
  .route('/', shuttleSystemsHandler)
  .route('/', shuttleJobsHandler)
  .route('/', shuttleRunsHandler)
  .route('/', shuttleJobSchedulesHandler)
  .route('/', shuttlePathMappingsHandler)
  .route('/', shuttlePathMappingImportsHandler)
  .route('/', shuttleSubjectMappingImportsHandler)
  .route('/', shuttleSubjectMappingsHandler)
  .route('/', shuttleDiscoveredSubjectsHandler)
  .route('/', shuttlePathEntriesHandler)
  .route('/', shuttleMappingErrorsHandler)
  .route('/', shuttleReportsHandler)
  .route('/', aiSessionsHandler)

export default app
