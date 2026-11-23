import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAnalyzerAnalyzerNameArchiveRuleRuleNameRoute,
  deleteAnalyzerAnalyzerNameRoute,
  deleteTagsResourceArnTagKeysRoute,
  getAccessPreviewAccessPreviewIdAnalyzerArnRoute,
  getAccessPreviewAnalyzerArnRoute,
  getAnalyzedResourceAnalyzerArnResourceArnRoute,
  getAnalyzerAnalyzerNameArchiveRuleRoute,
  getAnalyzerAnalyzerNameArchiveRuleRuleNameRoute,
  getAnalyzerAnalyzerNameRoute,
  getAnalyzerRoute,
  getFindingIdAnalyzerArnRoute,
  getPolicyGenerationJobIdRoute,
  getPolicyGenerationRoute,
  getTagsResourceArnRoute,
  postAccessPreviewAccessPreviewIdRoute,
  postAnalyzedResourceRoute,
  postFindingRoute,
  postPolicyValidationRoute,
  postResourceScanRoute,
  postTagsResourceArnRoute,
  putAccessPreviewRoute,
  putAnalyzerAnalyzerNameArchiveRuleRoute,
  putAnalyzerAnalyzerNameArchiveRuleRuleNameRoute,
  putAnalyzerRoute,
  putArchiveRuleRoute,
  putFindingRoute,
  putPolicyGenerationJobIdRoute,
  putPolicyGenerationRoute,
} from './routes'
import {
  deleteAnalyzerAnalyzerNameArchiveRuleRuleNameRouteHandler,
  deleteAnalyzerAnalyzerNameRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getAccessPreviewAccessPreviewIdAnalyzerArnRouteHandler,
  getAccessPreviewAnalyzerArnRouteHandler,
  getAnalyzedResourceAnalyzerArnResourceArnRouteHandler,
  getAnalyzerAnalyzerNameArchiveRuleRouteHandler,
  getAnalyzerAnalyzerNameArchiveRuleRuleNameRouteHandler,
  getAnalyzerAnalyzerNameRouteHandler,
  getAnalyzerRouteHandler,
  getFindingIdAnalyzerArnRouteHandler,
  getPolicyGenerationJobIdRouteHandler,
  getPolicyGenerationRouteHandler,
  getTagsResourceArnRouteHandler,
  postAccessPreviewAccessPreviewIdRouteHandler,
  postAnalyzedResourceRouteHandler,
  postFindingRouteHandler,
  postPolicyValidationRouteHandler,
  postResourceScanRouteHandler,
  postTagsResourceArnRouteHandler,
  putAccessPreviewRouteHandler,
  putAnalyzerAnalyzerNameArchiveRuleRouteHandler,
  putAnalyzerAnalyzerNameArchiveRuleRuleNameRouteHandler,
  putAnalyzerRouteHandler,
  putArchiveRuleRouteHandler,
  putFindingRouteHandler,
  putPolicyGenerationJobIdRouteHandler,
  putPolicyGenerationRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putArchiveRuleRoute, putArchiveRuleRouteHandler)
  .openapi(putPolicyGenerationJobIdRoute, putPolicyGenerationJobIdRouteHandler)
  .openapi(getPolicyGenerationJobIdRoute, getPolicyGenerationJobIdRouteHandler)
  .openapi(putAccessPreviewRoute, putAccessPreviewRouteHandler)
  .openapi(putAnalyzerRoute, putAnalyzerRouteHandler)
  .openapi(getAnalyzerRoute, getAnalyzerRouteHandler)
  .openapi(putAnalyzerAnalyzerNameArchiveRuleRoute, putAnalyzerAnalyzerNameArchiveRuleRouteHandler)
  .openapi(getAnalyzerAnalyzerNameArchiveRuleRoute, getAnalyzerAnalyzerNameArchiveRuleRouteHandler)
  .openapi(deleteAnalyzerAnalyzerNameRoute, deleteAnalyzerAnalyzerNameRouteHandler)
  .openapi(getAnalyzerAnalyzerNameRoute, getAnalyzerAnalyzerNameRouteHandler)
  .openapi(
    deleteAnalyzerAnalyzerNameArchiveRuleRuleNameRoute,
    deleteAnalyzerAnalyzerNameArchiveRuleRuleNameRouteHandler,
  )
  .openapi(
    getAnalyzerAnalyzerNameArchiveRuleRuleNameRoute,
    getAnalyzerAnalyzerNameArchiveRuleRuleNameRouteHandler,
  )
  .openapi(
    putAnalyzerAnalyzerNameArchiveRuleRuleNameRoute,
    putAnalyzerAnalyzerNameArchiveRuleRuleNameRouteHandler,
  )
  .openapi(
    getAccessPreviewAccessPreviewIdAnalyzerArnRoute,
    getAccessPreviewAccessPreviewIdAnalyzerArnRouteHandler,
  )
  .openapi(
    getAnalyzedResourceAnalyzerArnResourceArnRoute,
    getAnalyzedResourceAnalyzerArnResourceArnRouteHandler,
  )
  .openapi(getFindingIdAnalyzerArnRoute, getFindingIdAnalyzerArnRouteHandler)
  .openapi(postAccessPreviewAccessPreviewIdRoute, postAccessPreviewAccessPreviewIdRouteHandler)
  .openapi(getAccessPreviewAnalyzerArnRoute, getAccessPreviewAnalyzerArnRouteHandler)
  .openapi(postAnalyzedResourceRoute, postAnalyzedResourceRouteHandler)
  .openapi(postFindingRoute, postFindingRouteHandler)
  .openapi(putFindingRoute, putFindingRouteHandler)
  .openapi(getPolicyGenerationRoute, getPolicyGenerationRouteHandler)
  .openapi(putPolicyGenerationRoute, putPolicyGenerationRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postResourceScanRoute, postResourceScanRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(postPolicyValidationRoute, postPolicyValidationRouteHandler)

export default app
