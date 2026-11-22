import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOpentelemetryProtoCollectorLogsV1LogsServiceExportRoute,
  postOpentelemetryProtoCollectorMetricsV1MetricsServiceExportRoute,
  postOpentelemetryProtoCollectorTraceV1TraceServiceExportRoute,
  postV1LogsRoute,
  postV1MetricsRoute,
  postV1TracesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const opentelemetryIntakeHandler = app
  .openapi(postOpentelemetryProtoCollectorMetricsV1MetricsServiceExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpentelemetryProtoCollectorTraceV1TraceServiceExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOpentelemetryProtoCollectorLogsV1LogsServiceExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LogsRoute, (c) => {
    throw new Error('Not implemented')
  })
