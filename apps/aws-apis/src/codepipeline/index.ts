import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetCodePipeline20150709AcknowledgeJobHandler,
  xAmzTargetCodePipeline20150709AcknowledgeThirdPartyJobHandler,
  xAmzTargetCodePipeline20150709CreateCustomActionTypeHandler,
  xAmzTargetCodePipeline20150709CreatePipelineHandler,
  xAmzTargetCodePipeline20150709DeleteCustomActionTypeHandler,
  xAmzTargetCodePipeline20150709DeletePipelineHandler,
  xAmzTargetCodePipeline20150709DeleteWebhookHandler,
  xAmzTargetCodePipeline20150709DeregisterWebhookWithThirdPartyHandler,
  xAmzTargetCodePipeline20150709DisableStageTransitionHandler,
  xAmzTargetCodePipeline20150709EnableStageTransitionHandler,
  xAmzTargetCodePipeline20150709GetActionTypeHandler,
  xAmzTargetCodePipeline20150709GetJobDetailsHandler,
  xAmzTargetCodePipeline20150709GetPipelineExecutionHandler,
  xAmzTargetCodePipeline20150709GetPipelineHandler,
  xAmzTargetCodePipeline20150709GetPipelineStateHandler,
  xAmzTargetCodePipeline20150709GetThirdPartyJobDetailsHandler,
  xAmzTargetCodePipeline20150709ListActionExecutionsHandler,
  xAmzTargetCodePipeline20150709ListActionTypesHandler,
  xAmzTargetCodePipeline20150709ListPipelineExecutionsHandler,
  xAmzTargetCodePipeline20150709ListPipelinesHandler,
  xAmzTargetCodePipeline20150709ListTagsForResourceHandler,
  xAmzTargetCodePipeline20150709ListWebhooksHandler,
  xAmzTargetCodePipeline20150709PollForJobsHandler,
  xAmzTargetCodePipeline20150709PollForThirdPartyJobsHandler,
  xAmzTargetCodePipeline20150709PutActionRevisionHandler,
  xAmzTargetCodePipeline20150709PutApprovalResultHandler,
  xAmzTargetCodePipeline20150709PutJobFailureResultHandler,
  xAmzTargetCodePipeline20150709PutJobSuccessResultHandler,
  xAmzTargetCodePipeline20150709PutThirdPartyJobFailureResultHandler,
  xAmzTargetCodePipeline20150709PutThirdPartyJobSuccessResultHandler,
  xAmzTargetCodePipeline20150709PutWebhookHandler,
  xAmzTargetCodePipeline20150709RegisterWebhookWithThirdPartyHandler,
  xAmzTargetCodePipeline20150709RetryStageExecutionHandler,
  xAmzTargetCodePipeline20150709StartPipelineExecutionHandler,
  xAmzTargetCodePipeline20150709StopPipelineExecutionHandler,
  xAmzTargetCodePipeline20150709TagResourceHandler,
  xAmzTargetCodePipeline20150709UntagResourceHandler,
  xAmzTargetCodePipeline20150709UpdateActionTypeHandler,
  xAmzTargetCodePipeline20150709UpdatePipelineHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetCodePipeline20150709AcknowledgeJobHandler)
  .route('/', xAmzTargetCodePipeline20150709AcknowledgeThirdPartyJobHandler)
  .route('/', xAmzTargetCodePipeline20150709CreateCustomActionTypeHandler)
  .route('/', xAmzTargetCodePipeline20150709CreatePipelineHandler)
  .route('/', xAmzTargetCodePipeline20150709DeleteCustomActionTypeHandler)
  .route('/', xAmzTargetCodePipeline20150709DeletePipelineHandler)
  .route('/', xAmzTargetCodePipeline20150709DeleteWebhookHandler)
  .route('/', xAmzTargetCodePipeline20150709DeregisterWebhookWithThirdPartyHandler)
  .route('/', xAmzTargetCodePipeline20150709DisableStageTransitionHandler)
  .route('/', xAmzTargetCodePipeline20150709EnableStageTransitionHandler)
  .route('/', xAmzTargetCodePipeline20150709GetActionTypeHandler)
  .route('/', xAmzTargetCodePipeline20150709GetJobDetailsHandler)
  .route('/', xAmzTargetCodePipeline20150709GetPipelineHandler)
  .route('/', xAmzTargetCodePipeline20150709GetPipelineExecutionHandler)
  .route('/', xAmzTargetCodePipeline20150709GetPipelineStateHandler)
  .route('/', xAmzTargetCodePipeline20150709GetThirdPartyJobDetailsHandler)
  .route('/', xAmzTargetCodePipeline20150709ListActionExecutionsHandler)
  .route('/', xAmzTargetCodePipeline20150709ListActionTypesHandler)
  .route('/', xAmzTargetCodePipeline20150709ListPipelineExecutionsHandler)
  .route('/', xAmzTargetCodePipeline20150709ListPipelinesHandler)
  .route('/', xAmzTargetCodePipeline20150709ListTagsForResourceHandler)
  .route('/', xAmzTargetCodePipeline20150709ListWebhooksHandler)
  .route('/', xAmzTargetCodePipeline20150709PollForJobsHandler)
  .route('/', xAmzTargetCodePipeline20150709PollForThirdPartyJobsHandler)
  .route('/', xAmzTargetCodePipeline20150709PutActionRevisionHandler)
  .route('/', xAmzTargetCodePipeline20150709PutApprovalResultHandler)
  .route('/', xAmzTargetCodePipeline20150709PutJobFailureResultHandler)
  .route('/', xAmzTargetCodePipeline20150709PutJobSuccessResultHandler)
  .route('/', xAmzTargetCodePipeline20150709PutThirdPartyJobFailureResultHandler)
  .route('/', xAmzTargetCodePipeline20150709PutThirdPartyJobSuccessResultHandler)
  .route('/', xAmzTargetCodePipeline20150709PutWebhookHandler)
  .route('/', xAmzTargetCodePipeline20150709RegisterWebhookWithThirdPartyHandler)
  .route('/', xAmzTargetCodePipeline20150709RetryStageExecutionHandler)
  .route('/', xAmzTargetCodePipeline20150709StartPipelineExecutionHandler)
  .route('/', xAmzTargetCodePipeline20150709StopPipelineExecutionHandler)
  .route('/', xAmzTargetCodePipeline20150709TagResourceHandler)
  .route('/', xAmzTargetCodePipeline20150709UntagResourceHandler)
  .route('/', xAmzTargetCodePipeline20150709UpdateActionTypeHandler)
  .route('/', xAmzTargetCodePipeline20150709UpdatePipelineHandler)

export default app
