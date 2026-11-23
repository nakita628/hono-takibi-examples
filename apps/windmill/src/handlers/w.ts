import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceAiSharedArtifactsDeleteIdRoute,
  deleteWWorkspaceAiSharedSessionsDeleteIdRoute,
  deleteWWorkspaceAiSharedSessionsOpenedIdRoute,
  deleteWWorkspaceAmqpTriggersDeletePathRoute,
  deleteWWorkspaceAppsDeletePathRoute,
  deleteWWorkspaceAppsUDeleteS3FileRoute,
  deleteWWorkspaceAzureTriggersDeletePathRoute,
  deleteWWorkspaceAzureTriggersSubscriptionsDeletePathRoute,
  deleteWWorkspaceCaptureIdRoute,
  deleteWWorkspaceEmailTriggersDeletePathRoute,
  deleteWWorkspaceFlowConversationsDeleteConversationIdRoute,
  deleteWWorkspaceFlowsDeletePathRoute,
  deleteWWorkspaceFoldersDeleteNameRoute,
  deleteWWorkspaceGcpTriggersDeletePathRoute,
  deleteWWorkspaceGcpTriggersSubscriptionsDeletePathRoute,
  deleteWWorkspaceGcpTriggersSubscriptionsDeleteRoute,
  deleteWWorkspaceGithubAppInstallationInstallationIdRoute,
  deleteWWorkspaceGroupsDeleteNameRoute,
  deleteWWorkspaceHttpTriggersDeletePathRoute,
  deleteWWorkspaceJobHelpersDeleteS3FileRoute,
  deleteWWorkspaceKafkaTriggersDeletePathRoute,
  deleteWWorkspaceMqttTriggersDeletePathRoute,
  deleteWWorkspaceNativeTriggersIntegrationsServiceNameConnectionsDeleteRoute,
  deleteWWorkspaceNativeTriggersIntegrationsServiceNameDeleteRoute,
  deleteWWorkspaceNativeTriggersServiceNameDeleteExternalIdRoute,
  deleteWWorkspaceNatsTriggersDeletePathRoute,
  deleteWWorkspacePostgresTriggersDeletePathRoute,
  deleteWWorkspacePostgresTriggersPublicationDeletePublicationPathRoute,
  deleteWWorkspacePostgresTriggersSlotDeletePathRoute,
  deleteWWorkspaceResourcesDeleteBulkRoute,
  deleteWWorkspaceResourcesDeletePathRoute,
  deleteWWorkspaceResourcesHistoryPPathRoute,
  deleteWWorkspaceResourcesTypeDeletePathRoute,
  deleteWWorkspaceSchedulesDeletePathRoute,
  deleteWWorkspaceScriptsDeleteBulkRoute,
  deleteWWorkspaceSlackAgentsAgentChannelsPathRoute,
  deleteWWorkspaceSqsTriggersDeletePathRoute,
  deleteWWorkspaceTrashDeleteIdRoute,
  deleteWWorkspaceUsersDeleteUsernameRoute,
  deleteWWorkspaceVariablesDeleteBulkRoute,
  deleteWWorkspaceVariablesDeletePathRoute,
  deleteWWorkspaceVolumesDeleteNameRoute,
  deleteWWorkspaceWebsocketTriggersDeletePathRoute,
  deleteWWorkspaceWorkspacesDeleteDatatableMigrationDatatableNameTimestampRoute,
  deleteWWorkspaceWorkspacesDeleteGitSyncRepositoryRoute,
  deleteWWorkspaceWorkspacesProtectionRulesRuleNameRoute,
  deleteWWorkspaceWorkspacesSlackOauthConfigRoute,
  getWWorkspaceAccessGetRoute,
  getWWorkspaceAclsGetKindPathRoute,
  getWWorkspaceAiEvalsCasesListPathRoute,
  getWWorkspaceAiEvalsDatasetsGetPathRoute,
  getWWorkspaceAiEvalsDatasetsListRoute,
  getWWorkspaceAiEvalsExperimentsListAllRoute,
  getWWorkspaceAiEvalsExperimentsResultsPathRoute,
  getWWorkspaceAiEvalsRunPayloadRoute,
  getWWorkspaceAiEvalsScorerDefaultsRoute,
  getWWorkspaceAiEvalsScorersRecentRoute,
  getWWorkspaceAiEvalsSubjectStateRoute,
  getWWorkspaceAiSessionsListRoute,
  getWWorkspaceAiSharedArtifactsGetIdRoute,
  getWWorkspaceAiSharedArtifactsListRoute,
  getWWorkspaceAiSharedArtifactsStatusRoute,
  getWWorkspaceAiSharedSessionsListRoute,
  getWWorkspaceAiSharedSessionsStatusRoute,
  getWWorkspaceAiUsageRoute,
  getWWorkspaceAiUSharedSessionsGetIdRoute,
  getWWorkspaceAmqpTriggersExistsPathRoute,
  getWWorkspaceAmqpTriggersGetPathRoute,
  getWWorkspaceAmqpTriggersListRoute,
  getWWorkspaceAppsCustomPathExistsCustomPathRoute,
  getWWorkspaceAppsEmbedTokenPPathRoute,
  getWWorkspaceAppsExistsPathRoute,
  getWWorkspaceAppsGetDataVSecretWithExtensionRoute,
  getWWorkspaceAppsGetLatestVersionPathRoute,
  getWWorkspaceAppsGetLitePathRoute,
  getWWorkspaceAppsGetPPathRoute,
  getWWorkspaceAppsGetVIdRoute,
  getWWorkspaceAppsHistoryPPathRoute,
  getWWorkspaceAppsListPathsFromWorkspaceRunnableRunnableKindPathRoute,
  getWWorkspaceAppsListRoute,
  getWWorkspaceAppsListSearchRoute,
  getWWorkspaceAppsSecretOfLatestVersionPathRoute,
  getWWorkspaceAppsSecretOfPathRoute,
  getWWorkspaceAppsUDownloadS3ParquetFileAsCsvPathRoute,
  getWWorkspaceAppsUEmbedTokenSecretRoute,
  getWWorkspaceAppsUGuestEntryPathRoute,
  getWWorkspaceAppsULoadCsvPreviewPathRoute,
  getWWorkspaceAppsULoadFileMetadataPathRoute,
  getWWorkspaceAppsULoadFilePreviewPathRoute,
  getWWorkspaceAppsULoadParquetPreviewPathRoute,
  getWWorkspaceAppsULoadTableCountPathRoute,
  getWWorkspaceAppsUPublicAppPathRoute,
  getWWorkspaceAppsUPublicResourcePathRoute,
  getWWorkspaceAssetsAssetSchemasRoute,
  getWWorkspaceAssetsColumnLineageRoute,
  getWWorkspaceAssetsGraphRoute,
  getWWorkspaceAssetsListFavoritesRoute,
  getWWorkspaceAssetsListRoute,
  getWWorkspaceAssetsMacrosRoute,
  getWWorkspaceAssetsPartitionsInRangeRoute,
  getWWorkspaceAssetsPartitionsRoute,
  getWWorkspaceAssetsPipelinesRoute,
  getWWorkspaceAuditGetIdRoute,
  getWWorkspaceAuditListRoute,
  getWWorkspaceAzureTriggersExistsPathRoute,
  getWWorkspaceAzureTriggersGetPathRoute,
  getWWorkspaceAzureTriggersListRoute,
  getWWorkspaceCaptureGetConfigsRunnableKindPathRoute,
  getWWorkspaceCaptureIdRoute,
  getWWorkspaceCaptureListRunnableKindPathRoute,
  getWWorkspaceConcurrencyGroupsListJobsRoute,
  getWWorkspaceDataMetricsListRoute,
  getWWorkspaceDbtWarehouseExistsNameRoute,
  getWWorkspaceDbtWarehouseNameRoute,
  getWWorkspaceDeploymentRequestEligibleDeployersRoute,
  getWWorkspaceDeploymentRequestOpenRoute,
  getWWorkspaceDraftsGetKindPathRoute,
  getWWorkspaceDraftsGetOwnKindPathRoute,
  getWWorkspaceDraftsListRoute,
  getWWorkspaceEmailTriggersExistsPathRoute,
  getWWorkspaceEmailTriggersGetPathRoute,
  getWWorkspaceEmailTriggersListRoute,
  getWWorkspaceEmbeddingsQueryResourceTypesRoute,
  getWWorkspaceFlowConversationsConversationIdMessagesRoute,
  getWWorkspaceFlowConversationsListRoute,
  getWWorkspaceFlowsDeploymentStatusPPathRoute,
  getWWorkspaceFlowsExistsPathRoute,
  getWWorkspaceFlowsGetLatestVersionPathRoute,
  getWWorkspaceFlowsGetPathRoute,
  getWWorkspaceFlowsGetTriggersCountPathRoute,
  getWWorkspaceFlowsGetVVersionRoute,
  getWWorkspaceFlowsHistoryPPathRoute,
  getWWorkspaceFlowsListPathsFromWorkspaceRunnableRunnableKindPathRoute,
  getWWorkspaceFlowsListPathsLinkingAgentPathRoute,
  getWWorkspaceFlowsListPathsRoute,
  getWWorkspaceFlowsListRoute,
  getWWorkspaceFlowsListSearchRoute,
  getWWorkspaceFlowsListTokensPathRoute,
  getWWorkspaceFoldersExistsNameRoute,
  getWWorkspaceFoldersGetNameRoute,
  getWWorkspaceFoldersGetusageNameRoute,
  getWWorkspaceFoldersHistoryGetNameRoute,
  getWWorkspaceFoldersListnamesRoute,
  getWWorkspaceFoldersListRoute,
  getWWorkspaceGcpTriggersExistsPathRoute,
  getWWorkspaceGcpTriggersGetPathRoute,
  getWWorkspaceGcpTriggersListRoute,
  getWWorkspaceGcpTriggersTopicsListPathRoute,
  getWWorkspaceGcpTriggersTopicsListRoute,
  getWWorkspaceGithubAppExportInstallationIdRoute,
  getWWorkspaceGithubAppRepoArchivePathRoute,
  getWWorkspaceGitSyncCredentialOriginRoute,
  getWWorkspaceGroupsGetNameRoute,
  getWWorkspaceGroupsHistoryGetNameRoute,
  getWWorkspaceGroupsListnamesRoute,
  getWWorkspaceGroupsListRoute,
  getWWorkspaceHttpTriggersExistsPathRoute,
  getWWorkspaceHttpTriggersGetPathRoute,
  getWWorkspaceHttpTriggersListRoute,
  getWWorkspaceHubProjectRoute,
  getWWorkspaceHubProjectsRoute,
  getWWorkspaceHubProjectsSlugExportRoute,
  getWWorkspaceInputsHistoryRoute,
  getWWorkspaceInputsJobOrInputIdArgsRoute,
  getWWorkspaceInputsListRoute,
  getWWorkspaceJobHelpersCheckS3FolderExistsRoute,
  getWWorkspaceJobHelpersDownloadS3FileRoute,
  getWWorkspaceJobHelpersDownloadS3ParquetFileAsCsvRoute,
  getWWorkspaceJobHelpersListGitRepoFilesRoute,
  getWWorkspaceJobHelpersListStoredFilesPagedRoute,
  getWWorkspaceJobHelpersListStoredFilesRoute,
  getWWorkspaceJobHelpersLoadCsvPreviewPathRoute,
  getWWorkspaceJobHelpersLoadFileMetadataRoute,
  getWWorkspaceJobHelpersLoadFilePreviewRoute,
  getWWorkspaceJobHelpersLoadGitRepoFileMetadataRoute,
  getWWorkspaceJobHelpersLoadGitRepoFilePreviewRoute,
  getWWorkspaceJobHelpersLoadParquetPreviewPathRoute,
  getWWorkspaceJobHelpersLoadTableCountPathRoute,
  getWWorkspaceJobHelpersMoveS3FileRoute,
  getWWorkspaceJobHelpersStorageUsageRoute,
  getWWorkspaceJobHelpersTestConnectionRoute,
  getWWorkspaceJobHelpersV2S3ProxyBucketRoute,
  getWWorkspaceJobMetricsGetProgressIdRoute,
  getWWorkspaceJobsAssetDispatchEdgesRoute,
  getWWorkspaceJobsCompletedCountJobsRoute,
  getWWorkspaceJobsCompletedCountRoute,
  getWWorkspaceJobsCompletedExportRoute,
  getWWorkspaceJobsCompletedListRoute,
  getWWorkspaceJobsDbtColumnLineageIdRoute,
  getWWorkspaceJobsDbtGraphIdRoute,
  getWWorkspaceJobsDbtResumableIdRoute,
  getWWorkspaceJobsDbtResumableScriptPPathRoute,
  getWWorkspaceJobsFlowApprovalStepDetailJobIdStepIdRoute,
  getWWorkspaceJobsFlowUserStatesIdKeyRoute,
  getWWorkspaceJobsGetOtelTracesIdRoute,
  getWWorkspaceJobsJobPublicViewTokenIdRoute,
  getWWorkspaceJobsJobSignatureIdResumeIdRoute,
  getWWorkspaceJobsJobViewTokenIdRoute,
  getWWorkspaceJobsListFilteredUuidsRoute,
  getWWorkspaceJobsListRoute,
  getWWorkspaceJobsOldestRoute,
  getWWorkspaceJobsQueueCountRoute,
  getWWorkspaceJobsQueueExportRoute,
  getWWorkspaceJobsQueueListFilteredUuidsRoute,
  getWWorkspaceJobsQueueListRoute,
  getWWorkspaceJobsQueuePositionScheduledForRoute,
  getWWorkspaceJobsQueueScheduledForIdRoute,
  getWWorkspaceJobsRecentRunsRoute,
  getWWorkspaceJobsResultByIdFlowJobIdNodeIdRoute,
  getWWorkspaceJobsResumeUrlsIdResumeIdRoute,
  getWWorkspaceJobsRunAndStreamFPathRoute,
  getWWorkspaceJobsRunAndStreamFvVersionRoute,
  getWWorkspaceJobsRunAndStreamHHashRoute,
  getWWorkspaceJobsRunAndStreamPPathRoute,
  getWWorkspaceJobsRunAssetsIdRoute,
  getWWorkspaceJobsRunProgressIdRoute,
  getWWorkspaceJobsRunWaitResultFvVersionRoute,
  getWWorkspaceJobsRunWaitResultPPathRoute,
  getWWorkspaceJobsSlackApprovalIdRoute,
  getWWorkspaceJobsTeamsApprovalIdRoute,
  getWWorkspaceJobsUCancelIdResumeIdSignatureRoute,
  getWWorkspaceJobsUCompletedGetIdRoute,
  getWWorkspaceJobsUCompletedGetResultIdRoute,
  getWWorkspaceJobsUCompletedGetResultMaybeIdRoute,
  getWWorkspaceJobsUCompletedGetTimingIdRoute,
  getWWorkspaceJobsUDispatchEventsIdRoute,
  getWWorkspaceJobsUFlowApprovalInfoJobIdRoute,
  getWWorkspaceJobsUGetArgsIdRoute,
  getWWorkspaceJobsUGetCompletedLogsTailIdRoute,
  getWWorkspaceJobsUGetFlowAllLogsIdRoute,
  getWWorkspaceJobsUGetFlowAllLogsStructuredIdRoute,
  getWWorkspaceJobsUGetFlowAllResultsIdRoute,
  getWWorkspaceJobsUGetFlowDebugInfoIdRoute,
  getWWorkspaceJobsUGetFlowIdResumeIdSignatureRoute,
  getWWorkspaceJobsUGetIdRoute,
  getWWorkspaceJobsUGetLogFilePathRoute,
  getWWorkspaceJobsUGetLogsIdRoute,
  getWWorkspaceJobsUGetRootJobIdIdRoute,
  getWWorkspaceJobsUGetupdateIdRoute,
  getWWorkspaceJobsUGetupdateSseIdRoute,
  getWWorkspaceJobsUResumeIdResumeIdSignatureRoute,
  getWWorkspaceJobsWacApprovalUrlsIdStepKeyRoute,
  getWWorkspaceJobsWorkerIsDrainingIdRoute,
  getWWorkspaceKafkaTriggersExistsPathRoute,
  getWWorkspaceKafkaTriggersGetPathRoute,
  getWWorkspaceKafkaTriggersListRoute,
  getWWorkspaceMqttTriggersExistsPathRoute,
  getWWorkspaceMqttTriggersGetPathRoute,
  getWWorkspaceMqttTriggersListRoute,
  getWWorkspaceNativeTriggersGithubReposRoute,
  getWWorkspaceNativeTriggersGoogleCalendarsRoute,
  getWWorkspaceNativeTriggersGoogleDriveFilesRoute,
  getWWorkspaceNativeTriggersGoogleDriveSharedDrivesRoute,
  getWWorkspaceNativeTriggersIntegrationsListRoute,
  getWWorkspaceNativeTriggersIntegrationsServiceNameConnectionsRoute,
  getWWorkspaceNativeTriggersIntegrationsServiceNameExistsRoute,
  getWWorkspaceNativeTriggersIntegrationsServiceNameInstanceSharingAvailableRoute,
  getWWorkspaceNativeTriggersNextcloudEventsRoute,
  getWWorkspaceNativeTriggersServiceNameExistsExternalIdRoute,
  getWWorkspaceNativeTriggersServiceNameGetExternalIdRoute,
  getWWorkspaceNativeTriggersServiceNameListRoute,
  getWWorkspaceNatsTriggersExistsPathRoute,
  getWWorkspaceNatsTriggersGetPathRoute,
  getWWorkspaceNatsTriggersListRoute,
  getWWorkspaceNpmProxyConfigRoute,
  getWWorkspaceNpmProxyFilePackageVersionFilepathRoute,
  getWWorkspaceNpmProxyFiletreePackageVersionRoute,
  getWWorkspaceNpmProxyMetadataPackageRoute,
  getWWorkspaceNpmProxyResolvePackageRoute,
  getWWorkspaceNpmProxyTarballPackageVersionRoute,
  getWWorkspacePathAutocompleteListPathsRoute,
  getWWorkspacePostgresTriggersExistsPathRoute,
  getWWorkspacePostgresTriggersGetPathRoute,
  getWWorkspacePostgresTriggersGetTemplateScriptIdRoute,
  getWWorkspacePostgresTriggersIsValidPostgresConfigurationPathRoute,
  getWWorkspacePostgresTriggersListRoute,
  getWWorkspacePostgresTriggersPostgresVersionPathRoute,
  getWWorkspacePostgresTriggersPublicationGetPublicationPathRoute,
  getWWorkspacePostgresTriggersPublicationListPathRoute,
  getWWorkspacePostgresTriggersSlotListPathRoute,
  getWWorkspaceRawAppsListRoute,
  getWWorkspaceRemoteDeployTargetRoute,
  getWWorkspaceResourcesExistsPathRoute,
  getWWorkspaceResourcesFileResourceTypeToFileExtMapRoute,
  getWWorkspaceResourcesGetPathRoute,
  getWWorkspaceResourcesGetValueInterpolatedPathRoute,
  getWWorkspaceResourcesGetValuePathRoute,
  getWWorkspaceResourcesGitCommitHashPathRoute,
  getWWorkspaceResourcesHistoryPPathRoute,
  getWWorkspaceResourcesHistoryVIdRoute,
  getWWorkspaceResourcesListNamesNameRoute,
  getWWorkspaceResourcesListRoute,
  getWWorkspaceResourcesListSearchRoute,
  getWWorkspaceResourcesMcpToolsPathRoute,
  getWWorkspaceResourcesTypeExistsPathRoute,
  getWWorkspaceResourcesTypeGetPathRoute,
  getWWorkspaceResourcesTypeHubInfoRoute,
  getWWorkspaceResourcesTypeListnamesRoute,
  getWWorkspaceResourcesTypeListRoute,
  getWWorkspaceResourcesTypeResourceCountsRoute,
  getWWorkspaceRunnablesCountsRoute,
  getWWorkspaceRunnablesListRoute,
  getWWorkspaceSchedulesExistsPathRoute,
  getWWorkspaceSchedulesGetPathRoute,
  getWWorkspaceSchedulesListRoute,
  getWWorkspaceSchedulesListWithJobsRoute,
  getWWorkspaceScriptsCiTestResultsKindPathRoute,
  getWWorkspaceScriptsDeploymentStatusHHashRoute,
  getWWorkspaceScriptsExistsPPathRoute,
  getWWorkspaceScriptsGetHHashRoute,
  getWWorkspaceScriptsGetLatestVersionPathRoute,
  getWWorkspaceScriptsGetPPathRoute,
  getWWorkspaceScriptsGetTriggersCountPathRoute,
  getWWorkspaceScriptsHistoryPPathRoute,
  getWWorkspaceScriptsListDedicatedWithDepsRoute,
  getWWorkspaceScriptsListPathsFromWorkspaceRunnablePathRoute,
  getWWorkspaceScriptsListPathsRoute,
  getWWorkspaceScriptsListRoute,
  getWWorkspaceScriptsListSearchRoute,
  getWWorkspaceScriptsListTokensPathRoute,
  getWWorkspaceScriptsRawHPathRoute,
  getWWorkspaceScriptsRawPPathRoute,
  getWWorkspaceSharedUiGetRoute,
  getWWorkspaceSharedUiListRoute,
  getWWorkspaceSharedUiVersionRoute,
  getWWorkspaceSlackAgentsAgentChannelsPathRoute,
  getWWorkspaceSlackAgentsAvailableChannelsRoute,
  getWWorkspaceSlackAgentsChannelsRoute,
  getWWorkspaceSlackAgentsStatusRoute,
  getWWorkspaceSqsTriggersExistsPathRoute,
  getWWorkspaceSqsTriggersGetPathRoute,
  getWWorkspaceSqsTriggersListRoute,
  getWWorkspaceTrashGetIdRoute,
  getWWorkspaceTrashListRoute,
  getWWorkspaceTriggersHistoryListRoute,
  getWWorkspaceUsersGetUsernameRoute,
  getWWorkspaceUsersIsOwnerPathRoute,
  getWWorkspaceUsersListAddableRoute,
  getWWorkspaceUsersListRoute,
  getWWorkspaceUsersListUsageRoute,
  getWWorkspaceUsersListUsernamesRoute,
  getWWorkspaceUsersOffboardPreviewUsernameRoute,
  getWWorkspaceUsersUsernameToEmailUsernameRoute,
  getWWorkspaceUsersWhoamiRoute,
  getWWorkspaceUsersWhoisUsernameRoute,
  getWWorkspaceVariablesExistsPathRoute,
  getWWorkspaceVariablesExternalSecretPrefixesRoute,
  getWWorkspaceVariablesGetPathRoute,
  getWWorkspaceVariablesGetValuePathRoute,
  getWWorkspaceVariablesListContextualRoute,
  getWWorkspaceVariablesListRoute,
  getWWorkspaceVolumesListRoute,
  getWWorkspaceVolumesStorageRoute,
  getWWorkspaceWebsocketTriggersExistsPathRoute,
  getWWorkspaceWebsocketTriggersGetPathRoute,
  getWWorkspaceWebsocketTriggersListRoute,
  getWWorkspaceWorkersCustomTagsRoute,
  getWWorkspaceWorkspaceDependenciesGetLatestLanguageRoute,
  getWWorkspaceWorkspaceDependenciesListRoute,
  getWWorkspaceWorkspacesAvailableTeamsChannelsRoute,
  getWWorkspaceWorkspacesAvailableTeamsIdsRoute,
  getWWorkspaceWorkspacesBillableSeatsRoute,
  getWWorkspaceWorkspacesCloudQuotasRoute,
  getWWorkspaceWorkspacesCompareTargetWorkspaceIdRoute,
  getWWorkspaceWorkspacesCriticalAlertsRoute,
  getWWorkspaceWorkspacesDatatableAclDatatableNameRoute,
  getWWorkspaceWorkspacesDatatableMigrationsStatusDatatableNameRoute,
  getWWorkspaceWorkspacesDatatablePermissionsDatatableNameRoute,
  getWWorkspaceWorkspacesDatatableUsableRolesDatatableNameRoute,
  getWWorkspaceWorkspacesDefaultAppRoute,
  getWWorkspaceWorkspacesDefaultScriptsRoute,
  getWWorkspaceWorkspacesEncryptionKeyRoute,
  getWWorkspaceWorkspacesForkCreationStatusCreationIdRoute,
  getWWorkspaceWorkspacesGetAsSuperadminRoute,
  getWWorkspaceWorkspacesGetCopilotInfoRoute,
  getWWorkspaceWorkspacesGetCopilotSettingsStateRoute,
  getWWorkspaceWorkspacesGetDatatableTableSchemaRoute,
  getWWorkspaceWorkspacesGetDependencyMapRoute,
  getWWorkspaceWorkspacesGetDependentsImportedPathRoute,
  getWWorkspaceWorkspacesGetDeployToRoute,
  getWWorkspaceWorkspacesGetDevWorkspaceRoute,
  getWWorkspaceWorkspacesGetImportsImporterPathRoute,
  getWWorkspaceWorkspacesGetPublicSettingsRoute,
  getWWorkspaceWorkspacesGetSecondaryStorageNamesRoute,
  getWWorkspaceWorkspacesGetSettingsRoute,
  getWWorkspaceWorkspacesGetWorkspaceNameRoute,
  getWWorkspaceWorkspacesGitSyncDeployModeRoute,
  getWWorkspaceWorkspacesGitSyncEnabledRoute,
  getWWorkspaceWorkspacesGuestUsageRoute,
  getWWorkspaceWorkspacesIsPremiumRoute,
  getWWorkspaceWorkspacesListDatatableMigrationsRoute,
  getWWorkspaceWorkspacesListDatatableSchemasRoute,
  getWWorkspaceWorkspacesListDatatablesRoute,
  getWWorkspaceWorkspacesListDatatableTablesRoute,
  getWWorkspaceWorkspacesListDucklakesRoute,
  getWWorkspaceWorkspacesListPendingInvitesRoute,
  getWWorkspaceWorkspacesListWsSpecificRoute,
  getWWorkspaceWorkspacesListWsSpecificVersionsRoute,
  getWWorkspaceWorkspacesPremiumInfoRoute,
  getWWorkspaceWorkspacesProtectionRulesRoute,
  getWWorkspaceWorkspacesRolesRoute,
  getWWorkspaceWorkspacesSettingsDocumentRoute,
  getWWorkspaceWorkspacesSlackOauthConfigRoute,
  getWWorkspaceWorkspacesTestDatatableConnectionDatatableNameRoute,
  getWWorkspaceWorkspacesThresholdAlertRoute,
  getWWorkspaceWorkspacesUsageRoute,
  getWWorkspaceWorkspacesUsedTriggersRoute,
  postWWorkspaceAclsAddKindPathRoute,
  postWWorkspaceAclsRemoveKindPathRoute,
  postWWorkspaceAiCompleteRoute,
  postWWorkspaceAiEvalsDatasetsCreateRoute,
  postWWorkspaceAiEvalsDatasetsDeletePathRoute,
  postWWorkspaceAiEvalsDatasetsUpdatePathRoute,
  postWWorkspaceAiEvalsExperimentsCollectRoute,
  postWWorkspaceAiEvalsExperimentsRunRoute,
  postWWorkspaceAiSessionsPullRoute,
  postWWorkspaceAiSessionsPushRoute,
  postWWorkspaceAiSessionToolsNameRoute,
  postWWorkspaceAiSharedArtifactsShareRoute,
  postWWorkspaceAiSharedSessionsSetPublicIdRoute,
  postWWorkspaceAiSharedSessionsShareRoute,
  postWWorkspaceAiUsageRoute,
  postWWorkspaceAiWebFetchRoute,
  postWWorkspaceAiWebSearchRoute,
  postWWorkspaceAmqpTriggersCreateRoute,
  postWWorkspaceAmqpTriggersSetmodePathRoute,
  postWWorkspaceAmqpTriggersTestRoute,
  postWWorkspaceAmqpTriggersUpdatePathRoute,
  postWWorkspaceAppsCreateRawRoute,
  postWWorkspaceAppsCreateRawSourceRoute,
  postWWorkspaceAppsCreateRoute,
  postWWorkspaceAppsHistoryUpdateAIdVVersionRoute,
  postWWorkspaceAppsPreviewSdkTokenRoute,
  postWWorkspaceAppsSignS3ObjectsRoute,
  postWWorkspaceAppsUExecuteComponentPathRoute,
  postWWorkspaceAppsUpdatePathRoute,
  postWWorkspaceAppsUpdateRawPathRoute,
  postWWorkspaceAppsUpdateRawSourcePathRoute,
  postWWorkspaceAppsUUploadS3FilePathRoute,
  postWWorkspaceAssetsListByUsagesRoute,
  postWWorkspaceAzureTriggersBasicTopicsListPathRoute,
  postWWorkspaceAzureTriggersCreateRoute,
  postWWorkspaceAzureTriggersNamespacesListPathRoute,
  postWWorkspaceAzureTriggersNamespacesSubscriptionsListPathRoute,
  postWWorkspaceAzureTriggersNamespacesTopicsListPathRoute,
  postWWorkspaceAzureTriggersSetmodePathRoute,
  postWWorkspaceAzureTriggersTestRoute,
  postWWorkspaceAzureTriggersUpdatePathRoute,
  postWWorkspaceCaptureMoveRunnableKindPathRoute,
  postWWorkspaceCapturePingConfigTriggerKindRunnableKindPathRoute,
  postWWorkspaceCaptureSetConfigRoute,
  postWWorkspaceDbtRunProgressRoute,
  postWWorkspaceDeploymentRequestIdCancelRoute,
  postWWorkspaceDeploymentRequestIdCloseMergedRoute,
  postWWorkspaceDeploymentRequestIdCommentRoute,
  postWWorkspaceDeploymentRequestRoute,
  postWWorkspaceDraftsDeleteForUserKindPathRoute,
  postWWorkspaceDraftsMigrateLegacyKindPathRoute,
  postWWorkspaceDraftsMoveKindPathRoute,
  postWWorkspaceDraftsTransferRoute,
  postWWorkspaceDraftsUpdateKindPathRoute,
  postWWorkspaceEmailTriggersCreateRoute,
  postWWorkspaceEmailTriggersLocalPartExistsRoute,
  postWWorkspaceEmailTriggersSetmodePathRoute,
  postWWorkspaceEmailTriggersUpdatePathRoute,
  postWWorkspaceFavoritesStarRoute,
  postWWorkspaceFavoritesUnstarRoute,
  postWWorkspaceFlowConversationsUpdateConversationIdRoute,
  postWWorkspaceFlowsArchivePathRoute,
  postWWorkspaceFlowsCreateRoute,
  postWWorkspaceFlowsHistoryUpdateVVersionRoute,
  postWWorkspaceFlowsToggleWorkspaceErrorHandlerPathRoute,
  postWWorkspaceFlowsUpdatePathRoute,
  postWWorkspaceFoldersAddownerNameRoute,
  postWWorkspaceFoldersCreateRoute,
  postWWorkspaceFoldersRemoveownerNameRoute,
  postWWorkspaceFoldersUpdateNameRoute,
  postWWorkspaceGcpTriggersCreateRoute,
  postWWorkspaceGcpTriggersSetmodePathRoute,
  postWWorkspaceGcpTriggersSubscriptionsListPathRoute,
  postWWorkspaceGcpTriggersSubscriptionsListRoute,
  postWWorkspaceGcpTriggersTestRoute,
  postWWorkspaceGcpTriggersUpdatePathRoute,
  postWWorkspaceGithubAppGhesInstallationCallbackRoute,
  postWWorkspaceGithubAppImportRoute,
  postWWorkspaceGithubAppInstallFromWorkspaceRoute,
  postWWorkspaceGithubAppTokenRoute,
  postWWorkspaceGitSyncCredentialRoute,
  postWWorkspaceGitSyncGitlabProjectsRoute,
  postWWorkspaceGroupsAdduserNameRoute,
  postWWorkspaceGroupsCreateRoute,
  postWWorkspaceGroupsRemoveuserNameRoute,
  postWWorkspaceGroupsUpdateNameRoute,
  postWWorkspaceHttpTriggersCreateManyRoute,
  postWWorkspaceHttpTriggersCreateRoute,
  postWWorkspaceHttpTriggersRouteExistsRoute,
  postWWorkspaceHttpTriggersSetmodePathRoute,
  postWWorkspaceHttpTriggersUpdatePathRoute,
  postWWorkspaceHubAppsRoute,
  postWWorkspaceHubFlowsFlowIdRecordingRoute,
  postWWorkspaceHubFlowsRoute,
  postWWorkspaceHubMigrationsRoute,
  postWWorkspaceHubProjectsSlugDiscardUpdateRoute,
  postWWorkspaceHubProjectsSlugLogoRoute,
  postWWorkspaceHubProjectsSlugPipelineRecordingRoute,
  postWWorkspaceHubProjectsSlugSubmitRoute,
  postWWorkspaceHubProjectsSlugWithdrawRoute,
  postWWorkspaceHubPublishDraftRoute,
  postWWorkspaceHubRawAppsIdRecordingRoute,
  postWWorkspaceHubRawAppsRoute,
  postWWorkspaceHubResourcesRoute,
  postWWorkspaceHubResourceTypesRoute,
  postWWorkspaceHubScriptsAskIdRecordingRoute,
  postWWorkspaceHubScriptsRoute,
  postWWorkspaceHubTriggersRoute,
  postWWorkspaceInputsCreateRoute,
  postWWorkspaceInputsDeleteInputRoute,
  postWWorkspaceInputsUpdateRoute,
  postWWorkspaceJobHelpersDuckdbConnectionSettingsRoute,
  postWWorkspaceJobHelpersPolarsConnectionSettingsRoute,
  postWWorkspaceJobHelpersUploadGitRepoFileToInstanceStorageRoute,
  postWWorkspaceJobHelpersUploadS3FileRoute,
  postWWorkspaceJobHelpersV2DuckdbConnectionSettingsRoute,
  postWWorkspaceJobHelpersV2PolarsConnectionSettingsRoute,
  postWWorkspaceJobHelpersV2S3ResourceInfoRoute,
  postWWorkspaceJobMetricsGetIdRoute,
  postWWorkspaceJobMetricsSetProgressIdRoute,
  postWWorkspaceJobsCompletedDeleteIdRoute,
  postWWorkspaceJobsCompletedImportRoute,
  postWWorkspaceJobsCompletedResolveRoute,
  postWWorkspaceJobsCompletedUnresolveRoute,
  postWWorkspaceJobsDeleteRoute,
  postWWorkspaceJobsFlowResumeIdRoute,
  postWWorkspaceJobsFlowUserStatesIdKeyRoute,
  postWWorkspaceJobsListSelectedJobGroupsRoute,
  postWWorkspaceJobsQueueCancelSelectionRoute,
  postWWorkspaceJobsQueueImportRoute,
  postWWorkspaceJobsQueueRunNowIdRoute,
  postWWorkspaceJobsRecentRunsHideRoute,
  postWWorkspaceJobsRecentRunsUnhideRoute,
  postWWorkspaceJobsRestartFIdRoute,
  postWWorkspaceJobsRunAgentPathRoute,
  postWWorkspaceJobsRunAndStreamFPathRoute,
  postWWorkspaceJobsRunAndStreamFvVersionRoute,
  postWWorkspaceJobsRunAndStreamHHashRoute,
  postWWorkspaceJobsRunAndStreamPPathRoute,
  postWWorkspaceJobsRunBatchRerunJobsRoute,
  postWWorkspaceJobsRunDependenciesAsyncRoute,
  postWWorkspaceJobsRunDependenciesRoute,
  postWWorkspaceJobsRunDynamicSelectRoute,
  postWWorkspaceJobsRunFlowDependenciesAsyncRoute,
  postWWorkspaceJobsRunFlowTestPathRoute,
  postWWorkspaceJobsRunFPathRoute,
  postWWorkspaceJobsRunFvVersionRoute,
  postWWorkspaceJobsRunHHashRoute,
  postWWorkspaceJobsRunInlineHHashRoute,
  postWWorkspaceJobsRunInlinePPathRoute,
  postWWorkspaceJobsRunInlinePreviewRoute,
  postWWorkspaceJobsRunPPathRoute,
  postWWorkspaceJobsRunPreviewFlowRoute,
  postWWorkspaceJobsRunPreviewRoute,
  postWWorkspaceJobsRunWaitResultFPathRoute,
  postWWorkspaceJobsRunWaitResultFvVersionRoute,
  postWWorkspaceJobsRunWaitResultPPathRoute,
  postWWorkspaceJobsRunWaitResultPreviewFlowRoute,
  postWWorkspaceJobsRunWaitResultPreviewRoute,
  postWWorkspaceJobsUCancelIdResumeIdSignatureRoute,
  postWWorkspaceJobsUFlowResumeSuspendedJobIdRoute,
  postWWorkspaceJobsUQueueCancelIdRoute,
  postWWorkspaceJobsUQueueCancelPersistentPathRoute,
  postWWorkspaceJobsUQueueForceCancelIdRoute,
  postWWorkspaceJobsUQueueGetStartedAtByIdsRoute,
  postWWorkspaceJobsUResumeIdResumeIdSignatureRoute,
  postWWorkspaceJobsWorkflowAsCodeJobIdEntrypointRoute,
  postWWorkspaceKafkaTriggersCommitOffsetsPathRoute,
  postWWorkspaceKafkaTriggersCreateRoute,
  postWWorkspaceKafkaTriggersResetOffsetsPathRoute,
  postWWorkspaceKafkaTriggersSetmodePathRoute,
  postWWorkspaceKafkaTriggersTestRoute,
  postWWorkspaceKafkaTriggersUpdatePathRoute,
  postWWorkspaceMqttTriggersCreateRoute,
  postWWorkspaceMqttTriggersSetmodePathRoute,
  postWWorkspaceMqttTriggersTestRoute,
  postWWorkspaceMqttTriggersUpdatePathRoute,
  postWWorkspaceNativeTriggersIntegrationsServiceNameCallbackRoute,
  postWWorkspaceNativeTriggersIntegrationsServiceNameCreateRoute,
  postWWorkspaceNativeTriggersIntegrationsServiceNameGenerateConnectUrlRoute,
  postWWorkspaceNativeTriggersIntegrationsServiceNameWorkspaceConnectionRoute,
  postWWorkspaceNativeTriggersServiceNameCreateRoute,
  postWWorkspaceNativeTriggersServiceNameSetenabledExternalIdRoute,
  postWWorkspaceNativeTriggersServiceNameSyncRoute,
  postWWorkspaceNativeTriggersServiceNameUpdateExternalIdRoute,
  postWWorkspaceNatsTriggersCreateRoute,
  postWWorkspaceNatsTriggersSetmodePathRoute,
  postWWorkspaceNatsTriggersTestRoute,
  postWWorkspaceNatsTriggersUpdatePathRoute,
  postWWorkspaceOauthConnectClientCredentialsClientRoute,
  postWWorkspaceOauthConnectSlackCallbackRoute,
  postWWorkspaceOauthCreateAccountRoute,
  postWWorkspaceOauthDisconnectIdRoute,
  postWWorkspaceOauthDisconnectSlackRoute,
  postWWorkspaceOauthDisconnectTeamsRoute,
  postWWorkspaceOauthRefreshTokenIdRoute,
  postWWorkspaceOidcTokenAudienceRoute,
  postWWorkspaceOpenapiDownloadRoute,
  postWWorkspaceOpenapiGenerateRoute,
  postWWorkspacePostgresTriggersCreateRoute,
  postWWorkspacePostgresTriggersCreateTemplateScriptRoute,
  postWWorkspacePostgresTriggersPublicationCreatePublicationPathRoute,
  postWWorkspacePostgresTriggersPublicationUpdatePublicationPathRoute,
  postWWorkspacePostgresTriggersSetmodePathRoute,
  postWWorkspacePostgresTriggersSlotCreatePathRoute,
  postWWorkspacePostgresTriggersTestRoute,
  postWWorkspacePostgresTriggersUpdatePathRoute,
  postWWorkspaceRemoteDeployConnectRoute,
  postWWorkspaceRemoteDeployDisconnectRoute,
  postWWorkspaceRemoteDeployTargetRoute,
  postWWorkspaceResourcesCreateRoute,
  postWWorkspaceResourcesHistoryRestoreVIdRoute,
  postWWorkspaceResourcesMcpCallToolPathRoute,
  postWWorkspaceResourcesTypeCreateRoute,
  postWWorkspaceResourcesTypeHubPickNameRoute,
  postWWorkspaceResourcesTypeUpdatePathRoute,
  postWWorkspaceResourcesUpdatePathRoute,
  postWWorkspaceResourcesUpdateValuePathRoute,
  postWWorkspaceSchedulesCreateRoute,
  postWWorkspaceSchedulesSetdefaulthandlerRoute,
  postWWorkspaceSchedulesSetenabledPathRoute,
  postWWorkspaceSchedulesUpdatePathRoute,
  postWWorkspaceScriptsArchiveHHashRoute,
  postWWorkspaceScriptsArchivePPathRoute,
  postWWorkspaceScriptsCheckSchemaContractsRoute,
  postWWorkspaceScriptsCiTestResultsBatchRoute,
  postWWorkspaceScriptsCreateRoute,
  postWWorkspaceScriptsDeleteHHashRoute,
  postWWorkspaceScriptsDeletePPathRoute,
  postWWorkspaceScriptsHistoryUpdateHHashPPathRoute,
  postWWorkspaceScriptsRawTempDiffRoute,
  postWWorkspaceScriptsRawTempStoreRoute,
  postWWorkspaceScriptsToggleWorkspaceErrorHandlerPPathRoute,
  postWWorkspaceScriptsTriggerCiTestsBatchRoute,
  postWWorkspaceScriptsUpdatePathRoute,
  postWWorkspaceSlackAgentsAgentChannelsPathRoute,
  postWWorkspaceSqsTriggersCreateRoute,
  postWWorkspaceSqsTriggersSetmodePathRoute,
  postWWorkspaceSqsTriggersTestRoute,
  postWWorkspaceSqsTriggersUpdatePathRoute,
  postWWorkspaceTrashEmptyRoute,
  postWWorkspaceTrashRestoreIdRoute,
  postWWorkspaceTriggerTriggerKindCancelSuspendedTriggerJobsTriggerPathRoute,
  postWWorkspaceTriggerTriggerKindResumeSuspendedTriggerJobsTriggerPathRoute,
  postWWorkspaceUsersConvertToGroupUsernameRoute,
  postWWorkspaceUsersExitImpersonationRoute,
  postWWorkspaceUsersImpersonateServiceAccountRoute,
  postWWorkspaceUsersOffboardUsernameRoute,
  postWWorkspaceUsersUpdateUsernameRoute,
  postWWorkspaceVariablesCreateRoute,
  postWWorkspaceVariablesEncryptRoute,
  postWWorkspaceVariablesUpdatePathRoute,
  postWWorkspaceVolumesCreateRoute,
  postWWorkspaceWebsocketTriggersCreateRoute,
  postWWorkspaceWebsocketTriggersSetmodePathRoute,
  postWWorkspaceWebsocketTriggersTestRoute,
  postWWorkspaceWebsocketTriggersUpdatePathRoute,
  postWWorkspaceWorkspaceDependenciesArchiveLanguageRoute,
  postWWorkspaceWorkspaceDependenciesCreateRoute,
  postWWorkspaceWorkspaceDependenciesDeleteLanguageRoute,
  postWWorkspaceWorkspacesAddUserRoute,
  postWWorkspaceWorkspacesArchiveRoute,
  postWWorkspaceWorkspacesAttachDevWorkspaceRoute,
  postWWorkspaceWorkspacesChangeWorkspaceColorRoute,
  postWWorkspaceWorkspacesChangeWorkspaceIdRoute,
  postWWorkspaceWorkspacesChangeWorkspaceNameRoute,
  postWWorkspaceWorkspacesConnectSlackRoute,
  postWWorkspaceWorkspacesConnectTeamsRoute,
  postWWorkspaceWorkspacesCreateDatatableMigrationDatatableNameRoute,
  postWWorkspaceWorkspacesCreateForkRoute,
  postWWorkspaceWorkspacesCreatePgDatabaseRoute,
  postWWorkspaceWorkspacesCreateServiceAccountRoute,
  postWWorkspaceWorkspacesCreateWorkspaceForkBranchRoute,
  postWWorkspaceWorkspacesCriticalAlertsAcknowledgeAllRoute,
  postWWorkspaceWorkspacesCriticalAlertsIdAcknowledgeRoute,
  postWWorkspaceWorkspacesCriticalAlertsMuteRoute,
  postWWorkspaceWorkspacesDatatableAclDatatableNameApplyRoute,
  postWWorkspaceWorkspacesDatatableAclDatatableNamePlanRoute,
  postWWorkspaceWorkspacesDatatablePermissionsDatatableNameRoute,
  postWWorkspaceWorkspacesDefaultScriptsRoute,
  postWWorkspaceWorkspacesDeleteInviteRoute,
  postWWorkspaceWorkspacesDetachDevWorkspaceRoute,
  postWWorkspaceWorkspacesDisableDatatableMigrationsDatatableNameRoute,
  postWWorkspaceWorkspacesDropForkedDatatableDatabasesRoute,
  postWWorkspaceWorkspacesDropForkedDucklakeNamespacesRoute,
  postWWorkspaceWorkspacesEditAddAdminsAndDevelopersToForksRoute,
  postWWorkspaceWorkspacesEditAutoInviteRoute,
  postWWorkspaceWorkspacesEditCopilotConfigRoute,
  postWWorkspaceWorkspacesEditDatatableConfigRoute,
  postWWorkspaceWorkspacesEditDbtWarehousesRoute,
  postWWorkspaceWorkspacesEditDefaultAppRoute,
  postWWorkspaceWorkspacesEditDeployUiConfigRoute,
  postWWorkspaceWorkspacesEditDucklakeConfigRoute,
  postWWorkspaceWorkspacesEditErrorHandlerRoute,
  postWWorkspaceWorkspacesEditGitSyncConfigRoute,
  postWWorkspaceWorkspacesEditGitSyncRepositoryRoute,
  postWWorkspaceWorkspacesEditGuestJwtKeyRoute,
  postWWorkspaceWorkspacesEditInstanceGroupsRoute,
  postWWorkspaceWorkspacesEditLargeFileStorageConfigRoute,
  postWWorkspaceWorkspacesEditSlackCommandRoute,
  postWWorkspaceWorkspacesEditSuccessHandlerRoute,
  postWWorkspaceWorkspacesEditTeamsCommandRoute,
  postWWorkspaceWorkspacesEditVariableExpirationHandlerRoute,
  postWWorkspaceWorkspacesEditWebhookRoute,
  postWWorkspaceWorkspacesEnableDatatableMigrationsDatatableNameRoute,
  postWWorkspaceWorkspacesEncryptionKeyRoute,
  postWWorkspaceWorkspacesExportPgSchemaRoute,
  postWWorkspaceWorkspacesGenerateInitialDatatableMigrationDatatableNameRoute,
  postWWorkspaceWorkspacesGetDatatableFullSchemaRoute,
  postWWorkspaceWorkspacesGetDependentsAmountsRoute,
  postWWorkspaceWorkspacesImportPgDatabaseRoute,
  postWWorkspaceWorkspacesInviteUserRoute,
  postWWorkspaceWorkspacesLeaveRoute,
  postWWorkspaceWorkspacesLogFeatureUsageRoute,
  postWWorkspaceWorkspacesOperatorSettingsRoute,
  postWWorkspaceWorkspacesProtectionRulesRoute,
  postWWorkspaceWorkspacesProtectionRulesRuleNameRoute,
  postWWorkspaceWorkspacesPruneVersionsRoute,
  postWWorkspaceWorkspacesPublicAppRateLimitRoute,
  postWWorkspaceWorkspacesRebuildDependencyMapRoute,
  postWWorkspaceWorkspacesResetDiffTallyForkWorkspaceIdRoute,
  postWWorkspaceWorkspacesRoleOverridesRoute,
  postWWorkspaceWorkspacesRollbackDatatableMigrationsDatatableNameRoute,
  postWWorkspaceWorkspacesRunDatatableMigrationsDatatableNameRoute,
  postWWorkspaceWorkspacesRunSlackMessageTestJobRoute,
  postWWorkspaceWorkspacesRunTeamsMessageTestJobRoute,
  postWWorkspaceWorkspacesSeedFullDiffTargetWorkspaceIdRoute,
  postWWorkspaceWorkspacesSetEnvironmentVariableRoute,
  postWWorkspaceWorkspacesSettingsDocumentRoute,
  postWWorkspaceWorkspacesSetWsSpecificRoute,
  postWWorkspaceWorkspacesSlackOauthConfigRoute,
  postWWorkspaceWorkspacesSlackSigningSecretRoute,
  postWWorkspaceWorkspacesThresholdAlertRoute,
  postWWorkspaceWorkspacesUpsertDatatableMigrationDatatableNameRoute,
  putWWorkspaceSharedUiRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wHandler = app
  .openapi(getWWorkspaceAuditGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAuditListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceTrashListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceTrashGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceTrashRestoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceTrashDeleteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceTrashEmptyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceUsersGetUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceUsersUpdateUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceUsersIsOwnerPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceUsersDeleteUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceUsersOffboardPreviewUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceUsersOffboardUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceUsersConvertToGroupUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetAsSuperadminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesCreateWorkspaceForkBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesCreateForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesForkCreationStatusCreationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesAttachDevWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDetachDevWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetDevWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceUsersWhoamiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGithubAppTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGithubAppRepoArchivePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGithubAppInstallFromWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceGithubAppInstallationInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGithubAppExportInstallationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGithubAppImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGitSyncGitlabProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGitSyncCredentialOriginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGitSyncCredentialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGithubAppGhesInstallationCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesInviteUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesAddUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesCreateServiceAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceUsersImpersonateServiceAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceUsersExitImpersonationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDeleteInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetWorkspaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesChangeWorkspaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesChangeWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesChangeWorkspaceColorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceUsersWhoisUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesOperatorSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesRoleOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesCompareTargetWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesSeedFullDiffTargetWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesResetDiffTallyForkWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesListPendingInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetPublicSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetDeployToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceRemoteDeployTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceRemoteDeployTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceRemoteDeployConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceRemoteDeployDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesIsPremiumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesBillableSeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesPremiumInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesThresholdAlertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesThresholdAlertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesRebuildDependencyMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetDependentsImportedPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetImportsImporterPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesGetDependentsAmountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetDependencyMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditSlackCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesSlackOauthConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesSlackOauthConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceWorkspacesSlackOauthConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesSlackSigningSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditTeamsCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesAvailableTeamsIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesAvailableTeamsChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesConnectTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesConnectSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesRunSlackMessageTestJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesRunTeamsMessageTestJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditAutoInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditInstanceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditCopilotConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesSettingsDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesSettingsDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetCopilotSettingsStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetCopilotInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditErrorHandlerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditVariableExpirationHandlerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditSuccessHandlerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditLargeFileStorageConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditDbtWarehousesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDbtRunProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceDbtWarehouseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceDbtWarehouseExistsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesListDucklakesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceDataMetricsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesListDatatablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesDatatablePermissionsDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDatatablePermissionsDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesDatatableAclDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDatatableAclDatatableNamePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDatatableAclDatatableNameApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesDatatableUsableRolesDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesListDatatableSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesTestDatatableConnectionDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesListDatatableTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetDatatableTableSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditDucklakeConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditDatatableConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesRunDatatableMigrationsDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesRollbackDatatableMigrationsDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesListDatatableMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesDatatableMigrationsStatusDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEnableDatatableMigrationsDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDisableDatatableMigrationsDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesCreateDatatableMigrationDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceWorkspacesDeleteDatatableMigrationDatatableNameTimestampRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesUpsertDatatableMigrationDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesGenerateInitialDatatableMigrationDatatableNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesCreatePgDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDropForkedDatatableDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDropForkedDucklakeNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesImportPgDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesExportPgSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesGetDatatableFullSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGitSyncEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGitSyncDeployModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditGitSyncConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditGitSyncRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceWorkspacesDeleteGitSyncRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditDeployUiConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditDefaultAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditAddAdminsAndDevelopersToForksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEditGuestJwtKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGuestUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesDefaultScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesDefaultScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesSetEnvironmentVariableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesEncryptionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesEncryptionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesDefaultAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesUsedTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceUsersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceUsersListAddableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceUsersListUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceUsersListUsernamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceUsersUsernameToEmailUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceOidcTokenAudienceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceVariablesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceVariablesEncryptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceVariablesExternalSecretPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceVariablesDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceVariablesDeleteBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceVariablesUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceVariablesGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceVariablesGetValuePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceVariablesExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceVariablesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceVariablesListContextualRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesGetSecondaryStorageNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesCriticalAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesCriticalAlertsIdAcknowledgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesCriticalAlertsAcknowledgeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesCriticalAlertsMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesProtectionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesProtectionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesProtectionRulesRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceWorkspacesProtectionRulesRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceDeploymentRequestEligibleDeployersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceDeploymentRequestOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDeploymentRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDeploymentRequestIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDeploymentRequestIdCloseMergedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDeploymentRequestIdCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesLogFeatureUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesCloudQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesPruneVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesListWsSpecificRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspacesListWsSpecificVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesSetWsSpecificRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspacesPublicAppRateLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceOauthConnectSlackCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceOauthCreateAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceOauthConnectClientCredentialsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceOauthRefreshTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceOauthDisconnectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceOauthDisconnectSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceOauthDisconnectTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceResourcesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceResourcesDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceResourcesDeleteBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceResourcesUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceResourcesUpdateValuePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesHistoryPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceResourcesHistoryPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesHistoryVIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceResourcesHistoryRestoreVIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesGetValueInterpolatedPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesGetValuePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesGitCommitHashPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesListSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesMcpToolsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceResourcesMcpCallToolPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesListNamesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceResourcesTypeCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesFileResourceTypeToFileExtMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceResourcesTypeDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceResourcesTypeUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesTypeGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesTypeExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesTypeListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesTypeListnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesTypeResourceCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceResourcesTypeHubInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceResourcesTypeHubPickNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNpmProxyConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNpmProxyMetadataPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNpmProxyResolvePackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNpmProxyFiletreePackageVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNpmProxyFilePackageVersionFilepathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNpmProxyTarballPackageVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceEmbeddingsQueryResourceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsListSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsListPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceDraftsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceDraftsGetKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceDraftsGetOwnKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDraftsUpdateKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDraftsDeleteForUserKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDraftsMoveKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDraftsTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceDraftsMigrateLegacyKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsToggleWorkspaceErrorHandlerPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkersCustomTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspaceDependenciesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspaceDependenciesArchiveLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWorkspaceDependenciesDeleteLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspaceDependenciesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWorkspaceDependenciesGetLatestLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsArchivePPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsArchiveHHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsDeleteHHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsDeletePPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceScriptsDeleteBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsGetPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsGetTriggersCountPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsListTokensPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsHistoryPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsListPathsFromWorkspaceRunnablePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsGetLatestVersionPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsHistoryUpdateHHashPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsListDedicatedWithDepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsRawPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsExistsPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsGetHHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsRawHPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsDeploymentStatusHHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsCiTestResultsKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsCiTestResultsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsTriggerCiTestsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsCheckSchemaContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsRawTempStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsRawTempDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsListSelectedJobGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunWaitResultPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRunWaitResultPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunWaitResultFPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunWaitResultFvVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRunWaitResultFvVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunAndStreamFPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRunAndStreamFPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunAndStreamFvVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRunAndStreamFvVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunAndStreamPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRunAndStreamPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunAndStreamHHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRunAndStreamHHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsResultByIdFlowJobIdNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsFlowApprovalStepDetailJobIdStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsJobViewTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsJobPublicViewTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsListPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsListSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceRunnablesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceRunnablesCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsHistoryPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsGetLatestVersionPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsListPathsFromWorkspaceRunnableRunnableKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsListPathsLinkingAgentPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsGetVVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFlowsHistoryUpdateVVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsDeploymentStatusPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsGetTriggersCountPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsListTokensPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFlowsToggleWorkspaceErrorHandlerPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowsExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFlowsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFlowsUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFlowsArchivePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceFlowsDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowConversationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSlackAgentsChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSlackAgentsAvailableChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSlackAgentsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSlackAgentsAgentChannelsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceSlackAgentsAgentChannelsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceSlackAgentsAgentChannelsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFlowConversationsUpdateConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceFlowConversationsDeleteConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFlowConversationsConversationIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiWebSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiWebFetchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiEvalsDatasetsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiEvalsDatasetsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiEvalsDatasetsGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiEvalsDatasetsUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiEvalsDatasetsDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiEvalsCasesListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiEvalsSubjectStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiEvalsRunPayloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiEvalsScorerDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiEvalsScorersRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiEvalsExperimentsRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiEvalsExperimentsCollectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiEvalsExperimentsListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiEvalsExperimentsResultsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePathAutocompleteListPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceRawAppsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSharedUiGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSharedUiListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSharedUiVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWWorkspaceSharedUiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiSessionToolsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiSessionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiSessionsPullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiSessionsPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiSharedArtifactsShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiSharedArtifactsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiSharedArtifactsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiSharedArtifactsGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceAiSharedArtifactsDeleteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiSharedSessionsShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiSharedSessionsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiSharedSessionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAiSharedSessionsSetPublicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAiUSharedSessionsGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceAiSharedSessionsOpenedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceAiSharedSessionsDeleteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsGetDataVSecretWithExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsListSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsCreateRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsGetPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsPreviewSdkTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsEmbedTokenPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsGetLitePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsHistoryPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsGetLatestVersionPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsListPathsFromWorkspaceRunnableRunnableKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsHistoryUpdateAIdVVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsUGuestEntryPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsUPublicAppPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsUEmbedTokenSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsUPublicResourcePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsSecretOfPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsSecretOfLatestVersionPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsGetVIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceAppsDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsCreateRawSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsUpdateRawSourcePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsUpdateRawPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsCustomPathExistsCustomPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsSignS3ObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsUExecuteComponentPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAppsUUploadS3FilePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceAppsUDeleteS3FileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsULoadFileMetadataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsULoadFilePreviewPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsULoadParquetPreviewPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsULoadCsvPreviewPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsULoadTableCountPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAppsUDownloadS3ParquetFileAsCsvPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunFPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunFvVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunBatchRerunJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRestartFIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunHHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunInlinePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunInlinePPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunInlineHHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunWaitResultPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsWorkflowAsCodeJobIdEntrypointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunDependenciesAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunFlowDependenciesAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunFlowTestPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunPreviewFlowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunAgentPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunWaitResultPreviewFlowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunDynamicSelectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsQueueListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsQueueCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsOldestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsCompletedCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsCompletedCountJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsListFilteredUuidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsQueueListFilteredUuidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsQueueRunNowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsQueueCancelSelectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsGetOtelTracesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceTriggerTriggerKindResumeSuspendedTriggerJobsTriggerPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceTriggerTriggerKindCancelSuspendedTriggerJobsTriggerPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsCompletedListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsCompletedExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsCompletedImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsQueueExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsQueueImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRecentRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRecentRunsHideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRecentRunsUnhideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetRootJobIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsWorkerIsDrainingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetLogsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetFlowAllLogsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetFlowAllLogsStructuredIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetFlowAllResultsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetCompletedLogsTailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetArgsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsUQueueGetStartedAtByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetupdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetupdateSseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetLogFilePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetFlowDebugInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUCompletedGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUCompletedGetResultIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUCompletedGetResultMaybeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUCompletedGetTimingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUDispatchEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsAssetDispatchEdgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsCompletedDeleteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsCompletedResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsCompletedUnresolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsUQueueCancelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsUQueueCancelPersistentPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsUQueueForceCancelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsQueuePositionScheduledForRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsQueueScheduledForIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsJobSignatureIdResumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsResumeUrlsIdResumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsWacApprovalUrlsIdStepKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsSlackApprovalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsTeamsApprovalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsUFlowResumeSuspendedJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUFlowApprovalInfoJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUResumeIdResumeIdSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsUResumeIdResumeIdSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsFlowUserStatesIdKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsFlowUserStatesIdKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsFlowResumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUCancelIdResumeIdSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsUCancelIdResumeIdSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetFlowIdResumeIdSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceSchedulesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceSchedulesUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceSchedulesSetenabledPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceSchedulesDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSchedulesGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSchedulesExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSchedulesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSchedulesListWithJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceSchedulesSetdefaulthandlerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceOpenapiGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceOpenapiDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHttpTriggersCreateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHttpTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHttpTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceHttpTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceHttpTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceHttpTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceHttpTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHttpTriggersRouteExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHttpTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWebsocketTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWebsocketTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceWebsocketTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWebsocketTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWebsocketTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceWebsocketTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWebsocketTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceWebsocketTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceKafkaTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceKafkaTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceKafkaTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceKafkaTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceKafkaTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceKafkaTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceKafkaTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceKafkaTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceKafkaTriggersResetOffsetsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceKafkaTriggersCommitOffsetsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNatsTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNatsTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceNatsTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNatsTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNatsTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNatsTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNatsTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNatsTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceSqsTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceSqsTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceSqsTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSqsTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSqsTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSqsTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceSqsTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceSqsTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersIntegrationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersIntegrationsServiceNameExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNativeTriggersIntegrationsServiceNameCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNativeTriggersIntegrationsServiceNameGenerateConnectUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersIntegrationsServiceNameInstanceSharingAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersIntegrationsServiceNameConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceNativeTriggersIntegrationsServiceNameConnectionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNativeTriggersIntegrationsServiceNameWorkspaceConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceNativeTriggersIntegrationsServiceNameDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNativeTriggersIntegrationsServiceNameCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNativeTriggersServiceNameCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNativeTriggersServiceNameUpdateExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersServiceNameGetExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceNativeTriggersServiceNameDeleteExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNativeTriggersServiceNameSetenabledExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersServiceNameListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersServiceNameExistsExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNativeTriggersServiceNameSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersNextcloudEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersGoogleCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersGoogleDriveFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersGoogleDriveSharedDrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersGithubReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceMqttTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceMqttTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceMqttTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceMqttTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceMqttTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceMqttTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceMqttTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceMqttTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAmqpTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAmqpTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceAmqpTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAmqpTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAmqpTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAmqpTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAmqpTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAmqpTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGcpTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGcpTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceGcpTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGcpTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGcpTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGcpTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGcpTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGcpTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceGcpTriggersSubscriptionsDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceGcpTriggersSubscriptionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGcpTriggersTopicsListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGcpTriggersTopicsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGcpTriggersSubscriptionsListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGcpTriggersSubscriptionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAzureTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAzureTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceAzureTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAzureTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAzureTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAzureTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAzureTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAzureTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAzureTriggersNamespacesTopicsListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAzureTriggersNamespacesSubscriptionsListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceAzureTriggersSubscriptionsDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAzureTriggersNamespacesListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAzureTriggersBasicTopicsListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePostgresTriggersPostgresVersionPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePostgresTriggersIsValidPostgresConfigurationPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspacePostgresTriggersCreateTemplateScriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePostgresTriggersGetTemplateScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePostgresTriggersSlotListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspacePostgresTriggersSlotCreatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspacePostgresTriggersSlotDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePostgresTriggersPublicationListPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePostgresTriggersPublicationGetPublicationPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspacePostgresTriggersPublicationCreatePublicationPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspacePostgresTriggersPublicationUpdatePublicationPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspacePostgresTriggersPublicationDeletePublicationPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspacePostgresTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspacePostgresTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspacePostgresTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePostgresTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePostgresTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspacePostgresTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspacePostgresTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspacePostgresTriggersTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceEmailTriggersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceEmailTriggersUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceEmailTriggersDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceEmailTriggersGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceEmailTriggersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceEmailTriggersExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceEmailTriggersLocalPartExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceEmailTriggersSetmodePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGroupsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGroupsListnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGroupsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGroupsUpdateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceGroupsDeleteNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGroupsGetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGroupsAdduserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceGroupsRemoveuserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceGroupsHistoryGetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceTriggersHistoryListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFoldersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFoldersListnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFoldersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFoldersUpdateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceFoldersDeleteNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFoldersGetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFoldersExistsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFoldersGetusageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFoldersAddownerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFoldersRemoveownerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceFoldersHistoryGetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAccessGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAclsGetKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAclsAddKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAclsRemoveKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceCaptureSetConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceCapturePingConfigTriggerKindRunnableKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceCaptureGetConfigsRunnableKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceCaptureListRunnableKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceCaptureMoveRunnableKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceCaptureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceCaptureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFavoritesStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceFavoritesUnstarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceInputsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceInputsJobOrInputIdArgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceInputsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceInputsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceInputsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceInputsDeleteInputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobHelpersDuckdbConnectionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobHelpersV2DuckdbConnectionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobHelpersPolarsConnectionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobHelpersV2PolarsConnectionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobHelpersV2S3ResourceInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersV2S3ProxyBucketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersTestConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersStorageUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersListStoredFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersListStoredFilesPagedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersLoadFileMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersLoadFilePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersListGitRepoFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersLoadGitRepoFilePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersLoadGitRepoFileMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersCheckS3FolderExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersLoadParquetPreviewPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersLoadTableCountPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersLoadCsvPreviewPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceJobHelpersDeleteS3FileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersMoveS3FileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobHelpersUploadS3FileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobHelpersUploadGitRepoFileToInstanceStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersDownloadS3FileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobHelpersDownloadS3ParquetFileAsCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobMetricsGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobMetricsSetProgressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobMetricsGetProgressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceConcurrencyGroupsListJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAssetsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAssetsListByUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAssetsListFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAssetsGraphRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAssetsColumnLineageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAssetsMacrosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAssetsPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAssetsPartitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsDbtResumableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsDbtResumableScriptPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsDbtGraphIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsDbtColumnLineageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRunProgressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRunAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAssetsPartitionsInRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAssetsAssetSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceVolumesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceVolumesStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceVolumesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceVolumesDeleteNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubPublishDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubRawAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubRawAppsIdRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubScriptsAskIdRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubFlowsFlowIdRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubProjectsSlugPipelineRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubResourceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceHubProjectsSlugExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubProjectsSlugLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubProjectsSlugSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubProjectsSlugWithdrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceHubProjectsSlugDiscardUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceHubProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceHubProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
