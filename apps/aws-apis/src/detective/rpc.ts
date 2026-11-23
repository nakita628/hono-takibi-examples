import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putInvitation(
  args: InferRequestType<typeof client.invitation.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitation.$put(args, options))
}

export async function postGraphDatasourcesGet(
  args: InferRequestType<typeof client.graph.datasources.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.graph.datasources.get.$post(args, options))
}

export async function postMembershipDatasourcesGet(
  args: InferRequestType<typeof client.membership.datasources.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.membership.datasources.get.$post(args, options))
}

export async function postGraph(
  args: InferRequestType<typeof client.graph.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.graph.$post(args, options))
}

export async function postGraphMembers(
  args: InferRequestType<typeof client.graph.members.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.graph.members.$post(args, options))
}

export async function postGraphRemoval(
  args: InferRequestType<typeof client.graph.removal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.graph.removal.$post(args, options))
}

export async function postGraphMembersRemoval(
  args: InferRequestType<typeof client.graph.members.removal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.graph.members.removal.$post(args, options))
}

export async function postOrgsDescribeOrganizationConfiguration(
  args: InferRequestType<typeof client.orgs.describeOrganizationConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs.describeOrganizationConfiguration.$post(args, options))
}

export async function postOrgsDisableAdminAccount(
  args: InferRequestType<typeof client.orgs.disableAdminAccount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs.disableAdminAccount.$post(args, options))
}

export async function postMembershipRemoval(
  args: InferRequestType<typeof client.membership.removal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.membership.removal.$post(args, options))
}

export async function postOrgsEnableAdminAccount(
  args: InferRequestType<typeof client.orgs.enableAdminAccount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs.enableAdminAccount.$post(args, options))
}

export async function postGraphMembersGet(
  args: InferRequestType<typeof client.graph.members.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.graph.members.get.$post(args, options))
}

export async function postGraphDatasourcesList(
  args: InferRequestType<typeof client.graph.datasources.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.graph.datasources.list.$post(args, options))
}

export async function postGraphsList(
  args: InferRequestType<typeof client.graphs.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.graphs.list.$post(args, options))
}

export async function postInvitationsList(
  args: InferRequestType<typeof client.invitations.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations.list.$post(args, options))
}

export async function postGraphMembersList(
  args: InferRequestType<typeof client.graph.members.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.graph.members.list.$post(args, options))
}

export async function postOrgsAdminAccountslist(
  args: InferRequestType<typeof client.orgs.adminAccountslist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs.adminAccountslist.$post(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$post(args, options))
}

export async function postInvitationRemoval(
  args: InferRequestType<typeof client.invitation.removal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitation.removal.$post(args, options))
}

export async function postGraphMemberMonitoringstate(
  args: InferRequestType<typeof client.graph.member.monitoringstate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.graph.member.monitoringstate.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
}

export async function postGraphDatasourcesUpdate(
  args: InferRequestType<typeof client.graph.datasources.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.graph.datasources.update.$post(args, options))
}

export async function postOrgsUpdateOrganizationConfiguration(
  args: InferRequestType<typeof client.orgs.updateOrganizationConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orgs.updateOrganizationConfiguration.$post(args, options))
}
