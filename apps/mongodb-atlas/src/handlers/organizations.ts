import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2OrgsOrgIdInvitesInvitationIdRoute,
  deleteApiAtlasV2OrgsOrgIdRoute,
  getApiAtlasV2OrgsOrgIdDelegationSettingsRoute,
  getApiAtlasV2OrgsOrgIdGroupsRoute,
  getApiAtlasV2OrgsOrgIdInvitesInvitationIdRoute,
  getApiAtlasV2OrgsOrgIdInvitesRoute,
  getApiAtlasV2OrgsOrgIdMaintenanceSettingsRoute,
  getApiAtlasV2OrgsOrgIdRoute,
  getApiAtlasV2OrgsOrgIdSettingsRoute,
  getApiAtlasV2OrgsRoute,
  patchApiAtlasV2OrgsOrgIdDelegationSettingsRoute,
  patchApiAtlasV2OrgsOrgIdInvitesInvitationIdRoute,
  patchApiAtlasV2OrgsOrgIdInvitesRoute,
  patchApiAtlasV2OrgsOrgIdMaintenanceSettingsRoute,
  patchApiAtlasV2OrgsOrgIdRoute,
  patchApiAtlasV2OrgsOrgIdSettingsRoute,
  postApiAtlasV2OrgsOrgIdInvitesRoute,
  postApiAtlasV2OrgsOrgIdMaintenanceSettingsResetRoute,
  postApiAtlasV2OrgsRoute,
  putApiAtlasV2OrgsOrgIdUsersUserIdRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getApiAtlasV2OrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2OrgsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2OrgsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdDelegationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2OrgsOrgIdDelegationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2OrgsOrgIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2OrgsOrgIdInvitesInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdInvitesInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2OrgsOrgIdInvitesInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdMaintenanceSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2OrgsOrgIdMaintenanceSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdMaintenanceSettingsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2OrgsOrgIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAtlasV2OrgsOrgIdUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
