import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getWWorkspaceAuditGetIdRouteHandler: RouteHandler<
  typeof getWWorkspaceAuditGetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAuditListRouteHandler: RouteHandler<
  typeof getWWorkspaceAuditListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceTrashListRouteHandler: RouteHandler<
  typeof getWWorkspaceTrashListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceTrashGetIdRouteHandler: RouteHandler<
  typeof getWWorkspaceTrashGetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceTrashRestoreIdRouteHandler: RouteHandler<
  typeof postWWorkspaceTrashRestoreIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceTrashDeleteIdRouteHandler: RouteHandler<
  typeof deleteWWorkspaceTrashDeleteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceTrashEmptyRouteHandler: RouteHandler<
  typeof postWWorkspaceTrashEmptyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceUsersGetUsernameRouteHandler: RouteHandler<
  typeof getWWorkspaceUsersGetUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceUsersUpdateUsernameRouteHandler: RouteHandler<
  typeof postWWorkspaceUsersUpdateUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceUsersIsOwnerPathRouteHandler: RouteHandler<
  typeof getWWorkspaceUsersIsOwnerPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceUsersDeleteUsernameRouteHandler: RouteHandler<
  typeof deleteWWorkspaceUsersDeleteUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceUsersOffboardPreviewUsernameRouteHandler: RouteHandler<
  typeof getWWorkspaceUsersOffboardPreviewUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceUsersOffboardUsernameRouteHandler: RouteHandler<
  typeof postWWorkspaceUsersOffboardUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceUsersConvertToGroupUsernameRouteHandler: RouteHandler<
  typeof postWWorkspaceUsersConvertToGroupUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesGetAsSuperadminRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesGetAsSuperadminRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesCreateWorkspaceForkBranchRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesCreateWorkspaceForkBranchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesCreateForkRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesCreateForkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesForkCreationStatusCreationIdRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesForkCreationStatusCreationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesAttachDevWorkspaceRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesAttachDevWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesDetachDevWorkspaceRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesDetachDevWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesGetDevWorkspaceRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesGetDevWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceUsersWhoamiRouteHandler: RouteHandler<
  typeof getWWorkspaceUsersWhoamiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceGithubAppTokenRouteHandler: RouteHandler<
  typeof postWWorkspaceGithubAppTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceGithubAppRepoArchivePathRouteHandler: RouteHandler<
  typeof getWWorkspaceGithubAppRepoArchivePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceGithubAppInstallFromWorkspaceRouteHandler: RouteHandler<
  typeof postWWorkspaceGithubAppInstallFromWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceGithubAppInstallationInstallationIdRouteHandler: RouteHandler<
  typeof deleteWWorkspaceGithubAppInstallationInstallationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceGithubAppExportInstallationIdRouteHandler: RouteHandler<
  typeof getWWorkspaceGithubAppExportInstallationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceGithubAppImportRouteHandler: RouteHandler<
  typeof postWWorkspaceGithubAppImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceGitSyncGitlabProjectsRouteHandler: RouteHandler<
  typeof postWWorkspaceGitSyncGitlabProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceGitSyncCredentialOriginRouteHandler: RouteHandler<
  typeof getWWorkspaceGitSyncCredentialOriginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceGitSyncCredentialRouteHandler: RouteHandler<
  typeof postWWorkspaceGitSyncCredentialRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceGithubAppGhesInstallationCallbackRouteHandler: RouteHandler<
  typeof postWWorkspaceGithubAppGhesInstallationCallbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesInviteUserRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesInviteUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesAddUserRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesAddUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesCreateServiceAccountRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesCreateServiceAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceUsersImpersonateServiceAccountRouteHandler: RouteHandler<
  typeof postWWorkspaceUsersImpersonateServiceAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceUsersExitImpersonationRouteHandler: RouteHandler<
  typeof postWWorkspaceUsersExitImpersonationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesDeleteInviteRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesDeleteInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesArchiveRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesLeaveRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesLeaveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesGetWorkspaceNameRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesGetWorkspaceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesChangeWorkspaceNameRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesChangeWorkspaceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesChangeWorkspaceIdRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesChangeWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesChangeWorkspaceColorRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesChangeWorkspaceColorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceUsersWhoisUsernameRouteHandler: RouteHandler<
  typeof getWWorkspaceUsersWhoisUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesOperatorSettingsRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesOperatorSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesRolesRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesRoleOverridesRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesRoleOverridesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesCompareTargetWorkspaceIdRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesCompareTargetWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesSeedFullDiffTargetWorkspaceIdRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesSeedFullDiffTargetWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesResetDiffTallyForkWorkspaceIdRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesResetDiffTallyForkWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesListPendingInvitesRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesListPendingInvitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesGetPublicSettingsRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesGetPublicSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesGetSettingsRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesGetSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesGetDeployToRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesGetDeployToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceRemoteDeployTargetRouteHandler: RouteHandler<
  typeof getWWorkspaceRemoteDeployTargetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceRemoteDeployTargetRouteHandler: RouteHandler<
  typeof postWWorkspaceRemoteDeployTargetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceRemoteDeployConnectRouteHandler: RouteHandler<
  typeof postWWorkspaceRemoteDeployConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceRemoteDeployDisconnectRouteHandler: RouteHandler<
  typeof postWWorkspaceRemoteDeployDisconnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesIsPremiumRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesIsPremiumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesBillableSeatsRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesBillableSeatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesPremiumInfoRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesPremiumInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesThresholdAlertRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesThresholdAlertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesThresholdAlertRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesThresholdAlertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesRebuildDependencyMapRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesRebuildDependencyMapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesGetDependentsImportedPathRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesGetDependentsImportedPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesGetImportsImporterPathRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesGetImportsImporterPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesGetDependentsAmountsRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesGetDependentsAmountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesGetDependencyMapRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesGetDependencyMapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditSlackCommandRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditSlackCommandRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesSlackOauthConfigRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesSlackOauthConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesSlackOauthConfigRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesSlackOauthConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceWorkspacesSlackOauthConfigRouteHandler: RouteHandler<
  typeof deleteWWorkspaceWorkspacesSlackOauthConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesSlackSigningSecretRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesSlackSigningSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditTeamsCommandRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditTeamsCommandRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesAvailableTeamsIdsRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesAvailableTeamsIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesAvailableTeamsChannelsRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesAvailableTeamsChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesConnectTeamsRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesConnectTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesConnectSlackRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesConnectSlackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesRunSlackMessageTestJobRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesRunSlackMessageTestJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesRunTeamsMessageTestJobRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesRunTeamsMessageTestJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditAutoInviteRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditAutoInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditInstanceGroupsRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditInstanceGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditWebhookRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditCopilotConfigRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditCopilotConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesSettingsDocumentRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesSettingsDocumentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesSettingsDocumentRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesSettingsDocumentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesGetCopilotSettingsStateRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesGetCopilotSettingsStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesGetCopilotInfoRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesGetCopilotInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditErrorHandlerRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditErrorHandlerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditVariableExpirationHandlerRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditVariableExpirationHandlerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditSuccessHandlerRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditSuccessHandlerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditLargeFileStorageConfigRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditLargeFileStorageConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditDbtWarehousesRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditDbtWarehousesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceDbtRunProgressRouteHandler: RouteHandler<
  typeof postWWorkspaceDbtRunProgressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceDbtWarehouseNameRouteHandler: RouteHandler<
  typeof getWWorkspaceDbtWarehouseNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceDbtWarehouseExistsNameRouteHandler: RouteHandler<
  typeof getWWorkspaceDbtWarehouseExistsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesListDucklakesRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesListDucklakesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceDataMetricsListRouteHandler: RouteHandler<
  typeof getWWorkspaceDataMetricsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesListDatatablesRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesListDatatablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesDatatablePermissionsDatatableNameRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesDatatablePermissionsDatatableNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesDatatablePermissionsDatatableNameRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesDatatablePermissionsDatatableNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesDatatableAclDatatableNameRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesDatatableAclDatatableNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesDatatableAclDatatableNamePlanRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesDatatableAclDatatableNamePlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesDatatableAclDatatableNameApplyRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesDatatableAclDatatableNameApplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesDatatableUsableRolesDatatableNameRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesDatatableUsableRolesDatatableNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesListDatatableSchemasRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesListDatatableSchemasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesTestDatatableConnectionDatatableNameRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesTestDatatableConnectionDatatableNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesListDatatableTablesRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesListDatatableTablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesGetDatatableTableSchemaRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesGetDatatableTableSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditDucklakeConfigRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditDucklakeConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditDatatableConfigRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditDatatableConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesRunDatatableMigrationsDatatableNameRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesRunDatatableMigrationsDatatableNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesRollbackDatatableMigrationsDatatableNameRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesRollbackDatatableMigrationsDatatableNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesListDatatableMigrationsRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesListDatatableMigrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesDatatableMigrationsStatusDatatableNameRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesDatatableMigrationsStatusDatatableNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEnableDatatableMigrationsDatatableNameRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEnableDatatableMigrationsDatatableNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesDisableDatatableMigrationsDatatableNameRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesDisableDatatableMigrationsDatatableNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesCreateDatatableMigrationDatatableNameRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesCreateDatatableMigrationDatatableNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceWorkspacesDeleteDatatableMigrationDatatableNameTimestampRouteHandler: RouteHandler<
  typeof deleteWWorkspaceWorkspacesDeleteDatatableMigrationDatatableNameTimestampRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesUpsertDatatableMigrationDatatableNameRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesUpsertDatatableMigrationDatatableNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesGenerateInitialDatatableMigrationDatatableNameRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesGenerateInitialDatatableMigrationDatatableNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesCreatePgDatabaseRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesCreatePgDatabaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesDropForkedDatatableDatabasesRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesDropForkedDatatableDatabasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesDropForkedDucklakeNamespacesRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesDropForkedDucklakeNamespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesImportPgDatabaseRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesImportPgDatabaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesExportPgSchemaRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesExportPgSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesGetDatatableFullSchemaRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesGetDatatableFullSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesGitSyncEnabledRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesGitSyncEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesGitSyncDeployModeRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesGitSyncDeployModeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditGitSyncConfigRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditGitSyncConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditGitSyncRepositoryRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditGitSyncRepositoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceWorkspacesDeleteGitSyncRepositoryRouteHandler: RouteHandler<
  typeof deleteWWorkspaceWorkspacesDeleteGitSyncRepositoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditDeployUiConfigRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditDeployUiConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditDefaultAppRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditDefaultAppRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditAddAdminsAndDevelopersToForksRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditAddAdminsAndDevelopersToForksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEditGuestJwtKeyRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEditGuestJwtKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesGuestUsageRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesGuestUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesDefaultScriptsRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesDefaultScriptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesDefaultScriptsRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesDefaultScriptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesSetEnvironmentVariableRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesSetEnvironmentVariableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesEncryptionKeyRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesEncryptionKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesEncryptionKeyRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesEncryptionKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesDefaultAppRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesDefaultAppRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesUsageRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesUsedTriggersRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesUsedTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceUsersListRouteHandler: RouteHandler<
  typeof getWWorkspaceUsersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceUsersListAddableRouteHandler: RouteHandler<
  typeof getWWorkspaceUsersListAddableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceUsersListUsageRouteHandler: RouteHandler<
  typeof getWWorkspaceUsersListUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceUsersListUsernamesRouteHandler: RouteHandler<
  typeof getWWorkspaceUsersListUsernamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceUsersUsernameToEmailUsernameRouteHandler: RouteHandler<
  typeof getWWorkspaceUsersUsernameToEmailUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceOidcTokenAudienceRouteHandler: RouteHandler<
  typeof postWWorkspaceOidcTokenAudienceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceVariablesCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceVariablesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceVariablesEncryptRouteHandler: RouteHandler<
  typeof postWWorkspaceVariablesEncryptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceVariablesExternalSecretPrefixesRouteHandler: RouteHandler<
  typeof getWWorkspaceVariablesExternalSecretPrefixesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceVariablesDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceVariablesDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceVariablesDeleteBulkRouteHandler: RouteHandler<
  typeof deleteWWorkspaceVariablesDeleteBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceVariablesUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceVariablesUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceVariablesGetPathRouteHandler: RouteHandler<
  typeof getWWorkspaceVariablesGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceVariablesGetValuePathRouteHandler: RouteHandler<
  typeof getWWorkspaceVariablesGetValuePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceVariablesExistsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceVariablesExistsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceVariablesListRouteHandler: RouteHandler<
  typeof getWWorkspaceVariablesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceVariablesListContextualRouteHandler: RouteHandler<
  typeof getWWorkspaceVariablesListContextualRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesGetSecondaryStorageNamesRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesGetSecondaryStorageNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesCriticalAlertsRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesCriticalAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesCriticalAlertsIdAcknowledgeRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesCriticalAlertsIdAcknowledgeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesCriticalAlertsAcknowledgeAllRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesCriticalAlertsAcknowledgeAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesCriticalAlertsMuteRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesCriticalAlertsMuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesProtectionRulesRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesProtectionRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesProtectionRulesRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesProtectionRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesProtectionRulesRuleNameRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesProtectionRulesRuleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceWorkspacesProtectionRulesRuleNameRouteHandler: RouteHandler<
  typeof deleteWWorkspaceWorkspacesProtectionRulesRuleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceDeploymentRequestEligibleDeployersRouteHandler: RouteHandler<
  typeof getWWorkspaceDeploymentRequestEligibleDeployersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceDeploymentRequestOpenRouteHandler: RouteHandler<
  typeof getWWorkspaceDeploymentRequestOpenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceDeploymentRequestRouteHandler: RouteHandler<
  typeof postWWorkspaceDeploymentRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceDeploymentRequestIdCancelRouteHandler: RouteHandler<
  typeof postWWorkspaceDeploymentRequestIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceDeploymentRequestIdCloseMergedRouteHandler: RouteHandler<
  typeof postWWorkspaceDeploymentRequestIdCloseMergedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceDeploymentRequestIdCommentRouteHandler: RouteHandler<
  typeof postWWorkspaceDeploymentRequestIdCommentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesLogFeatureUsageRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesLogFeatureUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesCloudQuotasRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesCloudQuotasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesPruneVersionsRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesPruneVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesListWsSpecificRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesListWsSpecificRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspacesListWsSpecificVersionsRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspacesListWsSpecificVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesSetWsSpecificRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesSetWsSpecificRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspacesPublicAppRateLimitRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspacesPublicAppRateLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceOauthConnectSlackCallbackRouteHandler: RouteHandler<
  typeof postWWorkspaceOauthConnectSlackCallbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceOauthCreateAccountRouteHandler: RouteHandler<
  typeof postWWorkspaceOauthCreateAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceOauthConnectClientCredentialsClientRouteHandler: RouteHandler<
  typeof postWWorkspaceOauthConnectClientCredentialsClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceOauthRefreshTokenIdRouteHandler: RouteHandler<
  typeof postWWorkspaceOauthRefreshTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceOauthDisconnectIdRouteHandler: RouteHandler<
  typeof postWWorkspaceOauthDisconnectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceOauthDisconnectSlackRouteHandler: RouteHandler<
  typeof postWWorkspaceOauthDisconnectSlackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceOauthDisconnectTeamsRouteHandler: RouteHandler<
  typeof postWWorkspaceOauthDisconnectTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceResourcesCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceResourcesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceResourcesDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceResourcesDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceResourcesDeleteBulkRouteHandler: RouteHandler<
  typeof deleteWWorkspaceResourcesDeleteBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceResourcesUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceResourcesUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceResourcesUpdateValuePathRouteHandler: RouteHandler<
  typeof postWWorkspaceResourcesUpdateValuePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesHistoryPPathRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesHistoryPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceResourcesHistoryPPathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceResourcesHistoryPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesHistoryVIdRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesHistoryVIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceResourcesHistoryRestoreVIdRouteHandler: RouteHandler<
  typeof postWWorkspaceResourcesHistoryRestoreVIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesGetPathRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesGetValueInterpolatedPathRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesGetValueInterpolatedPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesGetValuePathRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesGetValuePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesGitCommitHashPathRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesGitCommitHashPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesExistsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesExistsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesListRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesListSearchRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesListSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesMcpToolsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesMcpToolsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceResourcesMcpCallToolPathRouteHandler: RouteHandler<
  typeof postWWorkspaceResourcesMcpCallToolPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesListNamesNameRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesListNamesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceResourcesTypeCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceResourcesTypeCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesFileResourceTypeToFileExtMapRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesFileResourceTypeToFileExtMapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceResourcesTypeDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceResourcesTypeDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceResourcesTypeUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceResourcesTypeUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesTypeGetPathRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesTypeGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesTypeExistsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesTypeExistsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesTypeListRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesTypeListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesTypeListnamesRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesTypeListnamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesTypeResourceCountsRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesTypeResourceCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceResourcesTypeHubInfoRouteHandler: RouteHandler<
  typeof getWWorkspaceResourcesTypeHubInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceResourcesTypeHubPickNameRouteHandler: RouteHandler<
  typeof postWWorkspaceResourcesTypeHubPickNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNpmProxyConfigRouteHandler: RouteHandler<
  typeof getWWorkspaceNpmProxyConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNpmProxyMetadataPackageRouteHandler: RouteHandler<
  typeof getWWorkspaceNpmProxyMetadataPackageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNpmProxyResolvePackageRouteHandler: RouteHandler<
  typeof getWWorkspaceNpmProxyResolvePackageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNpmProxyFiletreePackageVersionRouteHandler: RouteHandler<
  typeof getWWorkspaceNpmProxyFiletreePackageVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNpmProxyFilePackageVersionFilepathRouteHandler: RouteHandler<
  typeof getWWorkspaceNpmProxyFilePackageVersionFilepathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNpmProxyTarballPackageVersionRouteHandler: RouteHandler<
  typeof getWWorkspaceNpmProxyTarballPackageVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceEmbeddingsQueryResourceTypesRouteHandler: RouteHandler<
  typeof getWWorkspaceEmbeddingsQueryResourceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceScriptsListSearchRouteHandler: RouteHandler<
  typeof getWWorkspaceScriptsListSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceScriptsListRouteHandler: RouteHandler<
  typeof getWWorkspaceScriptsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceScriptsListPathsRouteHandler: RouteHandler<
  typeof getWWorkspaceScriptsListPathsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceDraftsListRouteHandler: RouteHandler<
  typeof getWWorkspaceDraftsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceDraftsGetKindPathRouteHandler: RouteHandler<
  typeof getWWorkspaceDraftsGetKindPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceDraftsGetOwnKindPathRouteHandler: RouteHandler<
  typeof getWWorkspaceDraftsGetOwnKindPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceDraftsUpdateKindPathRouteHandler: RouteHandler<
  typeof postWWorkspaceDraftsUpdateKindPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceDraftsDeleteForUserKindPathRouteHandler: RouteHandler<
  typeof postWWorkspaceDraftsDeleteForUserKindPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceDraftsMoveKindPathRouteHandler: RouteHandler<
  typeof postWWorkspaceDraftsMoveKindPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceDraftsTransferRouteHandler: RouteHandler<
  typeof postWWorkspaceDraftsTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceDraftsMigrateLegacyKindPathRouteHandler: RouteHandler<
  typeof postWWorkspaceDraftsMigrateLegacyKindPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceScriptsCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceScriptsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceScriptsUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceScriptsUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceScriptsToggleWorkspaceErrorHandlerPPathRouteHandler: RouteHandler<
  typeof postWWorkspaceScriptsToggleWorkspaceErrorHandlerPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkersCustomTagsRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkersCustomTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspaceDependenciesCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspaceDependenciesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspaceDependenciesArchiveLanguageRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspaceDependenciesArchiveLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWorkspaceDependenciesDeleteLanguageRouteHandler: RouteHandler<
  typeof postWWorkspaceWorkspaceDependenciesDeleteLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspaceDependenciesListRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspaceDependenciesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWorkspaceDependenciesGetLatestLanguageRouteHandler: RouteHandler<
  typeof getWWorkspaceWorkspaceDependenciesGetLatestLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceScriptsArchivePPathRouteHandler: RouteHandler<
  typeof postWWorkspaceScriptsArchivePPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceScriptsArchiveHHashRouteHandler: RouteHandler<
  typeof postWWorkspaceScriptsArchiveHHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceScriptsDeleteHHashRouteHandler: RouteHandler<
  typeof postWWorkspaceScriptsDeleteHHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceScriptsDeletePPathRouteHandler: RouteHandler<
  typeof postWWorkspaceScriptsDeletePPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceScriptsDeleteBulkRouteHandler: RouteHandler<
  typeof deleteWWorkspaceScriptsDeleteBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceScriptsGetPPathRouteHandler: RouteHandler<
  typeof getWWorkspaceScriptsGetPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceScriptsGetTriggersCountPathRouteHandler: RouteHandler<
  typeof getWWorkspaceScriptsGetTriggersCountPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceScriptsListTokensPathRouteHandler: RouteHandler<
  typeof getWWorkspaceScriptsListTokensPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceScriptsHistoryPPathRouteHandler: RouteHandler<
  typeof getWWorkspaceScriptsHistoryPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceScriptsListPathsFromWorkspaceRunnablePathRouteHandler: RouteHandler<
  typeof getWWorkspaceScriptsListPathsFromWorkspaceRunnablePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceScriptsGetLatestVersionPathRouteHandler: RouteHandler<
  typeof getWWorkspaceScriptsGetLatestVersionPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceScriptsHistoryUpdateHHashPPathRouteHandler: RouteHandler<
  typeof postWWorkspaceScriptsHistoryUpdateHHashPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceScriptsListDedicatedWithDepsRouteHandler: RouteHandler<
  typeof getWWorkspaceScriptsListDedicatedWithDepsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceScriptsRawPPathRouteHandler: RouteHandler<
  typeof getWWorkspaceScriptsRawPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceScriptsExistsPPathRouteHandler: RouteHandler<
  typeof getWWorkspaceScriptsExistsPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceScriptsGetHHashRouteHandler: RouteHandler<
  typeof getWWorkspaceScriptsGetHHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceScriptsRawHPathRouteHandler: RouteHandler<
  typeof getWWorkspaceScriptsRawHPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceScriptsDeploymentStatusHHashRouteHandler: RouteHandler<
  typeof getWWorkspaceScriptsDeploymentStatusHHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceScriptsCiTestResultsKindPathRouteHandler: RouteHandler<
  typeof getWWorkspaceScriptsCiTestResultsKindPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceScriptsCiTestResultsBatchRouteHandler: RouteHandler<
  typeof postWWorkspaceScriptsCiTestResultsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceScriptsTriggerCiTestsBatchRouteHandler: RouteHandler<
  typeof postWWorkspaceScriptsTriggerCiTestsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceScriptsCheckSchemaContractsRouteHandler: RouteHandler<
  typeof postWWorkspaceScriptsCheckSchemaContractsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceScriptsRawTempStoreRouteHandler: RouteHandler<
  typeof postWWorkspaceScriptsRawTempStoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceScriptsRawTempDiffRouteHandler: RouteHandler<
  typeof postWWorkspaceScriptsRawTempDiffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsListSelectedJobGroupsRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsListSelectedJobGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunPPathRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunWaitResultPPathRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunWaitResultPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsRunWaitResultPPathRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsRunWaitResultPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunWaitResultFPathRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunWaitResultFPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunWaitResultFvVersionRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunWaitResultFvVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsRunWaitResultFvVersionRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsRunWaitResultFvVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunAndStreamFPathRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunAndStreamFPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsRunAndStreamFPathRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsRunAndStreamFPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunAndStreamFvVersionRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunAndStreamFvVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsRunAndStreamFvVersionRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsRunAndStreamFvVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunAndStreamPPathRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunAndStreamPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsRunAndStreamPPathRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsRunAndStreamPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunAndStreamHHashRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunAndStreamHHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsRunAndStreamHHashRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsRunAndStreamHHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsResultByIdFlowJobIdNodeIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsResultByIdFlowJobIdNodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsFlowApprovalStepDetailJobIdStepIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsFlowApprovalStepDetailJobIdStepIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsJobViewTokenIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsJobViewTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsJobPublicViewTokenIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsJobPublicViewTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFlowsListPathsRouteHandler: RouteHandler<
  typeof getWWorkspaceFlowsListPathsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFlowsListSearchRouteHandler: RouteHandler<
  typeof getWWorkspaceFlowsListSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceRunnablesListRouteHandler: RouteHandler<
  typeof getWWorkspaceRunnablesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceRunnablesCountsRouteHandler: RouteHandler<
  typeof getWWorkspaceRunnablesCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFlowsListRouteHandler: RouteHandler<
  typeof getWWorkspaceFlowsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFlowsHistoryPPathRouteHandler: RouteHandler<
  typeof getWWorkspaceFlowsHistoryPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFlowsGetLatestVersionPathRouteHandler: RouteHandler<
  typeof getWWorkspaceFlowsGetLatestVersionPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFlowsListPathsFromWorkspaceRunnableRunnableKindPathRouteHandler: RouteHandler<
  typeof getWWorkspaceFlowsListPathsFromWorkspaceRunnableRunnableKindPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFlowsListPathsLinkingAgentPathRouteHandler: RouteHandler<
  typeof getWWorkspaceFlowsListPathsLinkingAgentPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFlowsGetVVersionRouteHandler: RouteHandler<
  typeof getWWorkspaceFlowsGetVVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceFlowsHistoryUpdateVVersionRouteHandler: RouteHandler<
  typeof postWWorkspaceFlowsHistoryUpdateVVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFlowsGetPathRouteHandler: RouteHandler<
  typeof getWWorkspaceFlowsGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFlowsDeploymentStatusPPathRouteHandler: RouteHandler<
  typeof getWWorkspaceFlowsDeploymentStatusPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFlowsGetTriggersCountPathRouteHandler: RouteHandler<
  typeof getWWorkspaceFlowsGetTriggersCountPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFlowsListTokensPathRouteHandler: RouteHandler<
  typeof getWWorkspaceFlowsListTokensPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceFlowsToggleWorkspaceErrorHandlerPathRouteHandler: RouteHandler<
  typeof postWWorkspaceFlowsToggleWorkspaceErrorHandlerPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFlowsExistsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceFlowsExistsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceFlowsCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceFlowsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceFlowsUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceFlowsUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceFlowsArchivePathRouteHandler: RouteHandler<
  typeof postWWorkspaceFlowsArchivePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceFlowsDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceFlowsDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFlowConversationsListRouteHandler: RouteHandler<
  typeof getWWorkspaceFlowConversationsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceSlackAgentsChannelsRouteHandler: RouteHandler<
  typeof getWWorkspaceSlackAgentsChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceSlackAgentsAvailableChannelsRouteHandler: RouteHandler<
  typeof getWWorkspaceSlackAgentsAvailableChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceSlackAgentsStatusRouteHandler: RouteHandler<
  typeof getWWorkspaceSlackAgentsStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceSlackAgentsAgentChannelsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceSlackAgentsAgentChannelsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceSlackAgentsAgentChannelsPathRouteHandler: RouteHandler<
  typeof postWWorkspaceSlackAgentsAgentChannelsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceSlackAgentsAgentChannelsPathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceSlackAgentsAgentChannelsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceFlowConversationsUpdateConversationIdRouteHandler: RouteHandler<
  typeof postWWorkspaceFlowConversationsUpdateConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceFlowConversationsDeleteConversationIdRouteHandler: RouteHandler<
  typeof deleteWWorkspaceFlowConversationsDeleteConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFlowConversationsConversationIdMessagesRouteHandler: RouteHandler<
  typeof getWWorkspaceFlowConversationsConversationIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAiCompleteRouteHandler: RouteHandler<
  typeof postWWorkspaceAiCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAiWebSearchRouteHandler: RouteHandler<
  typeof postWWorkspaceAiWebSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAiWebFetchRouteHandler: RouteHandler<
  typeof postWWorkspaceAiWebFetchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAiEvalsDatasetsListRouteHandler: RouteHandler<
  typeof getWWorkspaceAiEvalsDatasetsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAiEvalsDatasetsCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceAiEvalsDatasetsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAiEvalsDatasetsGetPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAiEvalsDatasetsGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAiEvalsDatasetsUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceAiEvalsDatasetsUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAiEvalsDatasetsDeletePathRouteHandler: RouteHandler<
  typeof postWWorkspaceAiEvalsDatasetsDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAiEvalsCasesListPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAiEvalsCasesListPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAiEvalsSubjectStateRouteHandler: RouteHandler<
  typeof getWWorkspaceAiEvalsSubjectStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAiEvalsRunPayloadRouteHandler: RouteHandler<
  typeof getWWorkspaceAiEvalsRunPayloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAiEvalsScorerDefaultsRouteHandler: RouteHandler<
  typeof getWWorkspaceAiEvalsScorerDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAiEvalsScorersRecentRouteHandler: RouteHandler<
  typeof getWWorkspaceAiEvalsScorersRecentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAiEvalsExperimentsRunRouteHandler: RouteHandler<
  typeof postWWorkspaceAiEvalsExperimentsRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAiEvalsExperimentsCollectRouteHandler: RouteHandler<
  typeof postWWorkspaceAiEvalsExperimentsCollectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAiEvalsExperimentsListAllRouteHandler: RouteHandler<
  typeof getWWorkspaceAiEvalsExperimentsListAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAiEvalsExperimentsResultsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAiEvalsExperimentsResultsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspacePathAutocompleteListPathsRouteHandler: RouteHandler<
  typeof getWWorkspacePathAutocompleteListPathsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceRawAppsListRouteHandler: RouteHandler<
  typeof getWWorkspaceRawAppsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceSharedUiGetRouteHandler: RouteHandler<
  typeof getWWorkspaceSharedUiGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceSharedUiListRouteHandler: RouteHandler<
  typeof getWWorkspaceSharedUiListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceSharedUiVersionRouteHandler: RouteHandler<
  typeof getWWorkspaceSharedUiVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWWorkspaceSharedUiRouteHandler: RouteHandler<
  typeof putWWorkspaceSharedUiRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAiUsageRouteHandler: RouteHandler<
  typeof postWWorkspaceAiUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAiUsageRouteHandler: RouteHandler<
  typeof getWWorkspaceAiUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAiSessionToolsNameRouteHandler: RouteHandler<
  typeof postWWorkspaceAiSessionToolsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAiSessionsListRouteHandler: RouteHandler<
  typeof getWWorkspaceAiSessionsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAiSessionsPullRouteHandler: RouteHandler<
  typeof postWWorkspaceAiSessionsPullRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAiSessionsPushRouteHandler: RouteHandler<
  typeof postWWorkspaceAiSessionsPushRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAiSharedArtifactsShareRouteHandler: RouteHandler<
  typeof postWWorkspaceAiSharedArtifactsShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAiSharedArtifactsStatusRouteHandler: RouteHandler<
  typeof getWWorkspaceAiSharedArtifactsStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAiSharedArtifactsListRouteHandler: RouteHandler<
  typeof getWWorkspaceAiSharedArtifactsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAiSharedArtifactsGetIdRouteHandler: RouteHandler<
  typeof getWWorkspaceAiSharedArtifactsGetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceAiSharedArtifactsDeleteIdRouteHandler: RouteHandler<
  typeof deleteWWorkspaceAiSharedArtifactsDeleteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAiSharedSessionsShareRouteHandler: RouteHandler<
  typeof postWWorkspaceAiSharedSessionsShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAiSharedSessionsStatusRouteHandler: RouteHandler<
  typeof getWWorkspaceAiSharedSessionsStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAiSharedSessionsListRouteHandler: RouteHandler<
  typeof getWWorkspaceAiSharedSessionsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAiSharedSessionsSetPublicIdRouteHandler: RouteHandler<
  typeof postWWorkspaceAiSharedSessionsSetPublicIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAiUSharedSessionsGetIdRouteHandler: RouteHandler<
  typeof getWWorkspaceAiUSharedSessionsGetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceAiSharedSessionsOpenedIdRouteHandler: RouteHandler<
  typeof deleteWWorkspaceAiSharedSessionsOpenedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceAiSharedSessionsDeleteIdRouteHandler: RouteHandler<
  typeof deleteWWorkspaceAiSharedSessionsDeleteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsGetDataVSecretWithExtensionRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsGetDataVSecretWithExtensionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsListSearchRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsListSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsListRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAppsCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceAppsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAppsCreateRawRouteHandler: RouteHandler<
  typeof postWWorkspaceAppsCreateRawRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsExistsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsExistsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsGetPPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsGetPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAppsPreviewSdkTokenRouteHandler: RouteHandler<
  typeof postWWorkspaceAppsPreviewSdkTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsEmbedTokenPPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsEmbedTokenPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsGetLitePathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsGetLitePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsHistoryPPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsHistoryPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsGetLatestVersionPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsGetLatestVersionPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsListPathsFromWorkspaceRunnableRunnableKindPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsListPathsFromWorkspaceRunnableRunnableKindPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAppsHistoryUpdateAIdVVersionRouteHandler: RouteHandler<
  typeof postWWorkspaceAppsHistoryUpdateAIdVVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsUGuestEntryPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsUGuestEntryPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsUPublicAppPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsUPublicAppPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsUEmbedTokenSecretRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsUEmbedTokenSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsUPublicResourcePathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsUPublicResourcePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsSecretOfPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsSecretOfPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsSecretOfLatestVersionPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsSecretOfLatestVersionPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsGetVIdRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsGetVIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceAppsDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceAppsDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAppsUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceAppsUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAppsCreateRawSourceRouteHandler: RouteHandler<
  typeof postWWorkspaceAppsCreateRawSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAppsUpdateRawSourcePathRouteHandler: RouteHandler<
  typeof postWWorkspaceAppsUpdateRawSourcePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAppsUpdateRawPathRouteHandler: RouteHandler<
  typeof postWWorkspaceAppsUpdateRawPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsCustomPathExistsCustomPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsCustomPathExistsCustomPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAppsSignS3ObjectsRouteHandler: RouteHandler<
  typeof postWWorkspaceAppsSignS3ObjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAppsUExecuteComponentPathRouteHandler: RouteHandler<
  typeof postWWorkspaceAppsUExecuteComponentPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAppsUUploadS3FilePathRouteHandler: RouteHandler<
  typeof postWWorkspaceAppsUUploadS3FilePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceAppsUDeleteS3FileRouteHandler: RouteHandler<
  typeof deleteWWorkspaceAppsUDeleteS3FileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsULoadFileMetadataPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsULoadFileMetadataPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsULoadFilePreviewPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsULoadFilePreviewPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsULoadParquetPreviewPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsULoadParquetPreviewPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsULoadCsvPreviewPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsULoadCsvPreviewPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsULoadTableCountPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsULoadTableCountPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAppsUDownloadS3ParquetFileAsCsvPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAppsUDownloadS3ParquetFileAsCsvPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunFPathRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunFPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunFvVersionRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunFvVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunBatchRerunJobsRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunBatchRerunJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRestartFIdRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRestartFIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunHHashRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunHHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunPreviewRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunInlinePreviewRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunInlinePreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunInlinePPathRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunInlinePPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunInlineHHashRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunInlineHHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunWaitResultPreviewRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunWaitResultPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsWorkflowAsCodeJobIdEntrypointRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsWorkflowAsCodeJobIdEntrypointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunDependenciesRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunDependenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunDependenciesAsyncRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunDependenciesAsyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunFlowDependenciesAsyncRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunFlowDependenciesAsyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunFlowTestPathRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunFlowTestPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunPreviewFlowRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunPreviewFlowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunAgentPathRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunAgentPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunWaitResultPreviewFlowRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunWaitResultPreviewFlowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRunDynamicSelectRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRunDynamicSelectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsQueueListRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsQueueListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsQueueCountRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsQueueCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsOldestRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsOldestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsCompletedCountRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsCompletedCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsCompletedCountJobsRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsCompletedCountJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsListFilteredUuidsRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsListFilteredUuidsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsQueueListFilteredUuidsRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsQueueListFilteredUuidsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsQueueRunNowIdRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsQueueRunNowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsQueueCancelSelectionRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsQueueCancelSelectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsGetOtelTracesIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsGetOtelTracesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceTriggerTriggerKindResumeSuspendedTriggerJobsTriggerPathRouteHandler: RouteHandler<
  typeof postWWorkspaceTriggerTriggerKindResumeSuspendedTriggerJobsTriggerPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceTriggerTriggerKindCancelSuspendedTriggerJobsTriggerPathRouteHandler: RouteHandler<
  typeof postWWorkspaceTriggerTriggerKindCancelSuspendedTriggerJobsTriggerPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsCompletedListRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsCompletedListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsCompletedExportRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsCompletedExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsCompletedImportRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsCompletedImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsQueueExportRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsQueueExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsQueueImportRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsQueueImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsDeleteRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsRecentRunsRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsRecentRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRecentRunsHideRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRecentRunsHideRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsRecentRunsUnhideRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsRecentRunsUnhideRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsListRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUGetIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUGetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUGetRootJobIdIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUGetRootJobIdIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsWorkerIsDrainingIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsWorkerIsDrainingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUGetLogsIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUGetLogsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUGetFlowAllLogsIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUGetFlowAllLogsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUGetFlowAllLogsStructuredIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUGetFlowAllLogsStructuredIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUGetFlowAllResultsIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUGetFlowAllResultsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUGetCompletedLogsTailIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUGetCompletedLogsTailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUGetArgsIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUGetArgsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsUQueueGetStartedAtByIdsRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsUQueueGetStartedAtByIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUGetupdateIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUGetupdateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUGetupdateSseIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUGetupdateSseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUGetLogFilePathRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUGetLogFilePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUGetFlowDebugInfoIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUGetFlowDebugInfoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUCompletedGetIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUCompletedGetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUCompletedGetResultIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUCompletedGetResultIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUCompletedGetResultMaybeIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUCompletedGetResultMaybeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUCompletedGetTimingIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUCompletedGetTimingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUDispatchEventsIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUDispatchEventsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsAssetDispatchEdgesRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsAssetDispatchEdgesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsCompletedDeleteIdRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsCompletedDeleteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsCompletedResolveRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsCompletedResolveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsCompletedUnresolveRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsCompletedUnresolveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsUQueueCancelIdRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsUQueueCancelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsUQueueCancelPersistentPathRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsUQueueCancelPersistentPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsUQueueForceCancelIdRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsUQueueForceCancelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsQueuePositionScheduledForRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsQueuePositionScheduledForRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsQueueScheduledForIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsQueueScheduledForIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsJobSignatureIdResumeIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsJobSignatureIdResumeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsResumeUrlsIdResumeIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsResumeUrlsIdResumeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsWacApprovalUrlsIdStepKeyRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsWacApprovalUrlsIdStepKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsSlackApprovalIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsSlackApprovalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsTeamsApprovalIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsTeamsApprovalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsUFlowResumeSuspendedJobIdRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsUFlowResumeSuspendedJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUFlowApprovalInfoJobIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUFlowApprovalInfoJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUResumeIdResumeIdSignatureRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUResumeIdResumeIdSignatureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsUResumeIdResumeIdSignatureRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsUResumeIdResumeIdSignatureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsFlowUserStatesIdKeyRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsFlowUserStatesIdKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsFlowUserStatesIdKeyRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsFlowUserStatesIdKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsFlowResumeIdRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsFlowResumeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUCancelIdResumeIdSignatureRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUCancelIdResumeIdSignatureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobsUCancelIdResumeIdSignatureRouteHandler: RouteHandler<
  typeof postWWorkspaceJobsUCancelIdResumeIdSignatureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsUGetFlowIdResumeIdSignatureRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsUGetFlowIdResumeIdSignatureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceSchedulesCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceSchedulesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceSchedulesUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceSchedulesUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceSchedulesSetenabledPathRouteHandler: RouteHandler<
  typeof postWWorkspaceSchedulesSetenabledPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceSchedulesDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceSchedulesDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceSchedulesGetPathRouteHandler: RouteHandler<
  typeof getWWorkspaceSchedulesGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceSchedulesExistsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceSchedulesExistsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceSchedulesListRouteHandler: RouteHandler<
  typeof getWWorkspaceSchedulesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceSchedulesListWithJobsRouteHandler: RouteHandler<
  typeof getWWorkspaceSchedulesListWithJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceSchedulesSetdefaulthandlerRouteHandler: RouteHandler<
  typeof postWWorkspaceSchedulesSetdefaulthandlerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceOpenapiGenerateRouteHandler: RouteHandler<
  typeof postWWorkspaceOpenapiGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceOpenapiDownloadRouteHandler: RouteHandler<
  typeof postWWorkspaceOpenapiDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHttpTriggersCreateManyRouteHandler: RouteHandler<
  typeof postWWorkspaceHttpTriggersCreateManyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHttpTriggersCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceHttpTriggersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHttpTriggersUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceHttpTriggersUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceHttpTriggersDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceHttpTriggersDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceHttpTriggersGetPathRouteHandler: RouteHandler<
  typeof getWWorkspaceHttpTriggersGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceHttpTriggersListRouteHandler: RouteHandler<
  typeof getWWorkspaceHttpTriggersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceHttpTriggersExistsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceHttpTriggersExistsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHttpTriggersRouteExistsRouteHandler: RouteHandler<
  typeof postWWorkspaceHttpTriggersRouteExistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHttpTriggersSetmodePathRouteHandler: RouteHandler<
  typeof postWWorkspaceHttpTriggersSetmodePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWebsocketTriggersCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceWebsocketTriggersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWebsocketTriggersUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceWebsocketTriggersUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceWebsocketTriggersDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceWebsocketTriggersDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWebsocketTriggersGetPathRouteHandler: RouteHandler<
  typeof getWWorkspaceWebsocketTriggersGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWebsocketTriggersListRouteHandler: RouteHandler<
  typeof getWWorkspaceWebsocketTriggersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceWebsocketTriggersExistsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceWebsocketTriggersExistsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWebsocketTriggersSetmodePathRouteHandler: RouteHandler<
  typeof postWWorkspaceWebsocketTriggersSetmodePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceWebsocketTriggersTestRouteHandler: RouteHandler<
  typeof postWWorkspaceWebsocketTriggersTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceKafkaTriggersCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceKafkaTriggersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceKafkaTriggersUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceKafkaTriggersUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceKafkaTriggersDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceKafkaTriggersDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceKafkaTriggersGetPathRouteHandler: RouteHandler<
  typeof getWWorkspaceKafkaTriggersGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceKafkaTriggersListRouteHandler: RouteHandler<
  typeof getWWorkspaceKafkaTriggersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceKafkaTriggersExistsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceKafkaTriggersExistsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceKafkaTriggersSetmodePathRouteHandler: RouteHandler<
  typeof postWWorkspaceKafkaTriggersSetmodePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceKafkaTriggersTestRouteHandler: RouteHandler<
  typeof postWWorkspaceKafkaTriggersTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceKafkaTriggersResetOffsetsPathRouteHandler: RouteHandler<
  typeof postWWorkspaceKafkaTriggersResetOffsetsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceKafkaTriggersCommitOffsetsPathRouteHandler: RouteHandler<
  typeof postWWorkspaceKafkaTriggersCommitOffsetsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceNatsTriggersCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceNatsTriggersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceNatsTriggersUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceNatsTriggersUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceNatsTriggersDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceNatsTriggersDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNatsTriggersGetPathRouteHandler: RouteHandler<
  typeof getWWorkspaceNatsTriggersGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNatsTriggersListRouteHandler: RouteHandler<
  typeof getWWorkspaceNatsTriggersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNatsTriggersExistsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceNatsTriggersExistsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceNatsTriggersSetmodePathRouteHandler: RouteHandler<
  typeof postWWorkspaceNatsTriggersSetmodePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceNatsTriggersTestRouteHandler: RouteHandler<
  typeof postWWorkspaceNatsTriggersTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceSqsTriggersCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceSqsTriggersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceSqsTriggersUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceSqsTriggersUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceSqsTriggersDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceSqsTriggersDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceSqsTriggersGetPathRouteHandler: RouteHandler<
  typeof getWWorkspaceSqsTriggersGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceSqsTriggersListRouteHandler: RouteHandler<
  typeof getWWorkspaceSqsTriggersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceSqsTriggersExistsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceSqsTriggersExistsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceSqsTriggersSetmodePathRouteHandler: RouteHandler<
  typeof postWWorkspaceSqsTriggersSetmodePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceSqsTriggersTestRouteHandler: RouteHandler<
  typeof postWWorkspaceSqsTriggersTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNativeTriggersIntegrationsListRouteHandler: RouteHandler<
  typeof getWWorkspaceNativeTriggersIntegrationsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNativeTriggersIntegrationsServiceNameExistsRouteHandler: RouteHandler<
  typeof getWWorkspaceNativeTriggersIntegrationsServiceNameExistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceNativeTriggersIntegrationsServiceNameCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceNativeTriggersIntegrationsServiceNameCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceNativeTriggersIntegrationsServiceNameGenerateConnectUrlRouteHandler: RouteHandler<
  typeof postWWorkspaceNativeTriggersIntegrationsServiceNameGenerateConnectUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNativeTriggersIntegrationsServiceNameInstanceSharingAvailableRouteHandler: RouteHandler<
  typeof getWWorkspaceNativeTriggersIntegrationsServiceNameInstanceSharingAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNativeTriggersIntegrationsServiceNameConnectionsRouteHandler: RouteHandler<
  typeof getWWorkspaceNativeTriggersIntegrationsServiceNameConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceNativeTriggersIntegrationsServiceNameConnectionsDeleteRouteHandler: RouteHandler<
  typeof deleteWWorkspaceNativeTriggersIntegrationsServiceNameConnectionsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceNativeTriggersIntegrationsServiceNameWorkspaceConnectionRouteHandler: RouteHandler<
  typeof postWWorkspaceNativeTriggersIntegrationsServiceNameWorkspaceConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceNativeTriggersIntegrationsServiceNameDeleteRouteHandler: RouteHandler<
  typeof deleteWWorkspaceNativeTriggersIntegrationsServiceNameDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceNativeTriggersIntegrationsServiceNameCallbackRouteHandler: RouteHandler<
  typeof postWWorkspaceNativeTriggersIntegrationsServiceNameCallbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceNativeTriggersServiceNameCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceNativeTriggersServiceNameCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceNativeTriggersServiceNameUpdateExternalIdRouteHandler: RouteHandler<
  typeof postWWorkspaceNativeTriggersServiceNameUpdateExternalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNativeTriggersServiceNameGetExternalIdRouteHandler: RouteHandler<
  typeof getWWorkspaceNativeTriggersServiceNameGetExternalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceNativeTriggersServiceNameDeleteExternalIdRouteHandler: RouteHandler<
  typeof deleteWWorkspaceNativeTriggersServiceNameDeleteExternalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceNativeTriggersServiceNameSetenabledExternalIdRouteHandler: RouteHandler<
  typeof postWWorkspaceNativeTriggersServiceNameSetenabledExternalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNativeTriggersServiceNameListRouteHandler: RouteHandler<
  typeof getWWorkspaceNativeTriggersServiceNameListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNativeTriggersServiceNameExistsExternalIdRouteHandler: RouteHandler<
  typeof getWWorkspaceNativeTriggersServiceNameExistsExternalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceNativeTriggersServiceNameSyncRouteHandler: RouteHandler<
  typeof postWWorkspaceNativeTriggersServiceNameSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNativeTriggersNextcloudEventsRouteHandler: RouteHandler<
  typeof getWWorkspaceNativeTriggersNextcloudEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNativeTriggersGoogleCalendarsRouteHandler: RouteHandler<
  typeof getWWorkspaceNativeTriggersGoogleCalendarsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNativeTriggersGoogleDriveFilesRouteHandler: RouteHandler<
  typeof getWWorkspaceNativeTriggersGoogleDriveFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNativeTriggersGoogleDriveSharedDrivesRouteHandler: RouteHandler<
  typeof getWWorkspaceNativeTriggersGoogleDriveSharedDrivesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceNativeTriggersGithubReposRouteHandler: RouteHandler<
  typeof getWWorkspaceNativeTriggersGithubReposRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceMqttTriggersCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceMqttTriggersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceMqttTriggersUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceMqttTriggersUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceMqttTriggersDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceMqttTriggersDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceMqttTriggersGetPathRouteHandler: RouteHandler<
  typeof getWWorkspaceMqttTriggersGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceMqttTriggersListRouteHandler: RouteHandler<
  typeof getWWorkspaceMqttTriggersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceMqttTriggersExistsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceMqttTriggersExistsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceMqttTriggersSetmodePathRouteHandler: RouteHandler<
  typeof postWWorkspaceMqttTriggersSetmodePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceMqttTriggersTestRouteHandler: RouteHandler<
  typeof postWWorkspaceMqttTriggersTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAmqpTriggersCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceAmqpTriggersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAmqpTriggersUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceAmqpTriggersUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceAmqpTriggersDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceAmqpTriggersDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAmqpTriggersGetPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAmqpTriggersGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAmqpTriggersListRouteHandler: RouteHandler<
  typeof getWWorkspaceAmqpTriggersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAmqpTriggersExistsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAmqpTriggersExistsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAmqpTriggersSetmodePathRouteHandler: RouteHandler<
  typeof postWWorkspaceAmqpTriggersSetmodePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAmqpTriggersTestRouteHandler: RouteHandler<
  typeof postWWorkspaceAmqpTriggersTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceGcpTriggersCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceGcpTriggersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceGcpTriggersUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceGcpTriggersUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceGcpTriggersDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceGcpTriggersDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceGcpTriggersGetPathRouteHandler: RouteHandler<
  typeof getWWorkspaceGcpTriggersGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceGcpTriggersListRouteHandler: RouteHandler<
  typeof getWWorkspaceGcpTriggersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceGcpTriggersExistsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceGcpTriggersExistsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceGcpTriggersSetmodePathRouteHandler: RouteHandler<
  typeof postWWorkspaceGcpTriggersSetmodePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceGcpTriggersTestRouteHandler: RouteHandler<
  typeof postWWorkspaceGcpTriggersTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceGcpTriggersSubscriptionsDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceGcpTriggersSubscriptionsDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceGcpTriggersSubscriptionsDeleteRouteHandler: RouteHandler<
  typeof deleteWWorkspaceGcpTriggersSubscriptionsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceGcpTriggersTopicsListPathRouteHandler: RouteHandler<
  typeof getWWorkspaceGcpTriggersTopicsListPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceGcpTriggersTopicsListRouteHandler: RouteHandler<
  typeof getWWorkspaceGcpTriggersTopicsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceGcpTriggersSubscriptionsListPathRouteHandler: RouteHandler<
  typeof postWWorkspaceGcpTriggersSubscriptionsListPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceGcpTriggersSubscriptionsListRouteHandler: RouteHandler<
  typeof postWWorkspaceGcpTriggersSubscriptionsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAzureTriggersCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceAzureTriggersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAzureTriggersUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceAzureTriggersUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceAzureTriggersDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceAzureTriggersDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAzureTriggersGetPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAzureTriggersGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAzureTriggersListRouteHandler: RouteHandler<
  typeof getWWorkspaceAzureTriggersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAzureTriggersExistsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAzureTriggersExistsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAzureTriggersSetmodePathRouteHandler: RouteHandler<
  typeof postWWorkspaceAzureTriggersSetmodePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAzureTriggersTestRouteHandler: RouteHandler<
  typeof postWWorkspaceAzureTriggersTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAzureTriggersNamespacesTopicsListPathRouteHandler: RouteHandler<
  typeof postWWorkspaceAzureTriggersNamespacesTopicsListPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAzureTriggersNamespacesSubscriptionsListPathRouteHandler: RouteHandler<
  typeof postWWorkspaceAzureTriggersNamespacesSubscriptionsListPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceAzureTriggersSubscriptionsDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceAzureTriggersSubscriptionsDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAzureTriggersNamespacesListPathRouteHandler: RouteHandler<
  typeof postWWorkspaceAzureTriggersNamespacesListPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAzureTriggersBasicTopicsListPathRouteHandler: RouteHandler<
  typeof postWWorkspaceAzureTriggersBasicTopicsListPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspacePostgresTriggersPostgresVersionPathRouteHandler: RouteHandler<
  typeof getWWorkspacePostgresTriggersPostgresVersionPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspacePostgresTriggersIsValidPostgresConfigurationPathRouteHandler: RouteHandler<
  typeof getWWorkspacePostgresTriggersIsValidPostgresConfigurationPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspacePostgresTriggersCreateTemplateScriptRouteHandler: RouteHandler<
  typeof postWWorkspacePostgresTriggersCreateTemplateScriptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspacePostgresTriggersGetTemplateScriptIdRouteHandler: RouteHandler<
  typeof getWWorkspacePostgresTriggersGetTemplateScriptIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspacePostgresTriggersSlotListPathRouteHandler: RouteHandler<
  typeof getWWorkspacePostgresTriggersSlotListPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspacePostgresTriggersSlotCreatePathRouteHandler: RouteHandler<
  typeof postWWorkspacePostgresTriggersSlotCreatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspacePostgresTriggersSlotDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspacePostgresTriggersSlotDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspacePostgresTriggersPublicationListPathRouteHandler: RouteHandler<
  typeof getWWorkspacePostgresTriggersPublicationListPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspacePostgresTriggersPublicationGetPublicationPathRouteHandler: RouteHandler<
  typeof getWWorkspacePostgresTriggersPublicationGetPublicationPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspacePostgresTriggersPublicationCreatePublicationPathRouteHandler: RouteHandler<
  typeof postWWorkspacePostgresTriggersPublicationCreatePublicationPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspacePostgresTriggersPublicationUpdatePublicationPathRouteHandler: RouteHandler<
  typeof postWWorkspacePostgresTriggersPublicationUpdatePublicationPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspacePostgresTriggersPublicationDeletePublicationPathRouteHandler: RouteHandler<
  typeof deleteWWorkspacePostgresTriggersPublicationDeletePublicationPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspacePostgresTriggersCreateRouteHandler: RouteHandler<
  typeof postWWorkspacePostgresTriggersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspacePostgresTriggersUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspacePostgresTriggersUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspacePostgresTriggersDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspacePostgresTriggersDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspacePostgresTriggersGetPathRouteHandler: RouteHandler<
  typeof getWWorkspacePostgresTriggersGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspacePostgresTriggersListRouteHandler: RouteHandler<
  typeof getWWorkspacePostgresTriggersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspacePostgresTriggersExistsPathRouteHandler: RouteHandler<
  typeof getWWorkspacePostgresTriggersExistsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspacePostgresTriggersSetmodePathRouteHandler: RouteHandler<
  typeof postWWorkspacePostgresTriggersSetmodePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspacePostgresTriggersTestRouteHandler: RouteHandler<
  typeof postWWorkspacePostgresTriggersTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceEmailTriggersCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceEmailTriggersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceEmailTriggersUpdatePathRouteHandler: RouteHandler<
  typeof postWWorkspaceEmailTriggersUpdatePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceEmailTriggersDeletePathRouteHandler: RouteHandler<
  typeof deleteWWorkspaceEmailTriggersDeletePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceEmailTriggersGetPathRouteHandler: RouteHandler<
  typeof getWWorkspaceEmailTriggersGetPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceEmailTriggersListRouteHandler: RouteHandler<
  typeof getWWorkspaceEmailTriggersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceEmailTriggersExistsPathRouteHandler: RouteHandler<
  typeof getWWorkspaceEmailTriggersExistsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceEmailTriggersLocalPartExistsRouteHandler: RouteHandler<
  typeof postWWorkspaceEmailTriggersLocalPartExistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceEmailTriggersSetmodePathRouteHandler: RouteHandler<
  typeof postWWorkspaceEmailTriggersSetmodePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceGroupsListRouteHandler: RouteHandler<
  typeof getWWorkspaceGroupsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceGroupsListnamesRouteHandler: RouteHandler<
  typeof getWWorkspaceGroupsListnamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceGroupsCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceGroupsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceGroupsUpdateNameRouteHandler: RouteHandler<
  typeof postWWorkspaceGroupsUpdateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceGroupsDeleteNameRouteHandler: RouteHandler<
  typeof deleteWWorkspaceGroupsDeleteNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceGroupsGetNameRouteHandler: RouteHandler<
  typeof getWWorkspaceGroupsGetNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceGroupsAdduserNameRouteHandler: RouteHandler<
  typeof postWWorkspaceGroupsAdduserNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceGroupsRemoveuserNameRouteHandler: RouteHandler<
  typeof postWWorkspaceGroupsRemoveuserNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceGroupsHistoryGetNameRouteHandler: RouteHandler<
  typeof getWWorkspaceGroupsHistoryGetNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceTriggersHistoryListRouteHandler: RouteHandler<
  typeof getWWorkspaceTriggersHistoryListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFoldersListRouteHandler: RouteHandler<
  typeof getWWorkspaceFoldersListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFoldersListnamesRouteHandler: RouteHandler<
  typeof getWWorkspaceFoldersListnamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceFoldersCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceFoldersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceFoldersUpdateNameRouteHandler: RouteHandler<
  typeof postWWorkspaceFoldersUpdateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceFoldersDeleteNameRouteHandler: RouteHandler<
  typeof deleteWWorkspaceFoldersDeleteNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFoldersGetNameRouteHandler: RouteHandler<
  typeof getWWorkspaceFoldersGetNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFoldersExistsNameRouteHandler: RouteHandler<
  typeof getWWorkspaceFoldersExistsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFoldersGetusageNameRouteHandler: RouteHandler<
  typeof getWWorkspaceFoldersGetusageNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceFoldersAddownerNameRouteHandler: RouteHandler<
  typeof postWWorkspaceFoldersAddownerNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceFoldersRemoveownerNameRouteHandler: RouteHandler<
  typeof postWWorkspaceFoldersRemoveownerNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceFoldersHistoryGetNameRouteHandler: RouteHandler<
  typeof getWWorkspaceFoldersHistoryGetNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAccessGetRouteHandler: RouteHandler<
  typeof getWWorkspaceAccessGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAclsGetKindPathRouteHandler: RouteHandler<
  typeof getWWorkspaceAclsGetKindPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAclsAddKindPathRouteHandler: RouteHandler<
  typeof postWWorkspaceAclsAddKindPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAclsRemoveKindPathRouteHandler: RouteHandler<
  typeof postWWorkspaceAclsRemoveKindPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceCaptureSetConfigRouteHandler: RouteHandler<
  typeof postWWorkspaceCaptureSetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceCapturePingConfigTriggerKindRunnableKindPathRouteHandler: RouteHandler<
  typeof postWWorkspaceCapturePingConfigTriggerKindRunnableKindPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceCaptureGetConfigsRunnableKindPathRouteHandler: RouteHandler<
  typeof getWWorkspaceCaptureGetConfigsRunnableKindPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceCaptureListRunnableKindPathRouteHandler: RouteHandler<
  typeof getWWorkspaceCaptureListRunnableKindPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceCaptureMoveRunnableKindPathRouteHandler: RouteHandler<
  typeof postWWorkspaceCaptureMoveRunnableKindPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceCaptureIdRouteHandler: RouteHandler<
  typeof getWWorkspaceCaptureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceCaptureIdRouteHandler: RouteHandler<
  typeof deleteWWorkspaceCaptureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceFavoritesStarRouteHandler: RouteHandler<
  typeof postWWorkspaceFavoritesStarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceFavoritesUnstarRouteHandler: RouteHandler<
  typeof postWWorkspaceFavoritesUnstarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceInputsHistoryRouteHandler: RouteHandler<
  typeof getWWorkspaceInputsHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceInputsJobOrInputIdArgsRouteHandler: RouteHandler<
  typeof getWWorkspaceInputsJobOrInputIdArgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceInputsListRouteHandler: RouteHandler<
  typeof getWWorkspaceInputsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceInputsCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceInputsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceInputsUpdateRouteHandler: RouteHandler<
  typeof postWWorkspaceInputsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceInputsDeleteInputRouteHandler: RouteHandler<
  typeof postWWorkspaceInputsDeleteInputRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobHelpersDuckdbConnectionSettingsRouteHandler: RouteHandler<
  typeof postWWorkspaceJobHelpersDuckdbConnectionSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobHelpersV2DuckdbConnectionSettingsRouteHandler: RouteHandler<
  typeof postWWorkspaceJobHelpersV2DuckdbConnectionSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobHelpersPolarsConnectionSettingsRouteHandler: RouteHandler<
  typeof postWWorkspaceJobHelpersPolarsConnectionSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobHelpersV2PolarsConnectionSettingsRouteHandler: RouteHandler<
  typeof postWWorkspaceJobHelpersV2PolarsConnectionSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobHelpersV2S3ResourceInfoRouteHandler: RouteHandler<
  typeof postWWorkspaceJobHelpersV2S3ResourceInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobHelpersV2S3ProxyBucketRouteHandler: RouteHandler<
  typeof getWWorkspaceJobHelpersV2S3ProxyBucketRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobHelpersTestConnectionRouteHandler: RouteHandler<
  typeof getWWorkspaceJobHelpersTestConnectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobHelpersStorageUsageRouteHandler: RouteHandler<
  typeof getWWorkspaceJobHelpersStorageUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobHelpersListStoredFilesRouteHandler: RouteHandler<
  typeof getWWorkspaceJobHelpersListStoredFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobHelpersListStoredFilesPagedRouteHandler: RouteHandler<
  typeof getWWorkspaceJobHelpersListStoredFilesPagedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobHelpersLoadFileMetadataRouteHandler: RouteHandler<
  typeof getWWorkspaceJobHelpersLoadFileMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobHelpersLoadFilePreviewRouteHandler: RouteHandler<
  typeof getWWorkspaceJobHelpersLoadFilePreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobHelpersListGitRepoFilesRouteHandler: RouteHandler<
  typeof getWWorkspaceJobHelpersListGitRepoFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobHelpersLoadGitRepoFilePreviewRouteHandler: RouteHandler<
  typeof getWWorkspaceJobHelpersLoadGitRepoFilePreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobHelpersLoadGitRepoFileMetadataRouteHandler: RouteHandler<
  typeof getWWorkspaceJobHelpersLoadGitRepoFileMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobHelpersCheckS3FolderExistsRouteHandler: RouteHandler<
  typeof getWWorkspaceJobHelpersCheckS3FolderExistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobHelpersLoadParquetPreviewPathRouteHandler: RouteHandler<
  typeof getWWorkspaceJobHelpersLoadParquetPreviewPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobHelpersLoadTableCountPathRouteHandler: RouteHandler<
  typeof getWWorkspaceJobHelpersLoadTableCountPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobHelpersLoadCsvPreviewPathRouteHandler: RouteHandler<
  typeof getWWorkspaceJobHelpersLoadCsvPreviewPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceJobHelpersDeleteS3FileRouteHandler: RouteHandler<
  typeof deleteWWorkspaceJobHelpersDeleteS3FileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobHelpersMoveS3FileRouteHandler: RouteHandler<
  typeof getWWorkspaceJobHelpersMoveS3FileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobHelpersUploadS3FileRouteHandler: RouteHandler<
  typeof postWWorkspaceJobHelpersUploadS3FileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobHelpersUploadGitRepoFileToInstanceStorageRouteHandler: RouteHandler<
  typeof postWWorkspaceJobHelpersUploadGitRepoFileToInstanceStorageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobHelpersDownloadS3FileRouteHandler: RouteHandler<
  typeof getWWorkspaceJobHelpersDownloadS3FileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobHelpersDownloadS3ParquetFileAsCsvRouteHandler: RouteHandler<
  typeof getWWorkspaceJobHelpersDownloadS3ParquetFileAsCsvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobMetricsGetIdRouteHandler: RouteHandler<
  typeof postWWorkspaceJobMetricsGetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceJobMetricsSetProgressIdRouteHandler: RouteHandler<
  typeof postWWorkspaceJobMetricsSetProgressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobMetricsGetProgressIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobMetricsGetProgressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceConcurrencyGroupsListJobsRouteHandler: RouteHandler<
  typeof getWWorkspaceConcurrencyGroupsListJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAssetsListRouteHandler: RouteHandler<
  typeof getWWorkspaceAssetsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceAssetsListByUsagesRouteHandler: RouteHandler<
  typeof postWWorkspaceAssetsListByUsagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAssetsListFavoritesRouteHandler: RouteHandler<
  typeof getWWorkspaceAssetsListFavoritesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAssetsGraphRouteHandler: RouteHandler<
  typeof getWWorkspaceAssetsGraphRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAssetsColumnLineageRouteHandler: RouteHandler<
  typeof getWWorkspaceAssetsColumnLineageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAssetsMacrosRouteHandler: RouteHandler<
  typeof getWWorkspaceAssetsMacrosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAssetsPipelinesRouteHandler: RouteHandler<
  typeof getWWorkspaceAssetsPipelinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAssetsPartitionsRouteHandler: RouteHandler<
  typeof getWWorkspaceAssetsPartitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsDbtResumableIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsDbtResumableIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsDbtResumableScriptPPathRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsDbtResumableScriptPPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsDbtGraphIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsDbtGraphIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsDbtColumnLineageIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsDbtColumnLineageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsRunProgressIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsRunProgressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceJobsRunAssetsIdRouteHandler: RouteHandler<
  typeof getWWorkspaceJobsRunAssetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAssetsPartitionsInRangeRouteHandler: RouteHandler<
  typeof getWWorkspaceAssetsPartitionsInRangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceAssetsAssetSchemasRouteHandler: RouteHandler<
  typeof getWWorkspaceAssetsAssetSchemasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceVolumesListRouteHandler: RouteHandler<
  typeof getWWorkspaceVolumesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceVolumesStorageRouteHandler: RouteHandler<
  typeof getWWorkspaceVolumesStorageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceVolumesCreateRouteHandler: RouteHandler<
  typeof postWWorkspaceVolumesCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWWorkspaceVolumesDeleteNameRouteHandler: RouteHandler<
  typeof deleteWWorkspaceVolumesDeleteNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHubPublishDraftRouteHandler: RouteHandler<
  typeof postWWorkspaceHubPublishDraftRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHubScriptsRouteHandler: RouteHandler<
  typeof postWWorkspaceHubScriptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHubFlowsRouteHandler: RouteHandler<
  typeof postWWorkspaceHubFlowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHubAppsRouteHandler: RouteHandler<
  typeof postWWorkspaceHubAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHubRawAppsRouteHandler: RouteHandler<
  typeof postWWorkspaceHubRawAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHubRawAppsIdRecordingRouteHandler: RouteHandler<
  typeof postWWorkspaceHubRawAppsIdRecordingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHubScriptsAskIdRecordingRouteHandler: RouteHandler<
  typeof postWWorkspaceHubScriptsAskIdRecordingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHubFlowsFlowIdRecordingRouteHandler: RouteHandler<
  typeof postWWorkspaceHubFlowsFlowIdRecordingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHubProjectsSlugPipelineRecordingRouteHandler: RouteHandler<
  typeof postWWorkspaceHubProjectsSlugPipelineRecordingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHubResourceTypesRouteHandler: RouteHandler<
  typeof postWWorkspaceHubResourceTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHubResourcesRouteHandler: RouteHandler<
  typeof postWWorkspaceHubResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHubTriggersRouteHandler: RouteHandler<
  typeof postWWorkspaceHubTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHubMigrationsRouteHandler: RouteHandler<
  typeof postWWorkspaceHubMigrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceHubProjectsSlugExportRouteHandler: RouteHandler<
  typeof getWWorkspaceHubProjectsSlugExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHubProjectsSlugLogoRouteHandler: RouteHandler<
  typeof postWWorkspaceHubProjectsSlugLogoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHubProjectsSlugSubmitRouteHandler: RouteHandler<
  typeof postWWorkspaceHubProjectsSlugSubmitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHubProjectsSlugWithdrawRouteHandler: RouteHandler<
  typeof postWWorkspaceHubProjectsSlugWithdrawRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWWorkspaceHubProjectsSlugDiscardUpdateRouteHandler: RouteHandler<
  typeof postWWorkspaceHubProjectsSlugDiscardUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceHubProjectsRouteHandler: RouteHandler<
  typeof getWWorkspaceHubProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWWorkspaceHubProjectRouteHandler: RouteHandler<
  typeof getWWorkspaceHubProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}
