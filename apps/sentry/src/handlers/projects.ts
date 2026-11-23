import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDifsAssembleIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugFilesPreprodartifactsAssembleIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsSnapshotsIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusChecksSkipIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusChecksSkipIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersFilterIdIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDifsAssembleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectsOrganizationIdOrSlugProjectIdOrSlugFilesPreprodartifactsAssembleIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersFilterIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusChecksSkipIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusChecksSkipIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsSnapshotsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
