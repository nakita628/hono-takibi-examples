import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetGameLiftAcceptMatchHandler,
  xAmzTargetGameLiftClaimGameServerHandler,
  xAmzTargetGameLiftCreateAliasHandler,
  xAmzTargetGameLiftCreateBuildHandler,
  xAmzTargetGameLiftCreateFleetHandler,
  xAmzTargetGameLiftCreateFleetLocationsHandler,
  xAmzTargetGameLiftCreateGameServerGroupHandler,
  xAmzTargetGameLiftCreateGameSessionHandler,
  xAmzTargetGameLiftCreateGameSessionQueueHandler,
  xAmzTargetGameLiftCreateLocationHandler,
  xAmzTargetGameLiftCreateMatchmakingConfigurationHandler,
  xAmzTargetGameLiftCreateMatchmakingRuleSetHandler,
  xAmzTargetGameLiftCreatePlayerSessionHandler,
  xAmzTargetGameLiftCreatePlayerSessionsHandler,
  xAmzTargetGameLiftCreateScriptHandler,
  xAmzTargetGameLiftCreateVpcPeeringAuthorizationHandler,
  xAmzTargetGameLiftCreateVpcPeeringConnectionHandler,
  xAmzTargetGameLiftDeleteAliasHandler,
  xAmzTargetGameLiftDeleteBuildHandler,
  xAmzTargetGameLiftDeleteFleetHandler,
  xAmzTargetGameLiftDeleteFleetLocationsHandler,
  xAmzTargetGameLiftDeleteGameServerGroupHandler,
  xAmzTargetGameLiftDeleteGameSessionQueueHandler,
  xAmzTargetGameLiftDeleteLocationHandler,
  xAmzTargetGameLiftDeleteMatchmakingConfigurationHandler,
  xAmzTargetGameLiftDeleteMatchmakingRuleSetHandler,
  xAmzTargetGameLiftDeleteScalingPolicyHandler,
  xAmzTargetGameLiftDeleteScriptHandler,
  xAmzTargetGameLiftDeleteVpcPeeringAuthorizationHandler,
  xAmzTargetGameLiftDeleteVpcPeeringConnectionHandler,
  xAmzTargetGameLiftDeregisterComputeHandler,
  xAmzTargetGameLiftDeregisterGameServerHandler,
  xAmzTargetGameLiftDescribeAliasHandler,
  xAmzTargetGameLiftDescribeBuildHandler,
  xAmzTargetGameLiftDescribeComputeHandler,
  xAmzTargetGameLiftDescribeEc2InstanceLimitsHandler,
  xAmzTargetGameLiftDescribeFleetAttributesHandler,
  xAmzTargetGameLiftDescribeFleetCapacityHandler,
  xAmzTargetGameLiftDescribeFleetEventsHandler,
  xAmzTargetGameLiftDescribeFleetLocationAttributesHandler,
  xAmzTargetGameLiftDescribeFleetLocationCapacityHandler,
  xAmzTargetGameLiftDescribeFleetLocationUtilizationHandler,
  xAmzTargetGameLiftDescribeFleetPortSettingsHandler,
  xAmzTargetGameLiftDescribeFleetUtilizationHandler,
  xAmzTargetGameLiftDescribeGameServerGroupHandler,
  xAmzTargetGameLiftDescribeGameServerHandler,
  xAmzTargetGameLiftDescribeGameServerInstancesHandler,
  xAmzTargetGameLiftDescribeGameSessionDetailsHandler,
  xAmzTargetGameLiftDescribeGameSessionPlacementHandler,
  xAmzTargetGameLiftDescribeGameSessionQueuesHandler,
  xAmzTargetGameLiftDescribeGameSessionsHandler,
  xAmzTargetGameLiftDescribeInstancesHandler,
  xAmzTargetGameLiftDescribeMatchmakingConfigurationsHandler,
  xAmzTargetGameLiftDescribeMatchmakingHandler,
  xAmzTargetGameLiftDescribeMatchmakingRuleSetsHandler,
  xAmzTargetGameLiftDescribePlayerSessionsHandler,
  xAmzTargetGameLiftDescribeRuntimeConfigurationHandler,
  xAmzTargetGameLiftDescribeScalingPoliciesHandler,
  xAmzTargetGameLiftDescribeScriptHandler,
  xAmzTargetGameLiftDescribeVpcPeeringAuthorizationsHandler,
  xAmzTargetGameLiftDescribeVpcPeeringConnectionsHandler,
  xAmzTargetGameLiftGetComputeAccessHandler,
  xAmzTargetGameLiftGetComputeAuthTokenHandler,
  xAmzTargetGameLiftGetGameSessionLogUrlHandler,
  xAmzTargetGameLiftGetInstanceAccessHandler,
  xAmzTargetGameLiftListAliasesHandler,
  xAmzTargetGameLiftListBuildsHandler,
  xAmzTargetGameLiftListComputeHandler,
  xAmzTargetGameLiftListFleetsHandler,
  xAmzTargetGameLiftListGameServerGroupsHandler,
  xAmzTargetGameLiftListGameServersHandler,
  xAmzTargetGameLiftListLocationsHandler,
  xAmzTargetGameLiftListScriptsHandler,
  xAmzTargetGameLiftListTagsForResourceHandler,
  xAmzTargetGameLiftPutScalingPolicyHandler,
  xAmzTargetGameLiftRegisterComputeHandler,
  xAmzTargetGameLiftRegisterGameServerHandler,
  xAmzTargetGameLiftRequestUploadCredentialsHandler,
  xAmzTargetGameLiftResolveAliasHandler,
  xAmzTargetGameLiftResumeGameServerGroupHandler,
  xAmzTargetGameLiftSearchGameSessionsHandler,
  xAmzTargetGameLiftStartFleetActionsHandler,
  xAmzTargetGameLiftStartGameSessionPlacementHandler,
  xAmzTargetGameLiftStartMatchBackfillHandler,
  xAmzTargetGameLiftStartMatchmakingHandler,
  xAmzTargetGameLiftStopFleetActionsHandler,
  xAmzTargetGameLiftStopGameSessionPlacementHandler,
  xAmzTargetGameLiftStopMatchmakingHandler,
  xAmzTargetGameLiftSuspendGameServerGroupHandler,
  xAmzTargetGameLiftTagResourceHandler,
  xAmzTargetGameLiftUntagResourceHandler,
  xAmzTargetGameLiftUpdateAliasHandler,
  xAmzTargetGameLiftUpdateBuildHandler,
  xAmzTargetGameLiftUpdateFleetAttributesHandler,
  xAmzTargetGameLiftUpdateFleetCapacityHandler,
  xAmzTargetGameLiftUpdateFleetPortSettingsHandler,
  xAmzTargetGameLiftUpdateGameServerGroupHandler,
  xAmzTargetGameLiftUpdateGameServerHandler,
  xAmzTargetGameLiftUpdateGameSessionHandler,
  xAmzTargetGameLiftUpdateGameSessionQueueHandler,
  xAmzTargetGameLiftUpdateMatchmakingConfigurationHandler,
  xAmzTargetGameLiftUpdateRuntimeConfigurationHandler,
  xAmzTargetGameLiftUpdateScriptHandler,
  xAmzTargetGameLiftValidateMatchmakingRuleSetHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetGameLiftAcceptMatchHandler)
  .route('/', xAmzTargetGameLiftClaimGameServerHandler)
  .route('/', xAmzTargetGameLiftCreateAliasHandler)
  .route('/', xAmzTargetGameLiftCreateBuildHandler)
  .route('/', xAmzTargetGameLiftCreateFleetHandler)
  .route('/', xAmzTargetGameLiftCreateFleetLocationsHandler)
  .route('/', xAmzTargetGameLiftCreateGameServerGroupHandler)
  .route('/', xAmzTargetGameLiftCreateGameSessionHandler)
  .route('/', xAmzTargetGameLiftCreateGameSessionQueueHandler)
  .route('/', xAmzTargetGameLiftCreateLocationHandler)
  .route('/', xAmzTargetGameLiftCreateMatchmakingConfigurationHandler)
  .route('/', xAmzTargetGameLiftCreateMatchmakingRuleSetHandler)
  .route('/', xAmzTargetGameLiftCreatePlayerSessionHandler)
  .route('/', xAmzTargetGameLiftCreatePlayerSessionsHandler)
  .route('/', xAmzTargetGameLiftCreateScriptHandler)
  .route('/', xAmzTargetGameLiftCreateVpcPeeringAuthorizationHandler)
  .route('/', xAmzTargetGameLiftCreateVpcPeeringConnectionHandler)
  .route('/', xAmzTargetGameLiftDeleteAliasHandler)
  .route('/', xAmzTargetGameLiftDeleteBuildHandler)
  .route('/', xAmzTargetGameLiftDeleteFleetHandler)
  .route('/', xAmzTargetGameLiftDeleteFleetLocationsHandler)
  .route('/', xAmzTargetGameLiftDeleteGameServerGroupHandler)
  .route('/', xAmzTargetGameLiftDeleteGameSessionQueueHandler)
  .route('/', xAmzTargetGameLiftDeleteLocationHandler)
  .route('/', xAmzTargetGameLiftDeleteMatchmakingConfigurationHandler)
  .route('/', xAmzTargetGameLiftDeleteMatchmakingRuleSetHandler)
  .route('/', xAmzTargetGameLiftDeleteScalingPolicyHandler)
  .route('/', xAmzTargetGameLiftDeleteScriptHandler)
  .route('/', xAmzTargetGameLiftDeleteVpcPeeringAuthorizationHandler)
  .route('/', xAmzTargetGameLiftDeleteVpcPeeringConnectionHandler)
  .route('/', xAmzTargetGameLiftDeregisterComputeHandler)
  .route('/', xAmzTargetGameLiftDeregisterGameServerHandler)
  .route('/', xAmzTargetGameLiftDescribeAliasHandler)
  .route('/', xAmzTargetGameLiftDescribeBuildHandler)
  .route('/', xAmzTargetGameLiftDescribeComputeHandler)
  .route('/', xAmzTargetGameLiftDescribeEc2InstanceLimitsHandler)
  .route('/', xAmzTargetGameLiftDescribeFleetAttributesHandler)
  .route('/', xAmzTargetGameLiftDescribeFleetCapacityHandler)
  .route('/', xAmzTargetGameLiftDescribeFleetEventsHandler)
  .route('/', xAmzTargetGameLiftDescribeFleetLocationAttributesHandler)
  .route('/', xAmzTargetGameLiftDescribeFleetLocationCapacityHandler)
  .route('/', xAmzTargetGameLiftDescribeFleetLocationUtilizationHandler)
  .route('/', xAmzTargetGameLiftDescribeFleetPortSettingsHandler)
  .route('/', xAmzTargetGameLiftDescribeFleetUtilizationHandler)
  .route('/', xAmzTargetGameLiftDescribeGameServerHandler)
  .route('/', xAmzTargetGameLiftDescribeGameServerGroupHandler)
  .route('/', xAmzTargetGameLiftDescribeGameServerInstancesHandler)
  .route('/', xAmzTargetGameLiftDescribeGameSessionDetailsHandler)
  .route('/', xAmzTargetGameLiftDescribeGameSessionPlacementHandler)
  .route('/', xAmzTargetGameLiftDescribeGameSessionQueuesHandler)
  .route('/', xAmzTargetGameLiftDescribeGameSessionsHandler)
  .route('/', xAmzTargetGameLiftDescribeInstancesHandler)
  .route('/', xAmzTargetGameLiftDescribeMatchmakingHandler)
  .route('/', xAmzTargetGameLiftDescribeMatchmakingConfigurationsHandler)
  .route('/', xAmzTargetGameLiftDescribeMatchmakingRuleSetsHandler)
  .route('/', xAmzTargetGameLiftDescribePlayerSessionsHandler)
  .route('/', xAmzTargetGameLiftDescribeRuntimeConfigurationHandler)
  .route('/', xAmzTargetGameLiftDescribeScalingPoliciesHandler)
  .route('/', xAmzTargetGameLiftDescribeScriptHandler)
  .route('/', xAmzTargetGameLiftDescribeVpcPeeringAuthorizationsHandler)
  .route('/', xAmzTargetGameLiftDescribeVpcPeeringConnectionsHandler)
  .route('/', xAmzTargetGameLiftGetComputeAccessHandler)
  .route('/', xAmzTargetGameLiftGetComputeAuthTokenHandler)
  .route('/', xAmzTargetGameLiftGetGameSessionLogUrlHandler)
  .route('/', xAmzTargetGameLiftGetInstanceAccessHandler)
  .route('/', xAmzTargetGameLiftListAliasesHandler)
  .route('/', xAmzTargetGameLiftListBuildsHandler)
  .route('/', xAmzTargetGameLiftListComputeHandler)
  .route('/', xAmzTargetGameLiftListFleetsHandler)
  .route('/', xAmzTargetGameLiftListGameServerGroupsHandler)
  .route('/', xAmzTargetGameLiftListGameServersHandler)
  .route('/', xAmzTargetGameLiftListLocationsHandler)
  .route('/', xAmzTargetGameLiftListScriptsHandler)
  .route('/', xAmzTargetGameLiftListTagsForResourceHandler)
  .route('/', xAmzTargetGameLiftPutScalingPolicyHandler)
  .route('/', xAmzTargetGameLiftRegisterComputeHandler)
  .route('/', xAmzTargetGameLiftRegisterGameServerHandler)
  .route('/', xAmzTargetGameLiftRequestUploadCredentialsHandler)
  .route('/', xAmzTargetGameLiftResolveAliasHandler)
  .route('/', xAmzTargetGameLiftResumeGameServerGroupHandler)
  .route('/', xAmzTargetGameLiftSearchGameSessionsHandler)
  .route('/', xAmzTargetGameLiftStartFleetActionsHandler)
  .route('/', xAmzTargetGameLiftStartGameSessionPlacementHandler)
  .route('/', xAmzTargetGameLiftStartMatchBackfillHandler)
  .route('/', xAmzTargetGameLiftStartMatchmakingHandler)
  .route('/', xAmzTargetGameLiftStopFleetActionsHandler)
  .route('/', xAmzTargetGameLiftStopGameSessionPlacementHandler)
  .route('/', xAmzTargetGameLiftStopMatchmakingHandler)
  .route('/', xAmzTargetGameLiftSuspendGameServerGroupHandler)
  .route('/', xAmzTargetGameLiftTagResourceHandler)
  .route('/', xAmzTargetGameLiftUntagResourceHandler)
  .route('/', xAmzTargetGameLiftUpdateAliasHandler)
  .route('/', xAmzTargetGameLiftUpdateBuildHandler)
  .route('/', xAmzTargetGameLiftUpdateFleetAttributesHandler)
  .route('/', xAmzTargetGameLiftUpdateFleetCapacityHandler)
  .route('/', xAmzTargetGameLiftUpdateFleetPortSettingsHandler)
  .route('/', xAmzTargetGameLiftUpdateGameServerHandler)
  .route('/', xAmzTargetGameLiftUpdateGameServerGroupHandler)
  .route('/', xAmzTargetGameLiftUpdateGameSessionHandler)
  .route('/', xAmzTargetGameLiftUpdateGameSessionQueueHandler)
  .route('/', xAmzTargetGameLiftUpdateMatchmakingConfigurationHandler)
  .route('/', xAmzTargetGameLiftUpdateRuntimeConfigurationHandler)
  .route('/', xAmzTargetGameLiftUpdateScriptHandler)
  .route('/', xAmzTargetGameLiftValidateMatchmakingRuleSetHandler)

export default app
