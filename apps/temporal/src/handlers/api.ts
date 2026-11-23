import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiV1NamespacesNamespaceSchedulesScheduleIdRoute,
  deleteApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameRoute,
  deleteApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRoute,
  deleteApiV1NamespacesNamespaceWorkflowRulesRuleIdRoute,
  deleteApiV1NexusEndpointsIdRoute,
  getApiV1ClusterInfoRoute,
  getApiV1NamespacesNamespaceActivitiesActivityIdOutcomeRoute,
  getApiV1NamespacesNamespaceActivitiesActivityIdRoute,
  getApiV1NamespacesNamespaceActivitiesRoute,
  getApiV1NamespacesNamespaceActivityCountRoute,
  getApiV1NamespacesNamespaceArchivedWorkflowsRoute,
  getApiV1NamespacesNamespaceBatchOperationsJobIdRoute,
  getApiV1NamespacesNamespaceBatchOperationsRoute,
  getApiV1NamespacesNamespaceCurrentDeploymentSeriesNameRoute,
  getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityRoute,
  getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdRoute,
  getApiV1NamespacesNamespaceDeploymentsRoute,
  getApiV1NamespacesNamespaceNexusOperationCountRoute,
  getApiV1NamespacesNamespaceNexusOperationsOperationIdPollRoute,
  getApiV1NamespacesNamespaceNexusOperationsOperationIdRoute,
  getApiV1NamespacesNamespaceNexusOperationsRoute,
  getApiV1NamespacesNamespaceRoute,
  getApiV1NamespacesNamespaceScheduleCountRoute,
  getApiV1NamespacesNamespaceSchedulesRoute,
  getApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimesRoute,
  getApiV1NamespacesNamespaceSchedulesScheduleIdRoute,
  getApiV1NamespacesNamespaceSearchAttributesRoute,
  getApiV1NamespacesNamespaceTaskQueuesTaskQueueNameRoute,
  getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityRoute,
  getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesRoute,
  getApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameRoute,
  getApiV1NamespacesNamespaceWorkerDeploymentsRoute,
  getApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRoute,
  getApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKeyRoute,
  getApiV1NamespacesNamespaceWorkersRoute,
  getApiV1NamespacesNamespaceWorkerTaskReachabilityRoute,
  getApiV1NamespacesNamespaceWorkflowCountRoute,
  getApiV1NamespacesNamespaceWorkflowRulesRoute,
  getApiV1NamespacesNamespaceWorkflowRulesRuleIdRoute,
  getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseRoute,
  getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryRoute,
  getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdRoute,
  getApiV1NamespacesNamespaceWorkflowsRoute,
  getApiV1NamespacesRoute,
  getApiV1NexusEndpointsIdRoute,
  getApiV1NexusEndpointsRoute,
  getApiV1SystemInfoRoute,
  postApiV1NamespacesNamespaceActivitiesActivityIdCancelRoute,
  postApiV1NamespacesNamespaceActivitiesActivityIdCompleteRoute,
  postApiV1NamespacesNamespaceActivitiesActivityIdFailRoute,
  postApiV1NamespacesNamespaceActivitiesActivityIdHeartbeatRoute,
  postApiV1NamespacesNamespaceActivitiesActivityIdPauseRoute,
  postApiV1NamespacesNamespaceActivitiesActivityIdResetRoute,
  postApiV1NamespacesNamespaceActivitiesActivityIdResolveAsCanceledRoute,
  postApiV1NamespacesNamespaceActivitiesActivityIdRoute,
  postApiV1NamespacesNamespaceActivitiesActivityIdTerminateRoute,
  postApiV1NamespacesNamespaceActivitiesActivityIdUnpauseRoute,
  postApiV1NamespacesNamespaceActivitiesActivityIdUpdateOptionsRoute,
  postApiV1NamespacesNamespaceActivitiesDeprecatedPauseRoute,
  postApiV1NamespacesNamespaceActivitiesDeprecatedResetRoute,
  postApiV1NamespacesNamespaceActivitiesDeprecatedUnpauseRoute,
  postApiV1NamespacesNamespaceActivitiesDeprecatedUpdateOptionsRoute,
  postApiV1NamespacesNamespaceActivityCompleteRoute,
  postApiV1NamespacesNamespaceActivityFailRoute,
  postApiV1NamespacesNamespaceActivityHeartbeatRoute,
  postApiV1NamespacesNamespaceActivityResolveAsCanceledRoute,
  postApiV1NamespacesNamespaceBatchOperationsJobIdRoute,
  postApiV1NamespacesNamespaceBatchOperationsJobIdStopRoute,
  postApiV1NamespacesNamespaceCurrentDeploymentDeploymentSeriesNameRoute,
  postApiV1NamespacesNamespaceNexusOperationsOperationIdCancelRoute,
  postApiV1NamespacesNamespaceNexusOperationsOperationIdRoute,
  postApiV1NamespacesNamespaceNexusOperationsOperationIdTerminateRoute,
  postApiV1NamespacesNamespaceSchedulesScheduleIdPatchRoute,
  postApiV1NamespacesNamespaceSchedulesScheduleIdRoute,
  postApiV1NamespacesNamespaceSchedulesScheduleIdUpdateRoute,
  postApiV1NamespacesNamespaceTaskQueuesTaskQueueUpdateConfigRoute,
  postApiV1NamespacesNamespaceUpdateRoute,
  postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameRoute,
  postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionRoute,
  postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerRoute,
  postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionRoute,
  postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigRoute,
  postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataRoute,
  postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigRoute,
  postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameRoute,
  postApiV1NamespacesNamespaceWorkersFetchConfigRoute,
  postApiV1NamespacesNamespaceWorkersHeartbeatRoute,
  postApiV1NamespacesNamespaceWorkersUpdateConfigRoute,
  postApiV1NamespacesNamespaceWorkflowRulesRoute,
  postApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeRoute,
  postApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowIdPauseRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowIdRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameRoute,
  postApiV1NamespacesNamespaceWorkflowsWorkflowIdUnpauseRoute,
  postApiV1NamespacesRoute,
  postApiV1NexusEndpointsIdUpdateRoute,
  postApiV1NexusEndpointsRoute,
} from '../routes'

export const getApiV1ClusterInfoRouteHandler: RouteHandler<
  typeof getApiV1ClusterInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesRouteHandler: RouteHandler<typeof getApiV1NamespacesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesRouteHandler: RouteHandler<
  typeof postApiV1NamespacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceActivitiesRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivitiesDeprecatedPauseRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivitiesDeprecatedPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivitiesDeprecatedResetRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivitiesDeprecatedResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivitiesDeprecatedUnpauseRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivitiesDeprecatedUnpauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivitiesDeprecatedUpdateOptionsRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivitiesDeprecatedUpdateOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceActivitiesActivityIdRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceActivitiesActivityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivitiesActivityIdRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivitiesActivityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivitiesActivityIdCancelRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivitiesActivityIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivitiesActivityIdCompleteRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivitiesActivityIdCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivitiesActivityIdFailRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivitiesActivityIdFailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivitiesActivityIdHeartbeatRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivitiesActivityIdHeartbeatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceActivitiesActivityIdOutcomeRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceActivitiesActivityIdOutcomeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivitiesActivityIdPauseRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivitiesActivityIdPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivitiesActivityIdResetRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivitiesActivityIdResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivitiesActivityIdResolveAsCanceledRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivitiesActivityIdResolveAsCanceledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivitiesActivityIdTerminateRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivitiesActivityIdTerminateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivitiesActivityIdUnpauseRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivitiesActivityIdUnpauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivitiesActivityIdUpdateOptionsRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivitiesActivityIdUpdateOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivityCompleteRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivityCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceActivityCountRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceActivityCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivityFailRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivityFailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivityHeartbeatRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivityHeartbeatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceActivityResolveAsCanceledRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceActivityResolveAsCanceledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceArchivedWorkflowsRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceArchivedWorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceBatchOperationsRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceBatchOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceBatchOperationsJobIdRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceBatchOperationsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceBatchOperationsJobIdRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceBatchOperationsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceBatchOperationsJobIdStopRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceBatchOperationsJobIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceCurrentDeploymentDeploymentSeriesNameRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceCurrentDeploymentDeploymentSeriesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceCurrentDeploymentSeriesNameRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceCurrentDeploymentSeriesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceDeploymentsRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceNexusOperationCountRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceNexusOperationCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceNexusOperationsRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceNexusOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceNexusOperationsOperationIdRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceNexusOperationsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceNexusOperationsOperationIdRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceNexusOperationsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceNexusOperationsOperationIdCancelRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceNexusOperationsOperationIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceNexusOperationsOperationIdPollRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceNexusOperationsOperationIdPollRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceNexusOperationsOperationIdTerminateRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceNexusOperationsOperationIdTerminateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceScheduleCountRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceScheduleCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceSchedulesRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceSchedulesScheduleIdRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceSchedulesScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceSchedulesScheduleIdRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceSchedulesScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceSchedulesScheduleIdRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceSchedulesScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimesRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceSchedulesScheduleIdPatchRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceSchedulesScheduleIdPatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceSchedulesScheduleIdUpdateRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceSchedulesScheduleIdUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceSearchAttributesRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceSearchAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceTaskQueuesTaskQueueUpdateConfigRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceTaskQueuesTaskQueueUpdateConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceTaskQueuesTaskQueueNameRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceTaskQueuesTaskQueueNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceUpdateRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceWorkerDeploymentsRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceWorkerDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceWorkerTaskReachabilityRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceWorkerTaskReachabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceWorkersRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceWorkersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKeyRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkersFetchConfigRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkersFetchConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkersHeartbeatRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkersHeartbeatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkersUpdateConfigRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkersUpdateConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceWorkflowCountRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceWorkflowCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceWorkflowRulesRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceWorkflowRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowRulesRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceWorkflowRulesRuleIdRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceWorkflowRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NamespacesNamespaceWorkflowRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteApiV1NamespacesNamespaceWorkflowRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceWorkflowsRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceWorkflowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseRouteHandler: RouteHandler<
  typeof getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdPauseRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowIdPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowIdUnpauseRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowIdUnpauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameRouteHandler: RouteHandler<
  typeof postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NexusEndpointsRouteHandler: RouteHandler<
  typeof getApiV1NexusEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NexusEndpointsRouteHandler: RouteHandler<
  typeof postApiV1NexusEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NexusEndpointsIdRouteHandler: RouteHandler<
  typeof getApiV1NexusEndpointsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NexusEndpointsIdRouteHandler: RouteHandler<
  typeof deleteApiV1NexusEndpointsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NexusEndpointsIdUpdateRouteHandler: RouteHandler<
  typeof postApiV1NexusEndpointsIdUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SystemInfoRouteHandler: RouteHandler<typeof getApiV1SystemInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
