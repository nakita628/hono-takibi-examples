import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBBucketAclEntityRoute,
  deleteBBucketDefaultObjectAclEntityRoute,
  deleteBBucketNotificationConfigsNotificationRoute,
  deleteBBucketOObjectAclEntityRoute,
  deleteBBucketOObjectRoute,
  deleteBBucketRoute,
  deleteProjectsProjectIdHmacKeysAccessIdRoute,
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
  getProjectsProjectIdHmacKeysAccessIdRoute,
  getProjectsProjectIdHmacKeysRoute,
  getProjectsProjectIdServiceAccountRoute,
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
  postChannelsStopRoute,
  postProjectsProjectIdHmacKeysRoute,
  putBBucketAclEntityRoute,
  putBBucketDefaultObjectAclEntityRoute,
  putBBucketIamRoute,
  putBBucketOObjectAclEntityRoute,
  putBBucketOObjectIamRoute,
  putBBucketOObjectRoute,
  putBBucketRoute,
  putProjectsProjectIdHmacKeysAccessIdRoute,
} from './routes'
import {
  deleteBBucketAclEntityRouteHandler,
  deleteBBucketDefaultObjectAclEntityRouteHandler,
  deleteBBucketNotificationConfigsNotificationRouteHandler,
  deleteBBucketOObjectAclEntityRouteHandler,
  deleteBBucketOObjectRouteHandler,
  deleteBBucketRouteHandler,
  deleteProjectsProjectIdHmacKeysAccessIdRouteHandler,
  getBBucketAclEntityRouteHandler,
  getBBucketAclRouteHandler,
  getBBucketDefaultObjectAclEntityRouteHandler,
  getBBucketDefaultObjectAclRouteHandler,
  getBBucketIamRouteHandler,
  getBBucketIamTestPermissionsRouteHandler,
  getBBucketNotificationConfigsNotificationRouteHandler,
  getBBucketNotificationConfigsRouteHandler,
  getBBucketOObjectAclEntityRouteHandler,
  getBBucketOObjectAclRouteHandler,
  getBBucketOObjectIamRouteHandler,
  getBBucketOObjectIamTestPermissionsRouteHandler,
  getBBucketOObjectRouteHandler,
  getBBucketORouteHandler,
  getBBucketRouteHandler,
  getBRouteHandler,
  getProjectsProjectIdHmacKeysAccessIdRouteHandler,
  getProjectsProjectIdHmacKeysRouteHandler,
  getProjectsProjectIdServiceAccountRouteHandler,
  patchBBucketAclEntityRouteHandler,
  patchBBucketDefaultObjectAclEntityRouteHandler,
  patchBBucketOObjectAclEntityRouteHandler,
  patchBBucketOObjectRouteHandler,
  patchBBucketRouteHandler,
  postBBucketAclRouteHandler,
  postBBucketDefaultObjectAclRouteHandler,
  postBBucketLockRetentionPolicyRouteHandler,
  postBBucketNotificationConfigsRouteHandler,
  postBBucketOObjectAclRouteHandler,
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
  .openapi(getBBucketDefaultObjectAclRoute, getBBucketDefaultObjectAclRouteHandler)
  .openapi(postBBucketDefaultObjectAclRoute, postBBucketDefaultObjectAclRouteHandler)
  .openapi(
    deleteBBucketDefaultObjectAclEntityRoute,
    deleteBBucketDefaultObjectAclEntityRouteHandler,
  )
  .openapi(getBBucketDefaultObjectAclEntityRoute, getBBucketDefaultObjectAclEntityRouteHandler)
  .openapi(patchBBucketDefaultObjectAclEntityRoute, patchBBucketDefaultObjectAclEntityRouteHandler)
  .openapi(putBBucketDefaultObjectAclEntityRoute, putBBucketDefaultObjectAclEntityRouteHandler)
  .openapi(getBBucketIamRoute, getBBucketIamRouteHandler)
  .openapi(putBBucketIamRoute, putBBucketIamRouteHandler)
  .openapi(getBBucketIamTestPermissionsRoute, getBBucketIamTestPermissionsRouteHandler)
  .openapi(postBBucketLockRetentionPolicyRoute, postBBucketLockRetentionPolicyRouteHandler)
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
