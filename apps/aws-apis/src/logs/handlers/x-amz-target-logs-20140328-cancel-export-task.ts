import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328CancelExportTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328CancelExportTaskHandler = app.openapi(
  postXAmzTargetLogs20140328CancelExportTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
