import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgRulesetsRulesetIdRoute,
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
  deleteReposOwnerRepoCollaboratorsUsernameRoute,
  deleteReposOwnerRepoCommentsCommentIdRoute,
  deleteReposOwnerRepoContentsPathRoute,
  deleteReposOwnerRepoDeploymentsDeploymentIdRoute,
  deleteReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyIdRoute,
  deleteReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesProtectionRuleIdRoute,
  deleteReposOwnerRepoEnvironmentsEnvironmentNameRoute,
  deleteReposOwnerRepoHooksHookIdRoute,
  deleteReposOwnerRepoImmutableReleasesRoute,
  deleteReposOwnerRepoInvitationsInvitationIdRoute,
  deleteReposOwnerRepoKeysKeyIdRoute,
  deleteReposOwnerRepoPagesRoute,
  deleteReposOwnerRepoPrivateVulnerabilityReportingRoute,
  deleteReposOwnerRepoReleasesAssetsAssetIdRoute,
  deleteReposOwnerRepoReleasesReleaseIdRoute,
  deleteReposOwnerRepoRoute,
  deleteReposOwnerRepoRulesetsRulesetIdRoute,
  deleteReposOwnerRepoVulnerabilityAlertsRoute,
  deleteUserRepositoryInvitationsInvitationIdRoute,
  getOrgsOrgReposRoute,
  getOrgsOrgRulesetsRoute,
  getOrgsOrgRulesetsRulesetIdRoute,
  getOrgsOrgRulesetsRuleSuitesRoute,
  getOrgsOrgRulesetsRuleSuitesRuleSuiteIdRoute,
  getRepositoriesRoute,
  getReposOwnerRepoActivityRoute,
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
  getReposOwnerRepoCodeownersErrorsRoute,
  getReposOwnerRepoCollaboratorsRoute,
  getReposOwnerRepoCollaboratorsUsernamePermissionRoute,
  getReposOwnerRepoCollaboratorsUsernameRoute,
  getReposOwnerRepoCommentsCommentIdRoute,
  getReposOwnerRepoCommentsRoute,
  getReposOwnerRepoCommitsCommitShaBranchesWhereHeadRoute,
  getReposOwnerRepoCommitsCommitShaCommentsRoute,
  getReposOwnerRepoCommitsCommitShaPullsRoute,
  getReposOwnerRepoCommitsRefRoute,
  getReposOwnerRepoCommitsRefStatusesRoute,
  getReposOwnerRepoCommitsRefStatusRoute,
  getReposOwnerRepoCommitsRoute,
  getReposOwnerRepoCommunityProfileRoute,
  getReposOwnerRepoCompareBaseheadRoute,
  getReposOwnerRepoContentsPathRoute,
  getReposOwnerRepoContributorsRoute,
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
  getReposOwnerRepoEnvironmentsRoute,
  getReposOwnerRepoForksRoute,
  getReposOwnerRepoHashAlgorithmRoute,
  getReposOwnerRepoHooksHookIdConfigRoute,
  getReposOwnerRepoHooksHookIdDeliveriesDeliveryIdRoute,
  getReposOwnerRepoHooksHookIdDeliveriesRoute,
  getReposOwnerRepoHooksHookIdRoute,
  getReposOwnerRepoHooksRoute,
  getReposOwnerRepoImmutableReleasesRoute,
  getReposOwnerRepoInvitationsRoute,
  getReposOwnerRepoIssueTypesRoute,
  getReposOwnerRepoKeysKeyIdRoute,
  getReposOwnerRepoKeysRoute,
  getReposOwnerRepoLanguagesRoute,
  getReposOwnerRepoPagesBuildsBuildIdRoute,
  getReposOwnerRepoPagesBuildsLatestRoute,
  getReposOwnerRepoPagesBuildsRoute,
  getReposOwnerRepoPagesDeploymentsPagesDeploymentIdRoute,
  getReposOwnerRepoPagesHealthRoute,
  getReposOwnerRepoPagesRoute,
  getReposOwnerRepoPlanningStatusesRoute,
  getReposOwnerRepoPrivateVulnerabilityReportingRoute,
  getReposOwnerRepoPropertiesValuesRoute,
  getReposOwnerRepoReadmeDirRoute,
  getReposOwnerRepoReadmeRoute,
  getReposOwnerRepoReleasesAssetsAssetIdRoute,
  getReposOwnerRepoReleasesLatestRoute,
  getReposOwnerRepoReleasesReleaseIdAssetsRoute,
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
  getReposOwnerRepoStatsCodeFrequencyRoute,
  getReposOwnerRepoStatsCommitActivityRoute,
  getReposOwnerRepoStatsContributorsRoute,
  getReposOwnerRepoStatsParticipationRoute,
  getReposOwnerRepoStatsPunchCardRoute,
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
  getUserRepositoryInvitationsRoute,
  getUserReposRoute,
  getUsersUsernameReposRoute,
  patchReposOwnerRepoBranchesBranchProtectionRequiredPullRequestReviewsRoute,
  patchReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksRoute,
  patchReposOwnerRepoCommentsCommentIdRoute,
  patchReposOwnerRepoHooksHookIdConfigRoute,
  patchReposOwnerRepoHooksHookIdRoute,
  patchReposOwnerRepoInvitationsInvitationIdRoute,
  patchReposOwnerRepoPropertiesValuesRoute,
  patchReposOwnerRepoReleasesAssetsAssetIdRoute,
  patchReposOwnerRepoReleasesReleaseIdRoute,
  patchReposOwnerRepoRoute,
  patchUserRepositoryInvitationsInvitationIdRoute,
  postOrgsOrgReposRoute,
  postOrgsOrgRulesetsRoute,
  postReposOwnerRepoAttestationsRoute,
  postReposOwnerRepoAutolinksRoute,
  postReposOwnerRepoBranchesBranchProtectionEnforceAdminsRoute,
  postReposOwnerRepoBranchesBranchProtectionRequiredSignaturesRoute,
  postReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRoute,
  postReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRoute,
  postReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRoute,
  postReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRoute,
  postReposOwnerRepoBranchesBranchRenameRoute,
  postReposOwnerRepoCommitsCommitShaCommentsRoute,
  postReposOwnerRepoDeploymentsDeploymentIdStatusesRoute,
  postReposOwnerRepoDeploymentsRoute,
  postReposOwnerRepoDispatchesRoute,
  postReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesRoute,
  postReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesRoute,
  postReposOwnerRepoForksRoute,
  postReposOwnerRepoHooksHookIdDeliveriesDeliveryIdAttemptsRoute,
  postReposOwnerRepoHooksHookIdPingsRoute,
  postReposOwnerRepoHooksHookIdTestsRoute,
  postReposOwnerRepoHooksRoute,
  postReposOwnerRepoKeysRoute,
  postReposOwnerRepoMergesRoute,
  postReposOwnerRepoMergeUpstreamRoute,
  postReposOwnerRepoPagesBuildsRoute,
  postReposOwnerRepoPagesDeploymentsPagesDeploymentIdCancelRoute,
  postReposOwnerRepoPagesDeploymentsRoute,
  postReposOwnerRepoPagesRoute,
  postReposOwnerRepoReleasesGenerateNotesRoute,
  postReposOwnerRepoReleasesReleaseIdAssetsRoute,
  postReposOwnerRepoReleasesRoute,
  postReposOwnerRepoRulesetsRoute,
  postReposOwnerRepoStatusesShaRoute,
  postReposOwnerRepoTransferRoute,
  postReposTemplateOwnerTemplateRepoGenerateRoute,
  postUserReposRoute,
  putOrgsOrgRulesetsRulesetIdRoute,
  putReposOwnerRepoAutomatedSecurityFixesRoute,
  putReposOwnerRepoBranchesBranchProtectionRequiredStatusChecksContextsRoute,
  putReposOwnerRepoBranchesBranchProtectionRestrictionsAppsRoute,
  putReposOwnerRepoBranchesBranchProtectionRestrictionsTeamsRoute,
  putReposOwnerRepoBranchesBranchProtectionRestrictionsUsersRoute,
  putReposOwnerRepoBranchesBranchProtectionRoute,
  putReposOwnerRepoCollaboratorsUsernameRoute,
  putReposOwnerRepoContentsPathRoute,
  putReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyIdRoute,
  putReposOwnerRepoEnvironmentsEnvironmentNameRoute,
  putReposOwnerRepoImmutableReleasesRoute,
  putReposOwnerRepoPagesRoute,
  putReposOwnerRepoPrivateVulnerabilityReportingRoute,
  putReposOwnerRepoRulesetsRulesetIdRoute,
  putReposOwnerRepoTopicsRoute,
  putReposOwnerRepoVulnerabilityAlertsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reposHandler = app
  .openapi(getOrgsOrgReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgRulesetsRuleSuitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgRulesetsRuleSuitesRuleSuiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoActivityRoute, (c) => {
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
  .openapi(getReposOwnerRepoCodeownersErrorsRoute, (c) => {
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
    (c) => {},
  )
  .openapi(
    putReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyIdRoute,
    (c) => {},
  )
  .openapi(
    deleteReposOwnerRepoEnvironmentsEnvironmentNameDeploymentBranchPoliciesBranchPolicyIdRoute,
    (c) => {},
  )
  .openapi(getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesAppsRoute,
    (c) => {},
  )
  .openapi(
    getReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesProtectionRuleIdRoute,
    (c) => {},
  )
  .openapi(
    deleteReposOwnerRepoEnvironmentsEnvironmentNameDeploymentProtectionRulesProtectionRuleIdRoute,
    (c) => {},
  )
  .openapi(getReposOwnerRepoForksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoForksRoute, (c) => {
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
  .openapi(getReposOwnerRepoLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoMergeUpstreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoMergesRoute, (c) => {
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
  .openapi(getRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserRepositoryInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserRepositoryInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserRepositoryInvitationsInvitationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameReposRoute, (c) => {
    throw new Error('Not implemented')
  })
