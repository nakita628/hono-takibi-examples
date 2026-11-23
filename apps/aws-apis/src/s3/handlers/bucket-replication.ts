import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBucketReplicationRoute,
  getBucketReplicationRoute,
  putBucketReplicationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bucketReplicationHandler = app
  .openapi(deleteBucketReplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketReplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketReplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
