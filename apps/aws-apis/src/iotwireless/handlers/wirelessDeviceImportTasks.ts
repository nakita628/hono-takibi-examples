import { OpenAPIHono } from '@hono/zod-openapi'
import { getWirelessDeviceImportTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const wirelessDeviceImportTasksHandler = app.openapi(
  getWirelessDeviceImportTasksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
