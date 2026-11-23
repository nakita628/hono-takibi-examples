import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRoute,
  deleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRoute,
  deleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRoute,
  deleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute,
  deleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRoute,
  deleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute,
  deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRoute,
  deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRoute,
  deleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRoute,
  deleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugHooksUidRoute,
  deleteRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdRoute,
  deleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute,
  deleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute,
  deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRoute,
  deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRoute,
  deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute,
  deleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute,
  deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRoute,
  deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdRoute,
  deleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRoute,
  deleteRepositoriesWorkspaceRepoSlugRefsTagsNameRoute,
  deleteRepositoriesWorkspaceRepoSlugRoute,
  getRepositoriesWorkspaceRepoSlugBranchingModelRoute,
  getRepositoriesWorkspaceRepoSlugBranchingModelSettingsRoute,
  getRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRoute,
  getRepositoriesWorkspaceRepoSlugBranchRestrictionsRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitCommentsRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitReportsRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitStatusesRoute,
  getRepositoriesWorkspaceRepoSlugCommitsRevisionRoute,
  getRepositoriesWorkspaceRepoSlugCommitsRoute,
  getRepositoriesWorkspaceRepoSlugDefaultReviewersRoute,
  getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRoute,
  getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRoute,
  getRepositoriesWorkspaceRepoSlugDeployKeysRoute,
  getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesRoute,
  getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidRoute,
  getRepositoriesWorkspaceRepoSlugDeploymentsRoute,
  getRepositoriesWorkspaceRepoSlugDiffSpecRoute,
  getRepositoriesWorkspaceRepoSlugDiffstatSpecRoute,
  getRepositoriesWorkspaceRepoSlugDownloadsFilenameRoute,
  getRepositoriesWorkspaceRepoSlugDownloadsRoute,
  getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelRoute,
  getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersRoute,
  getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidRoute,
  getRepositoriesWorkspaceRepoSlugEnvironmentsRoute,
  getRepositoriesWorkspaceRepoSlugFileConflictsSpecRoute,
  getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRoute,
  getRepositoriesWorkspaceRepoSlugForksRoute,
  getRepositoriesWorkspaceRepoSlugHooksRoute,
  getRepositoriesWorkspaceRepoSlugHooksUidRoute,
  getRepositoriesWorkspaceRepoSlugMergeBaseRevspecRoute,
  getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdRoute,
  getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueueRoute,
  getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidRoute,
  getRepositoriesWorkspaceRepoSlugMergeQueuesRoute,
  getRepositoriesWorkspaceRepoSlugOverrideSettingsRoute,
  getRepositoriesWorkspaceRepoSlugPatchSpecRoute,
  getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute,
  getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsRoute,
  getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersRoute,
  getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesRoute,
  getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsActivityRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdConflictsRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeabilityChecksRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsRoute,
  getRepositoriesWorkspaceRepoSlugRefsBranchesNameRoute,
  getRepositoriesWorkspaceRepoSlugRefsBranchesRoute,
  getRepositoriesWorkspaceRepoSlugRefsRoute,
  getRepositoriesWorkspaceRepoSlugRefsTagsNameRoute,
  getRepositoriesWorkspaceRepoSlugRefsTagsRoute,
  getRepositoriesWorkspaceRepoSlugRoute,
  getRepositoriesWorkspaceRepoSlugSrcCommitPathRoute,
  getRepositoriesWorkspaceRepoSlugSrcRoute,
  getRepositoriesWorkspaceRepoSlugWatchersRoute,
  getRepositoriesWorkspaceRoute,
  postRepositoriesWorkspaceRepoSlugBranchRestrictionsRoute,
  postRepositoriesWorkspaceRepoSlugCommitCommitApproveRoute,
  postRepositoriesWorkspaceRepoSlugCommitCommitCommentsRoute,
  postRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsRoute,
  postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRoute,
  postRepositoriesWorkspaceRepoSlugCommitsRevisionRoute,
  postRepositoriesWorkspaceRepoSlugCommitsRoute,
  postRepositoriesWorkspaceRepoSlugDeployKeysRoute,
  postRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesRoute,
  postRepositoriesWorkspaceRepoSlugDownloadsRoute,
  postRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChangesRoute,
  postRepositoriesWorkspaceRepoSlugEnvironmentsRoute,
  postRepositoriesWorkspaceRepoSlugForksRoute,
  postRepositoriesWorkspaceRepoSlugHooksRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipelineRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsRoute,
  postRepositoriesWorkspaceRepoSlugRefsBranchesRoute,
  postRepositoriesWorkspaceRepoSlugRefsTagsRoute,
  postRepositoriesWorkspaceRepoSlugRoute,
  postRepositoriesWorkspaceRepoSlugSrcRoute,
  putRepositoriesWorkspaceRepoSlugBranchingModelSettingsRoute,
  putRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRoute,
  putRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRoute,
  putRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute,
  putRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRoute,
  putRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute,
  putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRoute,
  putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRoute,
  putRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRoute,
  putRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidRoute,
  putRepositoriesWorkspaceRepoSlugHooksUidRoute,
  putRepositoriesWorkspaceRepoSlugOverrideSettingsRoute,
  putRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute,
  putRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumberRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute,
  putRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute,
  putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute,
  putRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute,
  putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRoute,
  putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdRoute,
  putRepositoriesWorkspaceRepoSlugRoute,
} from '../routes'

export const getRepositoriesWorkspaceRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugBranchRestrictionsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugBranchRestrictionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugBranchRestrictionsRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugBranchRestrictionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugBranchingModelRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugBranchingModelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugBranchingModelSettingsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugBranchingModelSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugBranchingModelSettingsRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugBranchingModelSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugCommitCommitRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugCommitCommitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugCommitCommitApproveRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugCommitCommitApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugCommitCommitCommentsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugCommitCommitCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugCommitCommitCommentsRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugCommitCommitCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugCommitCommitReportsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugCommitCommitReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugCommitCommitStatusesRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugCommitCommitStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugCommitsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugCommitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugCommitsRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugCommitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugCommitsRevisionRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugCommitsRevisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugCommitsRevisionRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugCommitsRevisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugDefaultReviewersRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugDefaultReviewersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugDeployKeysRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugDeployKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugDeployKeysRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugDeployKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugDeploymentsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugDiffSpecRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugDiffSpecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugDiffstatSpecRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugDiffstatSpecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugDownloadsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugDownloadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugDownloadsRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugDownloadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugDownloadsFilenameRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugDownloadsFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugEnvironmentsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugEnvironmentsRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChangesRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugFileConflictsSpecRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugFileConflictsSpecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugForksRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugForksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugForksRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugForksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugHooksRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugHooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugHooksRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugHooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugHooksUidRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugHooksUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugHooksUidRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugHooksUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugHooksUidRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugHooksUidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugMergeBaseRevspecRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugMergeBaseRevspecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugMergeQueuesRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugMergeQueuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueueRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugOverrideSettingsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugOverrideSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugOverrideSettingsRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugOverrideSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPatchSpecRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPatchSpecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugPipelinesRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugPipelinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipelineRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipelineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesConfigRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugPipelinesConfigRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugPipelinesConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumberRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPullrequestsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPullrequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugPullrequestsRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugPullrequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPullrequestsActivityRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPullrequestsActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdConflictsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdConflictsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeabilityChecksRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeabilityChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRouteHandler: RouteHandler<
  typeof putRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugRefsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugRefsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugRefsBranchesRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugRefsBranchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugRefsBranchesRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugRefsBranchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugRefsBranchesNameRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugRefsBranchesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugRefsTagsRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugRefsTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugRefsTagsRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugRefsTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRepositoriesWorkspaceRepoSlugRefsTagsNameRouteHandler: RouteHandler<
  typeof deleteRepositoriesWorkspaceRepoSlugRefsTagsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugRefsTagsNameRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugRefsTagsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugSrcRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugSrcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRepositoriesWorkspaceRepoSlugSrcRouteHandler: RouteHandler<
  typeof postRepositoriesWorkspaceRepoSlugSrcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugSrcCommitPathRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugSrcCommitPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRepositoriesWorkspaceRepoSlugWatchersRouteHandler: RouteHandler<
  typeof getRepositoriesWorkspaceRepoSlugWatchersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
