import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsIdOrgLogoRoute,
  deleteOrganizationsIdOrgMembersIdMemberAllRoute,
  deleteOrganizationsIdOrgMembersIdMemberRoute,
  deleteOrganizationsIdOrgPrefsAssociatedDomainRoute,
  deleteOrganizationsIdOrgPrefsOrgInviteRestrictRoute,
  deleteOrganizationsIdOrgRoute,
  getOrganizationsIdOrgActionsRoute,
  getOrganizationsIdOrgBoardsFilterRoute,
  getOrganizationsIdOrgBoardsRoute,
  getOrganizationsIdOrgDeltasRoute,
  getOrganizationsIdOrgFieldRoute,
  getOrganizationsIdOrgMembersFilterRoute,
  getOrganizationsIdOrgMembershipsIdMembershipRoute,
  getOrganizationsIdOrgMembershipsRoute,
  getOrganizationsIdOrgMembersIdMemberCardsRoute,
  getOrganizationsIdOrgMembersInvitedFieldRoute,
  getOrganizationsIdOrgMembersInvitedRoute,
  getOrganizationsIdOrgMembersRoute,
  getOrganizationsIdOrgRoute,
  postOrganizationsIdOrgLogoRoute,
  postOrganizationsRoute,
  putOrganizationsIdOrgDescRoute,
  putOrganizationsIdOrgDisplayNameRoute,
  putOrganizationsIdOrgMembershipsIdMembershipRoute,
  putOrganizationsIdOrgMembersIdMemberDeactivatedRoute,
  putOrganizationsIdOrgMembersIdMemberRoute,
  putOrganizationsIdOrgMembersRoute,
  putOrganizationsIdOrgNameRoute,
  putOrganizationsIdOrgPrefsAssociatedDomainRoute,
  putOrganizationsIdOrgPrefsBoardVisibilityRestrictOrgRoute,
  putOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivateRoute,
  putOrganizationsIdOrgPrefsBoardVisibilityRestrictPublicRoute,
  putOrganizationsIdOrgPrefsExternalMembersDisabledRoute,
  putOrganizationsIdOrgPrefsGoogleAppsVersionRoute,
  putOrganizationsIdOrgPrefsOrgInviteRestrictRoute,
  putOrganizationsIdOrgPrefsPermissionLevelRoute,
  putOrganizationsIdOrgRoute,
  putOrganizationsIdOrgWebsiteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationHandler = app
  .openapi(postOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsIdOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdOrgActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdOrgBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdOrgBoardsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdOrgDeltasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdOrgDescRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdOrgDisplayNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsIdOrgLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsIdOrgLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdOrgMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdOrgMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdOrgMembersFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsIdOrgMembersIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdOrgMembersIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsIdOrgMembersIdMemberAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdOrgMembersIdMemberCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdOrgMembersIdMemberDeactivatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdOrgMembersInvitedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdOrgMembersInvitedFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdOrgMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdOrgMembershipsIdMembershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdOrgMembershipsIdMembershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdOrgNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsIdOrgPrefsAssociatedDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdOrgPrefsAssociatedDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdOrgPrefsBoardVisibilityRestrictOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdOrgPrefsBoardVisibilityRestrictPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdOrgPrefsExternalMembersDisabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdOrgPrefsGoogleAppsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsIdOrgPrefsOrgInviteRestrictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdOrgPrefsOrgInviteRestrictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdOrgPrefsPermissionLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsIdOrgWebsiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdOrgFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
