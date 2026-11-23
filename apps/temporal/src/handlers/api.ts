import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1ClusterInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivitiesDeprecatedPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivitiesDeprecatedResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivitiesDeprecatedUnpauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivitiesDeprecatedUpdateOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceActivitiesActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivitiesActivityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivitiesActivityIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivitiesActivityIdCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivitiesActivityIdFailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivitiesActivityIdHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceActivitiesActivityIdOutcomeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivitiesActivityIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivitiesActivityIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivitiesActivityIdResolveAsCanceledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivitiesActivityIdTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivitiesActivityIdUnpauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivitiesActivityIdUpdateOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivityCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceActivityCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivityFailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivityHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceActivityResolveAsCanceledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceArchivedWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceBatchOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceBatchOperationsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceBatchOperationsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceBatchOperationsJobIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceCurrentDeploymentDeploymentSeriesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceCurrentDeploymentSeriesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV1NamespacesNamespaceNexusOperationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceNexusOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceNexusOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceNexusOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceNexusOperationsOperationIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceNexusOperationsOperationIdPollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceNexusOperationsOperationIdTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceScheduleCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceSchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceSchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceSchedulesScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceSchedulesScheduleIdPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceSchedulesScheduleIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceSearchAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceTaskQueuesTaskQueueUpdateConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceTaskQueuesTaskQueueNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV1NamespacesNamespaceWorkerDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV1NamespacesNamespaceWorkerTaskReachabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceWorkersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceWorkersFetchConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceWorkersHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceWorkersUpdateConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceWorkflowCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceWorkflowRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceWorkflowRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceWorkflowRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NamespacesNamespaceWorkflowRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV1NamespacesNamespaceWorkflowsWorkflowIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceWorkflowsWorkflowIdUnpauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV1NexusEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NexusEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NexusEndpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NexusEndpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NexusEndpointsIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
