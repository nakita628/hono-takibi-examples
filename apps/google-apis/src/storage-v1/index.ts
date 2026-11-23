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
  deleteProjectsProjectIdHmacKeysAccessIdRoute,
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
  getProjectsProjectIdHmacKeysAccessIdRoute,
  getProjectsProjectIdHmacKeysRoute,
  getProjectsProjectIdServiceAccountRoute,
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
  postChannelsStopRoute,
  postProjectsProjectIdHmacKeysRoute,
  putBBucketAclEntityRoute,
  putBBucketDefaultObjectAclEntityRoute,
  putBBucketIamRoute,
  putBBucketManagedFoldersManagedFolderIamRoute,
  putBBucketOObjectAclEntityRoute,
  putBBucketOObjectIamRoute,
  putBBucketOObjectRoute,
  putBBucketRoute,
  putProjectsProjectIdHmacKeysAccessIdRoute,
} from './routes'
import {
  deleteBBucketAclEntityRouteHandler,
  deleteBBucketDefaultObjectAclEntityRouteHandler,
  deleteBBucketFoldersFolderRouteHandler,
  deleteBBucketManagedFoldersManagedFolderRouteHandler,
  deleteBBucketNotificationConfigsNotificationRouteHandler,
  deleteBBucketOObjectAclEntityRouteHandler,
  deleteBBucketOObjectRouteHandler,
  deleteBBucketRouteHandler,
  deleteProjectsProjectIdHmacKeysAccessIdRouteHandler,
  getBBucketAclEntityRouteHandler,
  getBBucketAclRouteHandler,
  getBBucketAnywhereCachesAnywhereCacheIdRouteHandler,
  getBBucketAnywhereCachesRouteHandler,
  getBBucketDefaultObjectAclEntityRouteHandler,
  getBBucketDefaultObjectAclRouteHandler,
  getBBucketFoldersFolderRouteHandler,
  getBBucketFoldersRouteHandler,
  getBBucketIamRouteHandler,
  getBBucketIamTestPermissionsRouteHandler,
  getBBucketManagedFoldersManagedFolderIamRouteHandler,
  getBBucketManagedFoldersManagedFolderIamTestPermissionsRouteHandler,
  getBBucketManagedFoldersManagedFolderRouteHandler,
  getBBucketManagedFoldersRouteHandler,
  getBBucketNotificationConfigsNotificationRouteHandler,
  getBBucketNotificationConfigsRouteHandler,
  getBBucketOObjectAclEntityRouteHandler,
  getBBucketOObjectAclRouteHandler,
  getBBucketOObjectIamRouteHandler,
  getBBucketOObjectIamTestPermissionsRouteHandler,
  getBBucketOObjectRouteHandler,
  getBBucketOperationsOperationIdRouteHandler,
  getBBucketOperationsRouteHandler,
  getBBucketORouteHandler,
  getBBucketRouteHandler,
  getBRouteHandler,
  getProjectsProjectIdHmacKeysAccessIdRouteHandler,
  getProjectsProjectIdHmacKeysRouteHandler,
  getProjectsProjectIdServiceAccountRouteHandler,
  patchBBucketAclEntityRouteHandler,
  patchBBucketAnywhereCachesAnywhereCacheIdRouteHandler,
  patchBBucketDefaultObjectAclEntityRouteHandler,
  patchBBucketOObjectAclEntityRouteHandler,
  patchBBucketOObjectRouteHandler,
  patchBBucketRouteHandler,
  postBBucketAclRouteHandler,
  postBBucketAnywhereCachesAnywhereCacheIdDisableRouteHandler,
  postBBucketAnywhereCachesAnywhereCacheIdPauseRouteHandler,
  postBBucketAnywhereCachesAnywhereCacheIdResumeRouteHandler,
  postBBucketAnywhereCachesRouteHandler,
  postBBucketDefaultObjectAclRouteHandler,
  postBBucketFoldersRouteHandler,
  postBBucketFoldersSourceFolderRenameToFoldersDestinationFolderRouteHandler,
  postBBucketLockRetentionPolicyRouteHandler,
  postBBucketManagedFoldersRouteHandler,
  postBBucketNotificationConfigsRouteHandler,
  postBBucketOBulkRestoreRouteHandler,
  postBBucketOObjectAclRouteHandler,
  postBBucketOObjectRestoreRouteHandler,
  postBBucketOperationsOperationIdCancelRouteHandler,
  postBBucketORouteHandler,
  postBBucketOWatchRouteHandler,
  postBDestinationBucketODestinationObjectComposeRouteHandler,
  postBRouteHandler,
  postBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObjectRouteHandler,
  postBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObjectRouteHandler,
  postChannelsStopRouteHandler,
  postProjectsProjectIdHmacKeysRouteHandler,
  putBBucketAclEntityRouteHandler,
  putBBucketDefaultObjectAclEntityRouteHandler,
  putBBucketIamRouteHandler,
  putBBucketManagedFoldersManagedFolderIamRouteHandler,
  putBBucketOObjectAclEntityRouteHandler,
  putBBucketOObjectIamRouteHandler,
  putBBucketOObjectRouteHandler,
  putBBucketRouteHandler,
  putProjectsProjectIdHmacKeysAccessIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBRoute, getBRouteHandler)
  .openapi(postBRoute, postBRouteHandler)
  .openapi(deleteBBucketRoute, deleteBBucketRouteHandler)
  .openapi(getBBucketRoute, getBBucketRouteHandler)
  .openapi(patchBBucketRoute, patchBBucketRouteHandler)
  .openapi(putBBucketRoute, putBBucketRouteHandler)
  .openapi(getBBucketAclRoute, getBBucketAclRouteHandler)
  .openapi(postBBucketAclRoute, postBBucketAclRouteHandler)
  .openapi(deleteBBucketAclEntityRoute, deleteBBucketAclEntityRouteHandler)
  .openapi(getBBucketAclEntityRoute, getBBucketAclEntityRouteHandler)
  .openapi(patchBBucketAclEntityRoute, patchBBucketAclEntityRouteHandler)
  .openapi(putBBucketAclEntityRoute, putBBucketAclEntityRouteHandler)
  .openapi(getBBucketAnywhereCachesRoute, getBBucketAnywhereCachesRouteHandler)
  .openapi(postBBucketAnywhereCachesRoute, postBBucketAnywhereCachesRouteHandler)
  .openapi(
    getBBucketAnywhereCachesAnywhereCacheIdRoute,
    getBBucketAnywhereCachesAnywhereCacheIdRouteHandler,
  )
  .openapi(
    patchBBucketAnywhereCachesAnywhereCacheIdRoute,
    patchBBucketAnywhereCachesAnywhereCacheIdRouteHandler,
  )
  .openapi(
    postBBucketAnywhereCachesAnywhereCacheIdDisableRoute,
    postBBucketAnywhereCachesAnywhereCacheIdDisableRouteHandler,
  )
  .openapi(
    postBBucketAnywhereCachesAnywhereCacheIdPauseRoute,
    postBBucketAnywhereCachesAnywhereCacheIdPauseRouteHandler,
  )
  .openapi(
    postBBucketAnywhereCachesAnywhereCacheIdResumeRoute,
    postBBucketAnywhereCachesAnywhereCacheIdResumeRouteHandler,
  )
  .openapi(getBBucketDefaultObjectAclRoute, getBBucketDefaultObjectAclRouteHandler)
  .openapi(postBBucketDefaultObjectAclRoute, postBBucketDefaultObjectAclRouteHandler)
  .openapi(
    deleteBBucketDefaultObjectAclEntityRoute,
    deleteBBucketDefaultObjectAclEntityRouteHandler,
  )
  .openapi(getBBucketDefaultObjectAclEntityRoute, getBBucketDefaultObjectAclEntityRouteHandler)
  .openapi(patchBBucketDefaultObjectAclEntityRoute, patchBBucketDefaultObjectAclEntityRouteHandler)
  .openapi(putBBucketDefaultObjectAclEntityRoute, putBBucketDefaultObjectAclEntityRouteHandler)
  .openapi(getBBucketFoldersRoute, getBBucketFoldersRouteHandler)
  .openapi(postBBucketFoldersRoute, postBBucketFoldersRouteHandler)
  .openapi(deleteBBucketFoldersFolderRoute, deleteBBucketFoldersFolderRouteHandler)
  .openapi(getBBucketFoldersFolderRoute, getBBucketFoldersFolderRouteHandler)
  .openapi(
    postBBucketFoldersSourceFolderRenameToFoldersDestinationFolderRoute,
    postBBucketFoldersSourceFolderRenameToFoldersDestinationFolderRouteHandler,
  )
  .openapi(getBBucketIamRoute, getBBucketIamRouteHandler)
  .openapi(putBBucketIamRoute, putBBucketIamRouteHandler)
  .openapi(getBBucketIamTestPermissionsRoute, getBBucketIamTestPermissionsRouteHandler)
  .openapi(postBBucketLockRetentionPolicyRoute, postBBucketLockRetentionPolicyRouteHandler)
  .openapi(getBBucketManagedFoldersRoute, getBBucketManagedFoldersRouteHandler)
  .openapi(postBBucketManagedFoldersRoute, postBBucketManagedFoldersRouteHandler)
  .openapi(
    deleteBBucketManagedFoldersManagedFolderRoute,
    deleteBBucketManagedFoldersManagedFolderRouteHandler,
  )
  .openapi(
    getBBucketManagedFoldersManagedFolderRoute,
    getBBucketManagedFoldersManagedFolderRouteHandler,
  )
  .openapi(
    getBBucketManagedFoldersManagedFolderIamRoute,
    getBBucketManagedFoldersManagedFolderIamRouteHandler,
  )
  .openapi(
    putBBucketManagedFoldersManagedFolderIamRoute,
    putBBucketManagedFoldersManagedFolderIamRouteHandler,
  )
  .openapi(
    getBBucketManagedFoldersManagedFolderIamTestPermissionsRoute,
    getBBucketManagedFoldersManagedFolderIamTestPermissionsRouteHandler,
  )
  .openapi(getBBucketNotificationConfigsRoute, getBBucketNotificationConfigsRouteHandler)
  .openapi(postBBucketNotificationConfigsRoute, postBBucketNotificationConfigsRouteHandler)
  .openapi(
    deleteBBucketNotificationConfigsNotificationRoute,
    deleteBBucketNotificationConfigsNotificationRouteHandler,
  )
  .openapi(
    getBBucketNotificationConfigsNotificationRoute,
    getBBucketNotificationConfigsNotificationRouteHandler,
  )
  .openapi(getBBucketORoute, getBBucketORouteHandler)
  .openapi(postBBucketORoute, postBBucketORouteHandler)
  .openapi(postBBucketOBulkRestoreRoute, postBBucketOBulkRestoreRouteHandler)
  .openapi(postBBucketOWatchRoute, postBBucketOWatchRouteHandler)
  .openapi(deleteBBucketOObjectRoute, deleteBBucketOObjectRouteHandler)
  .openapi(getBBucketOObjectRoute, getBBucketOObjectRouteHandler)
  .openapi(patchBBucketOObjectRoute, patchBBucketOObjectRouteHandler)
  .openapi(putBBucketOObjectRoute, putBBucketOObjectRouteHandler)
  .openapi(getBBucketOObjectAclRoute, getBBucketOObjectAclRouteHandler)
  .openapi(postBBucketOObjectAclRoute, postBBucketOObjectAclRouteHandler)
  .openapi(deleteBBucketOObjectAclEntityRoute, deleteBBucketOObjectAclEntityRouteHandler)
  .openapi(getBBucketOObjectAclEntityRoute, getBBucketOObjectAclEntityRouteHandler)
  .openapi(patchBBucketOObjectAclEntityRoute, patchBBucketOObjectAclEntityRouteHandler)
  .openapi(putBBucketOObjectAclEntityRoute, putBBucketOObjectAclEntityRouteHandler)
  .openapi(getBBucketOObjectIamRoute, getBBucketOObjectIamRouteHandler)
  .openapi(putBBucketOObjectIamRoute, putBBucketOObjectIamRouteHandler)
  .openapi(
    getBBucketOObjectIamTestPermissionsRoute,
    getBBucketOObjectIamTestPermissionsRouteHandler,
  )
  .openapi(postBBucketOObjectRestoreRoute, postBBucketOObjectRestoreRouteHandler)
  .openapi(getBBucketOperationsRoute, getBBucketOperationsRouteHandler)
  .openapi(getBBucketOperationsOperationIdRoute, getBBucketOperationsOperationIdRouteHandler)
  .openapi(
    postBBucketOperationsOperationIdCancelRoute,
    postBBucketOperationsOperationIdCancelRouteHandler,
  )
  .openapi(
    postBDestinationBucketODestinationObjectComposeRoute,
    postBDestinationBucketODestinationObjectComposeRouteHandler,
  )
  .openapi(
    postBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObjectRoute,
    postBSourceBucketOSourceObjectCopyToBDestinationBucketODestinationObjectRouteHandler,
  )
  .openapi(
    postBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObjectRoute,
    postBSourceBucketOSourceObjectRewriteToBDestinationBucketODestinationObjectRouteHandler,
  )
  .openapi(postChannelsStopRoute, postChannelsStopRouteHandler)
  .openapi(getProjectsProjectIdHmacKeysRoute, getProjectsProjectIdHmacKeysRouteHandler)
  .openapi(postProjectsProjectIdHmacKeysRoute, postProjectsProjectIdHmacKeysRouteHandler)
  .openapi(
    deleteProjectsProjectIdHmacKeysAccessIdRoute,
    deleteProjectsProjectIdHmacKeysAccessIdRouteHandler,
  )
  .openapi(
    getProjectsProjectIdHmacKeysAccessIdRoute,
    getProjectsProjectIdHmacKeysAccessIdRouteHandler,
  )
  .openapi(
    putProjectsProjectIdHmacKeysAccessIdRoute,
    putProjectsProjectIdHmacKeysAccessIdRouteHandler,
  )
  .openapi(getProjectsProjectIdServiceAccountRoute, getProjectsProjectIdServiceAccountRouteHandler)

export default app
