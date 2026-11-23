import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAssetsAssetIdAssociate(
  args: InferRequestType<(typeof client.assets)[':assetId']['associate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':assetId'].associate.$post(args, options))
}

export async function postTimeseriesAssociateAliasAssetIdPropertyId(
  args: InferRequestType<
    (typeof client.timeseries.associate)['#alias&assetId&propertyId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.timeseries.associate['#alias&assetId&propertyId'].$post(args, options),
  )
}

export async function postProjectsProjectIdAssetsAssociate(
  args: InferRequestType<(typeof client.projects)[':projectId']['assets']['associate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].assets.associate.$post(args, options))
}

export async function postProjectsProjectIdAssetsDisassociate(
  args: InferRequestType<(typeof client.projects)[':projectId']['assets']['disassociate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].assets.disassociate.$post(args, options))
}

export async function postPropertiesBatchAggregates(
  args: InferRequestType<typeof client.properties.batch.aggregates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.properties.batch.aggregates.$post(args, options))
}

export async function postPropertiesBatchLatest(
  args: InferRequestType<typeof client.properties.batch.latest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.properties.batch.latest.$post(args, options))
}

export async function postPropertiesBatchHistory(
  args: InferRequestType<typeof client.properties.batch.history.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.properties.batch.history.$post(args, options))
}

export async function postProperties(
  args: InferRequestType<typeof client.properties.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.properties.$post(args, options))
}

export async function getAccessPolicies(
  args: InferRequestType<(typeof client)['access-policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-policies'].$get(args, options))
}

export async function postAccessPolicies(
  args: InferRequestType<(typeof client)['access-policies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-policies'].$post(args, options))
}

export async function getAssets(
  args: InferRequestType<typeof client.assets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.$get(args, options))
}

export async function postAssets(
  args: InferRequestType<typeof client.assets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets.$post(args, options))
}

export async function getAssetModels(
  args: InferRequestType<(typeof client)['asset-models']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['asset-models'].$get(args, options))
}

export async function postAssetModels(
  args: InferRequestType<(typeof client)['asset-models']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['asset-models'].$post(args, options))
}

export async function getJobs(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.$get(args, options))
}

export async function postJobs(
  args: InferRequestType<typeof client.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.$post(args, options))
}

export async function postDashboards(
  args: InferRequestType<typeof client.dashboards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards.$post(args, options))
}

export async function get20200301Gateways(
  args: InferRequestType<(typeof client)['20200301']['gateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['20200301'].gateways.$get(args, options))
}

export async function post20200301Gateways(
  args: InferRequestType<(typeof client)['20200301']['gateways']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['20200301'].gateways.$post(args, options))
}

export async function getPortals(
  args: InferRequestType<typeof client.portals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portals.$get(args, options))
}

export async function postPortals(
  args: InferRequestType<typeof client.portals.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portals.$post(args, options))
}

export async function postProjects(
  args: InferRequestType<typeof client.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$post(args, options))
}

export async function getAccessPoliciesAccessPolicyId(
  args: InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-policies'][':accessPolicyId'].$get(args, options))
}

export async function putAccessPoliciesAccessPolicyId(
  args: InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-policies'][':accessPolicyId'].$put(args, options))
}

export async function deleteAccessPoliciesAccessPolicyId(
  args: InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['access-policies'][':accessPolicyId'].$delete(args, options))
}

export async function getAssetsAssetId(
  args: InferRequestType<(typeof client.assets)[':assetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':assetId'].$get(args, options))
}

export async function putAssetsAssetId(
  args: InferRequestType<(typeof client.assets)[':assetId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':assetId'].$put(args, options))
}

export async function deleteAssetsAssetId(
  args: InferRequestType<(typeof client.assets)[':assetId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':assetId'].$delete(args, options))
}

export async function getAssetModelsAssetModelId(
  args: InferRequestType<(typeof client)['asset-models'][':assetModelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['asset-models'][':assetModelId'].$get(args, options))
}

export async function putAssetModelsAssetModelId(
  args: InferRequestType<(typeof client)['asset-models'][':assetModelId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['asset-models'][':assetModelId'].$put(args, options))
}

export async function deleteAssetModelsAssetModelId(
  args: InferRequestType<(typeof client)['asset-models'][':assetModelId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['asset-models'][':assetModelId'].$delete(args, options))
}

export async function getDashboardsDashboardId(
  args: InferRequestType<(typeof client.dashboards)[':dashboardId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards[':dashboardId'].$get(args, options))
}

export async function putDashboardsDashboardId(
  args: InferRequestType<(typeof client.dashboards)[':dashboardId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards[':dashboardId'].$put(args, options))
}

export async function deleteDashboardsDashboardId(
  args: InferRequestType<(typeof client.dashboards)[':dashboardId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dashboards[':dashboardId'].$delete(args, options))
}

export async function get20200301GatewaysGatewayId(
  args: InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['20200301'].gateways[':gatewayId'].$get(args, options))
}

export async function put20200301GatewaysGatewayId(
  args: InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['20200301'].gateways[':gatewayId'].$put(args, options))
}

export async function delete20200301GatewaysGatewayId(
  args: InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['20200301'].gateways[':gatewayId'].$delete(args, options))
}

export async function getPortalsPortalId(
  args: InferRequestType<(typeof client.portals)[':portalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portals[':portalId'].$get(args, options))
}

export async function putPortalsPortalId(
  args: InferRequestType<(typeof client.portals)[':portalId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portals[':portalId'].$put(args, options))
}

export async function deletePortalsPortalId(
  args: InferRequestType<(typeof client.portals)[':portalId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portals[':portalId'].$delete(args, options))
}

export async function getProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].$get(args, options))
}

export async function putProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':projectId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].$put(args, options))
}

export async function deleteProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':projectId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].$delete(args, options))
}

export async function postTimeseriesDeleteIndex(
  args: InferRequestType<typeof client.timeseries.delete.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timeseries.delete.index.$post(args, options))
}

export async function getAssetsAssetIdPropertiesPropertyId(
  args: InferRequestType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assets[':assetId'].properties[':propertyId'].$get(args, options),
  )
}

export async function putAssetsAssetIdPropertiesPropertyId(
  args: InferRequestType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assets[':assetId'].properties[':propertyId'].$put(args, options),
  )
}

export async function getJobsJobId(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':jobId'].$get(args, options))
}

export async function getConfigurationAccountEncryption(
  args: InferRequestType<typeof client.configuration.account.encryption.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configuration.account.encryption.$get(args, options))
}

export async function postConfigurationAccountEncryption(
  args: InferRequestType<typeof client.configuration.account.encryption.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configuration.account.encryption.$post(args, options))
}

export async function get20200301GatewaysGatewayIdCapabilityCapabilityNamespace(
  args: InferRequestType<
    (typeof client)['20200301']['gateways'][':gatewayId']['capability'][':capabilityNamespace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['20200301'].gateways[':gatewayId'].capability[':capabilityNamespace'].$get(
      args,
      options,
    ),
  )
}

export async function getLogging(
  args: InferRequestType<typeof client.logging.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logging.$get(args, options))
}

export async function putLogging(
  args: InferRequestType<typeof client.logging.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logging.$put(args, options))
}

export async function getConfigurationAccountStorage(
  args: InferRequestType<typeof client.configuration.account.storage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configuration.account.storage.$get(args, options))
}

export async function postConfigurationAccountStorage(
  args: InferRequestType<typeof client.configuration.account.storage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configuration.account.storage.$post(args, options))
}

export async function getTimeseriesDescribeIndex(
  args: InferRequestType<typeof client.timeseries.describe.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timeseries.describe.index.$get(args, options))
}

export async function postAssetsAssetIdDisassociate(
  args: InferRequestType<(typeof client.assets)[':assetId']['disassociate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':assetId'].disassociate.$post(args, options))
}

export async function postTimeseriesDisassociateAliasAssetIdPropertyId(
  args: InferRequestType<
    (typeof client.timeseries.disassociate)['#alias&assetId&propertyId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.timeseries.disassociate['#alias&assetId&propertyId'].$post(args, options),
  )
}

export async function getPropertiesAggregatesAggregateTypesResolutionStartDateEndDate(
  args: InferRequestType<
    (typeof client.properties)['aggregates#aggregateTypes&resolution&startDate&endDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.properties['aggregates#aggregateTypes&resolution&startDate&endDate'].$get(args, options),
  )
}

export async function getPropertiesLatest(
  args: InferRequestType<typeof client.properties.latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.properties.latest.$get(args, options))
}

export async function getPropertiesHistory(
  args: InferRequestType<typeof client.properties.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.properties.history.$get(args, options))
}

export async function getPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsType(
  args: InferRequestType<
    (typeof client.properties)['interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.properties[
      'interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type'
    ].$get(args, options),
  )
}

export async function getAssetModelsAssetModelIdProperties(
  args: InferRequestType<(typeof client)['asset-models'][':assetModelId']['properties']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['asset-models'][':assetModelId'].properties.$get(args, options))
}

export async function getAssetsAssetIdProperties(
  args: InferRequestType<(typeof client.assets)[':assetId']['properties']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':assetId'].properties.$get(args, options))
}

export async function getAssetsAssetIdAssetRelationshipsTraversalType(
  args: InferRequestType<
    (typeof client.assets)[':assetId']['assetRelationships#traversalType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assets[':assetId']['assetRelationships#traversalType'].$get(args, options),
  )
}

export async function getAssetsAssetIdHierarchies(
  args: InferRequestType<(typeof client.assets)[':assetId']['hierarchies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':assetId'].hierarchies.$get(args, options))
}

export async function getDashboardsProjectId(
  args: InferRequestType<(typeof client)['dashboards#projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dashboards#projectId'].$get(args, options))
}

export async function getProjectsProjectIdAssets(
  args: InferRequestType<(typeof client.projects)[':projectId']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].assets.$get(args, options))
}

export async function getProjectsPortalId(
  args: InferRequestType<(typeof client)['projects#portalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['projects#portalId'].$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tags#resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tags#resourceArn'].$post(args, options))
}

export async function getTimeseriesIndex(
  args: InferRequestType<typeof client.timeseries.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timeseries.index.$get(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tags#resourceArn&tagKeys'].$delete(args, options))
}

export async function post20200301GatewaysGatewayIdCapability(
  args: InferRequestType<
    (typeof client)['20200301']['gateways'][':gatewayId']['capability']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['20200301'].gateways[':gatewayId'].capability.$post(args, options),
  )
}
