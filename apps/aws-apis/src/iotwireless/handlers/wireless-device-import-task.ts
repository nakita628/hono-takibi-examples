import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWirelessDeviceImportTaskIdRoute,
  getWirelessDeviceImportTaskIdRoute,
  patchWirelessDeviceImportTaskIdRoute,
  postWirelessDeviceImportTaskRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wirelessDeviceImportTaskHandler = app
  .openapi(deleteWirelessDeviceImportTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessDeviceImportTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWirelessDeviceImportTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWirelessDeviceImportTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
