import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1Devices(
  args: InferRequestType<typeof client.v1beta1.devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.devices.$get(args, options))
}

export async function postV1beta1Devices(
  args: InferRequestType<typeof client.v1beta1.devices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.devices.$post(args, options))
}

export async function getV1beta1Groups(
  args: InferRequestType<typeof client.v1beta1.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.groups.$get(args, options))
}

export async function postV1beta1Groups(
  args: InferRequestType<typeof client.v1beta1.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.groups.$post(args, options))
}

export async function getV1beta1GroupsLookup(
  args: InferRequestType<(typeof client.v1beta1)['groups:lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1['groups:lookup'].$get(args, options))
}

export async function getV1beta1GroupsSearch(
  args: InferRequestType<(typeof client.v1beta1)['groups:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1['groups:search'].$get(args, options))
}

export async function getV1beta1InboundSamlSsoProfiles(
  args: InferRequestType<typeof client.v1beta1.inboundSamlSsoProfiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.inboundSamlSsoProfiles.$get(args, options))
}

export async function postV1beta1InboundSamlSsoProfiles(
  args: InferRequestType<typeof client.v1beta1.inboundSamlSsoProfiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.inboundSamlSsoProfiles.$post(args, options))
}

export async function getV1beta1InboundSsoAssignments(
  args: InferRequestType<typeof client.v1beta1.inboundSsoAssignments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.inboundSsoAssignments.$get(args, options))
}

export async function postV1beta1InboundSsoAssignments(
  args: InferRequestType<typeof client.v1beta1.inboundSsoAssignments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1.inboundSsoAssignments.$post(args, options))
}

export async function getV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$get(args, options))
}

export async function deleteV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$delete(args, options))
}

export async function patchV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$patch(args, options))
}

export async function postV1beta1NameApprove(
  args: InferRequestType<(typeof client.v1beta1)[':name:approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:approve'].$post(args, options))
}

export async function postV1beta1NameBlock(
  args: InferRequestType<(typeof client.v1beta1)[':name:block']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:block'].$post(args, options))
}

export async function postV1beta1NameCancel(
  args: InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:cancel'].$post(args, options))
}

export async function postV1beta1NameCancelWipe(
  args: InferRequestType<(typeof client.v1beta1)[':name:cancelWipe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:cancelWipe'].$post(args, options))
}

export async function getV1beta1NameIsInvitableUser(
  args: InferRequestType<(typeof client.v1beta1)[':name:isInvitableUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:isInvitableUser'].$get(args, options))
}

export async function postV1beta1NameModifyMembershipRoles(
  args: InferRequestType<(typeof client.v1beta1)[':name:modifyMembershipRoles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:modifyMembershipRoles'].$post(args, options))
}

export async function postV1beta1NameMove(
  args: InferRequestType<(typeof client.v1beta1)[':name:move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:move'].$post(args, options))
}

export async function postV1beta1NameSend(
  args: InferRequestType<(typeof client.v1beta1)[':name:send']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:send'].$post(args, options))
}

export async function postV1beta1NameWipe(
  args: InferRequestType<(typeof client.v1beta1)[':name:wipe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:wipe'].$post(args, options))
}

export async function getV1beta1ParentDeviceUsers(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['deviceUsers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].deviceUsers.$get(args, options))
}

export async function getV1beta1ParentIdpCredentials(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['idpCredentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].idpCredentials.$get(args, options))
}

export async function postV1beta1ParentIdpCredentialsAdd(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['idpCredentials:add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['idpCredentials:add'].$post(args, options))
}

export async function getV1beta1ParentMemberships(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].memberships.$get(args, options))
}

export async function postV1beta1ParentMemberships(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['memberships']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].memberships.$post(args, options))
}

export async function getV1beta1ParentMembershipsCheckTransitiveMembership(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:checkTransitiveMembership']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent']['memberships:checkTransitiveMembership'].$get(args, options),
  )
}

export async function getV1beta1ParentMembershipsGetMembershipGraph(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:getMembershipGraph']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent']['memberships:getMembershipGraph'].$get(args, options),
  )
}

export async function getV1beta1ParentMembershipsLookup(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['memberships:lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent']['memberships:lookup'].$get(args, options))
}

export async function getV1beta1ParentMembershipsSearchDirectGroups(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:searchDirectGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent']['memberships:searchDirectGroups'].$get(args, options),
  )
}

export async function getV1beta1ParentMembershipsSearchTransitiveGroups(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:searchTransitiveGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent']['memberships:searchTransitiveGroups'].$get(args, options),
  )
}

export async function getV1beta1ParentMembershipsSearchTransitiveMemberships(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['memberships:searchTransitiveMemberships']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent']['memberships:searchTransitiveMemberships'].$get(args, options),
  )
}

export async function getV1beta1ParentUserinvitations(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['userinvitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].userinvitations.$get(args, options))
}

export async function getV1beta1ParentLookup(
  args: InferRequestType<(typeof client.v1beta1)[':parent:lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent:lookup'].$get(args, options))
}
