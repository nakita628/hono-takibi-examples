import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccessors(
  args: InferRequestType<typeof client.accessors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accessors.$get(args, options))
}

export async function postAccessors(
  args: InferRequestType<typeof client.accessors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accessors.$post(args, options))
}

export async function getNetworksNetworkIdMembers(
  args: InferRequestType<(typeof client.networks)[':networkId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].members.$get(args, options))
}

export async function postNetworksNetworkIdMembers(
  args: InferRequestType<(typeof client.networks)[':networkId']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].members.$post(args, options))
}

export async function getNetworks(
  args: InferRequestType<typeof client.networks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks.$get(args, options))
}

export async function postNetworks(
  args: InferRequestType<typeof client.networks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks.$post(args, options))
}

export async function getNetworksNetworkIdNodes(
  args: InferRequestType<(typeof client.networks)[':networkId']['nodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].nodes.$get(args, options))
}

export async function postNetworksNetworkIdNodes(
  args: InferRequestType<(typeof client.networks)[':networkId']['nodes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].nodes.$post(args, options))
}

export async function getNetworksNetworkIdProposals(
  args: InferRequestType<(typeof client.networks)[':networkId']['proposals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].proposals.$get(args, options))
}

export async function postNetworksNetworkIdProposals(
  args: InferRequestType<(typeof client.networks)[':networkId']['proposals']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].proposals.$post(args, options))
}

export async function getAccessorsAccessorId(
  args: InferRequestType<(typeof client.accessors)[':AccessorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accessors[':AccessorId'].$get(args, options))
}

export async function deleteAccessorsAccessorId(
  args: InferRequestType<(typeof client.accessors)[':AccessorId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accessors[':AccessorId'].$delete(args, options))
}

export async function getNetworksNetworkIdMembersMemberId(
  args: InferRequestType<(typeof client.networks)[':networkId']['members'][':memberId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].members[':memberId'].$get(args, options))
}

export async function deleteNetworksNetworkIdMembersMemberId(
  args: InferRequestType<(typeof client.networks)[':networkId']['members'][':memberId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].members[':memberId'].$delete(args, options),
  )
}

export async function patchNetworksNetworkIdMembersMemberId(
  args: InferRequestType<(typeof client.networks)[':networkId']['members'][':memberId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].members[':memberId'].$patch(args, options),
  )
}

export async function getNetworksNetworkIdNodesNodeId(
  args: InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].nodes[':nodeId'].$get(args, options))
}

export async function deleteNetworksNetworkIdNodesNodeId(
  args: InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].nodes[':nodeId'].$delete(args, options))
}

export async function patchNetworksNetworkIdNodesNodeId(
  args: InferRequestType<(typeof client.networks)[':networkId']['nodes'][':nodeId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].nodes[':nodeId'].$patch(args, options))
}

export async function getNetworksNetworkId(
  args: InferRequestType<(typeof client.networks)[':networkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.networks[':networkId'].$get(args, options))
}

export async function getNetworksNetworkIdProposalsProposalId(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['proposals'][':proposalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].proposals[':proposalId'].$get(args, options),
  )
}

export async function getInvitations(
  args: InferRequestType<typeof client.invitations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations.$get(args, options))
}

export async function getNetworksNetworkIdProposalsProposalIdVotes(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].proposals[':proposalId'].votes.$get(args, options),
  )
}

export async function postNetworksNetworkIdProposalsProposalIdVotes(
  args: InferRequestType<
    (typeof client.networks)[':networkId']['proposals'][':proposalId']['votes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.networks[':networkId'].proposals[':proposalId'].votes.$post(args, options),
  )
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function deleteInvitationsInvitationId(
  args: InferRequestType<(typeof client.invitations)[':invitationId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations[':invitationId'].$delete(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}
