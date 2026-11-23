import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBBucketAclEntityRoute,
  deleteBBucketDefaultObjectAclEntityRoute,
  deleteBBucketFoldersFolderRoute,
  deleteBBucketManagedFoldersManagedFolderRoute,
  deleteBBucketNotificationConfigsNotificationRoute,
  deleteBBucketOObjectAclEntityRoute,
  deleteBBucketOObjectRoute,
  deleteBBucketRoute,
  getBBucketAclEntityRoute,
  getBBucketAclRoute,
  getBBucketAnywhereCachesAnywhereCacheIdRoute,
  getBBucketAnywhereCachesRoute,
  getBBucketDefaultObjectAclEntityRoute,
  getBBucketDefaultObjectAclRoute,
  getBBucketFoldersFolderRoute,
  getBBucketFoldersRoute,
  getBBucketIamRoute,
  getBBucketIamTestPermissionsRoute,
  getBBucketManagedFoldersManagedFolderIamRoute,
  getBBucketManagedFoldersManagedFolderIamTestPermissionsRoute,
  getBBucketManagedFoldersManagedFolderRoute,
  getBBucketManagedFoldersRoute,
  getBBucketNotificationConfigsNotificationRoute,
  getBBucketNotificationConfigsRoute,
  getBBucketOObjectAclEntityRoute,
  getBBucketOObjectAclRoute,
  getBBucketOObjectIamRoute,
  getBBucketOObjectIamTestPermissionsRoute,
  getBBucketOObjectRoute,
  getBBucketOperationsOperationIdRoute,
  getBBucketOperationsRoute,
  getBBucketORoute,
  getBBucketRoute,
  getBRoute,
  patchBBucketAclEntityRoute,
  patchBBucketAnywhereCachesAnywhereCacheIdRoute,
  patchBBucketDefaultObjectAclEntityRoute,
  patchBBucketOObjectAclEntityRoute,
  patchBBucketOObjectRoute,
  patchBBucketRoute,
  postBBucketAclRoute,
  postBBucketAnywhereCachesAnywhereCacheIdDisableRoute,
  postBBucketAnywhereCachesAnywhereCacheIdPauseRoute,
  postBBucketAnywhereCachesAnywhereCacheIdResumeRoute,
  postBBucketAnywhereCachesRoute,
  postBBucketDefaultObjectAclRoute,
  postBBucketFoldersRoute,
  postBBucketFoldersSourceFolderRenameToFoldersDestinationFolderRoute,
  postBBucketLockRetentionPolicyRoute,
  postBBucketManagedFoldersRoute,
  postBBucketNotificationConfigsRoute,
  postBBucketOBulkRestoreRoute,
  postBBucketOObjectAclRoute,
  postBBucketOObjectRestoreRoute,
  postBBucketOperationsOperationIdCancelRoute,
  postBBucketORoute,
  postBBucketOWatchRoute,
  postBDestinationBucketODestinationObjectComposeRoute,
  postBRoute,
  postBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObjectRoute,
  postBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObjectRoute,
  putBBucketAclEntityRoute,
  putBBucketDefaultObjectAclEntityRoute,
  putBBucketIamRoute,
  putBBucketManagedFoldersManagedFolderIamRoute,
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
  .openapi(getBBucketAnywhereCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketAnywhereCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketAnywhereCachesAnywhereCacheIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBBucketAnywhereCachesAnywhereCacheIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketAnywhereCachesAnywhereCacheIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketAnywhereCachesAnywhereCacheIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketAnywhereCachesAnywhereCacheIdResumeRoute, (c) => {
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
  .openapi(getBBucketFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBBucketFoldersFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketFoldersFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketFoldersSourceFolderRenameToFoldersDestinationFolderRoute, (c) => {
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
  .openapi(getBBucketManagedFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketManagedFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBBucketManagedFoldersManagedFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketManagedFoldersManagedFolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketManagedFoldersManagedFolderIamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBBucketManagedFoldersManagedFolderIamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketManagedFoldersManagedFolderIamTestPermissionsRoute, (c) => {
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
  .openapi(postBBucketOObjectRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketOperationsOperationIdCancelRoute, (c) => {
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
