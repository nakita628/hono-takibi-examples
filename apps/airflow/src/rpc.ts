import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV2Assets(
  args: InferRequestType<typeof client.api.v2.assets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.assets.$get(args, options))
}

export async function getApiV2AssetsAliases(
  args: InferRequestType<typeof client.api.v2.assets.aliases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.assets.aliases.$get(args, options))
}

export async function getApiV2AssetsAliasesAssetAliasId(
  args: InferRequestType<(typeof client.api.v2.assets.aliases)[':asset_alias_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.assets.aliases[':asset_alias_id'].$get(args, options))
}

export async function getApiV2AssetsEvents(
  args: InferRequestType<typeof client.api.v2.assets.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.assets.events.$get(args, options))
}

export async function postApiV2AssetsEvents(
  args: InferRequestType<typeof client.api.v2.assets.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.assets.events.$post(args, options))
}

export async function postApiV2AssetsAssetIdMaterialize(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['materialize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.assets[':asset_id'].materialize.$post(args, options))
}

export async function getApiV2AssetsAssetIdQueuedEvents(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.assets[':asset_id'].queuedEvents.$get(args, options))
}

export async function deleteApiV2AssetsAssetIdQueuedEvents(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['queuedEvents']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.assets[':asset_id'].queuedEvents.$delete(args, options))
}

export async function getApiV2AssetsAssetId(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.assets[':asset_id'].$get(args, options))
}

export async function getApiV2DagsDagIdAssetsQueuedEvents(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].assets.queuedEvents.$get(args, options))
}

export async function deleteApiV2DagsDagIdAssetsQueuedEvents(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['assets']['queuedEvents']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].assets.queuedEvents.$delete(args, options),
  )
}

export async function getApiV2DagsDagIdAssetsAssetIdQueuedEvents(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].assets[':asset_id'].queuedEvents.$get(args, options),
  )
}

export async function deleteApiV2DagsDagIdAssetsAssetIdQueuedEvents(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['assets'][':asset_id']['queuedEvents']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].assets[':asset_id'].queuedEvents.$delete(args, options),
  )
}

export async function getApiV2Backfills(
  args: InferRequestType<typeof client.api.v2.backfills.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.backfills.$get(args, options))
}

export async function postApiV2Backfills(
  args: InferRequestType<typeof client.api.v2.backfills.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.backfills.$post(args, options))
}

export async function getApiV2BackfillsBackfillId(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.backfills[':backfill_id'].$get(args, options))
}

export async function getApiV2BackfillsBackfillIdDagRuns(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['dag_runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.backfills[':backfill_id'].dag_runs.$get(args, options))
}

export async function putApiV2BackfillsBackfillIdPause(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['pause']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.backfills[':backfill_id'].pause.$put(args, options))
}

export async function putApiV2BackfillsBackfillIdUnpause(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['unpause']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.backfills[':backfill_id'].unpause.$put(args, options))
}

export async function putApiV2BackfillsBackfillIdCancel(
  args: InferRequestType<(typeof client.api.v2.backfills)[':backfill_id']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.backfills[':backfill_id'].cancel.$put(args, options))
}

export async function postApiV2BackfillsDryRun(
  args: InferRequestType<typeof client.api.v2.backfills.dry_run.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.backfills.dry_run.$post(args, options))
}

export async function getApiV2ConnectionsConnectionId(
  args: InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.connections[':connection_id'].$get(args, options))
}

export async function deleteApiV2ConnectionsConnectionId(
  args: InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.connections[':connection_id'].$delete(args, options))
}

export async function patchApiV2ConnectionsConnectionId(
  args: InferRequestType<(typeof client.api.v2.connections)[':connection_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.connections[':connection_id'].$patch(args, options))
}

export async function getApiV2ConnectionsEnqueueTest(
  args: InferRequestType<(typeof client.api.v2.connections)['enqueue-test']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.connections['enqueue-test'].$get(args, options))
}

export async function postApiV2ConnectionsEnqueueTest(
  args: InferRequestType<(typeof client.api.v2.connections)['enqueue-test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.connections['enqueue-test'].$post(args, options))
}

export async function getApiV2Connections(
  args: InferRequestType<typeof client.api.v2.connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.connections.$get(args, options))
}

export async function postApiV2Connections(
  args: InferRequestType<typeof client.api.v2.connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.connections.$post(args, options))
}

export async function patchApiV2Connections(
  args: InferRequestType<typeof client.api.v2.connections.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.connections.$patch(args, options))
}

export async function postApiV2ConnectionsTest(
  args: InferRequestType<typeof client.api.v2.connections.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.connections.test.$post(args, options))
}

export async function postApiV2ConnectionsDefaults(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.connections.defaults.$post(undefined, options))
}

export async function getApiV2DagsDagIdDagRunsDagRunId(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].$get(args, options),
  )
}

export async function deleteApiV2DagsDagIdDagRunsDagRunId(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].$delete(args, options),
  )
}

export async function patchApiV2DagsDagIdDagRunsDagRunId(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].$patch(args, options),
  )
}

export async function getApiV2DagsDagIdDagRuns(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].dagRuns.$get(args, options))
}

export async function postApiV2DagsDagIdDagRuns(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].dagRuns.$post(args, options))
}

export async function patchApiV2DagsDagIdDagRuns(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].dagRuns.$patch(args, options))
}

export async function getApiV2DagsDagIdDagRunsDagRunIdUpstreamAssetEvents(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamAssetEvents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].upstreamAssetEvents.$get(args, options),
  )
}

export async function postApiV2DagsDagIdDagRunsDagRunIdClear(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['clear']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].clear.$post(args, options),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdWait(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['wait']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].wait.$get(args, options),
  )
}

export async function postApiV2DagsDagIdDagRunsList(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagRuns']['list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].dagRuns.list.$post(args, options))
}

export async function postApiV2DagsDagIdClearDagRuns(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['clearDagRuns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].clearDagRuns.$post(args, options))
}

export async function postApiV2DagsDagIdClearPartitions(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['clearPartitions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].clearPartitions.$post(args, options))
}

export async function getApiV2DagSourcesDagId(
  args: InferRequestType<(typeof client.api.v2.dagSources)[':dag_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dagSources[':dag_id'].$get(args, options))
}

export async function getApiV2DagBundles(
  args: InferRequestType<typeof client.api.v2.dagBundles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dagBundles.$get(args, options))
}

export async function getApiV2DagBundlesBundleName(
  args: InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dagBundles[':bundle_name'].$get(args, options))
}

export async function getApiV2DagBundlesBundleNameFiles(
  args: InferRequestType<(typeof client.api.v2.dagBundles)[':bundle_name']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dagBundles[':bundle_name'].files.$get(args, options))
}

export async function getApiV2DagStats(
  args: InferRequestType<typeof client.api.v2.dagStats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dagStats.$get(args, options))
}

export async function getApiV2Config(
  args: InferRequestType<typeof client.api.v2.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.config.$get(args, options))
}

export async function getApiV2ConfigSectionSectionOptionOption(
  args: InferRequestType<
    (typeof client.api.v2.config.section)[':section']['option'][':option']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.config.section[':section'].option[':option'].$get(args, options),
  )
}

export async function getApiV2DagWarnings(
  args: InferRequestType<typeof client.api.v2.dagWarnings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dagWarnings.$get(args, options))
}

export async function getApiV2Dags(
  args: InferRequestType<typeof client.api.v2.dags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags.$get(args, options))
}

export async function patchApiV2Dags(
  args: InferRequestType<typeof client.api.v2.dags.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags.$patch(args, options))
}

export async function getApiV2DagsDagId(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].$get(args, options))
}

export async function deleteApiV2DagsDagId(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].$delete(args, options))
}

export async function patchApiV2DagsDagId(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].$patch(args, options))
}

export async function getApiV2DagsDagIdDetails(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['details']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].details.$get(args, options))
}

export async function patchApiV2DagsBulk(
  args: InferRequestType<typeof client.api.v2.dags.bulk.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags.bulk.$patch(args, options))
}

export async function postApiV2DagsDagIdFavorite(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['favorite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].favorite.$post(args, options))
}

export async function postApiV2DagsDagIdUnfavorite(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['unfavorite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].unfavorite.$post(args, options))
}

export async function getApiV2EventLogsEventLogId(
  args: InferRequestType<(typeof client.api.v2.eventLogs)[':event_log_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.eventLogs[':event_log_id'].$get(args, options))
}

export async function getApiV2EventLogs(
  args: InferRequestType<typeof client.api.v2.eventLogs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.eventLogs.$get(args, options))
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinks(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].links.$get(
      args,
      options,
    ),
  )
}

export async function getApiV2ImportErrorsImportErrorId(
  args: InferRequestType<(typeof client.api.v2.importErrors)[':import_error_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.importErrors[':import_error_id'].$get(args, options))
}

export async function getApiV2ImportErrors(
  args: InferRequestType<typeof client.api.v2.importErrors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.importErrors.$get(args, options))
}

export async function getApiV2Jobs(
  args: InferRequestType<typeof client.api.v2.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.jobs.$get(args, options))
}

export async function getApiV2Plugins(
  args: InferRequestType<typeof client.api.v2.plugins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.plugins.$get(args, options))
}

export async function getApiV2PluginsImportErrors(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.plugins.importErrors.$get(undefined, options))
}

export async function getApiV2PoolsPoolName(
  args: InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.pools[':pool_name'].$get(args, options))
}

export async function deleteApiV2PoolsPoolName(
  args: InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.pools[':pool_name'].$delete(args, options))
}

export async function patchApiV2PoolsPoolName(
  args: InferRequestType<(typeof client.api.v2.pools)[':pool_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.pools[':pool_name'].$patch(args, options))
}

export async function getApiV2Pools(
  args: InferRequestType<typeof client.api.v2.pools.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.pools.$get(args, options))
}

export async function postApiV2Pools(
  args: InferRequestType<typeof client.api.v2.pools.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.pools.$post(args, options))
}

export async function patchApiV2Pools(
  args: InferRequestType<typeof client.api.v2.pools.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.pools.$patch(args, options))
}

export async function getApiV2Providers(
  args: InferRequestType<typeof client.api.v2.providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.providers.$get(args, options))
}

export async function getApiV2ProvidersProviderName(
  args: InferRequestType<(typeof client.api.v2.providers)[':provider_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.providers[':provider_name'].$get(args, options))
}

export async function getApiV2AssetsAssetIdStateStore(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.assets[':asset_id']['state-store'].$get(args, options))
}

export async function deleteApiV2AssetsAssetIdStateStore(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.assets[':asset_id']['state-store'].$delete(args, options),
  )
}

export async function getApiV2AssetsAssetIdStateStoreKey(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.assets[':asset_id']['state-store'][':key'].$get(args, options),
  )
}

export async function putApiV2AssetsAssetIdStateStoreKey(
  args: InferRequestType<(typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.assets[':asset_id']['state-store'][':key'].$put(args, options),
  )
}

export async function deleteApiV2AssetsAssetIdStateStoreKey(
  args: InferRequestType<
    (typeof client.api.v2.assets)[':asset_id']['state-store'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.assets[':asset_id']['state-store'][':key'].$delete(args, options),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStore(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
      'state-store'
    ].$get(args, options),
  )
}

export async function deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStore(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
      'state-store'
    ].$delete(args, options),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id']['state-store'][
      ':key'
    ].$get(args, options),
  )
}

export async function putApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id']['state-store'][
      ':key'
    ].$put(args, options),
  )
}

export async function deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id']['state-store'][
      ':key'
    ].$delete(args, options),
  )
}

export async function patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdStateStoreKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['state-store'][':key']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id']['state-store'][
      ':key'
    ].$patch(args, options),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].xcomEntries[
      ':xcom_key'
    ].$get(args, options),
  )
}

export async function deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].xcomEntries[
      ':xcom_key'
    ].$delete(args, options),
  )
}

export async function patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKey(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].xcomEntries[
      ':xcom_key'
    ].$patch(args, options),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntries(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].xcomEntries.$get(
      args,
      options,
    ),
  )
}

export async function postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntries(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
      ':task_id'
    ].xcomEntries.$post(args, options),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskId(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskId(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskId(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMapped(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].listMapped.$get(
      args,
      options,
    ),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDependencies(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dependencies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
      ':map_index'
    ].dependencies.$get(args, options),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDependencies(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dependencies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[
      ':task_id'
    ].dependencies.$get(args, options),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTries(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].tries.$get(
      args,
      options,
    ),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTries(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
      ':map_index'
    ].tries.$get(args, options),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndex(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
      ':map_index'
    ].$get(args, options),
  )
}

export async function patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndex(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
      ':map_index'
    ].$patch(args, options),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstances(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances.$get(args, options),
  )
}

export async function patchApiV2DagsDagIdDagRunsDagRunIdTaskInstances(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances.$patch(args, options),
  )
}

export async function postApiV2DagsDagIdDagRunsDagRunIdTaskInstancesList(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['list']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances.list.$post(args, options),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdTriesTaskTryNumber(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['tries'][':task_try_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].tries[
      ':task_try_number'
    ].$get(args, options),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexTriesTaskTryNumber(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['tries'][':task_try_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
      ':map_index'
    ].tries[':task_try_number'].$get(args, options),
  )
}

export async function postApiV2DagsDagIdClearTaskInstances(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['clearTaskInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].clearTaskInstances.$post(args, options))
}

export async function patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupId(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskGroupInstances[':group_id'].$patch(
      args,
      options,
    ),
  )
}

export async function patchApiV2DagsDagIdDagRunsDagRunIdTaskGroupInstancesGroupIdDryRun(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskGroupInstances'][':group_id']['dry_run']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskGroupInstances[
      ':group_id'
    ].dry_run.$patch(args, options),
  )
}

export async function patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexDryRun(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['dry_run']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
      ':map_index'
    ].dry_run.$patch(args, options),
  )
}

export async function patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdDryRun(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['dry_run']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].dry_run.$patch(
      args,
      options,
    ),
  )
}

export async function getApiV2DagsDagIdTasks(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].tasks.$get(args, options))
}

export async function getApiV2DagsDagIdTasksTaskId(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['tasks'][':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].tasks[':task_id'].$get(args, options))
}

export async function getApiV2Triggers(
  args: InferRequestType<typeof client.api.v2.triggers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.triggers.$get(args, options))
}

export async function getApiV2TriggersTriggerId(
  args: InferRequestType<(typeof client.api.v2.triggers)[':trigger_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.triggers[':trigger_id'].$get(args, options))
}

export async function getApiV2VariablesVariableKey(
  args: InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.variables[':variable_key'].$get(args, options))
}

export async function deleteApiV2VariablesVariableKey(
  args: InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.variables[':variable_key'].$delete(args, options))
}

export async function patchApiV2VariablesVariableKey(
  args: InferRequestType<(typeof client.api.v2.variables)[':variable_key']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.variables[':variable_key'].$patch(args, options))
}

export async function getApiV2Variables(
  args: InferRequestType<typeof client.api.v2.variables.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.variables.$get(args, options))
}

export async function postApiV2Variables(
  args: InferRequestType<typeof client.api.v2.variables.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.variables.$post(args, options))
}

export async function patchApiV2Variables(
  args: InferRequestType<typeof client.api.v2.variables.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.variables.$patch(args, options))
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTryNumber(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':try_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].logs[
      ':try_number'
    ].$get(args, options),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdExternalLogUrlTryNumber(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['externalLogUrl'][':try_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].externalLogUrl[
      ':try_number'
    ].$get(args, options),
  )
}

export async function putApiV2ParseDagFileFileToken(
  args: InferRequestType<(typeof client.api.v2.parseDagFile)[':file_token']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.parseDagFile[':file_token'].$put(args, options))
}

export async function getApiV2DagTags(
  args: InferRequestType<typeof client.api.v2.dagTags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dagTags.$get(args, options))
}

export async function getApiV2DagsDagIdDagVersionsDiff(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['diff']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].dagVersions.diff.$get(args, options))
}

export async function getApiV2DagsDagIdDagVersionsVersionNumber(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagVersions'][':version_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagVersions[':version_number'].$get(args, options),
  )
}

export async function getApiV2DagsDagIdDagVersions(
  args: InferRequestType<(typeof client.api.v2.dags)[':dag_id']['dagVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.dags[':dag_id'].dagVersions.$get(args, options))
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetails(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
      ':map_index'
    ].hitlDetails.$get(args, options),
  )
}

export async function patchApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetails(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
      ':map_index'
    ].hitlDetails.$patch(args, options),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexHitlDetailsTriesTryNumber(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['hitlDetails']['tries'][':try_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
      ':map_index'
    ].hitlDetails.tries[':try_number'].$get(args, options),
  )
}

export async function getApiV2DagsDagIdDagRunsDagRunIdHitlDetails(
  args: InferRequestType<
    (typeof client.api.v2.dags)[':dag_id']['dagRuns'][':dag_run_id']['hitlDetails']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v2.dags[':dag_id'].dagRuns[':dag_run_id'].hitlDetails.$get(args, options),
  )
}

export async function getApiV2MonitorHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.monitor.health.$get(undefined, options))
}

export async function getApiV2Version(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.version.$get(undefined, options))
}

export async function getApiV2AuthLogin(
  args: InferRequestType<typeof client.api.v2.auth.login.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v2.auth.login.$get(args, options))
}

export async function getApiV2AuthCliMetadata(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.auth.cli.metadata.$get(undefined, options))
}

export async function getApiV2AuthLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v2.auth.logout.$get(undefined, options))
}
