import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV2PushNotificationDevicesDestroyManyRoute } from '../routes'

const app = new OpenAPIHono()

export const pushNotificationDevicesHandler = app.openapi(
  postApiV2PushNotificationDevicesDestroyManyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
