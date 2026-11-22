import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceGetTelemetryMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceGetTelemetryMetadataHandler = app.openapi(
  postXAmzTargetInspectorServiceGetTelemetryMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
