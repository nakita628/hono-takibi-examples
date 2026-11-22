import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAsyncSearchId(
  args: InferRequestType<(typeof client._async_search)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._async_search[':id'].$get(args, options))
}

export async function deleteAsyncSearchId(
  args: InferRequestType<(typeof client._async_search)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._async_search[':id'].$delete(args, options))
}

export async function getAsyncSearchStatusId(
  args: InferRequestType<(typeof client._async_search.status)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._async_search.status[':id'].$get(args, options))
}

export async function postAsyncSearch(
  args: InferRequestType<typeof client._async_search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._async_search.$post(args, options))
}

export async function postIndexAsyncSearch(
  args: InferRequestType<(typeof client)[':index']['_async_search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._async_search.$post(args, options))
}

export async function putBulk(
  args: InferRequestType<typeof client._bulk.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._bulk.$put(args, options))
}

export async function postBulk(
  args: InferRequestType<typeof client._bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._bulk.$post(args, options))
}

export async function putIndexBulk(
  args: InferRequestType<(typeof client)[':index']['_bulk']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._bulk.$put(args, options))
}

export async function postIndexBulk(
  args: InferRequestType<(typeof client)[':index']['_bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._bulk.$post(args, options))
}

export async function postReindexTaskIdCancel(
  args: InferRequestType<(typeof client._reindex)[':task_id']['_cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._reindex[':task_id']._cancel.$post(args, options))
}

export async function getCatAliases(
  args: InferRequestType<typeof client._cat.aliases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.aliases.$get(args, options))
}

export async function getCatAliasesName(
  args: InferRequestType<(typeof client._cat.aliases)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.aliases[':name'].$get(args, options))
}

export async function getCatAllocation(
  args: InferRequestType<typeof client._cat.allocation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.allocation.$get(args, options))
}

export async function getCatAllocationNodeId(
  args: InferRequestType<(typeof client._cat.allocation)[':node_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.allocation[':node_id'].$get(args, options))
}

export async function getCatCircuitBreaker(
  args: InferRequestType<typeof client._cat.circuit_breaker.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.circuit_breaker.$get(args, options))
}

export async function getCatCircuitBreakerCircuitBreakerPatterns(
  args: InferRequestType<(typeof client._cat.circuit_breaker)[':circuit_breaker_patterns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._cat.circuit_breaker[':circuit_breaker_patterns'].$get(args, options),
  )
}

export async function getCatComponentTemplates(
  args: InferRequestType<typeof client._cat.component_templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.component_templates.$get(args, options))
}

export async function getCatComponentTemplatesName(
  args: InferRequestType<(typeof client._cat.component_templates)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.component_templates[':name'].$get(args, options))
}

export async function getCatCount(
  args: InferRequestType<typeof client._cat.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.count.$get(args, options))
}

export async function postCatCount(
  args: InferRequestType<typeof client._cat.count.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.count.$post(args, options))
}

export async function getCatCountIndex(
  args: InferRequestType<(typeof client._cat.count)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.count[':index'].$get(args, options))
}

export async function postCatCountIndex(
  args: InferRequestType<(typeof client._cat.count)[':index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.count[':index'].$post(args, options))
}

export async function getCatFielddata(
  args: InferRequestType<typeof client._cat.fielddata.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.fielddata.$get(args, options))
}

export async function getCatFielddataFields(
  args: InferRequestType<(typeof client._cat.fielddata)[':fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.fielddata[':fields'].$get(args, options))
}

export async function getCatHealth(
  args: InferRequestType<typeof client._cat.health.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.health.$get(args, options))
}

export async function getCat(options?: ClientRequestOptions) {
  return await parseResponse(client._cat.$get(undefined, options))
}

export async function getCatIndices(
  args: InferRequestType<typeof client._cat.indices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.indices.$get(args, options))
}

export async function getCatIndicesIndex(
  args: InferRequestType<(typeof client._cat.indices)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.indices[':index'].$get(args, options))
}

export async function getCatMaster(
  args: InferRequestType<typeof client._cat.master.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.master.$get(args, options))
}

export async function getCatMlDataFrameAnalytics(
  args: InferRequestType<typeof client._cat.ml.data_frame.analytics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.ml.data_frame.analytics.$get(args, options))
}

export async function getCatMlDataFrameAnalyticsId(
  args: InferRequestType<(typeof client._cat.ml.data_frame.analytics)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.ml.data_frame.analytics[':id'].$get(args, options))
}

export async function getCatMlDatafeeds(
  args: InferRequestType<typeof client._cat.ml.datafeeds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.ml.datafeeds.$get(args, options))
}

export async function getCatMlDatafeedsDatafeedId(
  args: InferRequestType<(typeof client._cat.ml.datafeeds)[':datafeed_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.ml.datafeeds[':datafeed_id'].$get(args, options))
}

export async function getCatMlAnomalyDetectors(
  args: InferRequestType<typeof client._cat.ml.anomaly_detectors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.ml.anomaly_detectors.$get(args, options))
}

export async function getCatMlAnomalyDetectorsJobId(
  args: InferRequestType<(typeof client._cat.ml.anomaly_detectors)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.ml.anomaly_detectors[':job_id'].$get(args, options))
}

export async function getCatMlTrainedModels(
  args: InferRequestType<typeof client._cat.ml.trained_models.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.ml.trained_models.$get(args, options))
}

export async function getCatMlTrainedModelsModelId(
  args: InferRequestType<(typeof client._cat.ml.trained_models)[':model_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.ml.trained_models[':model_id'].$get(args, options))
}

export async function getCatNodeattrs(
  args: InferRequestType<typeof client._cat.nodeattrs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.nodeattrs.$get(args, options))
}

export async function getCatNodes(
  args: InferRequestType<typeof client._cat.nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.nodes.$get(args, options))
}

export async function getCatPendingTasks(
  args: InferRequestType<typeof client._cat.pending_tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.pending_tasks.$get(args, options))
}

export async function getCatPlugins(
  args: InferRequestType<typeof client._cat.plugins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.plugins.$get(args, options))
}

export async function getCatRecovery(
  args: InferRequestType<typeof client._cat.recovery.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.recovery.$get(args, options))
}

export async function getCatRecoveryIndex(
  args: InferRequestType<(typeof client._cat.recovery)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.recovery[':index'].$get(args, options))
}

export async function getCatRepositories(
  args: InferRequestType<typeof client._cat.repositories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.repositories.$get(args, options))
}

export async function getCatSegments(
  args: InferRequestType<typeof client._cat.segments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.segments.$get(args, options))
}

export async function getCatSegmentsIndex(
  args: InferRequestType<(typeof client._cat.segments)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.segments[':index'].$get(args, options))
}

export async function getCatShards(
  args: InferRequestType<typeof client._cat.shards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.shards.$get(args, options))
}

export async function getCatShardsIndex(
  args: InferRequestType<(typeof client._cat.shards)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.shards[':index'].$get(args, options))
}

export async function getCatSnapshots(
  args: InferRequestType<typeof client._cat.snapshots.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.snapshots.$get(args, options))
}

export async function getCatSnapshotsRepository(
  args: InferRequestType<(typeof client._cat.snapshots)[':repository']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.snapshots[':repository'].$get(args, options))
}

export async function getCatTasks(
  args: InferRequestType<typeof client._cat.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.tasks.$get(args, options))
}

export async function getCatTemplates(
  args: InferRequestType<typeof client._cat.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.templates.$get(args, options))
}

export async function getCatTemplatesName(
  args: InferRequestType<(typeof client._cat.templates)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.templates[':name'].$get(args, options))
}

export async function getCatThreadPool(
  args: InferRequestType<typeof client._cat.thread_pool.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.thread_pool.$get(args, options))
}

export async function getCatThreadPoolThreadPoolPatterns(
  args: InferRequestType<(typeof client._cat.thread_pool)[':thread_pool_patterns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.thread_pool[':thread_pool_patterns'].$get(args, options))
}

export async function getCatTransforms(
  args: InferRequestType<typeof client._cat.transforms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.transforms.$get(args, options))
}

export async function getCatTransformsTransformId(
  args: InferRequestType<(typeof client._cat.transforms)[':transform_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.transforms[':transform_id'].$get(args, options))
}

export async function getCcrAutoFollowName(
  args: InferRequestType<(typeof client._ccr.auto_follow)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ccr.auto_follow[':name'].$get(args, options))
}

export async function putCcrAutoFollowName(
  args: InferRequestType<(typeof client._ccr.auto_follow)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ccr.auto_follow[':name'].$put(args, options))
}

export async function deleteCcrAutoFollowName(
  args: InferRequestType<(typeof client._ccr.auto_follow)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ccr.auto_follow[':name'].$delete(args, options))
}

export async function putIndexCcrFollow(
  args: InferRequestType<(typeof client)[':index']['_ccr']['follow']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._ccr.follow.$put(args, options))
}

export async function getIndexCcrInfo(
  args: InferRequestType<(typeof client)[':index']['_ccr']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._ccr.info.$get(args, options))
}

export async function getIndexCcrStats(
  args: InferRequestType<(typeof client)[':index']['_ccr']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._ccr.stats.$get(args, options))
}

export async function postIndexCcrForgetFollower(
  args: InferRequestType<(typeof client)[':index']['_ccr']['forget_follower']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._ccr.forget_follower.$post(args, options))
}

export async function getCcrAutoFollow(
  args: InferRequestType<typeof client._ccr.auto_follow.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ccr.auto_follow.$get(args, options))
}

export async function postCcrAutoFollowNamePause(
  args: InferRequestType<(typeof client._ccr.auto_follow)[':name']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ccr.auto_follow[':name'].pause.$post(args, options))
}

export async function postIndexCcrPauseFollow(
  args: InferRequestType<(typeof client)[':index']['_ccr']['pause_follow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._ccr.pause_follow.$post(args, options))
}

export async function postCcrAutoFollowNameResume(
  args: InferRequestType<(typeof client._ccr.auto_follow)[':name']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ccr.auto_follow[':name'].resume.$post(args, options))
}

export async function postIndexCcrResumeFollow(
  args: InferRequestType<(typeof client)[':index']['_ccr']['resume_follow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._ccr.resume_follow.$post(args, options))
}

export async function getCcrStats(
  args: InferRequestType<typeof client._ccr.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ccr.stats.$get(args, options))
}

export async function postIndexCcrUnfollow(
  args: InferRequestType<(typeof client)[':index']['_ccr']['unfollow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._ccr.unfollow.$post(args, options))
}

export async function getSearchScroll(
  args: InferRequestType<typeof client._search.scroll.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search.scroll.$get(args, options))
}

export async function postSearchScroll(
  args: InferRequestType<typeof client._search.scroll.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search.scroll.$post(args, options))
}

export async function deleteSearchScroll(
  args: InferRequestType<typeof client._search.scroll.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search.scroll.$delete(args, options))
}

export async function getSearchScrollScrollId(
  args: InferRequestType<(typeof client._search.scroll)[':scroll_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search.scroll[':scroll_id'].$get(args, options))
}

export async function postSearchScrollScrollId(
  args: InferRequestType<(typeof client._search.scroll)[':scroll_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search.scroll[':scroll_id'].$post(args, options))
}

export async function deleteSearchScrollScrollId(
  args: InferRequestType<(typeof client._search.scroll)[':scroll_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search.scroll[':scroll_id'].$delete(args, options))
}

export async function deletePit(
  args: InferRequestType<typeof client._pit.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._pit.$delete(args, options))
}

export async function getClusterAllocationExplain(
  args: InferRequestType<typeof client._cluster.allocation.explain.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.allocation.explain.$get(args, options))
}

export async function postClusterAllocationExplain(
  args: InferRequestType<typeof client._cluster.allocation.explain.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.allocation.explain.$post(args, options))
}

export async function getComponentTemplateName(
  args: InferRequestType<(typeof client._component_template)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._component_template[':name'].$get(args, options))
}

export async function putComponentTemplateName(
  args: InferRequestType<(typeof client._component_template)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._component_template[':name'].$put(args, options))
}

export async function postComponentTemplateName(
  args: InferRequestType<(typeof client._component_template)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._component_template[':name'].$post(args, options))
}

export async function deleteComponentTemplateName(
  args: InferRequestType<(typeof client._component_template)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._component_template[':name'].$delete(args, options))
}

export async function headComponentTemplateName(
  args: InferRequestType<(typeof client._component_template)[':name']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._component_template[':name'].$head(args, options))
}

export async function postClusterVotingConfigExclusions(
  args: InferRequestType<typeof client._cluster.voting_config_exclusions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.voting_config_exclusions.$post(args, options))
}

export async function deleteClusterVotingConfigExclusions(
  args: InferRequestType<typeof client._cluster.voting_config_exclusions.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.voting_config_exclusions.$delete(args, options))
}

export async function getComponentTemplate(
  args: InferRequestType<typeof client._component_template.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._component_template.$get(args, options))
}

export async function getClusterSettings(
  args: InferRequestType<typeof client._cluster.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.settings.$get(args, options))
}

export async function putClusterSettings(
  args: InferRequestType<typeof client._cluster.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.settings.$put(args, options))
}

export async function getClusterHealth(
  args: InferRequestType<typeof client._cluster.health.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.health.$get(args, options))
}

export async function getClusterHealthIndex(
  args: InferRequestType<(typeof client._cluster.health)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.health[':index'].$get(args, options))
}

export async function getInfoTarget(
  args: InferRequestType<(typeof client._info)[':target']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._info[':target'].$get(args, options))
}

export async function getClusterPendingTasks(
  args: InferRequestType<typeof client._cluster.pending_tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.pending_tasks.$get(args, options))
}

export async function getRemoteInfo(options?: ClientRequestOptions) {
  return await parseResponse(client._remote.info.$get(undefined, options))
}

export async function postClusterReroute(
  args: InferRequestType<typeof client._cluster.reroute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.reroute.$post(args, options))
}

export async function getClusterState(
  args: InferRequestType<typeof client._cluster.state.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.state.$get(args, options))
}

export async function getClusterStateMetric(
  args: InferRequestType<(typeof client._cluster.state)[':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.state[':metric'].$get(args, options))
}

export async function getClusterStateMetricIndex(
  args: InferRequestType<(typeof client._cluster.state)[':metric'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.state[':metric'][':index'].$get(args, options))
}

export async function getClusterStats(
  args: InferRequestType<typeof client._cluster.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.stats.$get(args, options))
}

export async function getClusterStatsNodesNodeId(
  args: InferRequestType<(typeof client._cluster.stats.nodes)[':node_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.stats.nodes[':node_id'].$get(args, options))
}

export async function putConnectorConnectorIdCheckIn(
  args: InferRequestType<(typeof client._connector)[':connector_id']['_check_in']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector[':connector_id']._check_in.$put(args, options))
}

export async function getConnectorConnectorId(
  args: InferRequestType<(typeof client._connector)[':connector_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector[':connector_id'].$get(args, options))
}

export async function putConnectorConnectorId(
  args: InferRequestType<(typeof client._connector)[':connector_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector[':connector_id'].$put(args, options))
}

export async function deleteConnectorConnectorId(
  args: InferRequestType<(typeof client._connector)[':connector_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector[':connector_id'].$delete(args, options))
}

export async function getConnector(
  args: InferRequestType<typeof client._connector.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector.$get(args, options))
}

export async function putConnector(
  args: InferRequestType<typeof client._connector.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector.$put(args, options))
}

export async function postConnector(
  args: InferRequestType<typeof client._connector.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector.$post(args, options))
}

export async function putConnectorSyncJobConnectorSyncJobIdCancel(
  args: InferRequestType<
    (typeof client._connector._sync_job)[':connector_sync_job_id']['_cancel']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._connector._sync_job[':connector_sync_job_id']._cancel.$put(args, options),
  )
}

export async function putConnectorSyncJobConnectorSyncJobIdCheckIn(
  args: InferRequestType<
    (typeof client._connector._sync_job)[':connector_sync_job_id']['_check_in']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._connector._sync_job[':connector_sync_job_id']._check_in.$put(args, options),
  )
}

export async function putConnectorSyncJobConnectorSyncJobIdClaim(
  args: InferRequestType<
    (typeof client._connector._sync_job)[':connector_sync_job_id']['_claim']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._connector._sync_job[':connector_sync_job_id']._claim.$put(args, options),
  )
}

export async function getConnectorSyncJobConnectorSyncJobId(
  args: InferRequestType<(typeof client._connector._sync_job)[':connector_sync_job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._connector._sync_job[':connector_sync_job_id'].$get(args, options),
  )
}

export async function deleteConnectorSyncJobConnectorSyncJobId(
  args: InferRequestType<(typeof client._connector._sync_job)[':connector_sync_job_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._connector._sync_job[':connector_sync_job_id'].$delete(args, options),
  )
}

export async function putConnectorSyncJobConnectorSyncJobIdError(
  args: InferRequestType<
    (typeof client._connector._sync_job)[':connector_sync_job_id']['_error']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._connector._sync_job[':connector_sync_job_id']._error.$put(args, options),
  )
}

export async function getConnectorSyncJob(
  args: InferRequestType<typeof client._connector._sync_job.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector._sync_job.$get(args, options))
}

export async function postConnectorSyncJob(
  args: InferRequestType<typeof client._connector._sync_job.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector._sync_job.$post(args, options))
}

export async function putConnectorSyncJobConnectorSyncJobIdStats(
  args: InferRequestType<
    (typeof client._connector._sync_job)[':connector_sync_job_id']['_stats']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._connector._sync_job[':connector_sync_job_id']._stats.$put(args, options),
  )
}

export async function putConnectorConnectorIdFilteringActivate(
  args: InferRequestType<
    (typeof client._connector)[':connector_id']['_filtering']['_activate']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._connector[':connector_id']._filtering._activate.$put(args, options),
  )
}

export async function putConnectorConnectorIdApiKeyId(
  args: InferRequestType<(typeof client._connector)[':connector_id']['_api_key_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector[':connector_id']._api_key_id.$put(args, options))
}

export async function putConnectorConnectorIdConfiguration(
  args: InferRequestType<(typeof client._connector)[':connector_id']['_configuration']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector[':connector_id']._configuration.$put(args, options))
}

export async function putConnectorConnectorIdError(
  args: InferRequestType<(typeof client._connector)[':connector_id']['_error']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector[':connector_id']._error.$put(args, options))
}

export async function putConnectorConnectorIdFeatures(
  args: InferRequestType<(typeof client._connector)[':connector_id']['_features']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector[':connector_id']._features.$put(args, options))
}

export async function putConnectorConnectorIdFiltering(
  args: InferRequestType<(typeof client._connector)[':connector_id']['_filtering']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector[':connector_id']._filtering.$put(args, options))
}

export async function putConnectorConnectorIdFilteringValidation(
  args: InferRequestType<
    (typeof client._connector)[':connector_id']['_filtering']['_validation']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._connector[':connector_id']._filtering._validation.$put(args, options),
  )
}

export async function putConnectorConnectorIdIndexName(
  args: InferRequestType<(typeof client._connector)[':connector_id']['_index_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector[':connector_id']._index_name.$put(args, options))
}

export async function putConnectorConnectorIdName(
  args: InferRequestType<(typeof client._connector)[':connector_id']['_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector[':connector_id']._name.$put(args, options))
}

export async function putConnectorConnectorIdNative(
  args: InferRequestType<(typeof client._connector)[':connector_id']['_native']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector[':connector_id']._native.$put(args, options))
}

export async function putConnectorConnectorIdPipeline(
  args: InferRequestType<(typeof client._connector)[':connector_id']['_pipeline']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector[':connector_id']._pipeline.$put(args, options))
}

export async function putConnectorConnectorIdScheduling(
  args: InferRequestType<(typeof client._connector)[':connector_id']['_scheduling']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector[':connector_id']._scheduling.$put(args, options))
}

export async function putConnectorConnectorIdServiceType(
  args: InferRequestType<(typeof client._connector)[':connector_id']['_service_type']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector[':connector_id']._service_type.$put(args, options))
}

export async function putConnectorConnectorIdStatus(
  args: InferRequestType<(typeof client._connector)[':connector_id']['_status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._connector[':connector_id']._status.$put(args, options))
}

export async function getCount(
  args: InferRequestType<typeof client._count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._count.$get(args, options))
}

export async function postCount(
  args: InferRequestType<typeof client._count.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._count.$post(args, options))
}

export async function getIndexCount(
  args: InferRequestType<(typeof client)[':index']['_count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._count.$get(args, options))
}

export async function postIndexCount(
  args: InferRequestType<(typeof client)[':index']['_count']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._count.$post(args, options))
}

export async function putIndexCreateId(
  args: InferRequestType<(typeof client)[':index']['_create'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._create[':id'].$put(args, options))
}

export async function postIndexCreateId(
  args: InferRequestType<(typeof client)[':index']['_create'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._create[':id'].$post(args, options))
}

export async function postDanglingIndexUuid(
  args: InferRequestType<(typeof client._dangling)[':index_uuid']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._dangling[':index_uuid'].$post(args, options))
}

export async function deleteDanglingIndexUuid(
  args: InferRequestType<(typeof client._dangling)[':index_uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._dangling[':index_uuid'].$delete(args, options))
}

export async function getDangling(options?: ClientRequestOptions) {
  return await parseResponse(client._dangling.$get(undefined, options))
}

export async function getIndexDocId(
  args: InferRequestType<(typeof client)[':index']['_doc'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._doc[':id'].$get(args, options))
}

export async function putIndexDocId(
  args: InferRequestType<(typeof client)[':index']['_doc'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._doc[':id'].$put(args, options))
}

export async function postIndexDocId(
  args: InferRequestType<(typeof client)[':index']['_doc'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._doc[':id'].$post(args, options))
}

export async function deleteIndexDocId(
  args: InferRequestType<(typeof client)[':index']['_doc'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._doc[':id'].$delete(args, options))
}

export async function headIndexDocId(
  args: InferRequestType<(typeof client)[':index']['_doc'][':id']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._doc[':id'].$head(args, options))
}

export async function postIndexDeleteByQuery(
  args: InferRequestType<(typeof client)[':index']['_delete_by_query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._delete_by_query.$post(args, options))
}

export async function postDeleteByQueryTaskIdRethrottle(
  args: InferRequestType<(typeof client._delete_by_query)[':task_id']['_rethrottle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._delete_by_query[':task_id']._rethrottle.$post(args, options))
}

export async function getScriptsId(
  args: InferRequestType<(typeof client._scripts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._scripts[':id'].$get(args, options))
}

export async function putScriptsId(
  args: InferRequestType<(typeof client._scripts)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._scripts[':id'].$put(args, options))
}

export async function postScriptsId(
  args: InferRequestType<(typeof client._scripts)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._scripts[':id'].$post(args, options))
}

export async function deleteScriptsId(
  args: InferRequestType<(typeof client._scripts)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._scripts[':id'].$delete(args, options))
}

export async function postEncryptionReset(
  args: InferRequestType<typeof client._encryption._reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._encryption._reset.$post(args, options))
}

export async function getEnrichPolicyName(
  args: InferRequestType<(typeof client._enrich.policy)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._enrich.policy[':name'].$get(args, options))
}

export async function putEnrichPolicyName(
  args: InferRequestType<(typeof client._enrich.policy)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._enrich.policy[':name'].$put(args, options))
}

export async function deleteEnrichPolicyName(
  args: InferRequestType<(typeof client._enrich.policy)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._enrich.policy[':name'].$delete(args, options))
}

export async function putEnrichPolicyNameExecute(
  args: InferRequestType<(typeof client._enrich.policy)[':name']['_execute']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._enrich.policy[':name']._execute.$put(args, options))
}

export async function getEnrichPolicy(
  args: InferRequestType<typeof client._enrich.policy.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._enrich.policy.$get(args, options))
}

export async function getEnrichStats(
  args: InferRequestType<typeof client._enrich._stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._enrich._stats.$get(args, options))
}

export async function getEqlSearchId(
  args: InferRequestType<(typeof client._eql.search)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._eql.search[':id'].$get(args, options))
}

export async function deleteEqlSearchId(
  args: InferRequestType<(typeof client._eql.search)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._eql.search[':id'].$delete(args, options))
}

export async function getEqlSearchStatusId(
  args: InferRequestType<(typeof client._eql.search.status)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._eql.search.status[':id'].$get(args, options))
}

export async function getIndexEqlSearch(
  args: InferRequestType<(typeof client)[':index']['_eql']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._eql.search.$get(args, options))
}

export async function postIndexEqlSearch(
  args: InferRequestType<(typeof client)[':index']['_eql']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._eql.search.$post(args, options))
}

export async function postQueryAsync(
  args: InferRequestType<typeof client._query.async.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query.async.$post(args, options))
}

export async function getQueryAsyncId(
  args: InferRequestType<(typeof client._query.async)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query.async[':id'].$get(args, options))
}

export async function deleteQueryAsyncId(
  args: InferRequestType<(typeof client._query.async)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query.async[':id'].$delete(args, options))
}

export async function postQueryAsyncIdStop(
  args: InferRequestType<(typeof client._query.async)[':id']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query.async[':id'].stop.$post(args, options))
}

export async function getQueryDataSourceName(
  args: InferRequestType<(typeof client._query.data_source)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query.data_source[':name'].$get(args, options))
}

export async function putQueryDataSourceName(
  args: InferRequestType<(typeof client._query.data_source)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query.data_source[':name'].$put(args, options))
}

export async function deleteQueryDataSourceName(
  args: InferRequestType<(typeof client._query.data_source)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query.data_source[':name'].$delete(args, options))
}

export async function getQueryDatasetName(
  args: InferRequestType<(typeof client._query.dataset)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query.dataset[':name'].$get(args, options))
}

export async function putQueryDatasetName(
  args: InferRequestType<(typeof client._query.dataset)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query.dataset[':name'].$put(args, options))
}

export async function deleteQueryDatasetName(
  args: InferRequestType<(typeof client._query.dataset)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query.dataset[':name'].$delete(args, options))
}

export async function getQueryViewName(
  args: InferRequestType<(typeof client._query.view)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query.view[':name'].$get(args, options))
}

export async function putQueryViewName(
  args: InferRequestType<(typeof client._query.view)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query.view[':name'].$put(args, options))
}

export async function deleteQueryViewName(
  args: InferRequestType<(typeof client._query.view)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query.view[':name'].$delete(args, options))
}

export async function getQueryDataSource(
  args: InferRequestType<typeof client._query.data_source.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query.data_source.$get(args, options))
}

export async function getQueryDataset(
  args: InferRequestType<typeof client._query.dataset.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query.dataset.$get(args, options))
}

export async function getQueryQueriesId(
  args: InferRequestType<(typeof client._query.queries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query.queries[':id'].$get(args, options))
}

export async function getQueryView(options?: ClientRequestOptions) {
  return await parseResponse(client._query.view.$get(undefined, options))
}

export async function getQueryQueries(options?: ClientRequestOptions) {
  return await parseResponse(client._query.queries.$get(undefined, options))
}

export async function postQuery(
  args: InferRequestType<typeof client._query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query.$post(args, options))
}

export async function getIndexSourceId(
  args: InferRequestType<(typeof client)[':index']['_source'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._source[':id'].$get(args, options))
}

export async function headIndexSourceId(
  args: InferRequestType<(typeof client)[':index']['_source'][':id']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._source[':id'].$head(args, options))
}

export async function getIndexExplainId(
  args: InferRequestType<(typeof client)[':index']['_explain'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._explain[':id'].$get(args, options))
}

export async function postIndexExplainId(
  args: InferRequestType<(typeof client)[':index']['_explain'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._explain[':id'].$post(args, options))
}

export async function getFeatures(
  args: InferRequestType<typeof client._features.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._features.$get(args, options))
}

export async function postFeaturesReset(
  args: InferRequestType<typeof client._features._reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._features._reset.$post(args, options))
}

export async function getFieldCaps(
  args: InferRequestType<typeof client._field_caps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._field_caps.$get(args, options))
}

export async function postFieldCaps(
  args: InferRequestType<typeof client._field_caps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._field_caps.$post(args, options))
}

export async function getIndexFieldCaps(
  args: InferRequestType<(typeof client)[':index']['_field_caps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._field_caps.$get(args, options))
}

export async function postIndexFieldCaps(
  args: InferRequestType<(typeof client)[':index']['_field_caps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._field_caps.$post(args, options))
}

export async function getIndexFleetGlobalCheckpoints(
  args: InferRequestType<(typeof client)[':index']['_fleet']['global_checkpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._fleet.global_checkpoints.$get(args, options))
}

export async function getFleetFleetMsearch(
  args: InferRequestType<typeof client._fleet._fleet_msearch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._fleet._fleet_msearch.$get(args, options))
}

export async function postFleetFleetMsearch(
  args: InferRequestType<typeof client._fleet._fleet_msearch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._fleet._fleet_msearch.$post(args, options))
}

export async function getIndexFleetFleetMsearch(
  args: InferRequestType<(typeof client)[':index']['_fleet']['_fleet_msearch']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._fleet._fleet_msearch.$get(args, options))
}

export async function postIndexFleetFleetMsearch(
  args: InferRequestType<(typeof client)[':index']['_fleet']['_fleet_msearch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._fleet._fleet_msearch.$post(args, options))
}

export async function getIndexFleetFleetSearch(
  args: InferRequestType<(typeof client)[':index']['_fleet']['_fleet_search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._fleet._fleet_search.$get(args, options))
}

export async function postIndexFleetFleetSearch(
  args: InferRequestType<(typeof client)[':index']['_fleet']['_fleet_search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._fleet._fleet_search.$post(args, options))
}

export async function getReindexTaskId(
  args: InferRequestType<(typeof client._reindex)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._reindex[':task_id'].$get(args, options))
}

export async function getScriptContext(options?: ClientRequestOptions) {
  return await parseResponse(client._script_context.$get(undefined, options))
}

export async function getScriptLanguage(options?: ClientRequestOptions) {
  return await parseResponse(client._script_language.$get(undefined, options))
}

export async function getIndexGraphExplore(
  args: InferRequestType<(typeof client)[':index']['_graph']['explore']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._graph.explore.$get(args, options))
}

export async function postIndexGraphExplore(
  args: InferRequestType<(typeof client)[':index']['_graph']['explore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._graph.explore.$post(args, options))
}

export async function getHealthReport(
  args: InferRequestType<typeof client._health_report.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._health_report.$get(args, options))
}

export async function getHealthReportFeature(
  args: InferRequestType<(typeof client._health_report)[':feature']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._health_report[':feature'].$get(args, options))
}

export async function getIlmPolicyPolicy(
  args: InferRequestType<(typeof client._ilm.policy)[':policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ilm.policy[':policy'].$get(args, options))
}

export async function putIlmPolicyPolicy(
  args: InferRequestType<(typeof client._ilm.policy)[':policy']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ilm.policy[':policy'].$put(args, options))
}

export async function deleteIlmPolicyPolicy(
  args: InferRequestType<(typeof client._ilm.policy)[':policy']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ilm.policy[':policy'].$delete(args, options))
}

export async function getIndexIlmExplain(
  args: InferRequestType<(typeof client)[':index']['_ilm']['explain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._ilm.explain.$get(args, options))
}

export async function getIlmPolicy(
  args: InferRequestType<typeof client._ilm.policy.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ilm.policy.$get(args, options))
}

export async function getIlmStatus(options?: ClientRequestOptions) {
  return await parseResponse(client._ilm.status.$get(undefined, options))
}

export async function postIlmMigrateToDataTiers(
  args: InferRequestType<typeof client._ilm.migrate_to_data_tiers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ilm.migrate_to_data_tiers.$post(args, options))
}

export async function postIlmMoveIndex(
  args: InferRequestType<(typeof client._ilm.move)[':index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ilm.move[':index'].$post(args, options))
}

export async function postIndexIlmRemove(
  args: InferRequestType<(typeof client)[':index']['_ilm']['remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._ilm.remove.$post(args, options))
}

export async function postIndexIlmRetry(
  args: InferRequestType<(typeof client)[':index']['_ilm']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._ilm.retry.$post(args, options))
}

export async function postIlmStart(
  args: InferRequestType<typeof client._ilm.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ilm.start.$post(args, options))
}

export async function postIlmStop(
  args: InferRequestType<typeof client._ilm.stop.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ilm.stop.$post(args, options))
}

export async function postIndexDoc(
  args: InferRequestType<(typeof client)[':index']['_doc']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._doc.$post(args, options))
}

export async function putIndexBlockBlock(
  args: InferRequestType<(typeof client)[':index']['_block'][':block']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._block[':block'].$put(args, options))
}

export async function deleteIndexBlockBlock(
  args: InferRequestType<(typeof client)[':index']['_block'][':block']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._block[':block'].$delete(args, options))
}

export async function getAnalyze(
  args: InferRequestType<typeof client._analyze.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._analyze.$get(args, options))
}

export async function postAnalyze(
  args: InferRequestType<typeof client._analyze.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._analyze.$post(args, options))
}

export async function getIndexAnalyze(
  args: InferRequestType<(typeof client)[':index']['_analyze']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._analyze.$get(args, options))
}

export async function postIndexAnalyze(
  args: InferRequestType<(typeof client)[':index']['_analyze']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._analyze.$post(args, options))
}

export async function postMigrationReindexIndexCancel(
  args: InferRequestType<(typeof client._migration.reindex)[':index']['_cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._migration.reindex[':index']._cancel.$post(args, options))
}

export async function postCacheClear(
  args: InferRequestType<typeof client._cache.clear.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cache.clear.$post(args, options))
}

export async function postIndexCacheClear(
  args: InferRequestType<(typeof client)[':index']['_cache']['clear']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._cache.clear.$post(args, options))
}

export async function putIndexCloneTarget(
  args: InferRequestType<(typeof client)[':index']['_clone'][':target']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._clone[':target'].$put(args, options))
}

export async function postIndexCloneTarget(
  args: InferRequestType<(typeof client)[':index']['_clone'][':target']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._clone[':target'].$post(args, options))
}

export async function postIndexClose(
  args: InferRequestType<(typeof client)[':index']['_close']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._close.$post(args, options))
}

export async function getIndex(
  args: InferRequestType<(typeof client)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index'].$get(args, options))
}

export async function putIndex(
  args: InferRequestType<(typeof client)[':index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index'].$put(args, options))
}

export async function deleteIndex(
  args: InferRequestType<(typeof client)[':index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index'].$delete(args, options))
}

export async function headIndex(
  args: InferRequestType<(typeof client)[':index']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index'].$head(args, options))
}

export async function getDataStreamName(
  args: InferRequestType<(typeof client._data_stream)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream[':name'].$get(args, options))
}

export async function putDataStreamName(
  args: InferRequestType<(typeof client._data_stream)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream[':name'].$put(args, options))
}

export async function deleteDataStreamName(
  args: InferRequestType<(typeof client._data_stream)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream[':name'].$delete(args, options))
}

export async function putCreateFromSourceDest(
  args: InferRequestType<(typeof client._create_from)[':source'][':dest']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._create_from[':source'][':dest'].$put(args, options))
}

export async function postCreateFromSourceDest(
  args: InferRequestType<(typeof client._create_from)[':source'][':dest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._create_from[':source'][':dest'].$post(args, options))
}

export async function getDataStreamStats(
  args: InferRequestType<typeof client._data_stream._stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream._stats.$get(args, options))
}

export async function getDataStreamNameStats(
  args: InferRequestType<(typeof client._data_stream)[':name']['_stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream[':name']._stats.$get(args, options))
}

export async function getIndexAliasName(
  args: InferRequestType<(typeof client)[':index']['_alias'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._alias[':name'].$get(args, options))
}

export async function putIndexAliasName(
  args: InferRequestType<(typeof client)[':index']['_alias'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._alias[':name'].$put(args, options))
}

export async function postIndexAliasName(
  args: InferRequestType<(typeof client)[':index']['_alias'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._alias[':name'].$post(args, options))
}

export async function deleteIndexAliasName(
  args: InferRequestType<(typeof client)[':index']['_alias'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._alias[':name'].$delete(args, options))
}

export async function headIndexAliasName(
  args: InferRequestType<(typeof client)[':index']['_alias'][':name']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._alias[':name'].$head(args, options))
}

export async function putIndexAliasesName(
  args: InferRequestType<(typeof client)[':index']['_aliases'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._aliases[':name'].$put(args, options))
}

export async function postIndexAliasesName(
  args: InferRequestType<(typeof client)[':index']['_aliases'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._aliases[':name'].$post(args, options))
}

export async function deleteIndexAliasesName(
  args: InferRequestType<(typeof client)[':index']['_aliases'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._aliases[':name'].$delete(args, options))
}

export async function getDataStreamNameLifecycle(
  args: InferRequestType<(typeof client._data_stream)[':name']['_lifecycle']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream[':name']._lifecycle.$get(args, options))
}

export async function putDataStreamNameLifecycle(
  args: InferRequestType<(typeof client._data_stream)[':name']['_lifecycle']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream[':name']._lifecycle.$put(args, options))
}

export async function deleteDataStreamNameLifecycle(
  args: InferRequestType<(typeof client._data_stream)[':name']['_lifecycle']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream[':name']._lifecycle.$delete(args, options))
}

export async function getDataStreamNameOptions(
  args: InferRequestType<(typeof client._data_stream)[':name']['_options']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream[':name']._options.$get(args, options))
}

export async function putDataStreamNameOptions(
  args: InferRequestType<(typeof client._data_stream)[':name']['_options']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream[':name']._options.$put(args, options))
}

export async function deleteDataStreamNameOptions(
  args: InferRequestType<(typeof client._data_stream)[':name']['_options']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream[':name']._options.$delete(args, options))
}

export async function getIndexTemplateName(
  args: InferRequestType<(typeof client._index_template)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._index_template[':name'].$get(args, options))
}

export async function putIndexTemplateName(
  args: InferRequestType<(typeof client._index_template)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._index_template[':name'].$put(args, options))
}

export async function postIndexTemplateName(
  args: InferRequestType<(typeof client._index_template)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._index_template[':name'].$post(args, options))
}

export async function deleteIndexTemplateName(
  args: InferRequestType<(typeof client._index_template)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._index_template[':name'].$delete(args, options))
}

export async function headIndexTemplateName(
  args: InferRequestType<(typeof client._index_template)[':name']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._index_template[':name'].$head(args, options))
}

export async function getTemplateName(
  args: InferRequestType<(typeof client._template)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._template[':name'].$get(args, options))
}

export async function putTemplateName(
  args: InferRequestType<(typeof client._template)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._template[':name'].$put(args, options))
}

export async function postTemplateName(
  args: InferRequestType<(typeof client._template)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._template[':name'].$post(args, options))
}

export async function deleteTemplateName(
  args: InferRequestType<(typeof client._template)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._template[':name'].$delete(args, options))
}

export async function headTemplateName(
  args: InferRequestType<(typeof client._template)[':name']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._template[':name'].$head(args, options))
}

export async function postIndexDiskUsage(
  args: InferRequestType<(typeof client)[':index']['_disk_usage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._disk_usage.$post(args, options))
}

export async function postIndexDownsampleTargetIndex(
  args: InferRequestType<(typeof client)[':index']['_downsample'][':target_index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._downsample[':target_index'].$post(args, options))
}

export async function getAliasName(
  args: InferRequestType<(typeof client._alias)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._alias[':name'].$get(args, options))
}

export async function headAliasName(
  args: InferRequestType<(typeof client._alias)[':name']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._alias[':name'].$head(args, options))
}

export async function getIndexLifecycleExplain(
  args: InferRequestType<(typeof client)[':index']['_lifecycle']['explain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._lifecycle.explain.$get(args, options))
}

export async function getIndexFieldUsageStats(
  args: InferRequestType<(typeof client)[':index']['_field_usage_stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._field_usage_stats.$get(args, options))
}

export async function getFlush(
  args: InferRequestType<typeof client._flush.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._flush.$get(args, options))
}

export async function postFlush(
  args: InferRequestType<typeof client._flush.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._flush.$post(args, options))
}

export async function getIndexFlush(
  args: InferRequestType<(typeof client)[':index']['_flush']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._flush.$get(args, options))
}

export async function postIndexFlush(
  args: InferRequestType<(typeof client)[':index']['_flush']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._flush.$post(args, options))
}

export async function postForcemerge(
  args: InferRequestType<typeof client._forcemerge.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._forcemerge.$post(args, options))
}

export async function postIndexForcemerge(
  args: InferRequestType<(typeof client)[':index']['_forcemerge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._forcemerge.$post(args, options))
}

export async function getAlias(
  args: InferRequestType<typeof client._alias.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._alias.$get(args, options))
}

export async function getIndexAlias(
  args: InferRequestType<(typeof client)[':index']['_alias']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._alias.$get(args, options))
}

export async function getLifecycleStats(options?: ClientRequestOptions) {
  return await parseResponse(client._lifecycle.stats.$get(undefined, options))
}

export async function getDataStream(
  args: InferRequestType<typeof client._data_stream.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream.$get(args, options))
}

export async function getDataStreamNameMappings(
  args: InferRequestType<(typeof client._data_stream)[':name']['_mappings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream[':name']._mappings.$get(args, options))
}

export async function putDataStreamNameMappings(
  args: InferRequestType<(typeof client._data_stream)[':name']['_mappings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream[':name']._mappings.$put(args, options))
}

export async function getDataStreamNameSettings(
  args: InferRequestType<(typeof client._data_stream)[':name']['_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream[':name']._settings.$get(args, options))
}

export async function putDataStreamNameSettings(
  args: InferRequestType<(typeof client._data_stream)[':name']['_settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream[':name']._settings.$put(args, options))
}

export async function getMappingFieldFields(
  args: InferRequestType<(typeof client._mapping.field)[':fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._mapping.field[':fields'].$get(args, options))
}

export async function getIndexMappingFieldFields(
  args: InferRequestType<(typeof client)[':index']['_mapping']['field'][':fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._mapping.field[':fields'].$get(args, options))
}

export async function getIndexTemplate(
  args: InferRequestType<typeof client._index_template.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._index_template.$get(args, options))
}

export async function getMapping(
  args: InferRequestType<typeof client._mapping.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._mapping.$get(args, options))
}

export async function getIndexMapping(
  args: InferRequestType<(typeof client)[':index']['_mapping']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._mapping.$get(args, options))
}

export async function putIndexMapping(
  args: InferRequestType<(typeof client)[':index']['_mapping']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._mapping.$put(args, options))
}

export async function postIndexMapping(
  args: InferRequestType<(typeof client)[':index']['_mapping']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._mapping.$post(args, options))
}

export async function getMigrationReindexIndexStatus(
  args: InferRequestType<(typeof client._migration.reindex)[':index']['_status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._migration.reindex[':index']._status.$get(args, options))
}

export async function getSettings(
  args: InferRequestType<typeof client._settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._settings.$get(args, options))
}

export async function putSettings(
  args: InferRequestType<typeof client._settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._settings.$put(args, options))
}

export async function getIndexSettings(
  args: InferRequestType<(typeof client)[':index']['_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._settings.$get(args, options))
}

export async function putIndexSettings(
  args: InferRequestType<(typeof client)[':index']['_settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._settings.$put(args, options))
}

export async function getIndexSettingsName(
  args: InferRequestType<(typeof client)[':index']['_settings'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._settings[':name'].$get(args, options))
}

export async function getSettingsName(
  args: InferRequestType<(typeof client._settings)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._settings[':name'].$get(args, options))
}

export async function getTemplate(
  args: InferRequestType<typeof client._template.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._template.$get(args, options))
}

export async function postMigrationReindex(
  args: InferRequestType<typeof client._migration.reindex.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._migration.reindex.$post(args, options))
}

export async function postDataStreamMigrateName(
  args: InferRequestType<(typeof client._data_stream._migrate)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream._migrate[':name'].$post(args, options))
}

export async function postDataStreamModify(
  args: InferRequestType<typeof client._data_stream._modify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream._modify.$post(args, options))
}

export async function postIndexOpen(
  args: InferRequestType<(typeof client)[':index']['_open']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._open.$post(args, options))
}

export async function postDataStreamPromoteName(
  args: InferRequestType<(typeof client._data_stream._promote)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream._promote[':name'].$post(args, options))
}

export async function getRecovery(
  args: InferRequestType<typeof client._recovery.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._recovery.$get(args, options))
}

export async function getIndexRecovery(
  args: InferRequestType<(typeof client)[':index']['_recovery']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._recovery.$get(args, options))
}

export async function getRefresh(
  args: InferRequestType<typeof client._refresh.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._refresh.$get(args, options))
}

export async function postRefresh(
  args: InferRequestType<typeof client._refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._refresh.$post(args, options))
}

export async function getIndexRefresh(
  args: InferRequestType<(typeof client)[':index']['_refresh']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._refresh.$get(args, options))
}

export async function postIndexRefresh(
  args: InferRequestType<(typeof client)[':index']['_refresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._refresh.$post(args, options))
}

export async function getIndexReloadSearchAnalyzers(
  args: InferRequestType<(typeof client)[':index']['_reload_search_analyzers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._reload_search_analyzers.$get(args, options))
}

export async function postIndexReloadSearchAnalyzers(
  args: InferRequestType<(typeof client)[':index']['_reload_search_analyzers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._reload_search_analyzers.$post(args, options))
}

export async function getResolveCluster(
  args: InferRequestType<typeof client._resolve.cluster.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._resolve.cluster.$get(args, options))
}

export async function getResolveClusterName(
  args: InferRequestType<(typeof client._resolve.cluster)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._resolve.cluster[':name'].$get(args, options))
}

export async function getResolveIndexName(
  args: InferRequestType<(typeof client._resolve.index)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._resolve.index[':name'].$get(args, options))
}

export async function postResolveIndexName(
  args: InferRequestType<(typeof client._resolve.index)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._resolve.index[':name'].$post(args, options))
}

export async function postAliasRollover(
  args: InferRequestType<(typeof client)[':alias']['_rollover']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':alias']._rollover.$post(args, options))
}

export async function postAliasRolloverNewIndex(
  args: InferRequestType<(typeof client)[':alias']['_rollover'][':new_index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':alias']._rollover[':new_index'].$post(args, options))
}

export async function getSegments(
  args: InferRequestType<typeof client._segments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._segments.$get(args, options))
}

export async function getIndexSegments(
  args: InferRequestType<(typeof client)[':index']['_segments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._segments.$get(args, options))
}

export async function getShardStores(
  args: InferRequestType<typeof client._shard_stores.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._shard_stores.$get(args, options))
}

export async function getIndexShardStores(
  args: InferRequestType<(typeof client)[':index']['_shard_stores']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._shard_stores.$get(args, options))
}

export async function putIndexShrinkTarget(
  args: InferRequestType<(typeof client)[':index']['_shrink'][':target']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._shrink[':target'].$put(args, options))
}

export async function postIndexShrinkTarget(
  args: InferRequestType<(typeof client)[':index']['_shrink'][':target']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._shrink[':target'].$post(args, options))
}

export async function postIndexTemplateSimulateIndexName(
  args: InferRequestType<(typeof client._index_template._simulate_index)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._index_template._simulate_index[':name'].$post(args, options))
}

export async function postIndexTemplateSimulate(
  args: InferRequestType<typeof client._index_template._simulate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._index_template._simulate.$post(args, options))
}

export async function postIndexTemplateSimulateName(
  args: InferRequestType<(typeof client._index_template._simulate)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._index_template._simulate[':name'].$post(args, options))
}

export async function putIndexSplitTarget(
  args: InferRequestType<(typeof client)[':index']['_split'][':target']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._split[':target'].$put(args, options))
}

export async function postIndexSplitTarget(
  args: InferRequestType<(typeof client)[':index']['_split'][':target']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._split[':target'].$post(args, options))
}

export async function getStats(
  args: InferRequestType<typeof client._stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._stats.$get(args, options))
}

export async function getStatsMetric(
  args: InferRequestType<(typeof client._stats)[':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._stats[':metric'].$get(args, options))
}

export async function getIndexStats(
  args: InferRequestType<(typeof client)[':index']['_stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._stats.$get(args, options))
}

export async function getIndexStatsMetric(
  args: InferRequestType<(typeof client)[':index']['_stats'][':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._stats[':metric'].$get(args, options))
}

export async function postAliases(
  args: InferRequestType<typeof client._aliases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._aliases.$post(args, options))
}

export async function getValidateQuery(
  args: InferRequestType<typeof client._validate.query.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._validate.query.$get(args, options))
}

export async function postValidateQuery(
  args: InferRequestType<typeof client._validate.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._validate.query.$post(args, options))
}

export async function getIndexValidateQuery(
  args: InferRequestType<(typeof client)[':index']['_validate']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._validate.query.$get(args, options))
}

export async function postIndexValidateQuery(
  args: InferRequestType<(typeof client)[':index']['_validate']['query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._validate.query.$post(args, options))
}

export async function postInferenceChatCompletionInferenceId(
  args: InferRequestType<(typeof client._inference.chat_completion)[':inference_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference.chat_completion[':inference_id'].$post(args, options),
  )
}

export async function postInferenceChatCompletionInferenceIdStream(
  args: InferRequestType<
    (typeof client._inference.chat_completion)[':inference_id']['_stream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference.chat_completion[':inference_id']._stream.$post(args, options),
  )
}

export async function postInferenceCompletionInferenceId(
  args: InferRequestType<(typeof client._inference.completion)[':inference_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._inference.completion[':inference_id'].$post(args, options))
}

export async function postInferenceDecisionInferenceId(
  args: InferRequestType<(typeof client._inference.decision)[':inference_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._inference.decision[':inference_id'].$post(args, options))
}

export async function getInferenceInferenceId(
  args: InferRequestType<(typeof client._inference)[':inference_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._inference[':inference_id'].$get(args, options))
}

export async function putInferenceInferenceId(
  args: InferRequestType<(typeof client._inference)[':inference_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._inference[':inference_id'].$put(args, options))
}

export async function postInferenceInferenceId(
  args: InferRequestType<(typeof client._inference)[':inference_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._inference[':inference_id'].$post(args, options))
}

export async function deleteInferenceInferenceId(
  args: InferRequestType<(typeof client._inference)[':inference_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._inference[':inference_id'].$delete(args, options))
}

export async function getInferenceTaskTypeInferenceId(
  args: InferRequestType<(typeof client._inference)[':task_type'][':inference_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._inference[':task_type'][':inference_id'].$get(args, options))
}

export async function putInferenceTaskTypeInferenceId(
  args: InferRequestType<(typeof client._inference)[':task_type'][':inference_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._inference[':task_type'][':inference_id'].$put(args, options))
}

export async function postInferenceTaskTypeInferenceId(
  args: InferRequestType<(typeof client._inference)[':task_type'][':inference_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._inference[':task_type'][':inference_id'].$post(args, options))
}

export async function deleteInferenceTaskTypeInferenceId(
  args: InferRequestType<(typeof client._inference)[':task_type'][':inference_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':inference_id'].$delete(args, options),
  )
}

export async function getInferenceRegionPolicy(options?: ClientRequestOptions) {
  return await parseResponse(client._inference._region_policy.$get(undefined, options))
}

export async function putInferenceRegionPolicy(
  args: InferRequestType<typeof client._inference._region_policy.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._inference._region_policy.$put(args, options))
}

export async function deleteInferenceRegionPolicy(options?: ClientRequestOptions) {
  return await parseResponse(client._inference._region_policy.$delete(undefined, options))
}

export async function postInferenceDocumentExtractionInferenceId(
  args: InferRequestType<(typeof client._inference.document_extraction)[':inference_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference.document_extraction[':inference_id'].$post(args, options),
  )
}

export async function postInferenceEmbeddingInferenceId(
  args: InferRequestType<(typeof client._inference.embedding)[':inference_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._inference.embedding[':inference_id'].$post(args, options))
}

export async function getInference(options?: ClientRequestOptions) {
  return await parseResponse(client._inference.$get(undefined, options))
}

export async function getInferenceTaskTypeAll(
  args: InferRequestType<(typeof client._inference)[':task_type']['_all']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._inference[':task_type']._all.$get(args, options))
}

export async function putInferenceTaskTypeAi21InferenceId(
  args: InferRequestType<(typeof client._inference)[':task_type'][':ai21_inference_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':ai21_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeAlibabacloudInferenceId(
  args: InferRequestType<
    (typeof client._inference)[':task_type'][':alibabacloud_inference_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':alibabacloud_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeAmazonbedrockInferenceId(
  args: InferRequestType<
    (typeof client._inference)[':task_type'][':amazonbedrock_inference_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':amazonbedrock_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeAmazonsagemakerInferenceId(
  args: InferRequestType<
    (typeof client._inference)[':task_type'][':amazonsagemaker_inference_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':amazonsagemaker_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeAnthropicInferenceId(
  args: InferRequestType<
    (typeof client._inference)[':task_type'][':anthropic_inference_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':anthropic_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeAzureaistudioInferenceId(
  args: InferRequestType<
    (typeof client._inference)[':task_type'][':azureaistudio_inference_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':azureaistudio_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeAzureopenaiInferenceId(
  args: InferRequestType<
    (typeof client._inference)[':task_type'][':azureopenai_inference_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':azureopenai_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeCohereInferenceId(
  args: InferRequestType<(typeof client._inference)[':task_type'][':cohere_inference_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':cohere_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeContextualaiInferenceId(
  args: InferRequestType<
    (typeof client._inference)[':task_type'][':contextualai_inference_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':contextualai_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeCustomInferenceId(
  args: InferRequestType<(typeof client._inference)[':task_type'][':custom_inference_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':custom_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeDeepseekInferenceId(
  args: InferRequestType<
    (typeof client._inference)[':task_type'][':deepseek_inference_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':deepseek_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeElasticsearchInferenceId(
  args: InferRequestType<
    (typeof client._inference)[':task_type'][':elasticsearch_inference_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':elasticsearch_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeElserInferenceId(
  args: InferRequestType<(typeof client._inference)[':task_type'][':elser_inference_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':elser_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeFireworksaiInferenceId(
  args: InferRequestType<
    (typeof client._inference)[':task_type'][':fireworksai_inference_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':fireworksai_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeGoogleaistudioInferenceId(
  args: InferRequestType<
    (typeof client._inference)[':task_type'][':googleaistudio_inference_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':googleaistudio_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeGooglevertexaiInferenceId(
  args: InferRequestType<
    (typeof client._inference)[':task_type'][':googlevertexai_inference_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':googlevertexai_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeGroqInferenceId(
  args: InferRequestType<(typeof client._inference)[':task_type'][':groq_inference_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':groq_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeHuggingfaceInferenceId(
  args: InferRequestType<
    (typeof client._inference)[':task_type'][':huggingface_inference_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':huggingface_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeJinaaiInferenceId(
  args: InferRequestType<(typeof client._inference)[':task_type'][':jinaai_inference_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':jinaai_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeLlamaInferenceId(
  args: InferRequestType<(typeof client._inference)[':task_type'][':llama_inference_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':llama_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeMistralInferenceId(
  args: InferRequestType<(typeof client._inference)[':task_type'][':mistral_inference_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':mistral_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeNvidiaInferenceId(
  args: InferRequestType<(typeof client._inference)[':task_type'][':nvidia_inference_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':nvidia_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeOpenaiInferenceId(
  args: InferRequestType<(typeof client._inference)[':task_type'][':openai_inference_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':openai_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeOpenshiftaiInferenceId(
  args: InferRequestType<
    (typeof client._inference)[':task_type'][':openshiftai_inference_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':openshiftai_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeVoyageaiInferenceId(
  args: InferRequestType<
    (typeof client._inference)[':task_type'][':voyageai_inference_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':voyageai_inference_id'].$put(args, options),
  )
}

export async function putInferenceTaskTypeWatsonxInferenceId(
  args: InferRequestType<(typeof client._inference)[':task_type'][':watsonx_inference_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':watsonx_inference_id'].$put(args, options),
  )
}

export async function postInferenceRerankInferenceId(
  args: InferRequestType<(typeof client._inference.rerank)[':inference_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._inference.rerank[':inference_id'].$post(args, options))
}

export async function postInferenceSparseEmbeddingInferenceId(
  args: InferRequestType<(typeof client._inference.sparse_embedding)[':inference_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference.sparse_embedding[':inference_id'].$post(args, options),
  )
}

export async function postInferenceCompletionInferenceIdStream(
  args: InferRequestType<
    (typeof client._inference.completion)[':inference_id']['_stream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference.completion[':inference_id']._stream.$post(args, options),
  )
}

export async function postInferenceTextEmbeddingInferenceId(
  args: InferRequestType<(typeof client._inference.text_embedding)[':inference_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._inference.text_embedding[':inference_id'].$post(args, options))
}

export async function putInferenceInferenceIdUpdate(
  args: InferRequestType<(typeof client._inference)[':inference_id']['_update']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._inference[':inference_id']._update.$put(args, options))
}

export async function putInferenceTaskTypeInferenceIdUpdate(
  args: InferRequestType<
    (typeof client._inference)[':task_type'][':inference_id']['_update']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._inference[':task_type'][':inference_id']._update.$put(args, options),
  )
}

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function head(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$head(undefined, options))
}

export async function getIngestGeoipDatabaseId(
  args: InferRequestType<(typeof client._ingest.geoip.database)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest.geoip.database[':id'].$get(args, options))
}

export async function putIngestGeoipDatabaseId(
  args: InferRequestType<(typeof client._ingest.geoip.database)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest.geoip.database[':id'].$put(args, options))
}

export async function deleteIngestGeoipDatabaseId(
  args: InferRequestType<(typeof client._ingest.geoip.database)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest.geoip.database[':id'].$delete(args, options))
}

export async function getIngestIpLocationDatabaseId(
  args: InferRequestType<(typeof client._ingest.ip_location.database)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest.ip_location.database[':id'].$get(args, options))
}

export async function putIngestIpLocationDatabaseId(
  args: InferRequestType<(typeof client._ingest.ip_location.database)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest.ip_location.database[':id'].$put(args, options))
}

export async function deleteIngestIpLocationDatabaseId(
  args: InferRequestType<(typeof client._ingest.ip_location.database)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest.ip_location.database[':id'].$delete(args, options))
}

export async function getIngestPipelineId(
  args: InferRequestType<(typeof client._ingest.pipeline)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest.pipeline[':id'].$get(args, options))
}

export async function putIngestPipelineId(
  args: InferRequestType<(typeof client._ingest.pipeline)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest.pipeline[':id'].$put(args, options))
}

export async function deleteIngestPipelineId(
  args: InferRequestType<(typeof client._ingest.pipeline)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest.pipeline[':id'].$delete(args, options))
}

export async function getIngestGeoipStats(options?: ClientRequestOptions) {
  return await parseResponse(client._ingest.geoip.stats.$get(undefined, options))
}

export async function getIngestGeoipDatabase(options?: ClientRequestOptions) {
  return await parseResponse(client._ingest.geoip.database.$get(undefined, options))
}

export async function getIngestIpLocationDatabase(options?: ClientRequestOptions) {
  return await parseResponse(client._ingest.ip_location.database.$get(undefined, options))
}

export async function getIngestPipeline(
  args: InferRequestType<typeof client._ingest.pipeline.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest.pipeline.$get(args, options))
}

export async function getIngestProcessorGrok(options?: ClientRequestOptions) {
  return await parseResponse(client._ingest.processor.grok.$get(undefined, options))
}

export async function getIngestPipelineSimulate(
  args: InferRequestType<typeof client._ingest.pipeline._simulate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest.pipeline._simulate.$get(args, options))
}

export async function postIngestPipelineSimulate(
  args: InferRequestType<typeof client._ingest.pipeline._simulate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest.pipeline._simulate.$post(args, options))
}

export async function getIngestPipelineIdSimulate(
  args: InferRequestType<(typeof client._ingest.pipeline)[':id']['_simulate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest.pipeline[':id']._simulate.$get(args, options))
}

export async function postIngestPipelineIdSimulate(
  args: InferRequestType<(typeof client._ingest.pipeline)[':id']['_simulate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest.pipeline[':id']._simulate.$post(args, options))
}

export async function getIndexKnnEval(
  args: InferRequestType<(typeof client)[':index']['_knn_eval']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._knn_eval.$get(args, options))
}

export async function postIndexKnnEval(
  args: InferRequestType<(typeof client)[':index']['_knn_eval']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._knn_eval.$post(args, options))
}

export async function getLicense(
  args: InferRequestType<typeof client._license.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._license.$get(args, options))
}

export async function putLicense(
  args: InferRequestType<typeof client._license.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._license.$put(args, options))
}

export async function postLicense(
  args: InferRequestType<typeof client._license.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._license.$post(args, options))
}

export async function deleteLicense(
  args: InferRequestType<typeof client._license.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._license.$delete(args, options))
}

export async function getLicenseBasicStatus(options?: ClientRequestOptions) {
  return await parseResponse(client._license.basic_status.$get(undefined, options))
}

export async function getLicenseTrialStatus(options?: ClientRequestOptions) {
  return await parseResponse(client._license.trial_status.$get(undefined, options))
}

export async function postLicenseStartBasic(
  args: InferRequestType<typeof client._license.start_basic.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._license.start_basic.$post(args, options))
}

export async function postLicenseStartTrial(
  args: InferRequestType<typeof client._license.start_trial.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._license.start_trial.$post(args, options))
}

export async function getReindex(
  args: InferRequestType<typeof client._reindex.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._reindex.$get(args, options))
}

export async function postReindex(
  args: InferRequestType<typeof client._reindex.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._reindex.$post(args, options))
}

export async function getLogstashPipelineId(
  args: InferRequestType<(typeof client._logstash.pipeline)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._logstash.pipeline[':id'].$get(args, options))
}

export async function putLogstashPipelineId(
  args: InferRequestType<(typeof client._logstash.pipeline)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._logstash.pipeline[':id'].$put(args, options))
}

export async function deleteLogstashPipelineId(
  args: InferRequestType<(typeof client._logstash.pipeline)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._logstash.pipeline[':id'].$delete(args, options))
}

export async function getLogstashPipeline(options?: ClientRequestOptions) {
  return await parseResponse(client._logstash.pipeline.$get(undefined, options))
}

export async function getMget(
  args: InferRequestType<typeof client._mget.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._mget.$get(args, options))
}

export async function postMget(
  args: InferRequestType<typeof client._mget.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._mget.$post(args, options))
}

export async function getIndexMget(
  args: InferRequestType<(typeof client)[':index']['_mget']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._mget.$get(args, options))
}

export async function postIndexMget(
  args: InferRequestType<(typeof client)[':index']['_mget']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._mget.$post(args, options))
}

export async function getMigrationDeprecations(options?: ClientRequestOptions) {
  return await parseResponse(client._migration.deprecations.$get(undefined, options))
}

export async function getIndexMigrationDeprecations(
  args: InferRequestType<(typeof client)[':index']['_migration']['deprecations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._migration.deprecations.$get(args, options))
}

export async function getMigrationSystemFeatures(options?: ClientRequestOptions) {
  return await parseResponse(client._migration.system_features.$get(undefined, options))
}

export async function postMigrationSystemFeatures(options?: ClientRequestOptions) {
  return await parseResponse(client._migration.system_features.$post(undefined, options))
}

export async function postMlTrainedModelsModelIdDeploymentCacheClear(
  args: InferRequestType<
    (typeof client._ml.trained_models)[':model_id']['deployment']['cache']['_clear']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.trained_models[':model_id'].deployment.cache._clear.$post(args, options),
  )
}

export async function postMlAnomalyDetectorsJobIdClose(
  args: InferRequestType<(typeof client._ml.anomaly_detectors)[':job_id']['_close']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.anomaly_detectors[':job_id']._close.$post(args, options))
}

export async function getMlCalendarsCalendarId(
  args: InferRequestType<(typeof client._ml.calendars)[':calendar_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.calendars[':calendar_id'].$get(args, options))
}

export async function putMlCalendarsCalendarId(
  args: InferRequestType<(typeof client._ml.calendars)[':calendar_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.calendars[':calendar_id'].$put(args, options))
}

export async function postMlCalendarsCalendarId(
  args: InferRequestType<(typeof client._ml.calendars)[':calendar_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.calendars[':calendar_id'].$post(args, options))
}

export async function deleteMlCalendarsCalendarId(
  args: InferRequestType<(typeof client._ml.calendars)[':calendar_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.calendars[':calendar_id'].$delete(args, options))
}

export async function deleteMlCalendarsCalendarIdEventsEventId(
  args: InferRequestType<
    (typeof client._ml.calendars)[':calendar_id']['events'][':event_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.calendars[':calendar_id'].events[':event_id'].$delete(args, options),
  )
}

export async function putMlCalendarsCalendarIdJobsJobId(
  args: InferRequestType<(typeof client._ml.calendars)[':calendar_id']['jobs'][':job_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.calendars[':calendar_id'].jobs[':job_id'].$put(args, options),
  )
}

export async function deleteMlCalendarsCalendarIdJobsJobId(
  args: InferRequestType<
    (typeof client._ml.calendars)[':calendar_id']['jobs'][':job_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.calendars[':calendar_id'].jobs[':job_id'].$delete(args, options),
  )
}

export async function getMlDataFrameAnalyticsId(
  args: InferRequestType<(typeof client._ml.data_frame.analytics)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame.analytics[':id'].$get(args, options))
}

export async function putMlDataFrameAnalyticsId(
  args: InferRequestType<(typeof client._ml.data_frame.analytics)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame.analytics[':id'].$put(args, options))
}

export async function deleteMlDataFrameAnalyticsId(
  args: InferRequestType<(typeof client._ml.data_frame.analytics)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame.analytics[':id'].$delete(args, options))
}

export async function getMlDatafeedsDatafeedId(
  args: InferRequestType<(typeof client._ml.datafeeds)[':datafeed_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.datafeeds[':datafeed_id'].$get(args, options))
}

export async function putMlDatafeedsDatafeedId(
  args: InferRequestType<(typeof client._ml.datafeeds)[':datafeed_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.datafeeds[':datafeed_id'].$put(args, options))
}

export async function deleteMlDatafeedsDatafeedId(
  args: InferRequestType<(typeof client._ml.datafeeds)[':datafeed_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.datafeeds[':datafeed_id'].$delete(args, options))
}

export async function deleteMlDeleteExpiredDataJobId(
  args: InferRequestType<(typeof client._ml._delete_expired_data)[':job_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml._delete_expired_data[':job_id'].$delete(args, options))
}

export async function deleteMlDeleteExpiredData(
  args: InferRequestType<typeof client._ml._delete_expired_data.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml._delete_expired_data.$delete(args, options))
}

export async function getMlFiltersFilterId(
  args: InferRequestType<(typeof client._ml.filters)[':filter_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.filters[':filter_id'].$get(args, options))
}

export async function putMlFiltersFilterId(
  args: InferRequestType<(typeof client._ml.filters)[':filter_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.filters[':filter_id'].$put(args, options))
}

export async function deleteMlFiltersFilterId(
  args: InferRequestType<(typeof client._ml.filters)[':filter_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.filters[':filter_id'].$delete(args, options))
}

export async function postMlAnomalyDetectorsJobIdForecast(
  args: InferRequestType<(typeof client._ml.anomaly_detectors)[':job_id']['_forecast']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.anomaly_detectors[':job_id']._forecast.$post(args, options))
}

export async function deleteMlAnomalyDetectorsJobIdForecast(
  args: InferRequestType<(typeof client._ml.anomaly_detectors)[':job_id']['_forecast']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id']._forecast.$delete(args, options),
  )
}

export async function deleteMlAnomalyDetectorsJobIdForecastForecastId(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['_forecast'][':forecast_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id']._forecast[':forecast_id'].$delete(args, options),
  )
}

export async function getMlAnomalyDetectorsJobId(
  args: InferRequestType<(typeof client._ml.anomaly_detectors)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.anomaly_detectors[':job_id'].$get(args, options))
}

export async function putMlAnomalyDetectorsJobId(
  args: InferRequestType<(typeof client._ml.anomaly_detectors)[':job_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.anomaly_detectors[':job_id'].$put(args, options))
}

export async function deleteMlAnomalyDetectorsJobId(
  args: InferRequestType<(typeof client._ml.anomaly_detectors)[':job_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.anomaly_detectors[':job_id'].$delete(args, options))
}

export async function getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['model_snapshots'][':snapshot_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].model_snapshots[':snapshot_id'].$get(args, options),
  )
}

export async function postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['model_snapshots'][':snapshot_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].model_snapshots[':snapshot_id'].$post(args, options),
  )
}

export async function deleteMlAnomalyDetectorsJobIdModelSnapshotsSnapshotId(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['model_snapshots'][':snapshot_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].model_snapshots[':snapshot_id'].$delete(args, options),
  )
}

export async function getMlTrainedModelsModelId(
  args: InferRequestType<(typeof client._ml.trained_models)[':model_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.trained_models[':model_id'].$get(args, options))
}

export async function putMlTrainedModelsModelId(
  args: InferRequestType<(typeof client._ml.trained_models)[':model_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.trained_models[':model_id'].$put(args, options))
}

export async function deleteMlTrainedModelsModelId(
  args: InferRequestType<(typeof client._ml.trained_models)[':model_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.trained_models[':model_id'].$delete(args, options))
}

export async function putMlTrainedModelsModelIdModelAliasesModelAlias(
  args: InferRequestType<
    (typeof client._ml.trained_models)[':model_id']['model_aliases'][':model_alias']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.trained_models[':model_id'].model_aliases[':model_alias'].$put(args, options),
  )
}

export async function deleteMlTrainedModelsModelIdModelAliasesModelAlias(
  args: InferRequestType<
    (typeof client._ml.trained_models)[':model_id']['model_aliases'][':model_alias']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.trained_models[':model_id'].model_aliases[':model_alias'].$delete(args, options),
  )
}

export async function postMlAnomalyDetectorsEstimateModelMemory(
  args: InferRequestType<typeof client._ml.anomaly_detectors._estimate_model_memory.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors._estimate_model_memory.$post(args, options),
  )
}

export async function postMlDataFrameEvaluate(
  args: InferRequestType<typeof client._ml.data_frame._evaluate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame._evaluate.$post(args, options))
}

export async function getMlDataFrameAnalyticsExplain(
  args: InferRequestType<typeof client._ml.data_frame.analytics._explain.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame.analytics._explain.$get(args, options))
}

export async function postMlDataFrameAnalyticsExplain(
  args: InferRequestType<typeof client._ml.data_frame.analytics._explain.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame.analytics._explain.$post(args, options))
}

export async function getMlDataFrameAnalyticsIdExplain(
  args: InferRequestType<(typeof client._ml.data_frame.analytics)[':id']['_explain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame.analytics[':id']._explain.$get(args, options))
}

export async function postMlDataFrameAnalyticsIdExplain(
  args: InferRequestType<(typeof client._ml.data_frame.analytics)[':id']['_explain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame.analytics[':id']._explain.$post(args, options))
}

export async function postMlAnomalyDetectorsJobIdFlush(
  args: InferRequestType<(typeof client._ml.anomaly_detectors)[':job_id']['_flush']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.anomaly_detectors[':job_id']._flush.$post(args, options))
}

export async function getMlAnomalyDetectorsJobIdResultsBucketsTimestamp(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['results']['buckets'][':timestamp']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].results.buckets[':timestamp'].$get(args, options),
  )
}

export async function postMlAnomalyDetectorsJobIdResultsBucketsTimestamp(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['results']['buckets'][':timestamp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].results.buckets[':timestamp'].$post(args, options),
  )
}

export async function getMlAnomalyDetectorsJobIdResultsBuckets(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['results']['buckets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].results.buckets.$get(args, options),
  )
}

export async function postMlAnomalyDetectorsJobIdResultsBuckets(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['results']['buckets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].results.buckets.$post(args, options),
  )
}

export async function getMlCalendarsCalendarIdEvents(
  args: InferRequestType<(typeof client._ml.calendars)[':calendar_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.calendars[':calendar_id'].events.$get(args, options))
}

export async function postMlCalendarsCalendarIdEvents(
  args: InferRequestType<(typeof client._ml.calendars)[':calendar_id']['events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.calendars[':calendar_id'].events.$post(args, options))
}

export async function getMlCalendars(
  args: InferRequestType<typeof client._ml.calendars.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.calendars.$get(args, options))
}

export async function postMlCalendars(
  args: InferRequestType<typeof client._ml.calendars.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.calendars.$post(args, options))
}

export async function getMlAnomalyDetectorsJobIdResultsCategoriesCategoryId(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['results']['categories'][':category_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].results.categories[':category_id'].$get(args, options),
  )
}

export async function postMlAnomalyDetectorsJobIdResultsCategoriesCategoryId(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['results']['categories'][':category_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].results.categories[':category_id'].$post(args, options),
  )
}

export async function getMlAnomalyDetectorsJobIdResultsCategories(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['results']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].results.categories.$get(args, options),
  )
}

export async function postMlAnomalyDetectorsJobIdResultsCategories(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['results']['categories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].results.categories.$post(args, options),
  )
}

export async function getMlDataFrameAnalytics(
  args: InferRequestType<typeof client._ml.data_frame.analytics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame.analytics.$get(args, options))
}

export async function getMlDataFrameAnalyticsStats(
  args: InferRequestType<typeof client._ml.data_frame.analytics._stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame.analytics._stats.$get(args, options))
}

export async function getMlDataFrameAnalyticsIdStats(
  args: InferRequestType<(typeof client._ml.data_frame.analytics)[':id']['_stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame.analytics[':id']._stats.$get(args, options))
}

export async function getMlDatafeedsDatafeedIdStats(
  args: InferRequestType<(typeof client._ml.datafeeds)[':datafeed_id']['_stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.datafeeds[':datafeed_id']._stats.$get(args, options))
}

export async function getMlDatafeedsStats(
  args: InferRequestType<typeof client._ml.datafeeds._stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.datafeeds._stats.$get(args, options))
}

export async function getMlDatafeeds(
  args: InferRequestType<typeof client._ml.datafeeds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.datafeeds.$get(args, options))
}

export async function getMlFilters(
  args: InferRequestType<typeof client._ml.filters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.filters.$get(args, options))
}

export async function getMlAnomalyDetectorsJobIdResultsInfluencers(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['results']['influencers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].results.influencers.$get(args, options),
  )
}

export async function postMlAnomalyDetectorsJobIdResultsInfluencers(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['results']['influencers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].results.influencers.$post(args, options),
  )
}

export async function getMlAnomalyDetectorsStats(
  args: InferRequestType<typeof client._ml.anomaly_detectors._stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.anomaly_detectors._stats.$get(args, options))
}

export async function getMlAnomalyDetectorsJobIdStats(
  args: InferRequestType<(typeof client._ml.anomaly_detectors)[':job_id']['_stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.anomaly_detectors[':job_id']._stats.$get(args, options))
}

export async function getMlAnomalyDetectors(
  args: InferRequestType<typeof client._ml.anomaly_detectors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.anomaly_detectors.$get(args, options))
}

export async function getMlMemoryStats(
  args: InferRequestType<typeof client._ml.memory._stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.memory._stats.$get(args, options))
}

export async function getMlMemoryNodeIdStats(
  args: InferRequestType<(typeof client._ml.memory)[':node_id']['_stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.memory[':node_id']._stats.$get(args, options))
}

export async function getMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgradeStats(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['model_snapshots'][':snapshot_id']['_upgrade']['_stats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].model_snapshots[':snapshot_id']._upgrade._stats.$get(
      args,
      options,
    ),
  )
}

export async function getMlAnomalyDetectorsJobIdModelSnapshots(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['model_snapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].model_snapshots.$get(args, options),
  )
}

export async function postMlAnomalyDetectorsJobIdModelSnapshots(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['model_snapshots']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].model_snapshots.$post(args, options),
  )
}

export async function getMlAnomalyDetectorsJobIdResultsOverallBuckets(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['results']['overall_buckets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].results.overall_buckets.$get(args, options),
  )
}

export async function postMlAnomalyDetectorsJobIdResultsOverallBuckets(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['results']['overall_buckets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].results.overall_buckets.$post(args, options),
  )
}

export async function getMlAnomalyDetectorsJobIdResultsRecords(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['results']['records']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].results.records.$get(args, options),
  )
}

export async function postMlAnomalyDetectorsJobIdResultsRecords(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['results']['records']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].results.records.$post(args, options),
  )
}

export async function getMlTrainedModels(
  args: InferRequestType<typeof client._ml.trained_models.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.trained_models.$get(args, options))
}

export async function getMlTrainedModelsModelIdStats(
  args: InferRequestType<(typeof client._ml.trained_models)[':model_id']['_stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.trained_models[':model_id']._stats.$get(args, options))
}

export async function getMlTrainedModelsStats(
  args: InferRequestType<typeof client._ml.trained_models._stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.trained_models._stats.$get(args, options))
}

export async function postMlTrainedModelsModelIdInfer(
  args: InferRequestType<(typeof client._ml.trained_models)[':model_id']['_infer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.trained_models[':model_id']._infer.$post(args, options))
}

export async function getMlInfo(options?: ClientRequestOptions) {
  return await parseResponse(client._ml.info.$get(undefined, options))
}

export async function postMlAnomalyDetectorsJobIdOpen(
  args: InferRequestType<(typeof client._ml.anomaly_detectors)[':job_id']['_open']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.anomaly_detectors[':job_id']._open.$post(args, options))
}

export async function postMlAnomalyDetectorsJobIdData(
  args: InferRequestType<(typeof client._ml.anomaly_detectors)[':job_id']['_data']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.anomaly_detectors[':job_id']._data.$post(args, options))
}

export async function getMlDataFrameAnalyticsPreview(
  args: InferRequestType<typeof client._ml.data_frame.analytics._preview.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame.analytics._preview.$get(args, options))
}

export async function postMlDataFrameAnalyticsPreview(
  args: InferRequestType<typeof client._ml.data_frame.analytics._preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame.analytics._preview.$post(args, options))
}

export async function getMlDataFrameAnalyticsIdPreview(
  args: InferRequestType<(typeof client._ml.data_frame.analytics)[':id']['_preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame.analytics[':id']._preview.$get(args, options))
}

export async function postMlDataFrameAnalyticsIdPreview(
  args: InferRequestType<(typeof client._ml.data_frame.analytics)[':id']['_preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame.analytics[':id']._preview.$post(args, options))
}

export async function getMlDatafeedsDatafeedIdPreview(
  args: InferRequestType<(typeof client._ml.datafeeds)[':datafeed_id']['_preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.datafeeds[':datafeed_id']._preview.$get(args, options))
}

export async function postMlDatafeedsDatafeedIdPreview(
  args: InferRequestType<(typeof client._ml.datafeeds)[':datafeed_id']['_preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.datafeeds[':datafeed_id']._preview.$post(args, options))
}

export async function getMlDatafeedsPreview(
  args: InferRequestType<typeof client._ml.datafeeds._preview.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.datafeeds._preview.$get(args, options))
}

export async function postMlDatafeedsPreview(
  args: InferRequestType<typeof client._ml.datafeeds._preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.datafeeds._preview.$post(args, options))
}

export async function putMlTrainedModelsModelIdDefinitionPart(
  args: InferRequestType<
    (typeof client._ml.trained_models)[':model_id']['definition'][':part']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.trained_models[':model_id'].definition[':part'].$put(args, options),
  )
}

export async function putMlTrainedModelsModelIdVocabulary(
  args: InferRequestType<(typeof client._ml.trained_models)[':model_id']['vocabulary']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.trained_models[':model_id'].vocabulary.$put(args, options))
}

export async function postMlAnomalyDetectorsJobIdReset(
  args: InferRequestType<(typeof client._ml.anomaly_detectors)[':job_id']['_reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.anomaly_detectors[':job_id']._reset.$post(args, options))
}

export async function postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdRevert(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['model_snapshots'][':snapshot_id']['_revert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].model_snapshots[':snapshot_id']._revert.$post(
      args,
      options,
    ),
  )
}

export async function postMlSetUpgradeMode(
  args: InferRequestType<typeof client._ml.set_upgrade_mode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.set_upgrade_mode.$post(args, options))
}

export async function postMlDataFrameAnalyticsIdStart(
  args: InferRequestType<(typeof client._ml.data_frame.analytics)[':id']['_start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame.analytics[':id']._start.$post(args, options))
}

export async function postMlDatafeedsDatafeedIdStart(
  args: InferRequestType<(typeof client._ml.datafeeds)[':datafeed_id']['_start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.datafeeds[':datafeed_id']._start.$post(args, options))
}

export async function postMlTrainedModelsModelIdDeploymentStart(
  args: InferRequestType<
    (typeof client._ml.trained_models)[':model_id']['deployment']['_start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.trained_models[':model_id'].deployment._start.$post(args, options),
  )
}

export async function postMlDataFrameAnalyticsIdStop(
  args: InferRequestType<(typeof client._ml.data_frame.analytics)[':id']['_stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame.analytics[':id']._stop.$post(args, options))
}

export async function postMlDatafeedsDatafeedIdStop(
  args: InferRequestType<(typeof client._ml.datafeeds)[':datafeed_id']['_stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.datafeeds[':datafeed_id']._stop.$post(args, options))
}

export async function postMlTrainedModelsModelIdDeploymentStop(
  args: InferRequestType<
    (typeof client._ml.trained_models)[':model_id']['deployment']['_stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.trained_models[':model_id'].deployment._stop.$post(args, options),
  )
}

export async function postMlDataFrameAnalyticsIdUpdate(
  args: InferRequestType<(typeof client._ml.data_frame.analytics)[':id']['_update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.data_frame.analytics[':id']._update.$post(args, options))
}

export async function postMlDatafeedsDatafeedIdUpdate(
  args: InferRequestType<(typeof client._ml.datafeeds)[':datafeed_id']['_update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.datafeeds[':datafeed_id']._update.$post(args, options))
}

export async function postMlFiltersFilterIdUpdate(
  args: InferRequestType<(typeof client._ml.filters)[':filter_id']['_update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.filters[':filter_id']._update.$post(args, options))
}

export async function postMlAnomalyDetectorsJobIdUpdate(
  args: InferRequestType<(typeof client._ml.anomaly_detectors)[':job_id']['_update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ml.anomaly_detectors[':job_id']._update.$post(args, options))
}

export async function postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpdate(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['model_snapshots'][':snapshot_id']['_update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].model_snapshots[':snapshot_id']._update.$post(
      args,
      options,
    ),
  )
}

export async function postMlTrainedModelsModelIdDeploymentUpdate(
  args: InferRequestType<
    (typeof client._ml.trained_models)[':model_id']['deployment']['_update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.trained_models[':model_id'].deployment._update.$post(args, options),
  )
}

export async function postMlAnomalyDetectorsJobIdModelSnapshotsSnapshotIdUpgrade(
  args: InferRequestType<
    (typeof client._ml.anomaly_detectors)[':job_id']['model_snapshots'][':snapshot_id']['_upgrade']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ml.anomaly_detectors[':job_id'].model_snapshots[':snapshot_id']._upgrade.$post(
      args,
      options,
    ),
  )
}

export async function getMsearch(
  args: InferRequestType<typeof client._msearch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._msearch.$get(args, options))
}

export async function postMsearch(
  args: InferRequestType<typeof client._msearch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._msearch.$post(args, options))
}

export async function getIndexMsearch(
  args: InferRequestType<(typeof client)[':index']['_msearch']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._msearch.$get(args, options))
}

export async function postIndexMsearch(
  args: InferRequestType<(typeof client)[':index']['_msearch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._msearch.$post(args, options))
}

export async function getMsearchTemplate(
  args: InferRequestType<typeof client._msearch.template.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._msearch.template.$get(args, options))
}

export async function postMsearchTemplate(
  args: InferRequestType<typeof client._msearch.template.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._msearch.template.$post(args, options))
}

export async function getIndexMsearchTemplate(
  args: InferRequestType<(typeof client)[':index']['_msearch']['template']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._msearch.template.$get(args, options))
}

export async function postIndexMsearchTemplate(
  args: InferRequestType<(typeof client)[':index']['_msearch']['template']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._msearch.template.$post(args, options))
}

export async function getMtermvectors(
  args: InferRequestType<typeof client._mtermvectors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._mtermvectors.$get(args, options))
}

export async function postMtermvectors(
  args: InferRequestType<typeof client._mtermvectors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._mtermvectors.$post(args, options))
}

export async function getIndexMtermvectors(
  args: InferRequestType<(typeof client)[':index']['_mtermvectors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._mtermvectors.$get(args, options))
}

export async function postIndexMtermvectors(
  args: InferRequestType<(typeof client)[':index']['_mtermvectors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._mtermvectors.$post(args, options))
}

export async function deleteNodesNodeIdRepositoriesMeteringMaxArchiveVersion(
  args: InferRequestType<
    (typeof client._nodes)[':node_id']['_repositories_metering'][':max_archive_version']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._nodes[':node_id']._repositories_metering[':max_archive_version'].$delete(args, options),
  )
}

export async function getNodesNodeIdRepositoriesMetering(
  args: InferRequestType<(typeof client._nodes)[':node_id']['_repositories_metering']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id']._repositories_metering.$get(args, options))
}

export async function getNodesHotThreads(
  args: InferRequestType<typeof client._nodes.hot_threads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes.hot_threads.$get(args, options))
}

export async function getNodesNodeIdHotThreads(
  args: InferRequestType<(typeof client._nodes)[':node_id']['hot_threads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id'].hot_threads.$get(args, options))
}

export async function getNodes(
  args: InferRequestType<typeof client._nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes.$get(args, options))
}

export async function getNodesNodeId(
  args: InferRequestType<(typeof client._nodes)[':node_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id'].$get(args, options))
}

export async function getNodesMetric(
  args: InferRequestType<(typeof client._nodes)[':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':metric'].$get(args, options))
}

export async function getNodesNodeIdMetric(
  args: InferRequestType<(typeof client._nodes)[':node_id'][':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id'][':metric'].$get(args, options))
}

export async function postNodesReloadSecureSettings(
  args: InferRequestType<typeof client._nodes.reload_secure_settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes.reload_secure_settings.$post(args, options))
}

export async function postNodesNodeIdReloadSecureSettings(
  args: InferRequestType<(typeof client._nodes)[':node_id']['reload_secure_settings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id'].reload_secure_settings.$post(args, options))
}

export async function getNodesStats(
  args: InferRequestType<typeof client._nodes.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes.stats.$get(args, options))
}

export async function getNodesNodeIdStats(
  args: InferRequestType<(typeof client._nodes)[':node_id']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id'].stats.$get(args, options))
}

export async function getNodesStatsMetric(
  args: InferRequestType<(typeof client._nodes.stats)[':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes.stats[':metric'].$get(args, options))
}

export async function getNodesNodeIdStatsMetric(
  args: InferRequestType<(typeof client._nodes)[':node_id']['stats'][':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id'].stats[':metric'].$get(args, options))
}

export async function getNodesStatsMetricIndexMetric(
  args: InferRequestType<(typeof client._nodes.stats)[':metric'][':index_metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes.stats[':metric'][':index_metric'].$get(args, options))
}

export async function getNodesNodeIdStatsMetricIndexMetric(
  args: InferRequestType<
    (typeof client._nodes)[':node_id']['stats'][':metric'][':index_metric']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._nodes[':node_id'].stats[':metric'][':index_metric'].$get(args, options),
  )
}

export async function getNodesUsage(
  args: InferRequestType<typeof client._nodes.usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes.usage.$get(args, options))
}

export async function getNodesNodeIdUsage(
  args: InferRequestType<(typeof client._nodes)[':node_id']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id'].usage.$get(args, options))
}

export async function getNodesUsageMetric(
  args: InferRequestType<(typeof client._nodes.usage)[':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes.usage[':metric'].$get(args, options))
}

export async function getNodesNodeIdUsageMetric(
  args: InferRequestType<(typeof client._nodes)[':node_id']['usage'][':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id'].usage[':metric'].$get(args, options))
}

export async function postIndexPit(
  args: InferRequestType<(typeof client)[':index']['_pit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._pit.$post(args, options))
}

export async function getPrometheusApiV1StatusBuildinfo(options?: ClientRequestOptions) {
  return await parseResponse(client._prometheus.api.v1.status.buildinfo.$get(undefined, options))
}

export async function getPrometheusIndexApiV1StatusBuildinfo(
  args: InferRequestType<
    (typeof client._prometheus)[':index']['api']['v1']['status']['buildinfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._prometheus[':index'].api.v1.status.buildinfo.$get(args, options),
  )
}

export async function putScriptsIdContext(
  args: InferRequestType<(typeof client._scripts)[':id'][':context']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._scripts[':id'][':context'].$put(args, options))
}

export async function postScriptsIdContext(
  args: InferRequestType<(typeof client._scripts)[':id'][':context']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._scripts[':id'][':context'].$post(args, options))
}

export async function getQueryRulesRulesetIdRuleRuleId(
  args: InferRequestType<(typeof client._query_rules)[':ruleset_id']['_rule'][':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._query_rules[':ruleset_id']._rule[':rule_id'].$get(args, options),
  )
}

export async function putQueryRulesRulesetIdRuleRuleId(
  args: InferRequestType<(typeof client._query_rules)[':ruleset_id']['_rule'][':rule_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._query_rules[':ruleset_id']._rule[':rule_id'].$put(args, options),
  )
}

export async function deleteQueryRulesRulesetIdRuleRuleId(
  args: InferRequestType<
    (typeof client._query_rules)[':ruleset_id']['_rule'][':rule_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._query_rules[':ruleset_id']._rule[':rule_id'].$delete(args, options),
  )
}

export async function getQueryRulesRulesetId(
  args: InferRequestType<(typeof client._query_rules)[':ruleset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query_rules[':ruleset_id'].$get(args, options))
}

export async function putQueryRulesRulesetId(
  args: InferRequestType<(typeof client._query_rules)[':ruleset_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query_rules[':ruleset_id'].$put(args, options))
}

export async function deleteQueryRulesRulesetId(
  args: InferRequestType<(typeof client._query_rules)[':ruleset_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query_rules[':ruleset_id'].$delete(args, options))
}

export async function getQueryRules(
  args: InferRequestType<typeof client._query_rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query_rules.$get(args, options))
}

export async function postQueryRulesRulesetIdTest(
  args: InferRequestType<(typeof client._query_rules)[':ruleset_id']['_test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._query_rules[':ruleset_id']._test.$post(args, options))
}

export async function getRankEval(
  args: InferRequestType<typeof client._rank_eval.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._rank_eval.$get(args, options))
}

export async function postRankEval(
  args: InferRequestType<typeof client._rank_eval.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._rank_eval.$post(args, options))
}

export async function getIndexRankEval(
  args: InferRequestType<(typeof client)[':index']['_rank_eval']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._rank_eval.$get(args, options))
}

export async function postIndexRankEval(
  args: InferRequestType<(typeof client)[':index']['_rank_eval']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._rank_eval.$post(args, options))
}

export async function postReindexTaskIdRethrottle(
  args: InferRequestType<(typeof client._reindex)[':task_id']['_rethrottle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._reindex[':task_id']._rethrottle.$post(args, options))
}

export async function getRenderTemplate(
  args: InferRequestType<typeof client._render.template.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._render.template.$get(args, options))
}

export async function postRenderTemplate(
  args: InferRequestType<typeof client._render.template.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._render.template.$post(args, options))
}

export async function getRenderTemplateId(
  args: InferRequestType<(typeof client._render.template)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._render.template[':id'].$get(args, options))
}

export async function postRenderTemplateId(
  args: InferRequestType<(typeof client._render.template)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._render.template[':id'].$post(args, options))
}

export async function getRollupJobId(
  args: InferRequestType<(typeof client._rollup.job)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._rollup.job[':id'].$get(args, options))
}

export async function putRollupJobId(
  args: InferRequestType<(typeof client._rollup.job)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._rollup.job[':id'].$put(args, options))
}

export async function deleteRollupJobId(
  args: InferRequestType<(typeof client._rollup.job)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._rollup.job[':id'].$delete(args, options))
}

export async function getRollupJob(options?: ClientRequestOptions) {
  return await parseResponse(client._rollup.job.$get(undefined, options))
}

export async function getRollupDataId(
  args: InferRequestType<(typeof client._rollup.data)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._rollup.data[':id'].$get(args, options))
}

export async function getRollupData(options?: ClientRequestOptions) {
  return await parseResponse(client._rollup.data.$get(undefined, options))
}

export async function getIndexRollupData(
  args: InferRequestType<(typeof client)[':index']['_rollup']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._rollup.data.$get(args, options))
}

export async function getIndexRollupSearch(
  args: InferRequestType<(typeof client)[':index']['_rollup_search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._rollup_search.$get(args, options))
}

export async function postIndexRollupSearch(
  args: InferRequestType<(typeof client)[':index']['_rollup_search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._rollup_search.$post(args, options))
}

export async function postRollupJobIdStart(
  args: InferRequestType<(typeof client._rollup.job)[':id']['_start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._rollup.job[':id']._start.$post(args, options))
}

export async function postRollupJobIdStop(
  args: InferRequestType<(typeof client._rollup.job)[':id']['_stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._rollup.job[':id']._stop.$post(args, options))
}

export async function getScriptsPainlessExecute(
  args: InferRequestType<typeof client._scripts.painless._execute.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._scripts.painless._execute.$get(args, options))
}

export async function postScriptsPainlessExecute(
  args: InferRequestType<typeof client._scripts.painless._execute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._scripts.painless._execute.$post(args, options))
}

export async function getSearch(
  args: InferRequestType<typeof client._search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search.$get(args, options))
}

export async function postSearch(
  args: InferRequestType<typeof client._search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search.$post(args, options))
}

export async function getIndexSearch(
  args: InferRequestType<(typeof client)[':index']['_search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._search.$get(args, options))
}

export async function postIndexSearch(
  args: InferRequestType<(typeof client)[':index']['_search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._search.$post(args, options))
}

export async function getApplicationSearchApplicationName(
  args: InferRequestType<(typeof client._application.search_application)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._application.search_application[':name'].$get(args, options))
}

export async function putApplicationSearchApplicationName(
  args: InferRequestType<(typeof client._application.search_application)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._application.search_application[':name'].$put(args, options))
}

export async function deleteApplicationSearchApplicationName(
  args: InferRequestType<(typeof client._application.search_application)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._application.search_application[':name'].$delete(args, options))
}

export async function getApplicationAnalyticsName(
  args: InferRequestType<(typeof client._application.analytics)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._application.analytics[':name'].$get(args, options))
}

export async function putApplicationAnalyticsName(
  args: InferRequestType<(typeof client._application.analytics)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._application.analytics[':name'].$put(args, options))
}

export async function deleteApplicationAnalyticsName(
  args: InferRequestType<(typeof client._application.analytics)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._application.analytics[':name'].$delete(args, options))
}

export async function getApplicationAnalytics(options?: ClientRequestOptions) {
  return await parseResponse(client._application.analytics.$get(undefined, options))
}

export async function getApplicationSearchApplication(
  args: InferRequestType<typeof client._application.search_application.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._application.search_application.$get(args, options))
}

export async function postApplicationAnalyticsCollectionNameEventEventType(
  args: InferRequestType<
    (typeof client._application.analytics)[':collection_name']['event'][':event_type']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._application.analytics[':collection_name'].event[':event_type'].$post(args, options),
  )
}

export async function postApplicationSearchApplicationNameRenderQuery(
  args: InferRequestType<
    (typeof client._application.search_application)[':name']['_render_query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._application.search_application[':name']._render_query.$post(args, options),
  )
}

export async function getApplicationSearchApplicationNameSearch(
  args: InferRequestType<
    (typeof client._application.search_application)[':name']['_search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._application.search_application[':name']._search.$get(args, options),
  )
}

export async function postApplicationSearchApplicationNameSearch(
  args: InferRequestType<
    (typeof client._application.search_application)[':name']['_search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._application.search_application[':name']._search.$post(args, options),
  )
}

export async function getIndexMvtFieldZoomXY(
  args: InferRequestType<(typeof client)[':index']['_mvt'][':field'][':zoom'][':x'][':y']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':index']._mvt[':field'][':zoom'][':x'][':y'].$get(args, options),
  )
}

export async function postIndexMvtFieldZoomXY(
  args: InferRequestType<(typeof client)[':index']['_mvt'][':field'][':zoom'][':x'][':y']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':index']._mvt[':field'][':zoom'][':x'][':y'].$post(args, options),
  )
}

export async function getSearchShards(
  args: InferRequestType<typeof client._search_shards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search_shards.$get(args, options))
}

export async function postSearchShards(
  args: InferRequestType<typeof client._search_shards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search_shards.$post(args, options))
}

export async function getIndexSearchShards(
  args: InferRequestType<(typeof client)[':index']['_search_shards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._search_shards.$get(args, options))
}

export async function postIndexSearchShards(
  args: InferRequestType<(typeof client)[':index']['_search_shards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._search_shards.$post(args, options))
}

export async function getSearchTemplate(
  args: InferRequestType<typeof client._search.template.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search.template.$get(args, options))
}

export async function postSearchTemplate(
  args: InferRequestType<typeof client._search.template.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search.template.$post(args, options))
}

export async function getIndexSearchTemplate(
  args: InferRequestType<(typeof client)[':index']['_search']['template']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._search.template.$get(args, options))
}

export async function postIndexSearchTemplate(
  args: InferRequestType<(typeof client)[':index']['_search']['template']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._search.template.$post(args, options))
}

export async function getSearchableSnapshotsCacheStats(options?: ClientRequestOptions) {
  return await parseResponse(client._searchable_snapshots.cache.stats.$get(undefined, options))
}

export async function getSearchableSnapshotsNodeIdCacheStats(
  args: InferRequestType<
    (typeof client._searchable_snapshots)[':node_id']['cache']['stats']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._searchable_snapshots[':node_id'].cache.stats.$get(args, options),
  )
}

export async function postSearchableSnapshotsCacheClear(
  args: InferRequestType<typeof client._searchable_snapshots.cache.clear.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._searchable_snapshots.cache.clear.$post(args, options))
}

export async function postIndexSearchableSnapshotsCacheClear(
  args: InferRequestType<
    (typeof client)[':index']['_searchable_snapshots']['cache']['clear']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':index']._searchable_snapshots.cache.clear.$post(args, options),
  )
}

export async function postSnapshotRepositorySnapshotMount(
  args: InferRequestType<(typeof client._snapshot)[':repository'][':snapshot']['_mount']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._snapshot[':repository'][':snapshot']._mount.$post(args, options),
  )
}

export async function getSearchableSnapshotsStats(
  args: InferRequestType<typeof client._searchable_snapshots.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._searchable_snapshots.stats.$get(args, options))
}

export async function getIndexSearchableSnapshotsStats(
  args: InferRequestType<(typeof client)[':index']['_searchable_snapshots']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._searchable_snapshots.stats.$get(args, options))
}

export async function postSecurityProfileActivate(
  args: InferRequestType<typeof client._security.profile._activate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.profile._activate.$post(args, options))
}

export async function getSecurityAuthenticate(options?: ClientRequestOptions) {
  return await parseResponse(client._security._authenticate.$get(undefined, options))
}

export async function getSecurityRole(
  args: InferRequestType<typeof client._security.role.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.role.$get(args, options))
}

export async function postSecurityRole(
  args: InferRequestType<typeof client._security.role.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.role.$post(args, options))
}

export async function deleteSecurityRole(
  args: InferRequestType<typeof client._security.role.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.role.$delete(args, options))
}

export async function postSecurityApiKeyBulkUpdate(
  args: InferRequestType<typeof client._security.api_key._bulk_update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.api_key._bulk_update.$post(args, options))
}

export async function putSecurityUserUsernamePassword(
  args: InferRequestType<(typeof client._security.user)[':username']['_password']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.user[':username']._password.$put(args, options))
}

export async function postSecurityUserUsernamePassword(
  args: InferRequestType<(typeof client._security.user)[':username']['_password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.user[':username']._password.$post(args, options))
}

export async function putSecurityUserPassword(
  args: InferRequestType<typeof client._security.user._password.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.user._password.$put(args, options))
}

export async function postSecurityUserPassword(
  args: InferRequestType<typeof client._security.user._password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.user._password.$post(args, options))
}

export async function postSecurityApiKeyIdsClearCache(
  args: InferRequestType<(typeof client._security.api_key)[':ids']['_clear_cache']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.api_key[':ids']._clear_cache.$post(args, options))
}

export async function postSecurityPrivilegeApplicationClearCache(
  args: InferRequestType<
    (typeof client._security.privilege)[':application']['_clear_cache']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._security.privilege[':application']._clear_cache.$post(args, options),
  )
}

export async function postSecurityRealmRealmsClearCache(
  args: InferRequestType<(typeof client._security.realm)[':realms']['_clear_cache']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.realm[':realms']._clear_cache.$post(args, options))
}

export async function postSecurityRoleNameClearCache(
  args: InferRequestType<(typeof client._security.role)[':name']['_clear_cache']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.role[':name']._clear_cache.$post(args, options))
}

export async function postSecurityServiceNamespaceServiceCredentialTokenNameClearCache(
  args: InferRequestType<
    (typeof client._security.service)[':namespace'][':service']['credential']['token'][':name']['_clear_cache']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._security.service[':namespace'][':service'].credential.token[':name']._clear_cache.$post(
      args,
      options,
    ),
  )
}

export async function putSecurityApiKeyClone(
  args: InferRequestType<typeof client._security.api_key.clone.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.api_key.clone.$put(args, options))
}

export async function postSecurityApiKeyClone(
  args: InferRequestType<typeof client._security.api_key.clone.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.api_key.clone.$post(args, options))
}

export async function getSecurityApiKey(
  args: InferRequestType<typeof client._security.api_key.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.api_key.$get(args, options))
}

export async function putSecurityApiKey(
  args: InferRequestType<typeof client._security.api_key.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.api_key.$put(args, options))
}

export async function postSecurityApiKey(
  args: InferRequestType<typeof client._security.api_key.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.api_key.$post(args, options))
}

export async function deleteSecurityApiKey(
  args: InferRequestType<typeof client._security.api_key.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.api_key.$delete(args, options))
}

export async function postSecurityCrossClusterApiKey(
  args: InferRequestType<typeof client._security.cross_cluster.api_key.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.cross_cluster.api_key.$post(args, options))
}

export async function putSecurityServiceNamespaceServiceCredentialTokenName(
  args: InferRequestType<
    (typeof client._security.service)[':namespace'][':service']['credential']['token'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._security.service[':namespace'][':service'].credential.token[':name'].$put(
      args,
      options,
    ),
  )
}

export async function postSecurityServiceNamespaceServiceCredentialTokenName(
  args: InferRequestType<
    (typeof client._security.service)[':namespace'][':service']['credential']['token'][':name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._security.service[':namespace'][':service'].credential.token[':name'].$post(
      args,
      options,
    ),
  )
}

export async function deleteSecurityServiceNamespaceServiceCredentialTokenName(
  args: InferRequestType<
    (typeof client._security.service)[':namespace'][':service']['credential']['token'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._security.service[':namespace'][':service'].credential.token[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function postSecurityServiceNamespaceServiceCredentialToken(
  args: InferRequestType<
    (typeof client._security.service)[':namespace'][':service']['credential']['token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._security.service[':namespace'][':service'].credential.token.$post(args, options),
  )
}

export async function postSecurityDelegatePki(
  args: InferRequestType<typeof client._security.delegate_pki.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.delegate_pki.$post(args, options))
}

export async function getSecurityPrivilegeApplicationName(
  args: InferRequestType<(typeof client._security.privilege)[':application'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._security.privilege[':application'][':name'].$get(args, options),
  )
}

export async function deleteSecurityPrivilegeApplicationName(
  args: InferRequestType<(typeof client._security.privilege)[':application'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._security.privilege[':application'][':name'].$delete(args, options),
  )
}

export async function getSecurityRoleName(
  args: InferRequestType<(typeof client._security.role)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.role[':name'].$get(args, options))
}

export async function putSecurityRoleName(
  args: InferRequestType<(typeof client._security.role)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.role[':name'].$put(args, options))
}

export async function postSecurityRoleName(
  args: InferRequestType<(typeof client._security.role)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.role[':name'].$post(args, options))
}

export async function deleteSecurityRoleName(
  args: InferRequestType<(typeof client._security.role)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.role[':name'].$delete(args, options))
}

export async function getSecurityRoleMappingName(
  args: InferRequestType<(typeof client._security.role_mapping)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.role_mapping[':name'].$get(args, options))
}

export async function putSecurityRoleMappingName(
  args: InferRequestType<(typeof client._security.role_mapping)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.role_mapping[':name'].$put(args, options))
}

export async function postSecurityRoleMappingName(
  args: InferRequestType<(typeof client._security.role_mapping)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.role_mapping[':name'].$post(args, options))
}

export async function deleteSecurityRoleMappingName(
  args: InferRequestType<(typeof client._security.role_mapping)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.role_mapping[':name'].$delete(args, options))
}

export async function getSecurityUserUsername(
  args: InferRequestType<(typeof client._security.user)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.user[':username'].$get(args, options))
}

export async function putSecurityUserUsername(
  args: InferRequestType<(typeof client._security.user)[':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.user[':username'].$put(args, options))
}

export async function postSecurityUserUsername(
  args: InferRequestType<(typeof client._security.user)[':username']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.user[':username'].$post(args, options))
}

export async function deleteSecurityUserUsername(
  args: InferRequestType<(typeof client._security.user)[':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.user[':username'].$delete(args, options))
}

export async function getSecurityServiceNamespaceService(
  args: InferRequestType<(typeof client._security.service)[':namespace'][':service']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.service[':namespace'][':service'].$get(args, options))
}

export async function putSecurityServiceNamespaceService(
  args: InferRequestType<(typeof client._security.service)[':namespace'][':service']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.service[':namespace'][':service'].$put(args, options))
}

export async function deleteSecurityServiceNamespaceService(
  args: InferRequestType<(typeof client._security.service)[':namespace'][':service']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._security.service[':namespace'][':service'].$delete(args, options),
  )
}

export async function putSecurityUserUsernameDisable(
  args: InferRequestType<(typeof client._security.user)[':username']['_disable']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.user[':username']._disable.$put(args, options))
}

export async function postSecurityUserUsernameDisable(
  args: InferRequestType<(typeof client._security.user)[':username']['_disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.user[':username']._disable.$post(args, options))
}

export async function putSecurityProfileUidDisable(
  args: InferRequestType<(typeof client._security.profile)[':uid']['_disable']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.profile[':uid']._disable.$put(args, options))
}

export async function postSecurityProfileUidDisable(
  args: InferRequestType<(typeof client._security.profile)[':uid']['_disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.profile[':uid']._disable.$post(args, options))
}

export async function putSecurityUserUsernameEnable(
  args: InferRequestType<(typeof client._security.user)[':username']['_enable']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.user[':username']._enable.$put(args, options))
}

export async function postSecurityUserUsernameEnable(
  args: InferRequestType<(typeof client._security.user)[':username']['_enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.user[':username']._enable.$post(args, options))
}

export async function putSecurityProfileUidEnable(
  args: InferRequestType<(typeof client._security.profile)[':uid']['_enable']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.profile[':uid']._enable.$put(args, options))
}

export async function postSecurityProfileUidEnable(
  args: InferRequestType<(typeof client._security.profile)[':uid']['_enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.profile[':uid']._enable.$post(args, options))
}

export async function getSecurityEnrollKibana(options?: ClientRequestOptions) {
  return await parseResponse(client._security.enroll.kibana.$get(undefined, options))
}

export async function getSecurityEnrollNode(options?: ClientRequestOptions) {
  return await parseResponse(client._security.enroll.node.$get(undefined, options))
}

export async function getSecurityPrivilegeBuiltin(options?: ClientRequestOptions) {
  return await parseResponse(client._security.privilege._builtin.$get(undefined, options))
}

export async function getSecurityPrivilege(options?: ClientRequestOptions) {
  return await parseResponse(client._security.privilege.$get(undefined, options))
}

export async function putSecurityPrivilege(
  args: InferRequestType<typeof client._security.privilege.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.privilege.$put(args, options))
}

export async function postSecurityPrivilege(
  args: InferRequestType<typeof client._security.privilege.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.privilege.$post(args, options))
}

export async function getSecurityPrivilegeApplication(
  args: InferRequestType<(typeof client._security.privilege)[':application']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.privilege[':application'].$get(args, options))
}

export async function getSecurityRoleMapping(options?: ClientRequestOptions) {
  return await parseResponse(client._security.role_mapping.$get(undefined, options))
}

export async function getSecurityServiceNamespace(
  args: InferRequestType<(typeof client._security.service)[':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.service[':namespace'].$get(args, options))
}

export async function getSecurityService(
  args: InferRequestType<typeof client._security.service.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.service.$get(args, options))
}

export async function getSecurityServiceNamespaceServiceCredential(
  args: InferRequestType<
    (typeof client._security.service)[':namespace'][':service']['credential']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._security.service[':namespace'][':service'].credential.$get(args, options),
  )
}

export async function getSecuritySettings(
  args: InferRequestType<typeof client._security.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.settings.$get(args, options))
}

export async function putSecuritySettings(
  args: InferRequestType<typeof client._security.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.settings.$put(args, options))
}

export async function getSecurityStats(options?: ClientRequestOptions) {
  return await parseResponse(client._security.stats.$get(undefined, options))
}

export async function postSecurityOauth2Token(
  args: InferRequestType<typeof client._security.oauth2.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.oauth2.token.$post(args, options))
}

export async function deleteSecurityOauth2Token(
  args: InferRequestType<typeof client._security.oauth2.token.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.oauth2.token.$delete(args, options))
}

export async function getSecurityUser(
  args: InferRequestType<typeof client._security.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.user.$get(args, options))
}

export async function getSecurityUserPrivileges(options?: ClientRequestOptions) {
  return await parseResponse(client._security.user._privileges.$get(undefined, options))
}

export async function getSecurityProfileUid(
  args: InferRequestType<(typeof client._security.profile)[':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.profile[':uid'].$get(args, options))
}

export async function postSecurityApiKeyGrant(
  args: InferRequestType<typeof client._security.api_key.grant.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.api_key.grant.$post(args, options))
}

export async function getSecurityUserHasPrivileges(
  args: InferRequestType<typeof client._security.user._has_privileges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.user._has_privileges.$get(args, options))
}

export async function postSecurityUserHasPrivileges(
  args: InferRequestType<typeof client._security.user._has_privileges.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.user._has_privileges.$post(args, options))
}

export async function getSecurityUserUserHasPrivileges(
  args: InferRequestType<(typeof client._security.user)[':user']['_has_privileges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.user[':user']._has_privileges.$get(args, options))
}

export async function postSecurityUserUserHasPrivileges(
  args: InferRequestType<(typeof client._security.user)[':user']['_has_privileges']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.user[':user']._has_privileges.$post(args, options))
}

export async function getSecurityProfileHasPrivileges(
  args: InferRequestType<typeof client._security.profile._has_privileges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.profile._has_privileges.$get(args, options))
}

export async function postSecurityProfileHasPrivileges(
  args: InferRequestType<typeof client._security.profile._has_privileges.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.profile._has_privileges.$post(args, options))
}

export async function postSecurityOidcAuthenticate(
  args: InferRequestType<typeof client._security.oidc.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.oidc.authenticate.$post(args, options))
}

export async function postSecurityOidcLogout(
  args: InferRequestType<typeof client._security.oidc.logout.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.oidc.logout.$post(args, options))
}

export async function postSecurityOidcPrepare(
  args: InferRequestType<typeof client._security.oidc.prepare.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.oidc.prepare.$post(args, options))
}

export async function getSecurityQueryApiKey(
  args: InferRequestType<typeof client._security._query.api_key.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security._query.api_key.$get(args, options))
}

export async function postSecurityQueryApiKey(
  args: InferRequestType<typeof client._security._query.api_key.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security._query.api_key.$post(args, options))
}

export async function getSecurityQueryRole(
  args: InferRequestType<typeof client._security._query.role.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security._query.role.$get(args, options))
}

export async function postSecurityQueryRole(
  args: InferRequestType<typeof client._security._query.role.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security._query.role.$post(args, options))
}

export async function getSecurityQueryUser(
  args: InferRequestType<typeof client._security._query.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security._query.user.$get(args, options))
}

export async function postSecurityQueryUser(
  args: InferRequestType<typeof client._security._query.user.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security._query.user.$post(args, options))
}

export async function postSecuritySamlAuthenticate(
  args: InferRequestType<typeof client._security.saml.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.saml.authenticate.$post(args, options))
}

export async function postSecuritySamlCompleteLogout(
  args: InferRequestType<typeof client._security.saml.complete_logout.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.saml.complete_logout.$post(args, options))
}

export async function postSecuritySamlInvalidate(
  args: InferRequestType<typeof client._security.saml.invalidate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.saml.invalidate.$post(args, options))
}

export async function postSecuritySamlLogout(
  args: InferRequestType<typeof client._security.saml.logout.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.saml.logout.$post(args, options))
}

export async function postSecuritySamlPrepare(
  args: InferRequestType<typeof client._security.saml.prepare.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.saml.prepare.$post(args, options))
}

export async function getSecuritySamlMetadataRealmName(
  args: InferRequestType<(typeof client._security.saml.metadata)[':realm_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.saml.metadata[':realm_name'].$get(args, options))
}

export async function getSecurityProfileSuggest(
  args: InferRequestType<typeof client._security.profile._suggest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.profile._suggest.$get(args, options))
}

export async function postSecurityProfileSuggest(
  args: InferRequestType<typeof client._security.profile._suggest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.profile._suggest.$post(args, options))
}

export async function putSecurityApiKeyId(
  args: InferRequestType<(typeof client._security.api_key)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.api_key[':id'].$put(args, options))
}

export async function putSecurityCrossClusterApiKeyId(
  args: InferRequestType<(typeof client._security.cross_cluster.api_key)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.cross_cluster.api_key[':id'].$put(args, options))
}

export async function putSecurityProfileUidData(
  args: InferRequestType<(typeof client._security.profile)[':uid']['_data']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.profile[':uid']._data.$put(args, options))
}

export async function postSecurityProfileUidData(
  args: InferRequestType<(typeof client._security.profile)[':uid']['_data']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._security.profile[':uid']._data.$post(args, options))
}

export async function getIngestSimulate(
  args: InferRequestType<typeof client._ingest._simulate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest._simulate.$get(args, options))
}

export async function postIngestSimulate(
  args: InferRequestType<typeof client._ingest._simulate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest._simulate.$post(args, options))
}

export async function getIngestIndexSimulate(
  args: InferRequestType<(typeof client._ingest)[':index']['_simulate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest[':index']._simulate.$get(args, options))
}

export async function postIngestIndexSimulate(
  args: InferRequestType<(typeof client._ingest)[':index']['_simulate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest[':index']._simulate.$post(args, options))
}

export async function getSlmPolicyPolicyId(
  args: InferRequestType<(typeof client._slm.policy)[':policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._slm.policy[':policy_id'].$get(args, options))
}

export async function putSlmPolicyPolicyId(
  args: InferRequestType<(typeof client._slm.policy)[':policy_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._slm.policy[':policy_id'].$put(args, options))
}

export async function deleteSlmPolicyPolicyId(
  args: InferRequestType<(typeof client._slm.policy)[':policy_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._slm.policy[':policy_id'].$delete(args, options))
}

export async function putSlmPolicyPolicyIdExecute(
  args: InferRequestType<(typeof client._slm.policy)[':policy_id']['_execute']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._slm.policy[':policy_id']._execute.$put(args, options))
}

export async function postSlmExecuteRetention(
  args: InferRequestType<typeof client._slm._execute_retention.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._slm._execute_retention.$post(args, options))
}

export async function getSlmPolicy(
  args: InferRequestType<typeof client._slm.policy.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._slm.policy.$get(args, options))
}

export async function getSlmStats(
  args: InferRequestType<typeof client._slm.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._slm.stats.$get(args, options))
}

export async function getSlmStatus(
  args: InferRequestType<typeof client._slm.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._slm.status.$get(args, options))
}

export async function postSlmStart(
  args: InferRequestType<typeof client._slm.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._slm.start.$post(args, options))
}

export async function postSlmStop(
  args: InferRequestType<typeof client._slm.stop.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._slm.stop.$post(args, options))
}

export async function postSnapshotRepositoryCleanup(
  args: InferRequestType<(typeof client._snapshot)[':repository']['_cleanup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot[':repository']._cleanup.$post(args, options))
}

export async function putSnapshotRepositorySnapshotCloneTargetSnapshot(
  args: InferRequestType<
    (typeof client._snapshot)[':repository'][':snapshot']['_clone'][':target_snapshot']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._snapshot[':repository'][':snapshot']._clone[':target_snapshot'].$put(args, options),
  )
}

export async function getSnapshotRepositorySnapshot(
  args: InferRequestType<(typeof client._snapshot)[':repository'][':snapshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot[':repository'][':snapshot'].$get(args, options))
}

export async function putSnapshotRepositorySnapshot(
  args: InferRequestType<(typeof client._snapshot)[':repository'][':snapshot']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot[':repository'][':snapshot'].$put(args, options))
}

export async function postSnapshotRepositorySnapshot(
  args: InferRequestType<(typeof client._snapshot)[':repository'][':snapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot[':repository'][':snapshot'].$post(args, options))
}

export async function deleteSnapshotRepositorySnapshot(
  args: InferRequestType<(typeof client._snapshot)[':repository'][':snapshot']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot[':repository'][':snapshot'].$delete(args, options))
}

export async function getSnapshotRepository(
  args: InferRequestType<(typeof client._snapshot)[':repository']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot[':repository'].$get(args, options))
}

export async function putSnapshotRepository(
  args: InferRequestType<(typeof client._snapshot)[':repository']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot[':repository'].$put(args, options))
}

export async function postSnapshotRepository(
  args: InferRequestType<(typeof client._snapshot)[':repository']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot[':repository'].$post(args, options))
}

export async function deleteSnapshotRepository(
  args: InferRequestType<(typeof client._snapshot)[':repository']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot[':repository'].$delete(args, options))
}

export async function getSnapshot(
  args: InferRequestType<typeof client._snapshot.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot.$get(args, options))
}

export async function postSnapshotRepositoryAnalyze(
  args: InferRequestType<(typeof client._snapshot)[':repository']['_analyze']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot[':repository']._analyze.$post(args, options))
}

export async function postSnapshotRepositoryVerifyIntegrity(
  args: InferRequestType<(typeof client._snapshot)[':repository']['_verify_integrity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot[':repository']._verify_integrity.$post(args, options))
}

export async function postSnapshotRepositorySnapshotRestore(
  args: InferRequestType<
    (typeof client._snapshot)[':repository'][':snapshot']['_restore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._snapshot[':repository'][':snapshot']._restore.$post(args, options),
  )
}

export async function getSnapshotStatus(
  args: InferRequestType<typeof client._snapshot._status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot._status.$get(args, options))
}

export async function getSnapshotRepositoryStatus(
  args: InferRequestType<(typeof client._snapshot)[':repository']['_status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot[':repository']._status.$get(args, options))
}

export async function getSnapshotRepositorySnapshotStatus(
  args: InferRequestType<(typeof client._snapshot)[':repository'][':snapshot']['_status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._snapshot[':repository'][':snapshot']._status.$get(args, options),
  )
}

export async function postSnapshotRepositoryVerify(
  args: InferRequestType<(typeof client._snapshot)[':repository']['_verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot[':repository']._verify.$post(args, options))
}

export async function postSqlClose(
  args: InferRequestType<typeof client._sql.close.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._sql.close.$post(args, options))
}

export async function deleteSqlAsyncDeleteId(
  args: InferRequestType<(typeof client._sql.async.delete)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._sql.async.delete[':id'].$delete(args, options))
}

export async function getSqlAsyncId(
  args: InferRequestType<(typeof client._sql.async)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._sql.async[':id'].$get(args, options))
}

export async function getSqlAsyncStatusId(
  args: InferRequestType<(typeof client._sql.async.status)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._sql.async.status[':id'].$get(args, options))
}

export async function getSql(
  args: InferRequestType<typeof client._sql.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._sql.$get(args, options))
}

export async function postSql(
  args: InferRequestType<typeof client._sql.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._sql.$post(args, options))
}

export async function getSqlTranslate(
  args: InferRequestType<typeof client._sql.translate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._sql.translate.$get(args, options))
}

export async function postSqlTranslate(
  args: InferRequestType<typeof client._sql.translate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._sql.translate.$post(args, options))
}

export async function getSslCertificates(options?: ClientRequestOptions) {
  return await parseResponse(client._ssl.certificates.$get(undefined, options))
}

export async function postStreamsNameDisable(
  args: InferRequestType<(typeof client._streams)[':name']['_disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._streams[':name']._disable.$post(args, options))
}

export async function postStreamsNameEnable(
  args: InferRequestType<(typeof client._streams)[':name']['_enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._streams[':name']._enable.$post(args, options))
}

export async function getStreamsStatus(
  args: InferRequestType<typeof client._streams.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._streams.status.$get(args, options))
}

export async function getSynonymsId(
  args: InferRequestType<(typeof client._synonyms)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._synonyms[':id'].$get(args, options))
}

export async function putSynonymsId(
  args: InferRequestType<(typeof client._synonyms)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._synonyms[':id'].$put(args, options))
}

export async function deleteSynonymsId(
  args: InferRequestType<(typeof client._synonyms)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._synonyms[':id'].$delete(args, options))
}

export async function getSynonymsSetIdRuleId(
  args: InferRequestType<(typeof client._synonyms)[':set_id'][':rule_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._synonyms[':set_id'][':rule_id'].$get(args, options))
}

export async function putSynonymsSetIdRuleId(
  args: InferRequestType<(typeof client._synonyms)[':set_id'][':rule_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._synonyms[':set_id'][':rule_id'].$put(args, options))
}

export async function deleteSynonymsSetIdRuleId(
  args: InferRequestType<(typeof client._synonyms)[':set_id'][':rule_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._synonyms[':set_id'][':rule_id'].$delete(args, options))
}

export async function getSynonyms(
  args: InferRequestType<typeof client._synonyms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._synonyms.$get(args, options))
}

export async function postTasksCancel(
  args: InferRequestType<typeof client._tasks._cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._tasks._cancel.$post(args, options))
}

export async function postTasksTaskIdCancel(
  args: InferRequestType<(typeof client._tasks)[':task_id']['_cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._tasks[':task_id']._cancel.$post(args, options))
}

export async function getTasksTaskId(
  args: InferRequestType<(typeof client._tasks)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._tasks[':task_id'].$get(args, options))
}

export async function getTasks(
  args: InferRequestType<typeof client._tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._tasks.$get(args, options))
}

export async function getIndexTermsEnum(
  args: InferRequestType<(typeof client)[':index']['_terms_enum']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._terms_enum.$get(args, options))
}

export async function postIndexTermsEnum(
  args: InferRequestType<(typeof client)[':index']['_terms_enum']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._terms_enum.$post(args, options))
}

export async function getIndexTermvectorsId(
  args: InferRequestType<(typeof client)[':index']['_termvectors'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._termvectors[':id'].$get(args, options))
}

export async function postIndexTermvectorsId(
  args: InferRequestType<(typeof client)[':index']['_termvectors'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._termvectors[':id'].$post(args, options))
}

export async function getIndexTermvectors(
  args: InferRequestType<(typeof client)[':index']['_termvectors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._termvectors.$get(args, options))
}

export async function postIndexTermvectors(
  args: InferRequestType<(typeof client)[':index']['_termvectors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._termvectors.$post(args, options))
}

export async function getTextStructureFindFieldStructure(
  args: InferRequestType<typeof client._text_structure.find_field_structure.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._text_structure.find_field_structure.$get(args, options))
}

export async function getTextStructureFindMessageStructure(
  args: InferRequestType<typeof client._text_structure.find_message_structure.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._text_structure.find_message_structure.$get(args, options))
}

export async function postTextStructureFindMessageStructure(
  args: InferRequestType<typeof client._text_structure.find_message_structure.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._text_structure.find_message_structure.$post(args, options))
}

export async function postTextStructureFindStructure(
  args: InferRequestType<typeof client._text_structure.find_structure.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._text_structure.find_structure.$post(args, options))
}

export async function getTextStructureTestGrokPattern(
  args: InferRequestType<typeof client._text_structure.test_grok_pattern.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._text_structure.test_grok_pattern.$get(args, options))
}

export async function postTextStructureTestGrokPattern(
  args: InferRequestType<typeof client._text_structure.test_grok_pattern.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._text_structure.test_grok_pattern.$post(args, options))
}

export async function getTransformTransformId(
  args: InferRequestType<(typeof client._transform)[':transform_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._transform[':transform_id'].$get(args, options))
}

export async function putTransformTransformId(
  args: InferRequestType<(typeof client._transform)[':transform_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._transform[':transform_id'].$put(args, options))
}

export async function deleteTransformTransformId(
  args: InferRequestType<(typeof client._transform)[':transform_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._transform[':transform_id'].$delete(args, options))
}

export async function getTransformNodeStats(options?: ClientRequestOptions) {
  return await parseResponse(client._transform._node_stats.$get(undefined, options))
}

export async function getTransform(
  args: InferRequestType<typeof client._transform.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._transform.$get(args, options))
}

export async function getTransformTransformIdStats(
  args: InferRequestType<(typeof client._transform)[':transform_id']['_stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._transform[':transform_id']._stats.$get(args, options))
}

export async function getTransformTransformIdPreview(
  args: InferRequestType<(typeof client._transform)[':transform_id']['_preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._transform[':transform_id']._preview.$get(args, options))
}

export async function postTransformTransformIdPreview(
  args: InferRequestType<(typeof client._transform)[':transform_id']['_preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._transform[':transform_id']._preview.$post(args, options))
}

export async function getTransformPreview(
  args: InferRequestType<typeof client._transform._preview.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._transform._preview.$get(args, options))
}

export async function postTransformPreview(
  args: InferRequestType<typeof client._transform._preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._transform._preview.$post(args, options))
}

export async function postTransformTransformIdReset(
  args: InferRequestType<(typeof client._transform)[':transform_id']['_reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._transform[':transform_id']._reset.$post(args, options))
}

export async function postTransformTransformIdScheduleNow(
  args: InferRequestType<(typeof client._transform)[':transform_id']['_schedule_now']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._transform[':transform_id']._schedule_now.$post(args, options))
}

export async function postTransformSetUpgradeMode(
  args: InferRequestType<typeof client._transform.set_upgrade_mode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._transform.set_upgrade_mode.$post(args, options))
}

export async function postTransformTransformIdStart(
  args: InferRequestType<(typeof client._transform)[':transform_id']['_start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._transform[':transform_id']._start.$post(args, options))
}

export async function postTransformTransformIdStop(
  args: InferRequestType<(typeof client._transform)[':transform_id']['_stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._transform[':transform_id']._stop.$post(args, options))
}

export async function postTransformTransformIdUpdate(
  args: InferRequestType<(typeof client._transform)[':transform_id']['_update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._transform[':transform_id']._update.$post(args, options))
}

export async function postTransformUpgrade(
  args: InferRequestType<typeof client._transform._upgrade.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._transform._upgrade.$post(args, options))
}

export async function postIndexUpdateId(
  args: InferRequestType<(typeof client)[':index']['_update'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._update[':id'].$post(args, options))
}

export async function postIndexUpdateByQuery(
  args: InferRequestType<(typeof client)[':index']['_update_by_query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._update_by_query.$post(args, options))
}

export async function postUpdateByQueryTaskIdRethrottle(
  args: InferRequestType<(typeof client._update_by_query)[':task_id']['_rethrottle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._update_by_query[':task_id']._rethrottle.$post(args, options))
}

export async function putWatcherWatchWatchIdAck(
  args: InferRequestType<(typeof client._watcher.watch)[':watch_id']['_ack']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.watch[':watch_id']._ack.$put(args, options))
}

export async function postWatcherWatchWatchIdAck(
  args: InferRequestType<(typeof client._watcher.watch)[':watch_id']['_ack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.watch[':watch_id']._ack.$post(args, options))
}

export async function putWatcherWatchWatchIdAckActionId(
  args: InferRequestType<(typeof client._watcher.watch)[':watch_id']['_ack'][':action_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._watcher.watch[':watch_id']._ack[':action_id'].$put(args, options),
  )
}

export async function postWatcherWatchWatchIdAckActionId(
  args: InferRequestType<
    (typeof client._watcher.watch)[':watch_id']['_ack'][':action_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._watcher.watch[':watch_id']._ack[':action_id'].$post(args, options),
  )
}

export async function putWatcherWatchWatchIdActivate(
  args: InferRequestType<(typeof client._watcher.watch)[':watch_id']['_activate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.watch[':watch_id']._activate.$put(args, options))
}

export async function postWatcherWatchWatchIdActivate(
  args: InferRequestType<(typeof client._watcher.watch)[':watch_id']['_activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.watch[':watch_id']._activate.$post(args, options))
}

export async function putWatcherWatchWatchIdDeactivate(
  args: InferRequestType<(typeof client._watcher.watch)[':watch_id']['_deactivate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.watch[':watch_id']._deactivate.$put(args, options))
}

export async function postWatcherWatchWatchIdDeactivate(
  args: InferRequestType<(typeof client._watcher.watch)[':watch_id']['_deactivate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.watch[':watch_id']._deactivate.$post(args, options))
}

export async function getWatcherWatchId(
  args: InferRequestType<(typeof client._watcher.watch)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.watch[':id'].$get(args, options))
}

export async function putWatcherWatchId(
  args: InferRequestType<(typeof client._watcher.watch)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.watch[':id'].$put(args, options))
}

export async function postWatcherWatchId(
  args: InferRequestType<(typeof client._watcher.watch)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.watch[':id'].$post(args, options))
}

export async function deleteWatcherWatchId(
  args: InferRequestType<(typeof client._watcher.watch)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.watch[':id'].$delete(args, options))
}

export async function putWatcherWatchIdExecute(
  args: InferRequestType<(typeof client._watcher.watch)[':id']['_execute']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.watch[':id']._execute.$put(args, options))
}

export async function postWatcherWatchIdExecute(
  args: InferRequestType<(typeof client._watcher.watch)[':id']['_execute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.watch[':id']._execute.$post(args, options))
}

export async function putWatcherWatchExecute(
  args: InferRequestType<typeof client._watcher.watch._execute.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.watch._execute.$put(args, options))
}

export async function postWatcherWatchExecute(
  args: InferRequestType<typeof client._watcher.watch._execute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.watch._execute.$post(args, options))
}

export async function getWatcherSettings(
  args: InferRequestType<typeof client._watcher.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.settings.$get(args, options))
}

export async function putWatcherSettings(
  args: InferRequestType<typeof client._watcher.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.settings.$put(args, options))
}

export async function getWatcherQueryWatches(
  args: InferRequestType<typeof client._watcher._query.watches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher._query.watches.$get(args, options))
}

export async function postWatcherQueryWatches(
  args: InferRequestType<typeof client._watcher._query.watches.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher._query.watches.$post(args, options))
}

export async function postWatcherStart(
  args: InferRequestType<typeof client._watcher._start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher._start.$post(args, options))
}

export async function getWatcherStats(
  args: InferRequestType<typeof client._watcher.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.stats.$get(args, options))
}

export async function getWatcherStatsMetric(
  args: InferRequestType<(typeof client._watcher.stats)[':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher.stats[':metric'].$get(args, options))
}

export async function postWatcherStop(
  args: InferRequestType<typeof client._watcher._stop.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._watcher._stop.$post(args, options))
}

export async function getXpack(
  args: InferRequestType<typeof client._xpack.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._xpack.$get(args, options))
}

export async function getXpackUsage(
  args: InferRequestType<typeof client._xpack.usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._xpack.usage.$get(args, options))
}
