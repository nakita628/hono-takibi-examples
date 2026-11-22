import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketObjectLockRoute, putBucketObjectLockRoute } from '../routes'

const app = new OpenAPIHono()

export const BucketObjectLockHandler = app
  .openapi(getBucketObjectLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketObjectLockRoute, (c) => {
    throw new Error('Not implemented')
  })
