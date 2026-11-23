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
} from './routes'
import {
  deleteNodeNetworkNodesNodeIdRouteHandler,
  getNodeApiRouteHandler,
  getNodeAttestationsRouteHandler,
  getNodeAttestationsSelfRouteHandler,
  getNodeBackupRouteHandler,
  getNodeCommitRouteHandler,
  getNodeConfigRouteHandler,
  getNodeConsensusRouteHandler,
  getNodeHistoricalCacheRouteHandler,
  getNodeIndexStrategiesRouteHandler,
  getNodeJsMetricsRouteHandler,
  getNodeJwtKeysRefreshMetricsRouteHandler,
  getNodeLedgerChunkChunkNameRouteHandler,
  getNodeLedgerChunkCommittedPrefixChunkNameRouteHandler,
  getNodeLedgerChunkRouteHandler,
  getNodeMetricsRouteHandler,
  getNodeNetworkNodesNodeIdRouteHandler,
  getNodeNetworkNodesPrimaryRouteHandler,
  getNodeNetworkNodesRouteHandler,
  getNodeNetworkNodesSelfRouteHandler,
  getNodeNetworkRemovableNodesRouteHandler,
  getNodeNetworkRouteHandler,
  getNodePrimaryRouteHandler,
  getNodeQuotesRouteHandler,
  getNodeQuotesSelfRouteHandler,
  getNodeReadyAppRouteHandler,
  getNodeReadyGovRouteHandler,
  getNodeReceiptCoseRouteHandler,
  getNodeReceiptRouteHandler,
  getNodeSelfSignedCertificateRouteHandler,
  getNodeServiceConfigurationRouteHandler,
  getNodeServicePreviousIdentityRouteHandler,
  getNodeSnapshotRouteHandler,
  getNodeSnapshotSnapshotNameRouteHandler,
  getNodeStateRouteHandler,
  getNodeTxRouteHandler,
  getNodeVersionRouteHandler,
  headNodeLedgerChunkChunkNameRouteHandler,
  headNodeLedgerChunkCommittedPrefixChunkNameRouteHandler,
  headNodeLedgerChunkRouteHandler,
  headNodePrimaryRouteHandler,
  headNodeSnapshotRouteHandler,
  headNodeSnapshotSnapshotNameRouteHandler,
  postNodeSnapshotCreateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getNodeApiRoute, getNodeApiRouteHandler)
  .openapi(getNodeAttestationsRoute, getNodeAttestationsRouteHandler)
  .openapi(getNodeAttestationsSelfRoute, getNodeAttestationsSelfRouteHandler)
  .openapi(getNodeBackupRoute, getNodeBackupRouteHandler)
  .openapi(getNodeCommitRoute, getNodeCommitRouteHandler)
  .openapi(getNodeConfigRoute, getNodeConfigRouteHandler)
  .openapi(getNodeConsensusRoute, getNodeConsensusRouteHandler)
  .openapi(getNodeHistoricalCacheRoute, getNodeHistoricalCacheRouteHandler)
  .openapi(getNodeIndexStrategiesRoute, getNodeIndexStrategiesRouteHandler)
  .openapi(getNodeJsMetricsRoute, getNodeJsMetricsRouteHandler)
  .openapi(getNodeJwtKeysRefreshMetricsRoute, getNodeJwtKeysRefreshMetricsRouteHandler)
  .openapi(getNodeLedgerChunkRoute, getNodeLedgerChunkRouteHandler)
  .openapi(headNodeLedgerChunkRoute, headNodeLedgerChunkRouteHandler)
  .openapi(
    getNodeLedgerChunkCommittedPrefixChunkNameRoute,
    getNodeLedgerChunkCommittedPrefixChunkNameRouteHandler,
  )
  .openapi(
    headNodeLedgerChunkCommittedPrefixChunkNameRoute,
    headNodeLedgerChunkCommittedPrefixChunkNameRouteHandler,
  )
  .openapi(getNodeLedgerChunkChunkNameRoute, getNodeLedgerChunkChunkNameRouteHandler)
  .openapi(headNodeLedgerChunkChunkNameRoute, headNodeLedgerChunkChunkNameRouteHandler)
  .openapi(getNodeMetricsRoute, getNodeMetricsRouteHandler)
  .openapi(getNodeNetworkRoute, getNodeNetworkRouteHandler)
  .openapi(getNodeNetworkNodesRoute, getNodeNetworkNodesRouteHandler)
  .openapi(getNodeNetworkNodesPrimaryRoute, getNodeNetworkNodesPrimaryRouteHandler)
  .openapi(getNodeNetworkNodesSelfRoute, getNodeNetworkNodesSelfRouteHandler)
  .openapi(deleteNodeNetworkNodesNodeIdRoute, deleteNodeNetworkNodesNodeIdRouteHandler)
  .openapi(getNodeNetworkNodesNodeIdRoute, getNodeNetworkNodesNodeIdRouteHandler)
  .openapi(getNodeNetworkRemovableNodesRoute, getNodeNetworkRemovableNodesRouteHandler)
  .openapi(getNodePrimaryRoute, getNodePrimaryRouteHandler)
  .openapi(headNodePrimaryRoute, headNodePrimaryRouteHandler)
  .openapi(getNodeQuotesRoute, getNodeQuotesRouteHandler)
  .openapi(getNodeQuotesSelfRoute, getNodeQuotesSelfRouteHandler)
  .openapi(getNodeReadyAppRoute, getNodeReadyAppRouteHandler)
  .openapi(getNodeReadyGovRoute, getNodeReadyGovRouteHandler)
  .openapi(getNodeReceiptRoute, getNodeReceiptRouteHandler)
  .openapi(getNodeReceiptCoseRoute, getNodeReceiptCoseRouteHandler)
  .openapi(getNodeSelfSignedCertificateRoute, getNodeSelfSignedCertificateRouteHandler)
  .openapi(getNodeServiceConfigurationRoute, getNodeServiceConfigurationRouteHandler)
  .openapi(getNodeServicePreviousIdentityRoute, getNodeServicePreviousIdentityRouteHandler)
  .openapi(getNodeSnapshotRoute, getNodeSnapshotRouteHandler)
  .openapi(headNodeSnapshotRoute, headNodeSnapshotRouteHandler)
  .openapi(getNodeSnapshotSnapshotNameRoute, getNodeSnapshotSnapshotNameRouteHandler)
  .openapi(headNodeSnapshotSnapshotNameRoute, headNodeSnapshotSnapshotNameRouteHandler)
  .openapi(postNodeSnapshotCreateRoute, postNodeSnapshotCreateRouteHandler)
  .openapi(getNodeStateRoute, getNodeStateRouteHandler)
  .openapi(getNodeTxRoute, getNodeTxRouteHandler)
  .openapi(getNodeVersionRoute, getNodeVersionRouteHandler)

export default app
