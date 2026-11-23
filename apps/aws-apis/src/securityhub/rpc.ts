import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAdministrator(
  args: InferRequestType<typeof client.administrator.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administrator.$get(args, options))
}

export async function postAdministrator(
  args: InferRequestType<typeof client.administrator.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administrator.$post(args, options))
}

export async function getMaster(
  args: InferRequestType<typeof client.master.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.master.$get(args, options))
}

export async function postMaster(
  args: InferRequestType<typeof client.master.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.master.$post(args, options))
}

export async function postStandardsDeregister(
  args: InferRequestType<typeof client.standards.deregister.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.standards.deregister.$post(args, options))
}

export async function postStandardsRegister(
  args: InferRequestType<typeof client.standards.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.standards.register.$post(args, options))
}

export async function postSecurityControlsBatchGet(
  args: InferRequestType<typeof client.securityControls.batchGet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.securityControls.batchGet.$post(args, options))
}

export async function postAssociationsBatchGet(
  args: InferRequestType<typeof client.associations.batchGet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associations.batchGet.$post(args, options))
}

export async function postFindingsImport(
  args: InferRequestType<typeof client.findings.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findings.import.$post(args, options))
}

export async function patchFindingsBatchupdate(
  args: InferRequestType<typeof client.findings.batchupdate.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findings.batchupdate.$patch(args, options))
}

export async function patchAssociations(
  args: InferRequestType<typeof client.associations.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associations.$patch(args, options))
}

export async function postActionTargets(
  args: InferRequestType<typeof client.actionTargets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actionTargets.$post(args, options))
}

export async function postFindingAggregatorCreate(
  args: InferRequestType<typeof client.findingAggregator.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findingAggregator.create.$post(args, options))
}

export async function postInsights(
  args: InferRequestType<typeof client.insights.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights.$post(args, options))
}

export async function getMembers(
  args: InferRequestType<typeof client.members.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members.$get(args, options))
}

export async function postMembers(
  args: InferRequestType<typeof client.members.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members.$post(args, options))
}

export async function postInvitationsDecline(
  args: InferRequestType<typeof client.invitations.decline.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations.decline.$post(args, options))
}

export async function deleteActionTargetsActionTargetArn(
  args: InferRequestType<(typeof client.actionTargets)[':ActionTargetArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actionTargets[':ActionTargetArn'].$delete(args, options))
}

export async function patchActionTargetsActionTargetArn(
  args: InferRequestType<(typeof client.actionTargets)[':ActionTargetArn']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actionTargets[':ActionTargetArn'].$patch(args, options))
}

export async function deleteFindingAggregatorDeleteFindingAggregatorArn(
  args: InferRequestType<
    (typeof client.findingAggregator.delete)[':FindingAggregatorArn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.findingAggregator.delete[':FindingAggregatorArn'].$delete(args, options),
  )
}

export async function deleteInsightsInsightArn(
  args: InferRequestType<(typeof client.insights)[':InsightArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights[':InsightArn'].$delete(args, options))
}

export async function patchInsightsInsightArn(
  args: InferRequestType<(typeof client.insights)[':InsightArn']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights[':InsightArn'].$patch(args, options))
}

export async function postInvitationsDelete(
  args: InferRequestType<typeof client.invitations.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations.delete.$post(args, options))
}

export async function postMembersDelete(
  args: InferRequestType<typeof client.members.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members.delete.$post(args, options))
}

export async function postActionTargetsGet(
  args: InferRequestType<typeof client.actionTargets.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.actionTargets.get.$post(args, options))
}

export async function getAccounts(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$get(args, options))
}

export async function postAccounts(
  args: InferRequestType<typeof client.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$post(args, options))
}

export async function deleteAccounts(
  args: InferRequestType<typeof client.accounts.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$delete(args, options))
}

export async function patchAccounts(
  args: InferRequestType<typeof client.accounts.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$patch(args, options))
}

export async function getOrganizationConfiguration(
  args: InferRequestType<typeof client.organization.configuration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.configuration.$get(args, options))
}

export async function postOrganizationConfiguration(
  args: InferRequestType<typeof client.organization.configuration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.configuration.$post(args, options))
}

export async function getProducts(
  args: InferRequestType<typeof client.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.$get(args, options))
}

export async function getStandards(
  args: InferRequestType<typeof client.standards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.standards.$get(args, options))
}

export async function getStandardsControlsStandardsSubscriptionArn(
  args: InferRequestType<(typeof client.standards.controls)[':StandardsSubscriptionArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.standards.controls[':StandardsSubscriptionArn'].$get(args, options),
  )
}

export async function deleteProductSubscriptionsProductSubscriptionArn(
  args: InferRequestType<
    (typeof client.productSubscriptions)[':ProductSubscriptionArn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.productSubscriptions[':ProductSubscriptionArn'].$delete(args, options),
  )
}

export async function postOrganizationAdminDisable(
  args: InferRequestType<typeof client.organization.admin.disable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.admin.disable.$post(args, options))
}

export async function postAdministratorDisassociate(
  args: InferRequestType<typeof client.administrator.disassociate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administrator.disassociate.$post(args, options))
}

export async function postMasterDisassociate(
  args: InferRequestType<typeof client.master.disassociate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.master.disassociate.$post(args, options))
}

export async function postMembersDisassociate(
  args: InferRequestType<typeof client.members.disassociate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members.disassociate.$post(args, options))
}

export async function getProductSubscriptions(
  args: InferRequestType<typeof client.productSubscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.productSubscriptions.$get(args, options))
}

export async function postProductSubscriptions(
  args: InferRequestType<typeof client.productSubscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.productSubscriptions.$post(args, options))
}

export async function postOrganizationAdminEnable(
  args: InferRequestType<typeof client.organization.admin.enable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.admin.enable.$post(args, options))
}

export async function postStandardsGet(
  args: InferRequestType<typeof client.standards.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.standards.get.$post(args, options))
}

export async function getFindingAggregatorGetFindingAggregatorArn(
  args: InferRequestType<(typeof client.findingAggregator.get)[':FindingAggregatorArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.findingAggregator.get[':FindingAggregatorArn'].$get(args, options),
  )
}

export async function postFindings(
  args: InferRequestType<typeof client.findings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findings.$post(args, options))
}

export async function patchFindings(
  args: InferRequestType<typeof client.findings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findings.$patch(args, options))
}

export async function getInsightsResultsInsightArn(
  args: InferRequestType<(typeof client.insights.results)[':InsightArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights.results[':InsightArn'].$get(args, options))
}

export async function postInsightsGet(
  args: InferRequestType<typeof client.insights.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights.get.$post(args, options))
}

export async function getInvitationsCount(
  args: InferRequestType<typeof client.invitations.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations.count.$get(args, options))
}

export async function postMembersGet(
  args: InferRequestType<typeof client.members.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members.get.$post(args, options))
}

export async function postMembersInvite(
  args: InferRequestType<typeof client.members.invite.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members.invite.$post(args, options))
}

export async function getFindingAggregatorList(
  args: InferRequestType<typeof client.findingAggregator.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findingAggregator.list.$get(args, options))
}

export async function getInvitations(
  args: InferRequestType<typeof client.invitations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations.$get(args, options))
}

export async function getOrganizationAdmin(
  args: InferRequestType<typeof client.organization.admin.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.admin.$get(args, options))
}

export async function getSecurityControlsDefinitions(
  args: InferRequestType<typeof client.securityControls.definitions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.securityControls.definitions.$get(args, options))
}

export async function getAssociationsSecurityControlId(
  args: InferRequestType<(typeof client)['associations#SecurityControlId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['associations#SecurityControlId'].$get(args, options))
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

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
}

export async function patchFindingAggregatorUpdate(
  args: InferRequestType<typeof client.findingAggregator.update.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findingAggregator.update.$patch(args, options))
}

export async function patchStandardsControlStandardsControlArn(
  args: InferRequestType<(typeof client.standards.control)[':StandardsControlArn']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.standards.control[':StandardsControlArn'].$patch(args, options))
}
