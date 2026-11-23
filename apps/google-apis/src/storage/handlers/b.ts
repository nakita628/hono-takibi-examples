import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBBucketAclEntityRoute,
  deleteBBucketDefaultObjectAclEntityRoute,
  deleteBBucketNotificationConfigsNotificationRoute,
  deleteBBucketOObjectAclEntityRoute,
  deleteBBucketOObjectRoute,
  deleteBBucketRoute,
  getBBucketAclEntityRoute,
  getBBucketAclRoute,
  getBBucketDefaultObjectAclEntityRoute,
  getBBucketDefaultObjectAclRoute,
  getBBucketIamRoute,
  getBBucketIamTestPermissionsRoute,
  getBBucketNotificationConfigsNotificationRoute,
  getBBucketNotificationConfigsRoute,
  getBBucketOObjectAclEntityRoute,
  getBBucketOObjectAclRoute,
  getBBucketOObjectIamRoute,
  getBBucketOObjectIamTestPermissionsRoute,
  getBBucketOObjectRoute,
  getBBucketORoute,
  getBBucketRoute,
  getBRoute,
  patchBBucketAclEntityRoute,
  patchBBucketDefaultObjectAclEntityRoute,
  patchBBucketOObjectAclEntityRoute,
  patchBBucketOObjectRoute,
  patchBBucketRoute,
  postBBucketAclRoute,
  postBBucketDefaultObjectAclRoute,
  postBBucketLockRetentionPolicyRoute,
  postBBucketNotificationConfigsRoute,
  postBBucketOObjectAclRoute,
  postBBucketORoute,
  postBBucketOWatchRoute,
  postBDestinationBucketODestinationObjectComposeRoute,
  postBRoute,
  postBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObjectRoute,
  postBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObjectRoute,
  putBBucketAclEntityRoute,
  putBBucketDefaultObjectAclEntityRoute,
  putBBucketIamRoute,
  putBBucketOObjectAclEntityRoute,
  putBBucketOObjectIamRoute,
  putBBucketOObjectRoute,
  putBBucketRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bHandler = app
  .openapi(getBRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getBBucketIamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBBucketIamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketIamTestPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketLockRetentionPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketNotificationConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketNotificationConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBBucketNotificationConfigsNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketNotificationConfigsNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketORoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketORoute, (c) => {
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
  .openapi(getBBucketOObjectIamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBBucketOObjectIamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketOObjectIamTestPermissionsRoute, (c) => {
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
    (c) => {
      throw new Error('Not implemented')
    },
  )
