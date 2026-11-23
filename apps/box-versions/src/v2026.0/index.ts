import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiSessionsAiSessionIdRoute,
  deleteShuttleJobSchedulesShuttleJobScheduleIdRoute,
  deleteShuttleJobsShuttleJobIdRoute,
  deleteShuttlePathMappingsShuttlePathMappingIdRoute,
  deleteShuttleSubjectMappingsShuttleSubjectMappingIdRoute,
  deleteShuttleSystemsShuttleSystemIdRoute,
  getAiSessionsRoute,
  getAutomateWorkflowsRoute,
  getDocumentSplitsDocumentSplitIdRoute,
  getDocumentSplitsRoute,
  getShuttleDiscoveredSubjectsRoute,
  getShuttleJobSchedulesRoute,
  getShuttleJobSchedulesShuttleJobScheduleIdRoute,
  getShuttleJobsRoute,
  getShuttleJobsShuttleJobIdRoute,
  getShuttleMappingErrorsRoute,
  getShuttlePathEntriesRoute,
  getShuttlePathMappingsRoute,
  getShuttlePathMappingsShuttlePathMappingIdRoute,
  getShuttleReportsRoute,
  getShuttleReportsShuttleReportIdRoute,
  getShuttleRunsRoute,
  getShuttleRunsShuttleRunIdRoute,
  getShuttleSubjectMappingsRoute,
  getShuttleSubjectMappingsShuttleSubjectMappingIdRoute,
  getShuttleSystemsRoute,
  getShuttleSystemsShuttleSystemIdRoute,
  postAutomateWorkflowsWorkflowIdStartRoute,
  postDocumentSplitsRoute,
  postNotesConvertRoute,
  postQueryInsightsRoute,
  postQueryRoute,
  postShuttleJobSchedulesRoute,
  postShuttleJobsRoute,
  postShuttleJobsShuttleJobIdPrepareMigrationRoute,
  postShuttleJobsShuttleJobIdStartRoute,
  postShuttleJobsShuttleJobIdStopRoute,
  postShuttlePathMappingImportsRoute,
  postShuttlePathMappingsRoute,
  postShuttleReportsRoute,
  postShuttleSubjectMappingImportsRoute,
  postShuttleSubjectMappingsRoute,
  postShuttleSystemsRoute,
  postShuttleSystemsShuttleSystemIdIssueRegistrationTokenRoute,
  putShuttleJobSchedulesShuttleJobScheduleIdRoute,
  putShuttleJobsShuttleJobIdRoute,
  putShuttlePathMappingsShuttlePathMappingIdRoute,
  putShuttleSubjectMappingsShuttleSubjectMappingIdRoute,
  putShuttleSystemsShuttleSystemIdRoute,
} from './routes'
import {
  deleteAiSessionsAiSessionIdRouteHandler,
  deleteShuttleJobSchedulesShuttleJobScheduleIdRouteHandler,
  deleteShuttleJobsShuttleJobIdRouteHandler,
  deleteShuttlePathMappingsShuttlePathMappingIdRouteHandler,
  deleteShuttleSubjectMappingsShuttleSubjectMappingIdRouteHandler,
  deleteShuttleSystemsShuttleSystemIdRouteHandler,
  getAiSessionsRouteHandler,
  getAutomateWorkflowsRouteHandler,
  getDocumentSplitsDocumentSplitIdRouteHandler,
  getDocumentSplitsRouteHandler,
  getShuttleDiscoveredSubjectsRouteHandler,
  getShuttleJobSchedulesRouteHandler,
  getShuttleJobSchedulesShuttleJobScheduleIdRouteHandler,
  getShuttleJobsRouteHandler,
  getShuttleJobsShuttleJobIdRouteHandler,
  getShuttleMappingErrorsRouteHandler,
  getShuttlePathEntriesRouteHandler,
  getShuttlePathMappingsRouteHandler,
  getShuttlePathMappingsShuttlePathMappingIdRouteHandler,
  getShuttleReportsRouteHandler,
  getShuttleReportsShuttleReportIdRouteHandler,
  getShuttleRunsRouteHandler,
  getShuttleRunsShuttleRunIdRouteHandler,
  getShuttleSubjectMappingsRouteHandler,
  getShuttleSubjectMappingsShuttleSubjectMappingIdRouteHandler,
  getShuttleSystemsRouteHandler,
  getShuttleSystemsShuttleSystemIdRouteHandler,
  postAutomateWorkflowsWorkflowIdStartRouteHandler,
  postDocumentSplitsRouteHandler,
  postNotesConvertRouteHandler,
  postQueryInsightsRouteHandler,
  postQueryRouteHandler,
  postShuttleJobSchedulesRouteHandler,
  postShuttleJobsRouteHandler,
  postShuttleJobsShuttleJobIdPrepareMigrationRouteHandler,
  postShuttleJobsShuttleJobIdStartRouteHandler,
  postShuttleJobsShuttleJobIdStopRouteHandler,
  postShuttlePathMappingImportsRouteHandler,
  postShuttlePathMappingsRouteHandler,
  postShuttleReportsRouteHandler,
  postShuttleSubjectMappingImportsRouteHandler,
  postShuttleSubjectMappingsRouteHandler,
  postShuttleSystemsRouteHandler,
  postShuttleSystemsShuttleSystemIdIssueRegistrationTokenRouteHandler,
  putShuttleJobSchedulesShuttleJobScheduleIdRouteHandler,
  putShuttleJobsShuttleJobIdRouteHandler,
  putShuttlePathMappingsShuttlePathMappingIdRouteHandler,
  putShuttleSubjectMappingsShuttleSubjectMappingIdRouteHandler,
  putShuttleSystemsShuttleSystemIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAutomateWorkflowsRoute, getAutomateWorkflowsRouteHandler)
  .openapi(
    postAutomateWorkflowsWorkflowIdStartRoute,
    postAutomateWorkflowsWorkflowIdStartRouteHandler,
  )
  .openapi(postNotesConvertRoute, postNotesConvertRouteHandler)
  .openapi(postDocumentSplitsRoute, postDocumentSplitsRouteHandler)
  .openapi(getDocumentSplitsRoute, getDocumentSplitsRouteHandler)
  .openapi(getDocumentSplitsDocumentSplitIdRoute, getDocumentSplitsDocumentSplitIdRouteHandler)
  .openapi(postQueryRoute, postQueryRouteHandler)
  .openapi(postQueryInsightsRoute, postQueryInsightsRouteHandler)
  .openapi(getShuttleSystemsRoute, getShuttleSystemsRouteHandler)
  .openapi(postShuttleSystemsRoute, postShuttleSystemsRouteHandler)
  .openapi(getShuttleSystemsShuttleSystemIdRoute, getShuttleSystemsShuttleSystemIdRouteHandler)
  .openapi(putShuttleSystemsShuttleSystemIdRoute, putShuttleSystemsShuttleSystemIdRouteHandler)
  .openapi(
    deleteShuttleSystemsShuttleSystemIdRoute,
    deleteShuttleSystemsShuttleSystemIdRouteHandler,
  )
  .openapi(
    postShuttleSystemsShuttleSystemIdIssueRegistrationTokenRoute,
    postShuttleSystemsShuttleSystemIdIssueRegistrationTokenRouteHandler,
  )
  .openapi(getShuttleJobsRoute, getShuttleJobsRouteHandler)
  .openapi(postShuttleJobsRoute, postShuttleJobsRouteHandler)
  .openapi(getShuttleJobsShuttleJobIdRoute, getShuttleJobsShuttleJobIdRouteHandler)
  .openapi(putShuttleJobsShuttleJobIdRoute, putShuttleJobsShuttleJobIdRouteHandler)
  .openapi(deleteShuttleJobsShuttleJobIdRoute, deleteShuttleJobsShuttleJobIdRouteHandler)
  .openapi(postShuttleJobsShuttleJobIdStartRoute, postShuttleJobsShuttleJobIdStartRouteHandler)
  .openapi(postShuttleJobsShuttleJobIdStopRoute, postShuttleJobsShuttleJobIdStopRouteHandler)
  .openapi(
    postShuttleJobsShuttleJobIdPrepareMigrationRoute,
    postShuttleJobsShuttleJobIdPrepareMigrationRouteHandler,
  )
  .openapi(getShuttleRunsRoute, getShuttleRunsRouteHandler)
  .openapi(getShuttleRunsShuttleRunIdRoute, getShuttleRunsShuttleRunIdRouteHandler)
  .openapi(getShuttleJobSchedulesRoute, getShuttleJobSchedulesRouteHandler)
  .openapi(postShuttleJobSchedulesRoute, postShuttleJobSchedulesRouteHandler)
  .openapi(
    getShuttleJobSchedulesShuttleJobScheduleIdRoute,
    getShuttleJobSchedulesShuttleJobScheduleIdRouteHandler,
  )
  .openapi(
    putShuttleJobSchedulesShuttleJobScheduleIdRoute,
    putShuttleJobSchedulesShuttleJobScheduleIdRouteHandler,
  )
  .openapi(
    deleteShuttleJobSchedulesShuttleJobScheduleIdRoute,
    deleteShuttleJobSchedulesShuttleJobScheduleIdRouteHandler,
  )
  .openapi(getShuttlePathMappingsRoute, getShuttlePathMappingsRouteHandler)
  .openapi(postShuttlePathMappingsRoute, postShuttlePathMappingsRouteHandler)
  .openapi(
    getShuttlePathMappingsShuttlePathMappingIdRoute,
    getShuttlePathMappingsShuttlePathMappingIdRouteHandler,
  )
  .openapi(
    putShuttlePathMappingsShuttlePathMappingIdRoute,
    putShuttlePathMappingsShuttlePathMappingIdRouteHandler,
  )
  .openapi(
    deleteShuttlePathMappingsShuttlePathMappingIdRoute,
    deleteShuttlePathMappingsShuttlePathMappingIdRouteHandler,
  )
  .openapi(postShuttlePathMappingImportsRoute, postShuttlePathMappingImportsRouteHandler)
  .openapi(postShuttleSubjectMappingImportsRoute, postShuttleSubjectMappingImportsRouteHandler)
  .openapi(getShuttleSubjectMappingsRoute, getShuttleSubjectMappingsRouteHandler)
  .openapi(postShuttleSubjectMappingsRoute, postShuttleSubjectMappingsRouteHandler)
  .openapi(
    getShuttleSubjectMappingsShuttleSubjectMappingIdRoute,
    getShuttleSubjectMappingsShuttleSubjectMappingIdRouteHandler,
  )
  .openapi(
    putShuttleSubjectMappingsShuttleSubjectMappingIdRoute,
    putShuttleSubjectMappingsShuttleSubjectMappingIdRouteHandler,
  )
  .openapi(
    deleteShuttleSubjectMappingsShuttleSubjectMappingIdRoute,
    deleteShuttleSubjectMappingsShuttleSubjectMappingIdRouteHandler,
  )
  .openapi(getShuttleDiscoveredSubjectsRoute, getShuttleDiscoveredSubjectsRouteHandler)
  .openapi(getShuttlePathEntriesRoute, getShuttlePathEntriesRouteHandler)
  .openapi(getShuttleMappingErrorsRoute, getShuttleMappingErrorsRouteHandler)
  .openapi(getShuttleReportsRoute, getShuttleReportsRouteHandler)
  .openapi(postShuttleReportsRoute, postShuttleReportsRouteHandler)
  .openapi(getShuttleReportsShuttleReportIdRoute, getShuttleReportsShuttleReportIdRouteHandler)
  .openapi(getAiSessionsRoute, getAiSessionsRouteHandler)
  .openapi(deleteAiSessionsAiSessionIdRoute, deleteAiSessionsAiSessionIdRouteHandler)

export default app
