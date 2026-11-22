import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteBucketPolicyRoute, getBucketPolicyRoute, putBucketPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const BucketPolicyHandler = app
  .openapi(deleteBucketPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
