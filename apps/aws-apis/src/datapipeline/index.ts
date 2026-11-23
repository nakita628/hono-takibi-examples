import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetDataPipelineActivatePipelineRoute,
  postXAmzTargetDataPipelineAddTagsRoute,
  postXAmzTargetDataPipelineCreatePipelineRoute,
  postXAmzTargetDataPipelineDeactivatePipelineRoute,
  postXAmzTargetDataPipelineDeletePipelineRoute,
  postXAmzTargetDataPipelineDescribeObjectsRoute,
  postXAmzTargetDataPipelineDescribePipelinesRoute,
  postXAmzTargetDataPipelineEvaluateExpressionRoute,
  postXAmzTargetDataPipelineGetPipelineDefinitionRoute,
  postXAmzTargetDataPipelineListPipelinesRoute,
  postXAmzTargetDataPipelinePollForTaskRoute,
  postXAmzTargetDataPipelinePutPipelineDefinitionRoute,
  postXAmzTargetDataPipelineQueryObjectsRoute,
  postXAmzTargetDataPipelineRemoveTagsRoute,
  postXAmzTargetDataPipelineReportTaskProgressRoute,
  postXAmzTargetDataPipelineReportTaskRunnerHeartbeatRoute,
  postXAmzTargetDataPipelineSetStatusRoute,
  postXAmzTargetDataPipelineSetTaskStatusRoute,
  postXAmzTargetDataPipelineValidatePipelineDefinitionRoute,
} from './routes'
import {
  postXAmzTargetDataPipelineActivatePipelineRouteHandler,
  postXAmzTargetDataPipelineAddTagsRouteHandler,
  postXAmzTargetDataPipelineCreatePipelineRouteHandler,
  postXAmzTargetDataPipelineDeactivatePipelineRouteHandler,
  postXAmzTargetDataPipelineDeletePipelineRouteHandler,
  postXAmzTargetDataPipelineDescribeObjectsRouteHandler,
  postXAmzTargetDataPipelineDescribePipelinesRouteHandler,
  postXAmzTargetDataPipelineEvaluateExpressionRouteHandler,
  postXAmzTargetDataPipelineGetPipelineDefinitionRouteHandler,
  postXAmzTargetDataPipelineListPipelinesRouteHandler,
  postXAmzTargetDataPipelinePollForTaskRouteHandler,
  postXAmzTargetDataPipelinePutPipelineDefinitionRouteHandler,
  postXAmzTargetDataPipelineQueryObjectsRouteHandler,
  postXAmzTargetDataPipelineRemoveTagsRouteHandler,
  postXAmzTargetDataPipelineReportTaskProgressRouteHandler,
  postXAmzTargetDataPipelineReportTaskRunnerHeartbeatRouteHandler,
  postXAmzTargetDataPipelineSetStatusRouteHandler,
  postXAmzTargetDataPipelineSetTaskStatusRouteHandler,
  postXAmzTargetDataPipelineValidatePipelineDefinitionRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetDataPipelineActivatePipelineRoute,
    postXAmzTargetDataPipelineActivatePipelineRouteHandler,
  )
  .openapi(postXAmzTargetDataPipelineAddTagsRoute, postXAmzTargetDataPipelineAddTagsRouteHandler)
  .openapi(
    postXAmzTargetDataPipelineCreatePipelineRoute,
    postXAmzTargetDataPipelineCreatePipelineRouteHandler,
  )
  .openapi(
    postXAmzTargetDataPipelineDeactivatePipelineRoute,
    postXAmzTargetDataPipelineDeactivatePipelineRouteHandler,
  )
  .openapi(
    postXAmzTargetDataPipelineDeletePipelineRoute,
    postXAmzTargetDataPipelineDeletePipelineRouteHandler,
  )
  .openapi(
    postXAmzTargetDataPipelineDescribeObjectsRoute,
    postXAmzTargetDataPipelineDescribeObjectsRouteHandler,
  )
  .openapi(
    postXAmzTargetDataPipelineDescribePipelinesRoute,
    postXAmzTargetDataPipelineDescribePipelinesRouteHandler,
  )
  .openapi(
    postXAmzTargetDataPipelineEvaluateExpressionRoute,
    postXAmzTargetDataPipelineEvaluateExpressionRouteHandler,
  )
  .openapi(
    postXAmzTargetDataPipelineGetPipelineDefinitionRoute,
    postXAmzTargetDataPipelineGetPipelineDefinitionRouteHandler,
  )
  .openapi(
    postXAmzTargetDataPipelineListPipelinesRoute,
    postXAmzTargetDataPipelineListPipelinesRouteHandler,
  )
  .openapi(
    postXAmzTargetDataPipelinePollForTaskRoute,
    postXAmzTargetDataPipelinePollForTaskRouteHandler,
  )
  .openapi(
    postXAmzTargetDataPipelinePutPipelineDefinitionRoute,
    postXAmzTargetDataPipelinePutPipelineDefinitionRouteHandler,
  )
  .openapi(
    postXAmzTargetDataPipelineQueryObjectsRoute,
    postXAmzTargetDataPipelineQueryObjectsRouteHandler,
  )
  .openapi(
    postXAmzTargetDataPipelineRemoveTagsRoute,
    postXAmzTargetDataPipelineRemoveTagsRouteHandler,
  )
  .openapi(
    postXAmzTargetDataPipelineReportTaskProgressRoute,
    postXAmzTargetDataPipelineReportTaskProgressRouteHandler,
  )
  .openapi(
    postXAmzTargetDataPipelineReportTaskRunnerHeartbeatRoute,
    postXAmzTargetDataPipelineReportTaskRunnerHeartbeatRouteHandler,
  )
  .openapi(
    postXAmzTargetDataPipelineSetStatusRoute,
    postXAmzTargetDataPipelineSetStatusRouteHandler,
  )
  .openapi(
    postXAmzTargetDataPipelineSetTaskStatusRoute,
    postXAmzTargetDataPipelineSetTaskStatusRouteHandler,
  )
  .openapi(
    postXAmzTargetDataPipelineValidatePipelineDefinitionRoute,
    postXAmzTargetDataPipelineValidatePipelineDefinitionRouteHandler,
  )

export default app
