import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetDataPipelineActivatePipelineHandler,
  xAmzTargetDataPipelineAddTagsHandler,
  xAmzTargetDataPipelineCreatePipelineHandler,
  xAmzTargetDataPipelineDeactivatePipelineHandler,
  xAmzTargetDataPipelineDeletePipelineHandler,
  xAmzTargetDataPipelineDescribeObjectsHandler,
  xAmzTargetDataPipelineDescribePipelinesHandler,
  xAmzTargetDataPipelineEvaluateExpressionHandler,
  xAmzTargetDataPipelineGetPipelineDefinitionHandler,
  xAmzTargetDataPipelineListPipelinesHandler,
  xAmzTargetDataPipelinePollForTaskHandler,
  xAmzTargetDataPipelinePutPipelineDefinitionHandler,
  xAmzTargetDataPipelineQueryObjectsHandler,
  xAmzTargetDataPipelineRemoveTagsHandler,
  xAmzTargetDataPipelineReportTaskProgressHandler,
  xAmzTargetDataPipelineReportTaskRunnerHeartbeatHandler,
  xAmzTargetDataPipelineSetStatusHandler,
  xAmzTargetDataPipelineSetTaskStatusHandler,
  xAmzTargetDataPipelineValidatePipelineDefinitionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetDataPipelineActivatePipelineHandler)
  .route('/', xAmzTargetDataPipelineAddTagsHandler)
  .route('/', xAmzTargetDataPipelineCreatePipelineHandler)
  .route('/', xAmzTargetDataPipelineDeactivatePipelineHandler)
  .route('/', xAmzTargetDataPipelineDeletePipelineHandler)
  .route('/', xAmzTargetDataPipelineDescribeObjectsHandler)
  .route('/', xAmzTargetDataPipelineDescribePipelinesHandler)
  .route('/', xAmzTargetDataPipelineEvaluateExpressionHandler)
  .route('/', xAmzTargetDataPipelineGetPipelineDefinitionHandler)
  .route('/', xAmzTargetDataPipelineListPipelinesHandler)
  .route('/', xAmzTargetDataPipelinePollForTaskHandler)
  .route('/', xAmzTargetDataPipelinePutPipelineDefinitionHandler)
  .route('/', xAmzTargetDataPipelineQueryObjectsHandler)
  .route('/', xAmzTargetDataPipelineRemoveTagsHandler)
  .route('/', xAmzTargetDataPipelineReportTaskProgressHandler)
  .route('/', xAmzTargetDataPipelineReportTaskRunnerHeartbeatHandler)
  .route('/', xAmzTargetDataPipelineSetStatusHandler)
  .route('/', xAmzTargetDataPipelineSetTaskStatusHandler)
  .route('/', xAmzTargetDataPipelineValidatePipelineDefinitionHandler)

export default app
