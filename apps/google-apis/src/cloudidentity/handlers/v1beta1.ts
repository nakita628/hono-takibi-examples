import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1DevicesRoute,
  getV1beta1GroupsLookupRoute,
  getV1beta1GroupsRoute,
  getV1beta1GroupsSearchRoute,
  getV1beta1InboundSamlSsoProfilesRoute,
  getV1beta1InboundSsoAssignmentsRoute,
  getV1beta1NameIsInvitableUserRoute,
  getV1beta1NameRoute,
  getV1beta1ParentDeviceUsersRoute,
  getV1beta1ParentIdpCredentialsRoute,
  getV1beta1ParentLookupRoute,
  getV1beta1ParentMembershipsCheckTransitiveMembershipRoute,
  getV1beta1ParentMembershipsGetMembershipGraphRoute,
  getV1beta1ParentMembershipsLookupRoute,
  getV1beta1ParentMembershipsRoute,
  getV1beta1ParentMembershipsSearchDirectGroupsRoute,
  getV1beta1ParentMembershipsSearchTransitiveGroupsRoute,
  getV1beta1ParentMembershipsSearchTransitiveMembershipsRoute,
  getV1beta1ParentUserinvitationsRoute,
  patchV1beta1NameRoute,
  postV1beta1DevicesRoute,
  postV1beta1GroupsRoute,
  postV1beta1InboundSamlSsoProfilesRoute,
  postV1beta1InboundSsoAssignmentsRoute,
  postV1beta1NameApproveRoute,
  postV1beta1NameBlockRoute,
  postV1beta1NameCancelRoute,
  postV1beta1NameCancelWipeRoute,
  postV1beta1NameModifyMembershipRolesRoute,
  postV1beta1NameMoveRoute,
  postV1beta1NameSendRoute,
  postV1beta1NameWipeRoute,
  postV1beta1ParentIdpCredentialsAddRoute,
  postV1beta1ParentMembershipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(getV1beta1DevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1DevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1GroupsLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1GroupsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1InboundSamlSsoProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1InboundSamlSsoProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1InboundSsoAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1InboundSsoAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameCancelWipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameIsInvitableUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameModifyMembershipRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameWipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentDeviceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentIdpCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentIdpCredentialsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMembershipsCheckTransitiveMembershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMembershipsGetMembershipGraphRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMembershipsLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMembershipsSearchDirectGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMembershipsSearchTransitiveGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMembershipsSearchTransitiveMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentUserinvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
