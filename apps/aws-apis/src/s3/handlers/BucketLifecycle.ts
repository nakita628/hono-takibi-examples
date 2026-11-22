import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBucketLifecycleRoute,
  getBucketLifecycleRoute,
  putBucketLifecycleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const BucketLifecycleHandler = app
  .openapi(deleteBucketLifecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketLifecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketLifecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
