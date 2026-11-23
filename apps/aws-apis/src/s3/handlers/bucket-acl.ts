import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketAclRoute, putBucketAclRoute } from '../routes'

const app = new OpenAPIHono()

export const bucketAclHandler = app
  .openapi(getBucketAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketAclRoute, (c) => {
    throw new Error('Not implemented')
  })
