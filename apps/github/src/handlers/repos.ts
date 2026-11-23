import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getReposOwnerRepoRouteHandler: RouteHandler<typeof getReposOwnerRepoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsArtifactsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsArtifactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsArtifactsArtifactIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsArtifactsArtifactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoActionsArtifactsArtifactIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoActionsArtifactsArtifactIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsArtifactsArtifactIdArchiveFormatRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsArtifactsArtifactIdArchiveFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsCacheRetentionLimitRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsCacheRetentionLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsCacheRetentionLimitRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsCacheRetentionLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsCacheStorageLimitRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsCacheStorageLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsCacheStorageLimitRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsCacheStorageLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsCacheUsageRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsCacheUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsCachesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsCachesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoActionsCachesRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoActionsCachesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoActionsCachesCacheIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoActionsCachesCacheIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsConcurrencyGroupsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsConcurrencyGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsConcurrencyGroupsConcurrencyGroupNameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsConcurrencyGroupsConcurrencyGroupNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsJobsJobIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsJobsJobIdLogsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsJobsJobIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsJobsJobIdRerunRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsJobsJobIdRerunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsJobsJobIdStepsStepNumberLogsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsJobsJobIdStepsStepNumberLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsOidcCustomizationSubRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsOidcCustomizationSubRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsOidcCustomizationSubRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsOidcCustomizationSubRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsOrganizationSecretsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsOrganizationSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsOrganizationVariablesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsOrganizationVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsPermissionsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsPermissionsRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsPermissionsAccessRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsPermissionsAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsPermissionsAccessRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsPermissionsAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsPermissionsArtifactAndLogRetentionRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsPermissionsArtifactAndLogRetentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsPermissionsArtifactAndLogRetentionRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsPermissionsArtifactAndLogRetentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsPermissionsForkPrContributorApprovalRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsPermissionsForkPrContributorApprovalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsPermissionsForkPrContributorApprovalRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsPermissionsForkPrContributorApprovalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsPermissionsForkPrWorkflowsPrivateReposRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsPermissionsForkPrWorkflowsPrivateReposRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsPermissionsForkPrWorkflowsPrivateReposRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsPermissionsForkPrWorkflowsPrivateReposRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsPermissionsSelectedActionsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsPermissionsSelectedActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsPermissionsSelectedActionsRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsPermissionsSelectedActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsPermissionsWorkflowRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsPermissionsWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsPermissionsWorkflowRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsPermissionsWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsPoliciesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsPoliciesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoActionsPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoActionsPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunnersRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunnersDeprecationsVersionRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunnersDeprecationsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunnersDownloadsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunnersDownloadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunnersGenerateJitconfigRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunnersGenerateJitconfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunnersRegistrationTokenRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunnersRegistrationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunnersRemoveTokenRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunnersRemoveTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunnersRunnerIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunnersRunnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoActionsRunnersRunnerIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoActionsRunnersRunnerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunnersRunnerIdLabelsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunnersRunnerIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunnersRunnerIdLabelsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunnersRunnerIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsRunnersRunnerIdLabelsRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsRunnersRunnerIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoActionsRunnersRunnerIdLabelsRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoActionsRunnersRunnerIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoActionsRunnersRunnerIdLabelsNameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoActionsRunnersRunnerIdLabelsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRunIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoActionsRunsRunIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoActionsRunsRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRunIdApprovalsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRunIdApprovalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunsRunIdApproveRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunsRunIdApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRunIdArtifactsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRunIdArtifactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberJobsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberLogsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRunIdAttemptsAttemptNumberLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunsRunIdCancelRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunsRunIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRunIdConcurrencyGroupsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRunIdConcurrencyGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunsRunIdDeploymentProtectionRuleRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunsRunIdDeploymentProtectionRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunsRunIdForceCancelRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunsRunIdForceCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRunIdJobsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRunIdJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRunIdLogsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRunIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoActionsRunsRunIdLogsRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoActionsRunsRunIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRunIdPendingDeploymentsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRunIdPendingDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunsRunIdPendingDeploymentsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunsRunIdPendingDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunsRunIdRerunRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunsRunIdRerunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsRunsRunIdRerunFailedJobsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsRunsRunIdRerunFailedJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsRunsRunIdTimingRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsRunsRunIdTimingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsSecretsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsSecretsPublicKeyRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsSecretsPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsSecretsSecretNameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsSecretsSecretNameRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoActionsSecretsSecretNameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoActionsSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsVariablesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsVariablesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsVariablesNameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsVariablesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoActionsVariablesNameRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoActionsVariablesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoActionsVariablesNameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoActionsVariablesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsWorkflowsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsWorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsWorkflowsWorkflowIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsWorkflowsWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsWorkflowsWorkflowIdDisableRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsWorkflowsWorkflowIdDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoActionsWorkflowsWorkflowIdDispatchesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoActionsWorkflowsWorkflowIdDispatchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoActionsWorkflowsWorkflowIdEnableRouteHandler: RouteHandler<
  typeof putReposOwnerRepoActionsWorkflowsWorkflowIdEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsWorkflowsWorkflowIdRunsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsWorkflowsWorkflowIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActionsWorkflowsWorkflowIdTimingRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActionsWorkflowsWorkflowIdTimingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoActivityRouteHandler: RouteHandler<
  typeof getReposOwnerRepoActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoAgentsOrganizationSecretsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoAgentsOrganizationSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoAgentsOrganizationVariablesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoAgentsOrganizationVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoAgentsSecretsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoAgentsSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoAgentsSecretsPublicKeyRouteHandler: RouteHandler<
  typeof getReposOwnerRepoAgentsSecretsPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoAgentsSecretsSecretNameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoAgentsSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoAgentsSecretsSecretNameRouteHandler: RouteHandler<
  typeof putReposOwnerRepoAgentsSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoAgentsSecretsSecretNameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoAgentsSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoAgentsVariablesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoAgentsVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoAgentsVariablesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoAgentsVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoAgentsVariablesNameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoAgentsVariablesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoAgentsVariablesNameRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoAgentsVariablesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoAgentsVariablesNameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoAgentsVariablesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoAssigneesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoAssigneesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoAssigneesAssigneeRouteHandler: RouteHandler<
  typeof getReposOwnerRepoAssigneesAssigneeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoAttestationsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoAttestationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoAttestationsSubjectDigestRouteHandler: RouteHandler<
  typeof getReposOwnerRepoAttestationsSubjectDigestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoAutolinksRouteHandler: RouteHandler<
  typeof getReposOwnerRepoAutolinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoAutolinksRouteHandler: RouteHandler<
  typeof postReposOwnerRepoAutolinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoAutolinksAutolinkIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoAutolinksAutolinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoAutolinksAutolinkIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoAutolinksAutolinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoAutomatedSecurityFixesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoAutomatedSecurityFixesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoAutomatedSecurityFixesRouteHandler: RouteHandler<
  typeof putReposOwnerRepoAutomatedSecurityFixesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoAutomatedSecurityFixesRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoAutomatedSecurityFixesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoBranchesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoBranchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoBranchesBranchRouteHandler: RouteHandler<
  typeof getReposOwnerRepoBranchesBranchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoBranchesBranchProtectionRouteHandler: RouteHandler<
  typeof getReposOwnerRepoBranchesBranchProtectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoBranchesBranchProtectionRouteHandler: RouteHandler<
  typeof putReposOwnerRepoBranchesBranchProtectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoBranchesBranchProtectionRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoBranchesBranchProtectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoBranchesBranchProtectionEnforceAdminsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoBranchesBranchProtectionEnforceAdminsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoBranchesBranchProtectionEnforceAdminsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoBranchesBranchProtectionEnforceAdminsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoBranchesBranchProtectionEnforceAdminsRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoBranchesBranchProtectionEnforceAdminsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoBranchesBranchProtectionRequiredSignaturesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoBranchesBranchProtectionRequiredSignaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoBranchesBranchProtectionRequiredSignaturesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoBranchesBranchProtectionRequiredSignaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoBranchesBranchProtectionRequiredSignaturesRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoBranchesBranchProtectionRequiredSignaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksRouteHandler: RouteHandler<
  typeof getReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRouteHandler: RouteHandler<
  typeof putReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoBranchesBranchProtectionRestrictionsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoBranchesBranchProtectionRestrictionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoBranchesBranchProtectionRestrictionsRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoBranchesBranchProtectionRestrictionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRouteHandler: RouteHandler<
  typeof putReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRouteHandler: RouteHandler<
  typeof putReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRouteHandler: RouteHandler<
  typeof getReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRouteHandler: RouteHandler<
  typeof postReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRouteHandler: RouteHandler<
  typeof putReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoBranchesBranchRenameRouteHandler: RouteHandler<
  typeof postReposOwnerRepoBranchesBranchRenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoCheckRunsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoCheckRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCheckRunsCheckRunIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCheckRunsCheckRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoCheckRunsCheckRunIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoCheckRunsCheckRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCheckRunsCheckRunIdAnnotationsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCheckRunsCheckRunIdAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoCheckRunsCheckRunIdRerequestRouteHandler: RouteHandler<
  typeof postReposOwnerRepoCheckRunsCheckRunIdRerequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoCheckSuitesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoCheckSuitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoCheckSuitesPreferencesRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoCheckSuitesPreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCheckSuitesCheckSuiteIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCheckSuitesCheckSuiteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCheckSuitesCheckSuiteIdCheckRunsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCheckSuitesCheckSuiteIdCheckRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoCheckSuitesCheckSuiteIdRerequestRouteHandler: RouteHandler<
  typeof postReposOwnerRepoCheckSuitesCheckSuiteIdRerequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeQualityFindingsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeQualityFindingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeQualityFindingsFindingNumberRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeQualityFindingsFindingNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeQualitySetupRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeQualitySetupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoCodeQualitySetupRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoCodeQualitySetupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeScanningAiScanRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeScanningAiScanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoCodeScanningAiScanRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoCodeScanningAiScanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeScanningAlertsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeScanningAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeScanningAlertsAlertNumberRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeScanningAlertsAlertNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoCodeScanningAlertsAlertNumberRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoCodeScanningAlertsAlertNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeScanningAlertsAlertNumberAutofixRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeScanningAlertsAlertNumberAutofixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoCodeScanningAlertsAlertNumberAutofixRouteHandler: RouteHandler<
  typeof postReposOwnerRepoCodeScanningAlertsAlertNumberAutofixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoCodeScanningAlertsAlertNumberAutofixCommitsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoCodeScanningAlertsAlertNumberAutofixCommitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeScanningAlertsAlertNumberInstancesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeScanningAlertsAlertNumberInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeScanningAnalysesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeScanningAnalysesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeScanningAnalysesAnalysisIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeScanningAnalysesAnalysisIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoCodeScanningAnalysesAnalysisIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoCodeScanningAnalysesAnalysisIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeScanningCodeqlDatabasesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeScanningCodeqlDatabasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeScanningCodeqlDatabasesLanguageRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeScanningCodeqlDatabasesLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoCodeScanningCodeqlDatabasesLanguageRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoCodeScanningCodeqlDatabasesLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoCodeScanningCodeqlVariantAnalysesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoCodeScanningCodeqlVariantAnalysesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeScanningCodeqlVariantAnalysesCodeqlVariantAnalysisIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeScanningCodeqlVariantAnalysesCodeqlVariantAnalysisIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeScanningCodeqlVariantAnalysesCodeqlVariantAnalysisIdReposRepoOwnerRepoNameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeScanningCodeqlVariantAnalysesCodeqlVariantAnalysisIdReposRepoOwnerRepoNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeScanningDefaultSetupRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeScanningDefaultSetupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoCodeScanningDefaultSetupRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoCodeScanningDefaultSetupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoCodeScanningSarifsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoCodeScanningSarifsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeScanningSarifsSarifIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeScanningSarifsSarifIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeSecurityConfigurationRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeSecurityConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodeownersErrorsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodeownersErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodespacesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoCodespacesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoCodespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodespacesDevcontainersRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodespacesDevcontainersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodespacesMachinesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodespacesMachinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodespacesNewRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodespacesNewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodespacesPermissionsCheckRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodespacesPermissionsCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodespacesSecretsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodespacesSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodespacesSecretsPublicKeyRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodespacesSecretsPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCodespacesSecretsSecretNameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCodespacesSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoCodespacesSecretsSecretNameRouteHandler: RouteHandler<
  typeof putReposOwnerRepoCodespacesSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoCodespacesSecretsSecretNameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoCodespacesSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCollaboratorsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCollaboratorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCollaboratorsUsernameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCollaboratorsUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoCollaboratorsUsernameRouteHandler: RouteHandler<
  typeof putReposOwnerRepoCollaboratorsUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoCollaboratorsUsernameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoCollaboratorsUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCollaboratorsUsernamePermissionRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCollaboratorsUsernamePermissionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCommentsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCommentsCommentIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoCommentsCommentIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoCommentsCommentIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCommentsCommentIdReactionsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCommentsCommentIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoCommentsCommentIdReactionsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoCommentsCommentIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoCommentsCommentIdReactionsReactionIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoCommentsCommentIdReactionsReactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCommitsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCommitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCommitsCommitShaBranchesWhereHeadRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCommitsCommitShaBranchesWhereHeadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCommitsCommitShaCommentsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCommitsCommitShaCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoCommitsCommitShaCommentsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoCommitsCommitShaCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCommitsCommitShaPullsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCommitsCommitShaPullsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCommitsRefRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCommitsRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCommitsRefCheckRunsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCommitsRefCheckRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCommitsRefCheckSuitesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCommitsRefCheckSuitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCommitsRefStatusRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCommitsRefStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCommitsRefStatusesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCommitsRefStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCommunityProfileRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCommunityProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCompareBaseheadRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCompareBaseheadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoContentsPathRouteHandler: RouteHandler<
  typeof getReposOwnerRepoContentsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoContentsPathRouteHandler: RouteHandler<
  typeof putReposOwnerRepoContentsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoContentsPathRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoContentsPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoContributorsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoContributorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCopilotCloudAgentConfigurationRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCopilotCloudAgentConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoCopilotCodeReviewSettingsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoCopilotCodeReviewSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoCopilotCodeReviewSettingsRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoCopilotCodeReviewSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoDependabotAlertsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoDependabotAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoDependabotAlertsAlertNumberRouteHandler: RouteHandler<
  typeof getReposOwnerRepoDependabotAlertsAlertNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoDependabotAlertsAlertNumberRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoDependabotAlertsAlertNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoDependabotRunnerSettingsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoDependabotRunnerSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoDependabotRunnerSettingsRouteHandler: RouteHandler<
  typeof putReposOwnerRepoDependabotRunnerSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoDependabotSecretsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoDependabotSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoDependabotSecretsPublicKeyRouteHandler: RouteHandler<
  typeof getReposOwnerRepoDependabotSecretsPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoDependabotSecretsSecretNameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoDependabotSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoDependabotSecretsSecretNameRouteHandler: RouteHandler<
  typeof putReposOwnerRepoDependabotSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoDependabotSecretsSecretNameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoDependabotSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoDependencyGraphCompareBaseheadRouteHandler: RouteHandler<
  typeof getReposOwnerRepoDependencyGraphCompareBaseheadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoDependencyGraphSbomRouteHandler: RouteHandler<
  typeof getReposOwnerRepoDependencyGraphSbomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoDependencyGraphSbomFetchReportSbomUuidRouteHandler: RouteHandler<
  typeof getReposOwnerRepoDependencyGraphSbomFetchReportSbomUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoDependencyGraphSbomGenerateReportRouteHandler: RouteHandler<
  typeof getReposOwnerRepoDependencyGraphSbomGenerateReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoDependencyGraphSnapshotsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoDependencyGraphSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoDeploymentsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoDeploymentsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoDeploymentsDeploymentIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoDeploymentsDeploymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoDeploymentsDeploymentIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoDeploymentsDeploymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoDeploymentsDeploymentIdStatusesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoDeploymentsDeploymentIdStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoDeploymentsDeploymentIdStatusesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoDeploymentsDeploymentIdStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoDeploymentsDeploymentIdStatusesStatusIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoDeploymentsDeploymentIdStatusesStatusIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoDispatchesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoDispatchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoEnvironmentsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoEnvironmentsEnvironmentNameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoEnvironmentsEnvironmentNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoEnvironmentsEnvironmentNameRouteHandler: RouteHandler<
  typeof putReposOwnerRepoEnvironmentsEnvironmentNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoEnvironmentsEnvironmentNameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoEnvironmentsEnvironmentNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyIdRouteHandler: RouteHandler<
  typeof putReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesAppsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesProtectionRuleIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesProtectionRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesProtectionRuleIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesProtectionRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoEnvironmentsEnvironmentNameSecretsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoEnvironmentsEnvironmentNameSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoEnvironmentsEnvironmentNameSecretsPublicKeyRouteHandler: RouteHandler<
  typeof getReposOwnerRepoEnvironmentsEnvironmentNameSecretsPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRouteHandler: RouteHandler<
  typeof putReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoEnvironmentsEnvironmentNameSecretsSecretNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoEnvironmentsEnvironmentNameVariablesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoEnvironmentsEnvironmentNameVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoEnvironmentsEnvironmentNameVariablesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoEnvironmentsEnvironmentNameVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoEnvironmentsEnvironmentNameVariablesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoEventsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoForksRouteHandler: RouteHandler<
  typeof getReposOwnerRepoForksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoForksRouteHandler: RouteHandler<
  typeof postReposOwnerRepoForksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoGitBlobsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoGitBlobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoGitBlobsFileShaRouteHandler: RouteHandler<
  typeof getReposOwnerRepoGitBlobsFileShaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoGitCommitsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoGitCommitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoGitCommitsCommitShaRouteHandler: RouteHandler<
  typeof getReposOwnerRepoGitCommitsCommitShaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoGitMatchingRefsRefRouteHandler: RouteHandler<
  typeof getReposOwnerRepoGitMatchingRefsRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoGitRefRefRouteHandler: RouteHandler<
  typeof getReposOwnerRepoGitRefRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoGitRefsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoGitRefsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoGitRefsRefRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoGitRefsRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoGitRefsRefRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoGitRefsRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoGitTagsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoGitTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoGitTagsTagShaRouteHandler: RouteHandler<
  typeof getReposOwnerRepoGitTagsTagShaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoGitTreesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoGitTreesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoGitTreesTreeShaRouteHandler: RouteHandler<
  typeof getReposOwnerRepoGitTreesTreeShaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoHashAlgorithmRouteHandler: RouteHandler<
  typeof getReposOwnerRepoHashAlgorithmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoHooksRouteHandler: RouteHandler<
  typeof getReposOwnerRepoHooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoHooksRouteHandler: RouteHandler<
  typeof postReposOwnerRepoHooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoHooksHookIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoHooksHookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoHooksHookIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoHooksHookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoHooksHookIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoHooksHookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoHooksHookIdConfigRouteHandler: RouteHandler<
  typeof getReposOwnerRepoHooksHookIdConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoHooksHookIdConfigRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoHooksHookIdConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoHooksHookIdDeliveriesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoHooksHookIdDeliveriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoHooksHookIdDeliveriesDeliveryIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoHooksHookIdDeliveriesDeliveryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoHooksHookIdDeliveriesDeliveryIdAttemptsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoHooksHookIdDeliveriesDeliveryIdAttemptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoHooksHookIdPingsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoHooksHookIdPingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoHooksHookIdTestsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoHooksHookIdTestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoImmutableReleasesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoImmutableReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoImmutableReleasesRouteHandler: RouteHandler<
  typeof putReposOwnerRepoImmutableReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoImmutableReleasesRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoImmutableReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoImportRouteHandler: RouteHandler<
  typeof getReposOwnerRepoImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoImportRouteHandler: RouteHandler<
  typeof putReposOwnerRepoImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoImportRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoImportRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoImportAuthorsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoImportAuthorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoImportAuthorsAuthorIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoImportAuthorsAuthorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoImportLargeFilesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoImportLargeFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoImportLfsRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoImportLfsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoInstallationRouteHandler: RouteHandler<
  typeof getReposOwnerRepoInstallationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoInteractionLimitsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoInteractionLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoInteractionLimitsRouteHandler: RouteHandler<
  typeof putReposOwnerRepoInteractionLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoInteractionLimitsRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoInteractionLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoInteractionLimitsPullsBypassListRouteHandler: RouteHandler<
  typeof getReposOwnerRepoInteractionLimitsPullsBypassListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoInteractionLimitsPullsBypassListRouteHandler: RouteHandler<
  typeof putReposOwnerRepoInteractionLimitsPullsBypassListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoInteractionLimitsPullsBypassListRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoInteractionLimitsPullsBypassListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoInteractionLimitsPullsCreationCapRouteHandler: RouteHandler<
  typeof getReposOwnerRepoInteractionLimitsPullsCreationCapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoInteractionLimitsPullsCreationCapRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoInteractionLimitsPullsCreationCapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoInvitationsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoInvitationsInvitationIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoInvitationsInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoInvitationsInvitationIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoInvitationsInvitationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssueTypesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssueTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesCommentsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesCommentsCommentIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoIssuesCommentsCommentIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoIssuesCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesCommentsCommentIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoIssuesCommentsCommentIdPinRouteHandler: RouteHandler<
  typeof putReposOwnerRepoIssuesCommentsCommentIdPinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesCommentsCommentIdPinRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesCommentsCommentIdPinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesCommentsCommentIdReactionsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesCommentsCommentIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesCommentsCommentIdReactionsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesCommentsCommentIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesCommentsCommentIdReactionsReactionIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesCommentsCommentIdReactionsReactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesEventsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesEventsEventIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIssueNumberRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIssueNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoIssuesIssueNumberRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoIssuesIssueNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIssueNumberArtifactsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIssueNumberArtifactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIssueNumberArtifactsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIssueNumberArtifactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIssueNumberArtifactsArtifactNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIssueNumberAssigneesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIssueNumberAssigneesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIssueNumberAssigneesRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIssueNumberAssigneesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIssueNumberAssigneesAssigneeRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIssueNumberAssigneesAssigneeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIssueNumberCommentsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIssueNumberCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIssueNumberCommentsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIssueNumberCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIssueNumberDependenciesBlockedByRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIssueNumberDependenciesBlockedByRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIssueNumberDependenciesBlockedByRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIssueNumberDependenciesBlockedByRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIssueNumberDependenciesBlockedByIssueIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIssueNumberDependenciesBlockedByIssueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIssueNumberDependenciesBlockingRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIssueNumberDependenciesBlockingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIssueNumberEventsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIssueNumberEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIssueNumberIssueFieldValuesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIssueNumberIssueFieldValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIssueNumberIssueFieldValuesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIssueNumberIssueFieldValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoIssuesIssueNumberIssueFieldValuesRouteHandler: RouteHandler<
  typeof putReposOwnerRepoIssuesIssueNumberIssueFieldValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIssueNumberIssueFieldValuesIssueFieldIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIssueNumberIssueFieldValuesIssueFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIssueNumberLabelsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIssueNumberLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIssueNumberLabelsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIssueNumberLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoIssuesIssueNumberLabelsRouteHandler: RouteHandler<
  typeof putReposOwnerRepoIssuesIssueNumberLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIssueNumberLabelsRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIssueNumberLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIssueNumberLabelsNameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIssueNumberLabelsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoIssuesIssueNumberLockRouteHandler: RouteHandler<
  typeof putReposOwnerRepoIssuesIssueNumberLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIssueNumberLockRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIssueNumberLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIssueNumberParentRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIssueNumberParentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIssueNumberReactionsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIssueNumberReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIssueNumberReactionsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIssueNumberReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIssueNumberReactionsReactionIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIssueNumberReactionsReactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIssueNumberRelatesToRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIssueNumberRelatesToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIssueNumberRelatesToRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIssueNumberRelatesToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIssueNumberRelatesToIssueIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIssueNumberRelatesToIssueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoIssuesIssueNumberSubIssueRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoIssuesIssueNumberSubIssueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIssueNumberSubIssuesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIssueNumberSubIssuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIssueNumberSubIssuesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIssueNumberSubIssuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoIssuesIssueNumberSubIssuesPriorityRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoIssuesIssueNumberSubIssuesPriorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIssueNumberSuggestionsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIssueNumberSuggestionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIssueNumberSuggestionsSuggestionIdApproveRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIssueNumberSuggestionsSuggestionIdApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoIssuesIssueNumberSuggestionsSuggestionIdDismissRouteHandler: RouteHandler<
  typeof postReposOwnerRepoIssuesIssueNumberSuggestionsSuggestionIdDismissRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoIssuesIssueNumberTimelineRouteHandler: RouteHandler<
  typeof getReposOwnerRepoIssuesIssueNumberTimelineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoKeysRouteHandler: RouteHandler<
  typeof getReposOwnerRepoKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoKeysRouteHandler: RouteHandler<
  typeof postReposOwnerRepoKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoKeysKeyIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoKeysKeyIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoLabelsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoLabelsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoLabelsNameRouteHandler: RouteHandler<
  typeof getReposOwnerRepoLabelsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoLabelsNameRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoLabelsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoLabelsNameRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoLabelsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoLanguagesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoLanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoLicenseRouteHandler: RouteHandler<
  typeof getReposOwnerRepoLicenseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoMergeUpstreamRouteHandler: RouteHandler<
  typeof postReposOwnerRepoMergeUpstreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoMergesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoMergesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoMilestonesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoMilestonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoMilestonesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoMilestonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoMilestonesMilestoneNumberRouteHandler: RouteHandler<
  typeof getReposOwnerRepoMilestonesMilestoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoMilestonesMilestoneNumberRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoMilestonesMilestoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoMilestonesMilestoneNumberRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoMilestonesMilestoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoMilestonesMilestoneNumberLabelsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoMilestonesMilestoneNumberLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoNotificationsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoNotificationsRouteHandler: RouteHandler<
  typeof putReposOwnerRepoNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPagesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPagesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoPagesRouteHandler: RouteHandler<
  typeof putReposOwnerRepoPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoPagesRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPagesBuildsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPagesBuildsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPagesBuildsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPagesBuildsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPagesBuildsLatestRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPagesBuildsLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPagesBuildsBuildIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPagesBuildsBuildIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPagesDeploymentsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPagesDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPagesDeploymentsPagesDeploymentIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPagesDeploymentsPagesDeploymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPagesDeploymentsPagesDeploymentIdCancelRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPagesDeploymentsPagesDeploymentIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPagesHealthRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPagesHealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPlanningStatusesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPlanningStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPrivateVulnerabilityReportingRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPrivateVulnerabilityReportingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoPrivateVulnerabilityReportingRouteHandler: RouteHandler<
  typeof putReposOwnerRepoPrivateVulnerabilityReportingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoPrivateVulnerabilityReportingRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoPrivateVulnerabilityReportingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPropertiesValuesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPropertiesValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoPropertiesValuesRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoPropertiesValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsCommentsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsCommentsCommentIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoPullsCommentsCommentIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoPullsCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoPullsCommentsCommentIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoPullsCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsCommentsCommentIdReactionsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsCommentsCommentIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsCommentsCommentIdReactionsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsCommentsCommentIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoPullsCommentsCommentIdReactionsReactionIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoPullsCommentsCommentIdReactionsReactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsPullNumberRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsPullNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoPullsPullNumberRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoPullsPullNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsPullNumberCodespacesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsPullNumberCodespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsPullNumberCommentsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsPullNumberCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsPullNumberCommentsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsPullNumberCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsPullNumberCommentsCommentIdRepliesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsPullNumberCommentsCommentIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsPullNumberCommitsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsPullNumberCommitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsPullNumberCopilotCodeReviewRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsPullNumberCopilotCodeReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsPullNumberFilesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsPullNumberFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsPullNumberMergeRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsPullNumberMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoPullsPullNumberMergeRouteHandler: RouteHandler<
  typeof putReposOwnerRepoPullsPullNumberMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoPullsPullNumberMergeAsyncRouteHandler: RouteHandler<
  typeof putReposOwnerRepoPullsPullNumberMergeAsyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsPullNumberMergeAsyncUuidRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsPullNumberMergeAsyncUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsPullNumberRequestedReviewersRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsPullNumberRequestedReviewersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsPullNumberRequestedReviewersRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsPullNumberRequestedReviewersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoPullsPullNumberRequestedReviewersRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoPullsPullNumberRequestedReviewersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsPullNumberRequestedReviewersRerequestRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsPullNumberRequestedReviewersRerequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsPullNumberReviewsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsPullNumberReviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsPullNumberReviewsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsPullNumberReviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsPullNumberReviewsReviewIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsPullNumberReviewsReviewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoPullsPullNumberReviewsReviewIdRouteHandler: RouteHandler<
  typeof putReposOwnerRepoPullsPullNumberReviewsReviewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoPullsPullNumberReviewsReviewIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoPullsPullNumberReviewsReviewIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoPullsPullNumberReviewsReviewIdCommentsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoPullsPullNumberReviewsReviewIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoPullsPullNumberReviewsReviewIdDismissalsRouteHandler: RouteHandler<
  typeof putReposOwnerRepoPullsPullNumberReviewsReviewIdDismissalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoPullsPullNumberReviewsReviewIdEventsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoPullsPullNumberReviewsReviewIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoPullsPullNumberUpdateBranchRouteHandler: RouteHandler<
  typeof putReposOwnerRepoPullsPullNumberUpdateBranchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoReadmeRouteHandler: RouteHandler<
  typeof getReposOwnerRepoReadmeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoReadmeDirRouteHandler: RouteHandler<
  typeof getReposOwnerRepoReadmeDirRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoReleasesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoReleasesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoReleasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoReleasesAssetsAssetIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoReleasesAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoReleasesAssetsAssetIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoReleasesAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoReleasesAssetsAssetIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoReleasesAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoReleasesGenerateNotesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoReleasesGenerateNotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoReleasesLatestRouteHandler: RouteHandler<
  typeof getReposOwnerRepoReleasesLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoReleasesTagsTagRouteHandler: RouteHandler<
  typeof getReposOwnerRepoReleasesTagsTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoReleasesReleaseIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoReleasesReleaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoReleasesReleaseIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoReleasesReleaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoReleasesReleaseIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoReleasesReleaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoReleasesReleaseIdAssetsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoReleasesReleaseIdAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoReleasesReleaseIdAssetsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoReleasesReleaseIdAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoReleasesReleaseIdReactionsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoReleasesReleaseIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoReleasesReleaseIdReactionsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoReleasesReleaseIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoReleasesReleaseIdReactionsReactionIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoReleasesReleaseIdReactionsReactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoRulesBranchesBranchRouteHandler: RouteHandler<
  typeof getReposOwnerRepoRulesBranchesBranchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoRulesetsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoRulesetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoRulesetsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoRulesetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoRulesetsRuleSuitesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoRulesetsRuleSuitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoRulesetsRuleSuitesRuleSuiteIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoRulesetsRuleSuitesRuleSuiteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoRulesetsRulesetIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoRulesetsRulesetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoRulesetsRulesetIdRouteHandler: RouteHandler<
  typeof putReposOwnerRepoRulesetsRulesetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoRulesetsRulesetIdRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoRulesetsRulesetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoRulesetsRulesetIdHistoryRouteHandler: RouteHandler<
  typeof getReposOwnerRepoRulesetsRulesetIdHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoRulesetsRulesetIdHistoryVersionIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoRulesetsRulesetIdHistoryVersionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoSecretScanningAlertsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoSecretScanningAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoSecretScanningAlertsAlertNumberRouteHandler: RouteHandler<
  typeof getReposOwnerRepoSecretScanningAlertsAlertNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoSecretScanningAlertsAlertNumberRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoSecretScanningAlertsAlertNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoSecretScanningAlertsAlertNumberLocationsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoSecretScanningAlertsAlertNumberLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoSecretScanningCustomPatternsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoSecretScanningCustomPatternsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoSecretScanningCustomPatternsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoSecretScanningCustomPatternsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoSecretScanningCustomPatternsRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoSecretScanningCustomPatternsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoSecretScanningCustomPatternsPatternIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoSecretScanningCustomPatternsPatternIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoSecretScanningPushProtectionBypassesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoSecretScanningPushProtectionBypassesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoSecretScanningScanHistoryRouteHandler: RouteHandler<
  typeof getReposOwnerRepoSecretScanningScanHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoSecurityAdvisoriesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoSecurityAdvisoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoSecurityAdvisoriesRouteHandler: RouteHandler<
  typeof postReposOwnerRepoSecurityAdvisoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoSecurityAdvisoriesReportsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoSecurityAdvisoriesReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoSecurityAdvisoriesGhsaIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoSecurityAdvisoriesGhsaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoSecurityAdvisoriesGhsaIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoSecurityAdvisoriesGhsaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsRouteHandler: RouteHandler<
  typeof postReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsCommentIdRouteHandler: RouteHandler<
  typeof getReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsCommentIdRouteHandler: RouteHandler<
  typeof patchReposOwnerRepoSecurityAdvisoriesGhsaIdCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoSecurityAdvisoriesGhsaIdCveRouteHandler: RouteHandler<
  typeof postReposOwnerRepoSecurityAdvisoriesGhsaIdCveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoSecurityAdvisoriesGhsaIdForksRouteHandler: RouteHandler<
  typeof postReposOwnerRepoSecurityAdvisoriesGhsaIdForksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoStacksRouteHandler: RouteHandler<
  typeof getReposOwnerRepoStacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoStacksRouteHandler: RouteHandler<
  typeof postReposOwnerRepoStacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoStacksStackNumberRouteHandler: RouteHandler<
  typeof getReposOwnerRepoStacksStackNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoStacksStackNumberAddRouteHandler: RouteHandler<
  typeof postReposOwnerRepoStacksStackNumberAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoStacksStackNumberUnstackRouteHandler: RouteHandler<
  typeof postReposOwnerRepoStacksStackNumberUnstackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoStargazersRouteHandler: RouteHandler<
  typeof getReposOwnerRepoStargazersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoStargazersCountRouteHandler: RouteHandler<
  typeof getReposOwnerRepoStargazersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoStargazersHistoryRouteHandler: RouteHandler<
  typeof getReposOwnerRepoStargazersHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoStatsCodeFrequencyRouteHandler: RouteHandler<
  typeof getReposOwnerRepoStatsCodeFrequencyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoStatsCommitActivityRouteHandler: RouteHandler<
  typeof getReposOwnerRepoStatsCommitActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoStatsContributorsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoStatsContributorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoStatsParticipationRouteHandler: RouteHandler<
  typeof getReposOwnerRepoStatsParticipationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoStatsPunchCardRouteHandler: RouteHandler<
  typeof getReposOwnerRepoStatsPunchCardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoStatusesShaRouteHandler: RouteHandler<
  typeof postReposOwnerRepoStatusesShaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoSubscribersRouteHandler: RouteHandler<
  typeof getReposOwnerRepoSubscribersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoSubscriptionRouteHandler: RouteHandler<
  typeof getReposOwnerRepoSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoSubscriptionRouteHandler: RouteHandler<
  typeof putReposOwnerRepoSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoSubscriptionRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoTagsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoTarballRefRouteHandler: RouteHandler<
  typeof getReposOwnerRepoTarballRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoTeamsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoTopicsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoTopicsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoTopicsRouteHandler: RouteHandler<
  typeof putReposOwnerRepoTopicsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoTrafficClonesRouteHandler: RouteHandler<
  typeof getReposOwnerRepoTrafficClonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoTrafficPopularPathsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoTrafficPopularPathsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoTrafficPopularReferrersRouteHandler: RouteHandler<
  typeof getReposOwnerRepoTrafficPopularReferrersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoTrafficViewsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoTrafficViewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposOwnerRepoTransferRouteHandler: RouteHandler<
  typeof postReposOwnerRepoTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoVulnerabilityAlertsRouteHandler: RouteHandler<
  typeof getReposOwnerRepoVulnerabilityAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReposOwnerRepoVulnerabilityAlertsRouteHandler: RouteHandler<
  typeof putReposOwnerRepoVulnerabilityAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReposOwnerRepoVulnerabilityAlertsRouteHandler: RouteHandler<
  typeof deleteReposOwnerRepoVulnerabilityAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReposOwnerRepoZipballRefRouteHandler: RouteHandler<
  typeof getReposOwnerRepoZipballRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReposTemplateOwnerTemplateRepoGenerateRouteHandler: RouteHandler<
  typeof postReposTemplateOwnerTemplateRepoGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
