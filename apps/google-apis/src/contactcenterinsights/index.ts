import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1IssueModelCalculateIssueModelStatsRoute,
  getV1LocationConversationsCalculateStatsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentAnalysesRoute,
  getV1ParentConversationsRoute,
  getV1ParentIssueModelsRoute,
  getV1ParentIssuesRoute,
  getV1ParentPhraseMatchersRoute,
  getV1ParentViewsRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1NameDeployRoute,
  postV1NameUndeployRoute,
  postV1ParentAnalysesRoute,
  postV1ParentConversationsBulkAnalyzeRoute,
  postV1ParentConversationsIngestRoute,
  postV1ParentConversationsRoute,
  postV1ParentConversationsUploadRoute,
  postV1ParentInsightsdataExportRoute,
  postV1ParentIssueModelsRoute,
  postV1ParentPhraseMatchersRoute,
  postV1ParentViewsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1IssueModelCalculateIssueModelStatsRouteHandler,
  getV1LocationConversationsCalculateStatsRouteHandler,
  getV1NameOperationsRouteHandler,
  getV1NameRouteHandler,
  getV1ParentAnalysesRouteHandler,
  getV1ParentConversationsRouteHandler,
  getV1ParentIssueModelsRouteHandler,
  getV1ParentIssuesRouteHandler,
  getV1ParentPhraseMatchersRouteHandler,
  getV1ParentViewsRouteHandler,
  patchV1NameRouteHandler,
  postV1NameCancelRouteHandler,
  postV1NameDeployRouteHandler,
  postV1NameUndeployRouteHandler,
  postV1ParentAnalysesRouteHandler,
  postV1ParentConversationsBulkAnalyzeRouteHandler,
  postV1ParentConversationsIngestRouteHandler,
  postV1ParentConversationsRouteHandler,
  postV1ParentConversationsUploadRouteHandler,
  postV1ParentInsightsdataExportRouteHandler,
  postV1ParentIssueModelsRouteHandler,
  postV1ParentPhraseMatchersRouteHandler,
  postV1ParentViewsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getV1IssueModelCalculateIssueModelStatsRoute,
    getV1IssueModelCalculateIssueModelStatsRouteHandler,
  )
  .openapi(
    getV1LocationConversationsCalculateStatsRoute,
    getV1LocationConversationsCalculateStatsRouteHandler,
  )
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameOperationsRoute, getV1NameOperationsRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(postV1NameDeployRoute, postV1NameDeployRouteHandler)
  .openapi(postV1NameUndeployRoute, postV1NameUndeployRouteHandler)
  .openapi(getV1ParentAnalysesRoute, getV1ParentAnalysesRouteHandler)
  .openapi(postV1ParentAnalysesRoute, postV1ParentAnalysesRouteHandler)
  .openapi(getV1ParentConversationsRoute, getV1ParentConversationsRouteHandler)
  .openapi(postV1ParentConversationsRoute, postV1ParentConversationsRouteHandler)
  .openapi(
    postV1ParentConversationsBulkAnalyzeRoute,
    postV1ParentConversationsBulkAnalyzeRouteHandler,
  )
  .openapi(postV1ParentConversationsIngestRoute, postV1ParentConversationsIngestRouteHandler)
  .openapi(postV1ParentConversationsUploadRoute, postV1ParentConversationsUploadRouteHandler)
  .openapi(postV1ParentInsightsdataExportRoute, postV1ParentInsightsdataExportRouteHandler)
  .openapi(getV1ParentIssueModelsRoute, getV1ParentIssueModelsRouteHandler)
  .openapi(postV1ParentIssueModelsRoute, postV1ParentIssueModelsRouteHandler)
  .openapi(getV1ParentIssuesRoute, getV1ParentIssuesRouteHandler)
  .openapi(getV1ParentPhraseMatchersRoute, getV1ParentPhraseMatchersRouteHandler)
  .openapi(postV1ParentPhraseMatchersRoute, postV1ParentPhraseMatchersRouteHandler)
  .openapi(getV1ParentViewsRoute, getV1ParentViewsRouteHandler)
  .openapi(postV1ParentViewsRoute, postV1ParentViewsRouteHandler)

export default app
