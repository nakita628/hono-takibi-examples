import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDNotificationFilterPushRoute,
  postUserUserIDNotificationFilterPushRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationFilterPushHandler = app
  .openapi(postUserUserIDNotificationFilterPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDNotificationFilterPushRoute, (c) => {
    throw new Error('Not implemented')
  })
