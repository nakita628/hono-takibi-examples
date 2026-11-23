import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineReportTaskRunnerHeartbeatRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDataPipelineReportTaskRunnerHeartbeatHandler = app.openapi(
  postXAmzTargetDataPipelineReportTaskRunnerHeartbeatRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
