import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRoute,
  getApiRoute,
  getBucketsBidCollectionsCidChangesetRoute,
  getBucketsBucketIdCollectionsCollectionIdRecordsIdRoute,
  getBucketsBucketIdCollectionsCollectionIdRecordsRoute,
  getBucketsBucketIdCollectionsIdRoute,
  getBucketsBucketIdCollectionsRoute,
  getBucketsBucketIdGroupsIdRoute,
  getBucketsBucketIdGroupsRoute,
  getBucketsIdRoute,
  getBucketsMonitorCollectionsChangesRecordsRoute,
  getBucketsRoute,
  getContributeJsonRoute,
  getHeartbeatRoute,
  getLbheartbeatRoute,
  getRoute,
  getVersionRoute,
  postBatchRoute,
  postBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRoute,
} from './routes'
import {
  deleteBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRouteHandler,
  getApiRouteHandler,
  getBucketsBidCollectionsCidChangesetRouteHandler,
  getBucketsBucketIdCollectionsCollectionIdRecordsIdRouteHandler,
  getBucketsBucketIdCollectionsCollectionIdRecordsRouteHandler,
  getBucketsBucketIdCollectionsIdRouteHandler,
  getBucketsBucketIdCollectionsRouteHandler,
  getBucketsBucketIdGroupsIdRouteHandler,
  getBucketsBucketIdGroupsRouteHandler,
  getBucketsIdRouteHandler,
  getBucketsMonitorCollectionsChangesRecordsRouteHandler,
  getBucketsRouteHandler,
  getContributeJsonRouteHandler,
  getHeartbeatRouteHandler,
  getLbheartbeatRouteHandler,
  getRouteHandler,
  getVersionRouteHandler,
  postBatchRouteHandler,
  postBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getApiRoute, getApiRouteHandler)
  .openapi(getHeartbeatRoute, getHeartbeatRouteHandler)
  .openapi(getLbheartbeatRoute, getLbheartbeatRouteHandler)
  .openapi(getVersionRoute, getVersionRouteHandler)
  .openapi(postBatchRoute, postBatchRouteHandler)
  .openapi(getBucketsRoute, getBucketsRouteHandler)
  .openapi(
    getBucketsMonitorCollectionsChangesRecordsRoute,
    getBucketsMonitorCollectionsChangesRecordsRouteHandler,
  )
  .openapi(
    getBucketsBidCollectionsCidChangesetRoute,
    getBucketsBidCollectionsCidChangesetRouteHandler,
  )
  .openapi(getBucketsBucketIdCollectionsRoute, getBucketsBucketIdCollectionsRouteHandler)
  .openapi(
    getBucketsBucketIdCollectionsCollectionIdRecordsRoute,
    getBucketsBucketIdCollectionsCollectionIdRecordsRouteHandler,
  )
  .openapi(
    getBucketsBucketIdCollectionsCollectionIdRecordsIdRoute,
    getBucketsBucketIdCollectionsCollectionIdRecordsIdRouteHandler,
  )
  .openapi(
    deleteBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRoute,
    deleteBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRouteHandler,
  )
  .openapi(
    postBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRoute,
    postBucketsBucketIdCollectionsCollectionIdRecordsIdAttachmentRouteHandler,
  )
  .openapi(getBucketsBucketIdCollectionsIdRoute, getBucketsBucketIdCollectionsIdRouteHandler)
  .openapi(getBucketsBucketIdGroupsRoute, getBucketsBucketIdGroupsRouteHandler)
  .openapi(getBucketsBucketIdGroupsIdRoute, getBucketsBucketIdGroupsIdRouteHandler)
  .openapi(getBucketsIdRoute, getBucketsIdRouteHandler)
  .openapi(getContributeJsonRoute, getContributeJsonRouteHandler)

export default app
