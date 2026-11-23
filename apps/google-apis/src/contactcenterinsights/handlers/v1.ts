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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1IssueModelCalculateIssueModelStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationConversationsCalculateStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameDeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameUndeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAnalysesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAnalysesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentConversationsBulkAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentConversationsIngestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentConversationsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentInsightsdataExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentIssueModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentIssueModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentPhraseMatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentPhraseMatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
