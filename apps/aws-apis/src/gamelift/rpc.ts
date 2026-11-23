import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetGameLiftAcceptMatch(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.AcceptMatch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.AcceptMatch'].$post(args, options))
}

export async function postXAmzTargetGameLiftClaimGameServer(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ClaimGameServer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.ClaimGameServer'].$post(args, options))
}

export async function postXAmzTargetGameLiftCreateAlias(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateAlias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.CreateAlias'].$post(args, options))
}

export async function postXAmzTargetGameLiftCreateBuild(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateBuild']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.CreateBuild'].$post(args, options))
}

export async function postXAmzTargetGameLiftCreateFleet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateFleet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.CreateFleet'].$post(args, options))
}

export async function postXAmzTargetGameLiftCreateFleetLocations(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateFleetLocations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.CreateFleetLocations'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftCreateGameServerGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateGameServerGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.CreateGameServerGroup'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftCreateGameSession(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateGameSession']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.CreateGameSession'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftCreateGameSessionQueue(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateGameSessionQueue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.CreateGameSessionQueue'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftCreateLocation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateLocation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.CreateLocation'].$post(args, options))
}

export async function postXAmzTargetGameLiftCreateMatchmakingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.CreateMatchmakingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.CreateMatchmakingConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftCreateMatchmakingRuleSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.CreateMatchmakingRuleSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.CreateMatchmakingRuleSet'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftCreatePlayerSession(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreatePlayerSession']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.CreatePlayerSession'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftCreatePlayerSessions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreatePlayerSessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.CreatePlayerSessions'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftCreateScript(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateScript']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.CreateScript'].$post(args, options))
}

export async function postXAmzTargetGameLiftCreateVpcPeeringAuthorization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftCreateVpcPeeringConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.CreateVpcPeeringConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.CreateVpcPeeringConnection'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDeleteAlias(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteAlias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.DeleteAlias'].$post(args, options))
}

export async function postXAmzTargetGameLiftDeleteBuild(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteBuild']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.DeleteBuild'].$post(args, options))
}

export async function postXAmzTargetGameLiftDeleteFleet(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteFleet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.DeleteFleet'].$post(args, options))
}

export async function postXAmzTargetGameLiftDeleteFleetLocations(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteFleetLocations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DeleteFleetLocations'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDeleteGameServerGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteGameServerGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DeleteGameServerGroup'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDeleteGameSessionQueue(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteGameSessionQueue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DeleteGameSessionQueue'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDeleteLocation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteLocation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.DeleteLocation'].$post(args, options))
}

export async function postXAmzTargetGameLiftDeleteMatchmakingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDeleteMatchmakingRuleSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDeleteScalingPolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteScalingPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DeleteScalingPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDeleteScript(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteScript']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.DeleteScript'].$post(args, options))
}

export async function postXAmzTargetGameLiftDeleteVpcPeeringAuthorization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDeleteVpcPeeringConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DeleteVpcPeeringConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DeleteVpcPeeringConnection'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDeregisterCompute(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeregisterCompute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DeregisterCompute'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDeregisterGameServer(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeregisterGameServer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DeregisterGameServer'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeAlias(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeAlias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.DescribeAlias'].$post(args, options))
}

export async function postXAmzTargetGameLiftDescribeBuild(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeBuild']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.DescribeBuild'].$post(args, options))
}

export async function postXAmzTargetGameLiftDescribeCompute(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeCompute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.DescribeCompute'].$post(args, options))
}

export async function postXAmzTargetGameLiftDescribeEC2InstanceLimits(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeEC2InstanceLimits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeEC2InstanceLimits'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeFleetAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeFleetAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeFleetAttributes'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeFleetCapacity(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetCapacity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeFleetCapacity'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeFleetEvents(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetEvents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeFleetEvents'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeFleetLocationAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeFleetLocationAttributes'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeFleetLocationCapacity(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationCapacity']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeFleetLocationCapacity'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeFleetLocationUtilization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationUtilization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeFleetLocationUtilization'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeFleetPortSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeFleetPortSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeFleetPortSettings'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeFleetUtilization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeFleetUtilization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeFleetUtilization'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeGameServer(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameServer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeGameServer'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeGameServerGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeGameServerGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeGameServerGroup'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeGameServerInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeGameServerInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeGameServerInstances'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeGameSessionDetails(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionDetails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeGameSessionDetails'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeGameSessionPlacement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionPlacement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeGameSessionPlacement'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeGameSessionQueues(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionQueues']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeGameSessionQueues'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeGameSessions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameSessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeGameSessions'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeInstances(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeInstances'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeMatchmaking(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeMatchmaking']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeMatchmaking'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeMatchmakingConfigurations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeMatchmakingRuleSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribePlayerSessions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribePlayerSessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribePlayerSessions'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeRuntimeConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeRuntimeConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeRuntimeConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeScalingPolicies(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeScalingPolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeScalingPolicies'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeScript(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeScript']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.DescribeScript'].$post(args, options))
}

export async function postXAmzTargetGameLiftDescribeVpcPeeringAuthorizations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftDescribeVpcPeeringConnections(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.DescribeVpcPeeringConnections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.DescribeVpcPeeringConnections'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftGetComputeAccess(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetComputeAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.GetComputeAccess'].$post(args, options))
}

export async function postXAmzTargetGameLiftGetComputeAuthToken(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetComputeAuthToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.GetComputeAuthToken'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftGetGameSessionLogUrl(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetGameSessionLogUrl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.GetGameSessionLogUrl'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftGetInstanceAccess(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetInstanceAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.GetInstanceAccess'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftListAliases(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListAliases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.ListAliases'].$post(args, options))
}

export async function postXAmzTargetGameLiftListBuilds(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListBuilds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.ListBuilds'].$post(args, options))
}

export async function postXAmzTargetGameLiftListCompute(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListCompute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.ListCompute'].$post(args, options))
}

export async function postXAmzTargetGameLiftListFleets(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListFleets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.ListFleets'].$post(args, options))
}

export async function postXAmzTargetGameLiftListGameServerGroups(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListGameServerGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.ListGameServerGroups'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftListGameServers(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListGameServers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.ListGameServers'].$post(args, options))
}

export async function postXAmzTargetGameLiftListLocations(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListLocations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.ListLocations'].$post(args, options))
}

export async function postXAmzTargetGameLiftListScripts(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListScripts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.ListScripts'].$post(args, options))
}

export async function postXAmzTargetGameLiftListTagsForResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListTagsForResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftPutScalingPolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.PutScalingPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.PutScalingPolicy'].$post(args, options))
}

export async function postXAmzTargetGameLiftRegisterCompute(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.RegisterCompute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.RegisterCompute'].$post(args, options))
}

export async function postXAmzTargetGameLiftRegisterGameServer(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.RegisterGameServer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.RegisterGameServer'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftRequestUploadCredentials(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.RequestUploadCredentials']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.RequestUploadCredentials'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftResolveAlias(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ResolveAlias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.ResolveAlias'].$post(args, options))
}

export async function postXAmzTargetGameLiftResumeGameServerGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ResumeGameServerGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.ResumeGameServerGroup'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftSearchGameSessions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.SearchGameSessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.SearchGameSessions'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftStartFleetActions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartFleetActions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.StartFleetActions'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftStartGameSessionPlacement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.StartGameSessionPlacement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.StartGameSessionPlacement'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftStartMatchBackfill(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartMatchBackfill']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.StartMatchBackfill'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftStartMatchmaking(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartMatchmaking']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.StartMatchmaking'].$post(args, options))
}

export async function postXAmzTargetGameLiftStopFleetActions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StopFleetActions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.StopFleetActions'].$post(args, options))
}

export async function postXAmzTargetGameLiftStopGameSessionPlacement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.StopGameSessionPlacement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.StopGameSessionPlacement'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftStopMatchmaking(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StopMatchmaking']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.StopMatchmaking'].$post(args, options))
}

export async function postXAmzTargetGameLiftSuspendGameServerGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.SuspendGameServerGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.SuspendGameServerGroup'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.TagResource'].$post(args, options))
}

export async function postXAmzTargetGameLiftUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.UntagResource'].$post(args, options))
}

export async function postXAmzTargetGameLiftUpdateAlias(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateAlias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.UpdateAlias'].$post(args, options))
}

export async function postXAmzTargetGameLiftUpdateBuild(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateBuild']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.UpdateBuild'].$post(args, options))
}

export async function postXAmzTargetGameLiftUpdateFleetAttributes(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateFleetAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.UpdateFleetAttributes'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftUpdateFleetCapacity(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateFleetCapacity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.UpdateFleetCapacity'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftUpdateFleetPortSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.UpdateFleetPortSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.UpdateFleetPortSettings'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftUpdateGameServer(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameServer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.UpdateGameServer'].$post(args, options))
}

export async function postXAmzTargetGameLiftUpdateGameServerGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameServerGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.UpdateGameServerGroup'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftUpdateGameSession(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameSession']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.UpdateGameSession'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftUpdateGameSessionQueue(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameSessionQueue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.UpdateGameSessionQueue'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftUpdateMatchmakingConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftUpdateRuntimeConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.UpdateRuntimeConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.UpdateRuntimeConfiguration'].$post(args, options),
  )
}

export async function postXAmzTargetGameLiftUpdateScript(
  args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateScript']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=GameLift.UpdateScript'].$post(args, options))
}

export async function postXAmzTargetGameLiftValidateMatchmakingRuleSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet'].$post(args, options),
  )
}
