import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountCredentialsCredentialIdRoute,
  deleteAccountGroupsGroupIdRoute,
  deleteAccountKeysKeyIdRoute,
  deleteAccountOrgsOrgIdExportTokenRoute,
  deleteAccountOrgsOrgIdRoute,
  deleteAccountSsoGroupsGroupMappingIdRoute,
  deleteAccountTasksTemplatesScanTemplateIdRoute,
  deleteAccountUsersUserIdRoute,
  deleteOrgAgentsAgentIdRoute,
  deleteOrgAssetsAssetIdRoute,
  deleteOrgKeyRoute,
  deleteOrgServicesServiceIdRoute,
  deleteOrgSitesSiteIdRoute,
  deleteOrgWirelessWirelessIdRoute,
  getAccountAgentsRoute,
  getAccountCredentialsCredentialIdRoute,
  getAccountCredentialsRoute,
  getAccountEventsJsonlRoute,
  getAccountEventsJsonRoute,
  getAccountGroupsGroupIdRoute,
  getAccountGroupsRoute,
  getAccountKeysKeyIdRoute,
  getAccountKeysRoute,
  getAccountLicenseRoute,
  getAccountOrgsOrgIdRoute,
  getAccountOrgsRoute,
  getAccountSitesRoute,
  getAccountSsoGroupsGroupMappingIdRoute,
  getAccountSsoGroupsRoute,
  getAccountTasksRoute,
  getAccountTasksTemplatesRoute,
  getAccountTasksTemplatesScanTemplateIdRoute,
  getAccountUsersRoute,
  getAccountUsersUserIdRoute,
  getExportOrgAssetsCiscoCsvRoute,
  getExportOrgAssetsCsvRoute,
  getExportOrgAssetsJsonlRoute,
  getExportOrgAssetsJsonRoute,
  getExportOrgAssetsNmapXmlRoute,
  getExportOrgAssetsServicenowCsvRoute,
  getExportOrgAssetsServicenowJsonRoute,
  getExportOrgAssetsSyncCreatedAssetsJsonRoute,
  getExportOrgAssetsSyncUpdatedAssetsJsonRoute,
  getExportOrgServicesCsvRoute,
  getExportOrgServicesJsonlRoute,
  getExportOrgServicesJsonRoute,
  getExportOrgServicesServicenowCsvRoute,
  getExportOrgSitesCsvRoute,
  getExportOrgSitesJsonlRoute,
  getExportOrgSitesJsonRoute,
  getExportOrgWirelessCsvRoute,
  getExportOrgWirelessJsonlRoute,
  getExportOrgWirelessJsonRoute,
  getOrgAgentsAgentIdRoute,
  getOrgAgentsRoute,
  getOrgAssetsAssetIdRoute,
  getOrgAssetsRoute,
  getOrgAssetsTopHwCsvRoute,
  getOrgAssetsTopOsCsvRoute,
  getOrgAssetsTopTagsCsvRoute,
  getOrgAssetsTopTypesCsvRoute,
  getOrgKeyRoute,
  getOrgRoute,
  getOrgServicesRoute,
  getOrgServicesServiceIdRoute,
  getOrgServicesSubnetStatsCsvRoute,
  getOrgServicesTopProductsCsvRoute,
  getOrgServicesTopProtocolsCsvRoute,
  getOrgServicesTopTcpCsvRoute,
  getOrgServicesTopUdpCsvRoute,
  getOrgSitesRoute,
  getOrgSitesSiteIdRoute,
  getOrgTasksRoute,
  getOrgTasksTaskIdChangesRoute,
  getOrgTasksTaskIdDataRoute,
  getOrgTasksTaskIdLogRoute,
  getOrgTasksTaskIdRoute,
  getOrgWirelessRoute,
  getOrgWirelessWirelessIdRoute,
  getReleasesAgentVersionRoute,
  getReleasesPlatformVersionRoute,
  getReleasesScannerVersionRoute,
  patchAccountKeysKeyIdRotateRoute,
  patchAccountOrgsOrgIdExportTokenRotateRoute,
  patchAccountOrgsOrgIdRoute,
  patchAccountUsersUserIdResetLockoutRoute,
  patchAccountUsersUserIdResetMFARoute,
  patchAccountUsersUserIdResetPasswordRoute,
  patchAccountUsersUserIdRoute,
  patchOrgAgentsAgentIdRoute,
  patchOrgAssetsAssetIdCommentsRoute,
  patchOrgAssetsAssetIdTagsRoute,
  patchOrgAssetsBulkTagsRoute,
  patchOrgKeyRotateRoute,
  patchOrgRoute,
  patchOrgSitesSiteIdRoute,
  patchOrgTasksTaskIdRoute,
  postAccountGroupsRoute,
  postAccountSsoGroupsRoute,
  postAccountTasksTemplatesRoute,
  postOrgAgentsAgentIdUpdateRoute,
  postOrgAssetsBulkClearTagsRoute,
  postOrgTasksTaskIdHideRoute,
  postOrgTasksTaskIdStopRoute,
  putAccountCredentialsRoute,
  putAccountGroupsRoute,
  putAccountKeysRoute,
  putAccountOrgsRoute,
  putAccountSsoGroupsRoute,
  putAccountTasksTemplatesRoute,
  putAccountUsersInviteRoute,
  putAccountUsersRoute,
  putOrgSitesRoute,
  putOrgSitesSiteIdImportNessusRoute,
  putOrgSitesSiteIdImportRoute,
  putOrgSitesSiteIdScanRoute,
} from './routes'
import {
  deleteAccountCredentialsCredentialIdRouteHandler,
  deleteAccountGroupsGroupIdRouteHandler,
  deleteAccountKeysKeyIdRouteHandler,
  deleteAccountOrgsOrgIdExportTokenRouteHandler,
  deleteAccountOrgsOrgIdRouteHandler,
  deleteAccountSsoGroupsGroupMappingIdRouteHandler,
  deleteAccountTasksTemplatesScanTemplateIdRouteHandler,
  deleteAccountUsersUserIdRouteHandler,
  deleteOrgAgentsAgentIdRouteHandler,
  deleteOrgAssetsAssetIdRouteHandler,
  deleteOrgKeyRouteHandler,
  deleteOrgServicesServiceIdRouteHandler,
  deleteOrgSitesSiteIdRouteHandler,
  deleteOrgWirelessWirelessIdRouteHandler,
  getAccountAgentsRouteHandler,
  getAccountCredentialsCredentialIdRouteHandler,
  getAccountCredentialsRouteHandler,
  getAccountEventsJsonlRouteHandler,
  getAccountEventsJsonRouteHandler,
  getAccountGroupsGroupIdRouteHandler,
  getAccountGroupsRouteHandler,
  getAccountKeysKeyIdRouteHandler,
  getAccountKeysRouteHandler,
  getAccountLicenseRouteHandler,
  getAccountOrgsOrgIdRouteHandler,
  getAccountOrgsRouteHandler,
  getAccountSitesRouteHandler,
  getAccountSsoGroupsGroupMappingIdRouteHandler,
  getAccountSsoGroupsRouteHandler,
  getAccountTasksRouteHandler,
  getAccountTasksTemplatesRouteHandler,
  getAccountTasksTemplatesScanTemplateIdRouteHandler,
  getAccountUsersRouteHandler,
  getAccountUsersUserIdRouteHandler,
  getExportOrgAssetsCiscoCsvRouteHandler,
  getExportOrgAssetsCsvRouteHandler,
  getExportOrgAssetsJsonlRouteHandler,
  getExportOrgAssetsJsonRouteHandler,
  getExportOrgAssetsNmapXmlRouteHandler,
  getExportOrgAssetsServicenowCsvRouteHandler,
  getExportOrgAssetsServicenowJsonRouteHandler,
  getExportOrgAssetsSyncCreatedAssetsJsonRouteHandler,
  getExportOrgAssetsSyncUpdatedAssetsJsonRouteHandler,
  getExportOrgServicesCsvRouteHandler,
  getExportOrgServicesJsonlRouteHandler,
  getExportOrgServicesJsonRouteHandler,
  getExportOrgServicesServicenowCsvRouteHandler,
  getExportOrgSitesCsvRouteHandler,
  getExportOrgSitesJsonlRouteHandler,
  getExportOrgSitesJsonRouteHandler,
  getExportOrgWirelessCsvRouteHandler,
  getExportOrgWirelessJsonlRouteHandler,
  getExportOrgWirelessJsonRouteHandler,
  getOrgAgentsAgentIdRouteHandler,
  getOrgAgentsRouteHandler,
  getOrgAssetsAssetIdRouteHandler,
  getOrgAssetsRouteHandler,
  getOrgAssetsTopHwCsvRouteHandler,
  getOrgAssetsTopOsCsvRouteHandler,
  getOrgAssetsTopTagsCsvRouteHandler,
  getOrgAssetsTopTypesCsvRouteHandler,
  getOrgKeyRouteHandler,
  getOrgRouteHandler,
  getOrgServicesRouteHandler,
  getOrgServicesServiceIdRouteHandler,
  getOrgServicesSubnetStatsCsvRouteHandler,
  getOrgServicesTopProductsCsvRouteHandler,
  getOrgServicesTopProtocolsCsvRouteHandler,
  getOrgServicesTopTcpCsvRouteHandler,
  getOrgServicesTopUdpCsvRouteHandler,
  getOrgSitesRouteHandler,
  getOrgSitesSiteIdRouteHandler,
  getOrgTasksRouteHandler,
  getOrgTasksTaskIdChangesRouteHandler,
  getOrgTasksTaskIdDataRouteHandler,
  getOrgTasksTaskIdLogRouteHandler,
  getOrgTasksTaskIdRouteHandler,
  getOrgWirelessRouteHandler,
  getOrgWirelessWirelessIdRouteHandler,
  getReleasesAgentVersionRouteHandler,
  getReleasesPlatformVersionRouteHandler,
  getReleasesScannerVersionRouteHandler,
  patchAccountKeysKeyIdRotateRouteHandler,
  patchAccountOrgsOrgIdExportTokenRotateRouteHandler,
  patchAccountOrgsOrgIdRouteHandler,
  patchAccountUsersUserIdResetLockoutRouteHandler,
  patchAccountUsersUserIdResetMFARouteHandler,
  patchAccountUsersUserIdResetPasswordRouteHandler,
  patchAccountUsersUserIdRouteHandler,
  patchOrgAgentsAgentIdRouteHandler,
  patchOrgAssetsAssetIdCommentsRouteHandler,
  patchOrgAssetsAssetIdTagsRouteHandler,
  patchOrgAssetsBulkTagsRouteHandler,
  patchOrgKeyRotateRouteHandler,
  patchOrgRouteHandler,
  patchOrgSitesSiteIdRouteHandler,
  patchOrgTasksTaskIdRouteHandler,
  postAccountGroupsRouteHandler,
  postAccountSsoGroupsRouteHandler,
  postAccountTasksTemplatesRouteHandler,
  postOrgAgentsAgentIdUpdateRouteHandler,
  postOrgAssetsBulkClearTagsRouteHandler,
  postOrgTasksTaskIdHideRouteHandler,
  postOrgTasksTaskIdStopRouteHandler,
  putAccountCredentialsRouteHandler,
  putAccountGroupsRouteHandler,
  putAccountKeysRouteHandler,
  putAccountOrgsRouteHandler,
  putAccountSsoGroupsRouteHandler,
  putAccountTasksTemplatesRouteHandler,
  putAccountUsersInviteRouteHandler,
  putAccountUsersRouteHandler,
  putOrgSitesRouteHandler,
  putOrgSitesSiteIdImportNessusRouteHandler,
  putOrgSitesSiteIdImportRouteHandler,
  putOrgSitesSiteIdScanRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountAgentsRoute, getAccountAgentsRouteHandler)
  .openapi(getAccountCredentialsRoute, getAccountCredentialsRouteHandler)
  .openapi(putAccountCredentialsRoute, putAccountCredentialsRouteHandler)
  .openapi(
    deleteAccountCredentialsCredentialIdRoute,
    deleteAccountCredentialsCredentialIdRouteHandler,
  )
  .openapi(getAccountCredentialsCredentialIdRoute, getAccountCredentialsCredentialIdRouteHandler)
  .openapi(getAccountEventsJsonRoute, getAccountEventsJsonRouteHandler)
  .openapi(getAccountEventsJsonlRoute, getAccountEventsJsonlRouteHandler)
  .openapi(getAccountGroupsRoute, getAccountGroupsRouteHandler)
  .openapi(postAccountGroupsRoute, postAccountGroupsRouteHandler)
  .openapi(putAccountGroupsRoute, putAccountGroupsRouteHandler)
  .openapi(deleteAccountGroupsGroupIdRoute, deleteAccountGroupsGroupIdRouteHandler)
  .openapi(getAccountGroupsGroupIdRoute, getAccountGroupsGroupIdRouteHandler)
  .openapi(getAccountKeysRoute, getAccountKeysRouteHandler)
  .openapi(putAccountKeysRoute, putAccountKeysRouteHandler)
  .openapi(deleteAccountKeysKeyIdRoute, deleteAccountKeysKeyIdRouteHandler)
  .openapi(getAccountKeysKeyIdRoute, getAccountKeysKeyIdRouteHandler)
  .openapi(patchAccountKeysKeyIdRotateRoute, patchAccountKeysKeyIdRotateRouteHandler)
  .openapi(getAccountLicenseRoute, getAccountLicenseRouteHandler)
  .openapi(getAccountOrgsRoute, getAccountOrgsRouteHandler)
  .openapi(putAccountOrgsRoute, putAccountOrgsRouteHandler)
  .openapi(deleteAccountOrgsOrgIdRoute, deleteAccountOrgsOrgIdRouteHandler)
  .openapi(getAccountOrgsOrgIdRoute, getAccountOrgsOrgIdRouteHandler)
  .openapi(patchAccountOrgsOrgIdRoute, patchAccountOrgsOrgIdRouteHandler)
  .openapi(deleteAccountOrgsOrgIdExportTokenRoute, deleteAccountOrgsOrgIdExportTokenRouteHandler)
  .openapi(
    patchAccountOrgsOrgIdExportTokenRotateRoute,
    patchAccountOrgsOrgIdExportTokenRotateRouteHandler,
  )
  .openapi(getAccountSitesRoute, getAccountSitesRouteHandler)
  .openapi(getAccountSsoGroupsRoute, getAccountSsoGroupsRouteHandler)
  .openapi(postAccountSsoGroupsRoute, postAccountSsoGroupsRouteHandler)
  .openapi(putAccountSsoGroupsRoute, putAccountSsoGroupsRouteHandler)
  .openapi(
    deleteAccountSsoGroupsGroupMappingIdRoute,
    deleteAccountSsoGroupsGroupMappingIdRouteHandler,
  )
  .openapi(getAccountSsoGroupsGroupMappingIdRoute, getAccountSsoGroupsGroupMappingIdRouteHandler)
  .openapi(getAccountTasksRoute, getAccountTasksRouteHandler)
  .openapi(getAccountTasksTemplatesRoute, getAccountTasksTemplatesRouteHandler)
  .openapi(postAccountTasksTemplatesRoute, postAccountTasksTemplatesRouteHandler)
  .openapi(putAccountTasksTemplatesRoute, putAccountTasksTemplatesRouteHandler)
  .openapi(
    deleteAccountTasksTemplatesScanTemplateIdRoute,
    deleteAccountTasksTemplatesScanTemplateIdRouteHandler,
  )
  .openapi(
    getAccountTasksTemplatesScanTemplateIdRoute,
    getAccountTasksTemplatesScanTemplateIdRouteHandler,
  )
  .openapi(getAccountUsersRoute, getAccountUsersRouteHandler)
  .openapi(putAccountUsersRoute, putAccountUsersRouteHandler)
  .openapi(putAccountUsersInviteRoute, putAccountUsersInviteRouteHandler)
  .openapi(deleteAccountUsersUserIdRoute, deleteAccountUsersUserIdRouteHandler)
  .openapi(getAccountUsersUserIdRoute, getAccountUsersUserIdRouteHandler)
  .openapi(patchAccountUsersUserIdRoute, patchAccountUsersUserIdRouteHandler)
  .openapi(
    patchAccountUsersUserIdResetLockoutRoute,
    patchAccountUsersUserIdResetLockoutRouteHandler,
  )
  .openapi(patchAccountUsersUserIdResetMFARoute, patchAccountUsersUserIdResetMFARouteHandler)
  .openapi(
    patchAccountUsersUserIdResetPasswordRoute,
    patchAccountUsersUserIdResetPasswordRouteHandler,
  )
  .openapi(getExportOrgAssetsCiscoCsvRoute, getExportOrgAssetsCiscoCsvRouteHandler)
  .openapi(getExportOrgAssetsCsvRoute, getExportOrgAssetsCsvRouteHandler)
  .openapi(getExportOrgAssetsJsonRoute, getExportOrgAssetsJsonRouteHandler)
  .openapi(getExportOrgAssetsJsonlRoute, getExportOrgAssetsJsonlRouteHandler)
  .openapi(getExportOrgAssetsNmapXmlRoute, getExportOrgAssetsNmapXmlRouteHandler)
  .openapi(getExportOrgAssetsServicenowCsvRoute, getExportOrgAssetsServicenowCsvRouteHandler)
  .openapi(getExportOrgAssetsServicenowJsonRoute, getExportOrgAssetsServicenowJsonRouteHandler)
  .openapi(
    getExportOrgAssetsSyncCreatedAssetsJsonRoute,
    getExportOrgAssetsSyncCreatedAssetsJsonRouteHandler,
  )
  .openapi(
    getExportOrgAssetsSyncUpdatedAssetsJsonRoute,
    getExportOrgAssetsSyncUpdatedAssetsJsonRouteHandler,
  )
  .openapi(getExportOrgServicesCsvRoute, getExportOrgServicesCsvRouteHandler)
  .openapi(getExportOrgServicesJsonRoute, getExportOrgServicesJsonRouteHandler)
  .openapi(getExportOrgServicesJsonlRoute, getExportOrgServicesJsonlRouteHandler)
  .openapi(getExportOrgServicesServicenowCsvRoute, getExportOrgServicesServicenowCsvRouteHandler)
  .openapi(getExportOrgSitesCsvRoute, getExportOrgSitesCsvRouteHandler)
  .openapi(getExportOrgSitesJsonRoute, getExportOrgSitesJsonRouteHandler)
  .openapi(getExportOrgSitesJsonlRoute, getExportOrgSitesJsonlRouteHandler)
  .openapi(getExportOrgWirelessCsvRoute, getExportOrgWirelessCsvRouteHandler)
  .openapi(getExportOrgWirelessJsonRoute, getExportOrgWirelessJsonRouteHandler)
  .openapi(getExportOrgWirelessJsonlRoute, getExportOrgWirelessJsonlRouteHandler)
  .openapi(getOrgRoute, getOrgRouteHandler)
  .openapi(patchOrgRoute, patchOrgRouteHandler)
  .openapi(getOrgAgentsRoute, getOrgAgentsRouteHandler)
  .openapi(deleteOrgAgentsAgentIdRoute, deleteOrgAgentsAgentIdRouteHandler)
  .openapi(getOrgAgentsAgentIdRoute, getOrgAgentsAgentIdRouteHandler)
  .openapi(patchOrgAgentsAgentIdRoute, patchOrgAgentsAgentIdRouteHandler)
  .openapi(postOrgAgentsAgentIdUpdateRoute, postOrgAgentsAgentIdUpdateRouteHandler)
  .openapi(getOrgAssetsRoute, getOrgAssetsRouteHandler)
  .openapi(postOrgAssetsBulkClearTagsRoute, postOrgAssetsBulkClearTagsRouteHandler)
  .openapi(patchOrgAssetsBulkTagsRoute, patchOrgAssetsBulkTagsRouteHandler)
  .openapi(getOrgAssetsTopHwCsvRoute, getOrgAssetsTopHwCsvRouteHandler)
  .openapi(getOrgAssetsTopOsCsvRoute, getOrgAssetsTopOsCsvRouteHandler)
  .openapi(getOrgAssetsTopTagsCsvRoute, getOrgAssetsTopTagsCsvRouteHandler)
  .openapi(getOrgAssetsTopTypesCsvRoute, getOrgAssetsTopTypesCsvRouteHandler)
  .openapi(deleteOrgAssetsAssetIdRoute, deleteOrgAssetsAssetIdRouteHandler)
  .openapi(getOrgAssetsAssetIdRoute, getOrgAssetsAssetIdRouteHandler)
  .openapi(patchOrgAssetsAssetIdCommentsRoute, patchOrgAssetsAssetIdCommentsRouteHandler)
  .openapi(patchOrgAssetsAssetIdTagsRoute, patchOrgAssetsAssetIdTagsRouteHandler)
  .openapi(deleteOrgKeyRoute, deleteOrgKeyRouteHandler)
  .openapi(getOrgKeyRoute, getOrgKeyRouteHandler)
  .openapi(patchOrgKeyRotateRoute, patchOrgKeyRotateRouteHandler)
  .openapi(getOrgServicesRoute, getOrgServicesRouteHandler)
  .openapi(getOrgServicesSubnetStatsCsvRoute, getOrgServicesSubnetStatsCsvRouteHandler)
  .openapi(getOrgServicesTopProductsCsvRoute, getOrgServicesTopProductsCsvRouteHandler)
  .openapi(getOrgServicesTopProtocolsCsvRoute, getOrgServicesTopProtocolsCsvRouteHandler)
  .openapi(getOrgServicesTopTcpCsvRoute, getOrgServicesTopTcpCsvRouteHandler)
  .openapi(getOrgServicesTopUdpCsvRoute, getOrgServicesTopUdpCsvRouteHandler)
  .openapi(deleteOrgServicesServiceIdRoute, deleteOrgServicesServiceIdRouteHandler)
  .openapi(getOrgServicesServiceIdRoute, getOrgServicesServiceIdRouteHandler)
  .openapi(getOrgSitesRoute, getOrgSitesRouteHandler)
  .openapi(putOrgSitesRoute, putOrgSitesRouteHandler)
  .openapi(deleteOrgSitesSiteIdRoute, deleteOrgSitesSiteIdRouteHandler)
  .openapi(getOrgSitesSiteIdRoute, getOrgSitesSiteIdRouteHandler)
  .openapi(patchOrgSitesSiteIdRoute, patchOrgSitesSiteIdRouteHandler)
  .openapi(putOrgSitesSiteIdImportRoute, putOrgSitesSiteIdImportRouteHandler)
  .openapi(putOrgSitesSiteIdImportNessusRoute, putOrgSitesSiteIdImportNessusRouteHandler)
  .openapi(putOrgSitesSiteIdScanRoute, putOrgSitesSiteIdScanRouteHandler)
  .openapi(getOrgTasksRoute, getOrgTasksRouteHandler)
  .openapi(getOrgTasksTaskIdRoute, getOrgTasksTaskIdRouteHandler)
  .openapi(patchOrgTasksTaskIdRoute, patchOrgTasksTaskIdRouteHandler)
  .openapi(getOrgTasksTaskIdChangesRoute, getOrgTasksTaskIdChangesRouteHandler)
  .openapi(getOrgTasksTaskIdDataRoute, getOrgTasksTaskIdDataRouteHandler)
  .openapi(postOrgTasksTaskIdHideRoute, postOrgTasksTaskIdHideRouteHandler)
  .openapi(getOrgTasksTaskIdLogRoute, getOrgTasksTaskIdLogRouteHandler)
  .openapi(postOrgTasksTaskIdStopRoute, postOrgTasksTaskIdStopRouteHandler)
  .openapi(getOrgWirelessRoute, getOrgWirelessRouteHandler)
  .openapi(deleteOrgWirelessWirelessIdRoute, deleteOrgWirelessWirelessIdRouteHandler)
  .openapi(getOrgWirelessWirelessIdRoute, getOrgWirelessWirelessIdRouteHandler)
  .openapi(getReleasesAgentVersionRoute, getReleasesAgentVersionRouteHandler)
  .openapi(getReleasesPlatformVersionRoute, getReleasesPlatformVersionRouteHandler)
  .openapi(getReleasesScannerVersionRoute, getReleasesScannerVersionRouteHandler)

export default app
