import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSHawksNestServiceFacadeBatchCreateVariableHandler,
  XAmzTargetAWSHawksNestServiceFacadeBatchGetVariableHandler,
  XAmzTargetAWSHawksNestServiceFacadeCancelBatchImportJobHandler,
  XAmzTargetAWSHawksNestServiceFacadeCancelBatchPredictionJobHandler,
  XAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJobHandler,
  XAmzTargetAWSHawksNestServiceFacadeCreateBatchPredictionJobHandler,
  XAmzTargetAWSHawksNestServiceFacadeCreateDetectorVersionHandler,
  XAmzTargetAWSHawksNestServiceFacadeCreateListHandler,
  XAmzTargetAWSHawksNestServiceFacadeCreateModelHandler,
  XAmzTargetAWSHawksNestServiceFacadeCreateModelVersionHandler,
  XAmzTargetAWSHawksNestServiceFacadeCreateRuleHandler,
  XAmzTargetAWSHawksNestServiceFacadeCreateVariableHandler,
  XAmzTargetAWSHawksNestServiceFacadeDeleteBatchImportJobHandler,
  XAmzTargetAWSHawksNestServiceFacadeDeleteBatchPredictionJobHandler,
  XAmzTargetAWSHawksNestServiceFacadeDeleteDetectorHandler,
  XAmzTargetAWSHawksNestServiceFacadeDeleteDetectorVersionHandler,
  XAmzTargetAWSHawksNestServiceFacadeDeleteEntityTypeHandler,
  XAmzTargetAWSHawksNestServiceFacadeDeleteEventHandler,
  XAmzTargetAWSHawksNestServiceFacadeDeleteEventsByEventTypeHandler,
  XAmzTargetAWSHawksNestServiceFacadeDeleteEventTypeHandler,
  XAmzTargetAWSHawksNestServiceFacadeDeleteExternalModelHandler,
  XAmzTargetAWSHawksNestServiceFacadeDeleteLabelHandler,
  XAmzTargetAWSHawksNestServiceFacadeDeleteListHandler,
  XAmzTargetAWSHawksNestServiceFacadeDeleteModelHandler,
  XAmzTargetAWSHawksNestServiceFacadeDeleteModelVersionHandler,
  XAmzTargetAWSHawksNestServiceFacadeDeleteOutcomeHandler,
  XAmzTargetAWSHawksNestServiceFacadeDeleteRuleHandler,
  XAmzTargetAWSHawksNestServiceFacadeDeleteVariableHandler,
  XAmzTargetAWSHawksNestServiceFacadeDescribeDetectorHandler,
  XAmzTargetAWSHawksNestServiceFacadeDescribeModelVersionsHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobsHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetBatchPredictionJobsHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetDetectorsHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetDetectorVersionHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetEntityTypesHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetEventHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetEventPredictionHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadataHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetEventTypesHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetExternalModelsHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetKMSEncryptionKeyHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetLabelsHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetListElementsHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetListsMetadataHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetModelsHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetModelVersionHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetOutcomesHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetRulesHandler,
  XAmzTargetAWSHawksNestServiceFacadeGetVariablesHandler,
  XAmzTargetAWSHawksNestServiceFacadeListEventPredictionsHandler,
  XAmzTargetAWSHawksNestServiceFacadeListTagsForResourceHandler,
  XAmzTargetAWSHawksNestServiceFacadePutDetectorHandler,
  XAmzTargetAWSHawksNestServiceFacadePutEntityTypeHandler,
  XAmzTargetAWSHawksNestServiceFacadePutEventTypeHandler,
  XAmzTargetAWSHawksNestServiceFacadePutExternalModelHandler,
  XAmzTargetAWSHawksNestServiceFacadePutKMSEncryptionKeyHandler,
  XAmzTargetAWSHawksNestServiceFacadePutLabelHandler,
  XAmzTargetAWSHawksNestServiceFacadePutOutcomeHandler,
  XAmzTargetAWSHawksNestServiceFacadeSendEventHandler,
  XAmzTargetAWSHawksNestServiceFacadeTagResourceHandler,
  XAmzTargetAWSHawksNestServiceFacadeUntagResourceHandler,
  XAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionHandler,
  XAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMetadataHandler,
  XAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionStatusHandler,
  XAmzTargetAWSHawksNestServiceFacadeUpdateEventLabelHandler,
  XAmzTargetAWSHawksNestServiceFacadeUpdateListHandler,
  XAmzTargetAWSHawksNestServiceFacadeUpdateModelHandler,
  XAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionHandler,
  XAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionStatusHandler,
  XAmzTargetAWSHawksNestServiceFacadeUpdateRuleMetadataHandler,
  XAmzTargetAWSHawksNestServiceFacadeUpdateRuleVersionHandler,
  XAmzTargetAWSHawksNestServiceFacadeUpdateVariableHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSHawksNestServiceFacadeBatchCreateVariableHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeBatchGetVariableHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeCancelBatchImportJobHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeCancelBatchPredictionJobHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJobHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeCreateBatchPredictionJobHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeCreateDetectorVersionHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeCreateListHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeCreateModelHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeCreateModelVersionHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeCreateRuleHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeCreateVariableHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDeleteBatchImportJobHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDeleteBatchPredictionJobHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDeleteDetectorHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDeleteDetectorVersionHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDeleteEntityTypeHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDeleteEventHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDeleteEventTypeHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDeleteEventsByEventTypeHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDeleteExternalModelHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDeleteLabelHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDeleteListHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDeleteModelHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDeleteModelVersionHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDeleteOutcomeHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDeleteRuleHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDeleteVariableHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDescribeDetectorHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeDescribeModelVersionsHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobsHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetBatchPredictionJobsHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetDetectorVersionHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetDetectorsHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetEntityTypesHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetEventHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetEventPredictionHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadataHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetEventTypesHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetExternalModelsHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetKMSEncryptionKeyHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetLabelsHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetListElementsHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetListsMetadataHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetModelVersionHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetModelsHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetOutcomesHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetRulesHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeGetVariablesHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeListEventPredictionsHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeListTagsForResourceHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadePutDetectorHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadePutEntityTypeHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadePutEventTypeHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadePutExternalModelHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadePutKMSEncryptionKeyHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadePutLabelHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadePutOutcomeHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeSendEventHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeTagResourceHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeUntagResourceHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMetadataHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionStatusHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeUpdateEventLabelHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeUpdateListHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeUpdateModelHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionStatusHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeUpdateRuleMetadataHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeUpdateRuleVersionHandler)
  .route('/', XAmzTargetAWSHawksNestServiceFacadeUpdateVariableHandler)

export default app
