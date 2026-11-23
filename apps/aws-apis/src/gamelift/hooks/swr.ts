import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetGameLiftAcceptMatchKey() {
  return ['#X-Amz-Target=GameLift.AcceptMatch'] as const
}

export function getXAmzTargetGameLiftClaimGameServerKey() {
  return ['#X-Amz-Target=GameLift.ClaimGameServer'] as const
}

export function getXAmzTargetGameLiftCreateAliasKey() {
  return ['#X-Amz-Target=GameLift.CreateAlias'] as const
}

export function getXAmzTargetGameLiftCreateBuildKey() {
  return ['#X-Amz-Target=GameLift.CreateBuild'] as const
}

export function getXAmzTargetGameLiftCreateFleetKey() {
  return ['#X-Amz-Target=GameLift.CreateFleet'] as const
}

export function getXAmzTargetGameLiftCreateFleetLocationsKey() {
  return ['#X-Amz-Target=GameLift.CreateFleetLocations'] as const
}

export function getXAmzTargetGameLiftCreateGameServerGroupKey() {
  return ['#X-Amz-Target=GameLift.CreateGameServerGroup'] as const
}

export function getXAmzTargetGameLiftCreateGameSessionKey() {
  return ['#X-Amz-Target=GameLift.CreateGameSession'] as const
}

export function getXAmzTargetGameLiftCreateGameSessionQueueKey() {
  return ['#X-Amz-Target=GameLift.CreateGameSessionQueue'] as const
}

export function getXAmzTargetGameLiftCreateLocationKey() {
  return ['#X-Amz-Target=GameLift.CreateLocation'] as const
}

export function getXAmzTargetGameLiftCreateMatchmakingConfigurationKey() {
  return ['#X-Amz-Target=GameLift.CreateMatchmakingConfiguration'] as const
}

export function getXAmzTargetGameLiftCreateMatchmakingRuleSetKey() {
  return ['#X-Amz-Target=GameLift.CreateMatchmakingRuleSet'] as const
}

export function getXAmzTargetGameLiftCreatePlayerSessionKey() {
  return ['#X-Amz-Target=GameLift.CreatePlayerSession'] as const
}

export function getXAmzTargetGameLiftCreatePlayerSessionsKey() {
  return ['#X-Amz-Target=GameLift.CreatePlayerSessions'] as const
}

export function getXAmzTargetGameLiftCreateScriptKey() {
  return ['#X-Amz-Target=GameLift.CreateScript'] as const
}

export function getXAmzTargetGameLiftCreateVpcPeeringAuthorizationKey() {
  return ['#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization'] as const
}

export function getXAmzTargetGameLiftCreateVpcPeeringConnectionKey() {
  return ['#X-Amz-Target=GameLift.CreateVpcPeeringConnection'] as const
}

export function getXAmzTargetGameLiftDeleteAliasKey() {
  return ['#X-Amz-Target=GameLift.DeleteAlias'] as const
}

export function getXAmzTargetGameLiftDeleteBuildKey() {
  return ['#X-Amz-Target=GameLift.DeleteBuild'] as const
}

export function getXAmzTargetGameLiftDeleteFleetKey() {
  return ['#X-Amz-Target=GameLift.DeleteFleet'] as const
}

export function getXAmzTargetGameLiftDeleteFleetLocationsKey() {
  return ['#X-Amz-Target=GameLift.DeleteFleetLocations'] as const
}

export function getXAmzTargetGameLiftDeleteGameServerGroupKey() {
  return ['#X-Amz-Target=GameLift.DeleteGameServerGroup'] as const
}

export function getXAmzTargetGameLiftDeleteGameSessionQueueKey() {
  return ['#X-Amz-Target=GameLift.DeleteGameSessionQueue'] as const
}

export function getXAmzTargetGameLiftDeleteLocationKey() {
  return ['#X-Amz-Target=GameLift.DeleteLocation'] as const
}

export function getXAmzTargetGameLiftDeleteMatchmakingConfigurationKey() {
  return ['#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration'] as const
}

export function getXAmzTargetGameLiftDeleteMatchmakingRuleSetKey() {
  return ['#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet'] as const
}

export function getXAmzTargetGameLiftDeleteScalingPolicyKey() {
  return ['#X-Amz-Target=GameLift.DeleteScalingPolicy'] as const
}

export function getXAmzTargetGameLiftDeleteScriptKey() {
  return ['#X-Amz-Target=GameLift.DeleteScript'] as const
}

export function getXAmzTargetGameLiftDeleteVpcPeeringAuthorizationKey() {
  return ['#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization'] as const
}

export function getXAmzTargetGameLiftDeleteVpcPeeringConnectionKey() {
  return ['#X-Amz-Target=GameLift.DeleteVpcPeeringConnection'] as const
}

export function getXAmzTargetGameLiftDeregisterComputeKey() {
  return ['#X-Amz-Target=GameLift.DeregisterCompute'] as const
}

export function getXAmzTargetGameLiftDeregisterGameServerKey() {
  return ['#X-Amz-Target=GameLift.DeregisterGameServer'] as const
}

export function getXAmzTargetGameLiftDescribeAliasKey() {
  return ['#X-Amz-Target=GameLift.DescribeAlias'] as const
}

export function getXAmzTargetGameLiftDescribeBuildKey() {
  return ['#X-Amz-Target=GameLift.DescribeBuild'] as const
}

export function getXAmzTargetGameLiftDescribeComputeKey() {
  return ['#X-Amz-Target=GameLift.DescribeCompute'] as const
}

export function getXAmzTargetGameLiftDescribeEC2InstanceLimitsKey() {
  return ['#X-Amz-Target=GameLift.DescribeEC2InstanceLimits'] as const
}

export function getXAmzTargetGameLiftDescribeFleetAttributesKey() {
  return ['#X-Amz-Target=GameLift.DescribeFleetAttributes'] as const
}

export function getXAmzTargetGameLiftDescribeFleetCapacityKey() {
  return ['#X-Amz-Target=GameLift.DescribeFleetCapacity'] as const
}

export function getXAmzTargetGameLiftDescribeFleetEventsKey() {
  return ['#X-Amz-Target=GameLift.DescribeFleetEvents'] as const
}

export function getXAmzTargetGameLiftDescribeFleetLocationAttributesKey() {
  return ['#X-Amz-Target=GameLift.DescribeFleetLocationAttributes'] as const
}

export function getXAmzTargetGameLiftDescribeFleetLocationCapacityKey() {
  return ['#X-Amz-Target=GameLift.DescribeFleetLocationCapacity'] as const
}

export function getXAmzTargetGameLiftDescribeFleetLocationUtilizationKey() {
  return ['#X-Amz-Target=GameLift.DescribeFleetLocationUtilization'] as const
}

export function getXAmzTargetGameLiftDescribeFleetPortSettingsKey() {
  return ['#X-Amz-Target=GameLift.DescribeFleetPortSettings'] as const
}

export function getXAmzTargetGameLiftDescribeFleetUtilizationKey() {
  return ['#X-Amz-Target=GameLift.DescribeFleetUtilization'] as const
}

export function getXAmzTargetGameLiftDescribeGameServerKey() {
  return ['#X-Amz-Target=GameLift.DescribeGameServer'] as const
}

export function getXAmzTargetGameLiftDescribeGameServerGroupKey() {
  return ['#X-Amz-Target=GameLift.DescribeGameServerGroup'] as const
}

export function getXAmzTargetGameLiftDescribeGameServerInstancesKey() {
  return ['#X-Amz-Target=GameLift.DescribeGameServerInstances'] as const
}

export function getXAmzTargetGameLiftDescribeGameSessionDetailsKey() {
  return ['#X-Amz-Target=GameLift.DescribeGameSessionDetails'] as const
}

export function getXAmzTargetGameLiftDescribeGameSessionPlacementKey() {
  return ['#X-Amz-Target=GameLift.DescribeGameSessionPlacement'] as const
}

export function getXAmzTargetGameLiftDescribeGameSessionQueuesKey() {
  return ['#X-Amz-Target=GameLift.DescribeGameSessionQueues'] as const
}

export function getXAmzTargetGameLiftDescribeGameSessionsKey() {
  return ['#X-Amz-Target=GameLift.DescribeGameSessions'] as const
}

export function getXAmzTargetGameLiftDescribeInstancesKey() {
  return ['#X-Amz-Target=GameLift.DescribeInstances'] as const
}

export function getXAmzTargetGameLiftDescribeMatchmakingKey() {
  return ['#X-Amz-Target=GameLift.DescribeMatchmaking'] as const
}

export function getXAmzTargetGameLiftDescribeMatchmakingConfigurationsKey() {
  return ['#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations'] as const
}

export function getXAmzTargetGameLiftDescribeMatchmakingRuleSetsKey() {
  return ['#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets'] as const
}

export function getXAmzTargetGameLiftDescribePlayerSessionsKey() {
  return ['#X-Amz-Target=GameLift.DescribePlayerSessions'] as const
}

export function getXAmzTargetGameLiftDescribeRuntimeConfigurationKey() {
  return ['#X-Amz-Target=GameLift.DescribeRuntimeConfiguration'] as const
}

export function getXAmzTargetGameLiftDescribeScalingPoliciesKey() {
  return ['#X-Amz-Target=GameLift.DescribeScalingPolicies'] as const
}

export function getXAmzTargetGameLiftDescribeScriptKey() {
  return ['#X-Amz-Target=GameLift.DescribeScript'] as const
}

export function getXAmzTargetGameLiftDescribeVpcPeeringAuthorizationsKey() {
  return ['#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations'] as const
}

export function getXAmzTargetGameLiftDescribeVpcPeeringConnectionsKey() {
  return ['#X-Amz-Target=GameLift.DescribeVpcPeeringConnections'] as const
}

export function getXAmzTargetGameLiftGetComputeAccessKey() {
  return ['#X-Amz-Target=GameLift.GetComputeAccess'] as const
}

export function getXAmzTargetGameLiftGetComputeAuthTokenKey() {
  return ['#X-Amz-Target=GameLift.GetComputeAuthToken'] as const
}

export function getXAmzTargetGameLiftGetGameSessionLogUrlKey() {
  return ['#X-Amz-Target=GameLift.GetGameSessionLogUrl'] as const
}

export function getXAmzTargetGameLiftGetInstanceAccessKey() {
  return ['#X-Amz-Target=GameLift.GetInstanceAccess'] as const
}

export function getXAmzTargetGameLiftListAliasesKey() {
  return ['#X-Amz-Target=GameLift.ListAliases'] as const
}

export function getXAmzTargetGameLiftListBuildsKey() {
  return ['#X-Amz-Target=GameLift.ListBuilds'] as const
}

export function getXAmzTargetGameLiftListComputeKey() {
  return ['#X-Amz-Target=GameLift.ListCompute'] as const
}

export function getXAmzTargetGameLiftListFleetsKey() {
  return ['#X-Amz-Target=GameLift.ListFleets'] as const
}

export function getXAmzTargetGameLiftListGameServerGroupsKey() {
  return ['#X-Amz-Target=GameLift.ListGameServerGroups'] as const
}

export function getXAmzTargetGameLiftListGameServersKey() {
  return ['#X-Amz-Target=GameLift.ListGameServers'] as const
}

export function getXAmzTargetGameLiftListLocationsKey() {
  return ['#X-Amz-Target=GameLift.ListLocations'] as const
}

export function getXAmzTargetGameLiftListScriptsKey() {
  return ['#X-Amz-Target=GameLift.ListScripts'] as const
}

export function getXAmzTargetGameLiftListTagsForResourceKey() {
  return ['#X-Amz-Target=GameLift.ListTagsForResource'] as const
}

export function getXAmzTargetGameLiftPutScalingPolicyKey() {
  return ['#X-Amz-Target=GameLift.PutScalingPolicy'] as const
}

export function getXAmzTargetGameLiftRegisterComputeKey() {
  return ['#X-Amz-Target=GameLift.RegisterCompute'] as const
}

export function getXAmzTargetGameLiftRegisterGameServerKey() {
  return ['#X-Amz-Target=GameLift.RegisterGameServer'] as const
}

export function getXAmzTargetGameLiftRequestUploadCredentialsKey() {
  return ['#X-Amz-Target=GameLift.RequestUploadCredentials'] as const
}

export function getXAmzTargetGameLiftResolveAliasKey() {
  return ['#X-Amz-Target=GameLift.ResolveAlias'] as const
}

export function getXAmzTargetGameLiftResumeGameServerGroupKey() {
  return ['#X-Amz-Target=GameLift.ResumeGameServerGroup'] as const
}

export function getXAmzTargetGameLiftSearchGameSessionsKey() {
  return ['#X-Amz-Target=GameLift.SearchGameSessions'] as const
}

export function getXAmzTargetGameLiftStartFleetActionsKey() {
  return ['#X-Amz-Target=GameLift.StartFleetActions'] as const
}

export function getXAmzTargetGameLiftStartGameSessionPlacementKey() {
  return ['#X-Amz-Target=GameLift.StartGameSessionPlacement'] as const
}

export function getXAmzTargetGameLiftStartMatchBackfillKey() {
  return ['#X-Amz-Target=GameLift.StartMatchBackfill'] as const
}

export function getXAmzTargetGameLiftStartMatchmakingKey() {
  return ['#X-Amz-Target=GameLift.StartMatchmaking'] as const
}

export function getXAmzTargetGameLiftStopFleetActionsKey() {
  return ['#X-Amz-Target=GameLift.StopFleetActions'] as const
}

export function getXAmzTargetGameLiftStopGameSessionPlacementKey() {
  return ['#X-Amz-Target=GameLift.StopGameSessionPlacement'] as const
}

export function getXAmzTargetGameLiftStopMatchmakingKey() {
  return ['#X-Amz-Target=GameLift.StopMatchmaking'] as const
}

export function getXAmzTargetGameLiftSuspendGameServerGroupKey() {
  return ['#X-Amz-Target=GameLift.SuspendGameServerGroup'] as const
}

export function getXAmzTargetGameLiftTagResourceKey() {
  return ['#X-Amz-Target=GameLift.TagResource'] as const
}

export function getXAmzTargetGameLiftUntagResourceKey() {
  return ['#X-Amz-Target=GameLift.UntagResource'] as const
}

export function getXAmzTargetGameLiftUpdateAliasKey() {
  return ['#X-Amz-Target=GameLift.UpdateAlias'] as const
}

export function getXAmzTargetGameLiftUpdateBuildKey() {
  return ['#X-Amz-Target=GameLift.UpdateBuild'] as const
}

export function getXAmzTargetGameLiftUpdateFleetAttributesKey() {
  return ['#X-Amz-Target=GameLift.UpdateFleetAttributes'] as const
}

export function getXAmzTargetGameLiftUpdateFleetCapacityKey() {
  return ['#X-Amz-Target=GameLift.UpdateFleetCapacity'] as const
}

export function getXAmzTargetGameLiftUpdateFleetPortSettingsKey() {
  return ['#X-Amz-Target=GameLift.UpdateFleetPortSettings'] as const
}

export function getXAmzTargetGameLiftUpdateGameServerKey() {
  return ['#X-Amz-Target=GameLift.UpdateGameServer'] as const
}

export function getXAmzTargetGameLiftUpdateGameServerGroupKey() {
  return ['#X-Amz-Target=GameLift.UpdateGameServerGroup'] as const
}

export function getXAmzTargetGameLiftUpdateGameSessionKey() {
  return ['#X-Amz-Target=GameLift.UpdateGameSession'] as const
}

export function getXAmzTargetGameLiftUpdateGameSessionQueueKey() {
  return ['#X-Amz-Target=GameLift.UpdateGameSessionQueue'] as const
}

export function getXAmzTargetGameLiftUpdateMatchmakingConfigurationKey() {
  return ['#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration'] as const
}

export function getXAmzTargetGameLiftUpdateRuntimeConfigurationKey() {
  return ['#X-Amz-Target=GameLift.UpdateRuntimeConfiguration'] as const
}

export function getXAmzTargetGameLiftUpdateScriptKey() {
  return ['#X-Amz-Target=GameLift.UpdateScript'] as const
}

export function getXAmzTargetGameLiftValidateMatchmakingRuleSetKey() {
  return ['#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet'] as const
}

export function getPostXAmzTargetGameLiftAcceptMatchKey() {
  return [
    '#X-Amz-Target=GameLift.AcceptMatch',
    '/#X-Amz-Target=GameLift.AcceptMatch',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftAcceptMatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.AcceptMatch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.AcceptMatch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftAcceptMatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.AcceptMatch']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.AcceptMatch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftClaimGameServerKey() {
  return [
    '#X-Amz-Target=GameLift.ClaimGameServer',
    '/#X-Amz-Target=GameLift.ClaimGameServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftClaimGameServer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ClaimGameServer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ClaimGameServer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftClaimGameServerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ClaimGameServer']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=GameLift.ClaimGameServer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftCreateAliasKey() {
  return [
    '#X-Amz-Target=GameLift.CreateAlias',
    '/#X-Amz-Target=GameLift.CreateAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftCreateAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateAlias']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateAlias']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftCreateAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateAlias']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.CreateAlias'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftCreateBuildKey() {
  return [
    '#X-Amz-Target=GameLift.CreateBuild',
    '/#X-Amz-Target=GameLift.CreateBuild',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftCreateBuild<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateBuild']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateBuild']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftCreateBuildKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateBuild']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.CreateBuild'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftCreateFleetKey() {
  return [
    '#X-Amz-Target=GameLift.CreateFleet',
    '/#X-Amz-Target=GameLift.CreateFleet',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftCreateFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateFleet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateFleet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftCreateFleetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateFleet']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.CreateFleet'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftCreateFleetLocationsKey() {
  return [
    '#X-Amz-Target=GameLift.CreateFleetLocations',
    '/#X-Amz-Target=GameLift.CreateFleetLocations',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftCreateFleetLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateFleetLocations']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateFleetLocations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftCreateFleetLocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.CreateFleetLocations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.CreateFleetLocations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftCreateGameServerGroupKey() {
  return [
    '#X-Amz-Target=GameLift.CreateGameServerGroup',
    '/#X-Amz-Target=GameLift.CreateGameServerGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftCreateGameServerGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateGameServerGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateGameServerGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftCreateGameServerGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.CreateGameServerGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.CreateGameServerGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftCreateGameSessionKey() {
  return [
    '#X-Amz-Target=GameLift.CreateGameSession',
    '/#X-Amz-Target=GameLift.CreateGameSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftCreateGameSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateGameSession']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateGameSession']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftCreateGameSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.CreateGameSession']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=GameLift.CreateGameSession'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftCreateGameSessionQueueKey() {
  return [
    '#X-Amz-Target=GameLift.CreateGameSessionQueue',
    '/#X-Amz-Target=GameLift.CreateGameSessionQueue',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftCreateGameSessionQueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateGameSessionQueue']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateGameSessionQueue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftCreateGameSessionQueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.CreateGameSessionQueue']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.CreateGameSessionQueue'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftCreateLocationKey() {
  return [
    '#X-Amz-Target=GameLift.CreateLocation',
    '/#X-Amz-Target=GameLift.CreateLocation',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftCreateLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateLocation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateLocation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftCreateLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateLocation']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.CreateLocation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftCreateMatchmakingConfigurationKey() {
  return [
    '#X-Amz-Target=GameLift.CreateMatchmakingConfiguration',
    '/#X-Amz-Target=GameLift.CreateMatchmakingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftCreateMatchmakingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.CreateMatchmakingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.CreateMatchmakingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftCreateMatchmakingConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.CreateMatchmakingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.CreateMatchmakingConfiguration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftCreateMatchmakingRuleSetKey() {
  return [
    '#X-Amz-Target=GameLift.CreateMatchmakingRuleSet',
    '/#X-Amz-Target=GameLift.CreateMatchmakingRuleSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftCreateMatchmakingRuleSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateMatchmakingRuleSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateMatchmakingRuleSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftCreateMatchmakingRuleSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.CreateMatchmakingRuleSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.CreateMatchmakingRuleSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftCreatePlayerSessionKey() {
  return [
    '#X-Amz-Target=GameLift.CreatePlayerSession',
    '/#X-Amz-Target=GameLift.CreatePlayerSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftCreatePlayerSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreatePlayerSession']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreatePlayerSession']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftCreatePlayerSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.CreatePlayerSession']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.CreatePlayerSession'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftCreatePlayerSessionsKey() {
  return [
    '#X-Amz-Target=GameLift.CreatePlayerSessions',
    '/#X-Amz-Target=GameLift.CreatePlayerSessions',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftCreatePlayerSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreatePlayerSessions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreatePlayerSessions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftCreatePlayerSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.CreatePlayerSessions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.CreatePlayerSessions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftCreateScriptKey() {
  return [
    '#X-Amz-Target=GameLift.CreateScript',
    '/#X-Amz-Target=GameLift.CreateScript',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftCreateScript<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateScript']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateScript']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftCreateScriptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateScript']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.CreateScript'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftCreateVpcPeeringAuthorizationKey() {
  return [
    '#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization',
    '/#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftCreateVpcPeeringAuthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftCreateVpcPeeringAuthorizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftCreateVpcPeeringConnectionKey() {
  return [
    '#X-Amz-Target=GameLift.CreateVpcPeeringConnection',
    '/#X-Amz-Target=GameLift.CreateVpcPeeringConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftCreateVpcPeeringConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.CreateVpcPeeringConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateVpcPeeringConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftCreateVpcPeeringConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.CreateVpcPeeringConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.CreateVpcPeeringConnection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDeleteAliasKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteAlias',
    '/#X-Amz-Target=GameLift.DeleteAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDeleteAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteAlias']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteAlias']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDeleteAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteAlias']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.DeleteAlias'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDeleteBuildKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteBuild',
    '/#X-Amz-Target=GameLift.DeleteBuild',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDeleteBuild<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteBuild']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteBuild']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDeleteBuildKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteBuild']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.DeleteBuild'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDeleteFleetKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteFleet',
    '/#X-Amz-Target=GameLift.DeleteFleet',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDeleteFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteFleet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteFleet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDeleteFleetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteFleet']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.DeleteFleet'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDeleteFleetLocationsKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteFleetLocations',
    '/#X-Amz-Target=GameLift.DeleteFleetLocations',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDeleteFleetLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteFleetLocations']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteFleetLocations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDeleteFleetLocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DeleteFleetLocations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DeleteFleetLocations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDeleteGameServerGroupKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteGameServerGroup',
    '/#X-Amz-Target=GameLift.DeleteGameServerGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDeleteGameServerGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteGameServerGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteGameServerGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDeleteGameServerGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DeleteGameServerGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DeleteGameServerGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDeleteGameSessionQueueKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteGameSessionQueue',
    '/#X-Amz-Target=GameLift.DeleteGameSessionQueue',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDeleteGameSessionQueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteGameSessionQueue']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteGameSessionQueue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDeleteGameSessionQueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DeleteGameSessionQueue']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DeleteGameSessionQueue'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDeleteLocationKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteLocation',
    '/#X-Amz-Target=GameLift.DeleteLocation',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDeleteLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteLocation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteLocation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDeleteLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteLocation']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.DeleteLocation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDeleteMatchmakingConfigurationKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration',
    '/#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDeleteMatchmakingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDeleteMatchmakingConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDeleteMatchmakingRuleSetKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet',
    '/#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDeleteMatchmakingRuleSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDeleteMatchmakingRuleSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDeleteScalingPolicyKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteScalingPolicy',
    '/#X-Amz-Target=GameLift.DeleteScalingPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDeleteScalingPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteScalingPolicy']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteScalingPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDeleteScalingPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DeleteScalingPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DeleteScalingPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDeleteScriptKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteScript',
    '/#X-Amz-Target=GameLift.DeleteScript',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDeleteScript<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteScript']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteScript']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDeleteScriptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteScript']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.DeleteScript'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDeleteVpcPeeringAuthorizationKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization',
    '/#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDeleteVpcPeeringAuthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDeleteVpcPeeringAuthorizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDeleteVpcPeeringConnectionKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteVpcPeeringConnection',
    '/#X-Amz-Target=GameLift.DeleteVpcPeeringConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDeleteVpcPeeringConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.DeleteVpcPeeringConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteVpcPeeringConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDeleteVpcPeeringConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DeleteVpcPeeringConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DeleteVpcPeeringConnection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDeregisterComputeKey() {
  return [
    '#X-Amz-Target=GameLift.DeregisterCompute',
    '/#X-Amz-Target=GameLift.DeregisterCompute',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDeregisterCompute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeregisterCompute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeregisterCompute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDeregisterComputeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DeregisterCompute']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=GameLift.DeregisterCompute'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDeregisterGameServerKey() {
  return [
    '#X-Amz-Target=GameLift.DeregisterGameServer',
    '/#X-Amz-Target=GameLift.DeregisterGameServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDeregisterGameServer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeregisterGameServer']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeregisterGameServer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDeregisterGameServerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DeregisterGameServer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DeregisterGameServer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeAliasKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeAlias',
    '/#X-Amz-Target=GameLift.DescribeAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeAlias']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeAlias']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeAlias']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.DescribeAlias'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeBuildKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeBuild',
    '/#X-Amz-Target=GameLift.DescribeBuild',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeBuild<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeBuild']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeBuild']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeBuildKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeBuild']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.DescribeBuild'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeComputeKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeCompute',
    '/#X-Amz-Target=GameLift.DescribeCompute',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeCompute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeCompute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeCompute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeComputeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeCompute']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=GameLift.DescribeCompute'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeEC2InstanceLimitsKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeEC2InstanceLimits',
    '/#X-Amz-Target=GameLift.DescribeEC2InstanceLimits',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeEC2InstanceLimits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeEC2InstanceLimits']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeEC2InstanceLimits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeEC2InstanceLimitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeEC2InstanceLimits']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeEC2InstanceLimits'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeFleetAttributesKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeFleetAttributes',
    '/#X-Amz-Target=GameLift.DescribeFleetAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeFleetAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetAttributes']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeFleetAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeFleetAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeFleetAttributes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeFleetCapacityKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeFleetCapacity',
    '/#X-Amz-Target=GameLift.DescribeFleetCapacity',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeFleetCapacity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetCapacity']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetCapacity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeFleetCapacityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeFleetCapacity']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeFleetCapacity'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeFleetEventsKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeFleetEvents',
    '/#X-Amz-Target=GameLift.DescribeFleetEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeFleetEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetEvents']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetEvents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeFleetEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeFleetEvents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeFleetEvents'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeFleetLocationAttributesKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeFleetLocationAttributes',
    '/#X-Amz-Target=GameLift.DescribeFleetLocationAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeFleetLocationAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeFleetLocationAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeFleetLocationAttributes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeFleetLocationCapacityKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeFleetLocationCapacity',
    '/#X-Amz-Target=GameLift.DescribeFleetLocationCapacity',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeFleetLocationCapacity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationCapacity']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationCapacity']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeFleetLocationCapacityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationCapacity']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeFleetLocationCapacity'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeFleetLocationUtilizationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeFleetLocationUtilization',
    '/#X-Amz-Target=GameLift.DescribeFleetLocationUtilization',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeFleetLocationUtilization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationUtilization']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationUtilization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeFleetLocationUtilizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationUtilization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeFleetLocationUtilization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeFleetPortSettingsKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeFleetPortSettings',
    '/#X-Amz-Target=GameLift.DescribeFleetPortSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeFleetPortSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetPortSettings']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetPortSettings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeFleetPortSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeFleetPortSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeFleetPortSettings'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeFleetUtilizationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeFleetUtilization',
    '/#X-Amz-Target=GameLift.DescribeFleetUtilization',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeFleetUtilization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetUtilization']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetUtilization']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeFleetUtilizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeFleetUtilization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeFleetUtilization'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeGameServerKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeGameServer',
    '/#X-Amz-Target=GameLift.DescribeGameServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeGameServer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameServer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameServer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeGameServerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeGameServer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeGameServer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeGameServerGroupKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeGameServerGroup',
    '/#X-Amz-Target=GameLift.DescribeGameServerGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeGameServerGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameServerGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameServerGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeGameServerGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeGameServerGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeGameServerGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeGameServerInstancesKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeGameServerInstances',
    '/#X-Amz-Target=GameLift.DescribeGameServerInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeGameServerInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.DescribeGameServerInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameServerInstances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeGameServerInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeGameServerInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeGameServerInstances'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeGameSessionDetailsKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeGameSessionDetails',
    '/#X-Amz-Target=GameLift.DescribeGameSessionDetails',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeGameSessionDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionDetails']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionDetails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeGameSessionDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionDetails']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeGameSessionDetails'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeGameSessionPlacementKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeGameSessionPlacement',
    '/#X-Amz-Target=GameLift.DescribeGameSessionPlacement',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeGameSessionPlacement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionPlacement']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionPlacement']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeGameSessionPlacementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionPlacement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeGameSessionPlacement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeGameSessionQueuesKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeGameSessionQueues',
    '/#X-Amz-Target=GameLift.DescribeGameSessionQueues',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeGameSessionQueues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionQueues']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionQueues']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeGameSessionQueuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionQueues']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeGameSessionQueues'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeGameSessionsKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeGameSessions',
    '/#X-Amz-Target=GameLift.DescribeGameSessions',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeGameSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameSessions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameSessions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeGameSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeGameSessions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeInstancesKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeInstances',
    '/#X-Amz-Target=GameLift.DescribeInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeInstances']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeInstances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeInstances']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=GameLift.DescribeInstances'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeMatchmakingKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeMatchmaking',
    '/#X-Amz-Target=GameLift.DescribeMatchmaking',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeMatchmaking<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeMatchmaking']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeMatchmaking']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeMatchmakingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeMatchmaking']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeMatchmaking'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeMatchmakingConfigurationsKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations',
    '/#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeMatchmakingConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeMatchmakingConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeMatchmakingRuleSetsKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets',
    '/#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeMatchmakingRuleSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeMatchmakingRuleSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribePlayerSessionsKey() {
  return [
    '#X-Amz-Target=GameLift.DescribePlayerSessions',
    '/#X-Amz-Target=GameLift.DescribePlayerSessions',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribePlayerSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribePlayerSessions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribePlayerSessions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribePlayerSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribePlayerSessions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribePlayerSessions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeRuntimeConfigurationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeRuntimeConfiguration',
    '/#X-Amz-Target=GameLift.DescribeRuntimeConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeRuntimeConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.DescribeRuntimeConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeRuntimeConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeRuntimeConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeRuntimeConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeRuntimeConfiguration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeScalingPoliciesKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeScalingPolicies',
    '/#X-Amz-Target=GameLift.DescribeScalingPolicies',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeScalingPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeScalingPolicies']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeScalingPolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeScalingPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeScalingPolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeScalingPolicies'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeScriptKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeScript',
    '/#X-Amz-Target=GameLift.DescribeScript',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeScript<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeScript']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeScript']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeScriptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeScript']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.DescribeScript'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeVpcPeeringAuthorizationsKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations',
    '/#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeVpcPeeringAuthorizations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeVpcPeeringAuthorizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftDescribeVpcPeeringConnectionsKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeVpcPeeringConnections',
    '/#X-Amz-Target=GameLift.DescribeVpcPeeringConnections',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftDescribeVpcPeeringConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.DescribeVpcPeeringConnections']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeVpcPeeringConnections']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftDescribeVpcPeeringConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeVpcPeeringConnections']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.DescribeVpcPeeringConnections'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftGetComputeAccessKey() {
  return [
    '#X-Amz-Target=GameLift.GetComputeAccess',
    '/#X-Amz-Target=GameLift.GetComputeAccess',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftGetComputeAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.GetComputeAccess']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetComputeAccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftGetComputeAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetComputeAccess']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=GameLift.GetComputeAccess'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftGetComputeAuthTokenKey() {
  return [
    '#X-Amz-Target=GameLift.GetComputeAuthToken',
    '/#X-Amz-Target=GameLift.GetComputeAuthToken',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftGetComputeAuthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.GetComputeAuthToken']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetComputeAuthToken']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftGetComputeAuthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.GetComputeAuthToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.GetComputeAuthToken'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftGetGameSessionLogUrlKey() {
  return [
    '#X-Amz-Target=GameLift.GetGameSessionLogUrl',
    '/#X-Amz-Target=GameLift.GetGameSessionLogUrl',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftGetGameSessionLogUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.GetGameSessionLogUrl']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetGameSessionLogUrl']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftGetGameSessionLogUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.GetGameSessionLogUrl']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.GetGameSessionLogUrl'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftGetInstanceAccessKey() {
  return [
    '#X-Amz-Target=GameLift.GetInstanceAccess',
    '/#X-Amz-Target=GameLift.GetInstanceAccess',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftGetInstanceAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.GetInstanceAccess']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetInstanceAccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftGetInstanceAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.GetInstanceAccess']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=GameLift.GetInstanceAccess'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftListAliasesKey() {
  return [
    '#X-Amz-Target=GameLift.ListAliases',
    '/#X-Amz-Target=GameLift.ListAliases',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftListAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListAliases']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListAliases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftListAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListAliases']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.ListAliases'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftListBuildsKey() {
  return [
    '#X-Amz-Target=GameLift.ListBuilds',
    '/#X-Amz-Target=GameLift.ListBuilds',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftListBuilds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListBuilds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListBuilds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftListBuildsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListBuilds']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=GameLift.ListBuilds'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftListComputeKey() {
  return [
    '#X-Amz-Target=GameLift.ListCompute',
    '/#X-Amz-Target=GameLift.ListCompute',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftListCompute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListCompute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListCompute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftListComputeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListCompute']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.ListCompute'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftListFleetsKey() {
  return [
    '#X-Amz-Target=GameLift.ListFleets',
    '/#X-Amz-Target=GameLift.ListFleets',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftListFleets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListFleets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListFleets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftListFleetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListFleets']['$post']> },
      ) => parseResponse(client['#X-Amz-Target=GameLift.ListFleets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftListGameServerGroupsKey() {
  return [
    '#X-Amz-Target=GameLift.ListGameServerGroups',
    '/#X-Amz-Target=GameLift.ListGameServerGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftListGameServerGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListGameServerGroups']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListGameServerGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftListGameServerGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.ListGameServerGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.ListGameServerGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftListGameServersKey() {
  return [
    '#X-Amz-Target=GameLift.ListGameServers',
    '/#X-Amz-Target=GameLift.ListGameServers',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftListGameServers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListGameServers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListGameServers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftListGameServersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListGameServers']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=GameLift.ListGameServers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftListLocationsKey() {
  return [
    '#X-Amz-Target=GameLift.ListLocations',
    '/#X-Amz-Target=GameLift.ListLocations',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftListLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListLocations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListLocations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftListLocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListLocations']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.ListLocations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftListScriptsKey() {
  return [
    '#X-Amz-Target=GameLift.ListScripts',
    '/#X-Amz-Target=GameLift.ListScripts',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftListScripts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListScripts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListScripts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftListScriptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListScripts']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.ListScripts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftListTagsForResourceKey() {
  return [
    '#X-Amz-Target=GameLift.ListTagsForResource',
    '/#X-Amz-Target=GameLift.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListTagsForResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftPutScalingPolicyKey() {
  return [
    '#X-Amz-Target=GameLift.PutScalingPolicy',
    '/#X-Amz-Target=GameLift.PutScalingPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftPutScalingPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.PutScalingPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.PutScalingPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftPutScalingPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.PutScalingPolicy']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=GameLift.PutScalingPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftRegisterComputeKey() {
  return [
    '#X-Amz-Target=GameLift.RegisterCompute',
    '/#X-Amz-Target=GameLift.RegisterCompute',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftRegisterCompute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.RegisterCompute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.RegisterCompute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftRegisterComputeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.RegisterCompute']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=GameLift.RegisterCompute'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftRegisterGameServerKey() {
  return [
    '#X-Amz-Target=GameLift.RegisterGameServer',
    '/#X-Amz-Target=GameLift.RegisterGameServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftRegisterGameServer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.RegisterGameServer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.RegisterGameServer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftRegisterGameServerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.RegisterGameServer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.RegisterGameServer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftRequestUploadCredentialsKey() {
  return [
    '#X-Amz-Target=GameLift.RequestUploadCredentials',
    '/#X-Amz-Target=GameLift.RequestUploadCredentials',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftRequestUploadCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.RequestUploadCredentials']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.RequestUploadCredentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftRequestUploadCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.RequestUploadCredentials']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.RequestUploadCredentials'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftResolveAliasKey() {
  return [
    '#X-Amz-Target=GameLift.ResolveAlias',
    '/#X-Amz-Target=GameLift.ResolveAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftResolveAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ResolveAlias']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ResolveAlias']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftResolveAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ResolveAlias']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.ResolveAlias'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftResumeGameServerGroupKey() {
  return [
    '#X-Amz-Target=GameLift.ResumeGameServerGroup',
    '/#X-Amz-Target=GameLift.ResumeGameServerGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftResumeGameServerGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.ResumeGameServerGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ResumeGameServerGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftResumeGameServerGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.ResumeGameServerGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.ResumeGameServerGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftSearchGameSessionsKey() {
  return [
    '#X-Amz-Target=GameLift.SearchGameSessions',
    '/#X-Amz-Target=GameLift.SearchGameSessions',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftSearchGameSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.SearchGameSessions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.SearchGameSessions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftSearchGameSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.SearchGameSessions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.SearchGameSessions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftStartFleetActionsKey() {
  return [
    '#X-Amz-Target=GameLift.StartFleetActions',
    '/#X-Amz-Target=GameLift.StartFleetActions',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftStartFleetActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.StartFleetActions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartFleetActions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftStartFleetActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.StartFleetActions']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=GameLift.StartFleetActions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftStartGameSessionPlacementKey() {
  return [
    '#X-Amz-Target=GameLift.StartGameSessionPlacement',
    '/#X-Amz-Target=GameLift.StartGameSessionPlacement',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftStartGameSessionPlacement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.StartGameSessionPlacement']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartGameSessionPlacement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftStartGameSessionPlacementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.StartGameSessionPlacement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.StartGameSessionPlacement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftStartMatchBackfillKey() {
  return [
    '#X-Amz-Target=GameLift.StartMatchBackfill',
    '/#X-Amz-Target=GameLift.StartMatchBackfill',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftStartMatchBackfill<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.StartMatchBackfill']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartMatchBackfill']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftStartMatchBackfillKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.StartMatchBackfill']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.StartMatchBackfill'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftStartMatchmakingKey() {
  return [
    '#X-Amz-Target=GameLift.StartMatchmaking',
    '/#X-Amz-Target=GameLift.StartMatchmaking',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftStartMatchmaking<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.StartMatchmaking']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartMatchmaking']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftStartMatchmakingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartMatchmaking']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=GameLift.StartMatchmaking'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftStopFleetActionsKey() {
  return [
    '#X-Amz-Target=GameLift.StopFleetActions',
    '/#X-Amz-Target=GameLift.StopFleetActions',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftStopFleetActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.StopFleetActions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StopFleetActions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftStopFleetActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StopFleetActions']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=GameLift.StopFleetActions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftStopGameSessionPlacementKey() {
  return [
    '#X-Amz-Target=GameLift.StopGameSessionPlacement',
    '/#X-Amz-Target=GameLift.StopGameSessionPlacement',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftStopGameSessionPlacement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.StopGameSessionPlacement']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StopGameSessionPlacement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftStopGameSessionPlacementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.StopGameSessionPlacement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.StopGameSessionPlacement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftStopMatchmakingKey() {
  return [
    '#X-Amz-Target=GameLift.StopMatchmaking',
    '/#X-Amz-Target=GameLift.StopMatchmaking',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftStopMatchmaking<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.StopMatchmaking']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StopMatchmaking']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftStopMatchmakingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StopMatchmaking']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=GameLift.StopMatchmaking'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftSuspendGameServerGroupKey() {
  return [
    '#X-Amz-Target=GameLift.SuspendGameServerGroup',
    '/#X-Amz-Target=GameLift.SuspendGameServerGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftSuspendGameServerGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.SuspendGameServerGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.SuspendGameServerGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftSuspendGameServerGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.SuspendGameServerGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.SuspendGameServerGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftTagResourceKey() {
  return [
    '#X-Amz-Target=GameLift.TagResource',
    '/#X-Amz-Target=GameLift.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.TagResource']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.TagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftUntagResourceKey() {
  return [
    '#X-Amz-Target=GameLift.UntagResource',
    '/#X-Amz-Target=GameLift.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UntagResource']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.UntagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftUpdateAliasKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateAlias',
    '/#X-Amz-Target=GameLift.UpdateAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftUpdateAlias<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateAlias']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateAlias']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftUpdateAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateAlias']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.UpdateAlias'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftUpdateBuildKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateBuild',
    '/#X-Amz-Target=GameLift.UpdateBuild',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftUpdateBuild<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateBuild']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateBuild']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftUpdateBuildKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateBuild']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.UpdateBuild'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftUpdateFleetAttributesKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateFleetAttributes',
    '/#X-Amz-Target=GameLift.UpdateFleetAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftUpdateFleetAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateFleetAttributes']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateFleetAttributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftUpdateFleetAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.UpdateFleetAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.UpdateFleetAttributes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftUpdateFleetCapacityKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateFleetCapacity',
    '/#X-Amz-Target=GameLift.UpdateFleetCapacity',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftUpdateFleetCapacity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateFleetCapacity']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateFleetCapacity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftUpdateFleetCapacityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.UpdateFleetCapacity']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.UpdateFleetCapacity'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftUpdateFleetPortSettingsKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateFleetPortSettings',
    '/#X-Amz-Target=GameLift.UpdateFleetPortSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftUpdateFleetPortSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateFleetPortSettings']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateFleetPortSettings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftUpdateFleetPortSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.UpdateFleetPortSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.UpdateFleetPortSettings'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftUpdateGameServerKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateGameServer',
    '/#X-Amz-Target=GameLift.UpdateGameServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftUpdateGameServer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameServer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameServer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftUpdateGameServerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameServer']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=GameLift.UpdateGameServer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftUpdateGameServerGroupKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateGameServerGroup',
    '/#X-Amz-Target=GameLift.UpdateGameServerGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftUpdateGameServerGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameServerGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameServerGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftUpdateGameServerGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.UpdateGameServerGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.UpdateGameServerGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftUpdateGameSessionKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateGameSession',
    '/#X-Amz-Target=GameLift.UpdateGameSession',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftUpdateGameSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameSession']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameSession']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftUpdateGameSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.UpdateGameSession']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=GameLift.UpdateGameSession'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftUpdateGameSessionQueueKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateGameSessionQueue',
    '/#X-Amz-Target=GameLift.UpdateGameSessionQueue',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftUpdateGameSessionQueue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameSessionQueue']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameSessionQueue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftUpdateGameSessionQueueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.UpdateGameSessionQueue']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.UpdateGameSessionQueue'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftUpdateMatchmakingConfigurationKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration',
    '/#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftUpdateMatchmakingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftUpdateMatchmakingConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftUpdateRuntimeConfigurationKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateRuntimeConfiguration',
    '/#X-Amz-Target=GameLift.UpdateRuntimeConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftUpdateRuntimeConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.UpdateRuntimeConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateRuntimeConfiguration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftUpdateRuntimeConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.UpdateRuntimeConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.UpdateRuntimeConfiguration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftUpdateScriptKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateScript',
    '/#X-Amz-Target=GameLift.UpdateScript',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftUpdateScript<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateScript']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateScript']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftUpdateScriptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateScript']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=GameLift.UpdateScript'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetGameLiftValidateMatchmakingRuleSetKey() {
  return [
    '#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet',
    '/#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetGameLiftValidateMatchmakingRuleSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetGameLiftValidateMatchmakingRuleSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
