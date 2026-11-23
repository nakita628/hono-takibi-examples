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
} from '../routes'

const app = new OpenAPIHono()

export const appHandler = app
  .openapi(getAppApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppCoseSignaturesConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppCustomAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogBlockingPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppLogBlockingPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppLogBlockingPrivateReceiptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppLogCoseSignedContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppLogPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppLogPrivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppLogPrivateAdminOnlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppLogPrivateAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppLogPrivateAnonymousRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppLogPrivateAnonymousV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPrivateBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPrivateCommittedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPrivateCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPrivateHistoricalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPrivateHistoricalHandleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPrivateHistoricalSparseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPrivateHistoricalReceiptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppLogPrivateInstallCommittedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppLogPrivateOptionalCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppLogPrivatePrefixCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppLogPrivateRawTextIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppLogPrivateUninstallCommittedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppLogPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppLogPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppLogPublicAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPublicBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPublicCoseEndorsementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPublicCoseReceiptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPublicCoseSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPublicCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPublicHistoricalRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPublicHistoricalReceiptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPublicTrustedKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogPublicVerifyCoseReceiptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogRequestQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppLogSignedStatementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppLogTransparentStatementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppMultiAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppReceiptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppReceiptCoseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppTxRoute, (c) => {
    throw new Error('Not implemented')
  })
