import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBucketInventoryIdRoute,
  getBucketInventoryIdRoute,
  putBucketInventoryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const BucketInventoryIdHandler = app
  .openapi(deleteBucketInventoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketInventoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketInventoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
