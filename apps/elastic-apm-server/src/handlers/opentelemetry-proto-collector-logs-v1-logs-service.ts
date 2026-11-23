import { OpenAPIHono } from '@hono/zod-openapi'
import { postOpentelemetryProtoCollectorLogsV1LogsServiceExportRoute } from '../routes'

const app = new OpenAPIHono()

export const opentelemetryProtoCollectorLogsV1LogsServiceHandler = app.openapi(
  postOpentelemetryProtoCollectorLogsV1LogsServiceExportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
