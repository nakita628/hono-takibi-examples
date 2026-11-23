import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBucketEncryptionRoute,
  getBucketEncryptionRoute,
  putBucketEncryptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bucketEncryptionHandler = app
  .openapi(deleteBucketEncryptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketEncryptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketEncryptionRoute, (c) => {
    throw new Error('Not implemented')
  })
