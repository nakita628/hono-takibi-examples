import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getNodeApi(options?: ClientRequestOptions) {
  return await parseResponse(client.node.api.$get(undefined, options))
}

export async function getNodeAttestations(options?: ClientRequestOptions) {
  return await parseResponse(client.node.attestations.$get(undefined, options))
}

export async function getNodeAttestationsSelf(options?: ClientRequestOptions) {
  return await parseResponse(client.node.attestations.self.$get(undefined, options))
}

export async function getNodeBackup(options?: ClientRequestOptions) {
  return await parseResponse(client.node.backup.$get(undefined, options))
}

export async function getNodeCommit(
  args: InferRequestType<typeof client.node.commit.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node.commit.$get(args, options))
}

export async function getNodeConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.node.config.$get(undefined, options))
}

export async function getNodeConsensus(options?: ClientRequestOptions) {
  return await parseResponse(client.node.consensus.$get(undefined, options))
}

export async function getNodeHistoricalCache(options?: ClientRequestOptions) {
  return await parseResponse(client.node.historical_cache.$get(undefined, options))
}

export async function getNodeIndexStrategies(options?: ClientRequestOptions) {
  return await parseResponse(client.node.index.strategies.$get(undefined, options))
}

export async function getNodeJsMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.node.js_metrics.$get(undefined, options))
}

export async function getNodeJwtKeysRefreshMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.node.jwt_keys.refresh.metrics.$get(undefined, options))
}

export async function getNodeLedgerChunk(
  args: InferRequestType<typeof client.node.ledger_chunk.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node.ledger_chunk.$get(args, options))
}

export async function headNodeLedgerChunk(
  args: InferRequestType<typeof client.node.ledger_chunk.$head>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node.ledger_chunk.$head(args, options))
}

export async function getNodeLedgerChunkCommittedPrefixChunkName(
  args: InferRequestType<(typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.node.ledger_chunk.committed_prefix[':chunk_name'].$get(args, options),
  )
}

export async function headNodeLedgerChunkCommittedPrefixChunkName(
  args: InferRequestType<
    (typeof client.node.ledger_chunk.committed_prefix)[':chunk_name']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.node.ledger_chunk.committed_prefix[':chunk_name'].$head(args, options),
  )
}

export async function getNodeLedgerChunkChunkName(
  args: InferRequestType<(typeof client.node.ledger_chunk)[':chunk_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node.ledger_chunk[':chunk_name'].$get(args, options))
}

export async function headNodeLedgerChunkChunkName(
  args: InferRequestType<(typeof client.node.ledger_chunk)[':chunk_name']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node.ledger_chunk[':chunk_name'].$head(args, options))
}

export async function getNodeMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.node.metrics.$get(undefined, options))
}

export async function getNodeNetwork(options?: ClientRequestOptions) {
  return await parseResponse(client.node.network.$get(undefined, options))
}

export async function getNodeNetworkNodes(
  args: InferRequestType<typeof client.node.network.nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node.network.nodes.$get(args, options))
}

export async function getNodeNetworkNodesPrimary(options?: ClientRequestOptions) {
  return await parseResponse(client.node.network.nodes.primary.$get(undefined, options))
}

export async function getNodeNetworkNodesSelf(options?: ClientRequestOptions) {
  return await parseResponse(client.node.network.nodes.self.$get(undefined, options))
}

export async function getNodeNetworkNodesNodeId(
  args: InferRequestType<(typeof client.node.network.nodes)[':node_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node.network.nodes[':node_id'].$get(args, options))
}

export async function deleteNodeNetworkNodesNodeId(
  args: InferRequestType<(typeof client.node.network.nodes)[':node_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node.network.nodes[':node_id'].$delete(args, options))
}

export async function getNodeNetworkRemovableNodes(options?: ClientRequestOptions) {
  return await parseResponse(client.node.network.removable_nodes.$get(undefined, options))
}

export async function getNodePrimary(options?: ClientRequestOptions) {
  return await parseResponse(client.node.primary.$get(undefined, options))
}

export async function headNodePrimary(options?: ClientRequestOptions) {
  return await parseResponse(client.node.primary.$head(undefined, options))
}

export async function getNodeQuotes(options?: ClientRequestOptions) {
  return await parseResponse(client.node.quotes.$get(undefined, options))
}

export async function getNodeQuotesSelf(options?: ClientRequestOptions) {
  return await parseResponse(client.node.quotes.self.$get(undefined, options))
}

export async function getNodeReadyApp(options?: ClientRequestOptions) {
  return await parseResponse(client.node.ready.app.$get(undefined, options))
}

export async function getNodeReadyGov(options?: ClientRequestOptions) {
  return await parseResponse(client.node.ready.gov.$get(undefined, options))
}

export async function getNodeReceipt(
  args: InferRequestType<typeof client.node.receipt.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node.receipt.$get(args, options))
}

export async function getNodeReceiptCose(
  args: InferRequestType<typeof client.node.receipt.cose.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node.receipt.cose.$get(args, options))
}

export async function getNodeSelfSignedCertificate(options?: ClientRequestOptions) {
  return await parseResponse(client.node.self_signed_certificate.$get(undefined, options))
}

export async function getNodeServiceConfiguration(options?: ClientRequestOptions) {
  return await parseResponse(client.node.service.configuration.$get(undefined, options))
}

export async function getNodeServicePreviousIdentity(options?: ClientRequestOptions) {
  return await parseResponse(client.node.service.previous_identity.$get(undefined, options))
}

export async function getNodeSnapshot(
  args: InferRequestType<typeof client.node.snapshot.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node.snapshot.$get(args, options))
}

export async function headNodeSnapshot(
  args: InferRequestType<typeof client.node.snapshot.$head>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node.snapshot.$head(args, options))
}

export async function getNodeSnapshotSnapshotName(
  args: InferRequestType<(typeof client.node.snapshot)[':snapshot_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node.snapshot[':snapshot_name'].$get(args, options))
}

export async function headNodeSnapshotSnapshotName(
  args: InferRequestType<(typeof client.node.snapshot)[':snapshot_name']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node.snapshot[':snapshot_name'].$head(args, options))
}

export async function postNodeSnapshotCreate(options?: ClientRequestOptions) {
  return await parseResponse(client.node['snapshot:create'].$post(undefined, options))
}

export async function getNodeState(options?: ClientRequestOptions) {
  return await parseResponse(client.node.state.$get(undefined, options))
}

export async function getNodeTx(
  args: InferRequestType<typeof client.node.tx.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.node.tx.$get(args, options))
}

export async function getNodeVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.node.version.$get(undefined, options))
}
