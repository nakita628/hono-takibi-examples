import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const namespacesHandler = app
  .openapi(getNamespacesNamespaceActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivitiesDeprecatedPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivitiesDeprecatedResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivitiesDeprecatedUnpauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivitiesDeprecatedUpdateOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceActivitiesActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivitiesActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivitiesActivityIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivitiesActivityIdCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivitiesActivityIdFailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivitiesActivityIdHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceActivitiesActivityIdOutcomeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivitiesActivityIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivitiesActivityIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivitiesActivityIdResolveAsCanceledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivitiesActivityIdTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivitiesActivityIdUnpauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivitiesActivityIdUpdateOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivityCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceActivityCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivityFailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivityHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceActivityResolveAsCanceledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceArchivedWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceBatchOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceBatchOperationsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceBatchOperationsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceBatchOperationsJobIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceCurrentDeploymentDeploymentSeriesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceCurrentDeploymentSeriesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getNamespacesNamespaceNexusOperationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceNexusOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceNexusOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceNexusOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceNexusOperationsOperationIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceNexusOperationsOperationIdPollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceNexusOperationsOperationIdTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceScheduleCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceSchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceSchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNamespacesNamespaceSchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceSchedulesScheduleIdMatchingTimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceSchedulesScheduleIdPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceSchedulesScheduleIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceTaskQueuesTaskQueueUpdateConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceTaskQueuesTaskQueueNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getNamespacesNamespaceWorkerDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceWorkerDeploymentsDeploymentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkerDeploymentsDeploymentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNamespacesNamespaceWorkerDeploymentsDeploymentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceWorkerTaskReachabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceWorkersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceWorkersDescribeWorkerInstanceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkersFetchConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkersHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkersUpdateConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceWorkflowCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceWorkflowRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkflowRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceWorkflowRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNamespacesNamespaceWorkflowRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceWorkflowsExecutionWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postNamespacesNamespaceWorkflowsWorkflowIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkflowsWorkflowIdUnpauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
