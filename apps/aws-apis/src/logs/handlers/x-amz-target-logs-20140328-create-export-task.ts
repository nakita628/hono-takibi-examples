import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328CreateExportTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328CreateExportTaskHandler = app.openapi(
  postXAmzTargetLogs20140328CreateExportTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
