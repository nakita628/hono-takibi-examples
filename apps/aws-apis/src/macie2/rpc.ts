import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postInvitationsAccept(
  args: InferRequestType<typeof client.invitations.accept.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations.accept.$post(args, options))
}

export async function postCustomDataIdentifiersGet(
  args: InferRequestType<(typeof client)['custom-data-identifiers']['get']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['custom-data-identifiers'].get.$post(args, options))
}

export async function getAllowLists(
  args: InferRequestType<(typeof client)['allow-lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['allow-lists'].$get(args, options))
}

export async function postAllowLists(
  args: InferRequestType<(typeof client)['allow-lists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['allow-lists'].$post(args, options))
}

export async function postJobs(
  args: InferRequestType<typeof client.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.$post(args, options))
}

export async function postCustomDataIdentifiers(
  args: InferRequestType<(typeof client)['custom-data-identifiers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['custom-data-identifiers'].$post(args, options))
}

export async function getFindingsfilters(
  args: InferRequestType<typeof client.findingsfilters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findingsfilters.$get(args, options))
}

export async function postFindingsfilters(
  args: InferRequestType<typeof client.findingsfilters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findingsfilters.$post(args, options))
}

export async function getInvitations(
  args: InferRequestType<typeof client.invitations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations.$get(args, options))
}

export async function postInvitations(
  args: InferRequestType<typeof client.invitations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations.$post(args, options))
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

export async function postFindingsSample(
  args: InferRequestType<typeof client.findings.sample.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findings.sample.$post(args, options))
}

export async function postInvitationsDecline(
  args: InferRequestType<typeof client.invitations.decline.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations.decline.$post(args, options))
}

export async function getAllowListsId(
  args: InferRequestType<(typeof client)['allow-lists'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['allow-lists'][':id'].$get(args, options))
}

export async function putAllowListsId(
  args: InferRequestType<(typeof client)['allow-lists'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['allow-lists'][':id'].$put(args, options))
}

export async function deleteAllowListsId(
  args: InferRequestType<(typeof client)['allow-lists'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['allow-lists'][':id'].$delete(args, options))
}

export async function getCustomDataIdentifiersId(
  args: InferRequestType<(typeof client)['custom-data-identifiers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['custom-data-identifiers'][':id'].$get(args, options))
}

export async function deleteCustomDataIdentifiersId(
  args: InferRequestType<(typeof client)['custom-data-identifiers'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['custom-data-identifiers'][':id'].$delete(args, options))
}

export async function getFindingsfiltersId(
  args: InferRequestType<(typeof client.findingsfilters)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findingsfilters[':id'].$get(args, options))
}

export async function deleteFindingsfiltersId(
  args: InferRequestType<(typeof client.findingsfilters)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findingsfilters[':id'].$delete(args, options))
}

export async function patchFindingsfiltersId(
  args: InferRequestType<(typeof client.findingsfilters)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findingsfilters[':id'].$patch(args, options))
}

export async function postInvitationsDelete(
  args: InferRequestType<typeof client.invitations.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations.delete.$post(args, options))
}

export async function getMembersId(
  args: InferRequestType<(typeof client.members)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].$get(args, options))
}

export async function deleteMembersId(
  args: InferRequestType<(typeof client.members)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members[':id'].$delete(args, options))
}

export async function postDatasourcesS3(
  args: InferRequestType<typeof client.datasources.s3.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources.s3.$post(args, options))
}

export async function getJobsJobId(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].$get(args, options))
}

export async function patchJobsJobId(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].$patch(args, options))
}

export async function getAdminConfiguration(
  args: InferRequestType<typeof client.admin.configuration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.configuration.$get(args, options))
}

export async function patchAdminConfiguration(
  args: InferRequestType<typeof client.admin.configuration.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.configuration.$patch(args, options))
}

export async function getMacie(
  args: InferRequestType<typeof client.macie.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.macie.$get(args, options))
}

export async function postMacie(
  args: InferRequestType<typeof client.macie.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.macie.$post(args, options))
}

export async function deleteMacie(
  args: InferRequestType<typeof client.macie.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.macie.$delete(args, options))
}

export async function patchMacie(
  args: InferRequestType<typeof client.macie.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.macie.$patch(args, options))
}

export async function deleteAdminAdminAccountId(
  args: InferRequestType<(typeof client)['admin#adminAccountId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['admin#adminAccountId'].$delete(args, options))
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

export async function postMembersDisassociateId(
  args: InferRequestType<(typeof client.members.disassociate)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.members.disassociate[':id'].$post(args, options))
}

export async function getAdmin(
  args: InferRequestType<typeof client.admin.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.$get(args, options))
}

export async function postAdmin(
  args: InferRequestType<typeof client.admin.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.$post(args, options))
}

export async function getAdministrator(
  args: InferRequestType<typeof client.administrator.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administrator.$get(args, options))
}

export async function getAutomatedDiscoveryConfiguration(
  args: InferRequestType<(typeof client)['automated-discovery']['configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['automated-discovery'].configuration.$get(args, options))
}

export async function putAutomatedDiscoveryConfiguration(
  args: InferRequestType<(typeof client)['automated-discovery']['configuration']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['automated-discovery'].configuration.$put(args, options))
}

export async function postDatasourcesS3Statistics(
  args: InferRequestType<typeof client.datasources.s3.statistics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources.s3.statistics.$post(args, options))
}

export async function getClassificationExportConfiguration(
  args: InferRequestType<(typeof client)['classification-export-configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['classification-export-configuration'].$get(args, options))
}

export async function putClassificationExportConfiguration(
  args: InferRequestType<(typeof client)['classification-export-configuration']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['classification-export-configuration'].$put(args, options))
}

export async function getClassificationScopesId(
  args: InferRequestType<(typeof client)['classification-scopes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['classification-scopes'][':id'].$get(args, options))
}

export async function patchClassificationScopesId(
  args: InferRequestType<(typeof client)['classification-scopes'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['classification-scopes'][':id'].$patch(args, options))
}

export async function postFindingsStatistics(
  args: InferRequestType<typeof client.findings.statistics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findings.statistics.$post(args, options))
}

export async function postFindingsDescribe(
  args: InferRequestType<typeof client.findings.describe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findings.describe.$post(args, options))
}

export async function getFindingsPublicationConfiguration(
  args: InferRequestType<(typeof client)['findings-publication-configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['findings-publication-configuration'].$get(args, options))
}

export async function putFindingsPublicationConfiguration(
  args: InferRequestType<(typeof client)['findings-publication-configuration']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['findings-publication-configuration'].$put(args, options))
}

export async function getInvitationsCount(
  args: InferRequestType<typeof client.invitations.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations.count.$get(args, options))
}

export async function getMaster(
  args: InferRequestType<typeof client.master.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.master.$get(args, options))
}

export async function getResourceProfilesResourceArn(
  args: InferRequestType<(typeof client)['resource-profiles#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['resource-profiles#resourceArn'].$get(args, options))
}

export async function patchResourceProfilesResourceArn(
  args: InferRequestType<(typeof client)['resource-profiles#resourceArn']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['resource-profiles#resourceArn'].$patch(args, options))
}

export async function getRevealConfiguration(
  args: InferRequestType<(typeof client)['reveal-configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reveal-configuration'].$get(args, options))
}

export async function putRevealConfiguration(
  args: InferRequestType<(typeof client)['reveal-configuration']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reveal-configuration'].$put(args, options))
}

export async function getFindingsFindingIdReveal(
  args: InferRequestType<(typeof client.findings)[':findingId']['reveal']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findings[':findingId'].reveal.$get(args, options))
}

export async function getFindingsFindingIdRevealAvailability(
  args: InferRequestType<(typeof client.findings)[':findingId']['reveal']['availability']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findings[':findingId'].reveal.availability.$get(args, options))
}

export async function getTemplatesSensitivityInspectionsId(
  args: InferRequestType<(typeof client.templates)['sensitivity-inspections'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates['sensitivity-inspections'][':id'].$get(args, options))
}

export async function putTemplatesSensitivityInspectionsId(
  args: InferRequestType<(typeof client.templates)['sensitivity-inspections'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates['sensitivity-inspections'][':id'].$put(args, options))
}

export async function postUsageStatistics(
  args: InferRequestType<typeof client.usage.statistics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usage.statistics.$post(args, options))
}

export async function getUsage(
  args: InferRequestType<typeof client.usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usage.$get(args, options))
}

export async function postJobsList(
  args: InferRequestType<typeof client.jobs.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.list.$post(args, options))
}

export async function getClassificationScopes(
  args: InferRequestType<(typeof client)['classification-scopes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['classification-scopes'].$get(args, options))
}

export async function postCustomDataIdentifiersList(
  args: InferRequestType<(typeof client)['custom-data-identifiers']['list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['custom-data-identifiers'].list.$post(args, options))
}

export async function postFindings(
  args: InferRequestType<typeof client.findings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.findings.$post(args, options))
}

export async function postManagedDataIdentifiersList(
  args: InferRequestType<(typeof client)['managed-data-identifiers']['list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['managed-data-identifiers'].list.$post(args, options))
}

export async function getResourceProfilesArtifactsResourceArn(
  args: InferRequestType<(typeof client)['resource-profiles']['artifacts#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['resource-profiles']['artifacts#resourceArn'].$get(args, options),
  )
}

export async function getResourceProfilesDetectionsResourceArn(
  args: InferRequestType<(typeof client)['resource-profiles']['detections#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['resource-profiles']['detections#resourceArn'].$get(args, options),
  )
}

export async function patchResourceProfilesDetectionsResourceArn(
  args: InferRequestType<(typeof client)['resource-profiles']['detections#resourceArn']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['resource-profiles']['detections#resourceArn'].$patch(args, options),
  )
}

export async function getTemplatesSensitivityInspections(
  args: InferRequestType<(typeof client.templates)['sensitivity-inspections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates['sensitivity-inspections'].$get(args, options))
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

export async function postDatasourcesSearchResources(
  args: InferRequestType<(typeof client.datasources)['search-resources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources['search-resources'].$post(args, options))
}

export async function postCustomDataIdentifiersTest(
  args: InferRequestType<(typeof client)['custom-data-identifiers']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['custom-data-identifiers'].test.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function patchMacieMembersId(
  args: InferRequestType<(typeof client.macie.members)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.macie.members[':id'].$patch(args, options))
}
