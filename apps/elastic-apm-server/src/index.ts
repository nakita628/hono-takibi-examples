import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  configHandler,
  intakeHandler,
  opentelemetryProtoCollectorLogsV1LogsServiceHandler,
  opentelemetryProtoCollectorMetricsV1MetricsServiceHandler,
  opentelemetryProtoCollectorTraceV1TraceServiceHandler,
  v1Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', configHandler)
  .route('/', intakeHandler)
  .route('/', opentelemetryProtoCollectorMetricsV1MetricsServiceHandler)
  .route('/', opentelemetryProtoCollectorTraceV1TraceServiceHandler)
  .route('/', opentelemetryProtoCollectorLogsV1LogsServiceHandler)
  .route('/', v1Handler)

export default app
