import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DescribeExportTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328DescribeExportTasksHandler = app.openapi(
  postXAmzTargetLogs20140328DescribeExportTasksRoute,
  (c) => {},
)
