import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1GroupsCountersRoute,
  getApiV1GroupsFilesRoute,
  getApiV1GroupsGetIntegrationsRoute,
  getApiV1GroupsHistoryRoute,
  getApiV1GroupsInfoRoute,
  getApiV1GroupsListAllRoute,
  getApiV1GroupsListRoute,
  getApiV1GroupsMembersRoute,
  getApiV1GroupsMessagesRoute,
  getApiV1GroupsModeratorsRoute,
  getApiV1GroupsOnlineRoute,
  getApiV1GroupsRolesRoute,
  postApiV1GroupsAddAllRoute,
  postApiV1GroupsAddLeaderRoute,
  postApiV1GroupsAddModeratorRoute,
  postApiV1GroupsAddOwnerRoute,
  postApiV1GroupsArchiveRoute,
  postApiV1GroupsCloseRoute,
  postApiV1GroupsConvertToTeamRoute,
  postApiV1GroupsCreateRoute,
  postApiV1GroupsDeleteRoute,
  postApiV1GroupsInviteRoute,
  postApiV1GroupsKickRoute,
  postApiV1GroupsLeaveRoute,
  postApiV1GroupsOpenRoute,
  postApiV1GroupsRemoveLeaderRoute,
  postApiV1GroupsRemoveModeratorRoute,
  postApiV1GroupsRemoveOwnerRoute,
  postApiV1GroupsRenameRoute,
  postApiV1GroupsSetAnnouncementRoute,
  postApiV1GroupsSetCustomFieldsRoute,
  postApiV1GroupsSetDescriptionRoute,
  postApiV1GroupsSetEncryptedRoute,
  postApiV1GroupsSetPurposeRoute,
  postApiV1GroupsSetReadOnlyRoute,
  postApiV1GroupsSetTopicRoute,
  postApiV1GroupsSetTypeRoute,
  postApiV1GroupsUnarchiveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getApiV1GroupsOnlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsGetIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsAddAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsAddLeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsAddModeratorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsAddOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsCountersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsKickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsRemoveLeaderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsRemoveModeratorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsRemoveOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsSetAnnouncementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsSetCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsSetDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsSetPurposeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsSetReadOnlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsSetTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsSetTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsSetEncryptedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsConvertToTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
