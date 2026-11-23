import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketNotificationRoute, putBucketNotificationRoute } from '../routes'

const app = new OpenAPIHono()

export const bucketNotificationHandler = app
  .openapi(getBucketNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
