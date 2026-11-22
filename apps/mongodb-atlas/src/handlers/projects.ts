import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdInvitesInvitationIdRoute,
  deleteApiAtlasV2GroupsGroupIdLimitsLimitNameRoute,
  deleteApiAtlasV2GroupsGroupIdRoute,
  getApiAtlasV2GroupsByNameGroupNameRoute,
  getApiAtlasV2GroupsGroupIdInvitesInvitationIdRoute,
  getApiAtlasV2GroupsGroupIdInvitesRoute,
  getApiAtlasV2GroupsGroupIdIpAddressesRoute,
  getApiAtlasV2GroupsGroupIdLimitsLimitNameRoute,
  getApiAtlasV2GroupsGroupIdLimitsRoute,
  getApiAtlasV2GroupsGroupIdMongoDBVersionsRoute,
  getApiAtlasV2GroupsGroupIdRoute,
  getApiAtlasV2GroupsGroupIdSettingsRoute,
  getApiAtlasV2GroupsRoute,
  patchApiAtlasV2GroupsGroupIdInvitesInvitationIdRoute,
  patchApiAtlasV2GroupsGroupIdInvitesRoute,
  patchApiAtlasV2GroupsGroupIdLimitsLimitNameRoute,
  patchApiAtlasV2GroupsGroupIdRoute,
  patchApiAtlasV2GroupsGroupIdSettingsRoute,
  postApiAtlasV2GroupsGroupIdAccessRoute,
  postApiAtlasV2GroupsGroupIdInvitesRoute,
  postApiAtlasV2GroupsGroupIdMigrateRoute,
  postApiAtlasV2GroupsRoute,
  putApiAtlasV2GroupsGroupIdUsersUserIdRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getApiAtlasV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdInvitesInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdInvitesInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdInvitesInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdIpAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdLimitsLimitNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdLimitsLimitNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdLimitsLimitNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdMongoDBVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAtlasV2GroupsGroupIdUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsByNameGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
