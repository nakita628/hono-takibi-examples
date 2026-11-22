import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBBucketAclEntityRoute,
  getBBucketAclEntityRoute,
  getBBucketAclRoute,
  patchBBucketAclEntityRoute,
  postBBucketAclRoute,
  putBBucketAclEntityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bucketAccessControlsHandler = app
  .openapi(getBBucketAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBBucketAclEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketAclEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBBucketAclEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBBucketAclEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
