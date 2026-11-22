import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2CloudSecurityManagementCustomFrameworksHandleVersionRoute,
  deleteApiV2SecurityFindingsAutomationDueDateRulesRuleIdRoute,
  deleteApiV2SecurityFindingsAutomationInboxRulesRuleIdRoute,
  deleteApiV2SecurityFindingsAutomationMuteRulesRuleIdRoute,
  deleteApiV2SecurityFindingsAutomationSeverityModifierRulesRuleIdRoute,
  deleteApiV2SecurityFindingsAutomationTicketCreationRulesRuleIdRoute,
  deleteApiV2SecurityFindingsCasesRoute,
  deleteApiV2SecurityMonitoringBatchMigrationsBatchIdResourcesRoute,
  deleteApiV2SecurityMonitoringBatchMigrationsBatchIdRoute,
  deleteApiV2SecurityMonitoringConfigurationCriticalAssetsCriticalAssetIdRoute,
  deleteApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationConfigIdRoute,
  deleteApiV2SecurityMonitoringConfigurationSecurityFiltersSecurityFilterIdRoute,
  deleteApiV2SecurityMonitoringConfigurationSuppressionsSuppressionIdRoute,
  deleteApiV2SecurityMonitoringDatasetsDatasetIdRoute,
  deleteApiV2SecurityMonitoringRulesBulkDeleteRoute,
  deleteApiV2SecurityMonitoringRulesRuleIdRoute,
  deleteApiV2SecurityMonitoringSampleLogGenerationSubscriptionsContentPackIdRoute,
  deleteApiV2SecuritySignalsNotificationRulesIdRoute,
  deleteApiV2SecurityVulnerabilitiesNotificationRulesIdRoute,
  deleteApiV2SiemHistoricalDetectionsJobsJobIdRoute,
  getApiV2CloudSecurityManagementCustomFrameworksHandleVersionRoute,
  getApiV2CloudSecurityManagementResourceFiltersRoute,
  getApiV2PostureManagementFindingsFindingIdRoute,
  getApiV2PostureManagementFindingsRoute,
  getApiV2SecurityFindingsAutomationDefaultInboxRulesRoute,
  getApiV2SecurityFindingsAutomationDefaultInboxRulesRuleIdRoute,
  getApiV2SecurityFindingsAutomationDueDateRulesRoute,
  getApiV2SecurityFindingsAutomationDueDateRulesRuleIdRoute,
  getApiV2SecurityFindingsAutomationInboxRulesRoute,
  getApiV2SecurityFindingsAutomationInboxRulesRuleIdRoute,
  getApiV2SecurityFindingsAutomationMuteRulesRoute,
  getApiV2SecurityFindingsAutomationMuteRulesRuleIdRoute,
  getApiV2SecurityFindingsAutomationSeverityModifierRulesRoute,
  getApiV2SecurityFindingsAutomationSeverityModifierRulesRuleIdRoute,
  getApiV2SecurityFindingsAutomationTicketCreationRulesRoute,
  getApiV2SecurityFindingsAutomationTicketCreationRulesRuleIdRoute,
  getApiV2SecurityFindingsRoute,
  getApiV2SecurityMonitoringBatchMigrationsBatchIdResourcesRoute,
  getApiV2SecurityMonitoringBatchMigrationsRoute,
  getApiV2SecurityMonitoringConfigurationCriticalAssetsCriticalAssetIdRoute,
  getApiV2SecurityMonitoringConfigurationCriticalAssetsRoute,
  getApiV2SecurityMonitoringConfigurationCriticalAssetsRulesRuleIdRoute,
  getApiV2SecurityMonitoringConfigurationIntegrationConfigEntraIdAzureAppRegistrationsRoute,
  getApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationConfigIdRoute,
  getApiV2SecurityMonitoringConfigurationIntegrationConfigRoute,
  getApiV2SecurityMonitoringConfigurationSecurityFiltersRoute,
  getApiV2SecurityMonitoringConfigurationSecurityFiltersSecurityFilterIdRoute,
  getApiV2SecurityMonitoringConfigurationSecurityFiltersVersionsRoute,
  getApiV2SecurityMonitoringConfigurationSuppressionsRoute,
  getApiV2SecurityMonitoringConfigurationSuppressionsRulesRuleIdRoute,
  getApiV2SecurityMonitoringConfigurationSuppressionsSuppressionIdRoute,
  getApiV2SecurityMonitoringConfigurationSuppressionsSuppressionIdVersionHistoryRoute,
  getApiV2SecurityMonitoringContentPacksStatesRoute,
  getApiV2SecurityMonitoringDatasetsDatasetIdRoute,
  getApiV2SecurityMonitoringDatasetsDatasetIdVersionHistoryRoute,
  getApiV2SecurityMonitoringDatasetsDatasetIdVersionVersionRoute,
  getApiV2SecurityMonitoringDatasetsRoute,
  getApiV2SecurityMonitoringEntityContextIdRoute,
  getApiV2SecurityMonitoringEntityContextRecentlyUpdatedRoute,
  getApiV2SecurityMonitoringEntityContextRoute,
  getApiV2SecurityMonitoringEventsEventIdMatchingSignalsRoute,
  getApiV2SecurityMonitoringRulesProposalsProposalIdRoute,
  getApiV2SecurityMonitoringRulesRoute,
  getApiV2SecurityMonitoringRulesRuleIdConvertRoute,
  getApiV2SecurityMonitoringRulesRuleIdRoute,
  getApiV2SecurityMonitoringRulesRuleIdVersionHistoryRoute,
  getApiV2SecurityMonitoringSampleLogGenerationSubscriptionsRoute,
  getApiV2SecurityMonitoringSignalsRoute,
  getApiV2SecurityMonitoringSignalsSignalIdEntitiesRoute,
  getApiV2SecurityMonitoringSignalsSignalIdInvestigationQueriesRoute,
  getApiV2SecurityMonitoringSignalsSignalIdRoute,
  getApiV2SecurityMonitoringSignalsSignalIdSuggestedActionsRoute,
  getApiV2SecurityMonitoringTerraformResourceTypeResourceIdRoute,
  getApiV2SecurityRemediationGroupsRoute,
  getApiV2SecuritySbomsAssetTypeRoute,
  getApiV2SecuritySbomsRoute,
  getApiV2SecurityScannedAssetsMetadataRoute,
  getApiV2SecuritySiemIocExplorerIndicatorRoute,
  getApiV2SecuritySiemIocExplorerRoute,
  getApiV2SecuritySignalsNotificationRulesIdRoute,
  getApiV2SecuritySignalsNotificationRulesRoute,
  getApiV2SecurityVulnerabilitiesNotificationRulesIdRoute,
  getApiV2SecurityVulnerabilitiesNotificationRulesRoute,
  getApiV2SecurityVulnerabilitiesRoute,
  getApiV2SecurityVulnerableAssetsRoute,
  getApiV2SiemHistoricalDetectionsHistsignalsHistsignalIdRoute,
  getApiV2SiemHistoricalDetectionsHistsignalsRoute,
  getApiV2SiemHistoricalDetectionsJobsJobIdHistsignalsRoute,
  getApiV2SiemHistoricalDetectionsJobsJobIdRoute,
  getApiV2SiemHistoricalDetectionsJobsRoute,
  getApiV2StaticAnalysisCodegenRulesetsRoute,
  getApiV2StaticAnalysisDefaultRulesetsLanguageRoute,
  getApiV2StaticAnalysisRulesetsRulesetNameRoute,
  getApiV2StaticAnalysisSecretsRulesRoute,
  getApiV2StaticAnalysisStaticAnalysisServerNodeTypesLanguageRoute,
  getApiV2StaticAnalysisStaticAnalysisServerTreeSitterWasmFileRoute,
  patchApiV2SecurityFindingsAssigneeRoute,
  patchApiV2SecurityFindingsCasesCaseIdRoute,
  patchApiV2SecurityFindingsJiraIssuesRoute,
  patchApiV2SecurityFindingsLinearIssuesRoute,
  patchApiV2SecurityFindingsMuteRoute,
  patchApiV2SecurityFindingsServicenowTicketsRoute,
  patchApiV2SecurityFindingsSeverityRoute,
  patchApiV2SecurityMonitoringBatchMigrationsBatchIdResourcesResourceIdRoute,
  patchApiV2SecurityMonitoringBatchMigrationsBatchIdRoute,
  patchApiV2SecurityMonitoringConfigurationCriticalAssetsCriticalAssetIdRoute,
  patchApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationConfigIdRoute,
  patchApiV2SecurityMonitoringConfigurationSecurityFiltersSecurityFilterIdRoute,
  patchApiV2SecurityMonitoringConfigurationSuppressionsSuppressionIdRoute,
  patchApiV2SecurityMonitoringDatasetsDatasetIdRoute,
  patchApiV2SecurityMonitoringSignalsBulkAssigneeRoute,
  patchApiV2SecurityMonitoringSignalsBulkStateRoute,
  patchApiV2SecurityMonitoringSignalsBulkUpdateRoute,
  patchApiV2SecurityMonitoringSignalsSignalIdAssigneeRoute,
  patchApiV2SecurityMonitoringSignalsSignalIdIncidentsRoute,
  patchApiV2SecurityMonitoringSignalsSignalIdStateRoute,
  patchApiV2SecurityMonitoringSignalsSignalIdUpdateRoute,
  patchApiV2SecuritySignalsNotificationRulesIdRoute,
  patchApiV2SecurityVulnerabilitiesNotificationRulesIdRoute,
  patchApiV2SiemHistoricalDetectionsJobsJobIdCancelRoute,
  postApiV2CloudSecurityManagementCustomFrameworksRoute,
  postApiV2SecurityFindingsAutomationDefaultInboxRulesRuleIdDisableRoute,
  postApiV2SecurityFindingsAutomationDefaultInboxRulesRuleIdEnableRoute,
  postApiV2SecurityFindingsAutomationDueDateRulesReorderRoute,
  postApiV2SecurityFindingsAutomationDueDateRulesRoute,
  postApiV2SecurityFindingsAutomationInboxRulesReorderRoute,
  postApiV2SecurityFindingsAutomationInboxRulesRoute,
  postApiV2SecurityFindingsAutomationMuteRulesReorderRoute,
  postApiV2SecurityFindingsAutomationMuteRulesRoute,
  postApiV2SecurityFindingsAutomationSeverityModifierRulesReorderRoute,
  postApiV2SecurityFindingsAutomationSeverityModifierRulesRoute,
  postApiV2SecurityFindingsAutomationTicketCreationRulesReorderRoute,
  postApiV2SecurityFindingsAutomationTicketCreationRulesRoute,
  postApiV2SecurityFindingsCasesRoute,
  postApiV2SecurityFindingsJiraIssuesRoute,
  postApiV2SecurityFindingsLinearIssuesRoute,
  postApiV2SecurityFindingsSearchRoute,
  postApiV2SecurityFindingsServicenowTicketsRoute,
  postApiV2SecurityMonitoringBatchMigrationsBatchIdCancelRoute,
  postApiV2SecurityMonitoringBatchMigrationsBatchIdPublishRoute,
  postApiV2SecurityMonitoringBatchMigrationsBatchIdResourcesRoute,
  postApiV2SecurityMonitoringBatchMigrationsBatchIdStartRoute,
  postApiV2SecurityMonitoringBatchMigrationsRoute,
  postApiV2SecurityMonitoringConfigurationCriticalAssetsRoute,
  postApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationConfigIdValidateRoute,
  postApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationTypeActivateRoute,
  postApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationTypeDeactivateRoute,
  postApiV2SecurityMonitoringConfigurationIntegrationConfigRoute,
  postApiV2SecurityMonitoringConfigurationIntegrationConfigValidateRoute,
  postApiV2SecurityMonitoringConfigurationNotificationRulesSendNotificationPreviewRoute,
  postApiV2SecurityMonitoringConfigurationSecurityFiltersRoute,
  postApiV2SecurityMonitoringConfigurationSuppressionsRoute,
  postApiV2SecurityMonitoringConfigurationSuppressionsRulesRoute,
  postApiV2SecurityMonitoringConfigurationSuppressionsValidationRoute,
  postApiV2SecurityMonitoringDatasetsDependenciesRoute,
  postApiV2SecurityMonitoringDatasetsRoute,
  postApiV2SecurityMonitoringRulesBulkExportRoute,
  postApiV2SecurityMonitoringRulesConvertBulkRoute,
  postApiV2SecurityMonitoringRulesConvertRoute,
  postApiV2SecurityMonitoringRulesProposalsRoute,
  postApiV2SecurityMonitoringRulesRoute,
  postApiV2SecurityMonitoringRulesRuleIdRestoreVersionRoute,
  postApiV2SecurityMonitoringRulesRuleIdTestRoute,
  postApiV2SecurityMonitoringRulesTestRoute,
  postApiV2SecurityMonitoringRulesValidationRoute,
  postApiV2SecurityMonitoringSampleLogGenerationSubscriptionsBulkRoute,
  postApiV2SecurityMonitoringSampleLogGenerationSubscriptionsRoute,
  postApiV2SecurityMonitoringSignalsSearchRoute,
  postApiV2SecurityMonitoringTerraformResourceTypeBulkRoute,
  postApiV2SecurityMonitoringTerraformResourceTypeConvertRoute,
  postApiV2SecuritySiemIocExplorerTriageRoute,
  postApiV2SecuritySignalsNotificationRulesRoute,
  postApiV2SecurityVulnerabilitiesNotificationRulesRoute,
  postApiV2SecurityVulnerabilitiesRoute,
  postApiV2SiemHistoricalDetectionsHistsignalsSearchRoute,
  postApiV2SiemHistoricalDetectionsJobsRoute,
  postApiV2SiemHistoricalDetectionsJobsSignalConvertRoute,
  postApiV2StaticAnalysisRulesetsRoute,
  postApiV2StaticAnalysisStaticAnalysisServerAnalyzeRoute,
  postApiV2StaticAnalysisStaticAnalysisServerGetAstRoute,
  putApiV2CloudSecurityManagementCustomFrameworksHandleVersionRoute,
  putApiV2CloudSecurityManagementResourceFiltersRoute,
  putApiV2SecurityFindingsAutomationDueDateRulesRuleIdRoute,
  putApiV2SecurityFindingsAutomationInboxRulesRuleIdRoute,
  putApiV2SecurityFindingsAutomationMuteRulesRuleIdRoute,
  putApiV2SecurityFindingsAutomationSeverityModifierRulesRuleIdRoute,
  putApiV2SecurityFindingsAutomationTicketCreationRulesRuleIdRoute,
  putApiV2SecurityMonitoringContentPacksContentPackIdActivateRoute,
  putApiV2SecurityMonitoringContentPacksContentPackIdDeactivateRoute,
  putApiV2SecurityMonitoringRulesRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityMonitoringHandler = app
  .openapi(postApiV2CloudSecurityManagementCustomFrameworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CloudSecurityManagementCustomFrameworksHandleVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CloudSecurityManagementCustomFrameworksHandleVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CloudSecurityManagementCustomFrameworksHandleVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CloudSecurityManagementResourceFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CloudSecurityManagementResourceFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PostureManagementFindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PostureManagementFindingsFindingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityFindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityFindingsAssigneeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityFindingsAutomationDefaultInboxRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityFindingsAutomationDefaultInboxRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityFindingsAutomationDefaultInboxRulesRuleIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityFindingsAutomationDefaultInboxRulesRuleIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityFindingsAutomationDueDateRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityFindingsAutomationDueDateRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityFindingsAutomationDueDateRulesReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SecurityFindingsAutomationDueDateRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityFindingsAutomationDueDateRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SecurityFindingsAutomationDueDateRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityFindingsAutomationInboxRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityFindingsAutomationInboxRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityFindingsAutomationInboxRulesReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SecurityFindingsAutomationInboxRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityFindingsAutomationInboxRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SecurityFindingsAutomationInboxRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityFindingsAutomationMuteRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityFindingsAutomationMuteRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityFindingsAutomationMuteRulesReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SecurityFindingsAutomationMuteRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityFindingsAutomationMuteRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SecurityFindingsAutomationMuteRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityFindingsAutomationSeverityModifierRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityFindingsAutomationSeverityModifierRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityFindingsAutomationSeverityModifierRulesReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SecurityFindingsAutomationSeverityModifierRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityFindingsAutomationSeverityModifierRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SecurityFindingsAutomationSeverityModifierRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityFindingsAutomationTicketCreationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityFindingsAutomationTicketCreationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityFindingsAutomationTicketCreationRulesReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SecurityFindingsAutomationTicketCreationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityFindingsAutomationTicketCreationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SecurityFindingsAutomationTicketCreationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SecurityFindingsCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityFindingsCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityFindingsCasesCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityFindingsJiraIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityFindingsJiraIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityFindingsLinearIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityFindingsLinearIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityFindingsMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityFindingsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityFindingsServicenowTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityFindingsServicenowTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityFindingsSeverityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityRemediationGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecuritySbomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecuritySbomsAssetTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityScannedAssetsMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecuritySiemIocExplorerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecuritySiemIocExplorerIndicatorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecuritySiemIocExplorerTriageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecuritySignalsNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecuritySignalsNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SecuritySignalsNotificationRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecuritySignalsNotificationRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecuritySignalsNotificationRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityVulnerabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityVulnerabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityVulnerabilitiesNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityVulnerabilitiesNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SecurityVulnerabilitiesNotificationRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityVulnerabilitiesNotificationRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityVulnerabilitiesNotificationRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityVulnerableAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringBatchMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringBatchMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SecurityMonitoringBatchMigrationsBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityMonitoringBatchMigrationsBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringBatchMigrationsBatchIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringBatchMigrationsBatchIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SecurityMonitoringBatchMigrationsBatchIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringBatchMigrationsBatchIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringBatchMigrationsBatchIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityMonitoringBatchMigrationsBatchIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringBatchMigrationsBatchIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringConfigurationCriticalAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringConfigurationCriticalAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringConfigurationCriticalAssetsRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SecurityMonitoringConfigurationCriticalAssetsCriticalAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringConfigurationCriticalAssetsCriticalAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityMonitoringConfigurationCriticalAssetsCriticalAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringConfigurationIntegrationConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringConfigurationIntegrationConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2SecurityMonitoringConfigurationIntegrationConfigEntraIdAzureAppRegistrationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV2SecurityMonitoringConfigurationIntegrationConfigValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationConfigIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationConfigIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationConfigIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationConfigIdValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationTypeActivateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2SecurityMonitoringConfigurationIntegrationConfigIntegrationTypeDeactivateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2SecurityMonitoringConfigurationNotificationRulesSendNotificationPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2SecurityMonitoringConfigurationSecurityFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringConfigurationSecurityFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringConfigurationSecurityFiltersVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SecurityMonitoringConfigurationSecurityFiltersSecurityFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringConfigurationSecurityFiltersSecurityFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityMonitoringConfigurationSecurityFiltersSecurityFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringConfigurationSuppressionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringConfigurationSuppressionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringConfigurationSuppressionsRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringConfigurationSuppressionsRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringConfigurationSuppressionsValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SecurityMonitoringConfigurationSuppressionsSuppressionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringConfigurationSuppressionsSuppressionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityMonitoringConfigurationSuppressionsSuppressionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2SecurityMonitoringConfigurationSuppressionsSuppressionIdVersionHistoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2SecurityMonitoringContentPacksStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SecurityMonitoringContentPacksContentPackIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SecurityMonitoringContentPacksContentPackIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringDatasetsDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SecurityMonitoringDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityMonitoringDatasetsDatasetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringDatasetsDatasetIdVersionVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringDatasetsDatasetIdVersionHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringEntityContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringEntityContextRecentlyUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringEntityContextIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringEventsEventIdMatchingSignalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SecurityMonitoringRulesBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringRulesBulkExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringRulesConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringRulesConvertBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringRulesProposalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringRulesProposalsProposalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringRulesTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringRulesValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SecurityMonitoringRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SecurityMonitoringRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringRulesRuleIdConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringRulesRuleIdRestoreVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringRulesRuleIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringRulesRuleIdVersionHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringSampleLogGenerationSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringSampleLogGenerationSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringSampleLogGenerationSubscriptionsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SecurityMonitoringSampleLogGenerationSubscriptionsContentPackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringSignalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityMonitoringSignalsBulkAssigneeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityMonitoringSignalsBulkStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityMonitoringSignalsBulkUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringSignalsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringSignalsSignalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityMonitoringSignalsSignalIdAssigneeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringSignalsSignalIdEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityMonitoringSignalsSignalIdIncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringSignalsSignalIdInvestigationQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityMonitoringSignalsSignalIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringSignalsSignalIdSuggestedActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SecurityMonitoringSignalsSignalIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringTerraformResourceTypeBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityMonitoringTerraformResourceTypeConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityMonitoringTerraformResourceTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SiemHistoricalDetectionsHistsignalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SiemHistoricalDetectionsHistsignalsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SiemHistoricalDetectionsHistsignalsHistsignalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SiemHistoricalDetectionsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SiemHistoricalDetectionsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SiemHistoricalDetectionsJobsSignalConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SiemHistoricalDetectionsJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SiemHistoricalDetectionsJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2SiemHistoricalDetectionsJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SiemHistoricalDetectionsJobsJobIdHistsignalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisCodegenRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisDefaultRulesetsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StaticAnalysisRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisRulesetsRulesetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisSecretsRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StaticAnalysisStaticAnalysisServerAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StaticAnalysisStaticAnalysisServerGetAstRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisStaticAnalysisServerNodeTypesLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StaticAnalysisStaticAnalysisServerTreeSitterWasmFileRoute, (c) => {
    throw new Error('Not implemented')
  })
