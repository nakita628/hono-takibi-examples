import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineReportTaskProgressRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDataPipelineReportTaskProgressHandler = app.openapi(
  postXAmzTargetDataPipelineReportTaskProgressRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
