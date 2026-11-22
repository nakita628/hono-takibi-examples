import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetCodePipeline20150709AcknowledgeJobHandler,
  XAmzTargetCodePipeline20150709AcknowledgeThirdPartyJobHandler,
  XAmzTargetCodePipeline20150709CreateCustomActionTypeHandler,
  XAmzTargetCodePipeline20150709CreatePipelineHandler,
  XAmzTargetCodePipeline20150709DeleteCustomActionTypeHandler,
  XAmzTargetCodePipeline20150709DeletePipelineHandler,
  XAmzTargetCodePipeline20150709DeleteWebhookHandler,
  XAmzTargetCodePipeline20150709DeregisterWebhookWithThirdPartyHandler,
  XAmzTargetCodePipeline20150709DisableStageTransitionHandler,
  XAmzTargetCodePipeline20150709EnableStageTransitionHandler,
  XAmzTargetCodePipeline20150709GetActionTypeHandler,
  XAmzTargetCodePipeline20150709GetJobDetailsHandler,
  XAmzTargetCodePipeline20150709GetPipelineExecutionHandler,
  XAmzTargetCodePipeline20150709GetPipelineHandler,
  XAmzTargetCodePipeline20150709GetPipelineStateHandler,
  XAmzTargetCodePipeline20150709GetThirdPartyJobDetailsHandler,
  XAmzTargetCodePipeline20150709ListActionExecutionsHandler,
  XAmzTargetCodePipeline20150709ListActionTypesHandler,
  XAmzTargetCodePipeline20150709ListPipelineExecutionsHandler,
  XAmzTargetCodePipeline20150709ListPipelinesHandler,
  XAmzTargetCodePipeline20150709ListTagsForResourceHandler,
  XAmzTargetCodePipeline20150709ListWebhooksHandler,
  XAmzTargetCodePipeline20150709PollForJobsHandler,
  XAmzTargetCodePipeline20150709PollForThirdPartyJobsHandler,
  XAmzTargetCodePipeline20150709PutActionRevisionHandler,
  XAmzTargetCodePipeline20150709PutApprovalResultHandler,
  XAmzTargetCodePipeline20150709PutJobFailureResultHandler,
  XAmzTargetCodePipeline20150709PutJobSuccessResultHandler,
  XAmzTargetCodePipeline20150709PutThirdPartyJobFailureResultHandler,
  XAmzTargetCodePipeline20150709PutThirdPartyJobSuccessResultHandler,
  XAmzTargetCodePipeline20150709PutWebhookHandler,
  XAmzTargetCodePipeline20150709RegisterWebhookWithThirdPartyHandler,
  XAmzTargetCodePipeline20150709RetryStageExecutionHandler,
  XAmzTargetCodePipeline20150709StartPipelineExecutionHandler,
  XAmzTargetCodePipeline20150709StopPipelineExecutionHandler,
  XAmzTargetCodePipeline20150709TagResourceHandler,
  XAmzTargetCodePipeline20150709UntagResourceHandler,
  XAmzTargetCodePipeline20150709UpdateActionTypeHandler,
  XAmzTargetCodePipeline20150709UpdatePipelineHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetCodePipeline20150709AcknowledgeJobHandler)
  .route('/', XAmzTargetCodePipeline20150709AcknowledgeThirdPartyJobHandler)
  .route('/', XAmzTargetCodePipeline20150709CreateCustomActionTypeHandler)
  .route('/', XAmzTargetCodePipeline20150709CreatePipelineHandler)
  .route('/', XAmzTargetCodePipeline20150709DeleteCustomActionTypeHandler)
  .route('/', XAmzTargetCodePipeline20150709DeletePipelineHandler)
  .route('/', XAmzTargetCodePipeline20150709DeleteWebhookHandler)
  .route('/', XAmzTargetCodePipeline20150709DeregisterWebhookWithThirdPartyHandler)
  .route('/', XAmzTargetCodePipeline20150709DisableStageTransitionHandler)
  .route('/', XAmzTargetCodePipeline20150709EnableStageTransitionHandler)
  .route('/', XAmzTargetCodePipeline20150709GetActionTypeHandler)
  .route('/', XAmzTargetCodePipeline20150709GetJobDetailsHandler)
  .route('/', XAmzTargetCodePipeline20150709GetPipelineHandler)
  .route('/', XAmzTargetCodePipeline20150709GetPipelineExecutionHandler)
  .route('/', XAmzTargetCodePipeline20150709GetPipelineStateHandler)
  .route('/', XAmzTargetCodePipeline20150709GetThirdPartyJobDetailsHandler)
  .route('/', XAmzTargetCodePipeline20150709ListActionExecutionsHandler)
  .route('/', XAmzTargetCodePipeline20150709ListActionTypesHandler)
  .route('/', XAmzTargetCodePipeline20150709ListPipelineExecutionsHandler)
  .route('/', XAmzTargetCodePipeline20150709ListPipelinesHandler)
  .route('/', XAmzTargetCodePipeline20150709ListTagsForResourceHandler)
  .route('/', XAmzTargetCodePipeline20150709ListWebhooksHandler)
  .route('/', XAmzTargetCodePipeline20150709PollForJobsHandler)
  .route('/', XAmzTargetCodePipeline20150709PollForThirdPartyJobsHandler)
  .route('/', XAmzTargetCodePipeline20150709PutActionRevisionHandler)
  .route('/', XAmzTargetCodePipeline20150709PutApprovalResultHandler)
  .route('/', XAmzTargetCodePipeline20150709PutJobFailureResultHandler)
  .route('/', XAmzTargetCodePipeline20150709PutJobSuccessResultHandler)
  .route('/', XAmzTargetCodePipeline20150709PutThirdPartyJobFailureResultHandler)
  .route('/', XAmzTargetCodePipeline20150709PutThirdPartyJobSuccessResultHandler)
  .route('/', XAmzTargetCodePipeline20150709PutWebhookHandler)
  .route('/', XAmzTargetCodePipeline20150709RegisterWebhookWithThirdPartyHandler)
  .route('/', XAmzTargetCodePipeline20150709RetryStageExecutionHandler)
  .route('/', XAmzTargetCodePipeline20150709StartPipelineExecutionHandler)
  .route('/', XAmzTargetCodePipeline20150709StopPipelineExecutionHandler)
  .route('/', XAmzTargetCodePipeline20150709TagResourceHandler)
  .route('/', XAmzTargetCodePipeline20150709UntagResourceHandler)
  .route('/', XAmzTargetCodePipeline20150709UpdateActionTypeHandler)
  .route('/', XAmzTargetCodePipeline20150709UpdatePipelineHandler)

export default app
