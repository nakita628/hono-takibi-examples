import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelIdRoute,
  deleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionIdRoute,
  deleteProfilingGroupsProfilingGroupNameRoute,
  getProfilingGroupsProfilingGroupNameNotificationConfigurationRoute,
  getProfilingGroupsProfilingGroupNamePolicyRoute,
  getProfilingGroupsProfilingGroupNameProfileRoute,
  getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeRoute,
  getProfilingGroupsProfilingGroupNameRoute,
  getProfilingGroupsRoute,
  postProfilingGroupsProfilingGroupNameAgentProfileContentTypeRoute,
  postProfilingGroupsProfilingGroupNameConfigureAgentRoute,
  postProfilingGroupsProfilingGroupNameFramesDashMetricsRoute,
  postProfilingGroupsProfilingGroupNameNotificationConfigurationRoute,
  putProfilingGroupsProfilingGroupNamePolicyActionGroupRoute,
  putProfilingGroupsProfilingGroupNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const profilingGroupsHandler = app
  .openapi(postProfilingGroupsProfilingGroupNameNotificationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfilingGroupsProfilingGroupNameNotificationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProfilingGroupsProfilingGroupNameFramesDashMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProfilingGroupsProfilingGroupNameConfigureAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProfilingGroupsProfilingGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfilingGroupsProfilingGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProfilingGroupsProfilingGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfilingGroupsProfilingGroupNamePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfilingGroupsProfilingGroupNameProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfilingGroupsProfilingGroupNameProfileTimesEndTimePeriodStartTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfilingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProfilingGroupsProfilingGroupNameAgentProfileContentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProfilingGroupsProfilingGroupNamePolicyActionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProfilingGroupsProfilingGroupNameNotificationConfigurationChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProfilingGroupsProfilingGroupNamePolicyActionGroupRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
