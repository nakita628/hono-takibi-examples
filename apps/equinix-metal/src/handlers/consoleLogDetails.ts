import { OpenAPIHono } from '@hono/zod-openapi'
import { getDevicesIdDiagnosticsScreenshotRoute } from '../routes'

const app = new OpenAPIHono()

export const consoleLogDetailsHandler = app.openapi(getDevicesIdDiagnosticsScreenshotRoute, (c) => {
  throw new Error('Not implemented')
})
