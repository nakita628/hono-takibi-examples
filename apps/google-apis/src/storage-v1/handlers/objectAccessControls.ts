import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBBucketOObjectAclEntityRoute,
  getBBucketOObjectAclEntityRoute,
  getBBucketOObjectAclRoute,
  patchBBucketOObjectAclEntityRoute,
  postBBucketOObjectAclRoute,
  putBBucketOObjectAclEntityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const objectAccessControlsHandler = app
  .openapi(getBBucketOObjectAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketOObjectAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBBucketOObjectAclEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketOObjectAclEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBBucketOObjectAclEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBBucketOObjectAclEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
