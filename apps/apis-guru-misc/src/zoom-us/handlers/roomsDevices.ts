import { OpenAPIHono } from '@hono/zod-openapi'
import { putRoomsRoomIdDevicesDeviceIdAppVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const roomsDevicesHandler = app.openapi(
  putRoomsRoomIdDevicesDeviceIdAppVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
