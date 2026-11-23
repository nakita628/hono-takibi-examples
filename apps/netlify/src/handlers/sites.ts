import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdAssetsAssetIdRoute,
  deleteSitesSiteIdBuildHooksIdRoute,
  deleteSitesSiteIdDatabaseBranchBranchIdRoute,
  deleteSitesSiteIdDatabaseComputeSettingsRoute,
  deleteSitesSiteIdDatabaseRoute,
  deleteSitesSiteIdDatabaseSnapshotSnapshotIdRoute,
  deleteSitesSiteIdDeploysDeployIdRoute,
  deleteSitesSiteIdDevServerHooksIdRoute,
  deleteSitesSiteIdDevServersRoute,
  deleteSitesSiteIdFormsFormIdRoute,
  deleteSitesSiteIdRoute,
  deleteSitesSiteIdServicesAddonInstancesInstanceIdRoute,
  deleteSitesSiteIdSnippetsSnippetIdRoute,
  getSitesRoute,
  getSitesSiteIdAiGatewayTokenRoute,
  getSitesSiteIdAssetsAssetIdPublicSignatureRoute,
  getSitesSiteIdAssetsAssetIdRoute,
  getSitesSiteIdAssetsRoute,
  getSitesSiteIdBuildHooksIdRoute,
  getSitesSiteIdBuildHooksRoute,
  getSitesSiteIdBuildsRoute,
  getSitesSiteIdDatabaseBranchBranchIdRoute,
  getSitesSiteIdDatabaseBranchesRoute,
  getSitesSiteIdDatabaseComputeSettingsRoute,
  getSitesSiteIdDatabaseMigrationsNameRoute,
  getSitesSiteIdDatabaseMigrationsRoute,
  getSitesSiteIdDatabaseRoute,
  getSitesSiteIdDatabaseSnapshotsRoute,
  getSitesSiteIdDeployedBranchesRoute,
  getSitesSiteIdDeploysDeployIdRoute,
  getSitesSiteIdDeploysRoute,
  getSitesSiteIdDevServerHooksIdRoute,
  getSitesSiteIdDevServerHooksRoute,
  getSitesSiteIdDevServersDevServerIdRoute,
  getSitesSiteIdDevServersRoute,
  getSitesSiteIdDnsRoute,
  getSitesSiteIdFilesFilePathRoute,
  getSitesSiteIdFilesRoute,
  getSitesSiteIdFormsRoute,
  getSitesSiteIdFunctionsRoute,
  getSitesSiteIdIdentityIdentityIdUsersUserIdRoute,
  getSitesSiteIdMetadataRoute,
  getSitesSiteIdRoute,
  getSitesSiteIdServiceInstancesRoute,
  getSitesSiteIdServicesAddonInstancesInstanceIdRoute,
  getSitesSiteIdSnippetsRoute,
  getSitesSiteIdSnippetsSnippetIdRoute,
  getSitesSiteIdSslCertificatesRoute,
  getSitesSiteIdSslRoute,
  getSitesSiteIdSubmissionsRoute,
  getSitesSiteIdTrafficSplitsRoute,
  getSitesSiteIdTrafficSplitsSplitTestIdRoute,
  patchSitesSiteIdRoute,
  postSitesRoute,
  postSitesSiteIdAgentRunnersRoute,
  postSitesSiteIdAssetsRoute,
  postSitesSiteIdBuildHooksRoute,
  postSitesSiteIdBuildsRoute,
  postSitesSiteIdDatabaseBranchBranchIdResetRoute,
  postSitesSiteIdDatabaseBranchRoute,
  postSitesSiteIdDatabaseMigrationsDeployIdRoute,
  postSitesSiteIdDatabaseRoute,
  postSitesSiteIdDatabaseSnapshotRoute,
  postSitesSiteIdDatabaseSnapshotSnapshotIdRestoreRoute,
  postSitesSiteIdDeploysDeployIdRestoreRoute,
  postSitesSiteIdDeploysRoute,
  postSitesSiteIdDevServerHooksRoute,
  postSitesSiteIdDevServersDevServerIdStateRoute,
  postSitesSiteIdDevServersRoute,
  postSitesSiteIdIdentityIdentityIdUsersLookupRoute,
  postSitesSiteIdServicesAddonInstancesRoute,
  postSitesSiteIdSnippetsRoute,
  postSitesSiteIdSslRoute,
  postSitesSiteIdTrafficSplitsRoute,
  postSitesSiteIdTrafficSplitsSplitTestIdPublishRoute,
  postSitesSiteIdTrafficSplitsSplitTestIdUnpublishRoute,
  putSitesSiteIdAssetsAssetIdRoute,
  putSitesSiteIdBuildHooksIdRoute,
  putSitesSiteIdDatabaseBranchBranchIdComputeSettingsRoute,
  putSitesSiteIdDatabaseComputeSettingsRoute,
  putSitesSiteIdDeploysDeployIdRoute,
  putSitesSiteIdDevServerHooksIdRoute,
  putSitesSiteIdDisableRoute,
  putSitesSiteIdDnsRoute,
  putSitesSiteIdEnableRoute,
  putSitesSiteIdMetadataRoute,
  putSitesSiteIdRollbackRoute,
  putSitesSiteIdServicesAddonInstancesInstanceIdRoute,
  putSitesSiteIdSnippetsSnippetIdRoute,
  putSitesSiteIdTrafficSplitsSplitTestIdRoute,
  putSitesSiteIdUnlinkRepoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesHandler = app
  .openapi(getSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdSslCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdFormsFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdSubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdAssetsAssetIdPublicSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdFilesFilePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdSnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdSnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdSnippetsSnippetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdSnippetsSnippetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdSnippetsSnippetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdBuildHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdBuildHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdBuildHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdBuildHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdBuildHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDeploysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDeploysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDeploysDeployIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdDeploysDeployIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdDeploysDeployIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDeploysDeployIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDeployedBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdUnlinkRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdAgentRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdServiceInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdServicesAddonInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdServicesAddonInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdServicesAddonInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdServicesAddonInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdIdentityIdentityIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdIdentityIdentityIdUsersLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdTrafficSplitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTrafficSplitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdTrafficSplitsSplitTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdTrafficSplitsSplitTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdTrafficSplitsSplitTestIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdTrafficSplitsSplitTestIdUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDevServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDevServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdDevServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDevServersDevServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDevServersDevServerIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDevServerHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDevServerHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDevServerHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdDevServerHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdDevServerHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdAiGatewayTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDatabaseBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDatabaseBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDatabaseBranchBranchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdDatabaseBranchBranchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDatabaseBranchBranchIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdDatabaseBranchBranchIdComputeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdDatabaseComputeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDatabaseComputeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdDatabaseComputeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDatabaseMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDatabaseMigrationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDatabaseMigrationsDeployIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDatabaseSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDatabaseSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdDatabaseSnapshotSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDatabaseSnapshotSnapshotIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
