import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1Organizations(
  args: InferRequestType<typeof client.v1.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.$post(args, options))
}

export async function postV1InstanceReportStatus(
  args: InferRequestType<(typeof client.v1)[':instance:reportStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':instance:reportStatus'].$post(args, options))
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function putV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$put(args, options))
}

export async function postV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$post(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function postV1NameAttributes(
  args: InferRequestType<(typeof client.v1)[':name']['attributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].attributes.$post(args, options))
}

export async function getV1NameCertificate(
  args: InferRequestType<(typeof client.v1)[':name']['certificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].certificate.$get(args, options))
}

export async function getV1NameCsr(
  args: InferRequestType<(typeof client.v1)[':name']['csr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].csr.$get(args, options))
}

export async function deleteV1NameData(
  args: InferRequestType<(typeof client.v1)[':name']['data']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].data.$delete(args, options))
}

export async function getV1NameDeployments(
  args: InferRequestType<(typeof client.v1)[':name']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].deployments.$get(args, options))
}

export async function postV1NameDeployments(
  args: InferRequestType<(typeof client.v1)[':name']['deployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].deployments.$post(args, options))
}

export async function deleteV1NameDeployments(
  args: InferRequestType<(typeof client.v1)[':name']['deployments']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].deployments.$delete(args, options))
}

export async function postV1NameDeploymentsGenerateDeployChangeReport(
  args: InferRequestType<
    (typeof client.v1)[':name']['deployments:generateDeployChangeReport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':name']['deployments:generateDeployChangeReport'].$post(args, options),
  )
}

export async function postV1NameDeploymentsGenerateUndeployChangeReport(
  args: InferRequestType<
    (typeof client.v1)[':name']['deployments:generateUndeployChangeReport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':name']['deployments:generateUndeployChangeReport'].$post(args, options),
  )
}

export async function getV1NameOperations(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].operations.$get(args, options))
}

export async function postV1NameActivate(
  args: InferRequestType<(typeof client.v1)[':name:activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:activate'].$post(args, options))
}

export async function postV1NameAdjust(
  args: InferRequestType<(typeof client.v1)[':name:adjust']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:adjust'].$post(args, options))
}

export async function postV1NameCredit(
  args: InferRequestType<(typeof client.v1)[':name:credit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:credit'].$post(args, options))
}

export async function postV1NameExpire(
  args: InferRequestType<(typeof client.v1)[':name:expire']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:expire'].$post(args, options))
}

export async function postV1NameGenerateDownloadUrl(
  args: InferRequestType<(typeof client.v1)[':name:generateDownloadUrl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:generateDownloadUrl'].$post(args, options))
}

export async function getV1NameGetProjectMapping(
  args: InferRequestType<(typeof client.v1)[':name:getProjectMapping']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:getProjectMapping'].$get(args, options))
}

export async function postV1NameGetSyncAuthorization(
  args: InferRequestType<(typeof client.v1)[':name:getSyncAuthorization']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:getSyncAuthorization'].$post(args, options))
}

export async function getV1NameListRevisions(
  args: InferRequestType<(typeof client.v1)[':name:listRevisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:listRevisions'].$get(args, options))
}

export async function postV1NameSetSyncAuthorization(
  args: InferRequestType<(typeof client.v1)[':name:setSyncAuthorization']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:setSyncAuthorization'].$post(args, options))
}

export async function postV1OrgenvSecurityStatsQueryTabularStats(
  args: InferRequestType<(typeof client.v1)[':orgenv']['securityStats:queryTabularStats']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':orgenv']['securityStats:queryTabularStats'].$post(args, options),
  )
}

export async function postV1OrgenvSecurityStatsQueryTimeSeriesStats(
  args: InferRequestType<
    (typeof client.v1)[':orgenv']['securityStats:queryTimeSeriesStats']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':orgenv']['securityStats:queryTimeSeriesStats'].$post(args, options),
  )
}

export async function postV1OrgSetAddons(
  args: InferRequestType<(typeof client.v1)[':org:setAddons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':org:setAddons'].$post(args, options))
}

export async function getV1Parent(
  args: InferRequestType<(typeof client.v1)[':parent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].$get(args, options))
}

export async function postV1ParentAliases(
  args: InferRequestType<(typeof client.v1)[':parent']['aliases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].aliases.$post(args, options))
}

export async function getV1ParentAnalyticsDatastores(
  args: InferRequestType<(typeof client.v1)[':parent']['analytics']['datastores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].analytics.datastores.$get(args, options))
}

export async function postV1ParentAnalyticsDatastores(
  args: InferRequestType<(typeof client.v1)[':parent']['analytics']['datastores']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].analytics.datastores.$post(args, options))
}

export async function postV1ParentAnalyticsDatastoresTest(
  args: InferRequestType<(typeof client.v1)[':parent']['analytics']['datastores:test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].analytics['datastores:test'].$post(args, options))
}

export async function getV1ParentAnalyticsExports(
  args: InferRequestType<(typeof client.v1)[':parent']['analytics']['exports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].analytics.exports.$get(args, options))
}

export async function postV1ParentAnalyticsExports(
  args: InferRequestType<(typeof client.v1)[':parent']['analytics']['exports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].analytics.exports.$post(args, options))
}

export async function getV1ParentApicategories(
  args: InferRequestType<(typeof client.v1)[':parent']['apicategories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].apicategories.$get(args, options))
}

export async function postV1ParentApicategories(
  args: InferRequestType<(typeof client.v1)[':parent']['apicategories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].apicategories.$post(args, options))
}

export async function getV1ParentApiproducts(
  args: InferRequestType<(typeof client.v1)[':parent']['apiproducts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].apiproducts.$get(args, options))
}

export async function postV1ParentApiproducts(
  args: InferRequestType<(typeof client.v1)[':parent']['apiproducts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].apiproducts.$post(args, options))
}

export async function getV1ParentApis(
  args: InferRequestType<(typeof client.v1)[':parent']['apis']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].apis.$get(args, options))
}

export async function postV1ParentApis(
  args: InferRequestType<(typeof client.v1)[':parent']['apis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].apis.$post(args, options))
}

export async function getV1ParentApps(
  args: InferRequestType<(typeof client.v1)[':parent']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].apps.$get(args, options))
}

export async function postV1ParentApps(
  args: InferRequestType<(typeof client.v1)[':parent']['apps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].apps.$post(args, options))
}

export async function getV1ParentArchiveDeployments(
  args: InferRequestType<(typeof client.v1)[':parent']['archiveDeployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].archiveDeployments.$get(args, options))
}

export async function postV1ParentArchiveDeployments(
  args: InferRequestType<(typeof client.v1)[':parent']['archiveDeployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].archiveDeployments.$post(args, options))
}

export async function postV1ParentArchiveDeploymentsGenerateUploadUrl(
  args: InferRequestType<
    (typeof client.v1)[':parent']['archiveDeployments:generateUploadUrl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent']['archiveDeployments:generateUploadUrl'].$post(args, options),
  )
}

export async function getV1ParentAttachments(
  args: InferRequestType<(typeof client.v1)[':parent']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].attachments.$get(args, options))
}

export async function postV1ParentAttachments(
  args: InferRequestType<(typeof client.v1)[':parent']['attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].attachments.$post(args, options))
}

export async function getV1ParentAttributes(
  args: InferRequestType<(typeof client.v1)[':parent']['attributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].attributes.$get(args, options))
}

export async function postV1ParentAttributes(
  args: InferRequestType<(typeof client.v1)[':parent']['attributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].attributes.$post(args, options))
}

export async function postV1ParentCanaryevaluations(
  args: InferRequestType<(typeof client.v1)[':parent']['canaryevaluations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].canaryevaluations.$post(args, options))
}

export async function getV1ParentDatacollectors(
  args: InferRequestType<(typeof client.v1)[':parent']['datacollectors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].datacollectors.$get(args, options))
}

export async function postV1ParentDatacollectors(
  args: InferRequestType<(typeof client.v1)[':parent']['datacollectors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].datacollectors.$post(args, options))
}

export async function getV1ParentDebugsessions(
  args: InferRequestType<(typeof client.v1)[':parent']['debugsessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].debugsessions.$get(args, options))
}

export async function postV1ParentDebugsessions(
  args: InferRequestType<(typeof client.v1)[':parent']['debugsessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].debugsessions.$post(args, options))
}

export async function getV1ParentDeployments(
  args: InferRequestType<(typeof client.v1)[':parent']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].deployments.$get(args, options))
}

export async function getV1ParentDevelopers(
  args: InferRequestType<(typeof client.v1)[':parent']['developers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].developers.$get(args, options))
}

export async function postV1ParentDevelopers(
  args: InferRequestType<(typeof client.v1)[':parent']['developers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].developers.$post(args, options))
}

export async function getV1ParentEndpointAttachments(
  args: InferRequestType<(typeof client.v1)[':parent']['endpointAttachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].endpointAttachments.$get(args, options))
}

export async function postV1ParentEndpointAttachments(
  args: InferRequestType<(typeof client.v1)[':parent']['endpointAttachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].endpointAttachments.$post(args, options))
}

export async function getV1ParentEntries(
  args: InferRequestType<(typeof client.v1)[':parent']['entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].entries.$get(args, options))
}

export async function postV1ParentEntries(
  args: InferRequestType<(typeof client.v1)[':parent']['entries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].entries.$post(args, options))
}

export async function getV1ParentEnvgroups(
  args: InferRequestType<(typeof client.v1)[':parent']['envgroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].envgroups.$get(args, options))
}

export async function postV1ParentEnvgroups(
  args: InferRequestType<(typeof client.v1)[':parent']['envgroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].envgroups.$post(args, options))
}

export async function postV1ParentEnvironments(
  args: InferRequestType<(typeof client.v1)[':parent']['environments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].environments.$post(args, options))
}

export async function getV1ParentHostQueries(
  args: InferRequestType<(typeof client.v1)[':parent']['hostQueries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].hostQueries.$get(args, options))
}

export async function postV1ParentHostQueries(
  args: InferRequestType<(typeof client.v1)[':parent']['hostQueries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].hostQueries.$post(args, options))
}

export async function getV1ParentHostSecurityReports(
  args: InferRequestType<(typeof client.v1)[':parent']['hostSecurityReports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].hostSecurityReports.$get(args, options))
}

export async function postV1ParentHostSecurityReports(
  args: InferRequestType<(typeof client.v1)[':parent']['hostSecurityReports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].hostSecurityReports.$post(args, options))
}

export async function getV1ParentInstances(
  args: InferRequestType<(typeof client.v1)[':parent']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].instances.$get(args, options))
}

export async function postV1ParentInstances(
  args: InferRequestType<(typeof client.v1)[':parent']['instances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].instances.$post(args, options))
}

export async function postV1ParentKeys(
  args: InferRequestType<(typeof client.v1)[':parent']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].keys.$post(args, options))
}

export async function postV1ParentKeysCreate(
  args: InferRequestType<(typeof client.v1)[':parent']['keys']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].keys.create.$post(args, options))
}

export async function postV1ParentKeystores(
  args: InferRequestType<(typeof client.v1)[':parent']['keystores']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].keystores.$post(args, options))
}

export async function postV1ParentKeyvaluemaps(
  args: InferRequestType<(typeof client.v1)[':parent']['keyvaluemaps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].keyvaluemaps.$post(args, options))
}

export async function getV1ParentNatAddresses(
  args: InferRequestType<(typeof client.v1)[':parent']['natAddresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].natAddresses.$get(args, options))
}

export async function postV1ParentNatAddresses(
  args: InferRequestType<(typeof client.v1)[':parent']['natAddresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].natAddresses.$post(args, options))
}

export async function getV1ParentOverrides(
  args: InferRequestType<(typeof client.v1)[':parent']['overrides']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].overrides.$get(args, options))
}

export async function postV1ParentOverrides(
  args: InferRequestType<(typeof client.v1)[':parent']['overrides']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].overrides.$post(args, options))
}

export async function getV1ParentQueries(
  args: InferRequestType<(typeof client.v1)[':parent']['queries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].queries.$get(args, options))
}

export async function postV1ParentQueries(
  args: InferRequestType<(typeof client.v1)[':parent']['queries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].queries.$post(args, options))
}

export async function getV1ParentRateplans(
  args: InferRequestType<(typeof client.v1)[':parent']['rateplans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].rateplans.$get(args, options))
}

export async function postV1ParentRateplans(
  args: InferRequestType<(typeof client.v1)[':parent']['rateplans']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].rateplans.$post(args, options))
}

export async function postV1ParentReferences(
  args: InferRequestType<(typeof client.v1)[':parent']['references']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].references.$post(args, options))
}

export async function getV1ParentReports(
  args: InferRequestType<(typeof client.v1)[':parent']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].reports.$get(args, options))
}

export async function postV1ParentReports(
  args: InferRequestType<(typeof client.v1)[':parent']['reports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].reports.$post(args, options))
}

export async function getV1ParentResourcefiles(
  args: InferRequestType<(typeof client.v1)[':parent']['resourcefiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].resourcefiles.$get(args, options))
}

export async function postV1ParentResourcefiles(
  args: InferRequestType<(typeof client.v1)[':parent']['resourcefiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].resourcefiles.$post(args, options))
}

export async function getV1ParentResourcefilesType(
  args: InferRequestType<(typeof client.v1)[':parent']['resourcefiles'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].resourcefiles[':type'].$get(args, options))
}

export async function getV1ParentResourcefilesTypeName(
  args: InferRequestType<(typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent'].resourcefiles[':type'][':name'].$get(args, options),
  )
}

export async function putV1ParentResourcefilesTypeName(
  args: InferRequestType<(typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent'].resourcefiles[':type'][':name'].$put(args, options),
  )
}

export async function deleteV1ParentResourcefilesTypeName(
  args: InferRequestType<
    (typeof client.v1)[':parent']['resourcefiles'][':type'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent'].resourcefiles[':type'][':name'].$delete(args, options),
  )
}

export async function getV1ParentSecurityIncidents(
  args: InferRequestType<(typeof client.v1)[':parent']['securityIncidents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].securityIncidents.$get(args, options))
}

export async function getV1ParentSecurityProfiles(
  args: InferRequestType<(typeof client.v1)[':parent']['securityProfiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].securityProfiles.$get(args, options))
}

export async function getV1ParentSecurityReports(
  args: InferRequestType<(typeof client.v1)[':parent']['securityReports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].securityReports.$get(args, options))
}

export async function postV1ParentSecurityReports(
  args: InferRequestType<(typeof client.v1)[':parent']['securityReports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].securityReports.$post(args, options))
}

export async function getV1ParentSharedflows(
  args: InferRequestType<(typeof client.v1)[':parent']['sharedflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].sharedflows.$get(args, options))
}

export async function postV1ParentSharedflows(
  args: InferRequestType<(typeof client.v1)[':parent']['sharedflows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].sharedflows.$post(args, options))
}

export async function getV1ParentSubscriptions(
  args: InferRequestType<(typeof client.v1)[':parent']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].subscriptions.$get(args, options))
}

export async function postV1ParentSubscriptions(
  args: InferRequestType<(typeof client.v1)[':parent']['subscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].subscriptions.$post(args, options))
}

export async function postV1ParentTargetservers(
  args: InferRequestType<(typeof client.v1)[':parent']['targetservers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].targetservers.$post(args, options))
}

export async function postV1ParentSubscribe(
  args: InferRequestType<(typeof client.v1)[':parent:subscribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent:subscribe'].$post(args, options))
}

export async function postV1ParentUnsubscribe(
  args: InferRequestType<(typeof client.v1)[':parent:unsubscribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent:unsubscribe'].$post(args, options))
}

export async function postV1ProfileEnvironmentComputeEnvironmentScores(
  args: InferRequestType<
    (typeof client.v1)[':profileEnvironment:computeEnvironmentScores']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':profileEnvironment:computeEnvironmentScores'].$post(args, options),
  )
}

export async function postV1ProjectProvisionOrganization(
  args: InferRequestType<(typeof client.v1)[':project:provisionOrganization']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':project:provisionOrganization'].$post(args, options))
}

export async function getV1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:testIamPermissions'].$post(args, options))
}
