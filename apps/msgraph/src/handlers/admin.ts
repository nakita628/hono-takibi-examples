import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdRoute,
  deleteAdminConfigurationManagementConfigurationSnapshotJobsConfigurationSnapshotJobIdRoute,
  deleteAdminEdgeInternetExplorerModeRoute,
  deleteAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdRoute,
  deleteAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesBrowserSharedCookieIdRoute,
  deleteAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesBrowserSiteIdRoute,
  deleteAdminEdgeRoute,
  deleteAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1ItemsMailboxItemIdRoute,
  deleteAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1Route,
  deleteAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdItemsMailboxItemIdRoute,
  deleteAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdRoute,
  deleteAdminExchangeMailboxesMailboxIdRoute,
  deleteAdminExchangeRoute,
  deleteAdminExchangeTracingMessageTracesExchangeMessageTraceIdRoute,
  deleteAdminExchangeTracingRoute,
  deleteAdminMicrosoft365AppsInstallationOptionsRoute,
  deleteAdminMicrosoft365AppsRoute,
  deleteAdminPeopleItemInsightsRoute,
  deleteAdminPeopleProfileCardPropertiesProfileCardPropertyIdRoute,
  deleteAdminPeopleProfilePropertySettingsProfilePropertySettingIdRoute,
  deleteAdminPeopleProfileSourcesProfileSourceIdRoute,
  deleteAdminPeopleProfileSourcesSourceIdSourceIdRoute,
  deleteAdminReportSettingsRoute,
  deleteAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdRoute,
  deleteAdminServiceAnnouncementHealthOverviewsServiceHealthIdRoute,
  deleteAdminServiceAnnouncementIssuesServiceHealthIssueIdRoute,
  deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsArchiveRoute,
  deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdContentRoute,
  deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdRoute,
  deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdRoute,
  deleteAdminServiceAnnouncementRoute,
  deleteAdminSharepointRoute,
  deleteAdminSharepointSettingsRoute,
  deleteAdminTeamsPolicyRoute,
  deleteAdminTeamsPolicyUserAssignmentsTeamsPolicyUserAssignmentIdRoute,
  deleteAdminTeamsRoute,
  deleteAdminTeamsTelephoneNumberManagementNumberAssignmentsNumberAssignmentIdRoute,
  deleteAdminTeamsTelephoneNumberManagementOperationsTelephoneNumberLongRunningOperationIdRoute,
  deleteAdminTeamsTelephoneNumberManagementRoute,
  deleteAdminTeamsUserConfigurationsTeamsUserConfigurationIdRoute,
  getAdminConfigurationManagementConfigurationDriftsConfigurationDriftIdRoute,
  getAdminConfigurationManagementConfigurationDriftsCountRoute,
  getAdminConfigurationManagementConfigurationDriftsRoute,
  getAdminConfigurationManagementConfigurationMonitoringResultsConfigurationMonitoringResultIdRoute,
  getAdminConfigurationManagementConfigurationMonitoringResultsCountRoute,
  getAdminConfigurationManagementConfigurationMonitoringResultsRoute,
  getAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdBaselineRoute,
  getAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdRoute,
  getAdminConfigurationManagementConfigurationMonitorsCountRoute,
  getAdminConfigurationManagementConfigurationMonitorsRoute,
  getAdminConfigurationManagementConfigurationSnapshotJobsConfigurationSnapshotJobIdRoute,
  getAdminConfigurationManagementConfigurationSnapshotJobsRoute,
  getAdminConfigurationManagementConfigurationSnapshotsConfigurationBaselineIdRoute,
  getAdminConfigurationManagementConfigurationSnapshotsRoute,
  getAdminEdgeInternetExplorerModeRoute,
  getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdRoute,
  getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesBrowserSharedCookieIdRoute,
  getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesCountRoute,
  getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesRoute,
  getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesBrowserSiteIdRoute,
  getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesCountRoute,
  getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesRoute,
  getAdminEdgeInternetExplorerModeSiteListsCountRoute,
  getAdminEdgeInternetExplorerModeSiteListsRoute,
  getAdminEdgeRoute,
  getAdminExchangeMailboxesCountRoute,
  getAdminExchangeMailboxesMailboxIdFoldersCountRoute,
  getAdminExchangeMailboxesMailboxIdFoldersDeltaRoute,
  getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersCountRoute,
  getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersDeltaRoute,
  getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1ItemsCountRoute,
  getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1ItemsDeltaRoute,
  getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1ItemsMailboxItemIdRoute,
  getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1ItemsRoute,
  getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1Route,
  getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersRoute,
  getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdItemsCountRoute,
  getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdItemsDeltaRoute,
  getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdItemsMailboxItemIdRoute,
  getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdItemsRoute,
  getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdRoute,
  getAdminExchangeMailboxesMailboxIdFoldersRoute,
  getAdminExchangeMailboxesMailboxIdRoute,
  getAdminExchangeMailboxesRoute,
  getAdminExchangeRoute,
  getAdminExchangeTracingMessageTracesCountRoute,
  getAdminExchangeTracingMessageTracesExchangeMessageTraceIdGetDetailsByRecipientRecipientAddressRecipientAddressRoute,
  getAdminExchangeTracingMessageTracesExchangeMessageTraceIdRoute,
  getAdminExchangeTracingMessageTracesRoute,
  getAdminExchangeTracingRoute,
  getAdminMicrosoft365AppsInstallationOptionsRoute,
  getAdminMicrosoft365AppsRoute,
  getAdminPeopleItemInsightsRoute,
  getAdminPeopleProfileCardPropertiesCountRoute,
  getAdminPeopleProfileCardPropertiesProfileCardPropertyIdRoute,
  getAdminPeopleProfileCardPropertiesRoute,
  getAdminPeopleProfilePropertySettingsCountRoute,
  getAdminPeopleProfilePropertySettingsProfilePropertySettingIdRoute,
  getAdminPeopleProfilePropertySettingsRoute,
  getAdminPeopleProfileSourcesCountRoute,
  getAdminPeopleProfileSourcesProfileSourceIdRoute,
  getAdminPeopleProfileSourcesRoute,
  getAdminPeopleProfileSourcesSourceIdSourceIdRoute,
  getAdminPeoplePronounsRoute,
  getAdminPeopleRoute,
  getAdminReportSettingsRoute,
  getAdminRoute,
  getAdminServiceAnnouncementHealthOverviewsCountRoute,
  getAdminServiceAnnouncementHealthOverviewsRoute,
  getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesCountRoute,
  getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesRoute,
  getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdIncidentReportRoute,
  getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdRoute,
  getAdminServiceAnnouncementHealthOverviewsServiceHealthIdRoute,
  getAdminServiceAnnouncementIssuesCountRoute,
  getAdminServiceAnnouncementIssuesRoute,
  getAdminServiceAnnouncementIssuesServiceHealthIssueIdIncidentReportRoute,
  getAdminServiceAnnouncementIssuesServiceHealthIssueIdRoute,
  getAdminServiceAnnouncementMessagesCountRoute,
  getAdminServiceAnnouncementMessagesRoute,
  getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsArchiveRoute,
  getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsCountRoute,
  getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsRoute,
  getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdContentRoute,
  getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdRoute,
  getAdminServiceAnnouncementMessagesServiceUpdateMessageIdRoute,
  getAdminServiceAnnouncementRoute,
  getAdminSharepointRoute,
  getAdminSharepointSettingsRoute,
  getAdminTeamsPolicyMicrosoftGraphTeamsAdministrationGetPolicyIdTypeTypeNameNameRoute,
  getAdminTeamsPolicyRoute,
  getAdminTeamsPolicyUserAssignmentsCountRoute,
  getAdminTeamsPolicyUserAssignmentsRoute,
  getAdminTeamsPolicyUserAssignmentsTeamsPolicyUserAssignmentIdRoute,
  getAdminTeamsRoute,
  getAdminTeamsTelephoneNumberManagementNumberAssignmentsCountRoute,
  getAdminTeamsTelephoneNumberManagementNumberAssignmentsNumberAssignmentIdRoute,
  getAdminTeamsTelephoneNumberManagementNumberAssignmentsRoute,
  getAdminTeamsTelephoneNumberManagementOperationsCountRoute,
  getAdminTeamsTelephoneNumberManagementOperationsRoute,
  getAdminTeamsTelephoneNumberManagementOperationsTelephoneNumberLongRunningOperationIdRoute,
  getAdminTeamsTelephoneNumberManagementRoute,
  getAdminTeamsUserConfigurationsCountRoute,
  getAdminTeamsUserConfigurationsRoute,
  getAdminTeamsUserConfigurationsTeamsUserConfigurationIdRoute,
  getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserMailboxSettingsRoute,
  getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserRoute,
  getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserServiceProvisioningErrorsCountRoute,
  getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserServiceProvisioningErrorsRoute,
  patchAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdRoute,
  patchAdminEdgeInternetExplorerModeRoute,
  patchAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdRoute,
  patchAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesBrowserSharedCookieIdRoute,
  patchAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesBrowserSiteIdRoute,
  patchAdminEdgeRoute,
  patchAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1Route,
  patchAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdRoute,
  patchAdminExchangeMailboxesMailboxIdRoute,
  patchAdminExchangeRoute,
  patchAdminExchangeTracingMessageTracesExchangeMessageTraceIdRoute,
  patchAdminExchangeTracingRoute,
  patchAdminMicrosoft365AppsInstallationOptionsRoute,
  patchAdminMicrosoft365AppsRoute,
  patchAdminPeopleItemInsightsRoute,
  patchAdminPeopleProfileCardPropertiesProfileCardPropertyIdRoute,
  patchAdminPeopleProfilePropertySettingsProfilePropertySettingIdRoute,
  patchAdminPeopleProfileSourcesProfileSourceIdRoute,
  patchAdminPeopleProfileSourcesSourceIdSourceIdRoute,
  patchAdminPeoplePronounsRoute,
  patchAdminReportSettingsRoute,
  patchAdminRoute,
  patchAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdRoute,
  patchAdminServiceAnnouncementHealthOverviewsServiceHealthIdRoute,
  patchAdminServiceAnnouncementIssuesServiceHealthIssueIdRoute,
  patchAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdRoute,
  patchAdminServiceAnnouncementMessagesServiceUpdateMessageIdRoute,
  patchAdminServiceAnnouncementRoute,
  patchAdminSharepointRoute,
  patchAdminSharepointSettingsRoute,
  patchAdminTeamsPolicyRoute,
  patchAdminTeamsPolicyUserAssignmentsTeamsPolicyUserAssignmentIdRoute,
  patchAdminTeamsRoute,
  patchAdminTeamsTelephoneNumberManagementNumberAssignmentsNumberAssignmentIdRoute,
  patchAdminTeamsTelephoneNumberManagementOperationsTelephoneNumberLongRunningOperationIdRoute,
  patchAdminTeamsTelephoneNumberManagementRoute,
  patchAdminTeamsUserConfigurationsTeamsUserConfigurationIdRoute,
  patchAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserMailboxSettingsRoute,
  postAdminConfigurationManagementConfigurationMonitorsRoute,
  postAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdPublishRoute,
  postAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesRoute,
  postAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesRoute,
  postAdminEdgeInternetExplorerModeSiteListsRoute,
  postAdminExchangeMailboxesMailboxIdCreateImportSessionRoute,
  postAdminExchangeMailboxesMailboxIdExportItemsRoute,
  postAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersRoute,
  postAdminExchangeMailboxesMailboxIdFoldersRoute,
  postAdminExchangeMailboxesRoute,
  postAdminExchangeTracingMessageTracesRoute,
  postAdminPeopleProfileCardPropertiesRoute,
  postAdminPeopleProfilePropertySettingsRoute,
  postAdminPeopleProfileSourcesRoute,
  postAdminServiceAnnouncementHealthOverviewsRoute,
  postAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesRoute,
  postAdminServiceAnnouncementIssuesRoute,
  postAdminServiceAnnouncementMessagesArchiveRoute,
  postAdminServiceAnnouncementMessagesFavoriteRoute,
  postAdminServiceAnnouncementMessagesMarkReadRoute,
  postAdminServiceAnnouncementMessagesMarkUnreadRoute,
  postAdminServiceAnnouncementMessagesRoute,
  postAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsRoute,
  postAdminServiceAnnouncementMessagesUnarchiveRoute,
  postAdminServiceAnnouncementMessagesUnfavoriteRoute,
  postAdminTeamsPolicyUserAssignmentsMicrosoftGraphTeamsAdministrationAssignRoute,
  postAdminTeamsPolicyUserAssignmentsMicrosoftGraphTeamsAdministrationUnassignRoute,
  postAdminTeamsPolicyUserAssignmentsRoute,
  postAdminTeamsTelephoneNumberManagementNumberAssignmentsMicrosoftGraphTeamsAdministrationAssignNumberRoute,
  postAdminTeamsTelephoneNumberManagementNumberAssignmentsMicrosoftGraphTeamsAdministrationUnassignNumberRoute,
  postAdminTeamsTelephoneNumberManagementNumberAssignmentsMicrosoftGraphTeamsAdministrationUpdateNumberRoute,
  postAdminTeamsTelephoneNumberManagementNumberAssignmentsRoute,
  postAdminTeamsTelephoneNumberManagementOperationsRoute,
  postAdminTeamsUserConfigurationsRoute,
  putAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsArchiveRoute,
  putAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdContentRoute,
} from '../routes'

export const getAdminRouteHandler: RouteHandler<typeof getAdminRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminRouteHandler: RouteHandler<typeof patchAdminRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminConfigurationManagementConfigurationDriftsRouteHandler: RouteHandler<
  typeof getAdminConfigurationManagementConfigurationDriftsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminConfigurationManagementConfigurationDriftsConfigurationDriftIdRouteHandler: RouteHandler<
  typeof getAdminConfigurationManagementConfigurationDriftsConfigurationDriftIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminConfigurationManagementConfigurationDriftsCountRouteHandler: RouteHandler<
  typeof getAdminConfigurationManagementConfigurationDriftsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminConfigurationManagementConfigurationMonitoringResultsRouteHandler: RouteHandler<
  typeof getAdminConfigurationManagementConfigurationMonitoringResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminConfigurationManagementConfigurationMonitoringResultsConfigurationMonitoringResultIdRouteHandler: RouteHandler<
  typeof getAdminConfigurationManagementConfigurationMonitoringResultsConfigurationMonitoringResultIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminConfigurationManagementConfigurationMonitoringResultsCountRouteHandler: RouteHandler<
  typeof getAdminConfigurationManagementConfigurationMonitoringResultsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminConfigurationManagementConfigurationMonitorsRouteHandler: RouteHandler<
  typeof getAdminConfigurationManagementConfigurationMonitorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminConfigurationManagementConfigurationMonitorsRouteHandler: RouteHandler<
  typeof postAdminConfigurationManagementConfigurationMonitorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdRouteHandler: RouteHandler<
  typeof getAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdRouteHandler: RouteHandler<
  typeof patchAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdRouteHandler: RouteHandler<
  typeof deleteAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdBaselineRouteHandler: RouteHandler<
  typeof getAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdBaselineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminConfigurationManagementConfigurationMonitorsCountRouteHandler: RouteHandler<
  typeof getAdminConfigurationManagementConfigurationMonitorsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminConfigurationManagementConfigurationSnapshotJobsRouteHandler: RouteHandler<
  typeof getAdminConfigurationManagementConfigurationSnapshotJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminConfigurationManagementConfigurationSnapshotJobsConfigurationSnapshotJobIdRouteHandler: RouteHandler<
  typeof getAdminConfigurationManagementConfigurationSnapshotJobsConfigurationSnapshotJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminConfigurationManagementConfigurationSnapshotJobsConfigurationSnapshotJobIdRouteHandler: RouteHandler<
  typeof deleteAdminConfigurationManagementConfigurationSnapshotJobsConfigurationSnapshotJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminConfigurationManagementConfigurationSnapshotsRouteHandler: RouteHandler<
  typeof getAdminConfigurationManagementConfigurationSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminConfigurationManagementConfigurationSnapshotsConfigurationBaselineIdRouteHandler: RouteHandler<
  typeof getAdminConfigurationManagementConfigurationSnapshotsConfigurationBaselineIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminEdgeRouteHandler: RouteHandler<typeof getAdminEdgeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminEdgeRouteHandler: RouteHandler<typeof patchAdminEdgeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminEdgeRouteHandler: RouteHandler<typeof deleteAdminEdgeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminEdgeInternetExplorerModeRouteHandler: RouteHandler<
  typeof getAdminEdgeInternetExplorerModeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminEdgeInternetExplorerModeRouteHandler: RouteHandler<
  typeof patchAdminEdgeInternetExplorerModeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminEdgeInternetExplorerModeRouteHandler: RouteHandler<
  typeof deleteAdminEdgeInternetExplorerModeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminEdgeInternetExplorerModeSiteListsRouteHandler: RouteHandler<
  typeof getAdminEdgeInternetExplorerModeSiteListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminEdgeInternetExplorerModeSiteListsRouteHandler: RouteHandler<
  typeof postAdminEdgeInternetExplorerModeSiteListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdRouteHandler: RouteHandler<
  typeof getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdRouteHandler: RouteHandler<
  typeof patchAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdRouteHandler: RouteHandler<
  typeof deleteAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdPublishRouteHandler: RouteHandler<
  typeof postAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesRouteHandler: RouteHandler<
  typeof getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesRouteHandler: RouteHandler<
  typeof postAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesBrowserSharedCookieIdRouteHandler: RouteHandler<
  typeof getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesBrowserSharedCookieIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesBrowserSharedCookieIdRouteHandler: RouteHandler<
  typeof patchAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesBrowserSharedCookieIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesBrowserSharedCookieIdRouteHandler: RouteHandler<
  typeof deleteAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesBrowserSharedCookieIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesCountRouteHandler: RouteHandler<
  typeof getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSharedCookiesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesRouteHandler: RouteHandler<
  typeof getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesRouteHandler: RouteHandler<
  typeof postAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesBrowserSiteIdRouteHandler: RouteHandler<
  typeof getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesBrowserSiteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesBrowserSiteIdRouteHandler: RouteHandler<
  typeof patchAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesBrowserSiteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesBrowserSiteIdRouteHandler: RouteHandler<
  typeof deleteAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesBrowserSiteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesCountRouteHandler: RouteHandler<
  typeof getAdminEdgeInternetExplorerModeSiteListsBrowserSiteListIdSitesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminEdgeInternetExplorerModeSiteListsCountRouteHandler: RouteHandler<
  typeof getAdminEdgeInternetExplorerModeSiteListsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeRouteHandler: RouteHandler<typeof getAdminExchangeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchAdminExchangeRouteHandler: RouteHandler<typeof patchAdminExchangeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAdminExchangeRouteHandler: RouteHandler<
  typeof deleteAdminExchangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminExchangeMailboxesRouteHandler: RouteHandler<
  typeof postAdminExchangeMailboxesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesMailboxIdRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesMailboxIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminExchangeMailboxesMailboxIdRouteHandler: RouteHandler<
  typeof patchAdminExchangeMailboxesMailboxIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminExchangeMailboxesMailboxIdRouteHandler: RouteHandler<
  typeof deleteAdminExchangeMailboxesMailboxIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesMailboxIdFoldersRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesMailboxIdFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminExchangeMailboxesMailboxIdFoldersRouteHandler: RouteHandler<
  typeof postAdminExchangeMailboxesMailboxIdFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdRouteHandler: RouteHandler<
  typeof patchAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdRouteHandler: RouteHandler<
  typeof deleteAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersRouteHandler: RouteHandler<
  typeof postAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1RouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1RouteHandler: RouteHandler<
  typeof patchAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1RouteHandler: RouteHandler<
  typeof deleteAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1ItemsRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1ItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1ItemsMailboxItemIdRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1ItemsMailboxItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1ItemsMailboxItemIdRouteHandler: RouteHandler<
  typeof deleteAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1ItemsMailboxItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1ItemsCountRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1ItemsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1ItemsDeltaRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersMailboxFolderId1ItemsDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersCountRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersDeltaRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdChildFoldersDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdItemsRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdItemsMailboxItemIdRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdItemsMailboxItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdItemsMailboxItemIdRouteHandler: RouteHandler<
  typeof deleteAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdItemsMailboxItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdItemsCountRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdItemsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdItemsDeltaRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesMailboxIdFoldersMailboxFolderIdItemsDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesMailboxIdFoldersCountRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesMailboxIdFoldersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesMailboxIdFoldersDeltaRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesMailboxIdFoldersDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminExchangeMailboxesMailboxIdCreateImportSessionRouteHandler: RouteHandler<
  typeof postAdminExchangeMailboxesMailboxIdCreateImportSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminExchangeMailboxesMailboxIdExportItemsRouteHandler: RouteHandler<
  typeof postAdminExchangeMailboxesMailboxIdExportItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeMailboxesCountRouteHandler: RouteHandler<
  typeof getAdminExchangeMailboxesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeTracingRouteHandler: RouteHandler<
  typeof getAdminExchangeTracingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminExchangeTracingRouteHandler: RouteHandler<
  typeof patchAdminExchangeTracingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminExchangeTracingRouteHandler: RouteHandler<
  typeof deleteAdminExchangeTracingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeTracingMessageTracesRouteHandler: RouteHandler<
  typeof getAdminExchangeTracingMessageTracesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminExchangeTracingMessageTracesRouteHandler: RouteHandler<
  typeof postAdminExchangeTracingMessageTracesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeTracingMessageTracesExchangeMessageTraceIdRouteHandler: RouteHandler<
  typeof getAdminExchangeTracingMessageTracesExchangeMessageTraceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminExchangeTracingMessageTracesExchangeMessageTraceIdRouteHandler: RouteHandler<
  typeof patchAdminExchangeTracingMessageTracesExchangeMessageTraceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminExchangeTracingMessageTracesExchangeMessageTraceIdRouteHandler: RouteHandler<
  typeof deleteAdminExchangeTracingMessageTracesExchangeMessageTraceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeTracingMessageTracesExchangeMessageTraceIdGetDetailsByRecipientRecipientAddressRecipientAddressRouteHandler: RouteHandler<
  typeof getAdminExchangeTracingMessageTracesExchangeMessageTraceIdGetDetailsByRecipientRecipientAddressRecipientAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangeTracingMessageTracesCountRouteHandler: RouteHandler<
  typeof getAdminExchangeTracingMessageTracesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminMicrosoft365AppsRouteHandler: RouteHandler<
  typeof getAdminMicrosoft365AppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminMicrosoft365AppsRouteHandler: RouteHandler<
  typeof patchAdminMicrosoft365AppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminMicrosoft365AppsRouteHandler: RouteHandler<
  typeof deleteAdminMicrosoft365AppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminMicrosoft365AppsInstallationOptionsRouteHandler: RouteHandler<
  typeof getAdminMicrosoft365AppsInstallationOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminMicrosoft365AppsInstallationOptionsRouteHandler: RouteHandler<
  typeof patchAdminMicrosoft365AppsInstallationOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminMicrosoft365AppsInstallationOptionsRouteHandler: RouteHandler<
  typeof deleteAdminMicrosoft365AppsInstallationOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPeopleRouteHandler: RouteHandler<typeof getAdminPeopleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPeopleItemInsightsRouteHandler: RouteHandler<
  typeof getAdminPeopleItemInsightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminPeopleItemInsightsRouteHandler: RouteHandler<
  typeof patchAdminPeopleItemInsightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminPeopleItemInsightsRouteHandler: RouteHandler<
  typeof deleteAdminPeopleItemInsightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPeopleProfileCardPropertiesRouteHandler: RouteHandler<
  typeof getAdminPeopleProfileCardPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPeopleProfileCardPropertiesRouteHandler: RouteHandler<
  typeof postAdminPeopleProfileCardPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPeopleProfileCardPropertiesProfileCardPropertyIdRouteHandler: RouteHandler<
  typeof getAdminPeopleProfileCardPropertiesProfileCardPropertyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminPeopleProfileCardPropertiesProfileCardPropertyIdRouteHandler: RouteHandler<
  typeof patchAdminPeopleProfileCardPropertiesProfileCardPropertyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminPeopleProfileCardPropertiesProfileCardPropertyIdRouteHandler: RouteHandler<
  typeof deleteAdminPeopleProfileCardPropertiesProfileCardPropertyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPeopleProfileCardPropertiesCountRouteHandler: RouteHandler<
  typeof getAdminPeopleProfileCardPropertiesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPeopleProfilePropertySettingsRouteHandler: RouteHandler<
  typeof getAdminPeopleProfilePropertySettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPeopleProfilePropertySettingsRouteHandler: RouteHandler<
  typeof postAdminPeopleProfilePropertySettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPeopleProfilePropertySettingsProfilePropertySettingIdRouteHandler: RouteHandler<
  typeof getAdminPeopleProfilePropertySettingsProfilePropertySettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminPeopleProfilePropertySettingsProfilePropertySettingIdRouteHandler: RouteHandler<
  typeof patchAdminPeopleProfilePropertySettingsProfilePropertySettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminPeopleProfilePropertySettingsProfilePropertySettingIdRouteHandler: RouteHandler<
  typeof deleteAdminPeopleProfilePropertySettingsProfilePropertySettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPeopleProfilePropertySettingsCountRouteHandler: RouteHandler<
  typeof getAdminPeopleProfilePropertySettingsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPeopleProfileSourcesRouteHandler: RouteHandler<
  typeof getAdminPeopleProfileSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPeopleProfileSourcesRouteHandler: RouteHandler<
  typeof postAdminPeopleProfileSourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPeopleProfileSourcesProfileSourceIdRouteHandler: RouteHandler<
  typeof getAdminPeopleProfileSourcesProfileSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminPeopleProfileSourcesProfileSourceIdRouteHandler: RouteHandler<
  typeof patchAdminPeopleProfileSourcesProfileSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminPeopleProfileSourcesProfileSourceIdRouteHandler: RouteHandler<
  typeof deleteAdminPeopleProfileSourcesProfileSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPeopleProfileSourcesSourceIdSourceIdRouteHandler: RouteHandler<
  typeof getAdminPeopleProfileSourcesSourceIdSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminPeopleProfileSourcesSourceIdSourceIdRouteHandler: RouteHandler<
  typeof patchAdminPeopleProfileSourcesSourceIdSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminPeopleProfileSourcesSourceIdSourceIdRouteHandler: RouteHandler<
  typeof deleteAdminPeopleProfileSourcesSourceIdSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPeopleProfileSourcesCountRouteHandler: RouteHandler<
  typeof getAdminPeopleProfileSourcesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPeoplePronounsRouteHandler: RouteHandler<
  typeof getAdminPeoplePronounsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminPeoplePronounsRouteHandler: RouteHandler<
  typeof patchAdminPeoplePronounsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminReportSettingsRouteHandler: RouteHandler<
  typeof getAdminReportSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminReportSettingsRouteHandler: RouteHandler<
  typeof patchAdminReportSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminReportSettingsRouteHandler: RouteHandler<
  typeof deleteAdminReportSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminServiceAnnouncementRouteHandler: RouteHandler<
  typeof patchAdminServiceAnnouncementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminServiceAnnouncementRouteHandler: RouteHandler<
  typeof deleteAdminServiceAnnouncementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementHealthOverviewsRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementHealthOverviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminServiceAnnouncementHealthOverviewsRouteHandler: RouteHandler<
  typeof postAdminServiceAnnouncementHealthOverviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementHealthOverviewsServiceHealthIdRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementHealthOverviewsServiceHealthIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminServiceAnnouncementHealthOverviewsServiceHealthIdRouteHandler: RouteHandler<
  typeof patchAdminServiceAnnouncementHealthOverviewsServiceHealthIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminServiceAnnouncementHealthOverviewsServiceHealthIdRouteHandler: RouteHandler<
  typeof deleteAdminServiceAnnouncementHealthOverviewsServiceHealthIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesRouteHandler: RouteHandler<
  typeof postAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdRouteHandler: RouteHandler<
  typeof patchAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdRouteHandler: RouteHandler<
  typeof deleteAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdIncidentReportRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesServiceHealthIssueIdIncidentReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesCountRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementHealthOverviewsServiceHealthIdIssuesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementHealthOverviewsCountRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementHealthOverviewsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementIssuesRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementIssuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminServiceAnnouncementIssuesRouteHandler: RouteHandler<
  typeof postAdminServiceAnnouncementIssuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementIssuesServiceHealthIssueIdRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementIssuesServiceHealthIssueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminServiceAnnouncementIssuesServiceHealthIssueIdRouteHandler: RouteHandler<
  typeof patchAdminServiceAnnouncementIssuesServiceHealthIssueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminServiceAnnouncementIssuesServiceHealthIssueIdRouteHandler: RouteHandler<
  typeof deleteAdminServiceAnnouncementIssuesServiceHealthIssueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementIssuesServiceHealthIssueIdIncidentReportRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementIssuesServiceHealthIssueIdIncidentReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementIssuesCountRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementIssuesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementMessagesRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminServiceAnnouncementMessagesRouteHandler: RouteHandler<
  typeof postAdminServiceAnnouncementMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementMessagesServiceUpdateMessageIdRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementMessagesServiceUpdateMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminServiceAnnouncementMessagesServiceUpdateMessageIdRouteHandler: RouteHandler<
  typeof patchAdminServiceAnnouncementMessagesServiceUpdateMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdRouteHandler: RouteHandler<
  typeof deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsRouteHandler: RouteHandler<
  typeof postAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdRouteHandler: RouteHandler<
  typeof patchAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdRouteHandler: RouteHandler<
  typeof deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdContentRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdContentRouteHandler: RouteHandler<
  typeof putAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdContentRouteHandler: RouteHandler<
  typeof deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsServiceAnnouncementAttachmentIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsCountRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsArchiveRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsArchiveRouteHandler: RouteHandler<
  typeof putAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsArchiveRouteHandler: RouteHandler<
  typeof deleteAdminServiceAnnouncementMessagesServiceUpdateMessageIdAttachmentsArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminServiceAnnouncementMessagesCountRouteHandler: RouteHandler<
  typeof getAdminServiceAnnouncementMessagesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminServiceAnnouncementMessagesArchiveRouteHandler: RouteHandler<
  typeof postAdminServiceAnnouncementMessagesArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminServiceAnnouncementMessagesFavoriteRouteHandler: RouteHandler<
  typeof postAdminServiceAnnouncementMessagesFavoriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminServiceAnnouncementMessagesMarkReadRouteHandler: RouteHandler<
  typeof postAdminServiceAnnouncementMessagesMarkReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminServiceAnnouncementMessagesMarkUnreadRouteHandler: RouteHandler<
  typeof postAdminServiceAnnouncementMessagesMarkUnreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminServiceAnnouncementMessagesUnarchiveRouteHandler: RouteHandler<
  typeof postAdminServiceAnnouncementMessagesUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminServiceAnnouncementMessagesUnfavoriteRouteHandler: RouteHandler<
  typeof postAdminServiceAnnouncementMessagesUnfavoriteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminSharepointRouteHandler: RouteHandler<typeof getAdminSharepointRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchAdminSharepointRouteHandler: RouteHandler<
  typeof patchAdminSharepointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminSharepointRouteHandler: RouteHandler<
  typeof deleteAdminSharepointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminSharepointSettingsRouteHandler: RouteHandler<
  typeof getAdminSharepointSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminSharepointSettingsRouteHandler: RouteHandler<
  typeof patchAdminSharepointSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminSharepointSettingsRouteHandler: RouteHandler<
  typeof deleteAdminSharepointSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsRouteHandler: RouteHandler<typeof getAdminTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminTeamsRouteHandler: RouteHandler<typeof patchAdminTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminTeamsRouteHandler: RouteHandler<typeof deleteAdminTeamsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsPolicyRouteHandler: RouteHandler<
  typeof getAdminTeamsPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminTeamsPolicyRouteHandler: RouteHandler<
  typeof patchAdminTeamsPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminTeamsPolicyRouteHandler: RouteHandler<
  typeof deleteAdminTeamsPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsPolicyMicrosoftGraphTeamsAdministrationGetPolicyIdTypeTypeNameNameRouteHandler: RouteHandler<
  typeof getAdminTeamsPolicyMicrosoftGraphTeamsAdministrationGetPolicyIdTypeTypeNameNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsPolicyUserAssignmentsRouteHandler: RouteHandler<
  typeof getAdminTeamsPolicyUserAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminTeamsPolicyUserAssignmentsRouteHandler: RouteHandler<
  typeof postAdminTeamsPolicyUserAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsPolicyUserAssignmentsTeamsPolicyUserAssignmentIdRouteHandler: RouteHandler<
  typeof getAdminTeamsPolicyUserAssignmentsTeamsPolicyUserAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminTeamsPolicyUserAssignmentsTeamsPolicyUserAssignmentIdRouteHandler: RouteHandler<
  typeof patchAdminTeamsPolicyUserAssignmentsTeamsPolicyUserAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminTeamsPolicyUserAssignmentsTeamsPolicyUserAssignmentIdRouteHandler: RouteHandler<
  typeof deleteAdminTeamsPolicyUserAssignmentsTeamsPolicyUserAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsPolicyUserAssignmentsCountRouteHandler: RouteHandler<
  typeof getAdminTeamsPolicyUserAssignmentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminTeamsPolicyUserAssignmentsMicrosoftGraphTeamsAdministrationAssignRouteHandler: RouteHandler<
  typeof postAdminTeamsPolicyUserAssignmentsMicrosoftGraphTeamsAdministrationAssignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminTeamsPolicyUserAssignmentsMicrosoftGraphTeamsAdministrationUnassignRouteHandler: RouteHandler<
  typeof postAdminTeamsPolicyUserAssignmentsMicrosoftGraphTeamsAdministrationUnassignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsTelephoneNumberManagementRouteHandler: RouteHandler<
  typeof getAdminTeamsTelephoneNumberManagementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminTeamsTelephoneNumberManagementRouteHandler: RouteHandler<
  typeof patchAdminTeamsTelephoneNumberManagementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminTeamsTelephoneNumberManagementRouteHandler: RouteHandler<
  typeof deleteAdminTeamsTelephoneNumberManagementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsTelephoneNumberManagementNumberAssignmentsRouteHandler: RouteHandler<
  typeof getAdminTeamsTelephoneNumberManagementNumberAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminTeamsTelephoneNumberManagementNumberAssignmentsRouteHandler: RouteHandler<
  typeof postAdminTeamsTelephoneNumberManagementNumberAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsTelephoneNumberManagementNumberAssignmentsNumberAssignmentIdRouteHandler: RouteHandler<
  typeof getAdminTeamsTelephoneNumberManagementNumberAssignmentsNumberAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminTeamsTelephoneNumberManagementNumberAssignmentsNumberAssignmentIdRouteHandler: RouteHandler<
  typeof patchAdminTeamsTelephoneNumberManagementNumberAssignmentsNumberAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminTeamsTelephoneNumberManagementNumberAssignmentsNumberAssignmentIdRouteHandler: RouteHandler<
  typeof deleteAdminTeamsTelephoneNumberManagementNumberAssignmentsNumberAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsTelephoneNumberManagementNumberAssignmentsCountRouteHandler: RouteHandler<
  typeof getAdminTeamsTelephoneNumberManagementNumberAssignmentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminTeamsTelephoneNumberManagementNumberAssignmentsMicrosoftGraphTeamsAdministrationAssignNumberRouteHandler: RouteHandler<
  typeof postAdminTeamsTelephoneNumberManagementNumberAssignmentsMicrosoftGraphTeamsAdministrationAssignNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminTeamsTelephoneNumberManagementNumberAssignmentsMicrosoftGraphTeamsAdministrationUnassignNumberRouteHandler: RouteHandler<
  typeof postAdminTeamsTelephoneNumberManagementNumberAssignmentsMicrosoftGraphTeamsAdministrationUnassignNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminTeamsTelephoneNumberManagementNumberAssignmentsMicrosoftGraphTeamsAdministrationUpdateNumberRouteHandler: RouteHandler<
  typeof postAdminTeamsTelephoneNumberManagementNumberAssignmentsMicrosoftGraphTeamsAdministrationUpdateNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsTelephoneNumberManagementOperationsRouteHandler: RouteHandler<
  typeof getAdminTeamsTelephoneNumberManagementOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminTeamsTelephoneNumberManagementOperationsRouteHandler: RouteHandler<
  typeof postAdminTeamsTelephoneNumberManagementOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsTelephoneNumberManagementOperationsTelephoneNumberLongRunningOperationIdRouteHandler: RouteHandler<
  typeof getAdminTeamsTelephoneNumberManagementOperationsTelephoneNumberLongRunningOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminTeamsTelephoneNumberManagementOperationsTelephoneNumberLongRunningOperationIdRouteHandler: RouteHandler<
  typeof patchAdminTeamsTelephoneNumberManagementOperationsTelephoneNumberLongRunningOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminTeamsTelephoneNumberManagementOperationsTelephoneNumberLongRunningOperationIdRouteHandler: RouteHandler<
  typeof deleteAdminTeamsTelephoneNumberManagementOperationsTelephoneNumberLongRunningOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsTelephoneNumberManagementOperationsCountRouteHandler: RouteHandler<
  typeof getAdminTeamsTelephoneNumberManagementOperationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsUserConfigurationsRouteHandler: RouteHandler<
  typeof getAdminTeamsUserConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminTeamsUserConfigurationsRouteHandler: RouteHandler<
  typeof postAdminTeamsUserConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsUserConfigurationsTeamsUserConfigurationIdRouteHandler: RouteHandler<
  typeof getAdminTeamsUserConfigurationsTeamsUserConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminTeamsUserConfigurationsTeamsUserConfigurationIdRouteHandler: RouteHandler<
  typeof patchAdminTeamsUserConfigurationsTeamsUserConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminTeamsUserConfigurationsTeamsUserConfigurationIdRouteHandler: RouteHandler<
  typeof deleteAdminTeamsUserConfigurationsTeamsUserConfigurationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserRouteHandler: RouteHandler<
  typeof getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserMailboxSettingsRouteHandler: RouteHandler<
  typeof getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserMailboxSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserMailboxSettingsRouteHandler: RouteHandler<
  typeof patchAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserMailboxSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserServiceProvisioningErrorsRouteHandler: RouteHandler<
  typeof getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserServiceProvisioningErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserServiceProvisioningErrorsCountRouteHandler: RouteHandler<
  typeof getAdminTeamsUserConfigurationsTeamsUserConfigurationIdUserServiceProvisioningErrorsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTeamsUserConfigurationsCountRouteHandler: RouteHandler<
  typeof getAdminTeamsUserConfigurationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
