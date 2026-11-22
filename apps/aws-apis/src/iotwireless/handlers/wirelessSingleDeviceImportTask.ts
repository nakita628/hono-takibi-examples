import { OpenAPIHono } from '@hono/zod-openapi'
import { postWirelessSingleDeviceImportTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const wirelessSingleDeviceImportTaskHandler = app.openapi(
  postWirelessSingleDeviceImportTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
