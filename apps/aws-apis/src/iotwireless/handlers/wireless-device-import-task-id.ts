import { OpenAPIHono } from '@hono/zod-openapi'
import { getWirelessDeviceImportTaskId2Route } from '../routes'

const app = new OpenAPIHono()

export const wirelessDeviceImportTaskIdHandler = app.openapi(
  getWirelessDeviceImportTaskId2Route,
  (c) => {
    throw new Error('Not implemented')
  },
)
