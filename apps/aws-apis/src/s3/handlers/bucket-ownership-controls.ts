import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBucketOwnershipControlsRoute,
  getBucketOwnershipControlsRoute,
  putBucketOwnershipControlsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bucketOwnershipControlsHandler = app
  .openapi(deleteBucketOwnershipControlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBucketOwnershipControlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBucketOwnershipControlsRoute, (c) => {
    throw new Error('Not implemented')
  })
