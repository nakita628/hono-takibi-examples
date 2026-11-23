import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSandboxSandboxIdOrNameRoute,
  deleteSandboxSandboxIdOrNameSshAccessRoute,
  getSandboxForRunnerRoute,
  getSandboxPaginatedRoute,
  getSandboxRoute,
  getSandboxSandboxIdOrganizationRoute,
  getSandboxSandboxIdOrNameAncestorsRoute,
  getSandboxSandboxIdOrNameBuildLogsRoute,
  getSandboxSandboxIdOrNameBuildLogsUrlRoute,
  getSandboxSandboxIdOrNameForksRoute,
  getSandboxSandboxIdOrNameParentRoute,
  getSandboxSandboxIdOrNamePortsPortPreviewUrlRoute,
  getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlRoute,
  getSandboxSandboxIdOrNameRoute,
  getSandboxSandboxIdRegionQuotaRoute,
  getSandboxSandboxIdTelemetryLogsRoute,
  getSandboxSandboxIdTelemetryMetricsRoute,
  getSandboxSandboxIdTelemetryTracesRoute,
  getSandboxSandboxIdTelemetryTracesTraceIdRoute,
  getSandboxSandboxIdToolboxProxyUrlRoute,
  getSandboxSshAccessValidateRoute,
  postSandboxRoute,
  postSandboxSandboxIdLastActivityRoute,
  postSandboxSandboxIdOrNameArchiveRoute,
  postSandboxSandboxIdOrNameAutoarchiveIntervalRoute,
  postSandboxSandboxIdOrNameAutodeleteIntervalRoute,
  postSandboxSandboxIdOrNameAutostopIntervalRoute,
  postSandboxSandboxIdOrNameBackupRoute,
  postSandboxSandboxIdOrNameForkRoute,
  postSandboxSandboxIdOrNameNetworkSettingsRoute,
  postSandboxSandboxIdOrNamePauseRoute,
  postSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpireRoute,
  postSandboxSandboxIdOrNamePublicIsPublicRoute,
  postSandboxSandboxIdOrNameRecoverRoute,
  postSandboxSandboxIdOrNameResizeRoute,
  postSandboxSandboxIdOrNameSnapshotRoute,
  postSandboxSandboxIdOrNameSshAccessRoute,
  postSandboxSandboxIdOrNameStartRoute,
  postSandboxSandboxIdOrNameStopRoute,
  putSandboxSandboxIdOrNameLabelsRoute,
  putSandboxSandboxIdStateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sandboxHandler = app
  .openapi(getSandboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxPaginatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxForRunnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSandboxSandboxIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxSandboxIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxSandboxIdOrNameRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxSandboxIdOrNameStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxSandboxIdOrNameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxSandboxIdOrNamePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxSandboxIdOrNameResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSandboxSandboxIdOrNameLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSandboxSandboxIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxSandboxIdOrNameBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxSandboxIdOrNameSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxSandboxIdOrNameForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxSandboxIdOrNameForksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxSandboxIdOrNameParentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxSandboxIdOrNameAncestorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxSandboxIdOrNamePublicIsPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxSandboxIdLastActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxSandboxIdOrNameAutostopIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxSandboxIdOrNameAutoarchiveIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxSandboxIdOrNameAutodeleteIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxSandboxIdOrNameNetworkSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxSandboxIdOrNameArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxSandboxIdOrNamePortsPortPreviewUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxSandboxIdOrNamePortsPortSignedPreviewUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxSandboxIdOrNamePortsPortSignedPreviewUrlTokenExpireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxSandboxIdOrNameBuildLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxSandboxIdOrNameBuildLogsUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSandboxSandboxIdOrNameSshAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxSandboxIdOrNameSshAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxSshAccessValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxSandboxIdToolboxProxyUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxSandboxIdOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxSandboxIdRegionQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxSandboxIdTelemetryLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxSandboxIdTelemetryTracesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxSandboxIdTelemetryTracesTraceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxSandboxIdTelemetryMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
