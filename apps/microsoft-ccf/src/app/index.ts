import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppLogPrivateAllRoute,
  deleteAppLogPrivateRoute,
  deleteAppLogPublicAllRoute,
  deleteAppLogPublicRoute,
  getAppApiRoute,
  getAppCommitRoute,
  getAppCoseSignaturesConfigRoute,
  getAppCustomAuthRoute,
  getAppLogBlockingPrivateRoute,
  getAppLogPrivateBackupRoute,
  getAppLogPrivateCommittedRoute,
  getAppLogPrivateCountRoute,
  getAppLogPrivateHistoricalHandleRoute,
  getAppLogPrivateHistoricalReceiptRoute,
  getAppLogPrivateHistoricalRoute,
  getAppLogPrivateHistoricalSparseRoute,
  getAppLogPrivateRoute,
  getAppLogPublicBackupRoute,
  getAppLogPublicCoseEndorsementsRoute,
  getAppLogPublicCoseReceiptRoute,
  getAppLogPublicCoseSignatureRoute,
  getAppLogPublicCountRoute,
  getAppLogPublicHistoricalRangeRoute,
  getAppLogPublicHistoricalReceiptRoute,
  getAppLogPublicRoute,
  getAppLogPublicTrustedKeysRoute,
  getAppLogPublicVerifyCoseReceiptRoute,
  getAppLogRequestQueryRoute,
  getAppLogTransparentStatementRoute,
  getAppReceiptCoseRoute,
  getAppReceiptRoute,
  getAppTxRoute,
  postAppLogBlockingPrivateReceiptRoute,
  postAppLogBlockingPrivateRoute,
  postAppLogCoseSignedContentRoute,
  postAppLogPrivateAdminOnlyRoute,
  postAppLogPrivateAnonymousRoute,
  postAppLogPrivateAnonymousV2Route,
  postAppLogPrivateInstallCommittedIndexRoute,
  postAppLogPrivateOptionalCommitRoute,
  postAppLogPrivatePrefixCertRoute,
  postAppLogPrivateRawTextIdRoute,
  postAppLogPrivateRoute,
  postAppLogPrivateUninstallCommittedIndexRoute,
  postAppLogPublicRoute,
  postAppLogSignedStatementRoute,
  postAppMultiAuthRoute,
} from './routes'
import {
  deleteAppLogPrivateAllRouteHandler,
  deleteAppLogPrivateRouteHandler,
  deleteAppLogPublicAllRouteHandler,
  deleteAppLogPublicRouteHandler,
  getAppApiRouteHandler,
  getAppCommitRouteHandler,
  getAppCoseSignaturesConfigRouteHandler,
  getAppCustomAuthRouteHandler,
  getAppLogBlockingPrivateRouteHandler,
  getAppLogPrivateBackupRouteHandler,
  getAppLogPrivateCommittedRouteHandler,
  getAppLogPrivateCountRouteHandler,
  getAppLogPrivateHistoricalHandleRouteHandler,
  getAppLogPrivateHistoricalReceiptRouteHandler,
  getAppLogPrivateHistoricalRouteHandler,
  getAppLogPrivateHistoricalSparseRouteHandler,
  getAppLogPrivateRouteHandler,
  getAppLogPublicBackupRouteHandler,
  getAppLogPublicCoseEndorsementsRouteHandler,
  getAppLogPublicCoseReceiptRouteHandler,
  getAppLogPublicCoseSignatureRouteHandler,
  getAppLogPublicCountRouteHandler,
  getAppLogPublicHistoricalRangeRouteHandler,
  getAppLogPublicHistoricalReceiptRouteHandler,
  getAppLogPublicRouteHandler,
  getAppLogPublicTrustedKeysRouteHandler,
  getAppLogPublicVerifyCoseReceiptRouteHandler,
  getAppLogRequestQueryRouteHandler,
  getAppLogTransparentStatementRouteHandler,
  getAppReceiptCoseRouteHandler,
  getAppReceiptRouteHandler,
  getAppTxRouteHandler,
  postAppLogBlockingPrivateReceiptRouteHandler,
  postAppLogBlockingPrivateRouteHandler,
  postAppLogCoseSignedContentRouteHandler,
  postAppLogPrivateAdminOnlyRouteHandler,
  postAppLogPrivateAnonymousRouteHandler,
  postAppLogPrivateAnonymousV2RouteHandler,
  postAppLogPrivateInstallCommittedIndexRouteHandler,
  postAppLogPrivateOptionalCommitRouteHandler,
  postAppLogPrivatePrefixCertRouteHandler,
  postAppLogPrivateRawTextIdRouteHandler,
  postAppLogPrivateRouteHandler,
  postAppLogPrivateUninstallCommittedIndexRouteHandler,
  postAppLogPublicRouteHandler,
  postAppLogSignedStatementRouteHandler,
  postAppMultiAuthRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAppApiRoute, getAppApiRouteHandler)
  .openapi(getAppCommitRoute, getAppCommitRouteHandler)
  .openapi(getAppCoseSignaturesConfigRoute, getAppCoseSignaturesConfigRouteHandler)
  .openapi(getAppCustomAuthRoute, getAppCustomAuthRouteHandler)
  .openapi(getAppLogBlockingPrivateRoute, getAppLogBlockingPrivateRouteHandler)
  .openapi(postAppLogBlockingPrivateRoute, postAppLogBlockingPrivateRouteHandler)
  .openapi(postAppLogBlockingPrivateReceiptRoute, postAppLogBlockingPrivateReceiptRouteHandler)
  .openapi(postAppLogCoseSignedContentRoute, postAppLogCoseSignedContentRouteHandler)
  .openapi(deleteAppLogPrivateRoute, deleteAppLogPrivateRouteHandler)
  .openapi(getAppLogPrivateRoute, getAppLogPrivateRouteHandler)
  .openapi(postAppLogPrivateRoute, postAppLogPrivateRouteHandler)
  .openapi(postAppLogPrivateAdminOnlyRoute, postAppLogPrivateAdminOnlyRouteHandler)
  .openapi(deleteAppLogPrivateAllRoute, deleteAppLogPrivateAllRouteHandler)
  .openapi(postAppLogPrivateAnonymousRoute, postAppLogPrivateAnonymousRouteHandler)
  .openapi(postAppLogPrivateAnonymousV2Route, postAppLogPrivateAnonymousV2RouteHandler)
  .openapi(getAppLogPrivateBackupRoute, getAppLogPrivateBackupRouteHandler)
  .openapi(getAppLogPrivateCommittedRoute, getAppLogPrivateCommittedRouteHandler)
  .openapi(getAppLogPrivateCountRoute, getAppLogPrivateCountRouteHandler)
  .openapi(getAppLogPrivateHistoricalRoute, getAppLogPrivateHistoricalRouteHandler)
  .openapi(getAppLogPrivateHistoricalHandleRoute, getAppLogPrivateHistoricalHandleRouteHandler)
  .openapi(getAppLogPrivateHistoricalSparseRoute, getAppLogPrivateHistoricalSparseRouteHandler)
  .openapi(getAppLogPrivateHistoricalReceiptRoute, getAppLogPrivateHistoricalReceiptRouteHandler)
  .openapi(
    postAppLogPrivateInstallCommittedIndexRoute,
    postAppLogPrivateInstallCommittedIndexRouteHandler,
  )
  .openapi(postAppLogPrivateOptionalCommitRoute, postAppLogPrivateOptionalCommitRouteHandler)
  .openapi(postAppLogPrivatePrefixCertRoute, postAppLogPrivatePrefixCertRouteHandler)
  .openapi(postAppLogPrivateRawTextIdRoute, postAppLogPrivateRawTextIdRouteHandler)
  .openapi(
    postAppLogPrivateUninstallCommittedIndexRoute,
    postAppLogPrivateUninstallCommittedIndexRouteHandler,
  )
  .openapi(deleteAppLogPublicRoute, deleteAppLogPublicRouteHandler)
  .openapi(getAppLogPublicRoute, getAppLogPublicRouteHandler)
  .openapi(postAppLogPublicRoute, postAppLogPublicRouteHandler)
  .openapi(deleteAppLogPublicAllRoute, deleteAppLogPublicAllRouteHandler)
  .openapi(getAppLogPublicBackupRoute, getAppLogPublicBackupRouteHandler)
  .openapi(getAppLogPublicCoseEndorsementsRoute, getAppLogPublicCoseEndorsementsRouteHandler)
  .openapi(getAppLogPublicCoseReceiptRoute, getAppLogPublicCoseReceiptRouteHandler)
  .openapi(getAppLogPublicCoseSignatureRoute, getAppLogPublicCoseSignatureRouteHandler)
  .openapi(getAppLogPublicCountRoute, getAppLogPublicCountRouteHandler)
  .openapi(getAppLogPublicHistoricalRangeRoute, getAppLogPublicHistoricalRangeRouteHandler)
  .openapi(getAppLogPublicHistoricalReceiptRoute, getAppLogPublicHistoricalReceiptRouteHandler)
  .openapi(getAppLogPublicTrustedKeysRoute, getAppLogPublicTrustedKeysRouteHandler)
  .openapi(getAppLogPublicVerifyCoseReceiptRoute, getAppLogPublicVerifyCoseReceiptRouteHandler)
  .openapi(getAppLogRequestQueryRoute, getAppLogRequestQueryRouteHandler)
  .openapi(postAppLogSignedStatementRoute, postAppLogSignedStatementRouteHandler)
  .openapi(getAppLogTransparentStatementRoute, getAppLogTransparentStatementRouteHandler)
  .openapi(postAppMultiAuthRoute, postAppMultiAuthRouteHandler)
  .openapi(getAppReceiptRoute, getAppReceiptRouteHandler)
  .openapi(getAppReceiptCoseRoute, getAppReceiptCoseRouteHandler)
  .openapi(getAppTxRoute, getAppTxRouteHandler)

export default app
