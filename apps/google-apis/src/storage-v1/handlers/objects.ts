import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBBucketOObjectRoute,
  getBBucketOObjectIamRoute,
  getBBucketOObjectIamTestPermissionsRoute,
  getBBucketOObjectRoute,
  getBBucketORoute,
  patchBBucketOObjectRoute,
  postBBucketOBulkRestoreRoute,
  postBBucketOObjectRestoreRoute,
  postBBucketORoute,
  postBBucketOWatchRoute,
  postBDestinationBucketODestinationObjectComposeRoute,
  postBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObjectRoute,
  postBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObjectRoute,
  putBBucketOObjectIamRoute,
  putBBucketOObjectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const objectsHandler = app
  .openapi(getBBucketORoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketORoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketOBulkRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketOWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBBucketOObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketOObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBBucketOObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBBucketOObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketOObjectIamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBBucketOObjectIamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketOObjectIamTestPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketOObjectRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBDestinationBucketODestinationObjectComposeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObjectRoute,
    (c) => {},
  )
