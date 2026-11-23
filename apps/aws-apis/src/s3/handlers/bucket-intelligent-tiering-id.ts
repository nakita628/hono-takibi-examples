import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBucketIntelligentTieringIdRoute,
  getBucketIntelligentTieringIdRoute,
  putBucketIntelligentTieringIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bucketIntelligentTieringIdHandler = app
  .openapi(deleteBucketIntelligentTieringIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketIntelligentTieringIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketIntelligentTieringIdRoute, (c) => {
    throw new Error('Not implemented')
  })
