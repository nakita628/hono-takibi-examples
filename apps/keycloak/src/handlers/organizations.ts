import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersUserIdRoute,
  deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute,
  deleteAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute,
  deleteAdminRealmsRealmOrganizationsOrgIdInvitationsIdRoute,
  deleteAdminRealmsRealmOrganizationsOrgIdMembersMemberIdRoute,
  deleteAdminRealmsRealmOrganizationsOrgIdRoute,
  getAdminRealmsRealmOrganizationsCountRoute,
  getAdminRealmsRealmOrganizationsMembersMemberIdOrganizationsRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupByPathPathRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdChildrenRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsRoute,
  getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasGroupsRoute,
  getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute,
  getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersRoute,
  getAdminRealmsRealmOrganizationsOrgIdInvitationsIdRoute,
  getAdminRealmsRealmOrganizationsOrgIdInvitationsRoute,
  getAdminRealmsRealmOrganizationsOrgIdMembersCountRoute,
  getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdGroupsRoute,
  getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdOrganizationsRoute,
  getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdRoute,
  getAdminRealmsRealmOrganizationsOrgIdMembersRoute,
  getAdminRealmsRealmOrganizationsOrgIdRoute,
  getAdminRealmsRealmOrganizationsRoute,
  postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdChildrenRoute,
  postAdminRealmsRealmOrganizationsOrgIdGroupsRoute,
  postAdminRealmsRealmOrganizationsOrgIdIdentityProvidersRoute,
  postAdminRealmsRealmOrganizationsOrgIdInvitationsIdResendRoute,
  postAdminRealmsRealmOrganizationsOrgIdMembersInviteExistingUserRoute,
  postAdminRealmsRealmOrganizationsOrgIdMembersInviteUserRoute,
  postAdminRealmsRealmOrganizationsOrgIdMembersRoute,
  postAdminRealmsRealmOrganizationsRoute,
  putAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersUserIdRoute,
  putAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute,
  putAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute,
  putAdminRealmsRealmOrganizationsOrgIdMembersMemberIdMembershipTypeRoute,
  putAdminRealmsRealmOrganizationsOrgIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getAdminRealmsRealmOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsMembersMemberIdOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmOrganizationsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmOrganizationsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsOrgIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdGroupsGroupByPathPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsOrgIdIdentityProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdInvitationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmOrganizationsOrgIdInvitationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsOrgIdInvitationsIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsOrgIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsOrgIdMembersInviteExistingUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsOrgIdMembersInviteUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmOrganizationsOrgIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmOrganizationsOrgIdMembersMemberIdMembershipTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
