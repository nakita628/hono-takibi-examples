import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAlarmModelsAlarmModelNameRoute,
  deleteDetectorModelsDetectorModelNameRoute,
  deleteInputsInputNameRoute,
  deleteTagsResourceArnTagKeysRoute,
  getAlarmModelsAlarmModelNameRoute,
  getAlarmModelsAlarmModelNameVersionsRoute,
  getAlarmModelsRoute,
  getAnalysisDetectorModelsAnalysisIdResultsRoute,
  getAnalysisDetectorModelsAnalysisIdRoute,
  getDetectorModelsDetectorModelNameRoute,
  getDetectorModelsDetectorModelNameVersionsRoute,
  getDetectorModelsRoute,
  getInputsInputNameRoute,
  getInputsRoute,
  getLoggingRoute,
  getTagsResourceArnRoute,
  postAlarmModelsAlarmModelNameRoute,
  postAlarmModelsRoute,
  postAnalysisDetectorModelsIndexRoute,
  postDetectorModelsDetectorModelNameRoute,
  postDetectorModelsRoute,
  postInputRoutingsRoute,
  postInputsRoute,
  postTagsResourceArnRoute,
  putInputsInputNameRoute,
  putLoggingRoute,
} from './routes'
import {
  deleteAlarmModelsAlarmModelNameRouteHandler,
  deleteDetectorModelsDetectorModelNameRouteHandler,
  deleteInputsInputNameRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getAlarmModelsAlarmModelNameRouteHandler,
  getAlarmModelsAlarmModelNameVersionsRouteHandler,
  getAlarmModelsRouteHandler,
  getAnalysisDetectorModelsAnalysisIdResultsRouteHandler,
  getAnalysisDetectorModelsAnalysisIdRouteHandler,
  getDetectorModelsDetectorModelNameRouteHandler,
  getDetectorModelsDetectorModelNameVersionsRouteHandler,
  getDetectorModelsRouteHandler,
  getInputsInputNameRouteHandler,
  getInputsRouteHandler,
  getLoggingRouteHandler,
  getTagsResourceArnRouteHandler,
  postAlarmModelsAlarmModelNameRouteHandler,
  postAlarmModelsRouteHandler,
  postAnalysisDetectorModelsIndexRouteHandler,
  postDetectorModelsDetectorModelNameRouteHandler,
  postDetectorModelsRouteHandler,
  postInputRoutingsRouteHandler,
  postInputsRouteHandler,
  postTagsResourceArnRouteHandler,
  putInputsInputNameRouteHandler,
  putLoggingRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAlarmModelsRoute, postAlarmModelsRouteHandler)
  .openapi(getAlarmModelsRoute, getAlarmModelsRouteHandler)
  .openapi(postDetectorModelsRoute, postDetectorModelsRouteHandler)
  .openapi(getDetectorModelsRoute, getDetectorModelsRouteHandler)
  .openapi(postInputsRoute, postInputsRouteHandler)
  .openapi(getInputsRoute, getInputsRouteHandler)
  .openapi(deleteAlarmModelsAlarmModelNameRoute, deleteAlarmModelsAlarmModelNameRouteHandler)
  .openapi(getAlarmModelsAlarmModelNameRoute, getAlarmModelsAlarmModelNameRouteHandler)
  .openapi(postAlarmModelsAlarmModelNameRoute, postAlarmModelsAlarmModelNameRouteHandler)
  .openapi(
    deleteDetectorModelsDetectorModelNameRoute,
    deleteDetectorModelsDetectorModelNameRouteHandler,
  )
  .openapi(getDetectorModelsDetectorModelNameRoute, getDetectorModelsDetectorModelNameRouteHandler)
  .openapi(
    postDetectorModelsDetectorModelNameRoute,
    postDetectorModelsDetectorModelNameRouteHandler,
  )
  .openapi(deleteInputsInputNameRoute, deleteInputsInputNameRouteHandler)
  .openapi(getInputsInputNameRoute, getInputsInputNameRouteHandler)
  .openapi(putInputsInputNameRoute, putInputsInputNameRouteHandler)
  .openapi(
    getAnalysisDetectorModelsAnalysisIdRoute,
    getAnalysisDetectorModelsAnalysisIdRouteHandler,
  )
  .openapi(getLoggingRoute, getLoggingRouteHandler)
  .openapi(putLoggingRoute, putLoggingRouteHandler)
  .openapi(
    getAnalysisDetectorModelsAnalysisIdResultsRoute,
    getAnalysisDetectorModelsAnalysisIdResultsRouteHandler,
  )
  .openapi(
    getAlarmModelsAlarmModelNameVersionsRoute,
    getAlarmModelsAlarmModelNameVersionsRouteHandler,
  )
  .openapi(
    getDetectorModelsDetectorModelNameVersionsRoute,
    getDetectorModelsDetectorModelNameVersionsRouteHandler,
  )
  .openapi(postInputRoutingsRoute, postInputRoutingsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postAnalysisDetectorModelsIndexRoute, postAnalysisDetectorModelsIndexRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
