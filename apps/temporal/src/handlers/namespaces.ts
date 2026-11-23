import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNamespacesNamespaceSchedulesScheduleIdRoute,
  deleteNamespacesNamespaceWorkerDeploymentsDeploymentNameRoute,
  deleteNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRoute,
  deleteNamespacesNamespaceWorkflowRulesRuleIdRoute,
  getNamespacesNamespaceActivitiesActivityIdOutcomeRoute,
  getNamespacesNamespaceActivitiesActivityIdRoute,
  getNamespacesNamespaceActivitiesRoute,
  getNamespacesNamespaceActivityCountRoute,
  getNamespacesNamespaceArchivedWorkflowsRoute,
  getNamespacesNamespaceBatchOperationsJobIdRoute,
  getNamespacesNamespaceBatchOperationsRoute,
  getNamespacesNamespaceCurrentDeploymentSeriesNameRoute,
  getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityRoute,
  getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdRoute,
  getNamespacesNamespaceDeploymentsRoute,
  getNamespacesNamespaceNexusOperationCountRoute,
  getNamespacesNamespaceNexusOperationsOperationIdPollRoute,
  getNamespacesNamespaceNexusOperationsOperationIdRoute,
  getNamespacesNamespaceNexusOperationsRoute,
  getNamespacesNamespaceScheduleCountRoute,
  getNamespacesNamespaceSchedulesRoute,
  getNamespacesNamespaceSchedulesScheduleIdMatchingTimesRoute,
  getNamespacesNamespaceSchedulesScheduleIdRoute,
  getNamespacesNamespaceTaskQueuesTaskQueueNameRoute,
  getNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityRoute,
  getNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesRoute,
  getNamespacesNamespaceWorkerDeploymentsDeploymentNameRoute,
  getNamespacesNamespaceWorkerDeploymentsRoute,
  getNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRoute,
  getNamespacesNamespaceWorkersDescribeWorkerInstanceKeyRoute,
  getNamespacesNamespaceWorkersRoute,
  getNamespacesNamespaceWorkerTaskReachabilityRoute,
  getNamespacesNamespaceWorkflowCountRoute,
  getNamespacesNamespaceWorkflowRulesRoute,
  getNamespacesNamespaceWorkflowRulesRuleIdRoute,
  getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseRoute,
  getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryRoute,
  getNamespacesNamespaceWorkflowsExecutionWorkflowIdRoute,
  getNamespacesNamespaceWorkflowsRoute,
  postNamespacesNamespaceActivitiesActivityIdCancelRoute,
  postNamespacesNamespaceActivitiesActivityIdCompleteRoute,
  postNamespacesNamespaceActivitiesActivityIdFailRoute,
  postNamespacesNamespaceActivitiesActivityIdHeartbeatRoute,
  postNamespacesNamespaceActivitiesActivityIdPauseRoute,
  postNamespacesNamespaceActivitiesActivityIdResetRoute,
  postNamespacesNamespaceActivitiesActivityIdResolveAsCanceledRoute,
  postNamespacesNamespaceActivitiesActivityIdRoute,
  postNamespacesNamespaceActivitiesActivityIdTerminateRoute,
  postNamespacesNamespaceActivitiesActivityIdUnpauseRoute,
  postNamespacesNamespaceActivitiesActivityIdUpdateOptionsRoute,
  postNamespacesNamespaceActivitiesDeprecatedPauseRoute,
  postNamespacesNamespaceActivitiesDeprecatedResetRoute,
  postNamespacesNamespaceActivitiesDeprecatedUnpauseRoute,
  postNamespacesNamespaceActivitiesDeprecatedUpdateOptionsRoute,
  postNamespacesNamespaceActivityCompleteRoute,
  postNamespacesNamespaceActivityFailRoute,
  postNamespacesNamespaceActivityHeartbeatRoute,
  postNamespacesNamespaceActivityResolveAsCanceledRoute,
  postNamespacesNamespaceBatchOperationsJobIdRoute,
  postNamespacesNamespaceBatchOperationsJobIdStopRoute,
  postNamespacesNamespaceCurrentDeploymentDeploymentSeriesNameRoute,
  postNamespacesNamespaceNexusOperationsOperationIdCancelRoute,
  postNamespacesNamespaceNexusOperationsOperationIdRoute,
  postNamespacesNamespaceNexusOperationsOperationIdTerminateRoute,
  postNamespacesNamespaceSchedulesScheduleIdPatchRoute,
  postNamespacesNamespaceSchedulesScheduleIdRoute,
  postNamespacesNamespaceSchedulesScheduleIdUpdateRoute,
  postNamespacesNamespaceTaskQueuesTaskQueueUpdateConfigRoute,
  postNamespacesNamespaceWorkerDeploymentsDeploymentNameRoute,
  postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionRoute,
  postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerRoute,
  postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionRoute,
  postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigRoute,
  postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataRoute,
  postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigRoute,
  postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameRoute,
  postNamespacesNamespaceWorkersFetchConfigRoute,
  postNamespacesNamespaceWorkersHeartbeatRoute,
  postNamespacesNamespaceWorkersUpdateConfigRoute,
  postNamespacesNamespaceWorkflowRulesRoute,
  postNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeRoute,
  postNamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleRoute,
  postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelRoute,
  postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetRoute,
  postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameRoute,
  postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateRoute,
  postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsRoute,
  postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameRoute,
  postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteRoute,
  postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailRoute,
  postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatRoute,
  postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseRoute,
  postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetRoute,
  postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledRoute,
  postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseRoute,
  postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsRoute,
  postNamespacesNamespaceWorkflowsWorkflowIdPauseRoute,
  postNamespacesNamespaceWorkflowsWorkflowIdRoute,
  postNamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameRoute,
  postNamespacesNamespaceWorkflowsWorkflowIdUnpauseRoute,
} from '../routes'

export const getNamespacesNamespaceActivitiesRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivitiesDeprecatedPauseRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivitiesDeprecatedPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivitiesDeprecatedResetRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivitiesDeprecatedResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivitiesDeprecatedUnpauseRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivitiesDeprecatedUnpauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivitiesDeprecatedUpdateOptionsRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivitiesDeprecatedUpdateOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceActivitiesActivityIdRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceActivitiesActivityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivitiesActivityIdRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivitiesActivityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivitiesActivityIdCancelRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivitiesActivityIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivitiesActivityIdCompleteRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivitiesActivityIdCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivitiesActivityIdFailRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivitiesActivityIdFailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivitiesActivityIdHeartbeatRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivitiesActivityIdHeartbeatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceActivitiesActivityIdOutcomeRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceActivitiesActivityIdOutcomeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivitiesActivityIdPauseRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivitiesActivityIdPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivitiesActivityIdResetRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivitiesActivityIdResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivitiesActivityIdResolveAsCanceledRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivitiesActivityIdResolveAsCanceledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivitiesActivityIdTerminateRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivitiesActivityIdTerminateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivitiesActivityIdUnpauseRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivitiesActivityIdUnpauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivitiesActivityIdUpdateOptionsRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivitiesActivityIdUpdateOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivityCompleteRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivityCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceActivityCountRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceActivityCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivityFailRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivityFailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivityHeartbeatRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivityHeartbeatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceActivityResolveAsCanceledRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceActivityResolveAsCanceledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceArchivedWorkflowsRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceArchivedWorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceBatchOperationsRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceBatchOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceBatchOperationsJobIdRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceBatchOperationsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceBatchOperationsJobIdRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceBatchOperationsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceBatchOperationsJobIdStopRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceBatchOperationsJobIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceCurrentDeploymentDeploymentSeriesNameRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceCurrentDeploymentDeploymentSeriesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceCurrentDeploymentSeriesNameRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceCurrentDeploymentSeriesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceDeploymentsRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceNexusOperationCountRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceNexusOperationCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceNexusOperationsRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceNexusOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceNexusOperationsOperationIdRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceNexusOperationsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceNexusOperationsOperationIdRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceNexusOperationsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceNexusOperationsOperationIdCancelRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceNexusOperationsOperationIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceNexusOperationsOperationIdPollRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceNexusOperationsOperationIdPollRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceNexusOperationsOperationIdTerminateRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceNexusOperationsOperationIdTerminateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceScheduleCountRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceScheduleCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceSchedulesRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceSchedulesScheduleIdRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceSchedulesScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceSchedulesScheduleIdRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceSchedulesScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNamespacesNamespaceSchedulesScheduleIdRouteHandler: RouteHandler<
  typeof deleteNamespacesNamespaceSchedulesScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceSchedulesScheduleIdMatchingTimesRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceSchedulesScheduleIdMatchingTimesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceSchedulesScheduleIdPatchRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceSchedulesScheduleIdPatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceSchedulesScheduleIdUpdateRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceSchedulesScheduleIdUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceTaskQueuesTaskQueueUpdateConfigRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceTaskQueuesTaskQueueUpdateConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceTaskQueuesTaskQueueNameRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceTaskQueuesTaskQueueNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRouteHandler: RouteHandler<
  typeof deleteNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceWorkerDeploymentsRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceWorkerDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceWorkerDeploymentsDeploymentNameRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceWorkerDeploymentsDeploymentNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkerDeploymentsDeploymentNameRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkerDeploymentsDeploymentNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNamespacesNamespaceWorkerDeploymentsDeploymentNameRouteHandler: RouteHandler<
  typeof deleteNamespacesNamespaceWorkerDeploymentsDeploymentNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceWorkerTaskReachabilityRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceWorkerTaskReachabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceWorkersRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceWorkersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceWorkersDescribeWorkerInstanceKeyRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceWorkersDescribeWorkerInstanceKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkersFetchConfigRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkersFetchConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkersHeartbeatRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkersHeartbeatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkersUpdateConfigRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkersUpdateConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceWorkflowCountRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceWorkflowCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceWorkflowRulesRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceWorkflowRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowRulesRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceWorkflowRulesRuleIdRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceWorkflowRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNamespacesNamespaceWorkflowRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteNamespacesNamespaceWorkflowRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceWorkflowsRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceWorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceWorkflowsExecutionWorkflowIdRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceWorkflowsExecutionWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseRouteHandler: RouteHandler<
  typeof getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowIdRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowIdPauseRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowIdPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowIdUnpauseRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowIdUnpauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameRouteHandler: RouteHandler<
  typeof postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
