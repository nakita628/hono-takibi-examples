import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2OnCallEscalationPoliciesPolicyIdRoute,
  deleteApiV2OnCallSchedulesScheduleIdOverridesOverrideIdRoute,
  deleteApiV2OnCallSchedulesScheduleIdRoute,
  deleteApiV2OnCallUsersUserIdNotificationChannelsChannelIdRoute,
  deleteApiV2OnCallUsersUserIdNotificationRulesRuleIdRoute,
  getApiV2OnCallEscalationPoliciesPolicyIdRoute,
  getApiV2OnCallEscalationPoliciesRoute,
  getApiV2OnCallPagesPageIdRoute,
  getApiV2OnCallPagesRoute,
  getApiV2OnCallSchedulesRoute,
  getApiV2OnCallSchedulesScheduleIdOnCallRoute,
  getApiV2OnCallSchedulesScheduleIdOverridesRoute,
  getApiV2OnCallSchedulesScheduleIdRespondersRoute,
  getApiV2OnCallSchedulesScheduleIdRoute,
  getApiV2OnCallTeamsTeamIdOnCallRoute,
  getApiV2OnCallTeamsTeamIdRoutingRulesRoute,
  getApiV2OnCallUsersUserIdNotificationChannelsChannelIdRoute,
  getApiV2OnCallUsersUserIdNotificationChannelsRoute,
  getApiV2OnCallUsersUserIdNotificationRulesRoute,
  getApiV2OnCallUsersUserIdNotificationRulesRuleIdRoute,
  postApiV2OnCallEscalationPoliciesRoute,
  postApiV2OnCallPagesPageIdCommentsRoute,
  postApiV2OnCallSchedulesRoute,
  postApiV2OnCallSchedulesScheduleIdOverridesRoute,
  postApiV2OnCallUsersUserIdNotificationChannelsRoute,
  postApiV2OnCallUsersUserIdNotificationRulesRoute,
  putApiV2OnCallEscalationPoliciesPolicyIdRoute,
  putApiV2OnCallSchedulesScheduleIdRoute,
  putApiV2OnCallTeamsTeamIdRoutingRulesRoute,
  putApiV2OnCallUsersUserIdNotificationRulesRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onCallHandler = app
  .openapi(getApiV2OnCallEscalationPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OnCallEscalationPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OnCallEscalationPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OnCallEscalationPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OnCallEscalationPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OnCallPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OnCallPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OnCallPagesPageIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OnCallSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OnCallSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OnCallSchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OnCallSchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OnCallSchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OnCallSchedulesScheduleIdOnCallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OnCallSchedulesScheduleIdOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OnCallSchedulesScheduleIdOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OnCallSchedulesScheduleIdOverridesOverrideIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OnCallSchedulesScheduleIdRespondersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OnCallTeamsTeamIdOnCallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OnCallTeamsTeamIdRoutingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OnCallTeamsTeamIdRoutingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OnCallUsersUserIdNotificationChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OnCallUsersUserIdNotificationChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OnCallUsersUserIdNotificationChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OnCallUsersUserIdNotificationChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OnCallUsersUserIdNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OnCallUsersUserIdNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OnCallUsersUserIdNotificationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OnCallUsersUserIdNotificationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2OnCallUsersUserIdNotificationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
