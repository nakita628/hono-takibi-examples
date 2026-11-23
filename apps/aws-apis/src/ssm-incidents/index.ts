import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceArnTagKeysRoute,
  getGetIncidentRecordArnRoute,
  getGetReplicationSetArnRoute,
  getGetResponsePlanArnRoute,
  getGetTimelineEventEventIdIncidentRecordArnRoute,
  getTagsResourceArnRoute,
  postCreateReplicationSetRoute,
  postCreateResponsePlanRoute,
  postCreateTimelineEventRoute,
  postDeleteIncidentRecordRoute,
  postDeleteReplicationSetArnRoute,
  postDeleteResourcePolicyRoute,
  postDeleteResponsePlanRoute,
  postDeleteTimelineEventRoute,
  postGetResourcePoliciesResourceArnRoute,
  postListIncidentRecordsRoute,
  postListRelatedItemsRoute,
  postListReplicationSetsRoute,
  postListResponsePlansRoute,
  postListTimelineEventsRoute,
  postPutResourcePolicyRoute,
  postStartIncidentRoute,
  postTagsResourceArnRoute,
  postUpdateDeletionProtectionRoute,
  postUpdateIncidentRecordRoute,
  postUpdateRelatedItemsRoute,
  postUpdateReplicationSetRoute,
  postUpdateResponsePlanRoute,
  postUpdateTimelineEventRoute,
} from './routes'
import {
  deleteTagsResourceArnTagKeysRouteHandler,
  getGetIncidentRecordArnRouteHandler,
  getGetReplicationSetArnRouteHandler,
  getGetResponsePlanArnRouteHandler,
  getGetTimelineEventEventIdIncidentRecordArnRouteHandler,
  getTagsResourceArnRouteHandler,
  postCreateReplicationSetRouteHandler,
  postCreateResponsePlanRouteHandler,
  postCreateTimelineEventRouteHandler,
  postDeleteIncidentRecordRouteHandler,
  postDeleteReplicationSetArnRouteHandler,
  postDeleteResourcePolicyRouteHandler,
  postDeleteResponsePlanRouteHandler,
  postDeleteTimelineEventRouteHandler,
  postGetResourcePoliciesResourceArnRouteHandler,
  postListIncidentRecordsRouteHandler,
  postListRelatedItemsRouteHandler,
  postListReplicationSetsRouteHandler,
  postListResponsePlansRouteHandler,
  postListTimelineEventsRouteHandler,
  postPutResourcePolicyRouteHandler,
  postStartIncidentRouteHandler,
  postTagsResourceArnRouteHandler,
  postUpdateDeletionProtectionRouteHandler,
  postUpdateIncidentRecordRouteHandler,
  postUpdateRelatedItemsRouteHandler,
  postUpdateReplicationSetRouteHandler,
  postUpdateResponsePlanRouteHandler,
  postUpdateTimelineEventRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCreateReplicationSetRoute, postCreateReplicationSetRouteHandler)
  .openapi(postCreateResponsePlanRoute, postCreateResponsePlanRouteHandler)
  .openapi(postCreateTimelineEventRoute, postCreateTimelineEventRouteHandler)
  .openapi(postDeleteIncidentRecordRoute, postDeleteIncidentRecordRouteHandler)
  .openapi(postDeleteReplicationSetArnRoute, postDeleteReplicationSetArnRouteHandler)
  .openapi(postDeleteResourcePolicyRoute, postDeleteResourcePolicyRouteHandler)
  .openapi(postDeleteResponsePlanRoute, postDeleteResponsePlanRouteHandler)
  .openapi(postDeleteTimelineEventRoute, postDeleteTimelineEventRouteHandler)
  .openapi(getGetIncidentRecordArnRoute, getGetIncidentRecordArnRouteHandler)
  .openapi(getGetReplicationSetArnRoute, getGetReplicationSetArnRouteHandler)
  .openapi(postGetResourcePoliciesResourceArnRoute, postGetResourcePoliciesResourceArnRouteHandler)
  .openapi(getGetResponsePlanArnRoute, getGetResponsePlanArnRouteHandler)
  .openapi(
    getGetTimelineEventEventIdIncidentRecordArnRoute,
    getGetTimelineEventEventIdIncidentRecordArnRouteHandler,
  )
  .openapi(postListIncidentRecordsRoute, postListIncidentRecordsRouteHandler)
  .openapi(postListRelatedItemsRoute, postListRelatedItemsRouteHandler)
  .openapi(postListReplicationSetsRoute, postListReplicationSetsRouteHandler)
  .openapi(postListResponsePlansRoute, postListResponsePlansRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postListTimelineEventsRoute, postListTimelineEventsRouteHandler)
  .openapi(postPutResourcePolicyRoute, postPutResourcePolicyRouteHandler)
  .openapi(postStartIncidentRoute, postStartIncidentRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(postUpdateDeletionProtectionRoute, postUpdateDeletionProtectionRouteHandler)
  .openapi(postUpdateIncidentRecordRoute, postUpdateIncidentRecordRouteHandler)
  .openapi(postUpdateRelatedItemsRoute, postUpdateRelatedItemsRouteHandler)
  .openapi(postUpdateReplicationSetRoute, postUpdateReplicationSetRouteHandler)
  .openapi(postUpdateResponsePlanRoute, postUpdateResponsePlanRouteHandler)
  .openapi(postUpdateTimelineEventRoute, postUpdateTimelineEventRouteHandler)

export default app
