import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(
  args: InferRequestType<typeof client.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$get(args, options))
}

export async function head(
  args: InferRequestType<typeof client.index.$head>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.index.$head(args, options))
}

export async function getAlias(
  args: InferRequestType<typeof client._alias.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._alias.$get(args, options))
}

export async function putAlias(
  args: InferRequestType<typeof client._alias.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._alias.$put(args, options))
}

export async function getAliasName(
  args: InferRequestType<(typeof client._alias)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._alias[':name'].$get(args, options))
}

export async function putAliasName(
  args: InferRequestType<(typeof client._alias)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._alias[':name'].$put(args, options))
}

export async function postAliasName(
  args: InferRequestType<(typeof client._alias)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._alias[':name'].$post(args, options))
}

export async function headAliasName(
  args: InferRequestType<(typeof client._alias)[':name']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._alias[':name'].$head(args, options))
}

export async function postAliases(
  args: InferRequestType<typeof client._aliases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._aliases.$post(args, options))
}

export async function putAliasesName(
  args: InferRequestType<(typeof client._aliases)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._aliases[':name'].$put(args, options))
}

export async function postAliasesName(
  args: InferRequestType<(typeof client._aliases)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._aliases[':name'].$post(args, options))
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

export async function putBulkStream(
  args: InferRequestType<typeof client._bulk.stream.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._bulk.stream.$put(args, options))
}

export async function postBulkStream(
  args: InferRequestType<typeof client._bulk.stream.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._bulk.stream.$post(args, options))
}

export async function postCacheClear(
  args: InferRequestType<typeof client._cache.clear.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cache.clear.$post(args, options))
}

export async function getCat(
  args: InferRequestType<typeof client._cat.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.$get(args, options))
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

export async function getCatClusterManager(
  args: InferRequestType<typeof client._cat.cluster_manager.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.cluster_manager.$get(args, options))
}

export async function getCatCount(
  args: InferRequestType<typeof client._cat.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.count.$get(args, options))
}

export async function getCatCountIndex(
  args: InferRequestType<(typeof client._cat.count)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.count[':index'].$get(args, options))
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

export async function getCatPitSegments(
  args: InferRequestType<typeof client._cat.pit_segments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.pit_segments.$get(args, options))
}

export async function getCatPitSegmentsAll(
  args: InferRequestType<typeof client._cat.pit_segments._all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.pit_segments._all.$get(args, options))
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

export async function getCatSegmentReplication(
  args: InferRequestType<typeof client._cat.segment_replication.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.segment_replication.$get(args, options))
}

export async function getCatSegmentReplicationIndex(
  args: InferRequestType<(typeof client._cat.segment_replication)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cat.segment_replication[':index'].$get(args, options))
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

export async function deleteClusterDecommissionAwareness(
  args: InferRequestType<typeof client._cluster.decommission.awareness.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.decommission.awareness.$delete(args, options))
}

export async function getClusterDecommissionAwarenessAwarenessAttributeNameStatus(
  args: InferRequestType<
    (typeof client._cluster.decommission.awareness)[':awareness_attribute_name']['_status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._cluster.decommission.awareness[':awareness_attribute_name']._status.$get(args, options),
  )
}

export async function putClusterDecommissionAwarenessAwarenessAttributeNameAwarenessAttributeValue(
  args: InferRequestType<
    (typeof client._cluster.decommission.awareness)[':awareness_attribute_name'][':awareness_attribute_value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._cluster.decommission.awareness[':awareness_attribute_name'][
      ':awareness_attribute_value'
    ].$put(args, options),
  )
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

export async function getClusterNodesNodeIdHotThreads(
  args: InferRequestType<(typeof client._cluster.nodes)[':node_id']['hot_threads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.nodes[':node_id'].hot_threads.$get(args, options))
}

export async function getClusterNodesHotThreads(
  args: InferRequestType<typeof client._cluster.nodes.hot_threads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.nodes.hot_threads.$get(args, options))
}

export async function getClusterPendingTasks(
  args: InferRequestType<typeof client._cluster.pending_tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.pending_tasks.$get(args, options))
}

export async function postClusterReroute(
  args: InferRequestType<typeof client._cluster.reroute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.reroute.$post(args, options))
}

export async function getClusterRoutingAwarenessAttributeWeights(
  args: InferRequestType<
    (typeof client._cluster.routing.awareness)[':attribute']['weights']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._cluster.routing.awareness[':attribute'].weights.$get(args, options),
  )
}

export async function putClusterRoutingAwarenessAttributeWeights(
  args: InferRequestType<
    (typeof client._cluster.routing.awareness)[':attribute']['weights']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._cluster.routing.awareness[':attribute'].weights.$put(args, options),
  )
}

export async function deleteClusterRoutingAwarenessWeights(
  args: InferRequestType<typeof client._cluster.routing.awareness.weights.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.routing.awareness.weights.$delete(args, options))
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

export async function getClusterStatsMetricIndexMetricNodesNodeId(
  args: InferRequestType<
    (typeof client._cluster.stats)[':metric'][':index_metric']['nodes'][':node_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._cluster.stats[':metric'][':index_metric'].nodes[':node_id'].$get(args, options),
  )
}

export async function getClusterStatsMetricNodesNodeId(
  args: InferRequestType<(typeof client._cluster.stats)[':metric']['nodes'][':node_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.stats[':metric'].nodes[':node_id'].$get(args, options))
}

export async function getClusterStatsNodesNodeId(
  args: InferRequestType<(typeof client._cluster.stats.nodes)[':node_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.stats.nodes[':node_id'].$get(args, options))
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

export async function getDangling(
  args: InferRequestType<typeof client._dangling.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._dangling.$get(args, options))
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

export async function getDataStream(
  args: InferRequestType<typeof client._data_stream.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream.$get(args, options))
}

export async function getDataStreamStats(
  args: InferRequestType<typeof client._data_stream._stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream._stats.$get(args, options))
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

export async function getDataStreamNameStats(
  args: InferRequestType<(typeof client._data_stream)[':name']['_stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._data_stream[':name']._stats.$get(args, options))
}

export async function postDeleteByQueryTaskIdRethrottle(
  args: InferRequestType<(typeof client._delete_by_query)[':task_id']['_rethrottle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._delete_by_query[':task_id']._rethrottle.$post(args, options))
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

export async function postForcemerge(
  args: InferRequestType<typeof client._forcemerge.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._forcemerge.$post(args, options))
}

export async function getIndexTemplate(
  args: InferRequestType<typeof client._index_template.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._index_template.$get(args, options))
}

export async function postIndexTemplateSimulate(
  args: InferRequestType<typeof client._index_template._simulate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._index_template._simulate.$post(args, options))
}

export async function postIndexTemplateSimulateIndexName(
  args: InferRequestType<(typeof client._index_template._simulate_index)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._index_template._simulate_index[':name'].$post(args, options))
}

export async function postIndexTemplateSimulateName(
  args: InferRequestType<(typeof client._index_template._simulate)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._index_template._simulate[':name'].$post(args, options))
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

export async function getIngestPipeline(
  args: InferRequestType<typeof client._ingest.pipeline.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest.pipeline.$get(args, options))
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

export async function getIngestProcessorGrok(
  args: InferRequestType<typeof client._ingest.processor.grok.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ingest.processor.grok.$get(args, options))
}

export async function getInsightsTopQueries(
  args: InferRequestType<typeof client._insights.top_queries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._insights.top_queries.$get(args, options))
}

export async function getList(
  args: InferRequestType<typeof client._list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._list.$get(args, options))
}

export async function getListIndices(
  args: InferRequestType<typeof client._list.indices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._list.indices.$get(args, options))
}

export async function getListIndicesIndex(
  args: InferRequestType<(typeof client._list.indices)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._list.indices[':index'].$get(args, options))
}

export async function getListShards(
  args: InferRequestType<typeof client._list.shards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._list.shards.$get(args, options))
}

export async function getListShardsIndex(
  args: InferRequestType<(typeof client._list.shards)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._list.shards[':index'].$get(args, options))
}

export async function getLtr(
  args: InferRequestType<typeof client._ltr.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr.$get(args, options))
}

export async function putLtr(
  args: InferRequestType<typeof client._ltr.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr.$put(args, options))
}

export async function deleteLtr(
  args: InferRequestType<typeof client._ltr.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr.$delete(args, options))
}

export async function getLtrCachestats(
  args: InferRequestType<typeof client._ltr._cachestats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._cachestats.$get(args, options))
}

export async function postLtrClearcache(
  args: InferRequestType<typeof client._ltr._clearcache.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._clearcache.$post(args, options))
}

export async function getLtrFeature(
  args: InferRequestType<typeof client._ltr._feature.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._feature.$get(args, options))
}

export async function getLtrFeatureId(
  args: InferRequestType<(typeof client._ltr._feature)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._feature[':id'].$get(args, options))
}

export async function putLtrFeatureId(
  args: InferRequestType<(typeof client._ltr._feature)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._feature[':id'].$put(args, options))
}

export async function postLtrFeatureId(
  args: InferRequestType<(typeof client._ltr._feature)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._feature[':id'].$post(args, options))
}

export async function deleteLtrFeatureId(
  args: InferRequestType<(typeof client._ltr._feature)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._feature[':id'].$delete(args, options))
}

export async function getLtrFeatureset(
  args: InferRequestType<typeof client._ltr._featureset.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._featureset.$get(args, options))
}

export async function getLtrFeaturesetId(
  args: InferRequestType<(typeof client._ltr._featureset)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._featureset[':id'].$get(args, options))
}

export async function putLtrFeaturesetId(
  args: InferRequestType<(typeof client._ltr._featureset)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._featureset[':id'].$put(args, options))
}

export async function postLtrFeaturesetId(
  args: InferRequestType<(typeof client._ltr._featureset)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._featureset[':id'].$post(args, options))
}

export async function deleteLtrFeaturesetId(
  args: InferRequestType<(typeof client._ltr._featureset)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._featureset[':id'].$delete(args, options))
}

export async function postLtrFeaturesetNameAddfeatures(
  args: InferRequestType<(typeof client._ltr._featureset)[':name']['_addfeatures']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._featureset[':name']._addfeatures.$post(args, options))
}

export async function postLtrFeaturesetNameAddfeaturesQuery(
  args: InferRequestType<
    (typeof client._ltr._featureset)[':name']['_addfeatures'][':query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ltr._featureset[':name']._addfeatures[':query'].$post(args, options),
  )
}

export async function postLtrFeaturesetNameCreatemodel(
  args: InferRequestType<(typeof client._ltr._featureset)[':name']['_createmodel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._featureset[':name']._createmodel.$post(args, options))
}

export async function getLtrModel(
  args: InferRequestType<typeof client._ltr._model.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._model.$get(args, options))
}

export async function getLtrModelId(
  args: InferRequestType<(typeof client._ltr._model)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._model[':id'].$get(args, options))
}

export async function putLtrModelId(
  args: InferRequestType<(typeof client._ltr._model)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._model[':id'].$put(args, options))
}

export async function deleteLtrModelId(
  args: InferRequestType<(typeof client._ltr._model)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr._model[':id'].$delete(args, options))
}

export async function getLtrStore(
  args: InferRequestType<(typeof client._ltr)[':store']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store'].$get(args, options))
}

export async function putLtrStore(
  args: InferRequestType<(typeof client._ltr)[':store']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store'].$put(args, options))
}

export async function deleteLtrStore(
  args: InferRequestType<(typeof client._ltr)[':store']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store'].$delete(args, options))
}

export async function postLtrStoreClearcache(
  args: InferRequestType<(typeof client._ltr)[':store']['_clearcache']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store']._clearcache.$post(args, options))
}

export async function getLtrStoreFeature(
  args: InferRequestType<(typeof client._ltr)[':store']['_feature']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store']._feature.$get(args, options))
}

export async function getLtrStoreFeatureId(
  args: InferRequestType<(typeof client._ltr)[':store']['_feature'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store']._feature[':id'].$get(args, options))
}

export async function putLtrStoreFeatureId(
  args: InferRequestType<(typeof client._ltr)[':store']['_feature'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store']._feature[':id'].$put(args, options))
}

export async function postLtrStoreFeatureId(
  args: InferRequestType<(typeof client._ltr)[':store']['_feature'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store']._feature[':id'].$post(args, options))
}

export async function deleteLtrStoreFeatureId(
  args: InferRequestType<(typeof client._ltr)[':store']['_feature'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store']._feature[':id'].$delete(args, options))
}

export async function getLtrStoreFeatureset(
  args: InferRequestType<(typeof client._ltr)[':store']['_featureset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store']._featureset.$get(args, options))
}

export async function getLtrStoreFeaturesetId(
  args: InferRequestType<(typeof client._ltr)[':store']['_featureset'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store']._featureset[':id'].$get(args, options))
}

export async function putLtrStoreFeaturesetId(
  args: InferRequestType<(typeof client._ltr)[':store']['_featureset'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store']._featureset[':id'].$put(args, options))
}

export async function postLtrStoreFeaturesetId(
  args: InferRequestType<(typeof client._ltr)[':store']['_featureset'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store']._featureset[':id'].$post(args, options))
}

export async function deleteLtrStoreFeaturesetId(
  args: InferRequestType<(typeof client._ltr)[':store']['_featureset'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store']._featureset[':id'].$delete(args, options))
}

export async function postLtrStoreFeaturesetNameAddfeatures(
  args: InferRequestType<
    (typeof client._ltr)[':store']['_featureset'][':name']['_addfeatures']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ltr[':store']._featureset[':name']._addfeatures.$post(args, options),
  )
}

export async function postLtrStoreFeaturesetNameAddfeaturesQuery(
  args: InferRequestType<
    (typeof client._ltr)[':store']['_featureset'][':name']['_addfeatures'][':query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ltr[':store']._featureset[':name']._addfeatures[':query'].$post(args, options),
  )
}

export async function postLtrStoreFeaturesetNameCreatemodel(
  args: InferRequestType<
    (typeof client._ltr)[':store']['_featureset'][':name']['_createmodel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._ltr[':store']._featureset[':name']._createmodel.$post(args, options),
  )
}

export async function getLtrStoreModel(
  args: InferRequestType<(typeof client._ltr)[':store']['_model']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store']._model.$get(args, options))
}

export async function getLtrStoreModelId(
  args: InferRequestType<(typeof client._ltr)[':store']['_model'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store']._model[':id'].$get(args, options))
}

export async function putLtrStoreModelId(
  args: InferRequestType<(typeof client._ltr)[':store']['_model'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store']._model[':id'].$put(args, options))
}

export async function deleteLtrStoreModelId(
  args: InferRequestType<(typeof client._ltr)[':store']['_model'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._ltr[':store']._model[':id'].$delete(args, options))
}

export async function getMapping(
  args: InferRequestType<typeof client._mapping.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._mapping.$get(args, options))
}

export async function getMappingFieldFields(
  args: InferRequestType<(typeof client._mapping.field)[':fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._mapping.field[':fields'].$get(args, options))
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

export async function getNodes(
  args: InferRequestType<typeof client._nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes.$get(args, options))
}

export async function getNodesNodeIdOrMetric(
  args: InferRequestType<(typeof client._nodes)[':node_id_or_metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id_or_metric'].$get(args, options))
}

export async function getNodesNodeIdMetric(
  args: InferRequestType<(typeof client._nodes)[':node_id'][':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id'][':metric'].$get(args, options))
}

export async function getNodesNodeIdHotThreads(
  args: InferRequestType<(typeof client._nodes)[':node_id']['hot_threads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id'].hot_threads.$get(args, options))
}

export async function postNodesNodeIdReloadSecureSettings(
  args: InferRequestType<(typeof client._nodes)[':node_id']['reload_secure_settings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id'].reload_secure_settings.$post(args, options))
}

export async function getNodesNodeIdStats(
  args: InferRequestType<(typeof client._nodes)[':node_id']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id'].stats.$get(args, options))
}

export async function getNodesNodeIdStatsMetric(
  args: InferRequestType<(typeof client._nodes)[':node_id']['stats'][':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id'].stats[':metric'].$get(args, options))
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

export async function getNodesNodeIdUsage(
  args: InferRequestType<(typeof client._nodes)[':node_id']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id'].usage.$get(args, options))
}

export async function getNodesNodeIdUsageMetric(
  args: InferRequestType<(typeof client._nodes)[':node_id']['usage'][':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id'].usage[':metric'].$get(args, options))
}

export async function getNodesHotThreads(
  args: InferRequestType<typeof client._nodes.hot_threads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes.hot_threads.$get(args, options))
}

export async function postNodesReloadSecureSettings(
  args: InferRequestType<typeof client._nodes.reload_secure_settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes.reload_secure_settings.$post(args, options))
}

export async function getNodesStats(
  args: InferRequestType<typeof client._nodes.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes.stats.$get(args, options))
}

export async function getNodesStatsMetric(
  args: InferRequestType<(typeof client._nodes.stats)[':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes.stats[':metric'].$get(args, options))
}

export async function getNodesStatsMetricIndexMetric(
  args: InferRequestType<(typeof client._nodes.stats)[':metric'][':index_metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes.stats[':metric'][':index_metric'].$get(args, options))
}

export async function getNodesUsage(
  args: InferRequestType<typeof client._nodes.usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes.usage.$get(args, options))
}

export async function getNodesUsageMetric(
  args: InferRequestType<(typeof client._nodes.usage)[':metric']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes.usage[':metric'].$get(args, options))
}

export async function getOpendistroSecuritySslinfo(
  args: InferRequestType<typeof client._opendistro._security.sslinfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.sslinfo.$get(args, options))
}

export async function postPluginsAsynchronousSearch(
  args: InferRequestType<typeof client._plugins._asynchronous_search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._asynchronous_search.$post(args, options))
}

export async function getPluginsAsynchronousSearchId(
  args: InferRequestType<(typeof client._plugins._asynchronous_search)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._asynchronous_search[':id'].$get(args, options))
}

export async function deletePluginsAsynchronousSearchId(
  args: InferRequestType<(typeof client._plugins._asynchronous_search)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._asynchronous_search[':id'].$delete(args, options))
}

export async function getPluginsAsynchronousSearchStats(
  args: InferRequestType<typeof client._plugins._asynchronous_search.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._asynchronous_search.stats.$get(args, options))
}

export async function postPluginsFlowFrameworkWorkflow(
  args: InferRequestType<typeof client._plugins._flow_framework.workflow.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._flow_framework.workflow.$post(args, options))
}

export async function getPluginsFlowFrameworkWorkflowSearch(
  args: InferRequestType<typeof client._plugins._flow_framework.workflow._search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._flow_framework.workflow._search.$get(args, options))
}

export async function postPluginsFlowFrameworkWorkflowSearch(
  args: InferRequestType<typeof client._plugins._flow_framework.workflow._search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._flow_framework.workflow._search.$post(args, options))
}

export async function getPluginsFlowFrameworkWorkflowSteps(
  args: InferRequestType<typeof client._plugins._flow_framework.workflow._steps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._flow_framework.workflow._steps.$get(args, options))
}

export async function getPluginsFlowFrameworkWorkflowWorkflowId(
  args: InferRequestType<(typeof client._plugins._flow_framework.workflow)[':workflow_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._flow_framework.workflow[':workflow_id'].$get(args, options),
  )
}

export async function putPluginsFlowFrameworkWorkflowWorkflowId(
  args: InferRequestType<(typeof client._plugins._flow_framework.workflow)[':workflow_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._flow_framework.workflow[':workflow_id'].$put(args, options),
  )
}

export async function deletePluginsFlowFrameworkWorkflowWorkflowId(
  args: InferRequestType<
    (typeof client._plugins._flow_framework.workflow)[':workflow_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._flow_framework.workflow[':workflow_id'].$delete(args, options),
  )
}

export async function postPluginsFlowFrameworkWorkflowWorkflowIdDeprovision(
  args: InferRequestType<
    (typeof client._plugins._flow_framework.workflow)[':workflow_id']['_deprovision']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._flow_framework.workflow[':workflow_id']._deprovision.$post(args, options),
  )
}

export async function postPluginsFlowFrameworkWorkflowWorkflowIdProvision(
  args: InferRequestType<
    (typeof client._plugins._flow_framework.workflow)[':workflow_id']['_provision']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._flow_framework.workflow[':workflow_id']._provision.$post(args, options),
  )
}

export async function getPluginsFlowFrameworkWorkflowWorkflowIdStatus(
  args: InferRequestType<
    (typeof client._plugins._flow_framework.workflow)[':workflow_id']['_status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._flow_framework.workflow[':workflow_id']._status.$get(args, options),
  )
}

export async function getPluginsFlowFrameworkWorkflowStateSearch(
  args: InferRequestType<typeof client._plugins._flow_framework.workflow.state._search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._flow_framework.workflow.state._search.$get(args, options),
  )
}

export async function postPluginsFlowFrameworkWorkflowStateSearch(
  args: InferRequestType<typeof client._plugins._flow_framework.workflow.state._search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._flow_framework.workflow.state._search.$post(args, options),
  )
}

export async function postPluginsIsmAdd(
  args: InferRequestType<typeof client._plugins._ism.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.add.$post(args, options))
}

export async function postPluginsIsmAddIndex(
  args: InferRequestType<(typeof client._plugins._ism.add)[':index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.add[':index'].$post(args, options))
}

export async function postPluginsIsmChangePolicy(
  args: InferRequestType<typeof client._plugins._ism.change_policy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.change_policy.$post(args, options))
}

export async function postPluginsIsmChangePolicyIndex(
  args: InferRequestType<(typeof client._plugins._ism.change_policy)[':index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.change_policy[':index'].$post(args, options))
}

export async function getPluginsIsmExplain(
  args: InferRequestType<typeof client._plugins._ism.explain.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.explain.$get(args, options))
}

export async function postPluginsIsmExplain(
  args: InferRequestType<typeof client._plugins._ism.explain.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.explain.$post(args, options))
}

export async function getPluginsIsmExplainIndex(
  args: InferRequestType<(typeof client._plugins._ism.explain)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.explain[':index'].$get(args, options))
}

export async function postPluginsIsmExplainIndex(
  args: InferRequestType<(typeof client._plugins._ism.explain)[':index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.explain[':index'].$post(args, options))
}

export async function getPluginsIsmPolicies(
  args: InferRequestType<typeof client._plugins._ism.policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.policies.$get(args, options))
}

export async function putPluginsIsmPolicies(
  args: InferRequestType<typeof client._plugins._ism.policies.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.policies.$put(args, options))
}

export async function getPluginsIsmPoliciesPolicyId(
  args: InferRequestType<(typeof client._plugins._ism.policies)[':policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.policies[':policy_id'].$get(args, options))
}

export async function putPluginsIsmPoliciesPolicyId(
  args: InferRequestType<(typeof client._plugins._ism.policies)[':policy_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.policies[':policy_id'].$put(args, options))
}

export async function deletePluginsIsmPoliciesPolicyId(
  args: InferRequestType<(typeof client._plugins._ism.policies)[':policy_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.policies[':policy_id'].$delete(args, options))
}

export async function headPluginsIsmPoliciesPolicyId(
  args: InferRequestType<(typeof client._plugins._ism.policies)[':policy_id']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.policies[':policy_id'].$head(args, options))
}

export async function postPluginsIsmRemove(
  args: InferRequestType<typeof client._plugins._ism.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.remove.$post(args, options))
}

export async function postPluginsIsmRemoveIndex(
  args: InferRequestType<(typeof client._plugins._ism.remove)[':index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.remove[':index'].$post(args, options))
}

export async function postPluginsIsmRetry(
  args: InferRequestType<typeof client._plugins._ism.retry.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.retry.$post(args, options))
}

export async function postPluginsIsmRetryIndex(
  args: InferRequestType<(typeof client._plugins._ism.retry)[':index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ism.retry[':index'].$post(args, options))
}

export async function getPluginsKnnNodeIdStats(
  args: InferRequestType<(typeof client._plugins._knn)[':node_id']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._knn[':node_id'].stats.$get(args, options))
}

export async function getPluginsKnnNodeIdStatsStat(
  args: InferRequestType<(typeof client._plugins._knn)[':node_id']['stats'][':stat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._knn[':node_id'].stats[':stat'].$get(args, options))
}

export async function getPluginsKnnModelsSearch(
  args: InferRequestType<typeof client._plugins._knn.models._search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._knn.models._search.$get(args, options))
}

export async function postPluginsKnnModelsSearch(
  args: InferRequestType<typeof client._plugins._knn.models._search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._knn.models._search.$post(args, options))
}

export async function postPluginsKnnModelsTrain(
  args: InferRequestType<typeof client._plugins._knn.models._train.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._knn.models._train.$post(args, options))
}

export async function getPluginsKnnModelsModelId(
  args: InferRequestType<(typeof client._plugins._knn.models)[':model_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._knn.models[':model_id'].$get(args, options))
}

export async function deletePluginsKnnModelsModelId(
  args: InferRequestType<(typeof client._plugins._knn.models)[':model_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._knn.models[':model_id'].$delete(args, options))
}

export async function postPluginsKnnModelsModelIdTrain(
  args: InferRequestType<(typeof client._plugins._knn.models)[':model_id']['_train']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._knn.models[':model_id']._train.$post(args, options))
}

export async function getPluginsKnnStats(
  args: InferRequestType<typeof client._plugins._knn.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._knn.stats.$get(args, options))
}

export async function getPluginsKnnStatsStat(
  args: InferRequestType<(typeof client._plugins._knn.stats)[':stat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._knn.stats[':stat'].$get(args, options))
}

export async function getPluginsKnnWarmupIndex(
  args: InferRequestType<(typeof client._plugins._knn.warmup)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._knn.warmup[':index'].$get(args, options))
}

export async function getPluginsLtrNodeIdStats(
  args: InferRequestType<(typeof client._plugins._ltr)[':node_id']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ltr[':node_id'].stats.$get(args, options))
}

export async function getPluginsLtrNodeIdStatsStat(
  args: InferRequestType<(typeof client._plugins._ltr)[':node_id']['stats'][':stat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ltr[':node_id'].stats[':stat'].$get(args, options))
}

export async function getPluginsLtrStats(
  args: InferRequestType<typeof client._plugins._ltr.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ltr.stats.$get(args, options))
}

export async function getPluginsLtrStatsStat(
  args: InferRequestType<(typeof client._plugins._ltr.stats)[':stat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ltr.stats[':stat'].$get(args, options))
}

export async function postPluginsMlExecuteAlgorithmName(
  args: InferRequestType<(typeof client._plugins._ml._execute)[':algorithm_name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml._execute[':algorithm_name'].$post(args, options))
}

export async function postPluginsMlPredictAlgorithmNameModelId(
  args: InferRequestType<
    (typeof client._plugins._ml._predict)[':algorithm_name'][':model_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml._predict[':algorithm_name'][':model_id'].$post(args, options),
  )
}

export async function postPluginsMlTrainPredictAlgorithmName(
  args: InferRequestType<(typeof client._plugins._ml._train_predict)[':algorithm_name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml._train_predict[':algorithm_name'].$post(args, options),
  )
}

export async function postPluginsMlTrainAlgorithmName(
  args: InferRequestType<(typeof client._plugins._ml._train)[':algorithm_name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml._train[':algorithm_name'].$post(args, options))
}

export async function getPluginsMlNodeIdStats(
  args: InferRequestType<(typeof client._plugins._ml)[':node_id']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml[':node_id'].stats.$get(args, options))
}

export async function getPluginsMlNodeIdStatsStat(
  args: InferRequestType<(typeof client._plugins._ml)[':node_id']['stats'][':stat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml[':node_id'].stats[':stat'].$get(args, options))
}

export async function postPluginsMlAgentsRegister(
  args: InferRequestType<typeof client._plugins._ml.agents._register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.agents._register.$post(args, options))
}

export async function getPluginsMlAgentsSearch(
  args: InferRequestType<typeof client._plugins._ml.agents._search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.agents._search.$get(args, options))
}

export async function postPluginsMlAgentsSearch(
  args: InferRequestType<typeof client._plugins._ml.agents._search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.agents._search.$post(args, options))
}

export async function getPluginsMlAgentsAgentId(
  args: InferRequestType<(typeof client._plugins._ml.agents)[':agent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.agents[':agent_id'].$get(args, options))
}

export async function deletePluginsMlAgentsAgentId(
  args: InferRequestType<(typeof client._plugins._ml.agents)[':agent_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.agents[':agent_id'].$delete(args, options))
}

export async function postPluginsMlAgentsAgentIdExecute(
  args: InferRequestType<(typeof client._plugins._ml.agents)[':agent_id']['_execute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.agents[':agent_id']._execute.$post(args, options))
}

export async function postPluginsMlAgentsAgentIdExecuteStream(
  args: InferRequestType<
    (typeof client._plugins._ml.agents)[':agent_id']['_execute']['stream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.agents[':agent_id']._execute.stream.$post(args, options),
  )
}

export async function postPluginsMlConnectorsCreate(
  args: InferRequestType<typeof client._plugins._ml.connectors._create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.connectors._create.$post(args, options))
}

export async function getPluginsMlConnectorsSearch(
  args: InferRequestType<typeof client._plugins._ml.connectors._search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.connectors._search.$get(args, options))
}

export async function postPluginsMlConnectorsSearch(
  args: InferRequestType<typeof client._plugins._ml.connectors._search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.connectors._search.$post(args, options))
}

export async function getPluginsMlConnectorsConnectorId(
  args: InferRequestType<(typeof client._plugins._ml.connectors)[':connector_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.connectors[':connector_id'].$get(args, options))
}

export async function putPluginsMlConnectorsConnectorId(
  args: InferRequestType<(typeof client._plugins._ml.connectors)[':connector_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.connectors[':connector_id'].$put(args, options))
}

export async function deletePluginsMlConnectorsConnectorId(
  args: InferRequestType<(typeof client._plugins._ml.connectors)[':connector_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.connectors[':connector_id'].$delete(args, options))
}

export async function getPluginsMlControllersModelId(
  args: InferRequestType<(typeof client._plugins._ml.controllers)[':model_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.controllers[':model_id'].$get(args, options))
}

export async function putPluginsMlControllersModelId(
  args: InferRequestType<(typeof client._plugins._ml.controllers)[':model_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.controllers[':model_id'].$put(args, options))
}

export async function postPluginsMlControllersModelId(
  args: InferRequestType<(typeof client._plugins._ml.controllers)[':model_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.controllers[':model_id'].$post(args, options))
}

export async function deletePluginsMlControllersModelId(
  args: InferRequestType<(typeof client._plugins._ml.controllers)[':model_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.controllers[':model_id'].$delete(args, options))
}

export async function getPluginsMlMemory(
  args: InferRequestType<typeof client._plugins._ml.memory.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.memory.$get(args, options))
}

export async function postPluginsMlMemory(
  args: InferRequestType<typeof client._plugins._ml.memory.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.memory.$post(args, options))
}

export async function postPluginsMlMemoryContainersCreate(
  args: InferRequestType<typeof client._plugins._ml.memory_containers._create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.memory_containers._create.$post(args, options))
}

export async function getPluginsMlMemoryContainersSearch(
  args: InferRequestType<typeof client._plugins._ml.memory_containers._search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.memory_containers._search.$get(args, options))
}

export async function postPluginsMlMemoryContainersSearch(
  args: InferRequestType<typeof client._plugins._ml.memory_containers._search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.memory_containers._search.$post(args, options))
}

export async function getPluginsMlMemoryContainersMemoryContainerId(
  args: InferRequestType<
    (typeof client._plugins._ml.memory_containers)[':memory_container_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.memory_containers[':memory_container_id'].$get(args, options),
  )
}

export async function putPluginsMlMemoryContainersMemoryContainerId(
  args: InferRequestType<
    (typeof client._plugins._ml.memory_containers)[':memory_container_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.memory_containers[':memory_container_id'].$put(args, options),
  )
}

export async function deletePluginsMlMemoryContainersMemoryContainerId(
  args: InferRequestType<
    (typeof client._plugins._ml.memory_containers)[':memory_container_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.memory_containers[':memory_container_id'].$delete(args, options),
  )
}

export async function postPluginsMlMemoryContainersMemoryContainerIdMemories(
  args: InferRequestType<
    (typeof client._plugins._ml.memory_containers)[':memory_container_id']['memories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.memory_containers[':memory_container_id'].memories.$post(args, options),
  )
}

export async function postPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeDeleteByQuery(
  args: InferRequestType<
    (typeof client._plugins._ml.memory_containers)[':memory_container_id']['memories'][':type']['_delete_by_query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.memory_containers[':memory_container_id'].memories[
      ':type'
    ]._delete_by_query.$post(args, options),
  )
}

export async function getPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeSearch(
  args: InferRequestType<
    (typeof client._plugins._ml.memory_containers)[':memory_container_id']['memories'][':type']['_search']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.memory_containers[':memory_container_id'].memories[':type']._search.$get(
      args,
      options,
    ),
  )
}

export async function getPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeId(
  args: InferRequestType<
    (typeof client._plugins._ml.memory_containers)[':memory_container_id']['memories'][':type'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.memory_containers[':memory_container_id'].memories[':type'][':id'].$get(
      args,
      options,
    ),
  )
}

export async function putPluginsMlMemoryContainersMemoryContainerIdMemoriesTypeId(
  args: InferRequestType<
    (typeof client._plugins._ml.memory_containers)[':memory_container_id']['memories'][':type'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.memory_containers[':memory_container_id'].memories[':type'][':id'].$put(
      args,
      options,
    ),
  )
}

export async function deletePluginsMlMemoryContainersMemoryContainerIdMemoriesTypeId(
  args: InferRequestType<
    (typeof client._plugins._ml.memory_containers)[':memory_container_id']['memories'][':type'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.memory_containers[':memory_container_id'].memories[':type'][':id'].$delete(
      args,
      options,
    ),
  )
}

export async function postPluginsMlMemoryContainersMemoryContainerIdMemoriesSessions(
  args: InferRequestType<
    (typeof client._plugins._ml.memory_containers)[':memory_container_id']['memories']['sessions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.memory_containers[':memory_container_id'].memories.sessions.$post(
      args,
      options,
    ),
  )
}

export async function getPluginsMlMemorySearch(
  args: InferRequestType<typeof client._plugins._ml.memory._search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.memory._search.$get(args, options))
}

export async function postPluginsMlMemorySearch(
  args: InferRequestType<typeof client._plugins._ml.memory._search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.memory._search.$post(args, options))
}

export async function getPluginsMlMemoryMemoryId(
  args: InferRequestType<(typeof client._plugins._ml.memory)[':memory_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.memory[':memory_id'].$get(args, options))
}

export async function putPluginsMlMemoryMemoryId(
  args: InferRequestType<(typeof client._plugins._ml.memory)[':memory_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.memory[':memory_id'].$put(args, options))
}

export async function deletePluginsMlMemoryMemoryId(
  args: InferRequestType<(typeof client._plugins._ml.memory)[':memory_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.memory[':memory_id'].$delete(args, options))
}

export async function getPluginsMlMemoryMemoryIdSearch(
  args: InferRequestType<(typeof client._plugins._ml.memory)[':memory_id']['_search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.memory[':memory_id']._search.$get(args, options))
}

export async function postPluginsMlMemoryMemoryIdSearch(
  args: InferRequestType<(typeof client._plugins._ml.memory)[':memory_id']['_search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.memory[':memory_id']._search.$post(args, options))
}

export async function getPluginsMlMemoryMemoryIdMessages(
  args: InferRequestType<(typeof client._plugins._ml.memory)[':memory_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.memory[':memory_id'].messages.$get(args, options))
}

export async function postPluginsMlMemoryMemoryIdMessages(
  args: InferRequestType<(typeof client._plugins._ml.memory)[':memory_id']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.memory[':memory_id'].messages.$post(args, options))
}

export async function getPluginsMlMemoryMessageMessageId(
  args: InferRequestType<(typeof client._plugins._ml.memory.message)[':message_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.memory.message[':message_id'].$get(args, options))
}

export async function putPluginsMlMemoryMessageMessageId(
  args: InferRequestType<(typeof client._plugins._ml.memory.message)[':message_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.memory.message[':message_id'].$put(args, options))
}

export async function getPluginsMlMemoryMessageMessageIdTraces(
  args: InferRequestType<
    (typeof client._plugins._ml.memory.message)[':message_id']['traces']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.memory.message[':message_id'].traces.$get(args, options),
  )
}

export async function postPluginsMlModelGroupsRegister(
  args: InferRequestType<typeof client._plugins._ml.model_groups._register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.model_groups._register.$post(args, options))
}

export async function getPluginsMlModelGroupsSearch(
  args: InferRequestType<typeof client._plugins._ml.model_groups._search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.model_groups._search.$get(args, options))
}

export async function postPluginsMlModelGroupsSearch(
  args: InferRequestType<typeof client._plugins._ml.model_groups._search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.model_groups._search.$post(args, options))
}

export async function getPluginsMlModelGroupsModelGroupId(
  args: InferRequestType<(typeof client._plugins._ml.model_groups)[':model_group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.model_groups[':model_group_id'].$get(args, options),
  )
}

export async function putPluginsMlModelGroupsModelGroupId(
  args: InferRequestType<(typeof client._plugins._ml.model_groups)[':model_group_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.model_groups[':model_group_id'].$put(args, options),
  )
}

export async function deletePluginsMlModelGroupsModelGroupId(
  args: InferRequestType<(typeof client._plugins._ml.model_groups)[':model_group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.model_groups[':model_group_id'].$delete(args, options),
  )
}

export async function postPluginsMlModelsRegister(
  args: InferRequestType<typeof client._plugins._ml.models._register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.models._register.$post(args, options))
}

export async function postPluginsMlModelsRegisterMeta(
  args: InferRequestType<typeof client._plugins._ml.models._register_meta.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.models._register_meta.$post(args, options))
}

export async function getPluginsMlModelsSearch(
  args: InferRequestType<typeof client._plugins._ml.models._search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.models._search.$get(args, options))
}

export async function postPluginsMlModelsSearch(
  args: InferRequestType<typeof client._plugins._ml.models._search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.models._search.$post(args, options))
}

export async function postPluginsMlModelsUndeploy(
  args: InferRequestType<typeof client._plugins._ml.models._undeploy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.models._undeploy.$post(args, options))
}

export async function postPluginsMlModelsUnload(
  args: InferRequestType<typeof client._plugins._ml.models._unload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.models._unload.$post(args, options))
}

export async function postPluginsMlModelsUpload(
  args: InferRequestType<typeof client._plugins._ml.models._upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.models._upload.$post(args, options))
}

export async function getPluginsMlModelsModelId(
  args: InferRequestType<(typeof client._plugins._ml.models)[':model_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.models[':model_id'].$get(args, options))
}

export async function putPluginsMlModelsModelId(
  args: InferRequestType<(typeof client._plugins._ml.models)[':model_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.models[':model_id'].$put(args, options))
}

export async function deletePluginsMlModelsModelId(
  args: InferRequestType<(typeof client._plugins._ml.models)[':model_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.models[':model_id'].$delete(args, options))
}

export async function postPluginsMlModelsModelIdDeploy(
  args: InferRequestType<(typeof client._plugins._ml.models)[':model_id']['_deploy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.models[':model_id']._deploy.$post(args, options))
}

export async function postPluginsMlModelsModelIdLoad(
  args: InferRequestType<(typeof client._plugins._ml.models)[':model_id']['_load']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.models[':model_id']._load.$post(args, options))
}

export async function postPluginsMlModelsModelIdPredict(
  args: InferRequestType<(typeof client._plugins._ml.models)[':model_id']['_predict']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.models[':model_id']._predict.$post(args, options))
}

export async function postPluginsMlModelsModelIdPredictStream(
  args: InferRequestType<
    (typeof client._plugins._ml.models)[':model_id']['_predict']['stream']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.models[':model_id']._predict.stream.$post(args, options),
  )
}

export async function postPluginsMlModelsModelIdUndeploy(
  args: InferRequestType<(typeof client._plugins._ml.models)[':model_id']['_undeploy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.models[':model_id']._undeploy.$post(args, options))
}

export async function postPluginsMlModelsModelIdUnload(
  args: InferRequestType<(typeof client._plugins._ml.models)[':model_id']['_unload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.models[':model_id']._unload.$post(args, options))
}

export async function postPluginsMlModelsModelIdChunkChunkNumber(
  args: InferRequestType<
    (typeof client._plugins._ml.models)[':model_id']['chunk'][':chunk_number']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.models[':model_id'].chunk[':chunk_number'].$post(args, options),
  )
}

export async function postPluginsMlModelsModelIdUploadChunkChunkNumber(
  args: InferRequestType<
    (typeof client._plugins._ml.models)[':model_id']['upload_chunk'][':chunk_number']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._ml.models[':model_id'].upload_chunk[':chunk_number'].$post(args, options),
  )
}

export async function postPluginsMlModelsMeta(
  args: InferRequestType<typeof client._plugins._ml.models.meta.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.models.meta.$post(args, options))
}

export async function getPluginsMlProfile(
  args: InferRequestType<typeof client._plugins._ml.profile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.profile.$get(args, options))
}

export async function getPluginsMlProfileModels(
  args: InferRequestType<typeof client._plugins._ml.profile.models.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.profile.models.$get(args, options))
}

export async function getPluginsMlProfileModelsModelId(
  args: InferRequestType<(typeof client._plugins._ml.profile.models)[':model_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.profile.models[':model_id'].$get(args, options))
}

export async function getPluginsMlProfileTasks(
  args: InferRequestType<typeof client._plugins._ml.profile.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.profile.tasks.$get(args, options))
}

export async function getPluginsMlProfileTasksTaskId(
  args: InferRequestType<(typeof client._plugins._ml.profile.tasks)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.profile.tasks[':task_id'].$get(args, options))
}

export async function getPluginsMlStats(
  args: InferRequestType<typeof client._plugins._ml.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.stats.$get(args, options))
}

export async function getPluginsMlStatsStat(
  args: InferRequestType<(typeof client._plugins._ml.stats)[':stat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.stats[':stat'].$get(args, options))
}

export async function getPluginsMlTasksSearch(
  args: InferRequestType<typeof client._plugins._ml.tasks._search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.tasks._search.$get(args, options))
}

export async function postPluginsMlTasksSearch(
  args: InferRequestType<typeof client._plugins._ml.tasks._search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.tasks._search.$post(args, options))
}

export async function getPluginsMlTasksTaskId(
  args: InferRequestType<(typeof client._plugins._ml.tasks)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.tasks[':task_id'].$get(args, options))
}

export async function deletePluginsMlTasksTaskId(
  args: InferRequestType<(typeof client._plugins._ml.tasks)[':task_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.tasks[':task_id'].$delete(args, options))
}

export async function getPluginsMlTools(
  args: InferRequestType<typeof client._plugins._ml.tools.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.tools.$get(args, options))
}

export async function postPluginsMlToolsExecuteToolName(
  args: InferRequestType<(typeof client._plugins._ml.tools._execute)[':tool_name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.tools._execute[':tool_name'].$post(args, options))
}

export async function getPluginsMlToolsToolName(
  args: InferRequestType<(typeof client._plugins._ml.tools)[':tool_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ml.tools[':tool_name'].$get(args, options))
}

export async function getPluginsNeuralNodeIdStats(
  args: InferRequestType<(typeof client._plugins._neural)[':node_id']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._neural[':node_id'].stats.$get(args, options))
}

export async function getPluginsNeuralNodeIdStatsStat(
  args: InferRequestType<(typeof client._plugins._neural)[':node_id']['stats'][':stat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._neural[':node_id'].stats[':stat'].$get(args, options))
}

export async function getPluginsNeuralStats(
  args: InferRequestType<typeof client._plugins._neural.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._neural.stats.$get(args, options))
}

export async function getPluginsNeuralStatsStat(
  args: InferRequestType<(typeof client._plugins._neural.stats)[':stat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._neural.stats[':stat'].$get(args, options))
}

export async function getPluginsNotificationsChannels(
  args: InferRequestType<typeof client._plugins._notifications.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._notifications.channels.$get(args, options))
}

export async function getPluginsNotificationsConfigs(
  args: InferRequestType<typeof client._plugins._notifications.configs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._notifications.configs.$get(args, options))
}

export async function postPluginsNotificationsConfigs(
  args: InferRequestType<typeof client._plugins._notifications.configs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._notifications.configs.$post(args, options))
}

export async function deletePluginsNotificationsConfigs(
  args: InferRequestType<typeof client._plugins._notifications.configs.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._notifications.configs.$delete(args, options))
}

export async function getPluginsNotificationsConfigsConfigId(
  args: InferRequestType<(typeof client._plugins._notifications.configs)[':config_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._notifications.configs[':config_id'].$get(args, options),
  )
}

export async function putPluginsNotificationsConfigsConfigId(
  args: InferRequestType<(typeof client._plugins._notifications.configs)[':config_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._notifications.configs[':config_id'].$put(args, options),
  )
}

export async function deletePluginsNotificationsConfigsConfigId(
  args: InferRequestType<(typeof client._plugins._notifications.configs)[':config_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._notifications.configs[':config_id'].$delete(args, options),
  )
}

export async function getPluginsNotificationsFeatureTestConfigId(
  args: InferRequestType<
    (typeof client._plugins._notifications.feature.test)[':config_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._notifications.feature.test[':config_id'].$get(args, options),
  )
}

export async function postPluginsNotificationsFeatureTestConfigId(
  args: InferRequestType<
    (typeof client._plugins._notifications.feature.test)[':config_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._notifications.feature.test[':config_id'].$post(args, options),
  )
}

export async function getPluginsNotificationsFeatures(
  args: InferRequestType<typeof client._plugins._notifications.features.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._notifications.features.$get(args, options))
}

export async function getPluginsObservabilityLocalStats(
  args: InferRequestType<typeof client._plugins._observability._local.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._observability._local.stats.$get(args, options))
}

export async function getPluginsObservabilityObject(
  args: InferRequestType<typeof client._plugins._observability.object.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._observability.object.$get(args, options))
}

export async function postPluginsObservabilityObject(
  args: InferRequestType<typeof client._plugins._observability.object.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._observability.object.$post(args, options))
}

export async function deletePluginsObservabilityObject(
  args: InferRequestType<typeof client._plugins._observability.object.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._observability.object.$delete(args, options))
}

export async function getPluginsObservabilityObjectObjectId(
  args: InferRequestType<(typeof client._plugins._observability.object)[':object_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._observability.object[':object_id'].$get(args, options),
  )
}

export async function putPluginsObservabilityObjectObjectId(
  args: InferRequestType<(typeof client._plugins._observability.object)[':object_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._observability.object[':object_id'].$put(args, options),
  )
}

export async function deletePluginsObservabilityObjectObjectId(
  args: InferRequestType<(typeof client._plugins._observability.object)[':object_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._observability.object[':object_id'].$delete(args, options),
  )
}

export async function postPluginsPpl(
  args: InferRequestType<typeof client._plugins._ppl.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ppl.$post(args, options))
}

export async function postPluginsPplExplain(
  args: InferRequestType<typeof client._plugins._ppl._explain.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ppl._explain.$post(args, options))
}

export async function getPluginsPplStats(
  args: InferRequestType<typeof client._plugins._ppl.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ppl.stats.$get(args, options))
}

export async function postPluginsPplStats(
  args: InferRequestType<typeof client._plugins._ppl.stats.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._ppl.stats.$post(args, options))
}

export async function getPluginsQueryDatasources(
  args: InferRequestType<typeof client._plugins._query._datasources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._query._datasources.$get(args, options))
}

export async function putPluginsQueryDatasources(
  args: InferRequestType<typeof client._plugins._query._datasources.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._query._datasources.$put(args, options))
}

export async function postPluginsQueryDatasources(
  args: InferRequestType<typeof client._plugins._query._datasources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._query._datasources.$post(args, options))
}

export async function getPluginsQueryDatasourcesDatasourceName(
  args: InferRequestType<(typeof client._plugins._query._datasources)[':datasource_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._query._datasources[':datasource_name'].$get(args, options),
  )
}

export async function deletePluginsQueryDatasourcesDatasourceName(
  args: InferRequestType<
    (typeof client._plugins._query._datasources)[':datasource_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._query._datasources[':datasource_name'].$delete(args, options),
  )
}

export async function putPluginsQuerySettings(
  args: InferRequestType<typeof client._plugins._query.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._query.settings.$put(args, options))
}

export async function postPluginsRefreshSearchAnalyzersIndex(
  args: InferRequestType<(typeof client._plugins._refresh_search_analyzers)[':index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._refresh_search_analyzers[':index'].$post(args, options),
  )
}

export async function postPluginsReplicationAutofollow(
  args: InferRequestType<typeof client._plugins._replication._autofollow.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._replication._autofollow.$post(args, options))
}

export async function deletePluginsReplicationAutofollow(
  args: InferRequestType<typeof client._plugins._replication._autofollow.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._replication._autofollow.$delete(args, options))
}

export async function postPluginsReplicationIndexPause(
  args: InferRequestType<(typeof client._plugins._replication)[':index']['_pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._replication[':index']._pause.$post(args, options))
}

export async function postPluginsReplicationIndexResume(
  args: InferRequestType<(typeof client._plugins._replication)[':index']['_resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._replication[':index']._resume.$post(args, options))
}

export async function putPluginsReplicationIndexStart(
  args: InferRequestType<(typeof client._plugins._replication)[':index']['_start']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._replication[':index']._start.$put(args, options))
}

export async function getPluginsReplicationIndexStatus(
  args: InferRequestType<(typeof client._plugins._replication)[':index']['_status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._replication[':index']._status.$get(args, options))
}

export async function postPluginsReplicationIndexStop(
  args: InferRequestType<(typeof client._plugins._replication)[':index']['_stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._replication[':index']._stop.$post(args, options))
}

export async function putPluginsReplicationIndexUpdate(
  args: InferRequestType<(typeof client._plugins._replication)[':index']['_update']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._replication[':index']._update.$put(args, options))
}

export async function getPluginsReplicationAutofollowStats(
  args: InferRequestType<typeof client._plugins._replication.autofollow_stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._replication.autofollow_stats.$get(args, options))
}

export async function getPluginsReplicationFollowerStats(
  args: InferRequestType<typeof client._plugins._replication.follower_stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._replication.follower_stats.$get(args, options))
}

export async function getPluginsReplicationLeaderStats(
  args: InferRequestType<typeof client._plugins._replication.leader_stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._replication.leader_stats.$get(args, options))
}

export async function getPluginsRollupJobsId(
  args: InferRequestType<(typeof client._plugins._rollup.jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._rollup.jobs[':id'].$get(args, options))
}

export async function putPluginsRollupJobsId(
  args: InferRequestType<(typeof client._plugins._rollup.jobs)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._rollup.jobs[':id'].$put(args, options))
}

export async function deletePluginsRollupJobsId(
  args: InferRequestType<(typeof client._plugins._rollup.jobs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._rollup.jobs[':id'].$delete(args, options))
}

export async function getPluginsRollupJobsIdExplain(
  args: InferRequestType<(typeof client._plugins._rollup.jobs)[':id']['_explain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._rollup.jobs[':id']._explain.$get(args, options))
}

export async function postPluginsRollupJobsIdStart(
  args: InferRequestType<(typeof client._plugins._rollup.jobs)[':id']['_start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._rollup.jobs[':id']._start.$post(args, options))
}

export async function postPluginsRollupJobsIdStop(
  args: InferRequestType<(typeof client._plugins._rollup.jobs)[':id']['_stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._rollup.jobs[':id']._stop.$post(args, options))
}

export async function getPluginsSearchRelevanceNodeIdStats(
  args: InferRequestType<(typeof client._plugins._search_relevance)[':node_id']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._search_relevance[':node_id'].stats.$get(args, options),
  )
}

export async function getPluginsSearchRelevanceNodeIdStatsStat(
  args: InferRequestType<
    (typeof client._plugins._search_relevance)[':node_id']['stats'][':stat']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._search_relevance[':node_id'].stats[':stat'].$get(args, options),
  )
}

export async function getPluginsSearchRelevanceExperiments(
  args: InferRequestType<typeof client._plugins._search_relevance.experiments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._search_relevance.experiments.$get(args, options))
}

export async function putPluginsSearchRelevanceExperiments(
  args: InferRequestType<typeof client._plugins._search_relevance.experiments.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._search_relevance.experiments.$put(args, options))
}

export async function getPluginsSearchRelevanceExperimentsExperimentId(
  args: InferRequestType<
    (typeof client._plugins._search_relevance.experiments)[':experiment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._search_relevance.experiments[':experiment_id'].$get(args, options),
  )
}

export async function deletePluginsSearchRelevanceExperimentsExperimentId(
  args: InferRequestType<
    (typeof client._plugins._search_relevance.experiments)[':experiment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._search_relevance.experiments[':experiment_id'].$delete(args, options),
  )
}

export async function getPluginsSearchRelevanceExperimentsSchedule(
  args: InferRequestType<typeof client._plugins._search_relevance.experiments.schedule.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._search_relevance.experiments.schedule.$get(args, options),
  )
}

export async function postPluginsSearchRelevanceExperimentsSchedule(
  args: InferRequestType<typeof client._plugins._search_relevance.experiments.schedule.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._search_relevance.experiments.schedule.$post(args, options),
  )
}

export async function getPluginsSearchRelevanceExperimentsScheduleExperimentId(
  args: InferRequestType<
    (typeof client._plugins._search_relevance.experiments.schedule)[':experiment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._search_relevance.experiments.schedule[':experiment_id'].$get(args, options),
  )
}

export async function deletePluginsSearchRelevanceExperimentsScheduleExperimentId(
  args: InferRequestType<
    (typeof client._plugins._search_relevance.experiments.schedule)[':experiment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._search_relevance.experiments.schedule[':experiment_id'].$delete(args, options),
  )
}

export async function getPluginsSearchRelevanceJudgments(
  args: InferRequestType<typeof client._plugins._search_relevance.judgments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._search_relevance.judgments.$get(args, options))
}

export async function putPluginsSearchRelevanceJudgments(
  args: InferRequestType<typeof client._plugins._search_relevance.judgments.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._search_relevance.judgments.$put(args, options))
}

export async function getPluginsSearchRelevanceJudgmentsJudgmentId(
  args: InferRequestType<
    (typeof client._plugins._search_relevance.judgments)[':judgment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._search_relevance.judgments[':judgment_id'].$get(args, options),
  )
}

export async function deletePluginsSearchRelevanceJudgmentsJudgmentId(
  args: InferRequestType<
    (typeof client._plugins._search_relevance.judgments)[':judgment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._search_relevance.judgments[':judgment_id'].$delete(args, options),
  )
}

export async function getPluginsSearchRelevanceQuerySets(
  args: InferRequestType<typeof client._plugins._search_relevance.query_sets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._search_relevance.query_sets.$get(args, options))
}

export async function putPluginsSearchRelevanceQuerySets(
  args: InferRequestType<typeof client._plugins._search_relevance.query_sets.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._search_relevance.query_sets.$put(args, options))
}

export async function postPluginsSearchRelevanceQuerySets(
  args: InferRequestType<typeof client._plugins._search_relevance.query_sets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._search_relevance.query_sets.$post(args, options))
}

export async function getPluginsSearchRelevanceQuerySetsQuerySetId(
  args: InferRequestType<
    (typeof client._plugins._search_relevance.query_sets)[':query_set_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._search_relevance.query_sets[':query_set_id'].$get(args, options),
  )
}

export async function deletePluginsSearchRelevanceQuerySetsQuerySetId(
  args: InferRequestType<
    (typeof client._plugins._search_relevance.query_sets)[':query_set_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._search_relevance.query_sets[':query_set_id'].$delete(args, options),
  )
}

export async function getPluginsSearchRelevanceSearchConfigurations(
  args: InferRequestType<typeof client._plugins._search_relevance.search_configurations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._search_relevance.search_configurations.$get(args, options),
  )
}

export async function putPluginsSearchRelevanceSearchConfigurations(
  args: InferRequestType<typeof client._plugins._search_relevance.search_configurations.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._search_relevance.search_configurations.$put(args, options),
  )
}

export async function getPluginsSearchRelevanceSearchConfigurationsSearchConfigurationId(
  args: InferRequestType<
    (typeof client._plugins._search_relevance.search_configurations)[':search_configuration_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._search_relevance.search_configurations[':search_configuration_id'].$get(
      args,
      options,
    ),
  )
}

export async function deletePluginsSearchRelevanceSearchConfigurationsSearchConfigurationId(
  args: InferRequestType<
    (typeof client._plugins._search_relevance.search_configurations)[':search_configuration_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._search_relevance.search_configurations[':search_configuration_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getPluginsSearchRelevanceStats(
  args: InferRequestType<typeof client._plugins._search_relevance.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._search_relevance.stats.$get(args, options))
}

export async function getPluginsSearchRelevanceStatsStat(
  args: InferRequestType<(typeof client._plugins._search_relevance.stats)[':stat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._search_relevance.stats[':stat'].$get(args, options))
}

export async function getPluginsSecurityAnalyticsAlerts(
  args: InferRequestType<typeof client._plugins._security_analytics.alerts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security_analytics.alerts.$get(args, options))
}

export async function getPluginsSecurityAnalyticsFindingsSearch(
  args: InferRequestType<typeof client._plugins._security_analytics.findings._search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security_analytics.findings._search.$get(args, options),
  )
}

export async function getPluginsSecurityAnalyticsFindingsCorrelate(
  args: InferRequestType<typeof client._plugins._security_analytics.findings.correlate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security_analytics.findings.correlate.$get(args, options),
  )
}

export async function getPluginsSecurityApiUpgradeCheck(
  args: InferRequestType<typeof client._plugins._security.api._upgrade_check.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api._upgrade_check.$get(args, options))
}

export async function postPluginsSecurityApiUpgradePerform(
  args: InferRequestType<typeof client._plugins._security.api._upgrade_perform.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api._upgrade_perform.$post(args, options))
}

export async function getPluginsSecurityApiAccount(
  args: InferRequestType<typeof client._plugins._security.api.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.account.$get(args, options))
}

export async function putPluginsSecurityApiAccount(
  args: InferRequestType<typeof client._plugins._security.api.account.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.account.$put(args, options))
}

export async function getPluginsSecurityApiActiongroups(
  args: InferRequestType<typeof client._plugins._security.api.actiongroups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.actiongroups.$get(args, options))
}

export async function patchPluginsSecurityApiActiongroups(
  args: InferRequestType<typeof client._plugins._security.api.actiongroups.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.actiongroups.$patch(args, options))
}

export async function getPluginsSecurityApiActiongroupsActionGroup(
  args: InferRequestType<
    (typeof client._plugins._security.api.actiongroups)[':action_group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.actiongroups[':action_group'].$get(args, options),
  )
}

export async function putPluginsSecurityApiActiongroupsActionGroup(
  args: InferRequestType<
    (typeof client._plugins._security.api.actiongroups)[':action_group']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.actiongroups[':action_group'].$put(args, options),
  )
}

export async function deletePluginsSecurityApiActiongroupsActionGroup(
  args: InferRequestType<
    (typeof client._plugins._security.api.actiongroups)[':action_group']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.actiongroups[':action_group'].$delete(args, options),
  )
}

export async function patchPluginsSecurityApiActiongroupsActionGroup(
  args: InferRequestType<
    (typeof client._plugins._security.api.actiongroups)[':action_group']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.actiongroups[':action_group'].$patch(args, options),
  )
}

export async function getPluginsSecurityApiAllowlist(
  args: InferRequestType<typeof client._plugins._security.api.allowlist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.allowlist.$get(args, options))
}

export async function putPluginsSecurityApiAllowlist(
  args: InferRequestType<typeof client._plugins._security.api.allowlist.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.allowlist.$put(args, options))
}

export async function patchPluginsSecurityApiAllowlist(
  args: InferRequestType<typeof client._plugins._security.api.allowlist.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.allowlist.$patch(args, options))
}

export async function getPluginsSecurityApiAudit(
  args: InferRequestType<typeof client._plugins._security.api.audit.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.audit.$get(args, options))
}

export async function patchPluginsSecurityApiAudit(
  args: InferRequestType<typeof client._plugins._security.api.audit.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.audit.$patch(args, options))
}

export async function putPluginsSecurityApiAuditConfig(
  args: InferRequestType<typeof client._plugins._security.api.audit.config.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.audit.config.$put(args, options))
}

export async function postPluginsSecurityApiAuthtoken(
  args: InferRequestType<typeof client._plugins._security.api.authtoken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.authtoken.$post(args, options))
}

export async function getPluginsSecurityApiCache(
  args: InferRequestType<typeof client._plugins._security.api.cache.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.cache.$get(args, options))
}

export async function putPluginsSecurityApiCache(
  args: InferRequestType<typeof client._plugins._security.api.cache.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.cache.$put(args, options))
}

export async function postPluginsSecurityApiCache(
  args: InferRequestType<typeof client._plugins._security.api.cache.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.cache.$post(args, options))
}

export async function deletePluginsSecurityApiCache(
  args: InferRequestType<typeof client._plugins._security.api.cache.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.cache.$delete(args, options))
}

export async function getPluginsSecurityApiCertificates(
  args: InferRequestType<typeof client._plugins._security.api.certificates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.certificates.$get(args, options))
}

export async function getPluginsSecurityApiCertificatesNodeId(
  args: InferRequestType<(typeof client._plugins._security.api.certificates)[':node_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.certificates[':node_id'].$get(args, options),
  )
}

export async function postPluginsSecurityApiGenerateonbehalfoftoken(
  args: InferRequestType<typeof client._plugins._security.api.generateonbehalfoftoken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.generateonbehalfoftoken.$post(args, options),
  )
}

export async function getPluginsSecurityApiInternalusers(
  args: InferRequestType<typeof client._plugins._security.api.internalusers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.internalusers.$get(args, options))
}

export async function patchPluginsSecurityApiInternalusers(
  args: InferRequestType<typeof client._plugins._security.api.internalusers.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.internalusers.$patch(args, options))
}

export async function getPluginsSecurityApiInternalusersUsername(
  args: InferRequestType<(typeof client._plugins._security.api.internalusers)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.internalusers[':username'].$get(args, options),
  )
}

export async function putPluginsSecurityApiInternalusersUsername(
  args: InferRequestType<(typeof client._plugins._security.api.internalusers)[':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.internalusers[':username'].$put(args, options),
  )
}

export async function deletePluginsSecurityApiInternalusersUsername(
  args: InferRequestType<
    (typeof client._plugins._security.api.internalusers)[':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.internalusers[':username'].$delete(args, options),
  )
}

export async function patchPluginsSecurityApiInternalusersUsername(
  args: InferRequestType<
    (typeof client._plugins._security.api.internalusers)[':username']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.internalusers[':username'].$patch(args, options),
  )
}

export async function postPluginsSecurityApiInternalusersUsernameAuthtoken(
  args: InferRequestType<
    (typeof client._plugins._security.api.internalusers)[':username']['authtoken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.internalusers[':username'].authtoken.$post(args, options),
  )
}

export async function postPluginsSecurityApiMigrate(
  args: InferRequestType<typeof client._plugins._security.api.migrate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.migrate.$post(args, options))
}

export async function getPluginsSecurityApiNodesdn(
  args: InferRequestType<typeof client._plugins._security.api.nodesdn.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.nodesdn.$get(args, options))
}

export async function patchPluginsSecurityApiNodesdn(
  args: InferRequestType<typeof client._plugins._security.api.nodesdn.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.nodesdn.$patch(args, options))
}

export async function getPluginsSecurityApiNodesdnClusterName(
  args: InferRequestType<(typeof client._plugins._security.api.nodesdn)[':cluster_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.nodesdn[':cluster_name'].$get(args, options),
  )
}

export async function putPluginsSecurityApiNodesdnClusterName(
  args: InferRequestType<(typeof client._plugins._security.api.nodesdn)[':cluster_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.nodesdn[':cluster_name'].$put(args, options),
  )
}

export async function deletePluginsSecurityApiNodesdnClusterName(
  args: InferRequestType<
    (typeof client._plugins._security.api.nodesdn)[':cluster_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.nodesdn[':cluster_name'].$delete(args, options),
  )
}

export async function patchPluginsSecurityApiNodesdnClusterName(
  args: InferRequestType<(typeof client._plugins._security.api.nodesdn)[':cluster_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.nodesdn[':cluster_name'].$patch(args, options),
  )
}

export async function getPluginsSecurityApiPermissionsinfo(
  args: InferRequestType<typeof client._plugins._security.api.permissionsinfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.permissionsinfo.$get(args, options))
}

export async function getPluginsSecurityApiRoles(
  args: InferRequestType<typeof client._plugins._security.api.roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.roles.$get(args, options))
}

export async function patchPluginsSecurityApiRoles(
  args: InferRequestType<typeof client._plugins._security.api.roles.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.roles.$patch(args, options))
}

export async function getPluginsSecurityApiRolesRole(
  args: InferRequestType<(typeof client._plugins._security.api.roles)[':role']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.roles[':role'].$get(args, options))
}

export async function putPluginsSecurityApiRolesRole(
  args: InferRequestType<(typeof client._plugins._security.api.roles)[':role']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.roles[':role'].$put(args, options))
}

export async function deletePluginsSecurityApiRolesRole(
  args: InferRequestType<(typeof client._plugins._security.api.roles)[':role']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.roles[':role'].$delete(args, options))
}

export async function patchPluginsSecurityApiRolesRole(
  args: InferRequestType<(typeof client._plugins._security.api.roles)[':role']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.roles[':role'].$patch(args, options))
}

export async function getPluginsSecurityApiRolesmapping(
  args: InferRequestType<typeof client._plugins._security.api.rolesmapping.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.rolesmapping.$get(args, options))
}

export async function patchPluginsSecurityApiRolesmapping(
  args: InferRequestType<typeof client._plugins._security.api.rolesmapping.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.rolesmapping.$patch(args, options))
}

export async function getPluginsSecurityApiRolesmappingRole(
  args: InferRequestType<(typeof client._plugins._security.api.rolesmapping)[':role']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.rolesmapping[':role'].$get(args, options),
  )
}

export async function putPluginsSecurityApiRolesmappingRole(
  args: InferRequestType<(typeof client._plugins._security.api.rolesmapping)[':role']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.rolesmapping[':role'].$put(args, options),
  )
}

export async function deletePluginsSecurityApiRolesmappingRole(
  args: InferRequestType<(typeof client._plugins._security.api.rolesmapping)[':role']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.rolesmapping[':role'].$delete(args, options),
  )
}

export async function patchPluginsSecurityApiRolesmappingRole(
  args: InferRequestType<(typeof client._plugins._security.api.rolesmapping)[':role']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.rolesmapping[':role'].$patch(args, options),
  )
}

export async function getPluginsSecurityApiSecurityconfig(
  args: InferRequestType<typeof client._plugins._security.api.securityconfig.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.securityconfig.$get(args, options))
}

export async function patchPluginsSecurityApiSecurityconfig(
  args: InferRequestType<typeof client._plugins._security.api.securityconfig.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.securityconfig.$patch(args, options))
}

export async function putPluginsSecurityApiSecurityconfigConfig(
  args: InferRequestType<typeof client._plugins._security.api.securityconfig.config.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.securityconfig.config.$put(args, options),
  )
}

export async function getPluginsSecurityApiSslCerts(
  args: InferRequestType<typeof client._plugins._security.api.ssl.certs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.ssl.certs.$get(args, options))
}

export async function putPluginsSecurityApiSslHttpReloadcerts(
  args: InferRequestType<typeof client._plugins._security.api.ssl.http.reloadcerts.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.ssl.http.reloadcerts.$put(args, options))
}

export async function putPluginsSecurityApiSslTransportReloadcerts(
  args: InferRequestType<typeof client._plugins._security.api.ssl.transport.reloadcerts.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.ssl.transport.reloadcerts.$put(args, options),
  )
}

export async function getPluginsSecurityApiTenancyConfig(
  args: InferRequestType<typeof client._plugins._security.api.tenancy.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.tenancy.config.$get(args, options))
}

export async function putPluginsSecurityApiTenancyConfig(
  args: InferRequestType<typeof client._plugins._security.api.tenancy.config.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.tenancy.config.$put(args, options))
}

export async function getPluginsSecurityApiTenants(
  args: InferRequestType<typeof client._plugins._security.api.tenants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.tenants.$get(args, options))
}

export async function patchPluginsSecurityApiTenants(
  args: InferRequestType<typeof client._plugins._security.api.tenants.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.tenants.$patch(args, options))
}

export async function getPluginsSecurityApiTenantsTenant(
  args: InferRequestType<(typeof client._plugins._security.api.tenants)[':tenant']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.tenants[':tenant'].$get(args, options))
}

export async function putPluginsSecurityApiTenantsTenant(
  args: InferRequestType<(typeof client._plugins._security.api.tenants)[':tenant']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.tenants[':tenant'].$put(args, options))
}

export async function deletePluginsSecurityApiTenantsTenant(
  args: InferRequestType<(typeof client._plugins._security.api.tenants)[':tenant']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.tenants[':tenant'].$delete(args, options),
  )
}

export async function patchPluginsSecurityApiTenantsTenant(
  args: InferRequestType<(typeof client._plugins._security.api.tenants)[':tenant']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.tenants[':tenant'].$patch(args, options))
}

export async function getPluginsSecurityApiUser(
  args: InferRequestType<typeof client._plugins._security.api.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.user.$get(args, options))
}

export async function getPluginsSecurityApiUserUsername(
  args: InferRequestType<(typeof client._plugins._security.api.user)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.user[':username'].$get(args, options))
}

export async function putPluginsSecurityApiUserUsername(
  args: InferRequestType<(typeof client._plugins._security.api.user)[':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.user[':username'].$put(args, options))
}

export async function deletePluginsSecurityApiUserUsername(
  args: InferRequestType<(typeof client._plugins._security.api.user)[':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.user[':username'].$delete(args, options))
}

export async function postPluginsSecurityApiUserUsernameAuthtoken(
  args: InferRequestType<
    (typeof client._plugins._security.api.user)[':username']['authtoken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._security.api.user[':username'].authtoken.$post(args, options),
  )
}

export async function getPluginsSecurityApiValidate(
  args: InferRequestType<typeof client._plugins._security.api.validate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.api.validate.$get(args, options))
}

export async function getPluginsSecurityAuthinfo(
  args: InferRequestType<typeof client._plugins._security.authinfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.authinfo.$get(args, options))
}

export async function postPluginsSecurityAuthinfo(
  args: InferRequestType<typeof client._plugins._security.authinfo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.authinfo.$post(args, options))
}

export async function getPluginsSecurityDashboardsinfo(
  args: InferRequestType<typeof client._plugins._security.dashboardsinfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.dashboardsinfo.$get(args, options))
}

export async function postPluginsSecurityDashboardsinfo(
  args: InferRequestType<typeof client._plugins._security.dashboardsinfo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.dashboardsinfo.$post(args, options))
}

export async function getPluginsSecurityHealth(
  args: InferRequestType<typeof client._plugins._security.health.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.health.$get(args, options))
}

export async function postPluginsSecurityHealth(
  args: InferRequestType<typeof client._plugins._security.health.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.health.$post(args, options))
}

export async function getPluginsSecurityTenantinfo(
  args: InferRequestType<typeof client._plugins._security.tenantinfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.tenantinfo.$get(args, options))
}

export async function postPluginsSecurityTenantinfo(
  args: InferRequestType<typeof client._plugins._security.tenantinfo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.tenantinfo.$post(args, options))
}

export async function getPluginsSecurityWhoami(
  args: InferRequestType<typeof client._plugins._security.whoami.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.whoami.$get(args, options))
}

export async function postPluginsSecurityWhoami(
  args: InferRequestType<typeof client._plugins._security.whoami.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.whoami.$post(args, options))
}

export async function getPluginsSecurityWhoamiprotected(
  args: InferRequestType<typeof client._plugins._security.whoamiprotected.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._security.whoamiprotected.$get(args, options))
}

export async function getPluginsSmPolicies(
  args: InferRequestType<typeof client._plugins._sm.policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._sm.policies.$get(args, options))
}

export async function getPluginsSmPoliciesPolicyName(
  args: InferRequestType<(typeof client._plugins._sm.policies)[':policy_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._sm.policies[':policy_name'].$get(args, options))
}

export async function putPluginsSmPoliciesPolicyName(
  args: InferRequestType<(typeof client._plugins._sm.policies)[':policy_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._sm.policies[':policy_name'].$put(args, options))
}

export async function postPluginsSmPoliciesPolicyName(
  args: InferRequestType<(typeof client._plugins._sm.policies)[':policy_name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._sm.policies[':policy_name'].$post(args, options))
}

export async function deletePluginsSmPoliciesPolicyName(
  args: InferRequestType<(typeof client._plugins._sm.policies)[':policy_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._sm.policies[':policy_name'].$delete(args, options))
}

export async function getPluginsSmPoliciesPolicyNameExplain(
  args: InferRequestType<(typeof client._plugins._sm.policies)[':policy_name']['_explain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._sm.policies[':policy_name']._explain.$get(args, options),
  )
}

export async function postPluginsSmPoliciesPolicyNameStart(
  args: InferRequestType<(typeof client._plugins._sm.policies)[':policy_name']['_start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._sm.policies[':policy_name']._start.$post(args, options),
  )
}

export async function postPluginsSmPoliciesPolicyNameStop(
  args: InferRequestType<(typeof client._plugins._sm.policies)[':policy_name']['_stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins._sm.policies[':policy_name']._stop.$post(args, options),
  )
}

export async function postPluginsSql(
  args: InferRequestType<typeof client._plugins._sql.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._sql.$post(args, options))
}

export async function postPluginsSqlExplain(
  args: InferRequestType<typeof client._plugins._sql._explain.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._sql._explain.$post(args, options))
}

export async function postPluginsSqlClose(
  args: InferRequestType<typeof client._plugins._sql.close.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._sql.close.$post(args, options))
}

export async function getPluginsSqlStats(
  args: InferRequestType<typeof client._plugins._sql.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._sql.stats.$get(args, options))
}

export async function postPluginsSqlStats(
  args: InferRequestType<typeof client._plugins._sql.stats.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._sql.stats.$post(args, options))
}

export async function getPluginsTransform(
  args: InferRequestType<typeof client._plugins._transform.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._transform.$get(args, options))
}

export async function postPluginsTransformPreview(
  args: InferRequestType<typeof client._plugins._transform._preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._transform._preview.$post(args, options))
}

export async function getPluginsTransformId(
  args: InferRequestType<(typeof client._plugins._transform)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._transform[':id'].$get(args, options))
}

export async function putPluginsTransformId(
  args: InferRequestType<(typeof client._plugins._transform)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._transform[':id'].$put(args, options))
}

export async function deletePluginsTransformId(
  args: InferRequestType<(typeof client._plugins._transform)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._transform[':id'].$delete(args, options))
}

export async function getPluginsTransformIdExplain(
  args: InferRequestType<(typeof client._plugins._transform)[':id']['_explain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._transform[':id']._explain.$get(args, options))
}

export async function postPluginsTransformIdStart(
  args: InferRequestType<(typeof client._plugins._transform)[':id']['_start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._transform[':id']._start.$post(args, options))
}

export async function postPluginsTransformIdStop(
  args: InferRequestType<(typeof client._plugins._transform)[':id']['_stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins._transform[':id']._stop.$post(args, options))
}

export async function getPluginsGeospatialUploadStats(
  args: InferRequestType<typeof client._plugins.geospatial._upload.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins.geospatial._upload.stats.$get(args, options))
}

export async function putPluginsGeospatialGeojsonUpload(
  args: InferRequestType<typeof client._plugins.geospatial.geojson._upload.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins.geospatial.geojson._upload.$put(args, options))
}

export async function postPluginsGeospatialGeojsonUpload(
  args: InferRequestType<typeof client._plugins.geospatial.geojson._upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins.geospatial.geojson._upload.$post(args, options))
}

export async function getPluginsGeospatialIp2geoDatasource(
  args: InferRequestType<typeof client._plugins.geospatial.ip2geo.datasource.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins.geospatial.ip2geo.datasource.$get(args, options))
}

export async function getPluginsGeospatialIp2geoDatasourceName(
  args: InferRequestType<(typeof client._plugins.geospatial.ip2geo.datasource)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins.geospatial.ip2geo.datasource[':name'].$get(args, options),
  )
}

export async function putPluginsGeospatialIp2geoDatasourceName(
  args: InferRequestType<(typeof client._plugins.geospatial.ip2geo.datasource)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins.geospatial.ip2geo.datasource[':name'].$put(args, options),
  )
}

export async function deletePluginsGeospatialIp2geoDatasourceName(
  args: InferRequestType<(typeof client._plugins.geospatial.ip2geo.datasource)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins.geospatial.ip2geo.datasource[':name'].$delete(args, options),
  )
}

export async function putPluginsGeospatialIp2geoDatasourceNameSettings(
  args: InferRequestType<
    (typeof client._plugins.geospatial.ip2geo.datasource)[':name']['_settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._plugins.geospatial.ip2geo.datasource[':name']._settings.$put(args, options),
  )
}

export async function postPluginsUbiInitialize(
  args: InferRequestType<typeof client._plugins.ubi.initialize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._plugins.ubi.initialize.$post(args, options))
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

export async function getRecovery(
  args: InferRequestType<typeof client._recovery.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._recovery.$get(args, options))
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

export async function postReindex(
  args: InferRequestType<typeof client._reindex.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._reindex.$post(args, options))
}

export async function postReindexTaskIdRethrottle(
  args: InferRequestType<(typeof client._reindex)[':task_id']['_rethrottle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._reindex[':task_id']._rethrottle.$post(args, options))
}

export async function getRemoteInfo(
  args: InferRequestType<typeof client._remote.info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._remote.info.$get(args, options))
}

export async function postRemotestoreRestore(
  args: InferRequestType<typeof client._remotestore._restore.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._remotestore._restore.$post(args, options))
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

export async function getResolveIndexName(
  args: InferRequestType<(typeof client._resolve.index)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._resolve.index[':name'].$get(args, options))
}

export async function getScriptContext(
  args: InferRequestType<typeof client._script_context.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._script_context.$get(args, options))
}

export async function getScriptLanguage(
  args: InferRequestType<typeof client._script_language.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._script_language.$get(args, options))
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

export async function getSearchPipeline(
  args: InferRequestType<typeof client._search.pipeline.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search.pipeline.$get(args, options))
}

export async function getSearchPipelineId(
  args: InferRequestType<(typeof client._search.pipeline)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search.pipeline[':id'].$get(args, options))
}

export async function putSearchPipelineId(
  args: InferRequestType<(typeof client._search.pipeline)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search.pipeline[':id'].$put(args, options))
}

export async function deleteSearchPipelineId(
  args: InferRequestType<(typeof client._search.pipeline)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search.pipeline[':id'].$delete(args, options))
}

export async function deleteSearchPointInTime(
  args: InferRequestType<typeof client._search.point_in_time.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search.point_in_time.$delete(args, options))
}

export async function getSearchPointInTimeAll(
  args: InferRequestType<typeof client._search.point_in_time._all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search.point_in_time._all.$get(args, options))
}

export async function deleteSearchPointInTimeAll(
  args: InferRequestType<typeof client._search.point_in_time._all.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._search.point_in_time._all.$delete(args, options))
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

export async function getSegments(
  args: InferRequestType<typeof client._segments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._segments.$get(args, options))
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

export async function getSettingsName(
  args: InferRequestType<(typeof client._settings)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._settings[':name'].$get(args, options))
}

export async function getShardStores(
  args: InferRequestType<typeof client._shard_stores.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._shard_stores.$get(args, options))
}

export async function getSnapshot(
  args: InferRequestType<typeof client._snapshot.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot.$get(args, options))
}

export async function getSnapshotStatus(
  args: InferRequestType<typeof client._snapshot._status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot._status.$get(args, options))
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

export async function postSnapshotRepositoryCleanup(
  args: InferRequestType<(typeof client._snapshot)[':repository']['_cleanup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot[':repository']._cleanup.$post(args, options))
}

export async function getSnapshotRepositoryStatus(
  args: InferRequestType<(typeof client._snapshot)[':repository']['_status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot[':repository']._status.$get(args, options))
}

export async function postSnapshotRepositoryVerify(
  args: InferRequestType<(typeof client._snapshot)[':repository']['_verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._snapshot[':repository']._verify.$post(args, options))
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

export async function getSnapshotRepositorySnapshotStatus(
  args: InferRequestType<(typeof client._snapshot)[':repository'][':snapshot']['_status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._snapshot[':repository'][':snapshot']._status.$get(args, options),
  )
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

export async function getTasks(
  args: InferRequestType<typeof client._tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._tasks.$get(args, options))
}

export async function postTasksCancel(
  args: InferRequestType<typeof client._tasks._cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._tasks._cancel.$post(args, options))
}

export async function getTasksTaskId(
  args: InferRequestType<(typeof client._tasks)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._tasks[':task_id'].$get(args, options))
}

export async function postTasksTaskIdCancel(
  args: InferRequestType<(typeof client._tasks)[':task_id']['_cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._tasks[':task_id']._cancel.$post(args, options))
}

export async function getTemplate(
  args: InferRequestType<typeof client._template.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._template.$get(args, options))
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

export async function postUpdateByQueryTaskIdRethrottle(
  args: InferRequestType<(typeof client._update_by_query)[':task_id']['_rethrottle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._update_by_query[':task_id']._rethrottle.$post(args, options))
}

export async function getUpgrade(
  args: InferRequestType<typeof client._upgrade.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._upgrade.$get(args, options))
}

export async function postUpgrade(
  args: InferRequestType<typeof client._upgrade.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._upgrade.$post(args, options))
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

export async function getWlmQueryGroup(
  args: InferRequestType<typeof client._wlm.query_group.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._wlm.query_group.$get(args, options))
}

export async function putWlmQueryGroup(
  args: InferRequestType<typeof client._wlm.query_group.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._wlm.query_group.$put(args, options))
}

export async function getWlmQueryGroupName(
  args: InferRequestType<(typeof client._wlm.query_group)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._wlm.query_group[':name'].$get(args, options))
}

export async function putWlmQueryGroupName(
  args: InferRequestType<(typeof client._wlm.query_group)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._wlm.query_group[':name'].$put(args, options))
}

export async function deleteWlmQueryGroupName(
  args: InferRequestType<(typeof client._wlm.query_group)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._wlm.query_group[':name'].$delete(args, options))
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

export async function getIndexAlias(
  args: InferRequestType<(typeof client)[':index']['_alias']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._alias.$get(args, options))
}

export async function putIndexAlias(
  args: InferRequestType<(typeof client)[':index']['_alias']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._alias.$put(args, options))
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

export async function putIndexAliases(
  args: InferRequestType<(typeof client)[':index']['_aliases']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._aliases.$put(args, options))
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

export async function putIndexBlockBlock(
  args: InferRequestType<(typeof client)[':index']['_block'][':block']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._block[':block'].$put(args, options))
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

export async function putIndexBulkStream(
  args: InferRequestType<(typeof client)[':index']['_bulk']['stream']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._bulk.stream.$put(args, options))
}

export async function postIndexBulkStream(
  args: InferRequestType<(typeof client)[':index']['_bulk']['stream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._bulk.stream.$post(args, options))
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

export async function postIndexDeleteByQuery(
  args: InferRequestType<(typeof client)[':index']['_delete_by_query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._delete_by_query.$post(args, options))
}

export async function postIndexDoc(
  args: InferRequestType<(typeof client)[':index']['_doc']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._doc.$post(args, options))
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

export async function postIndexForcemerge(
  args: InferRequestType<(typeof client)[':index']['_forcemerge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._forcemerge.$post(args, options))
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

export async function getIndexMappingFieldFields(
  args: InferRequestType<(typeof client)[':index']['_mapping']['field'][':fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._mapping.field[':fields'].$get(args, options))
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

export async function postIndexOpen(
  args: InferRequestType<(typeof client)[':index']['_open']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._open.$post(args, options))
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

export async function getIndexRecovery(
  args: InferRequestType<(typeof client)[':index']['_recovery']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._recovery.$get(args, options))
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

export async function postIndexSearchPointInTime(
  args: InferRequestType<(typeof client)[':index']['_search']['point_in_time']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._search.point_in_time.$post(args, options))
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

export async function getIndexSegments(
  args: InferRequestType<(typeof client)[':index']['_segments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._segments.$get(args, options))
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

export async function postIndexUpdateByQuery(
  args: InferRequestType<(typeof client)[':index']['_update_by_query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._update_by_query.$post(args, options))
}

export async function postIndexUpdateId(
  args: InferRequestType<(typeof client)[':index']['_update'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._update[':id'].$post(args, options))
}

export async function getIndexUpgrade(
  args: InferRequestType<(typeof client)[':index']['_upgrade']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._upgrade.$get(args, options))
}

export async function postIndexUpgrade(
  args: InferRequestType<(typeof client)[':index']['_upgrade']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index']._upgrade.$post(args, options))
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

export async function postIndexIngestionPause(
  args: InferRequestType<(typeof client)[':index']['ingestion']['_pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index'].ingestion._pause.$post(args, options))
}

export async function postIndexIngestionResume(
  args: InferRequestType<(typeof client)[':index']['ingestion']['_resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index'].ingestion._resume.$post(args, options))
}

export async function getIndexIngestionState(
  args: InferRequestType<(typeof client)[':index']['ingestion']['_state']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':index'].ingestion._state.$get(args, options))
}

export async function postOpendistroAsynchronousSearch(
  args: InferRequestType<typeof client._opendistro._asynchronous_search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._asynchronous_search.$post(args, options))
}

export async function getOpendistroAsynchronousSearchStats(
  args: InferRequestType<typeof client._opendistro._asynchronous_search.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._asynchronous_search.stats.$get(args, options))
}

export async function getOpendistroAsynchronousSearchId(
  args: InferRequestType<(typeof client._opendistro._asynchronous_search)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._asynchronous_search[':id'].$get(args, options))
}

export async function deleteOpendistroAsynchronousSearchId(
  args: InferRequestType<(typeof client._opendistro._asynchronous_search)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._asynchronous_search[':id'].$delete(args, options))
}

export async function postOpendistroIsmAdd(
  args: InferRequestType<typeof client._opendistro._ism.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.add.$post(args, options))
}

export async function postOpendistroIsmAddIndex(
  args: InferRequestType<(typeof client._opendistro._ism.add)[':index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.add[':index'].$post(args, options))
}

export async function postOpendistroIsmChangePolicy(
  args: InferRequestType<typeof client._opendistro._ism.change_policy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.change_policy.$post(args, options))
}

export async function postOpendistroIsmChangePolicyIndex(
  args: InferRequestType<(typeof client._opendistro._ism.change_policy)[':index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.change_policy[':index'].$post(args, options))
}

export async function getOpendistroIsmExplain(
  args: InferRequestType<typeof client._opendistro._ism.explain.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.explain.$get(args, options))
}

export async function postOpendistroIsmExplain(
  args: InferRequestType<typeof client._opendistro._ism.explain.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.explain.$post(args, options))
}

export async function getOpendistroIsmExplainIndex(
  args: InferRequestType<(typeof client._opendistro._ism.explain)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.explain[':index'].$get(args, options))
}

export async function postOpendistroIsmExplainIndex(
  args: InferRequestType<(typeof client._opendistro._ism.explain)[':index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.explain[':index'].$post(args, options))
}

export async function getOpendistroIsmPolicies(
  args: InferRequestType<typeof client._opendistro._ism.policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.policies.$get(args, options))
}

export async function putOpendistroIsmPolicies(
  args: InferRequestType<typeof client._opendistro._ism.policies.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.policies.$put(args, options))
}

export async function getOpendistroIsmPoliciesPolicyId(
  args: InferRequestType<(typeof client._opendistro._ism.policies)[':policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.policies[':policy_id'].$get(args, options))
}

export async function putOpendistroIsmPoliciesPolicyId(
  args: InferRequestType<(typeof client._opendistro._ism.policies)[':policy_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.policies[':policy_id'].$put(args, options))
}

export async function deleteOpendistroIsmPoliciesPolicyId(
  args: InferRequestType<(typeof client._opendistro._ism.policies)[':policy_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.policies[':policy_id'].$delete(args, options))
}

export async function headOpendistroIsmPoliciesPolicyId(
  args: InferRequestType<(typeof client._opendistro._ism.policies)[':policy_id']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.policies[':policy_id'].$head(args, options))
}

export async function postOpendistroIsmRemove(
  args: InferRequestType<typeof client._opendistro._ism.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.remove.$post(args, options))
}

export async function postOpendistroIsmRemoveIndex(
  args: InferRequestType<(typeof client._opendistro._ism.remove)[':index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.remove[':index'].$post(args, options))
}

export async function postOpendistroIsmRetry(
  args: InferRequestType<typeof client._opendistro._ism.retry.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.retry.$post(args, options))
}

export async function postOpendistroIsmRetryIndex(
  args: InferRequestType<(typeof client._opendistro._ism.retry)[':index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ism.retry[':index'].$post(args, options))
}

export async function getOpendistroKnnStatsStat(
  args: InferRequestType<(typeof client._opendistro._knn.stats)[':stat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._knn.stats[':stat'].$get(args, options))
}

export async function getOpendistroKnnWarmupIndex(
  args: InferRequestType<(typeof client._opendistro._knn.warmup)[':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._knn.warmup[':index'].$get(args, options))
}

export async function getOpendistroKnnNodeIdStatsStat(
  args: InferRequestType<(typeof client._opendistro._knn)[':node_id']['stats'][':stat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._knn[':node_id'].stats[':stat'].$get(args, options))
}

export async function postOpendistroPpl(
  args: InferRequestType<typeof client._opendistro._ppl.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ppl.$post(args, options))
}

export async function postOpendistroPplExplain(
  args: InferRequestType<typeof client._opendistro._ppl._explain.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ppl._explain.$post(args, options))
}

export async function getOpendistroPplStats(
  args: InferRequestType<typeof client._opendistro._ppl.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ppl.stats.$get(args, options))
}

export async function postOpendistroPplStats(
  args: InferRequestType<typeof client._opendistro._ppl.stats.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._ppl.stats.$post(args, options))
}

export async function postOpendistroRefreshSearchAnalyzersIndex(
  args: InferRequestType<(typeof client._opendistro._refresh_search_analyzers)[':index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._refresh_search_analyzers[':index'].$post(args, options),
  )
}

export async function getOpendistroRollupJobsId(
  args: InferRequestType<(typeof client._opendistro._rollup.jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._rollup.jobs[':id'].$get(args, options))
}

export async function putOpendistroRollupJobsId(
  args: InferRequestType<(typeof client._opendistro._rollup.jobs)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._rollup.jobs[':id'].$put(args, options))
}

export async function deleteOpendistroRollupJobsId(
  args: InferRequestType<(typeof client._opendistro._rollup.jobs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._rollup.jobs[':id'].$delete(args, options))
}

export async function getOpendistroRollupJobsIdExplain(
  args: InferRequestType<(typeof client._opendistro._rollup.jobs)[':id']['_explain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._rollup.jobs[':id']._explain.$get(args, options))
}

export async function postOpendistroRollupJobsIdStart(
  args: InferRequestType<(typeof client._opendistro._rollup.jobs)[':id']['_start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._rollup.jobs[':id']._start.$post(args, options))
}

export async function postOpendistroRollupJobsIdStop(
  args: InferRequestType<(typeof client._opendistro._rollup.jobs)[':id']['_stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._rollup.jobs[':id']._stop.$post(args, options))
}

export async function getOpendistroSecurityApiAccount(
  args: InferRequestType<typeof client._opendistro._security.api.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.account.$get(args, options))
}

export async function putOpendistroSecurityApiAccount(
  args: InferRequestType<typeof client._opendistro._security.api.account.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.account.$put(args, options))
}

export async function getOpendistroSecurityApiActiongroupsActionGroup(
  args: InferRequestType<
    (typeof client._opendistro._security.api.actiongroups)[':action_group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.actiongroups[':action_group'].$get(args, options),
  )
}

export async function putOpendistroSecurityApiActiongroupsActionGroup(
  args: InferRequestType<
    (typeof client._opendistro._security.api.actiongroups)[':action_group']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.actiongroups[':action_group'].$put(args, options),
  )
}

export async function deleteOpendistroSecurityApiActiongroupsActionGroup(
  args: InferRequestType<
    (typeof client._opendistro._security.api.actiongroups)[':action_group']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.actiongroups[':action_group'].$delete(args, options),
  )
}

export async function patchOpendistroSecurityApiActiongroupsActionGroup(
  args: InferRequestType<
    (typeof client._opendistro._security.api.actiongroups)[':action_group']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.actiongroups[':action_group'].$patch(args, options),
  )
}

export async function putOpendistroSecurityApiAuditConfig(
  args: InferRequestType<typeof client._opendistro._security.api.audit.config.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.audit.config.$put(args, options))
}

export async function postOpendistroSecurityApiAuthtoken(
  args: InferRequestType<typeof client._opendistro._security.api.authtoken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.authtoken.$post(args, options))
}

export async function getOpendistroSecurityApiCache(
  args: InferRequestType<typeof client._opendistro._security.api.cache.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.cache.$get(args, options))
}

export async function putOpendistroSecurityApiCache(
  args: InferRequestType<typeof client._opendistro._security.api.cache.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.cache.$put(args, options))
}

export async function postOpendistroSecurityApiCache(
  args: InferRequestType<typeof client._opendistro._security.api.cache.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.cache.$post(args, options))
}

export async function deleteOpendistroSecurityApiCache(
  args: InferRequestType<typeof client._opendistro._security.api.cache.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.cache.$delete(args, options))
}

export async function getOpendistroSecurityApiInternalusersUsername(
  args: InferRequestType<
    (typeof client._opendistro._security.api.internalusers)[':username']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.internalusers[':username'].$get(args, options),
  )
}

export async function putOpendistroSecurityApiInternalusersUsername(
  args: InferRequestType<
    (typeof client._opendistro._security.api.internalusers)[':username']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.internalusers[':username'].$put(args, options),
  )
}

export async function deleteOpendistroSecurityApiInternalusersUsername(
  args: InferRequestType<
    (typeof client._opendistro._security.api.internalusers)[':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.internalusers[':username'].$delete(args, options),
  )
}

export async function patchOpendistroSecurityApiInternalusersUsername(
  args: InferRequestType<
    (typeof client._opendistro._security.api.internalusers)[':username']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.internalusers[':username'].$patch(args, options),
  )
}

export async function postOpendistroSecurityApiInternalusersUsernameAuthtoken(
  args: InferRequestType<
    (typeof client._opendistro._security.api.internalusers)[':username']['authtoken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.internalusers[':username'].authtoken.$post(args, options),
  )
}

export async function postOpendistroSecurityApiMigrate(
  args: InferRequestType<typeof client._opendistro._security.api.migrate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.migrate.$post(args, options))
}

export async function getOpendistroSecurityApiPermissionsinfo(
  args: InferRequestType<typeof client._opendistro._security.api.permissionsinfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.permissionsinfo.$get(args, options))
}

export async function getOpendistroSecurityApiRolesRole(
  args: InferRequestType<(typeof client._opendistro._security.api.roles)[':role']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.roles[':role'].$get(args, options))
}

export async function putOpendistroSecurityApiRolesRole(
  args: InferRequestType<(typeof client._opendistro._security.api.roles)[':role']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.roles[':role'].$put(args, options))
}

export async function deleteOpendistroSecurityApiRolesRole(
  args: InferRequestType<(typeof client._opendistro._security.api.roles)[':role']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.roles[':role'].$delete(args, options))
}

export async function patchOpendistroSecurityApiRolesRole(
  args: InferRequestType<(typeof client._opendistro._security.api.roles)[':role']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.roles[':role'].$patch(args, options))
}

export async function getOpendistroSecurityApiRolesmappingRole(
  args: InferRequestType<(typeof client._opendistro._security.api.rolesmapping)[':role']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.rolesmapping[':role'].$get(args, options),
  )
}

export async function putOpendistroSecurityApiRolesmappingRole(
  args: InferRequestType<(typeof client._opendistro._security.api.rolesmapping)[':role']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.rolesmapping[':role'].$put(args, options),
  )
}

export async function deleteOpendistroSecurityApiRolesmappingRole(
  args: InferRequestType<
    (typeof client._opendistro._security.api.rolesmapping)[':role']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.rolesmapping[':role'].$delete(args, options),
  )
}

export async function patchOpendistroSecurityApiRolesmappingRole(
  args: InferRequestType<(typeof client._opendistro._security.api.rolesmapping)[':role']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.rolesmapping[':role'].$patch(args, options),
  )
}

export async function getOpendistroSecurityApiSecurityconfig(
  args: InferRequestType<typeof client._opendistro._security.api.securityconfig.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.securityconfig.$get(args, options))
}

export async function patchOpendistroSecurityApiSecurityconfig(
  args: InferRequestType<typeof client._opendistro._security.api.securityconfig.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.securityconfig.$patch(args, options))
}

export async function putOpendistroSecurityApiSecurityconfigConfig(
  args: InferRequestType<typeof client._opendistro._security.api.securityconfig.config.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.securityconfig.config.$put(args, options),
  )
}

export async function getOpendistroSecurityApiSslCerts(
  args: InferRequestType<typeof client._opendistro._security.api.ssl.certs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.ssl.certs.$get(args, options))
}

export async function putOpendistroSecurityApiSslTransportReloadcerts(
  args: InferRequestType<typeof client._opendistro._security.api.ssl.transport.reloadcerts.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.ssl.transport.reloadcerts.$put(args, options),
  )
}

export async function putOpendistroSecurityApiSslHttpReloadcerts(
  args: InferRequestType<typeof client._opendistro._security.api.ssl.http.reloadcerts.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.ssl.http.reloadcerts.$put(args, options),
  )
}

export async function getOpendistroSecurityApiNodesdnClusterName(
  args: InferRequestType<
    (typeof client._opendistro._security.api.nodesdn)[':cluster_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.nodesdn[':cluster_name'].$get(args, options),
  )
}

export async function putOpendistroSecurityApiNodesdnClusterName(
  args: InferRequestType<
    (typeof client._opendistro._security.api.nodesdn)[':cluster_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.nodesdn[':cluster_name'].$put(args, options),
  )
}

export async function deleteOpendistroSecurityApiNodesdnClusterName(
  args: InferRequestType<
    (typeof client._opendistro._security.api.nodesdn)[':cluster_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.nodesdn[':cluster_name'].$delete(args, options),
  )
}

export async function patchOpendistroSecurityApiNodesdnClusterName(
  args: InferRequestType<
    (typeof client._opendistro._security.api.nodesdn)[':cluster_name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.nodesdn[':cluster_name'].$patch(args, options),
  )
}

export async function getOpendistroSecurityApiTenancyConfig(
  args: InferRequestType<typeof client._opendistro._security.api.tenancy.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.tenancy.config.$get(args, options))
}

export async function putOpendistroSecurityApiTenancyConfig(
  args: InferRequestType<typeof client._opendistro._security.api.tenancy.config.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.tenancy.config.$put(args, options))
}

export async function getOpendistroSecurityApiTenants(
  args: InferRequestType<typeof client._opendistro._security.api.tenants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.tenants.$get(args, options))
}

export async function patchOpendistroSecurityApiTenants(
  args: InferRequestType<typeof client._opendistro._security.api.tenants.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.tenants.$patch(args, options))
}

export async function getOpendistroSecurityApiTenantsTenant(
  args: InferRequestType<(typeof client._opendistro._security.api.tenants)[':tenant']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.tenants[':tenant'].$get(args, options),
  )
}

export async function putOpendistroSecurityApiTenantsTenant(
  args: InferRequestType<(typeof client._opendistro._security.api.tenants)[':tenant']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.tenants[':tenant'].$put(args, options),
  )
}

export async function deleteOpendistroSecurityApiTenantsTenant(
  args: InferRequestType<(typeof client._opendistro._security.api.tenants)[':tenant']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.tenants[':tenant'].$delete(args, options),
  )
}

export async function patchOpendistroSecurityApiTenantsTenant(
  args: InferRequestType<(typeof client._opendistro._security.api.tenants)[':tenant']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.tenants[':tenant'].$patch(args, options),
  )
}

export async function getOpendistroSecurityApiUser(
  args: InferRequestType<typeof client._opendistro._security.api.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.user.$get(args, options))
}

export async function getOpendistroSecurityApiUserUsername(
  args: InferRequestType<(typeof client._opendistro._security.api.user)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.user[':username'].$get(args, options))
}

export async function putOpendistroSecurityApiUserUsername(
  args: InferRequestType<(typeof client._opendistro._security.api.user)[':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.user[':username'].$put(args, options))
}

export async function deleteOpendistroSecurityApiUserUsername(
  args: InferRequestType<(typeof client._opendistro._security.api.user)[':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.user[':username'].$delete(args, options),
  )
}

export async function postOpendistroSecurityApiUserUsernameAuthtoken(
  args: InferRequestType<
    (typeof client._opendistro._security.api.user)[':username']['authtoken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._opendistro._security.api.user[':username'].authtoken.$post(args, options),
  )
}

export async function getOpendistroSecurityApiValidate(
  args: InferRequestType<typeof client._opendistro._security.api.validate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.validate.$get(args, options))
}

export async function getOpendistroSecurityApiAllowlist(
  args: InferRequestType<typeof client._opendistro._security.api.allowlist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.allowlist.$get(args, options))
}

export async function putOpendistroSecurityApiAllowlist(
  args: InferRequestType<typeof client._opendistro._security.api.allowlist.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.allowlist.$put(args, options))
}

export async function patchOpendistroSecurityApiAllowlist(
  args: InferRequestType<typeof client._opendistro._security.api.allowlist.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.api.allowlist.$patch(args, options))
}

export async function getOpendistroSecurityAuthinfo(
  args: InferRequestType<typeof client._opendistro._security.authinfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.authinfo.$get(args, options))
}

export async function postOpendistroSecurityAuthinfo(
  args: InferRequestType<typeof client._opendistro._security.authinfo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.authinfo.$post(args, options))
}

export async function getOpendistroSecurityHealth(
  args: InferRequestType<typeof client._opendistro._security.health.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.health.$get(args, options))
}

export async function postOpendistroSecurityHealth(
  args: InferRequestType<typeof client._opendistro._security.health.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.health.$post(args, options))
}

export async function getOpendistroSecurityKibanainfo(
  args: InferRequestType<typeof client._opendistro._security.kibanainfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.kibanainfo.$get(args, options))
}

export async function postOpendistroSecurityKibanainfo(
  args: InferRequestType<typeof client._opendistro._security.kibanainfo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.kibanainfo.$post(args, options))
}

export async function getOpendistroSecurityTenantinfo(
  args: InferRequestType<typeof client._opendistro._security.tenantinfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.tenantinfo.$get(args, options))
}

export async function postOpendistroSecurityTenantinfo(
  args: InferRequestType<typeof client._opendistro._security.tenantinfo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._security.tenantinfo.$post(args, options))
}

export async function postOpendistroSql(
  args: InferRequestType<typeof client._opendistro._sql.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._sql.$post(args, options))
}

export async function postOpendistroSqlExplain(
  args: InferRequestType<typeof client._opendistro._sql._explain.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._sql._explain.$post(args, options))
}

export async function postOpendistroSqlClose(
  args: InferRequestType<typeof client._opendistro._sql.close.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._sql.close.$post(args, options))
}

export async function putOpendistroSqlSettings(
  args: InferRequestType<typeof client._opendistro._sql.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._sql.settings.$put(args, options))
}

export async function getOpendistroSqlStats(
  args: InferRequestType<typeof client._opendistro._sql.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._sql.stats.$get(args, options))
}

export async function postOpendistroSqlStats(
  args: InferRequestType<typeof client._opendistro._sql.stats.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._opendistro._sql.stats.$post(args, options))
}

export async function getClusterNodesHotthreads(
  args: InferRequestType<typeof client._cluster.nodes.hotthreads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.nodes.hotthreads.$get(args, options))
}

export async function getClusterNodesNodeIdHotthreads(
  args: InferRequestType<(typeof client._cluster.nodes)[':node_id']['hotthreads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._cluster.nodes[':node_id'].hotthreads.$get(args, options))
}

export async function getNodesNodeIdHotthreads(
  args: InferRequestType<(typeof client._nodes)[':node_id']['hotthreads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes[':node_id'].hotthreads.$get(args, options))
}

export async function getNodesHotthreads(
  args: InferRequestType<typeof client._nodes.hotthreads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._nodes.hotthreads.$get(args, options))
}
