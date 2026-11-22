import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBBucketDefaultObjectAclEntityRoute,
  getBBucketDefaultObjectAclEntityRoute,
  getBBucketDefaultObjectAclRoute,
  patchBBucketDefaultObjectAclEntityRoute,
  postBBucketDefaultObjectAclRoute,
  putBBucketDefaultObjectAclEntityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const defaultObjectAccessControlsHandler = app
  .openapi(getBBucketDefaultObjectAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketDefaultObjectAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBBucketDefaultObjectAclEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketDefaultObjectAclEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBBucketDefaultObjectAclEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBBucketDefaultObjectAclEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
