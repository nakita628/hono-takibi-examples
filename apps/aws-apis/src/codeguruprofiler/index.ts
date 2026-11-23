import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelIdRoute,
  deleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionIdRoute,
  deleteProfilingGroupsProfilingGroupNameRoute,
  deleteTagsResourceArnTagKeysRoute,
  getInternalFindingsReportsRoute,
  getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeRoute,
  getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeRoute,
  getProfilingGroupsProfilingGroupNameNotificationConfigurationRoute,
  getProfilingGroupsProfilingGroupNamePolicyRoute,
  getProfilingGroupsProfilingGroupNameProfileRoute,
  getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeRoute,
  getProfilingGroupsProfilingGroupNameRoute,
  getProfilingGroupsRoute,
  getTagsResourceArnRoute,
  postInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedbackRoute,
  postProfilingGroupsClientTokenRoute,
  postProfilingGroupsProfilingGroupNameAgentProfileContentTypeRoute,
  postProfilingGroupsProfilingGroupNameConfigureAgentRoute,
  postProfilingGroupsProfilingGroupNameFramesDashMetricsRoute,
  postProfilingGroupsProfilingGroupNameNotificationConfigurationRoute,
  postTagsResourceArnRoute,
  putProfilingGroupsProfilingGroupNamePolicyActionGroupRoute,
  putProfilingGroupsProfilingGroupNameRoute,
} from './routes'
import {
  deleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelIdRouteHandler,
  deleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionIdRouteHandler,
  deleteProfilingGroupsProfilingGroupNameRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getInternalFindingsReportsRouteHandler,
  getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeRouteHandler,
  getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeRouteHandler,
  getProfilingGroupsProfilingGroupNameNotificationConfigurationRouteHandler,
  getProfilingGroupsProfilingGroupNamePolicyRouteHandler,
  getProfilingGroupsProfilingGroupNameProfileRouteHandler,
  getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeRouteHandler,
  getProfilingGroupsProfilingGroupNameRouteHandler,
  getProfilingGroupsRouteHandler,
  getTagsResourceArnRouteHandler,
  postInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedbackRouteHandler,
  postProfilingGroupsClientTokenRouteHandler,
  postProfilingGroupsProfilingGroupNameAgentProfileContentTypeRouteHandler,
  postProfilingGroupsProfilingGroupNameConfigureAgentRouteHandler,
  postProfilingGroupsProfilingGroupNameFramesDashMetricsRouteHandler,
  postProfilingGroupsProfilingGroupNameNotificationConfigurationRouteHandler,
  postTagsResourceArnRouteHandler,
  putProfilingGroupsProfilingGroupNamePolicyActionGroupRouteHandler,
  putProfilingGroupsProfilingGroupNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postProfilingGroupsProfilingGroupNameNotificationConfigurationRoute,
    postProfilingGroupsProfilingGroupNameNotificationConfigurationRouteHandler,
  )
  .openapi(
    getProfilingGroupsProfilingGroupNameNotificationConfigurationRoute,
    getProfilingGroupsProfilingGroupNameNotificationConfigurationRouteHandler,
  )
  .openapi(
    postProfilingGroupsProfilingGroupNameFramesDashMetricsRoute,
    postProfilingGroupsProfilingGroupNameFramesDashMetricsRouteHandler,
  )
  .openapi(
    postProfilingGroupsProfilingGroupNameConfigureAgentRoute,
    postProfilingGroupsProfilingGroupNameConfigureAgentRouteHandler,
  )
  .openapi(postProfilingGroupsClientTokenRoute, postProfilingGroupsClientTokenRouteHandler)
  .openapi(
    deleteProfilingGroupsProfilingGroupNameRoute,
    deleteProfilingGroupsProfilingGroupNameRouteHandler,
  )
  .openapi(
    getProfilingGroupsProfilingGroupNameRoute,
    getProfilingGroupsProfilingGroupNameRouteHandler,
  )
  .openapi(
    putProfilingGroupsProfilingGroupNameRoute,
    putProfilingGroupsProfilingGroupNameRouteHandler,
  )
  .openapi(getInternalFindingsReportsRoute, getInternalFindingsReportsRouteHandler)
  .openapi(
    getProfilingGroupsProfilingGroupNamePolicyRoute,
    getProfilingGroupsProfilingGroupNamePolicyRouteHandler,
  )
  .openapi(
    getProfilingGroupsProfilingGroupNameProfileRoute,
    getProfilingGroupsProfilingGroupNameProfileRouteHandler,
  )
  .openapi(
    getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeRoute,
    getInternalProfilingGroupsProfilingGroupNameRecommendationsEndTimeStartTimeRouteHandler,
  )
  .openapi(
    getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeRoute,
    getInternalProfilingGroupsProfilingGroupNameFindingsReportsEndTimeStartTimeRouteHandler,
  )
  .openapi(
    getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeRoute,
    getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeRouteHandler,
  )
  .openapi(getProfilingGroupsRoute, getProfilingGroupsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(
    postProfilingGroupsProfilingGroupNameAgentProfileContentTypeRoute,
    postProfilingGroupsProfilingGroupNameAgentProfileContentTypeRouteHandler,
  )
  .openapi(
    putProfilingGroupsProfilingGroupNamePolicyActionGroupRoute,
    putProfilingGroupsProfilingGroupNamePolicyActionGroupRouteHandler,
  )
  .openapi(
    deleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelIdRoute,
    deleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelIdRouteHandler,
  )
  .openapi(
    deleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionIdRoute,
    deleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionIdRouteHandler,
  )
  .openapi(
    postInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedbackRoute,
    postInternalProfilingGroupsProfilingGroupNameAnomaliesAnomalyInstanceIdFeedbackRouteHandler,
  )
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
