import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2TeamConnectionsRoute,
  deleteApiV2TeamHierarchyLinksLinkIdRoute,
  deleteApiV2TeamSuperTeamIdMemberTeamsMemberTeamIdRoute,
  deleteApiV2TeamTeamIdLinksLinkIdRoute,
  deleteApiV2TeamTeamIdMembershipsUserIdRoute,
  deleteApiV2TeamTeamIdNotificationRulesRuleIdRoute,
  deleteApiV2TeamTeamIdRoute,
  getApiV2TeamConnectionsRoute,
  getApiV2TeamHierarchyLinksLinkIdRoute,
  getApiV2TeamHierarchyLinksRoute,
  getApiV2TeamRoute,
  getApiV2TeamSuperTeamIdMemberTeamsRoute,
  getApiV2TeamSyncRoute,
  getApiV2TeamTeamIdLinksLinkIdRoute,
  getApiV2TeamTeamIdLinksRoute,
  getApiV2TeamTeamIdMembershipsRoute,
  getApiV2TeamTeamIdMembersRoute,
  getApiV2TeamTeamIdNotificationRulesRoute,
  getApiV2TeamTeamIdNotificationRulesRuleIdRoute,
  getApiV2TeamTeamIdPermissionSettingsRoute,
  getApiV2TeamTeamIdRoute,
  getApiV2UsersUserUuidMembershipsRoute,
  patchApiV2TeamTeamIdLinksLinkIdRoute,
  patchApiV2TeamTeamIdMembershipsUserIdRoute,
  patchApiV2TeamTeamIdRoute,
  postApiV2TeamConnectionsRoute,
  postApiV2TeamHierarchyLinksRoute,
  postApiV2TeamRoute,
  postApiV2TeamSuperTeamIdMemberTeamsRoute,
  postApiV2TeamSyncRoute,
  postApiV2TeamTeamIdLinksRoute,
  postApiV2TeamTeamIdMembershipsRoute,
  postApiV2TeamTeamIdNotificationRulesRoute,
  putApiV2TeamTeamIdNotificationRulesRuleIdRoute,
  putApiV2TeamTeamIdPermissionSettingsActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getApiV2TeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamHierarchyLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TeamHierarchyLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TeamHierarchyLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamHierarchyLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TeamConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TeamConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TeamSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamSuperTeamIdMemberTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TeamSuperTeamIdMemberTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TeamSuperTeamIdMemberTeamsMemberTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TeamTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2TeamTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamTeamIdLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TeamTeamIdLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TeamTeamIdLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamTeamIdLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2TeamTeamIdLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamTeamIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamTeamIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TeamTeamIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TeamTeamIdMembershipsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2TeamTeamIdMembershipsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamTeamIdNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TeamTeamIdNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TeamTeamIdNotificationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamTeamIdNotificationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TeamTeamIdNotificationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TeamTeamIdPermissionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TeamTeamIdPermissionSettingsActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserUuidMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
