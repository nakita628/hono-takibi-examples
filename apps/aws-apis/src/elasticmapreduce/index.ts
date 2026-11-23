import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetElasticMapReduceAddInstanceFleetHandler,
  xAmzTargetElasticMapReduceAddInstanceGroupsHandler,
  xAmzTargetElasticMapReduceAddJobFlowStepsHandler,
  xAmzTargetElasticMapReduceAddTagsHandler,
  xAmzTargetElasticMapReduceCancelStepsHandler,
  xAmzTargetElasticMapReduceCreateSecurityConfigurationHandler,
  xAmzTargetElasticMapReduceCreateStudioHandler,
  xAmzTargetElasticMapReduceCreateStudioSessionMappingHandler,
  xAmzTargetElasticMapReduceDeleteSecurityConfigurationHandler,
  xAmzTargetElasticMapReduceDeleteStudioHandler,
  xAmzTargetElasticMapReduceDeleteStudioSessionMappingHandler,
  xAmzTargetElasticMapReduceDescribeClusterHandler,
  xAmzTargetElasticMapReduceDescribeJobFlowsHandler,
  xAmzTargetElasticMapReduceDescribeNotebookExecutionHandler,
  xAmzTargetElasticMapReduceDescribeReleaseLabelHandler,
  xAmzTargetElasticMapReduceDescribeSecurityConfigurationHandler,
  xAmzTargetElasticMapReduceDescribeStepHandler,
  xAmzTargetElasticMapReduceDescribeStudioHandler,
  xAmzTargetElasticMapReduceGetAutoTerminationPolicyHandler,
  xAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationHandler,
  xAmzTargetElasticMapReduceGetClusterSessionCredentialsHandler,
  xAmzTargetElasticMapReduceGetManagedScalingPolicyHandler,
  xAmzTargetElasticMapReduceGetStudioSessionMappingHandler,
  xAmzTargetElasticMapReduceListBootstrapActionsHandler,
  xAmzTargetElasticMapReduceListClustersHandler,
  xAmzTargetElasticMapReduceListInstanceFleetsHandler,
  xAmzTargetElasticMapReduceListInstanceGroupsHandler,
  xAmzTargetElasticMapReduceListInstancesHandler,
  xAmzTargetElasticMapReduceListNotebookExecutionsHandler,
  xAmzTargetElasticMapReduceListReleaseLabelsHandler,
  xAmzTargetElasticMapReduceListSecurityConfigurationsHandler,
  xAmzTargetElasticMapReduceListStepsHandler,
  xAmzTargetElasticMapReduceListStudioSessionMappingsHandler,
  xAmzTargetElasticMapReduceListStudiosHandler,
  xAmzTargetElasticMapReduceModifyClusterHandler,
  xAmzTargetElasticMapReduceModifyInstanceFleetHandler,
  xAmzTargetElasticMapReduceModifyInstanceGroupsHandler,
  xAmzTargetElasticMapReducePutAutoScalingPolicyHandler,
  xAmzTargetElasticMapReducePutAutoTerminationPolicyHandler,
  xAmzTargetElasticMapReducePutBlockPublicAccessConfigurationHandler,
  xAmzTargetElasticMapReducePutManagedScalingPolicyHandler,
  xAmzTargetElasticMapReduceRemoveAutoScalingPolicyHandler,
  xAmzTargetElasticMapReduceRemoveAutoTerminationPolicyHandler,
  xAmzTargetElasticMapReduceRemoveManagedScalingPolicyHandler,
  xAmzTargetElasticMapReduceRemoveTagsHandler,
  xAmzTargetElasticMapReduceRunJobFlowHandler,
  xAmzTargetElasticMapReduceSetTerminationProtectionHandler,
  xAmzTargetElasticMapReduceSetVisibleToAllUsersHandler,
  xAmzTargetElasticMapReduceStartNotebookExecutionHandler,
  xAmzTargetElasticMapReduceStopNotebookExecutionHandler,
  xAmzTargetElasticMapReduceTerminateJobFlowsHandler,
  xAmzTargetElasticMapReduceUpdateStudioHandler,
  xAmzTargetElasticMapReduceUpdateStudioSessionMappingHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetElasticMapReduceAddInstanceFleetHandler)
  .route('/', xAmzTargetElasticMapReduceAddInstanceGroupsHandler)
  .route('/', xAmzTargetElasticMapReduceAddJobFlowStepsHandler)
  .route('/', xAmzTargetElasticMapReduceAddTagsHandler)
  .route('/', xAmzTargetElasticMapReduceCancelStepsHandler)
  .route('/', xAmzTargetElasticMapReduceCreateSecurityConfigurationHandler)
  .route('/', xAmzTargetElasticMapReduceCreateStudioHandler)
  .route('/', xAmzTargetElasticMapReduceCreateStudioSessionMappingHandler)
  .route('/', xAmzTargetElasticMapReduceDeleteSecurityConfigurationHandler)
  .route('/', xAmzTargetElasticMapReduceDeleteStudioHandler)
  .route('/', xAmzTargetElasticMapReduceDeleteStudioSessionMappingHandler)
  .route('/', xAmzTargetElasticMapReduceDescribeClusterHandler)
  .route('/', xAmzTargetElasticMapReduceDescribeJobFlowsHandler)
  .route('/', xAmzTargetElasticMapReduceDescribeNotebookExecutionHandler)
  .route('/', xAmzTargetElasticMapReduceDescribeReleaseLabelHandler)
  .route('/', xAmzTargetElasticMapReduceDescribeSecurityConfigurationHandler)
  .route('/', xAmzTargetElasticMapReduceDescribeStepHandler)
  .route('/', xAmzTargetElasticMapReduceDescribeStudioHandler)
  .route('/', xAmzTargetElasticMapReduceGetAutoTerminationPolicyHandler)
  .route('/', xAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationHandler)
  .route('/', xAmzTargetElasticMapReduceGetClusterSessionCredentialsHandler)
  .route('/', xAmzTargetElasticMapReduceGetManagedScalingPolicyHandler)
  .route('/', xAmzTargetElasticMapReduceGetStudioSessionMappingHandler)
  .route('/', xAmzTargetElasticMapReduceListBootstrapActionsHandler)
  .route('/', xAmzTargetElasticMapReduceListClustersHandler)
  .route('/', xAmzTargetElasticMapReduceListInstanceFleetsHandler)
  .route('/', xAmzTargetElasticMapReduceListInstanceGroupsHandler)
  .route('/', xAmzTargetElasticMapReduceListInstancesHandler)
  .route('/', xAmzTargetElasticMapReduceListNotebookExecutionsHandler)
  .route('/', xAmzTargetElasticMapReduceListReleaseLabelsHandler)
  .route('/', xAmzTargetElasticMapReduceListSecurityConfigurationsHandler)
  .route('/', xAmzTargetElasticMapReduceListStepsHandler)
  .route('/', xAmzTargetElasticMapReduceListStudioSessionMappingsHandler)
  .route('/', xAmzTargetElasticMapReduceListStudiosHandler)
  .route('/', xAmzTargetElasticMapReduceModifyClusterHandler)
  .route('/', xAmzTargetElasticMapReduceModifyInstanceFleetHandler)
  .route('/', xAmzTargetElasticMapReduceModifyInstanceGroupsHandler)
  .route('/', xAmzTargetElasticMapReducePutAutoScalingPolicyHandler)
  .route('/', xAmzTargetElasticMapReducePutAutoTerminationPolicyHandler)
  .route('/', xAmzTargetElasticMapReducePutBlockPublicAccessConfigurationHandler)
  .route('/', xAmzTargetElasticMapReducePutManagedScalingPolicyHandler)
  .route('/', xAmzTargetElasticMapReduceRemoveAutoScalingPolicyHandler)
  .route('/', xAmzTargetElasticMapReduceRemoveAutoTerminationPolicyHandler)
  .route('/', xAmzTargetElasticMapReduceRemoveManagedScalingPolicyHandler)
  .route('/', xAmzTargetElasticMapReduceRemoveTagsHandler)
  .route('/', xAmzTargetElasticMapReduceRunJobFlowHandler)
  .route('/', xAmzTargetElasticMapReduceSetTerminationProtectionHandler)
  .route('/', xAmzTargetElasticMapReduceSetVisibleToAllUsersHandler)
  .route('/', xAmzTargetElasticMapReduceStartNotebookExecutionHandler)
  .route('/', xAmzTargetElasticMapReduceStopNotebookExecutionHandler)
  .route('/', xAmzTargetElasticMapReduceTerminateJobFlowsHandler)
  .route('/', xAmzTargetElasticMapReduceUpdateStudioHandler)
  .route('/', xAmzTargetElasticMapReduceUpdateStudioSessionMappingHandler)

export default app
