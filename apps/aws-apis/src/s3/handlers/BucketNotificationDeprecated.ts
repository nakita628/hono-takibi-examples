import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBucketNotificationDeprecatedRoute,
  putBucketNotificationDeprecatedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const BucketNotificationDeprecatedHandler = app
  .openapi(getBucketNotificationDeprecatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketNotificationDeprecatedRoute, (c) => {
    throw new Error('Not implemented')
  })
