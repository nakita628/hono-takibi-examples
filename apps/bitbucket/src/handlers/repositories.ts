import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const repositoriesHandler = app
  .openapi(getRepositoriesWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugBranchRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugBranchRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugBranchingModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugBranchingModelSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugBranchingModelSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugCommitCommitApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugCommitCommitCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitsRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugCommitsRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugDefaultReviewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugDeployKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugDeployKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugDiffSpecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugDiffstatSpecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugDownloadsFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugFileConflictsSpecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugForksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugForksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugHooksUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugHooksUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugHooksUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugMergeBaseRevspecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugMergeQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugOverrideSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugOverrideSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPatchSpecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPullrequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdConflictsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeabilityChecksRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugRefsBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugRefsBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugRefsBranchesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugRefsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugRefsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugRefsTagsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugRefsTagsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugSrcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugSrcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugSrcCommitPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugWatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
