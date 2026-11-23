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
  deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRoute,
  deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRoute,
  deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdRoute,
  deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRoute,
  deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRoute,
  deleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute,
  deleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute,
  deleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute,
  deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRoute,
  deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute,
  deleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute,
  deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRoute,
  deleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRoute,
  deleteRepositoriesWorkspaceRepoSlugRefsTagsNameRoute,
  deleteRepositoriesWorkspaceRepoSlugRoute,
  getRepositoriesRoute,
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
  getRepositoriesWorkspaceRepoSlugComponentsComponentIdRoute,
  getRepositoriesWorkspaceRepoSlugComponentsRoute,
  getRepositoriesWorkspaceRepoSlugDefaultReviewersRoute,
  getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRoute,
  getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRoute,
  getRepositoriesWorkspaceRepoSlugDeployKeysRoute,
  getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesRoute,
  getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidRoute,
  getRepositoriesWorkspaceRepoSlugDeploymentsIndexRoute,
  getRepositoriesWorkspaceRepoSlugDiffSpecRoute,
  getRepositoriesWorkspaceRepoSlugDiffstatSpecRoute,
  getRepositoriesWorkspaceRepoSlugDownloadsFilenameRoute,
  getRepositoriesWorkspaceRepoSlugDownloadsRoute,
  getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelRoute,
  getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersRoute,
  getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidRoute,
  getRepositoriesWorkspaceRepoSlugEnvironmentsIndexRoute,
  getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRoute,
  getRepositoriesWorkspaceRepoSlugForksRoute,
  getRepositoriesWorkspaceRepoSlugHooksRoute,
  getRepositoriesWorkspaceRepoSlugHooksUidRoute,
  getRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRoute,
  getRepositoriesWorkspaceRepoSlugIssuesImportRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRoute,
  getRepositoriesWorkspaceRepoSlugIssuesRoute,
  getRepositoriesWorkspaceRepoSlugMergeBaseRevspecRoute,
  getRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdRoute,
  getRepositoriesWorkspaceRepoSlugMilestonesRoute,
  getRepositoriesWorkspaceRepoSlugOverrideSettingsRoute,
  getRepositoriesWorkspaceRepoSlugPatchSpecRoute,
  getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute,
  getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsRoute,
  getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersRoute,
  getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesIndexRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndexRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsIndexRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndexRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndexRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesIndexRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsIndexRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesRoute,
  getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsRoute,
  getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsActivityRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsRoute,
  getRepositoriesWorkspaceRepoSlugRefsBranchesNameRoute,
  getRepositoriesWorkspaceRepoSlugRefsBranchesRoute,
  getRepositoriesWorkspaceRepoSlugRefsRoute,
  getRepositoriesWorkspaceRepoSlugRefsTagsNameRoute,
  getRepositoriesWorkspaceRepoSlugRefsTagsRoute,
  getRepositoriesWorkspaceRepoSlugRoute,
  getRepositoriesWorkspaceRepoSlugSrcCommitPathRoute,
  getRepositoriesWorkspaceRepoSlugSrcRoute,
  getRepositoriesWorkspaceRepoSlugVersionsRoute,
  getRepositoriesWorkspaceRepoSlugVersionsVersionIdRoute,
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
  postRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChangesIndexRoute,
  postRepositoriesWorkspaceRepoSlugEnvironmentsIndexRoute,
  postRepositoriesWorkspaceRepoSlugForksRoute,
  postRepositoriesWorkspaceRepoSlugHooksRoute,
  postRepositoriesWorkspaceRepoSlugIssuesExportRoute,
  postRepositoriesWorkspaceRepoSlugIssuesImportRoute,
  postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRoute,
  postRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRoute,
  postRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRoute,
  postRepositoriesWorkspaceRepoSlugIssuesRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndexRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndexRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndexRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesIndexRoute,
  postRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipelineRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRoute,
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
  putRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRoute,
  putRepositoriesWorkspaceRepoSlugIssuesIssueIdRoute,
  putRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRoute,
  putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRoute,
  putRepositoriesWorkspaceRepoSlugOverrideSettingsRoute,
  putRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugRoute,
  putRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumberRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute,
  putRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute,
  putRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute,
  putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute,
  putRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute,
  putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRoute,
  putRepositoriesWorkspaceRepoSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const repositoriesHandler = app
  .openapi(getRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
  .openapi(getRepositoriesWorkspaceRepoSlugComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugComponentsComponentIdRoute, (c) => {
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
  .openapi(getRepositoriesWorkspaceRepoSlugDeploymentsIndexRoute, (c) => {
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
    deleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidRoute,
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
  .openapi(getRepositoriesWorkspaceRepoSlugEnvironmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugEnvironmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChangesIndexRoute, (c) => {
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
  .openapi(deleteRepositoriesWorkspaceRepoSlugHooksUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugHooksUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugHooksUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugIssuesExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugIssuesImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugMergeBaseRevspecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugMilestonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsIndexRoute, (c) => {
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
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameRoute, (c) => {
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
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRoute, (c) => {
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
  .openapi(
    putRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameRoute,
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
  .openapi(getRepositoriesWorkspaceRepoSlugVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugWatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
