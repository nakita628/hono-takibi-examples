import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConfigV1AgentsRoute,
  getConfigV1RumAgentsRoute,
  getRoute,
  postConfigV1AgentsRoute,
  postIntakeV2EventsRoute,
  postIntakeV2RumEventsRoute,
  postIntakeV3RumEventsRoute,
  postOpentelemetryProtoCollectorLogsV1LogsServiceExportRoute,
  postOpentelemetryProtoCollectorMetricsV1MetricsServiceExportRoute,
  postOpentelemetryProtoCollectorTraceV1TraceServiceExportRoute,
  postRoute,
  postV1LogsRoute,
  postV1MetricsRoute,
  postV1TracesRoute,
} from './routes'
import {
  getConfigV1AgentsRouteHandler,
  getConfigV1RumAgentsRouteHandler,
  getRouteHandler,
  postConfigV1AgentsRouteHandler,
  postIntakeV2EventsRouteHandler,
  postIntakeV2RumEventsRouteHandler,
  postIntakeV3RumEventsRouteHandler,
  postOpentelemetryProtoCollectorLogsV1LogsServiceExportRouteHandler,
  postOpentelemetryProtoCollectorMetricsV1MetricsServiceExportRouteHandler,
  postOpentelemetryProtoCollectorTraceV1TraceServiceExportRouteHandler,
  postRouteHandler,
  postV1LogsRouteHandler,
  postV1MetricsRouteHandler,
  postV1TracesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(postRoute, postRouteHandler)
  .openapi(getConfigV1AgentsRoute, getConfigV1AgentsRouteHandler)
  .openapi(postConfigV1AgentsRoute, postConfigV1AgentsRouteHandler)
  .openapi(getConfigV1RumAgentsRoute, getConfigV1RumAgentsRouteHandler)
  .openapi(postIntakeV2EventsRoute, postIntakeV2EventsRouteHandler)
  .openapi(postIntakeV2RumEventsRoute, postIntakeV2RumEventsRouteHandler)
  .openapi(postIntakeV3RumEventsRoute, postIntakeV3RumEventsRouteHandler)
  .openapi(
    postOpentelemetryProtoCollectorMetricsV1MetricsServiceExportRoute,
    postOpentelemetryProtoCollectorMetricsV1MetricsServiceExportRouteHandler,
  )
  .openapi(
    postOpentelemetryProtoCollectorTraceV1TraceServiceExportRoute,
    postOpentelemetryProtoCollectorTraceV1TraceServiceExportRouteHandler,
  )
  .openapi(
    postOpentelemetryProtoCollectorLogsV1LogsServiceExportRoute,
    postOpentelemetryProtoCollectorLogsV1LogsServiceExportRouteHandler,
  )
  .openapi(postV1MetricsRoute, postV1MetricsRouteHandler)
  .openapi(postV1TracesRoute, postV1TracesRouteHandler)
  .openapi(postV1LogsRoute, postV1LogsRouteHandler)

export default app
