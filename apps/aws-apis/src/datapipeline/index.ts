import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetDataPipelineActivatePipelineHandler,
  XAmzTargetDataPipelineAddTagsHandler,
  XAmzTargetDataPipelineCreatePipelineHandler,
  XAmzTargetDataPipelineDeactivatePipelineHandler,
  XAmzTargetDataPipelineDeletePipelineHandler,
  XAmzTargetDataPipelineDescribeObjectsHandler,
  XAmzTargetDataPipelineDescribePipelinesHandler,
  XAmzTargetDataPipelineEvaluateExpressionHandler,
  XAmzTargetDataPipelineGetPipelineDefinitionHandler,
  XAmzTargetDataPipelineListPipelinesHandler,
  XAmzTargetDataPipelinePollForTaskHandler,
  XAmzTargetDataPipelinePutPipelineDefinitionHandler,
  XAmzTargetDataPipelineQueryObjectsHandler,
  XAmzTargetDataPipelineRemoveTagsHandler,
  XAmzTargetDataPipelineReportTaskProgressHandler,
  XAmzTargetDataPipelineReportTaskRunnerHeartbeatHandler,
  XAmzTargetDataPipelineSetStatusHandler,
  XAmzTargetDataPipelineSetTaskStatusHandler,
  XAmzTargetDataPipelineValidatePipelineDefinitionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetDataPipelineActivatePipelineHandler)
  .route('/', XAmzTargetDataPipelineAddTagsHandler)
  .route('/', XAmzTargetDataPipelineCreatePipelineHandler)
  .route('/', XAmzTargetDataPipelineDeactivatePipelineHandler)
  .route('/', XAmzTargetDataPipelineDeletePipelineHandler)
  .route('/', XAmzTargetDataPipelineDescribeObjectsHandler)
  .route('/', XAmzTargetDataPipelineDescribePipelinesHandler)
  .route('/', XAmzTargetDataPipelineEvaluateExpressionHandler)
  .route('/', XAmzTargetDataPipelineGetPipelineDefinitionHandler)
  .route('/', XAmzTargetDataPipelineListPipelinesHandler)
  .route('/', XAmzTargetDataPipelinePollForTaskHandler)
  .route('/', XAmzTargetDataPipelinePutPipelineDefinitionHandler)
  .route('/', XAmzTargetDataPipelineQueryObjectsHandler)
  .route('/', XAmzTargetDataPipelineRemoveTagsHandler)
  .route('/', XAmzTargetDataPipelineReportTaskProgressHandler)
  .route('/', XAmzTargetDataPipelineReportTaskRunnerHeartbeatHandler)
  .route('/', XAmzTargetDataPipelineSetStatusHandler)
  .route('/', XAmzTargetDataPipelineSetTaskStatusHandler)
  .route('/', XAmzTargetDataPipelineValidatePipelineDefinitionHandler)

export default app
