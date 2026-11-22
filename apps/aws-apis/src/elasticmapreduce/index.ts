import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetElasticMapReduceAddInstanceFleetHandler,
  XAmzTargetElasticMapReduceAddInstanceGroupsHandler,
  XAmzTargetElasticMapReduceAddJobFlowStepsHandler,
  XAmzTargetElasticMapReduceAddTagsHandler,
  XAmzTargetElasticMapReduceCancelStepsHandler,
  XAmzTargetElasticMapReduceCreateSecurityConfigurationHandler,
  XAmzTargetElasticMapReduceCreateStudioHandler,
  XAmzTargetElasticMapReduceCreateStudioSessionMappingHandler,
  XAmzTargetElasticMapReduceDeleteSecurityConfigurationHandler,
  XAmzTargetElasticMapReduceDeleteStudioHandler,
  XAmzTargetElasticMapReduceDeleteStudioSessionMappingHandler,
  XAmzTargetElasticMapReduceDescribeClusterHandler,
  XAmzTargetElasticMapReduceDescribeJobFlowsHandler,
  XAmzTargetElasticMapReduceDescribeNotebookExecutionHandler,
  XAmzTargetElasticMapReduceDescribeReleaseLabelHandler,
  XAmzTargetElasticMapReduceDescribeSecurityConfigurationHandler,
  XAmzTargetElasticMapReduceDescribeStepHandler,
  XAmzTargetElasticMapReduceDescribeStudioHandler,
  XAmzTargetElasticMapReduceGetAutoTerminationPolicyHandler,
  XAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationHandler,
  XAmzTargetElasticMapReduceGetClusterSessionCredentialsHandler,
  XAmzTargetElasticMapReduceGetManagedScalingPolicyHandler,
  XAmzTargetElasticMapReduceGetStudioSessionMappingHandler,
  XAmzTargetElasticMapReduceListBootstrapActionsHandler,
  XAmzTargetElasticMapReduceListClustersHandler,
  XAmzTargetElasticMapReduceListInstanceFleetsHandler,
  XAmzTargetElasticMapReduceListInstanceGroupsHandler,
  XAmzTargetElasticMapReduceListInstancesHandler,
  XAmzTargetElasticMapReduceListNotebookExecutionsHandler,
  XAmzTargetElasticMapReduceListReleaseLabelsHandler,
  XAmzTargetElasticMapReduceListSecurityConfigurationsHandler,
  XAmzTargetElasticMapReduceListStepsHandler,
  XAmzTargetElasticMapReduceListStudioSessionMappingsHandler,
  XAmzTargetElasticMapReduceListStudiosHandler,
  XAmzTargetElasticMapReduceModifyClusterHandler,
  XAmzTargetElasticMapReduceModifyInstanceFleetHandler,
  XAmzTargetElasticMapReduceModifyInstanceGroupsHandler,
  XAmzTargetElasticMapReducePutAutoScalingPolicyHandler,
  XAmzTargetElasticMapReducePutAutoTerminationPolicyHandler,
  XAmzTargetElasticMapReducePutBlockPublicAccessConfigurationHandler,
  XAmzTargetElasticMapReducePutManagedScalingPolicyHandler,
  XAmzTargetElasticMapReduceRemoveAutoScalingPolicyHandler,
  XAmzTargetElasticMapReduceRemoveAutoTerminationPolicyHandler,
  XAmzTargetElasticMapReduceRemoveManagedScalingPolicyHandler,
  XAmzTargetElasticMapReduceRemoveTagsHandler,
  XAmzTargetElasticMapReduceRunJobFlowHandler,
  XAmzTargetElasticMapReduceSetTerminationProtectionHandler,
  XAmzTargetElasticMapReduceSetVisibleToAllUsersHandler,
  XAmzTargetElasticMapReduceStartNotebookExecutionHandler,
  XAmzTargetElasticMapReduceStopNotebookExecutionHandler,
  XAmzTargetElasticMapReduceTerminateJobFlowsHandler,
  XAmzTargetElasticMapReduceUpdateStudioHandler,
  XAmzTargetElasticMapReduceUpdateStudioSessionMappingHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetElasticMapReduceAddInstanceFleetHandler)
  .route('/', XAmzTargetElasticMapReduceAddInstanceGroupsHandler)
  .route('/', XAmzTargetElasticMapReduceAddJobFlowStepsHandler)
  .route('/', XAmzTargetElasticMapReduceAddTagsHandler)
  .route('/', XAmzTargetElasticMapReduceCancelStepsHandler)
  .route('/', XAmzTargetElasticMapReduceCreateSecurityConfigurationHandler)
  .route('/', XAmzTargetElasticMapReduceCreateStudioHandler)
  .route('/', XAmzTargetElasticMapReduceCreateStudioSessionMappingHandler)
  .route('/', XAmzTargetElasticMapReduceDeleteSecurityConfigurationHandler)
  .route('/', XAmzTargetElasticMapReduceDeleteStudioHandler)
  .route('/', XAmzTargetElasticMapReduceDeleteStudioSessionMappingHandler)
  .route('/', XAmzTargetElasticMapReduceDescribeClusterHandler)
  .route('/', XAmzTargetElasticMapReduceDescribeJobFlowsHandler)
  .route('/', XAmzTargetElasticMapReduceDescribeNotebookExecutionHandler)
  .route('/', XAmzTargetElasticMapReduceDescribeReleaseLabelHandler)
  .route('/', XAmzTargetElasticMapReduceDescribeSecurityConfigurationHandler)
  .route('/', XAmzTargetElasticMapReduceDescribeStepHandler)
  .route('/', XAmzTargetElasticMapReduceDescribeStudioHandler)
  .route('/', XAmzTargetElasticMapReduceGetAutoTerminationPolicyHandler)
  .route('/', XAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationHandler)
  .route('/', XAmzTargetElasticMapReduceGetClusterSessionCredentialsHandler)
  .route('/', XAmzTargetElasticMapReduceGetManagedScalingPolicyHandler)
  .route('/', XAmzTargetElasticMapReduceGetStudioSessionMappingHandler)
  .route('/', XAmzTargetElasticMapReduceListBootstrapActionsHandler)
  .route('/', XAmzTargetElasticMapReduceListClustersHandler)
  .route('/', XAmzTargetElasticMapReduceListInstanceFleetsHandler)
  .route('/', XAmzTargetElasticMapReduceListInstanceGroupsHandler)
  .route('/', XAmzTargetElasticMapReduceListInstancesHandler)
  .route('/', XAmzTargetElasticMapReduceListNotebookExecutionsHandler)
  .route('/', XAmzTargetElasticMapReduceListReleaseLabelsHandler)
  .route('/', XAmzTargetElasticMapReduceListSecurityConfigurationsHandler)
  .route('/', XAmzTargetElasticMapReduceListStepsHandler)
  .route('/', XAmzTargetElasticMapReduceListStudioSessionMappingsHandler)
  .route('/', XAmzTargetElasticMapReduceListStudiosHandler)
  .route('/', XAmzTargetElasticMapReduceModifyClusterHandler)
  .route('/', XAmzTargetElasticMapReduceModifyInstanceFleetHandler)
  .route('/', XAmzTargetElasticMapReduceModifyInstanceGroupsHandler)
  .route('/', XAmzTargetElasticMapReducePutAutoScalingPolicyHandler)
  .route('/', XAmzTargetElasticMapReducePutAutoTerminationPolicyHandler)
  .route('/', XAmzTargetElasticMapReducePutBlockPublicAccessConfigurationHandler)
  .route('/', XAmzTargetElasticMapReducePutManagedScalingPolicyHandler)
  .route('/', XAmzTargetElasticMapReduceRemoveAutoScalingPolicyHandler)
  .route('/', XAmzTargetElasticMapReduceRemoveAutoTerminationPolicyHandler)
  .route('/', XAmzTargetElasticMapReduceRemoveManagedScalingPolicyHandler)
  .route('/', XAmzTargetElasticMapReduceRemoveTagsHandler)
  .route('/', XAmzTargetElasticMapReduceRunJobFlowHandler)
  .route('/', XAmzTargetElasticMapReduceSetTerminationProtectionHandler)
  .route('/', XAmzTargetElasticMapReduceSetVisibleToAllUsersHandler)
  .route('/', XAmzTargetElasticMapReduceStartNotebookExecutionHandler)
  .route('/', XAmzTargetElasticMapReduceStopNotebookExecutionHandler)
  .route('/', XAmzTargetElasticMapReduceTerminateJobFlowsHandler)
  .route('/', XAmzTargetElasticMapReduceUpdateStudioHandler)
  .route('/', XAmzTargetElasticMapReduceUpdateStudioSessionMappingHandler)

export default app
