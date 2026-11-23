import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNodeNetworkNodesNodeIdRoute,
  getNodeApiRoute,
  getNodeAttestationsRoute,
  getNodeAttestationsSelfRoute,
  getNodeBackupRoute,
  getNodeCommitRoute,
  getNodeConfigRoute,
  getNodeConsensusRoute,
  getNodeHistoricalCacheRoute,
  getNodeIndexStrategiesRoute,
  getNodeJsMetricsRoute,
  getNodeJwtKeysRefreshMetricsRoute,
  getNodeLedgerChunkChunkNameRoute,
  getNodeLedgerChunkCommittedPrefixChunkNameRoute,
  getNodeLedgerChunkRoute,
  getNodeMetricsRoute,
  getNodeNetworkNodesNodeIdRoute,
  getNodeNetworkNodesPrimaryRoute,
  getNodeNetworkNodesRoute,
  getNodeNetworkNodesSelfRoute,
  getNodeNetworkRemovableNodesRoute,
  getNodeNetworkRoute,
  getNodePrimaryRoute,
  getNodeQuotesRoute,
  getNodeQuotesSelfRoute,
  getNodeReadyAppRoute,
  getNodeReadyGovRoute,
  getNodeReceiptCoseRoute,
  getNodeReceiptRoute,
  getNodeSelfSignedCertificateRoute,
  getNodeServiceConfigurationRoute,
  getNodeServicePreviousIdentityRoute,
  getNodeSnapshotRoute,
  getNodeSnapshotSnapshotNameRoute,
  getNodeStateRoute,
  getNodeTxRoute,
  getNodeVersionRoute,
  headNodeLedgerChunkChunkNameRoute,
  headNodeLedgerChunkCommittedPrefixChunkNameRoute,
  headNodeLedgerChunkRoute,
  headNodePrimaryRoute,
  headNodeSnapshotRoute,
  headNodeSnapshotSnapshotNameRoute,
  postNodeSnapshotCreateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodeHandler = app
  .openapi(getNodeApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeAttestationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeAttestationsSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeConsensusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeHistoricalCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeIndexStrategiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeJsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeJwtKeysRefreshMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeLedgerChunkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headNodeLedgerChunkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeLedgerChunkCommittedPrefixChunkNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headNodeLedgerChunkCommittedPrefixChunkNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeLedgerChunkChunkNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headNodeLedgerChunkChunkNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeNetworkNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeNetworkNodesPrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeNetworkNodesSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNodeNetworkNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeNetworkNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeNetworkRemovableNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodePrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headNodePrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeQuotesSelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeReadyAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeReadyGovRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeReceiptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeReceiptCoseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeSelfSignedCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeServiceConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeServicePreviousIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headNodeSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeSnapshotSnapshotNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headNodeSnapshotSnapshotNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodeSnapshotCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeTxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodeVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
