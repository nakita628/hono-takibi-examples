import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1alpha1DatacenterConnectorUpgradeAppliance(
  args: InferRequestType<
    (typeof client.v1alpha1)[':datacenterConnector:upgradeAppliance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1alpha1[':datacenterConnector:upgradeAppliance'].$post(args, options),
  )
}

export async function postV1alpha1GroupAddGroupMigration(
  args: InferRequestType<(typeof client.v1alpha1)[':group:addGroupMigration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':group:addGroupMigration'].$post(args, options))
}

export async function postV1alpha1GroupRemoveGroupMigration(
  args: InferRequestType<(typeof client.v1alpha1)[':group:removeGroupMigration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':group:removeGroupMigration'].$post(args, options))
}

export async function postV1alpha1MigratingVmFinalizeMigration(
  args: InferRequestType<(typeof client.v1alpha1)[':migratingVm:finalizeMigration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':migratingVm:finalizeMigration'].$post(args, options))
}

export async function postV1alpha1MigratingVmPauseMigration(
  args: InferRequestType<(typeof client.v1alpha1)[':migratingVm:pauseMigration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':migratingVm:pauseMigration'].$post(args, options))
}

export async function postV1alpha1MigratingVmResumeMigration(
  args: InferRequestType<(typeof client.v1alpha1)[':migratingVm:resumeMigration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':migratingVm:resumeMigration'].$post(args, options))
}

export async function postV1alpha1MigratingVmStartMigration(
  args: InferRequestType<(typeof client.v1alpha1)[':migratingVm:startMigration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':migratingVm:startMigration'].$post(args, options))
}

export async function getV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$get(args, options))
}

export async function deleteV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$delete(args, options))
}

export async function patchV1alpha1Name(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].$patch(args, options))
}

export async function getV1alpha1NameLocations(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].locations.$get(args, options))
}

export async function getV1alpha1NameOperations(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name'].operations.$get(args, options))
}

export async function postV1alpha1NameCancel(
  args: InferRequestType<(typeof client.v1alpha1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':name:cancel'].$post(args, options))
}

export async function getV1alpha1ParentCloneJobs(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['cloneJobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].cloneJobs.$get(args, options))
}

export async function postV1alpha1ParentCloneJobs(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['cloneJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].cloneJobs.$post(args, options))
}

export async function getV1alpha1ParentCutoverJobs(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['cutoverJobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].cutoverJobs.$get(args, options))
}

export async function postV1alpha1ParentCutoverJobs(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['cutoverJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].cutoverJobs.$post(args, options))
}

export async function getV1alpha1ParentDatacenterConnectors(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['datacenterConnectors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].datacenterConnectors.$get(args, options))
}

export async function postV1alpha1ParentDatacenterConnectors(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['datacenterConnectors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].datacenterConnectors.$post(args, options))
}

export async function getV1alpha1ParentGroups(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].groups.$get(args, options))
}

export async function postV1alpha1ParentGroups(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].groups.$post(args, options))
}

export async function getV1alpha1ParentMigratingVms(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['migratingVms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].migratingVms.$get(args, options))
}

export async function postV1alpha1ParentMigratingVms(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['migratingVms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].migratingVms.$post(args, options))
}

export async function getV1alpha1ParentReplicationCycles(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['replicationCycles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].replicationCycles.$get(args, options))
}

export async function getV1alpha1ParentSources(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].sources.$get(args, options))
}

export async function postV1alpha1ParentSources(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['sources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].sources.$post(args, options))
}

export async function getV1alpha1ParentTargetProjects(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['targetProjects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].targetProjects.$get(args, options))
}

export async function postV1alpha1ParentTargetProjects(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['targetProjects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].targetProjects.$post(args, options))
}

export async function getV1alpha1ParentUtilizationReports(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['utilizationReports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].utilizationReports.$get(args, options))
}

export async function postV1alpha1ParentUtilizationReports(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['utilizationReports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':parent'].utilizationReports.$post(args, options))
}

export async function getV1alpha1SourceFetchInventory(
  args: InferRequestType<(typeof client.v1alpha1)[':source:fetchInventory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1alpha1[':source:fetchInventory'].$get(args, options))
}
