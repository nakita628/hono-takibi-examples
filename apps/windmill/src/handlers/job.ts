import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getJobsCompletedCountByTagRoute,
  getJobsDbClockRoute,
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
} from '../routes'

const app = new OpenAPIHono()

export const jobHandler = app
  .openapi(postWWorkspaceJobsListSelectedJobGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunWaitResultPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRunWaitResultPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunWaitResultFPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunWaitResultFvVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRunWaitResultFvVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunAndStreamFPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRunAndStreamFPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunAndStreamFvVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRunAndStreamFvVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunAndStreamPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRunAndStreamPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunAndStreamHHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRunAndStreamHHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsResultByIdFlowJobIdNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsFlowApprovalStepDetailJobIdStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsJobViewTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsJobPublicViewTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunFPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunFvVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunBatchRerunJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRestartFIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunHHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunInlinePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunInlinePPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunInlineHHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunWaitResultPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsWorkflowAsCodeJobIdEntrypointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunDependenciesAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunFlowDependenciesAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunFlowTestPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunPreviewFlowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunAgentPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunWaitResultPreviewFlowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRunDynamicSelectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsQueueListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsQueueCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsOldestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsCompletedCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsCompletedCountJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsListFilteredUuidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsQueueListFilteredUuidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsQueueRunNowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsQueueCancelSelectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsGetOtelTracesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsCompletedListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsCompletedExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsCompletedImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsQueueExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsQueueImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRecentRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRecentRunsHideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsRecentRunsUnhideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsDbClockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobsCompletedCountByTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetRootJobIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsWorkerIsDrainingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetLogsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetFlowAllLogsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetFlowAllLogsStructuredIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetFlowAllResultsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetCompletedLogsTailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetArgsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsUQueueGetStartedAtByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetupdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetupdateSseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetLogFilePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetFlowDebugInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUCompletedGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUCompletedGetResultIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUCompletedGetResultMaybeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUCompletedGetTimingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUDispatchEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsAssetDispatchEdgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsCompletedDeleteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsCompletedResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsCompletedUnresolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsUQueueCancelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsUQueueCancelPersistentPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsUQueueForceCancelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsQueuePositionScheduledForRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsQueueScheduledForIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsJobSignatureIdResumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsResumeUrlsIdResumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsWacApprovalUrlsIdStepKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsSlackApprovalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsTeamsApprovalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsUFlowResumeSuspendedJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUFlowApprovalInfoJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUResumeIdResumeIdSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsUResumeIdResumeIdSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsFlowUserStatesIdKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsFlowUserStatesIdKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsFlowResumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUCancelIdResumeIdSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceJobsUCancelIdResumeIdSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsUGetFlowIdResumeIdSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsDbtResumableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsDbtResumableScriptPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsDbtGraphIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsDbtColumnLineageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRunProgressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceJobsRunAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
