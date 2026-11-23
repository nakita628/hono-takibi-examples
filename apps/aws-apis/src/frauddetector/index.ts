import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsHawksNestServiceFacadeBatchCreateVariableHandler,
  xAmzTargetAwsHawksNestServiceFacadeBatchGetVariableHandler,
  xAmzTargetAwsHawksNestServiceFacadeCancelBatchImportJobHandler,
  xAmzTargetAwsHawksNestServiceFacadeCancelBatchPredictionJobHandler,
  xAmzTargetAwsHawksNestServiceFacadeCreateBatchImportJobHandler,
  xAmzTargetAwsHawksNestServiceFacadeCreateBatchPredictionJobHandler,
  xAmzTargetAwsHawksNestServiceFacadeCreateDetectorVersionHandler,
  xAmzTargetAwsHawksNestServiceFacadeCreateListHandler,
  xAmzTargetAwsHawksNestServiceFacadeCreateModelHandler,
  xAmzTargetAwsHawksNestServiceFacadeCreateModelVersionHandler,
  xAmzTargetAwsHawksNestServiceFacadeCreateRuleHandler,
  xAmzTargetAwsHawksNestServiceFacadeCreateVariableHandler,
  xAmzTargetAwsHawksNestServiceFacadeDeleteBatchImportJobHandler,
  xAmzTargetAwsHawksNestServiceFacadeDeleteBatchPredictionJobHandler,
  xAmzTargetAwsHawksNestServiceFacadeDeleteDetectorHandler,
  xAmzTargetAwsHawksNestServiceFacadeDeleteDetectorVersionHandler,
  xAmzTargetAwsHawksNestServiceFacadeDeleteEntityTypeHandler,
  xAmzTargetAwsHawksNestServiceFacadeDeleteEventHandler,
  xAmzTargetAwsHawksNestServiceFacadeDeleteEventsByEventTypeHandler,
  xAmzTargetAwsHawksNestServiceFacadeDeleteEventTypeHandler,
  xAmzTargetAwsHawksNestServiceFacadeDeleteExternalModelHandler,
  xAmzTargetAwsHawksNestServiceFacadeDeleteLabelHandler,
  xAmzTargetAwsHawksNestServiceFacadeDeleteListHandler,
  xAmzTargetAwsHawksNestServiceFacadeDeleteModelHandler,
  xAmzTargetAwsHawksNestServiceFacadeDeleteModelVersionHandler,
  xAmzTargetAwsHawksNestServiceFacadeDeleteOutcomeHandler,
  xAmzTargetAwsHawksNestServiceFacadeDeleteRuleHandler,
  xAmzTargetAwsHawksNestServiceFacadeDeleteVariableHandler,
  xAmzTargetAwsHawksNestServiceFacadeDescribeDetectorHandler,
  xAmzTargetAwsHawksNestServiceFacadeDescribeModelVersionsHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetBatchImportJobsHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetBatchPredictionJobsHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetDetectorsHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetDetectorVersionHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetEntityTypesHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetEventHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetEventPredictionHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetEventPredictionMetadataHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetEventTypesHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetExternalModelsHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetKmsEncryptionKeyHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetLabelsHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetListElementsHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetListsMetadataHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetModelsHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetModelVersionHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetOutcomesHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetRulesHandler,
  xAmzTargetAwsHawksNestServiceFacadeGetVariablesHandler,
  xAmzTargetAwsHawksNestServiceFacadeListEventPredictionsHandler,
  xAmzTargetAwsHawksNestServiceFacadeListTagsForResourceHandler,
  xAmzTargetAwsHawksNestServiceFacadePutDetectorHandler,
  xAmzTargetAwsHawksNestServiceFacadePutEntityTypeHandler,
  xAmzTargetAwsHawksNestServiceFacadePutEventTypeHandler,
  xAmzTargetAwsHawksNestServiceFacadePutExternalModelHandler,
  xAmzTargetAwsHawksNestServiceFacadePutKmsEncryptionKeyHandler,
  xAmzTargetAwsHawksNestServiceFacadePutLabelHandler,
  xAmzTargetAwsHawksNestServiceFacadePutOutcomeHandler,
  xAmzTargetAwsHawksNestServiceFacadeSendEventHandler,
  xAmzTargetAwsHawksNestServiceFacadeTagResourceHandler,
  xAmzTargetAwsHawksNestServiceFacadeUntagResourceHandler,
  xAmzTargetAwsHawksNestServiceFacadeUpdateDetectorVersionHandler,
  xAmzTargetAwsHawksNestServiceFacadeUpdateDetectorVersionMetadataHandler,
  xAmzTargetAwsHawksNestServiceFacadeUpdateDetectorVersionStatusHandler,
  xAmzTargetAwsHawksNestServiceFacadeUpdateEventLabelHandler,
  xAmzTargetAwsHawksNestServiceFacadeUpdateListHandler,
  xAmzTargetAwsHawksNestServiceFacadeUpdateModelHandler,
  xAmzTargetAwsHawksNestServiceFacadeUpdateModelVersionHandler,
  xAmzTargetAwsHawksNestServiceFacadeUpdateModelVersionStatusHandler,
  xAmzTargetAwsHawksNestServiceFacadeUpdateRuleMetadataHandler,
  xAmzTargetAwsHawksNestServiceFacadeUpdateRuleVersionHandler,
  xAmzTargetAwsHawksNestServiceFacadeUpdateVariableHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsHawksNestServiceFacadeBatchCreateVariableHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeBatchGetVariableHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeCancelBatchImportJobHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeCancelBatchPredictionJobHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeCreateBatchImportJobHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeCreateBatchPredictionJobHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeCreateDetectorVersionHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeCreateListHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeCreateModelHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeCreateModelVersionHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeCreateRuleHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeCreateVariableHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDeleteBatchImportJobHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDeleteBatchPredictionJobHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDeleteDetectorHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDeleteDetectorVersionHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDeleteEntityTypeHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDeleteEventHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDeleteEventTypeHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDeleteEventsByEventTypeHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDeleteExternalModelHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDeleteLabelHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDeleteListHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDeleteModelHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDeleteModelVersionHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDeleteOutcomeHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDeleteRuleHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDeleteVariableHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDescribeDetectorHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeDescribeModelVersionsHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetBatchImportJobsHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetBatchPredictionJobsHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetDetectorVersionHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetDetectorsHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetEntityTypesHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetEventHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetEventPredictionHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetEventPredictionMetadataHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetEventTypesHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetExternalModelsHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetKmsEncryptionKeyHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetLabelsHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetListElementsHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetListsMetadataHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetModelVersionHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetModelsHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetOutcomesHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetRulesHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeGetVariablesHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeListEventPredictionsHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeListTagsForResourceHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadePutDetectorHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadePutEntityTypeHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadePutEventTypeHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadePutExternalModelHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadePutKmsEncryptionKeyHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadePutLabelHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadePutOutcomeHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeSendEventHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeTagResourceHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeUntagResourceHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeUpdateDetectorVersionHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeUpdateDetectorVersionMetadataHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeUpdateDetectorVersionStatusHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeUpdateEventLabelHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeUpdateListHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeUpdateModelHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeUpdateModelVersionHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeUpdateModelVersionStatusHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeUpdateRuleMetadataHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeUpdateRuleVersionHandler)
  .route('/', xAmzTargetAwsHawksNestServiceFacadeUpdateVariableHandler)

export default app
