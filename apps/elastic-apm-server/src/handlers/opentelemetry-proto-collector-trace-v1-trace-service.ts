import { OpenAPIHono } from '@hono/zod-openapi'
import { postOpentelemetryProtoCollectorTraceV1TraceServiceExportRoute } from '../routes'

const app = new OpenAPIHono()

export const opentelemetryProtoCollectorTraceV1TraceServiceHandler = app.openapi(
  postOpentelemetryProtoCollectorTraceV1TraceServiceExportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
