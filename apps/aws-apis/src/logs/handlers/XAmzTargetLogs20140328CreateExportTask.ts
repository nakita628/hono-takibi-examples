import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328CreateExportTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLogs20140328CreateExportTaskHandler = app.openapi(
  postXAmzTargetLogs20140328CreateExportTaskRoute,
  (c) => {},
)
