import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCollectionsCollectionNameShards(
  args: InferRequestType<(typeof client.collections)[':collection_name']['shards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].shards.$get(args, options))
}

export async function putCollectionsCollectionNameShards(
  args: InferRequestType<(typeof client.collections)[':collection_name']['shards']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].shards.$put(args, options))
}

export async function postCollectionsCollectionNameShardsDelete(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].shards.delete.$post(args, options),
  )
}

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getTelemetry(
  args: InferRequestType<typeof client.telemetry.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.telemetry.$get(args, options))
}

export async function getMetrics(
  args: InferRequestType<typeof client.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metrics.$get(args, options))
}

export async function getHealthz(options?: ClientRequestOptions) {
  return await parseResponse(client.healthz.$get(undefined, options))
}

export async function getLivez(options?: ClientRequestOptions) {
  return await parseResponse(client.livez.$get(undefined, options))
}

export async function getReadyz(options?: ClientRequestOptions) {
  return await parseResponse(client.readyz.$get(undefined, options))
}

export async function getIssues(options?: ClientRequestOptions) {
  return await parseResponse(client.issues.$get(undefined, options))
}

export async function deleteIssues(options?: ClientRequestOptions) {
  return await parseResponse(client.issues.$delete(undefined, options))
}

export async function getCluster(options?: ClientRequestOptions) {
  return await parseResponse(client.cluster.$get(undefined, options))
}

export async function getClusterTelemetry(
  args: InferRequestType<typeof client.cluster.telemetry.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cluster.telemetry.$get(args, options))
}

export async function postClusterRecover(options?: ClientRequestOptions) {
  return await parseResponse(client.cluster.recover.$post(undefined, options))
}

export async function deleteClusterPeerPeerId(
  args: InferRequestType<(typeof client.cluster.peer)[':peer_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cluster.peer[':peer_id'].$delete(args, options))
}

export async function getQuotas(options?: ClientRequestOptions) {
  return await parseResponse(client.quotas.$get(undefined, options))
}

export async function putQuotas(
  args: InferRequestType<typeof client.quotas.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotas.$put(args, options))
}

export async function getCollections(options?: ClientRequestOptions) {
  return await parseResponse(client.collections.$get(undefined, options))
}

export async function getCollectionsCollectionName(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].$get(args, options))
}

export async function putCollectionsCollectionName(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].$put(args, options))
}

export async function deleteCollectionsCollectionName(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].$delete(args, options))
}

export async function patchCollectionsCollectionName(
  args: InferRequestType<(typeof client.collections)[':collection_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].$patch(args, options))
}

export async function postCollectionsAliases(
  args: InferRequestType<typeof client.collections.aliases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.aliases.$post(args, options))
}

export async function putCollectionsCollectionNameIndex(
  args: InferRequestType<(typeof client.collections)[':collection_name']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].index.$put(args, options))
}

export async function getCollectionsCollectionNameExists(
  args: InferRequestType<(typeof client.collections)[':collection_name']['exists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].exists.$get(args, options))
}

export async function deleteCollectionsCollectionNameIndexFieldName(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['index'][':field_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].index[':field_name'].$delete(args, options),
  )
}

export async function putCollectionsCollectionNameVectorsVectorName(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['vectors'][':vector_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].vectors[':vector_name'].$put(args, options),
  )
}

export async function deleteCollectionsCollectionNameVectorsVectorName(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['vectors'][':vector_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].vectors[':vector_name'].$delete(args, options),
  )
}

export async function getCollectionsCollectionNameCluster(
  args: InferRequestType<(typeof client.collections)[':collection_name']['cluster']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].cluster.$get(args, options))
}

export async function postCollectionsCollectionNameCluster(
  args: InferRequestType<(typeof client.collections)[':collection_name']['cluster']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].cluster.$post(args, options))
}

export async function getCollectionsCollectionNameOptimizations(
  args: InferRequestType<(typeof client.collections)[':collection_name']['optimizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].optimizations.$get(args, options),
  )
}

export async function getCollectionsCollectionNameAliases(
  args: InferRequestType<(typeof client.collections)[':collection_name']['aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].aliases.$get(args, options))
}

export async function getAliases(options?: ClientRequestOptions) {
  return await parseResponse(client.aliases.$get(undefined, options))
}

export async function postCollectionsCollectionNameSnapshotsUpload(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['snapshots']['upload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].snapshots.upload.$post(args, options),
  )
}

export async function putCollectionsCollectionNameSnapshotsRecover(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['snapshots']['recover']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].snapshots.recover.$put(args, options),
  )
}

export async function getCollectionsCollectionNameSnapshots(
  args: InferRequestType<(typeof client.collections)[':collection_name']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].snapshots.$get(args, options))
}

export async function postCollectionsCollectionNameSnapshots(
  args: InferRequestType<(typeof client.collections)[':collection_name']['snapshots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].snapshots.$post(args, options))
}

export async function getCollectionsCollectionNameSnapshotsSnapshotName(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].snapshots[':snapshot_name'].$get(args, options),
  )
}

export async function deleteCollectionsCollectionNameSnapshotsSnapshotName(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['snapshots'][':snapshot_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].snapshots[':snapshot_name'].$delete(args, options),
  )
}

export async function getSnapshots(options?: ClientRequestOptions) {
  return await parseResponse(client.snapshots.$get(undefined, options))
}

export async function postSnapshots(
  args: InferRequestType<typeof client.snapshots.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots.$post(args, options))
}

export async function getSnapshotsSnapshotName(
  args: InferRequestType<(typeof client.snapshots)[':snapshot_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots[':snapshot_name'].$get(args, options))
}

export async function deleteSnapshotsSnapshotName(
  args: InferRequestType<(typeof client.snapshots)[':snapshot_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snapshots[':snapshot_name'].$delete(args, options))
}

export async function getCollectionsCollectionNameShardsShardIdSnapshot(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshot']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].shards[':shard_id'].snapshot.$get(args, options),
  )
}

export async function postCollectionsCollectionNameShardsShardIdSnapshotsUpload(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['upload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].shards[':shard_id'].snapshots.upload.$post(
      args,
      options,
    ),
  )
}

export async function putCollectionsCollectionNameShardsShardIdSnapshotsRecover(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['recover']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].shards[':shard_id'].snapshots.recover.$put(
      args,
      options,
    ),
  )
}

export async function getCollectionsCollectionNameShardsShardIdSnapshots(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].shards[':shard_id'].snapshots.$get(args, options),
  )
}

export async function postCollectionsCollectionNameShardsShardIdSnapshots(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].shards[':shard_id'].snapshots.$post(args, options),
  )
}

export async function getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotName(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].shards[':shard_id'].snapshots[':snapshot_name'].$get(
      args,
      options,
    ),
  )
}

export async function deleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotName(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['shards'][':shard_id']['snapshots'][':snapshot_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].shards[':shard_id'].snapshots[':snapshot_name'].$delete(
      args,
      options,
    ),
  )
}

export async function getCollectionsCollectionNamePointsId(
  args: InferRequestType<(typeof client.collections)[':collection_name']['points'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].points[':id'].$get(args, options),
  )
}

export async function putCollectionsCollectionNamePoints(
  args: InferRequestType<(typeof client.collections)[':collection_name']['points']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].points.$put(args, options))
}

export async function postCollectionsCollectionNamePoints(
  args: InferRequestType<(typeof client.collections)[':collection_name']['points']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].points.$post(args, options))
}

export async function postCollectionsCollectionNamePointsDelete(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['points']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].points.delete.$post(args, options),
  )
}

export async function putCollectionsCollectionNamePointsVectors(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['points']['vectors']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].points.vectors.$put(args, options),
  )
}

export async function postCollectionsCollectionNamePointsVectorsDelete(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['points']['vectors']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].points.vectors.delete.$post(args, options),
  )
}

export async function putCollectionsCollectionNamePointsPayload(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['points']['payload']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].points.payload.$put(args, options),
  )
}

export async function postCollectionsCollectionNamePointsPayload(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['points']['payload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].points.payload.$post(args, options),
  )
}

export async function postCollectionsCollectionNamePointsPayloadDelete(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['points']['payload']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].points.payload.delete.$post(args, options),
  )
}

export async function postCollectionsCollectionNamePointsPayloadClear(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['points']['payload']['clear']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].points.payload.clear.$post(args, options),
  )
}

export async function postCollectionsCollectionNamePointsBatch(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['points']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].points.batch.$post(args, options),
  )
}

export async function postCollectionsCollectionNamePointsScroll(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['points']['scroll']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].points.scroll.$post(args, options),
  )
}

export async function postCollectionsCollectionNamePointsCount(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['points']['count']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].points.count.$post(args, options),
  )
}

export async function postCollectionsCollectionNameFacet(
  args: InferRequestType<(typeof client.collections)[':collection_name']['facet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_name'].facet.$post(args, options))
}

export async function postCollectionsCollectionNamePointsQuery(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['points']['query']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].points.query.$post(args, options),
  )
}

export async function postCollectionsCollectionNamePointsQueryBatch(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['points']['query']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].points.query.batch.$post(args, options),
  )
}

export async function postCollectionsCollectionNamePointsQueryGroups(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['points']['query']['groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].points.query.groups.$post(args, options),
  )
}

export async function postCollectionsCollectionNamePointsSearchMatrixPairs(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['points']['search']['matrix']['pairs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].points.search.matrix.pairs.$post(args, options),
  )
}

export async function postCollectionsCollectionNamePointsSearchMatrixOffsets(
  args: InferRequestType<
    (typeof client.collections)[':collection_name']['points']['search']['matrix']['offsets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_name'].points.search.matrix.offsets.$post(args, options),
  )
}
