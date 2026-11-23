import { OpenAPIHono } from '@hono/zod-openapi'
import { postOpentelemetryProtoCollectorMetricsV1MetricsServiceExportRoute } from '../routes'

const app = new OpenAPIHono()

export const opentelemetryProtoCollectorMetricsV1MetricsServiceHandler = app.openapi(
  postOpentelemetryProtoCollectorMetricsV1MetricsServiceExportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
