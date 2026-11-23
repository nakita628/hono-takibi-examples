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
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1DevicesRouteHandler,
  getV1beta1GroupsLookupRouteHandler,
  getV1beta1GroupsRouteHandler,
  getV1beta1GroupsSearchRouteHandler,
  getV1beta1InboundSamlSsoProfilesRouteHandler,
  getV1beta1InboundSsoAssignmentsRouteHandler,
  getV1beta1NameIsInvitableUserRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentDeviceUsersRouteHandler,
  getV1beta1ParentIdpCredentialsRouteHandler,
  getV1beta1ParentLookupRouteHandler,
  getV1beta1ParentMembershipsCheckTransitiveMembershipRouteHandler,
  getV1beta1ParentMembershipsGetMembershipGraphRouteHandler,
  getV1beta1ParentMembershipsLookupRouteHandler,
  getV1beta1ParentMembershipsRouteHandler,
  getV1beta1ParentMembershipsSearchDirectGroupsRouteHandler,
  getV1beta1ParentMembershipsSearchTransitiveGroupsRouteHandler,
  getV1beta1ParentMembershipsSearchTransitiveMembershipsRouteHandler,
  getV1beta1ParentUserinvitationsRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1DevicesRouteHandler,
  postV1beta1GroupsRouteHandler,
  postV1beta1InboundSamlSsoProfilesRouteHandler,
  postV1beta1InboundSsoAssignmentsRouteHandler,
  postV1beta1NameApproveRouteHandler,
  postV1beta1NameBlockRouteHandler,
  postV1beta1NameCancelRouteHandler,
  postV1beta1NameCancelWipeRouteHandler,
  postV1beta1NameModifyMembershipRolesRouteHandler,
  postV1beta1NameMoveRouteHandler,
  postV1beta1NameSendRouteHandler,
  postV1beta1NameWipeRouteHandler,
  postV1beta1ParentIdpCredentialsAddRouteHandler,
  postV1beta1ParentMembershipsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1beta1DevicesRoute, getV1beta1DevicesRouteHandler)
  .openapi(postV1beta1DevicesRoute, postV1beta1DevicesRouteHandler)
  .openapi(getV1beta1GroupsRoute, getV1beta1GroupsRouteHandler)
  .openapi(postV1beta1GroupsRoute, postV1beta1GroupsRouteHandler)
  .openapi(getV1beta1GroupsLookupRoute, getV1beta1GroupsLookupRouteHandler)
  .openapi(getV1beta1GroupsSearchRoute, getV1beta1GroupsSearchRouteHandler)
  .openapi(getV1beta1InboundSamlSsoProfilesRoute, getV1beta1InboundSamlSsoProfilesRouteHandler)
  .openapi(postV1beta1InboundSamlSsoProfilesRoute, postV1beta1InboundSamlSsoProfilesRouteHandler)
  .openapi(getV1beta1InboundSsoAssignmentsRoute, getV1beta1InboundSsoAssignmentsRouteHandler)
  .openapi(postV1beta1InboundSsoAssignmentsRoute, postV1beta1InboundSsoAssignmentsRouteHandler)
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(postV1beta1NameApproveRoute, postV1beta1NameApproveRouteHandler)
  .openapi(postV1beta1NameBlockRoute, postV1beta1NameBlockRouteHandler)
  .openapi(postV1beta1NameCancelRoute, postV1beta1NameCancelRouteHandler)
  .openapi(postV1beta1NameCancelWipeRoute, postV1beta1NameCancelWipeRouteHandler)
  .openapi(getV1beta1NameIsInvitableUserRoute, getV1beta1NameIsInvitableUserRouteHandler)
  .openapi(
    postV1beta1NameModifyMembershipRolesRoute,
    postV1beta1NameModifyMembershipRolesRouteHandler,
  )
  .openapi(postV1beta1NameMoveRoute, postV1beta1NameMoveRouteHandler)
  .openapi(postV1beta1NameSendRoute, postV1beta1NameSendRouteHandler)
  .openapi(postV1beta1NameWipeRoute, postV1beta1NameWipeRouteHandler)
  .openapi(getV1beta1ParentDeviceUsersRoute, getV1beta1ParentDeviceUsersRouteHandler)
  .openapi(getV1beta1ParentIdpCredentialsRoute, getV1beta1ParentIdpCredentialsRouteHandler)
  .openapi(postV1beta1ParentIdpCredentialsAddRoute, postV1beta1ParentIdpCredentialsAddRouteHandler)
  .openapi(getV1beta1ParentMembershipsRoute, getV1beta1ParentMembershipsRouteHandler)
  .openapi(postV1beta1ParentMembershipsRoute, postV1beta1ParentMembershipsRouteHandler)
  .openapi(
    getV1beta1ParentMembershipsCheckTransitiveMembershipRoute,
    getV1beta1ParentMembershipsCheckTransitiveMembershipRouteHandler,
  )
  .openapi(
    getV1beta1ParentMembershipsGetMembershipGraphRoute,
    getV1beta1ParentMembershipsGetMembershipGraphRouteHandler,
  )
  .openapi(getV1beta1ParentMembershipsLookupRoute, getV1beta1ParentMembershipsLookupRouteHandler)
  .openapi(
    getV1beta1ParentMembershipsSearchDirectGroupsRoute,
    getV1beta1ParentMembershipsSearchDirectGroupsRouteHandler,
  )
  .openapi(
    getV1beta1ParentMembershipsSearchTransitiveGroupsRoute,
    getV1beta1ParentMembershipsSearchTransitiveGroupsRouteHandler,
  )
  .openapi(
    getV1beta1ParentMembershipsSearchTransitiveMembershipsRoute,
    getV1beta1ParentMembershipsSearchTransitiveMembershipsRouteHandler,
  )
  .openapi(getV1beta1ParentUserinvitationsRoute, getV1beta1ParentUserinvitationsRouteHandler)
  .openapi(getV1beta1ParentLookupRoute, getV1beta1ParentLookupRouteHandler)

export default app
