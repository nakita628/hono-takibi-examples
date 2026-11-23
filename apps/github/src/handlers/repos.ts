import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReposOwnerRepoActionsArtifactsArtifactIdRoute,
  deleteReposOwnerRepoActionsCachesCacheIdRoute,
  deleteReposOwnerRepoActionsCachesRoute,
  deleteReposOwnerRepoActionsPoliciesPolicyIdRoute,
  deleteReposOwnerRepoActionsRunnersRunnerIdLabelsNameRoute,
  deleteReposOwnerRepoActionsRunnersRunnerIdLabelsRoute,
  deleteReposOwnerRepoActionsRunnersRunnerIdRoute,
  deleteReposOwnerRepoActionsRunsRunIdLogsRoute,
  deleteReposOwnerRepoActionsRunsRunIdRoute,
  deleteReposOwnerRepoActionsSecretsSecretNameRoute,
  deleteReposOwnerRepoActionsVariablesNameRoute,
  deleteReposOwnerRepoAgentsSecretsSecretNameRoute,
  deleteReposOwnerRepoAgentsVariablesNameRoute,
  deleteReposOwnerRepoAutolinksAutolinkIdRoute,
  deleteReposOwnerRepoAutomatedSecurityFixesRoute,
  deleteReposOwnerRepoBranchesBranchProtectionEnforceAdminsRoute,
  deleteReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsRoute,
  deleteReposOwnerRepoBranchesBranchProtectionRequiredSignaturesRoute,
  deleteReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRoute,
  deleteReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksRoute,
  deleteReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRoute,
  deleteReposOwnerRepoBranchesBranchProtectionRestrictionsRoute,
  deleteReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRoute,
  deleteReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRoute,
  deleteReposOwnerRepoBranchesBranchProtectionRoute,
  deleteReposOwnerRepoCodeScanningAnalysesAnalysisIdRoute,
  deleteReposOwnerRepoCodeScanningCodeqlDatabasesLanguageRoute,
  deleteReposOwnerRepoCodespacesSecretsSecretNameRoute,
  deleteReposOwnerRepoCollaboratorsUsernameRoute,
  deleteReposOwnerRepoCommentsCommentIdReactionsReactionIdRoute,
  deleteReposOwnerRepoCommentsCommentIdRoute,
  deleteReposOwnerRepoContentsPathRoute,
  deleteReposOwnerRepoDependabotSecretsSecretNameRoute,
  deleteReposOwnerRepoDeploymentsDeploymentIdRoute,
  deleteReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyIdRoute,
  deleteReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesProtectionRuleIdRoute,
  deleteReposOwnerRepoEnvironmentsEnvironmentNameRoute,
  deleteReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRoute,
  deleteReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRoute,
  deleteReposOwnerRepoGitRefsRefRoute,
  deleteReposOwnerRepoHooksHookIdRoute,
  deleteReposOwnerRepoImmutableReleasesRoute,
  deleteReposOwnerRepoImportRoute,
  deleteReposOwnerRepoInteractionLimitsPullsBypassListRoute,
  deleteReposOwnerRepoInteractionLimitsRoute,
  deleteReposOwnerRepoInvitationsInvitationIdRoute,
  deleteReposOwnerRepoIssuesCommentsCommentIdPinRoute,
  deleteReposOwnerRepoIssuesCommentsCommentIdReactionsReactionIdRoute,
  deleteReposOwnerRepoIssuesCommentsCommentIdRoute,
  deleteReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRoute,
  deleteReposOwnerRepoIssuesIssueNumberAssigneesRoute,
  deleteReposOwnerRepoIssuesIssueNumberDependenciesBlockedByIssueIdRoute,
  deleteReposOwnerRepoIssuesIssueNumberIssueFieldValuesIssueFieldIdRoute,
  deleteReposOwnerRepoIssuesIssueNumberLabelsNameRoute,
  deleteReposOwnerRepoIssuesIssueNumberLabelsRoute,
  deleteReposOwnerRepoIssuesIssueNumberLockRoute,
  deleteReposOwnerRepoIssuesIssueNumberReactionsReactionIdRoute,
  deleteReposOwnerRepoIssuesIssueNumberRelatesToIssueIdRoute,
  deleteReposOwnerRepoIssuesIssueNumberSubIssueRoute,
  deleteReposOwnerRepoKeysKeyIdRoute,
  deleteReposOwnerRepoLabelsNameRoute,
  deleteReposOwnerRepoMilestonesMilestoneNumberRoute,
  deleteReposOwnerRepoPagesRoute,
  deleteReposOwnerRepoPrivateVulnerabilityReportingRoute,
  deleteReposOwnerRepoPullsCommentsCommentIdReactionsReactionIdRoute,
  deleteReposOwnerRepoPullsCommentsCommentIdRoute,
  deleteReposOwnerRepoPullsPullNumberRequestedReviewersRoute,
  deleteReposOwnerRepoPullsPullNumberReviewsReviewIdRoute,
  deleteReposOwnerRepoReleasesAssetsAssetIdRoute,
  deleteReposOwnerRepoReleasesReleaseIdReactionsReactionIdRoute,
  deleteReposOwnerRepoReleasesReleaseIdRoute,
  deleteReposOwnerRepoRoute,
  deleteReposOwnerRepoRulesetsRulesetIdRoute,
  deleteReposOwnerRepoSecretScanningCustomPatternsRoute,
  deleteReposOwnerRepoSubscriptionRoute,
  deleteReposOwnerRepoVulnerabilityAlertsRoute,
  getReposOwnerRepoActionsArtifactsArtifactIdArchiveFormatRoute,
  getReposOwnerRepoActionsArtifactsArtifactIdRoute,
  getReposOwnerRepoActionsArtifactsRoute,
  getReposOwnerRepoActionsCacheRetentionLimitRoute,
  getReposOwnerRepoActionsCachesRoute,
  getReposOwnerRepoActionsCacheStorageLimitRoute,
  getReposOwnerRepoActionsCacheUsageRoute,
  getReposOwnerRepoActionsConcurrencyGroupsConcurrencyGroupNameRoute,
  getReposOwnerRepoActionsConcurrencyGroupsRoute,
  getReposOwnerRepoActionsJobsJobIdLogsRoute,
  getReposOwnerRepoActionsJobsJobIdRoute,
  getReposOwnerRepoActionsJobsJobIdStepsStepNumberLogsRoute,
  getReposOwnerRepoActionsOidcCustomizationSubRoute,
  getReposOwnerRepoActionsOrganizationSecretsRoute,
  getReposOwnerRepoActionsOrganizationVariablesRoute,
  getReposOwnerRepoActionsPermissionsAccessRoute,
  getReposOwnerRepoActionsPermissionsArtifactAndLogRetentionRoute,
  getReposOwnerRepoActionsPermissionsForkPrContributorApprovalRoute,
  getReposOwnerRepoActionsPermissionsForkPrWorkflowsPrivateReposRoute,
  getReposOwnerRepoActionsPermissionsRoute,
  getReposOwnerRepoActionsPermissionsSelectedActionsRoute,
  getReposOwnerRepoActionsPermissionsWorkflowRoute,
  getReposOwnerRepoActionsPoliciesPolicyIdRoute,
  getReposOwnerRepoActionsPoliciesRoute,
  getReposOwnerRepoActionsRunnersDeprecationsVersionRoute,
  getReposOwnerRepoActionsRunnersDownloadsRoute,
  getReposOwnerRepoActionsRunnersRoute,
  getReposOwnerRepoActionsRunnersRunnerIdLabelsRoute,
  getReposOwnerRepoActionsRunnersRunnerIdRoute,
  getReposOwnerRepoActionsRunsRoute,
  getReposOwnerRepoActionsRunsRunIdApprovalsRoute,
  getReposOwnerRepoActionsRunsRunIdArtifactsRoute,
  getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberJobsRoute,
  getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberLogsRoute,
  getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberRoute,
  getReposOwnerRepoActionsRunsRunIdConcurrencyGroupsRoute,
  getReposOwnerRepoActionsRunsRunIdJobsRoute,
  getReposOwnerRepoActionsRunsRunIdLogsRoute,
  getReposOwnerRepoActionsRunsRunIdPendingDeploymentsRoute,
  getReposOwnerRepoActionsRunsRunIdRoute,
  getReposOwnerRepoActionsRunsRunIdTimingRoute,
  getReposOwnerRepoActionsSecretsPublicKeyRoute,
  getReposOwnerRepoActionsSecretsRoute,
  getReposOwnerRepoActionsSecretsSecretNameRoute,
  getReposOwnerRepoActionsVariablesNameRoute,
  getReposOwnerRepoActionsVariablesRoute,
  getReposOwnerRepoActionsWorkflowsRoute,
  getReposOwnerRepoActionsWorkflowsWorkflowIdRoute,
  getReposOwnerRepoActionsWorkflowsWorkflowIdRunsRoute,
  getReposOwnerRepoActionsWorkflowsWorkflowIdTimingRoute,
  getReposOwnerRepoActivityRoute,
  getReposOwnerRepoAgentsOrganizationSecretsRoute,
  getReposOwnerRepoAgentsOrganizationVariablesRoute,
  getReposOwnerRepoAgentsSecretsPublicKeyRoute,
  getReposOwnerRepoAgentsSecretsRoute,
  getReposOwnerRepoAgentsSecretsSecretNameRoute,
  getReposOwnerRepoAgentsVariablesNameRoute,
  getReposOwnerRepoAgentsVariablesRoute,
  getReposOwnerRepoAssigneesAssigneeRoute,
  getReposOwnerRepoAssigneesRoute,
  getReposOwnerRepoAttestationsSubjectDigestRoute,
  getReposOwnerRepoAutolinksAutolinkIdRoute,
  getReposOwnerRepoAutolinksRoute,
  getReposOwnerRepoAutomatedSecurityFixesRoute,
  getReposOwnerRepoBranchesBranchProtectionEnforceAdminsRoute,
  getReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsRoute,
  getReposOwnerRepoBranchesBranchProtectionRequiredSignaturesRoute,
  getReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRoute,
  getReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksRoute,
  getReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRoute,
  getReposOwnerRepoBranchesBranchProtectionRestrictionsRoute,
  getReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRoute,
  getReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRoute,
  getReposOwnerRepoBranchesBranchProtectionRoute,
  getReposOwnerRepoBranchesBranchRoute,
  getReposOwnerRepoBranchesRoute,
  getReposOwnerRepoCheckRunsCheckRunIdAnnotationsRoute,
  getReposOwnerRepoCheckRunsCheckRunIdRoute,
  getReposOwnerRepoCheckSuitesCheckSuiteIdCheckRunsRoute,
  getReposOwnerRepoCheckSuitesCheckSuiteIdRoute,
  getReposOwnerRepoCodeownersErrorsRoute,
  getReposOwnerRepoCodeQualityFindingsFindingNumberRoute,
  getReposOwnerRepoCodeQualityFindingsRoute,
  getReposOwnerRepoCodeQualitySetupRoute,
  getReposOwnerRepoCodeScanningAiScanRoute,
  getReposOwnerRepoCodeScanningAlertsAlertNumberAutofixRoute,
  getReposOwnerRepoCodeScanningAlertsAlertNumberInstancesRoute,
  getReposOwnerRepoCodeScanningAlertsAlertNumberRoute,
  getReposOwnerRepoCodeScanningAlertsRoute,
  getReposOwnerRepoCodeScanningAnalysesAnalysisIdRoute,
  getReposOwnerRepoCodeScanningAnalysesRoute,
  getReposOwnerRepoCodeScanningCodeqlDatabasesLanguageRoute,
  getReposOwnerRepoCodeScanningCodeqlDatabasesRoute,
  getReposOwnerRepoCodeScanningCodeqlVariantAnalysesCodeqlVariantAnalysisIdReposRepoOwnerRepoNameRoute,
  getReposOwnerRepoCodeScanningCodeqlVariantAnalysesCodeqlVariantAnalysisIdRoute,
  getReposOwnerRepoCodeScanningDefaultSetupRoute,
  getReposOwnerRepoCodeScanningSarifsSarifIdRoute,
  getReposOwnerRepoCodeSecurityConfigurationRoute,
  getReposOwnerRepoCodespacesDevcontainersRoute,
  getReposOwnerRepoCodespacesMachinesRoute,
  getReposOwnerRepoCodespacesNewRoute,
  getReposOwnerRepoCodespacesPermissionsCheckRoute,
  getReposOwnerRepoCodespacesRoute,
  getReposOwnerRepoCodespacesSecretsPublicKeyRoute,
  getReposOwnerRepoCodespacesSecretsRoute,
  getReposOwnerRepoCodespacesSecretsSecretNameRoute,
  getReposOwnerRepoCollaboratorsRoute,
  getReposOwnerRepoCollaboratorsUsernamePermissionRoute,
  getReposOwnerRepoCollaboratorsUsernameRoute,
  getReposOwnerRepoCommentsCommentIdReactionsRoute,
  getReposOwnerRepoCommentsCommentIdRoute,
  getReposOwnerRepoCommentsRoute,
  getReposOwnerRepoCommitsCommitShaBranchesWhereHeadRoute,
  getReposOwnerRepoCommitsCommitShaCommentsRoute,
  getReposOwnerRepoCommitsCommitShaPullsRoute,
  getReposOwnerRepoCommitsRefCheckRunsRoute,
  getReposOwnerRepoCommitsRefCheckSuitesRoute,
  getReposOwnerRepoCommitsRefRoute,
  getReposOwnerRepoCommitsRefStatusesRoute,
  getReposOwnerRepoCommitsRefStatusRoute,
  getReposOwnerRepoCommitsRoute,
  getReposOwnerRepoCommunityProfileRoute,
  getReposOwnerRepoCompareBaseheadRoute,
  getReposOwnerRepoContentsPathRoute,
  getReposOwnerRepoContributorsRoute,
  getReposOwnerRepoCopilotCloudAgentConfigurationRoute,
  getReposOwnerRepoCopilotCodeReviewSettingsRoute,
  getReposOwnerRepoDependabotAlertsAlertNumberRoute,
  getReposOwnerRepoDependabotAlertsRoute,
  getReposOwnerRepoDependabotRunnerSettingsRoute,
  getReposOwnerRepoDependabotSecretsPublicKeyRoute,
  getReposOwnerRepoDependabotSecretsRoute,
  getReposOwnerRepoDependabotSecretsSecretNameRoute,
  getReposOwnerRepoDependencyGraphCompareBaseheadRoute,
  getReposOwnerRepoDependencyGraphSbomFetchReportSbomUuidRoute,
  getReposOwnerRepoDependencyGraphSbomGenerateReportRoute,
  getReposOwnerRepoDependencyGraphSbomRoute,
  getReposOwnerRepoDeploymentsDeploymentIdRoute,
  getReposOwnerRepoDeploymentsDeploymentIdStatusesRoute,
  getReposOwnerRepoDeploymentsDeploymentIdStatusesStatusIdRoute,
  getReposOwnerRepoDeploymentsRoute,
  getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyIdRoute,
  getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesRoute,
  getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesAppsRoute,
  getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesProtectionRuleIdRoute,
  getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesRoute,
  getReposOwnerRepoEnvironmentsEnvironmentNameRoute,
  getReposOwnerRepoEnvironmentsEnvironmentNameSecretsPublicKeyRoute,
  getReposOwnerRepoEnvironmentsEnvironmentNameSecretsRoute,
  getReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRoute,
  getReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRoute,
  getReposOwnerRepoEnvironmentsEnvironmentNameVariablesRoute,
  getReposOwnerRepoEnvironmentsRoute,
  getReposOwnerRepoEventsRoute,
  getReposOwnerRepoForksRoute,
  getReposOwnerRepoGitBlobsFileShaRoute,
  getReposOwnerRepoGitCommitsCommitShaRoute,
  getReposOwnerRepoGitMatchingRefsRefRoute,
  getReposOwnerRepoGitRefRefRoute,
  getReposOwnerRepoGitTagsTagShaRoute,
  getReposOwnerRepoGitTreesTreeShaRoute,
  getReposOwnerRepoHashAlgorithmRoute,
  getReposOwnerRepoHooksHookIdConfigRoute,
  getReposOwnerRepoHooksHookIdDeliveriesDeliveryIdRoute,
  getReposOwnerRepoHooksHookIdDeliveriesRoute,
  getReposOwnerRepoHooksHookIdRoute,
  getReposOwnerRepoHooksRoute,
  getReposOwnerRepoImmutableReleasesRoute,
  getReposOwnerRepoImportAuthorsRoute,
  getReposOwnerRepoImportLargeFilesRoute,
  getReposOwnerRepoImportRoute,
  getReposOwnerRepoInstallationRoute,
  getReposOwnerRepoInteractionLimitsPullsBypassListRoute,
  getReposOwnerRepoInteractionLimitsPullsCreationCapRoute,
  getReposOwnerRepoInteractionLimitsRoute,
  getReposOwnerRepoInvitationsRoute,
  getReposOwnerRepoIssuesCommentsCommentIdReactionsRoute,
  getReposOwnerRepoIssuesCommentsCommentIdRoute,
  getReposOwnerRepoIssuesCommentsRoute,
  getReposOwnerRepoIssuesEventsEventIdRoute,
  getReposOwnerRepoIssuesEventsRoute,
  getReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRoute,
  getReposOwnerRepoIssuesIssueNumberArtifactsRoute,
  getReposOwnerRepoIssuesIssueNumberAssigneesAssigneeRoute,
  getReposOwnerRepoIssuesIssueNumberCommentsRoute,
  getReposOwnerRepoIssuesIssueNumberDependenciesBlockedByRoute,
  getReposOwnerRepoIssuesIssueNumberDependenciesBlockingRoute,
  getReposOwnerRepoIssuesIssueNumberEventsRoute,
  getReposOwnerRepoIssuesIssueNumberIssueFieldValuesRoute,
  getReposOwnerRepoIssuesIssueNumberLabelsRoute,
  getReposOwnerRepoIssuesIssueNumberParentRoute,
  getReposOwnerRepoIssuesIssueNumberReactionsRoute,
  getReposOwnerRepoIssuesIssueNumberRelatesToRoute,
  getReposOwnerRepoIssuesIssueNumberRoute,
  getReposOwnerRepoIssuesIssueNumberSubIssuesRoute,
  getReposOwnerRepoIssuesIssueNumberSuggestionsRoute,
  getReposOwnerRepoIssuesIssueNumberTimelineRoute,
  getReposOwnerRepoIssuesRoute,
  getReposOwnerRepoIssueTypesRoute,
  getReposOwnerRepoKeysKeyIdRoute,
  getReposOwnerRepoKeysRoute,
  getReposOwnerRepoLabelsNameRoute,
  getReposOwnerRepoLabelsRoute,
  getReposOwnerRepoLanguagesRoute,
  getReposOwnerRepoLicenseRoute,
  getReposOwnerRepoMilestonesMilestoneNumberLabelsRoute,
  getReposOwnerRepoMilestonesMilestoneNumberRoute,
  getReposOwnerRepoMilestonesRoute,
  getReposOwnerRepoNotificationsRoute,
  getReposOwnerRepoPagesBuildsBuildIdRoute,
  getReposOwnerRepoPagesBuildsLatestRoute,
  getReposOwnerRepoPagesBuildsRoute,
  getReposOwnerRepoPagesDeploymentsPagesDeploymentIdRoute,
  getReposOwnerRepoPagesHealthRoute,
  getReposOwnerRepoPagesRoute,
  getReposOwnerRepoPlanningStatusesRoute,
  getReposOwnerRepoPrivateVulnerabilityReportingRoute,
  getReposOwnerRepoPropertiesValuesRoute,
  getReposOwnerRepoPullsCommentsCommentIdReactionsRoute,
  getReposOwnerRepoPullsCommentsCommentIdRoute,
  getReposOwnerRepoPullsCommentsRoute,
  getReposOwnerRepoPullsPullNumberCommentsRoute,
  getReposOwnerRepoPullsPullNumberCommitsRoute,
  getReposOwnerRepoPullsPullNumberFilesRoute,
  getReposOwnerRepoPullsPullNumberMergeAsyncUuidRoute,
  getReposOwnerRepoPullsPullNumberMergeRoute,
  getReposOwnerRepoPullsPullNumberRequestedReviewersRoute,
  getReposOwnerRepoPullsPullNumberReviewsReviewIdCommentsRoute,
  getReposOwnerRepoPullsPullNumberReviewsReviewIdRoute,
  getReposOwnerRepoPullsPullNumberReviewsRoute,
  getReposOwnerRepoPullsPullNumberRoute,
  getReposOwnerRepoPullsRoute,
  getReposOwnerRepoReadmeDirRoute,
  getReposOwnerRepoReadmeRoute,
  getReposOwnerRepoReleasesAssetsAssetIdRoute,
  getReposOwnerRepoReleasesLatestRoute,
  getReposOwnerRepoReleasesReleaseIdAssetsRoute,
  getReposOwnerRepoReleasesReleaseIdReactionsRoute,
  getReposOwnerRepoReleasesReleaseIdRoute,
  getReposOwnerRepoReleasesRoute,
  getReposOwnerRepoReleasesTagsTagRoute,
  getReposOwnerRepoRoute,
  getReposOwnerRepoRulesBranchesBranchRoute,
  getReposOwnerRepoRulesetsRoute,
  getReposOwnerRepoRulesetsRulesetIdHistoryRoute,
  getReposOwnerRepoRulesetsRulesetIdHistoryVersionIdRoute,
  getReposOwnerRepoRulesetsRulesetIdRoute,
  getReposOwnerRepoRulesetsRuleSuitesRoute,
  getReposOwnerRepoRulesetsRuleSuitesRuleSuiteIdRoute,
  getReposOwnerRepoSecretScanningAlertsAlertNumberLocationsRoute,
  getReposOwnerRepoSecretScanningAlertsAlertNumberRoute,
  getReposOwnerRepoSecretScanningAlertsRoute,
  getReposOwnerRepoSecretScanningCustomPatternsRoute,
  getReposOwnerRepoSecretScanningScanHistoryRoute,
  getReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsCommentIdRoute,
  getReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsRoute,
  getReposOwnerRepoSecurityAdvisoriesGhsaIdRoute,
  getReposOwnerRepoSecurityAdvisoriesRoute,
  getReposOwnerRepoStacksRoute,
  getReposOwnerRepoStacksStackNumberRoute,
  getReposOwnerRepoStargazersCountRoute,
  getReposOwnerRepoStargazersHistoryRoute,
  getReposOwnerRepoStargazersRoute,
  getReposOwnerRepoStatsCodeFrequencyRoute,
  getReposOwnerRepoStatsCommitActivityRoute,
  getReposOwnerRepoStatsContributorsRoute,
  getReposOwnerRepoStatsParticipationRoute,
  getReposOwnerRepoStatsPunchCardRoute,
  getReposOwnerRepoSubscribersRoute,
  getReposOwnerRepoSubscriptionRoute,
  getReposOwnerRepoTagsRoute,
  getReposOwnerRepoTarballRefRoute,
  getReposOwnerRepoTeamsRoute,
  getReposOwnerRepoTopicsRoute,
  getReposOwnerRepoTrafficClonesRoute,
  getReposOwnerRepoTrafficPopularPathsRoute,
  getReposOwnerRepoTrafficPopularReferrersRoute,
  getReposOwnerRepoTrafficViewsRoute,
  getReposOwnerRepoVulnerabilityAlertsRoute,
  getReposOwnerRepoZipballRefRoute,
  patchReposOwnerRepoActionsVariablesNameRoute,
  patchReposOwnerRepoAgentsVariablesNameRoute,
  patchReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsRoute,
  patchReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksRoute,
  patchReposOwnerRepoCheckRunsCheckRunIdRoute,
  patchReposOwnerRepoCheckSuitesPreferencesRoute,
  patchReposOwnerRepoCodeQualitySetupRoute,
  patchReposOwnerRepoCodeScanningAiScanRoute,
  patchReposOwnerRepoCodeScanningAlertsAlertNumberRoute,
  patchReposOwnerRepoCodeScanningDefaultSetupRoute,
  patchReposOwnerRepoCommentsCommentIdRoute,
  patchReposOwnerRepoCopilotCodeReviewSettingsRoute,
  patchReposOwnerRepoDependabotAlertsAlertNumberRoute,
  patchReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRoute,
  patchReposOwnerRepoGitRefsRefRoute,
  patchReposOwnerRepoHooksHookIdConfigRoute,
  patchReposOwnerRepoHooksHookIdRoute,
  patchReposOwnerRepoImportAuthorsAuthorIdRoute,
  patchReposOwnerRepoImportLfsRoute,
  patchReposOwnerRepoImportRoute,
  patchReposOwnerRepoInteractionLimitsPullsCreationCapRoute,
  patchReposOwnerRepoInvitationsInvitationIdRoute,
  patchReposOwnerRepoIssuesCommentsCommentIdRoute,
  patchReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRoute,
  patchReposOwnerRepoIssuesIssueNumberRoute,
  patchReposOwnerRepoIssuesIssueNumberSubIssuesPriorityRoute,
  patchReposOwnerRepoLabelsNameRoute,
  patchReposOwnerRepoMilestonesMilestoneNumberRoute,
  patchReposOwnerRepoPropertiesValuesRoute,
  patchReposOwnerRepoPullsCommentsCommentIdRoute,
  patchReposOwnerRepoPullsPullNumberRoute,
  patchReposOwnerRepoReleasesAssetsAssetIdRoute,
  patchReposOwnerRepoReleasesReleaseIdRoute,
  patchReposOwnerRepoRoute,
  patchReposOwnerRepoSecretScanningAlertsAlertNumberRoute,
  patchReposOwnerRepoSecretScanningCustomPatternsPatternIdRoute,
  patchReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsCommentIdRoute,
  patchReposOwnerRepoSecurityAdvisoriesGhsaIdRoute,
  postReposOwnerRepoActionsJobsJobIdRerunRoute,
  postReposOwnerRepoActionsPoliciesRoute,
  postReposOwnerRepoActionsRunnersGenerateJitconfigRoute,
  postReposOwnerRepoActionsRunnersRegistrationTokenRoute,
  postReposOwnerRepoActionsRunnersRemoveTokenRoute,
  postReposOwnerRepoActionsRunnersRunnerIdLabelsRoute,
  postReposOwnerRepoActionsRunsRunIdApproveRoute,
  postReposOwnerRepoActionsRunsRunIdCancelRoute,
  postReposOwnerRepoActionsRunsRunIdDeploymentProtectionRuleRoute,
  postReposOwnerRepoActionsRunsRunIdForceCancelRoute,
  postReposOwnerRepoActionsRunsRunIdPendingDeploymentsRoute,
  postReposOwnerRepoActionsRunsRunIdRerunFailedJobsRoute,
  postReposOwnerRepoActionsRunsRunIdRerunRoute,
  postReposOwnerRepoActionsVariablesRoute,
  postReposOwnerRepoActionsWorkflowsWorkflowIdDispatchesRoute,
  postReposOwnerRepoAgentsVariablesRoute,
  postReposOwnerRepoAttestationsRoute,
  postReposOwnerRepoAutolinksRoute,
  postReposOwnerRepoBranchesBranchProtectionEnforceAdminsRoute,
  postReposOwnerRepoBranchesBranchProtectionRequiredSignaturesRoute,
  postReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRoute,
  postReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRoute,
  postReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRoute,
  postReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRoute,
  postReposOwnerRepoBranchesBranchRenameRoute,
  postReposOwnerRepoCheckRunsCheckRunIdRerequestRoute,
  postReposOwnerRepoCheckRunsRoute,
  postReposOwnerRepoCheckSuitesCheckSuiteIdRerequestRoute,
  postReposOwnerRepoCheckSuitesRoute,
  postReposOwnerRepoCodeScanningAlertsAlertNumberAutofixCommitsRoute,
  postReposOwnerRepoCodeScanningAlertsAlertNumberAutofixRoute,
  postReposOwnerRepoCodeScanningCodeqlVariantAnalysesRoute,
  postReposOwnerRepoCodeScanningSarifsRoute,
  postReposOwnerRepoCodespacesRoute,
  postReposOwnerRepoCommentsCommentIdReactionsRoute,
  postReposOwnerRepoCommitsCommitShaCommentsRoute,
  postReposOwnerRepoDependencyGraphSnapshotsRoute,
  postReposOwnerRepoDeploymentsDeploymentIdStatusesRoute,
  postReposOwnerRepoDeploymentsRoute,
  postReposOwnerRepoDispatchesRoute,
  postReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesRoute,
  postReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesRoute,
  postReposOwnerRepoEnvironmentsEnvironmentNameVariablesRoute,
  postReposOwnerRepoForksRoute,
  postReposOwnerRepoGitBlobsRoute,
  postReposOwnerRepoGitCommitsRoute,
  postReposOwnerRepoGitRefsRoute,
  postReposOwnerRepoGitTagsRoute,
  postReposOwnerRepoGitTreesRoute,
  postReposOwnerRepoHooksHookIdDeliveriesDeliveryIdAttemptsRoute,
  postReposOwnerRepoHooksHookIdPingsRoute,
  postReposOwnerRepoHooksHookIdTestsRoute,
  postReposOwnerRepoHooksRoute,
  postReposOwnerRepoIssuesCommentsCommentIdReactionsRoute,
  postReposOwnerRepoIssuesIssueNumberArtifactsRoute,
  postReposOwnerRepoIssuesIssueNumberAssigneesRoute,
  postReposOwnerRepoIssuesIssueNumberCommentsRoute,
  postReposOwnerRepoIssuesIssueNumberDependenciesBlockedByRoute,
  postReposOwnerRepoIssuesIssueNumberIssueFieldValuesRoute,
  postReposOwnerRepoIssuesIssueNumberLabelsRoute,
  postReposOwnerRepoIssuesIssueNumberReactionsRoute,
  postReposOwnerRepoIssuesIssueNumberRelatesToRoute,
  postReposOwnerRepoIssuesIssueNumberSubIssuesRoute,
  postReposOwnerRepoIssuesIssueNumberSuggestionsSuggestionIdApproveRoute,
  postReposOwnerRepoIssuesIssueNumberSuggestionsSuggestionIdDismissRoute,
  postReposOwnerRepoIssuesRoute,
  postReposOwnerRepoKeysRoute,
  postReposOwnerRepoLabelsRoute,
  postReposOwnerRepoMergesRoute,
  postReposOwnerRepoMergeUpstreamRoute,
  postReposOwnerRepoMilestonesRoute,
  postReposOwnerRepoPagesBuildsRoute,
  postReposOwnerRepoPagesDeploymentsPagesDeploymentIdCancelRoute,
  postReposOwnerRepoPagesDeploymentsRoute,
  postReposOwnerRepoPagesRoute,
  postReposOwnerRepoPullsCommentsCommentIdReactionsRoute,
  postReposOwnerRepoPullsPullNumberCodespacesRoute,
  postReposOwnerRepoPullsPullNumberCommentsCommentIdRepliesRoute,
  postReposOwnerRepoPullsPullNumberCommentsRoute,
  postReposOwnerRepoPullsPullNumberCopilotCodeReviewRoute,
  postReposOwnerRepoPullsPullNumberRequestedReviewersRerequestRoute,
  postReposOwnerRepoPullsPullNumberRequestedReviewersRoute,
  postReposOwnerRepoPullsPullNumberReviewsReviewIdEventsRoute,
  postReposOwnerRepoPullsPullNumberReviewsRoute,
  postReposOwnerRepoPullsRoute,
  postReposOwnerRepoReleasesGenerateNotesRoute,
  postReposOwnerRepoReleasesReleaseIdAssetsRoute,
  postReposOwnerRepoReleasesReleaseIdReactionsRoute,
  postReposOwnerRepoReleasesRoute,
  postReposOwnerRepoRulesetsRoute,
  postReposOwnerRepoSecretScanningCustomPatternsRoute,
  postReposOwnerRepoSecretScanningPushProtectionBypassesRoute,
  postReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsRoute,
  postReposOwnerRepoSecurityAdvisoriesGhsaIdCveRoute,
  postReposOwnerRepoSecurityAdvisoriesGhsaIdForksRoute,
  postReposOwnerRepoSecurityAdvisoriesReportsRoute,
  postReposOwnerRepoSecurityAdvisoriesRoute,
  postReposOwnerRepoStacksRoute,
  postReposOwnerRepoStacksStackNumberAddRoute,
  postReposOwnerRepoStacksStackNumberUnstackRoute,
  postReposOwnerRepoStatusesShaRoute,
  postReposOwnerRepoTransferRoute,
  postReposTemplateOwnerTemplateRepoGenerateRoute,
  putReposOwnerRepoActionsCacheRetentionLimitRoute,
  putReposOwnerRepoActionsCacheStorageLimitRoute,
  putReposOwnerRepoActionsOidcCustomizationSubRoute,
  putReposOwnerRepoActionsPermissionsAccessRoute,
  putReposOwnerRepoActionsPermissionsArtifactAndLogRetentionRoute,
  putReposOwnerRepoActionsPermissionsForkPrContributorApprovalRoute,
  putReposOwnerRepoActionsPermissionsForkPrWorkflowsPrivateReposRoute,
  putReposOwnerRepoActionsPermissionsRoute,
  putReposOwnerRepoActionsPermissionsSelectedActionsRoute,
  putReposOwnerRepoActionsPermissionsWorkflowRoute,
  putReposOwnerRepoActionsPoliciesPolicyIdRoute,
  putReposOwnerRepoActionsRunnersRunnerIdLabelsRoute,
  putReposOwnerRepoActionsSecretsSecretNameRoute,
  putReposOwnerRepoActionsWorkflowsWorkflowIdDisableRoute,
  putReposOwnerRepoActionsWorkflowsWorkflowIdEnableRoute,
  putReposOwnerRepoAgentsSecretsSecretNameRoute,
  putReposOwnerRepoAutomatedSecurityFixesRoute,
  putReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRoute,
  putReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRoute,
  putReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRoute,
  putReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRoute,
  putReposOwnerRepoBranchesBranchProtectionRoute,
  putReposOwnerRepoCodespacesSecretsSecretNameRoute,
  putReposOwnerRepoCollaboratorsUsernameRoute,
  putReposOwnerRepoContentsPathRoute,
  putReposOwnerRepoDependabotRunnerSettingsRoute,
  putReposOwnerRepoDependabotSecretsSecretNameRoute,
  putReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyIdRoute,
  putReposOwnerRepoEnvironmentsEnvironmentNameRoute,
  putReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRoute,
  putReposOwnerRepoImmutableReleasesRoute,
  putReposOwnerRepoImportRoute,
  putReposOwnerRepoInteractionLimitsPullsBypassListRoute,
  putReposOwnerRepoInteractionLimitsRoute,
  putReposOwnerRepoIssuesCommentsCommentIdPinRoute,
  putReposOwnerRepoIssuesIssueNumberIssueFieldValuesRoute,
  putReposOwnerRepoIssuesIssueNumberLabelsRoute,
  putReposOwnerRepoIssuesIssueNumberLockRoute,
  putReposOwnerRepoNotificationsRoute,
  putReposOwnerRepoPagesRoute,
  putReposOwnerRepoPrivateVulnerabilityReportingRoute,
  putReposOwnerRepoPullsPullNumberMergeAsyncRoute,
  putReposOwnerRepoPullsPullNumberMergeRoute,
  putReposOwnerRepoPullsPullNumberReviewsReviewIdDismissalsRoute,
  putReposOwnerRepoPullsPullNumberReviewsReviewIdRoute,
  putReposOwnerRepoPullsPullNumberUpdateBranchRoute,
  putReposOwnerRepoRulesetsRulesetIdRoute,
  putReposOwnerRepoSubscriptionRoute,
  putReposOwnerRepoTopicsRoute,
  putReposOwnerRepoVulnerabilityAlertsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reposHandler = app
  .openapi(getReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsArtifactsArtifactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsArtifactsArtifactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsArtifactsArtifactIdArchiveFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsCacheRetentionLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsCacheRetentionLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsCacheStorageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsCacheStorageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsCacheUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsCachesCacheIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsConcurrencyGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsConcurrencyGroupsConcurrencyGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsJobsJobIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsJobsJobIdRerunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsJobsJobIdStepsStepNumberLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsOidcCustomizationSubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsOidcCustomizationSubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsOrganizationSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsOrganizationVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPermissionsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsPermissionsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPermissionsArtifactAndLogRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsPermissionsArtifactAndLogRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPermissionsForkPrContributorApprovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsPermissionsForkPrContributorApprovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPermissionsForkPrWorkflowsPrivateReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsPermissionsForkPrWorkflowsPrivateReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPermissionsSelectedActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsPermissionsSelectedActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPermissionsWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsPermissionsWorkflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunnersDeprecationsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunnersDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunnersGenerateJitconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunnersRegistrationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunnersRemoveTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunnersRunnerIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunnersRunnerIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsRunnersRunnerIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsRunnersRunnerIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsRunnersRunnerIdLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdConcurrencyGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunIdDeploymentProtectionRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunIdForceCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsRunsRunIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdPendingDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunIdPendingDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunIdRerunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsRunsRunIdRerunFailedJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsRunsRunIdTimingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoActionsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoActionsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsWorkflowsWorkflowIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoActionsWorkflowsWorkflowIdDispatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoActionsWorkflowsWorkflowIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsWorkflowsWorkflowIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActionsWorkflowsWorkflowIdTimingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAgentsOrganizationSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAgentsOrganizationVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAgentsSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAgentsSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAgentsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoAgentsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoAgentsSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAgentsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoAgentsVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAgentsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoAgentsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoAgentsVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAssigneesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAssigneesAssigneeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoAttestationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAttestationsSubjectDigestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAutolinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoAutolinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAutolinksAutolinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoAutolinksAutolinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoAutomatedSecurityFixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoAutomatedSecurityFixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoAutomatedSecurityFixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoBranchesBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoBranchesBranchProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoBranchesBranchProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoBranchesBranchProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoBranchesBranchProtectionEnforceAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoBranchesBranchProtectionEnforceAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoBranchesBranchProtectionEnforceAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoBranchesBranchProtectionRequiredSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoBranchesBranchProtectionRequiredSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoBranchesBranchProtectionRequiredSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoBranchesBranchProtectionRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoBranchesBranchProtectionRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoBranchesBranchRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCheckRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCheckRunsCheckRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoCheckRunsCheckRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCheckRunsCheckRunIdAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCheckRunsCheckRunIdRerequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCheckSuitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoCheckSuitesPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCheckSuitesCheckSuiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCheckSuitesCheckSuiteIdCheckRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCheckSuitesCheckSuiteIdRerequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeQualityFindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeQualityFindingsFindingNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeQualitySetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoCodeQualitySetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningAiScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoCodeScanningAiScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningAlertsAlertNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoCodeScanningAlertsAlertNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningAlertsAlertNumberAutofixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCodeScanningAlertsAlertNumberAutofixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCodeScanningAlertsAlertNumberAutofixCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningAlertsAlertNumberInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningAnalysesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningAnalysesAnalysisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoCodeScanningAnalysesAnalysisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningCodeqlDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningCodeqlDatabasesLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoCodeScanningCodeqlDatabasesLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCodeScanningCodeqlVariantAnalysesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningCodeqlVariantAnalysesCodeqlVariantAnalysisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReposOwnerRepoCodeScanningCodeqlVariantAnalysesCodeqlVariantAnalysisIdReposRepoOwnerRepoNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReposOwnerRepoCodeScanningDefaultSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoCodeScanningDefaultSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCodeScanningSarifsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeScanningSarifsSarifIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeSecurityConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeownersErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCodespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodespacesDevcontainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodespacesMachinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodespacesNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodespacesPermissionsCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodespacesSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodespacesSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodespacesSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoCodespacesSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoCodespacesSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCollaboratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCollaboratorsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoCollaboratorsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoCollaboratorsUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCollaboratorsUsernamePermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoCommentsCommentIdReactionsReactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommitsCommitShaBranchesWhereHeadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommitsCommitShaCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoCommitsCommitShaCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommitsCommitShaPullsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommitsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommitsRefCheckRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommitsRefCheckSuitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommitsRefStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommitsRefStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCommunityProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCompareBaseheadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoContentsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoContentsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoContentsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoContributorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCopilotCloudAgentConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCopilotCodeReviewSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoCopilotCodeReviewSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependabotAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependabotAlertsAlertNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoDependabotAlertsAlertNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependabotRunnerSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoDependabotRunnerSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependabotSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependabotSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependabotSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoDependabotSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoDependabotSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependencyGraphCompareBaseheadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependencyGraphSbomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependencyGraphSbomFetchReportSbomUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDependencyGraphSbomGenerateReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoDependencyGraphSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDeploymentsDeploymentIdStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoDeploymentsDeploymentIdStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoDeploymentsDeploymentIdStatusesStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoDispatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoEnvironmentsEnvironmentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoEnvironmentsEnvironmentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoEnvironmentsEnvironmentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesProtectionRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesProtectionRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReposOwnerRepoEnvironmentsEnvironmentNameSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoEnvironmentsEnvironmentNameSecretsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoEnvironmentsEnvironmentNameVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoEnvironmentsEnvironmentNameVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoForksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoForksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoGitBlobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitBlobsFileShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoGitCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitCommitsCommitShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitMatchingRefsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitRefRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoGitRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoGitRefsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoGitRefsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoGitTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitTagsTagShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoGitTreesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitTreesTreeShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoHashAlgorithmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoHooksHookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoHooksHookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoHooksHookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoHooksHookIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoHooksHookIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoHooksHookIdDeliveriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoHooksHookIdDeliveriesDeliveryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoHooksHookIdDeliveriesDeliveryIdAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoHooksHookIdPingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoHooksHookIdTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoImmutableReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoImmutableReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoImmutableReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoImportAuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoImportAuthorsAuthorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoImportLargeFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoImportLfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoInstallationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoInteractionLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoInteractionLimitsPullsBypassListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoInteractionLimitsPullsBypassListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoInteractionLimitsPullsBypassListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoInteractionLimitsPullsCreationCapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoInteractionLimitsPullsCreationCapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssueTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoIssuesCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoIssuesCommentsCommentIdPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesCommentsCommentIdPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesCommentsCommentIdReactionsReactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoIssuesIssueNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberAssigneesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberAssigneesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberAssigneesAssigneeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberDependenciesBlockedByRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberDependenciesBlockedByRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberDependenciesBlockedByIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberDependenciesBlockingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberIssueFieldValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberIssueFieldValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoIssuesIssueNumberIssueFieldValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberIssueFieldValuesIssueFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoIssuesIssueNumberLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoIssuesIssueNumberLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberParentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberReactionsReactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberRelatesToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberRelatesToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberRelatesToIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoIssuesIssueNumberSubIssueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberSubIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberSubIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoIssuesIssueNumberSubIssuesPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberSuggestionsSuggestionIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoIssuesIssueNumberSuggestionsSuggestionIdDismissRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoIssuesIssueNumberTimelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoLabelsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoMergeUpstreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoMergesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoMilestonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoMilestonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoMilestonesMilestoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoMilestonesMilestoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoMilestonesMilestoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoMilestonesMilestoneNumberLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPagesBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPagesBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPagesBuildsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPagesBuildsBuildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPagesDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPagesDeploymentsPagesDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPagesDeploymentsPagesDeploymentIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPagesHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPlanningStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPrivateVulnerabilityReportingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoPrivateVulnerabilityReportingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoPrivateVulnerabilityReportingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPropertiesValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoPropertiesValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoPullsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoPullsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsCommentsCommentIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoPullsCommentsCommentIdReactionsReactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoPullsPullNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsPullNumberCodespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsPullNumberCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsPullNumberCommentsCommentIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsPullNumberCopilotCodeReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoPullsPullNumberMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoPullsPullNumberMergeAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberMergeAsyncUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberRequestedReviewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsPullNumberRequestedReviewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoPullsPullNumberRequestedReviewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsPullNumberRequestedReviewersRerequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsPullNumberReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberReviewsReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoPullsPullNumberReviewsReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoPullsPullNumberReviewsReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoPullsPullNumberReviewsReviewIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoPullsPullNumberReviewsReviewIdDismissalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoPullsPullNumberReviewsReviewIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoPullsPullNumberUpdateBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoReadmeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoReadmeDirRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoReleasesAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoReleasesAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoReleasesAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoReleasesGenerateNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoReleasesLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoReleasesTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoReleasesReleaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoReleasesReleaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoReleasesReleaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoReleasesReleaseIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoReleasesReleaseIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoReleasesReleaseIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoReleasesReleaseIdReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoReleasesReleaseIdReactionsReactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoRulesBranchesBranchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoRulesetsRuleSuitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoRulesetsRuleSuitesRuleSuiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoRulesetsRulesetIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoRulesetsRulesetIdHistoryVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecretScanningAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecretScanningAlertsAlertNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoSecretScanningAlertsAlertNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecretScanningAlertsAlertNumberLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecretScanningCustomPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoSecretScanningCustomPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoSecretScanningCustomPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoSecretScanningCustomPatternsPatternIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoSecretScanningPushProtectionBypassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecretScanningScanHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecurityAdvisoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoSecurityAdvisoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoSecurityAdvisoriesReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecurityAdvisoriesGhsaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoSecurityAdvisoriesGhsaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoSecurityAdvisoriesGhsaIdCveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoSecurityAdvisoriesGhsaIdForksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoStacksStackNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoStacksStackNumberAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoStacksStackNumberUnstackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoStargazersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoStargazersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoStargazersHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoStatsCodeFrequencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoStatsCommitActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoStatsContributorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoStatsParticipationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoStatsPunchCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoStatusesShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoTarballRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoTrafficClonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoTrafficPopularPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoTrafficPopularReferrersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoTrafficViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoVulnerabilityAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoVulnerabilityAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoVulnerabilityAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoZipballRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposTemplateOwnerTemplateRepoGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
