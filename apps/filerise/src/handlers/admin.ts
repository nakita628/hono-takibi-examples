import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAdminAclGetGrantsPhpRoute,
  getApiAdminDiskUsageSummaryPhpRoute,
  getApiAdminGetConfigPhpRoute,
  getApiAdminOidcDebugInfoPhpRoute,
  getApiAdminReadMetadataPhpRoute,
  getApiAdminVirusLogPhpRoute,
  postApiAdminAclSaveGrantsPhpRoute,
  postApiAdminChangeUserPasswordPhpRoute,
  postApiAdminClamavTestPhpRoute,
  postApiAdminDiskUsageDeleteSnapshotPhpRoute,
  postApiAdminDiskUsageTriggerScanPhpRoute,
  postApiAdminDownloadProBundlePhpRoute,
  postApiAdminInstallProBundlePhpRoute,
  postApiAdminOidcTestPhpRoute,
  postApiAdminResumableCleanupPhpRoute,
  postApiAdminSetEncryptionKeyPhpRoute,
  postApiAdminSetLicensePhpRoute,
  putApiAdminUpdateConfigPhpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getApiAdminAclGetGrantsPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminAclSaveGrantsPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminChangeUserPasswordPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminClamavTestPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminDiskUsageDeleteSnapshotPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminDiskUsageSummaryPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminDiskUsageTriggerScanPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminDownloadProBundlePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminGetConfigPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminInstallProBundlePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminOidcDebugInfoPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminOidcTestPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminReadMetadataPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminResumableCleanupPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminSetEncryptionKeyPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminSetLicensePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminUpdateConfigPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminVirusLogPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
