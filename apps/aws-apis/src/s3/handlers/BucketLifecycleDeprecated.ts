import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketLifecycleDeprecatedRoute, putBucketLifecycleDeprecatedRoute } from '../routes'

const app = new OpenAPIHono()

export const BucketLifecycleDeprecatedHandler = app
  .openapi(getBucketLifecycleDeprecatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketLifecycleDeprecatedRoute, (c) => {
    throw new Error('Not implemented')
  })
