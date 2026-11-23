import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdOtelConfigRoute,
  deleteOrganizationsOrganizationIdRolesRoleIdRoute,
  deleteOrganizationsOrganizationIdRoute,
  deleteOrganizationsOrganizationIdUsersUserIdRoute,
  getOrganizationsInvitationsCountRoute,
  getOrganizationsInvitationsRoute,
  getOrganizationsOrganizationIdInvitationsRoute,
  getOrganizationsOrganizationIdOtelConfigRoute,
  getOrganizationsOrganizationIdRolesRoute,
  getOrganizationsOrganizationIdRoute,
  getOrganizationsOrganizationIdUsageRoute,
  getOrganizationsOrganizationIdUsersRoute,
  getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenRoute,
  getOrganizationsRoute,
  patchOrganizationsOrganizationIdDefaultRegionRoute,
  patchOrganizationsOrganizationIdQuotaRegionIdRoute,
  patchOrganizationsOrganizationIdQuotaRoute,
  postOrganizationsInvitationsInvitationIdAcceptRoute,
  postOrganizationsInvitationsInvitationIdDeclineRoute,
  postOrganizationsOrganizationIdInvitationsInvitationIdCancelRoute,
  postOrganizationsOrganizationIdInvitationsRoute,
  postOrganizationsOrganizationIdLeaveRoute,
  postOrganizationsOrganizationIdRolesRoute,
  postOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgressRoute,
  postOrganizationsOrganizationIdSuspendRoute,
  postOrganizationsOrganizationIdUnsuspendRoute,
  postOrganizationsOrganizationIdUsersUserIdAccessRoute,
  postOrganizationsRoute,
  putOrganizationsOrganizationIdExperimentalConfigRoute,
  putOrganizationsOrganizationIdInvitationsInvitationIdRoute,
  putOrganizationsOrganizationIdOtelConfigRoute,
  putOrganizationsOrganizationIdRolesRoleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsInvitationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsInvitationsInvitationIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsInvitationsInvitationIdDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdDefaultRegionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdQuotaRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdUnsuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOtelConfigBySandboxAuthTokenAuthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOtelConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOtelConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOtelConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdSandboxDefaultLimitedNetworkEgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdExperimentalConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdUsersUserIdAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdInvitationsInvitationIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
