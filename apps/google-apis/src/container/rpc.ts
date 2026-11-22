import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1ProjectsProjectIdZonesZoneClusters(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters.$get(args, options),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClusters(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters.$post(args, options),
  )
}

export async function getV1beta1ProjectsProjectIdZonesZoneClustersClusterId(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].$get(args, options),
  )
}

export async function putV1beta1ProjectsProjectIdZonesZoneClustersClusterId(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].$put(args, options),
  )
}

export async function deleteV1beta1ProjectsProjectIdZonesZoneClustersClusterId(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].$delete(
      args,
      options,
    ),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdAddons(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['addons']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].addons.$post(
      args,
      options,
    ),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLegacyAbac(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['legacyAbac']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].legacyAbac.$post(
      args,
      options,
    ),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLocations(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['locations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].locations.$post(
      args,
      options,
    ),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLogging(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['logging']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].logging.$post(
      args,
      options,
    ),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMaster(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['master']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].master.$post(
      args,
      options,
    ),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMonitoring(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['monitoring']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].monitoring.$post(
      args,
      options,
    ),
  )
}

export async function getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePools(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools.$get(
      args,
      options,
    ),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePools(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools.$post(
      args,
      options,
    ),
  )
}

export async function getV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolId(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
      ':nodePoolId'
    ].$get(args, options),
  )
}

export async function deleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolId(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
      ':nodePoolId'
    ].$delete(args, options),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdAutoscaling(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['autoscaling']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
      ':nodePoolId'
    ].autoscaling.$post(args, options),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetManagement(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setManagement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
      ':nodePoolId'
    ].setManagement.$post(args, options),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetSize(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setSize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
      ':nodePoolId'
    ].setSize.$post(args, options),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdUpdate(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
      ':nodePoolId'
    ].update.$post(args, options),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRollback(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId:rollback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
      ':nodePoolId:rollback'
    ].$post(args, options),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdResourceLabels(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['resourceLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
      ':clusterId'
    ].resourceLabels.$post(args, options),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdCompleteIpRotation(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:completeIpRotation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
      ':clusterId:completeIpRotation'
    ].$post(args, options),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMaintenancePolicy(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMaintenancePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
      ':clusterId:setMaintenancePolicy'
    ].$post(args, options),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMasterAuth(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMasterAuth']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId:setMasterAuth'].$post(
      args,
      options,
    ),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetNetworkPolicy(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setNetworkPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
      ':clusterId:setNetworkPolicy'
    ].$post(args, options),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneClustersClusterIdStartIpRotation(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:startIpRotation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
      ':clusterId:startIpRotation'
    ].$post(args, options),
  )
}

export async function getV1beta1ProjectsProjectIdZonesZoneOperations(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].operations.$get(args, options),
  )
}

export async function getV1beta1ProjectsProjectIdZonesZoneOperationsOperationId(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].operations[':operationId'].$get(
      args,
      options,
    ),
  )
}

export async function postV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdCancel(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId:cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].operations[':operationId:cancel'].$post(
      args,
      options,
    ),
  )
}

export async function getV1beta1ProjectsProjectIdZonesZoneServerconfig(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['serverconfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1.projects[':projectId'].zones[':zone'].serverconfig.$get(args, options),
  )
}

export async function getV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$get(args, options))
}

export async function putV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$put(args, options))
}

export async function deleteV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$delete(args, options))
}

export async function getV1beta1NameServerConfig(
  args: InferRequestType<(typeof client.v1beta1)[':name']['serverConfig']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].serverConfig.$get(args, options))
}

export async function postV1beta1NameCancel(
  args: InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:cancel'].$post(args, options))
}

export async function getV1beta1NameCheckAutopilotCompatibility(
  args: InferRequestType<(typeof client.v1beta1)[':name:checkAutopilotCompatibility']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':name:checkAutopilotCompatibility'].$get(args, options),
  )
}

export async function postV1beta1NameCompleteIpRotation(
  args: InferRequestType<(typeof client.v1beta1)[':name:completeIpRotation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:completeIpRotation'].$post(args, options))
}

export async function postV1beta1NameCompleteUpgrade(
  args: InferRequestType<(typeof client.v1beta1)[':name:completeUpgrade']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:completeUpgrade'].$post(args, options))
}

export async function postV1beta1NameRollback(
  args: InferRequestType<(typeof client.v1beta1)[':name:rollback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:rollback'].$post(args, options))
}

export async function postV1beta1NameSetAddons(
  args: InferRequestType<(typeof client.v1beta1)[':name:setAddons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:setAddons'].$post(args, options))
}

export async function postV1beta1NameSetAutoscaling(
  args: InferRequestType<(typeof client.v1beta1)[':name:setAutoscaling']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:setAutoscaling'].$post(args, options))
}

export async function postV1beta1NameSetLegacyAbac(
  args: InferRequestType<(typeof client.v1beta1)[':name:setLegacyAbac']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:setLegacyAbac'].$post(args, options))
}

export async function postV1beta1NameSetLocations(
  args: InferRequestType<(typeof client.v1beta1)[':name:setLocations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:setLocations'].$post(args, options))
}

export async function postV1beta1NameSetLogging(
  args: InferRequestType<(typeof client.v1beta1)[':name:setLogging']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:setLogging'].$post(args, options))
}

export async function postV1beta1NameSetMaintenancePolicy(
  args: InferRequestType<(typeof client.v1beta1)[':name:setMaintenancePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:setMaintenancePolicy'].$post(args, options))
}

export async function postV1beta1NameSetManagement(
  args: InferRequestType<(typeof client.v1beta1)[':name:setManagement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:setManagement'].$post(args, options))
}

export async function postV1beta1NameSetMasterAuth(
  args: InferRequestType<(typeof client.v1beta1)[':name:setMasterAuth']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:setMasterAuth'].$post(args, options))
}

export async function postV1beta1NameSetMonitoring(
  args: InferRequestType<(typeof client.v1beta1)[':name:setMonitoring']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:setMonitoring'].$post(args, options))
}

export async function postV1beta1NameSetNetworkPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':name:setNetworkPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:setNetworkPolicy'].$post(args, options))
}

export async function postV1beta1NameSetResourceLabels(
  args: InferRequestType<(typeof client.v1beta1)[':name:setResourceLabels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:setResourceLabels'].$post(args, options))
}

export async function postV1beta1NameSetSize(
  args: InferRequestType<(typeof client.v1beta1)[':name:setSize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:setSize'].$post(args, options))
}

export async function postV1beta1NameStartIpRotation(
  args: InferRequestType<(typeof client.v1beta1)[':name:startIpRotation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:startIpRotation'].$post(args, options))
}

export async function postV1beta1NameUpdateMaster(
  args: InferRequestType<(typeof client.v1beta1)[':name:updateMaster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:updateMaster'].$post(args, options))
}

export async function getV1beta1ParentWellKnownOpenidConfiguration(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['.well-known']['openid-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent']['.well-known']['openid-configuration'].$get(args, options),
  )
}

export async function getV1beta1ParentAggregatedUsableSubnetworks(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['aggregated']['usableSubnetworks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':parent'].aggregated.usableSubnetworks.$get(args, options),
  )
}

export async function getV1beta1ParentClusters(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['clusters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].clusters.$get(args, options))
}

export async function postV1beta1ParentClusters(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['clusters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].clusters.$post(args, options))
}

export async function getV1beta1ParentJwks(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['jwks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].jwks.$get(args, options))
}

export async function getV1beta1ParentLocations(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].locations.$get(args, options))
}

export async function getV1beta1ParentNodePools(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['nodePools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].nodePools.$get(args, options))
}

export async function postV1beta1ParentNodePools(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['nodePools']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].nodePools.$post(args, options))
}

export async function getV1beta1ParentOperations(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].operations.$get(args, options))
}
