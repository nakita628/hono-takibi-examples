import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAdminTelemetrySettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const telemetryHandler = app.openapi(getApiAdminTelemetrySettingsRoute, (c) => {
  throw new Error('Not implemented')
})
