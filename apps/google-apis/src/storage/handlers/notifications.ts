import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBBucketNotificationConfigsNotificationRoute,
  getBBucketNotificationConfigsNotificationRoute,
  getBBucketNotificationConfigsRoute,
  postBBucketNotificationConfigsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getBBucketNotificationConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketNotificationConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBBucketNotificationConfigsNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketNotificationConfigsNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
