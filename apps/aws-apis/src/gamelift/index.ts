import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetGameLiftAcceptMatchHandler,
  XAmzTargetGameLiftClaimGameServerHandler,
  XAmzTargetGameLiftCreateAliasHandler,
  XAmzTargetGameLiftCreateBuildHandler,
  XAmzTargetGameLiftCreateFleetHandler,
  XAmzTargetGameLiftCreateFleetLocationsHandler,
  XAmzTargetGameLiftCreateGameServerGroupHandler,
  XAmzTargetGameLiftCreateGameSessionHandler,
  XAmzTargetGameLiftCreateGameSessionQueueHandler,
  XAmzTargetGameLiftCreateLocationHandler,
  XAmzTargetGameLiftCreateMatchmakingConfigurationHandler,
  XAmzTargetGameLiftCreateMatchmakingRuleSetHandler,
  XAmzTargetGameLiftCreatePlayerSessionHandler,
  XAmzTargetGameLiftCreatePlayerSessionsHandler,
  XAmzTargetGameLiftCreateScriptHandler,
  XAmzTargetGameLiftCreateVpcPeeringAuthorizationHandler,
  XAmzTargetGameLiftCreateVpcPeeringConnectionHandler,
  XAmzTargetGameLiftDeleteAliasHandler,
  XAmzTargetGameLiftDeleteBuildHandler,
  XAmzTargetGameLiftDeleteFleetHandler,
  XAmzTargetGameLiftDeleteFleetLocationsHandler,
  XAmzTargetGameLiftDeleteGameServerGroupHandler,
  XAmzTargetGameLiftDeleteGameSessionQueueHandler,
  XAmzTargetGameLiftDeleteLocationHandler,
  XAmzTargetGameLiftDeleteMatchmakingConfigurationHandler,
  XAmzTargetGameLiftDeleteMatchmakingRuleSetHandler,
  XAmzTargetGameLiftDeleteScalingPolicyHandler,
  XAmzTargetGameLiftDeleteScriptHandler,
  XAmzTargetGameLiftDeleteVpcPeeringAuthorizationHandler,
  XAmzTargetGameLiftDeleteVpcPeeringConnectionHandler,
  XAmzTargetGameLiftDeregisterComputeHandler,
  XAmzTargetGameLiftDeregisterGameServerHandler,
  XAmzTargetGameLiftDescribeAliasHandler,
  XAmzTargetGameLiftDescribeBuildHandler,
  XAmzTargetGameLiftDescribeComputeHandler,
  XAmzTargetGameLiftDescribeEC2InstanceLimitsHandler,
  XAmzTargetGameLiftDescribeFleetAttributesHandler,
  XAmzTargetGameLiftDescribeFleetCapacityHandler,
  XAmzTargetGameLiftDescribeFleetEventsHandler,
  XAmzTargetGameLiftDescribeFleetLocationAttributesHandler,
  XAmzTargetGameLiftDescribeFleetLocationCapacityHandler,
  XAmzTargetGameLiftDescribeFleetLocationUtilizationHandler,
  XAmzTargetGameLiftDescribeFleetPortSettingsHandler,
  XAmzTargetGameLiftDescribeFleetUtilizationHandler,
  XAmzTargetGameLiftDescribeGameServerGroupHandler,
  XAmzTargetGameLiftDescribeGameServerHandler,
  XAmzTargetGameLiftDescribeGameServerInstancesHandler,
  XAmzTargetGameLiftDescribeGameSessionDetailsHandler,
  XAmzTargetGameLiftDescribeGameSessionPlacementHandler,
  XAmzTargetGameLiftDescribeGameSessionQueuesHandler,
  XAmzTargetGameLiftDescribeGameSessionsHandler,
  XAmzTargetGameLiftDescribeInstancesHandler,
  XAmzTargetGameLiftDescribeMatchmakingConfigurationsHandler,
  XAmzTargetGameLiftDescribeMatchmakingHandler,
  XAmzTargetGameLiftDescribeMatchmakingRuleSetsHandler,
  XAmzTargetGameLiftDescribePlayerSessionsHandler,
  XAmzTargetGameLiftDescribeRuntimeConfigurationHandler,
  XAmzTargetGameLiftDescribeScalingPoliciesHandler,
  XAmzTargetGameLiftDescribeScriptHandler,
  XAmzTargetGameLiftDescribeVpcPeeringAuthorizationsHandler,
  XAmzTargetGameLiftDescribeVpcPeeringConnectionsHandler,
  XAmzTargetGameLiftGetComputeAccessHandler,
  XAmzTargetGameLiftGetComputeAuthTokenHandler,
  XAmzTargetGameLiftGetGameSessionLogUrlHandler,
  XAmzTargetGameLiftGetInstanceAccessHandler,
  XAmzTargetGameLiftListAliasesHandler,
  XAmzTargetGameLiftListBuildsHandler,
  XAmzTargetGameLiftListComputeHandler,
  XAmzTargetGameLiftListFleetsHandler,
  XAmzTargetGameLiftListGameServerGroupsHandler,
  XAmzTargetGameLiftListGameServersHandler,
  XAmzTargetGameLiftListLocationsHandler,
  XAmzTargetGameLiftListScriptsHandler,
  XAmzTargetGameLiftListTagsForResourceHandler,
  XAmzTargetGameLiftPutScalingPolicyHandler,
  XAmzTargetGameLiftRegisterComputeHandler,
  XAmzTargetGameLiftRegisterGameServerHandler,
  XAmzTargetGameLiftRequestUploadCredentialsHandler,
  XAmzTargetGameLiftResolveAliasHandler,
  XAmzTargetGameLiftResumeGameServerGroupHandler,
  XAmzTargetGameLiftSearchGameSessionsHandler,
  XAmzTargetGameLiftStartFleetActionsHandler,
  XAmzTargetGameLiftStartGameSessionPlacementHandler,
  XAmzTargetGameLiftStartMatchBackfillHandler,
  XAmzTargetGameLiftStartMatchmakingHandler,
  XAmzTargetGameLiftStopFleetActionsHandler,
  XAmzTargetGameLiftStopGameSessionPlacementHandler,
  XAmzTargetGameLiftStopMatchmakingHandler,
  XAmzTargetGameLiftSuspendGameServerGroupHandler,
  XAmzTargetGameLiftTagResourceHandler,
  XAmzTargetGameLiftUntagResourceHandler,
  XAmzTargetGameLiftUpdateAliasHandler,
  XAmzTargetGameLiftUpdateBuildHandler,
  XAmzTargetGameLiftUpdateFleetAttributesHandler,
  XAmzTargetGameLiftUpdateFleetCapacityHandler,
  XAmzTargetGameLiftUpdateFleetPortSettingsHandler,
  XAmzTargetGameLiftUpdateGameServerGroupHandler,
  XAmzTargetGameLiftUpdateGameServerHandler,
  XAmzTargetGameLiftUpdateGameSessionHandler,
  XAmzTargetGameLiftUpdateGameSessionQueueHandler,
  XAmzTargetGameLiftUpdateMatchmakingConfigurationHandler,
  XAmzTargetGameLiftUpdateRuntimeConfigurationHandler,
  XAmzTargetGameLiftUpdateScriptHandler,
  XAmzTargetGameLiftValidateMatchmakingRuleSetHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetGameLiftAcceptMatchHandler)
  .route('/', XAmzTargetGameLiftClaimGameServerHandler)
  .route('/', XAmzTargetGameLiftCreateAliasHandler)
  .route('/', XAmzTargetGameLiftCreateBuildHandler)
  .route('/', XAmzTargetGameLiftCreateFleetHandler)
  .route('/', XAmzTargetGameLiftCreateFleetLocationsHandler)
  .route('/', XAmzTargetGameLiftCreateGameServerGroupHandler)
  .route('/', XAmzTargetGameLiftCreateGameSessionHandler)
  .route('/', XAmzTargetGameLiftCreateGameSessionQueueHandler)
  .route('/', XAmzTargetGameLiftCreateLocationHandler)
  .route('/', XAmzTargetGameLiftCreateMatchmakingConfigurationHandler)
  .route('/', XAmzTargetGameLiftCreateMatchmakingRuleSetHandler)
  .route('/', XAmzTargetGameLiftCreatePlayerSessionHandler)
  .route('/', XAmzTargetGameLiftCreatePlayerSessionsHandler)
  .route('/', XAmzTargetGameLiftCreateScriptHandler)
  .route('/', XAmzTargetGameLiftCreateVpcPeeringAuthorizationHandler)
  .route('/', XAmzTargetGameLiftCreateVpcPeeringConnectionHandler)
  .route('/', XAmzTargetGameLiftDeleteAliasHandler)
  .route('/', XAmzTargetGameLiftDeleteBuildHandler)
  .route('/', XAmzTargetGameLiftDeleteFleetHandler)
  .route('/', XAmzTargetGameLiftDeleteFleetLocationsHandler)
  .route('/', XAmzTargetGameLiftDeleteGameServerGroupHandler)
  .route('/', XAmzTargetGameLiftDeleteGameSessionQueueHandler)
  .route('/', XAmzTargetGameLiftDeleteLocationHandler)
  .route('/', XAmzTargetGameLiftDeleteMatchmakingConfigurationHandler)
  .route('/', XAmzTargetGameLiftDeleteMatchmakingRuleSetHandler)
  .route('/', XAmzTargetGameLiftDeleteScalingPolicyHandler)
  .route('/', XAmzTargetGameLiftDeleteScriptHandler)
  .route('/', XAmzTargetGameLiftDeleteVpcPeeringAuthorizationHandler)
  .route('/', XAmzTargetGameLiftDeleteVpcPeeringConnectionHandler)
  .route('/', XAmzTargetGameLiftDeregisterComputeHandler)
  .route('/', XAmzTargetGameLiftDeregisterGameServerHandler)
  .route('/', XAmzTargetGameLiftDescribeAliasHandler)
  .route('/', XAmzTargetGameLiftDescribeBuildHandler)
  .route('/', XAmzTargetGameLiftDescribeComputeHandler)
  .route('/', XAmzTargetGameLiftDescribeEC2InstanceLimitsHandler)
  .route('/', XAmzTargetGameLiftDescribeFleetAttributesHandler)
  .route('/', XAmzTargetGameLiftDescribeFleetCapacityHandler)
  .route('/', XAmzTargetGameLiftDescribeFleetEventsHandler)
  .route('/', XAmzTargetGameLiftDescribeFleetLocationAttributesHandler)
  .route('/', XAmzTargetGameLiftDescribeFleetLocationCapacityHandler)
  .route('/', XAmzTargetGameLiftDescribeFleetLocationUtilizationHandler)
  .route('/', XAmzTargetGameLiftDescribeFleetPortSettingsHandler)
  .route('/', XAmzTargetGameLiftDescribeFleetUtilizationHandler)
  .route('/', XAmzTargetGameLiftDescribeGameServerHandler)
  .route('/', XAmzTargetGameLiftDescribeGameServerGroupHandler)
  .route('/', XAmzTargetGameLiftDescribeGameServerInstancesHandler)
  .route('/', XAmzTargetGameLiftDescribeGameSessionDetailsHandler)
  .route('/', XAmzTargetGameLiftDescribeGameSessionPlacementHandler)
  .route('/', XAmzTargetGameLiftDescribeGameSessionQueuesHandler)
  .route('/', XAmzTargetGameLiftDescribeGameSessionsHandler)
  .route('/', XAmzTargetGameLiftDescribeInstancesHandler)
  .route('/', XAmzTargetGameLiftDescribeMatchmakingHandler)
  .route('/', XAmzTargetGameLiftDescribeMatchmakingConfigurationsHandler)
  .route('/', XAmzTargetGameLiftDescribeMatchmakingRuleSetsHandler)
  .route('/', XAmzTargetGameLiftDescribePlayerSessionsHandler)
  .route('/', XAmzTargetGameLiftDescribeRuntimeConfigurationHandler)
  .route('/', XAmzTargetGameLiftDescribeScalingPoliciesHandler)
  .route('/', XAmzTargetGameLiftDescribeScriptHandler)
  .route('/', XAmzTargetGameLiftDescribeVpcPeeringAuthorizationsHandler)
  .route('/', XAmzTargetGameLiftDescribeVpcPeeringConnectionsHandler)
  .route('/', XAmzTargetGameLiftGetComputeAccessHandler)
  .route('/', XAmzTargetGameLiftGetComputeAuthTokenHandler)
  .route('/', XAmzTargetGameLiftGetGameSessionLogUrlHandler)
  .route('/', XAmzTargetGameLiftGetInstanceAccessHandler)
  .route('/', XAmzTargetGameLiftListAliasesHandler)
  .route('/', XAmzTargetGameLiftListBuildsHandler)
  .route('/', XAmzTargetGameLiftListComputeHandler)
  .route('/', XAmzTargetGameLiftListFleetsHandler)
  .route('/', XAmzTargetGameLiftListGameServerGroupsHandler)
  .route('/', XAmzTargetGameLiftListGameServersHandler)
  .route('/', XAmzTargetGameLiftListLocationsHandler)
  .route('/', XAmzTargetGameLiftListScriptsHandler)
  .route('/', XAmzTargetGameLiftListTagsForResourceHandler)
  .route('/', XAmzTargetGameLiftPutScalingPolicyHandler)
  .route('/', XAmzTargetGameLiftRegisterComputeHandler)
  .route('/', XAmzTargetGameLiftRegisterGameServerHandler)
  .route('/', XAmzTargetGameLiftRequestUploadCredentialsHandler)
  .route('/', XAmzTargetGameLiftResolveAliasHandler)
  .route('/', XAmzTargetGameLiftResumeGameServerGroupHandler)
  .route('/', XAmzTargetGameLiftSearchGameSessionsHandler)
  .route('/', XAmzTargetGameLiftStartFleetActionsHandler)
  .route('/', XAmzTargetGameLiftStartGameSessionPlacementHandler)
  .route('/', XAmzTargetGameLiftStartMatchBackfillHandler)
  .route('/', XAmzTargetGameLiftStartMatchmakingHandler)
  .route('/', XAmzTargetGameLiftStopFleetActionsHandler)
  .route('/', XAmzTargetGameLiftStopGameSessionPlacementHandler)
  .route('/', XAmzTargetGameLiftStopMatchmakingHandler)
  .route('/', XAmzTargetGameLiftSuspendGameServerGroupHandler)
  .route('/', XAmzTargetGameLiftTagResourceHandler)
  .route('/', XAmzTargetGameLiftUntagResourceHandler)
  .route('/', XAmzTargetGameLiftUpdateAliasHandler)
  .route('/', XAmzTargetGameLiftUpdateBuildHandler)
  .route('/', XAmzTargetGameLiftUpdateFleetAttributesHandler)
  .route('/', XAmzTargetGameLiftUpdateFleetCapacityHandler)
  .route('/', XAmzTargetGameLiftUpdateFleetPortSettingsHandler)
  .route('/', XAmzTargetGameLiftUpdateGameServerHandler)
  .route('/', XAmzTargetGameLiftUpdateGameServerGroupHandler)
  .route('/', XAmzTargetGameLiftUpdateGameSessionHandler)
  .route('/', XAmzTargetGameLiftUpdateGameSessionQueueHandler)
  .route('/', XAmzTargetGameLiftUpdateMatchmakingConfigurationHandler)
  .route('/', XAmzTargetGameLiftUpdateRuntimeConfigurationHandler)
  .route('/', XAmzTargetGameLiftUpdateScriptHandler)
  .route('/', XAmzTargetGameLiftValidateMatchmakingRuleSetHandler)

export default app
