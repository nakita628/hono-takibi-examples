import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNotificationChannelsIdRoute,
  getNotificationChannelsIdRoute,
  getNotificationChannelsRoute,
  patchNotificationChannelsIdRoute,
  postNotificationChannelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationChannelsHandler = app
  .openapi(getNotificationChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNotificationChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
