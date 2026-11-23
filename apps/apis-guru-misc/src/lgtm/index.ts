import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdRoute,
  deleteSnapshotsUploadsSessionIdRoute,
  getAnalysesAnalysisIdAlertsRoute,
  getAnalysesAnalysisIdRoute,
  getAnalysesProjectIdCommitsCommitIdRoute,
  getCodereviewsReviewIdRoute,
  getIssuesProjectIdAlertKeyRoute,
  getOpenapiRoute,
  getOperationsOperationIdRoute,
  getProjectsProjectIdRoute,
  getProjectsProjectIdSettingsAnalysisConfigurationRoute,
  getProjectsProviderOrgNameRoute,
  getProjectsRoute,
  getQueryjobsQueryjobIdResultsProjectIdRoute,
  getQueryjobsQueryjobIdResultsRoute,
  getQueryjobsQueryjobIdRoute,
  getRoute,
  getSnapshotsProjectIdLanguageRoute,
  getSystemHealthRoute,
  getSystemMetricsMetricIdRoute,
  getSystemMetricsRoute,
  postAnalysesProjectIdRoute,
  postCodereviewsProjectIdRoute,
  postProjectsRoute,
  postQueryjobsRoute,
  postSnapshotsProjectIdLanguageRoute,
  postSnapshotsUploadsSessionIdRoute,
  putProjectsProjectIdSettingsAnalysisConfigurationRoute,
  putSnapshotsUploadsSessionIdRoute,
} from './routes'
import {
  deleteProjectsProjectIdRouteHandler,
  deleteSnapshotsUploadsSessionIdRouteHandler,
  getAnalysesAnalysisIdAlertsRouteHandler,
  getAnalysesAnalysisIdRouteHandler,
  getAnalysesProjectIdCommitsCommitIdRouteHandler,
  getCodereviewsReviewIdRouteHandler,
  getIssuesProjectIdAlertKeyRouteHandler,
  getOpenapiRouteHandler,
  getOperationsOperationIdRouteHandler,
  getProjectsProjectIdRouteHandler,
  getProjectsProjectIdSettingsAnalysisConfigurationRouteHandler,
  getProjectsProviderOrgNameRouteHandler,
  getProjectsRouteHandler,
  getQueryjobsQueryjobIdResultsProjectIdRouteHandler,
  getQueryjobsQueryjobIdResultsRouteHandler,
  getQueryjobsQueryjobIdRouteHandler,
  getRouteHandler,
  getSnapshotsProjectIdLanguageRouteHandler,
  getSystemHealthRouteHandler,
  getSystemMetricsMetricIdRouteHandler,
  getSystemMetricsRouteHandler,
  postAnalysesProjectIdRouteHandler,
  postCodereviewsProjectIdRouteHandler,
  postProjectsRouteHandler,
  postQueryjobsRouteHandler,
  postSnapshotsProjectIdLanguageRouteHandler,
  postSnapshotsUploadsSessionIdRouteHandler,
  putProjectsProjectIdSettingsAnalysisConfigurationRouteHandler,
  putSnapshotsUploadsSessionIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getAnalysesAnalysisIdRoute, getAnalysesAnalysisIdRouteHandler)
  .openapi(getAnalysesAnalysisIdAlertsRoute, getAnalysesAnalysisIdAlertsRouteHandler)
  .openapi(postAnalysesProjectIdRoute, postAnalysesProjectIdRouteHandler)
  .openapi(
    getAnalysesProjectIdCommitsCommitIdRoute,
    getAnalysesProjectIdCommitsCommitIdRouteHandler,
  )
  .openapi(postCodereviewsProjectIdRoute, postCodereviewsProjectIdRouteHandler)
  .openapi(getCodereviewsReviewIdRoute, getCodereviewsReviewIdRouteHandler)
  .openapi(getIssuesProjectIdAlertKeyRoute, getIssuesProjectIdAlertKeyRouteHandler)
  .openapi(getOpenapiRoute, getOpenapiRouteHandler)
  .openapi(getOperationsOperationIdRoute, getOperationsOperationIdRouteHandler)
  .openapi(getProjectsRoute, getProjectsRouteHandler)
  .openapi(postProjectsRoute, postProjectsRouteHandler)
  .openapi(deleteProjectsProjectIdRoute, deleteProjectsProjectIdRouteHandler)
  .openapi(getProjectsProjectIdRoute, getProjectsProjectIdRouteHandler)
  .openapi(
    getProjectsProjectIdSettingsAnalysisConfigurationRoute,
    getProjectsProjectIdSettingsAnalysisConfigurationRouteHandler,
  )
  .openapi(
    putProjectsProjectIdSettingsAnalysisConfigurationRoute,
    putProjectsProjectIdSettingsAnalysisConfigurationRouteHandler,
  )
  .openapi(getProjectsProviderOrgNameRoute, getProjectsProviderOrgNameRouteHandler)
  .openapi(postQueryjobsRoute, postQueryjobsRouteHandler)
  .openapi(getQueryjobsQueryjobIdRoute, getQueryjobsQueryjobIdRouteHandler)
  .openapi(getQueryjobsQueryjobIdResultsRoute, getQueryjobsQueryjobIdResultsRouteHandler)
  .openapi(
    getQueryjobsQueryjobIdResultsProjectIdRoute,
    getQueryjobsQueryjobIdResultsProjectIdRouteHandler,
  )
  .openapi(deleteSnapshotsUploadsSessionIdRoute, deleteSnapshotsUploadsSessionIdRouteHandler)
  .openapi(postSnapshotsUploadsSessionIdRoute, postSnapshotsUploadsSessionIdRouteHandler)
  .openapi(putSnapshotsUploadsSessionIdRoute, putSnapshotsUploadsSessionIdRouteHandler)
  .openapi(getSnapshotsProjectIdLanguageRoute, getSnapshotsProjectIdLanguageRouteHandler)
  .openapi(postSnapshotsProjectIdLanguageRoute, postSnapshotsProjectIdLanguageRouteHandler)
  .openapi(getSystemHealthRoute, getSystemHealthRouteHandler)
  .openapi(getSystemMetricsRoute, getSystemMetricsRouteHandler)
  .openapi(getSystemMetricsMetricIdRoute, getSystemMetricsMetricIdRouteHandler)

export default app
