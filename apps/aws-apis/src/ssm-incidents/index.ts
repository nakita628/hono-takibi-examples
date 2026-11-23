import { OpenAPIHono } from '@hono/zod-openapi'
import {
  createReplicationSetHandler,
  createResponsePlanHandler,
  createTimelineEventHandler,
  deleteIncidentRecordHandler,
  deleteReplicationSetArnHandler,
  deleteResourcePolicyHandler,
  deleteResponsePlanHandler,
  deleteTimelineEventHandler,
  getIncidentRecordArnHandler,
  getReplicationSetArnHandler,
  getResourcePoliciesResourceArnHandler,
  getResponsePlanArnHandler,
  getTimelineEventEventIdIncidentRecordArnHandler,
  listIncidentRecordsHandler,
  listRelatedItemsHandler,
  listReplicationSetsHandler,
  listResponsePlansHandler,
  listTimelineEventsHandler,
  putResourcePolicyHandler,
  startIncidentHandler,
  tagsHandler,
  updateDeletionProtectionHandler,
  updateIncidentRecordHandler,
  updateRelatedItemsHandler,
  updateReplicationSetHandler,
  updateResponsePlanHandler,
  updateTimelineEventHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', createReplicationSetHandler)
  .route('/', createResponsePlanHandler)
  .route('/', createTimelineEventHandler)
  .route('/', deleteIncidentRecordHandler)
  .route('/', deleteReplicationSetArnHandler)
  .route('/', deleteResourcePolicyHandler)
  .route('/', deleteResponsePlanHandler)
  .route('/', deleteTimelineEventHandler)
  .route('/', getIncidentRecordArnHandler)
  .route('/', getReplicationSetArnHandler)
  .route('/', getResourcePoliciesResourceArnHandler)
  .route('/', getResponsePlanArnHandler)
  .route('/', getTimelineEventEventIdIncidentRecordArnHandler)
  .route('/', listIncidentRecordsHandler)
  .route('/', listRelatedItemsHandler)
  .route('/', listReplicationSetsHandler)
  .route('/', listResponsePlansHandler)
  .route('/', tagsHandler)
  .route('/', listTimelineEventsHandler)
  .route('/', putResourcePolicyHandler)
  .route('/', startIncidentHandler)
  .route('/', updateDeletionProtectionHandler)
  .route('/', updateIncidentRecordHandler)
  .route('/', updateRelatedItemsHandler)
  .route('/', updateReplicationSetHandler)
  .route('/', updateResponsePlanHandler)
  .route('/', updateTimelineEventHandler)

export default app
