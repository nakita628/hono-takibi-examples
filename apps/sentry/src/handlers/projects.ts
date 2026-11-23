import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRouteHandler: RouteHandler<
  typeof putProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRouteHandler: RouteHandler<
  typeof deleteProjectsOrganizationIdOrSlugProjectIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexRouteHandler: RouteHandler<
  typeof postProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRouteHandler: RouteHandler<
  typeof putProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRouteHandler: RouteHandler<
  typeof deleteProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexRouteHandler: RouteHandler<
  typeof postProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRouteHandler: RouteHandler<
  typeof putProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRouteHandler: RouteHandler<
  typeof deleteProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexRouteHandler: RouteHandler<
  typeof putProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexRouteHandler: RouteHandler<
  typeof putProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDifsAssembleIndexRouteHandler: RouteHandler<
  typeof postProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDifsAssembleIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsOrganizationIdOrSlugProjectIdOrSlugFilesPreprodartifactsAssembleIndexRouteHandler: RouteHandler<
  typeof postProjectsOrganizationIdOrSlugProjectIdOrSlugFilesPreprodartifactsAssembleIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersFilterIdIndexRouteHandler: RouteHandler<
  typeof putProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersFilterIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexRouteHandler: RouteHandler<
  typeof postProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRouteHandler: RouteHandler<
  typeof putProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRouteHandler: RouteHandler<
  typeof deleteProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRouteHandler: RouteHandler<
  typeof putProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRouteHandler: RouteHandler<
  typeof deleteProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexRouteHandler: RouteHandler<
  typeof putProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusChecksSkipIndexRouteHandler: RouteHandler<
  typeof postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusChecksSkipIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusChecksSkipIndexRouteHandler: RouteHandler<
  typeof postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusChecksSkipIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsSnapshotsIndexRouteHandler: RouteHandler<
  typeof postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsSnapshotsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexRouteHandler: RouteHandler<
  typeof postProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRouteHandler: RouteHandler<
  typeof putProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRouteHandler: RouteHandler<
  typeof deleteProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdIndexRouteHandler: RouteHandler<
  typeof deleteProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexRouteHandler: RouteHandler<
  typeof postProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexRouteHandler: RouteHandler<
  typeof postProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRouteHandler: RouteHandler<
  typeof postProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRouteHandler: RouteHandler<
  typeof putProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRouteHandler: RouteHandler<
  typeof postProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRouteHandler: RouteHandler<
  typeof putProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRouteHandler: RouteHandler<
  typeof deleteProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexRouteHandler: RouteHandler<
  typeof postProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexRouteHandler: RouteHandler<
  typeof deleteProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexRouteHandler: RouteHandler<
  typeof postProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexRouteHandler: RouteHandler<
  typeof postProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRouteHandler: RouteHandler<
  typeof putProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRouteHandler: RouteHandler<
  typeof deleteProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRouteHandler: RouteHandler<
  typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRouteHandler: RouteHandler<
  typeof putProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRouteHandler: RouteHandler<
  typeof deleteProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
