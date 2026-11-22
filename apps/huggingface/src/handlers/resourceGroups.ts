import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiOrganizationsNameResourceGroupsResourceGroupIdRoute,
  deleteApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameRoute,
  getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsRoute,
  getApiOrganizationsNameResourceGroupsResourceGroupIdRoute,
  getApiOrganizationsNameResourceGroupsRoute,
  getApiOrganizationsNameResourceGroupsSettingsRoute,
  patchApiOrganizationsNameResourceGroupsResourceGroupIdRoute,
  patchApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameRoute,
  postApiOrganizationsNameResourceGroupsResourceGroupIdInvitationIdResendRoute,
  postApiOrganizationsNameResourceGroupsResourceGroupIdInviteRoute,
  postApiOrganizationsNameResourceGroupsResourceGroupIdSettingsRoute,
  postApiOrganizationsNameResourceGroupsResourceGroupIdUsersRoute,
  postApiOrganizationsNameResourceGroupsRoute,
  postApiOrganizationsNameResourceGroupsSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourceGroupsHandler = app
  .openapi(patchApiOrganizationsNameResourceGroupsResourceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrganizationsNameResourceGroupsResourceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameResourceGroupsResourceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameResourceGroupsResourceGroupIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameResourceGroupsResourceGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameResourceGroupsResourceGroupIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameResourceGroupsResourceGroupIdInvitationIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameResourceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameResourceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrganizationsNameResourceGroupsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrganizationsNameResourceGroupsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
