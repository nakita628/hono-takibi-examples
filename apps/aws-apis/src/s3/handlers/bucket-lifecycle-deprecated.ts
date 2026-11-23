import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketLifecycleDeprecatedRoute, putBucketLifecycleDeprecatedRoute } from '../routes'

const app = new OpenAPIHono()

export const bucketLifecycleDeprecatedHandler = app
  .openapi(getBucketLifecycleDeprecatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketLifecycleDeprecatedRoute, (c) => {
    throw new Error('Not implemented')
  })
