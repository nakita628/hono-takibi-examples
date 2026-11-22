import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function getPostXAmzTargetGameLiftAcceptMatchMutationKey() {
  return [
    '#X-Amz-Target=GameLift.AcceptMatch',
    '/#X-Amz-Target=GameLift.AcceptMatch',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftAcceptMatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.AcceptMatch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.AcceptMatch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftAcceptMatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.AcceptMatch']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.AcceptMatch'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftAcceptMatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.AcceptMatch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.AcceptMatch']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftAcceptMatchMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftClaimGameServerMutationKey() {
  return [
    '#X-Amz-Target=GameLift.ClaimGameServer',
    '/#X-Amz-Target=GameLift.ClaimGameServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftClaimGameServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ClaimGameServer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ClaimGameServer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftClaimGameServerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ClaimGameServer']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.ClaimGameServer'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftClaimGameServer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.ClaimGameServer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ClaimGameServer']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftClaimGameServerMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftCreateAliasMutationKey() {
  return [
    '#X-Amz-Target=GameLift.CreateAlias',
    '/#X-Amz-Target=GameLift.CreateAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftCreateAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateAlias']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateAlias']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftCreateAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateAlias']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.CreateAlias'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftCreateAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateAlias']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateAlias']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftCreateAliasMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftCreateBuildMutationKey() {
  return [
    '#X-Amz-Target=GameLift.CreateBuild',
    '/#X-Amz-Target=GameLift.CreateBuild',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftCreateBuildMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateBuild']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateBuild']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftCreateBuildMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateBuild']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.CreateBuild'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftCreateBuild<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateBuild']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateBuild']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftCreateBuildMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftCreateFleetMutationKey() {
  return [
    '#X-Amz-Target=GameLift.CreateFleet',
    '/#X-Amz-Target=GameLift.CreateFleet',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftCreateFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateFleet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateFleet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftCreateFleetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateFleet']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.CreateFleet'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftCreateFleet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateFleet']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateFleet']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftCreateFleetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftCreateFleetLocationsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.CreateFleetLocations',
    '/#X-Amz-Target=GameLift.CreateFleetLocations',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftCreateFleetLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateFleetLocations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftCreateFleetLocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.CreateFleetLocations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.CreateFleetLocations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftCreateFleetLocations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.CreateFleetLocations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateFleetLocations']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftCreateFleetLocationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftCreateGameServerGroupMutationKey() {
  return [
    '#X-Amz-Target=GameLift.CreateGameServerGroup',
    '/#X-Amz-Target=GameLift.CreateGameServerGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftCreateGameServerGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateGameServerGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftCreateGameServerGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.CreateGameServerGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.CreateGameServerGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftCreateGameServerGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.CreateGameServerGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.CreateGameServerGroup']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftCreateGameServerGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftCreateGameSessionMutationKey() {
  return [
    '#X-Amz-Target=GameLift.CreateGameSession',
    '/#X-Amz-Target=GameLift.CreateGameSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftCreateGameSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateGameSession']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateGameSession']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftCreateGameSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateGameSession']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.CreateGameSession'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftCreateGameSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateGameSession']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateGameSession']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftCreateGameSessionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftCreateGameSessionQueueMutationKey() {
  return [
    '#X-Amz-Target=GameLift.CreateGameSessionQueue',
    '/#X-Amz-Target=GameLift.CreateGameSessionQueue',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftCreateGameSessionQueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateGameSessionQueue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftCreateGameSessionQueueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.CreateGameSessionQueue']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.CreateGameSessionQueue'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftCreateGameSessionQueue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.CreateGameSessionQueue']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.CreateGameSessionQueue']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftCreateGameSessionQueueMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftCreateLocationMutationKey() {
  return [
    '#X-Amz-Target=GameLift.CreateLocation',
    '/#X-Amz-Target=GameLift.CreateLocation',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftCreateLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateLocation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateLocation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftCreateLocationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateLocation']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.CreateLocation'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftCreateLocation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateLocation']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateLocation']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftCreateLocationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftCreateMatchmakingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=GameLift.CreateMatchmakingConfiguration',
    '/#X-Amz-Target=GameLift.CreateMatchmakingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftCreateMatchmakingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.CreateMatchmakingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftCreateMatchmakingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.CreateMatchmakingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.CreateMatchmakingConfiguration'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftCreateMatchmakingConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.CreateMatchmakingConfiguration']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftCreateMatchmakingConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftCreateMatchmakingRuleSetMutationKey() {
  return [
    '#X-Amz-Target=GameLift.CreateMatchmakingRuleSet',
    '/#X-Amz-Target=GameLift.CreateMatchmakingRuleSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftCreateMatchmakingRuleSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateMatchmakingRuleSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftCreateMatchmakingRuleSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.CreateMatchmakingRuleSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.CreateMatchmakingRuleSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftCreateMatchmakingRuleSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.CreateMatchmakingRuleSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.CreateMatchmakingRuleSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftCreateMatchmakingRuleSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftCreatePlayerSessionMutationKey() {
  return [
    '#X-Amz-Target=GameLift.CreatePlayerSession',
    '/#X-Amz-Target=GameLift.CreatePlayerSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftCreatePlayerSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreatePlayerSession']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftCreatePlayerSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.CreatePlayerSession']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.CreatePlayerSession'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftCreatePlayerSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreatePlayerSession']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftCreatePlayerSessionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftCreatePlayerSessionsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.CreatePlayerSessions',
    '/#X-Amz-Target=GameLift.CreatePlayerSessions',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftCreatePlayerSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreatePlayerSessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftCreatePlayerSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.CreatePlayerSessions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.CreatePlayerSessions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftCreatePlayerSessions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.CreatePlayerSessions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreatePlayerSessions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftCreatePlayerSessionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftCreateScriptMutationKey() {
  return [
    '#X-Amz-Target=GameLift.CreateScript',
    '/#X-Amz-Target=GameLift.CreateScript',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftCreateScriptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateScript']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateScript']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftCreateScriptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateScript']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.CreateScript'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftCreateScript<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.CreateScript']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateScript']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftCreateScriptMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftCreateVpcPeeringAuthorizationMutationKey() {
  return [
    '#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization',
    '/#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftCreateVpcPeeringAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftCreateVpcPeeringAuthorizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftCreateVpcPeeringAuthorization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.CreateVpcPeeringAuthorization']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftCreateVpcPeeringAuthorizationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftCreateVpcPeeringConnectionMutationKey() {
  return [
    '#X-Amz-Target=GameLift.CreateVpcPeeringConnection',
    '/#X-Amz-Target=GameLift.CreateVpcPeeringConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftCreateVpcPeeringConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.CreateVpcPeeringConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftCreateVpcPeeringConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.CreateVpcPeeringConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.CreateVpcPeeringConnection'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftCreateVpcPeeringConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.CreateVpcPeeringConnection']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftCreateVpcPeeringConnectionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDeleteAliasMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteAlias',
    '/#X-Amz-Target=GameLift.DeleteAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDeleteAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteAlias']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteAlias']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDeleteAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteAlias']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.DeleteAlias'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftDeleteAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteAlias']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteAlias']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDeleteAliasMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDeleteBuildMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteBuild',
    '/#X-Amz-Target=GameLift.DeleteBuild',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDeleteBuildMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteBuild']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteBuild']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDeleteBuildMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteBuild']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.DeleteBuild'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftDeleteBuild<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteBuild']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteBuild']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDeleteBuildMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDeleteFleetMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteFleet',
    '/#X-Amz-Target=GameLift.DeleteFleet',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDeleteFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteFleet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteFleet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDeleteFleetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteFleet']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.DeleteFleet'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftDeleteFleet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteFleet']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteFleet']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDeleteFleetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDeleteFleetLocationsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteFleetLocations',
    '/#X-Amz-Target=GameLift.DeleteFleetLocations',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDeleteFleetLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteFleetLocations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDeleteFleetLocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DeleteFleetLocations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DeleteFleetLocations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDeleteFleetLocations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.DeleteFleetLocations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteFleetLocations']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDeleteFleetLocationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDeleteGameServerGroupMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteGameServerGroup',
    '/#X-Amz-Target=GameLift.DeleteGameServerGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDeleteGameServerGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteGameServerGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDeleteGameServerGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DeleteGameServerGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DeleteGameServerGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDeleteGameServerGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.DeleteGameServerGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DeleteGameServerGroup']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDeleteGameServerGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDeleteGameSessionQueueMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteGameSessionQueue',
    '/#X-Amz-Target=GameLift.DeleteGameSessionQueue',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDeleteGameSessionQueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteGameSessionQueue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDeleteGameSessionQueueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DeleteGameSessionQueue']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DeleteGameSessionQueue'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDeleteGameSessionQueue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.DeleteGameSessionQueue']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DeleteGameSessionQueue']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDeleteGameSessionQueueMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDeleteLocationMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteLocation',
    '/#X-Amz-Target=GameLift.DeleteLocation',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDeleteLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteLocation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteLocation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDeleteLocationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteLocation']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.DeleteLocation'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftDeleteLocation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteLocation']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteLocation']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDeleteLocationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDeleteMatchmakingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration',
    '/#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDeleteMatchmakingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDeleteMatchmakingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDeleteMatchmakingConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DeleteMatchmakingConfiguration']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDeleteMatchmakingConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDeleteMatchmakingRuleSetMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet',
    '/#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDeleteMatchmakingRuleSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDeleteMatchmakingRuleSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDeleteMatchmakingRuleSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DeleteMatchmakingRuleSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDeleteMatchmakingRuleSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDeleteScalingPolicyMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteScalingPolicy',
    '/#X-Amz-Target=GameLift.DeleteScalingPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDeleteScalingPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteScalingPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDeleteScalingPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DeleteScalingPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DeleteScalingPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDeleteScalingPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteScalingPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDeleteScalingPolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDeleteScriptMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteScript',
    '/#X-Amz-Target=GameLift.DeleteScript',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDeleteScriptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteScript']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteScript']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDeleteScriptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteScript']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.DeleteScript'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftDeleteScript<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeleteScript']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteScript']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDeleteScriptMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDeleteVpcPeeringAuthorizationMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization',
    '/#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDeleteVpcPeeringAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDeleteVpcPeeringAuthorizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDeleteVpcPeeringAuthorization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DeleteVpcPeeringAuthorization']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDeleteVpcPeeringAuthorizationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDeleteVpcPeeringConnectionMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DeleteVpcPeeringConnection',
    '/#X-Amz-Target=GameLift.DeleteVpcPeeringConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDeleteVpcPeeringConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeleteVpcPeeringConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDeleteVpcPeeringConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DeleteVpcPeeringConnection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DeleteVpcPeeringConnection'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDeleteVpcPeeringConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DeleteVpcPeeringConnection']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDeleteVpcPeeringConnectionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDeregisterComputeMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DeregisterCompute',
    '/#X-Amz-Target=GameLift.DeregisterCompute',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDeregisterComputeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeregisterCompute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeregisterCompute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDeregisterComputeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeregisterCompute']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.DeregisterCompute'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftDeregisterCompute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.DeregisterCompute']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeregisterCompute']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDeregisterComputeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDeregisterGameServerMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DeregisterGameServer',
    '/#X-Amz-Target=GameLift.DeregisterGameServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDeregisterGameServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeregisterGameServer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDeregisterGameServerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DeregisterGameServer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DeregisterGameServer'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDeregisterGameServer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.DeregisterGameServer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DeregisterGameServer']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDeregisterGameServerMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeAliasMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeAlias',
    '/#X-Amz-Target=GameLift.DescribeAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeAlias']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeAlias']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeAlias']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.DescribeAlias'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeAlias']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeAlias']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeAliasMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeBuildMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeBuild',
    '/#X-Amz-Target=GameLift.DescribeBuild',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeBuildMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeBuild']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeBuild']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeBuildMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeBuild']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.DescribeBuild'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeBuild<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeBuild']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeBuild']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeBuildMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeComputeMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeCompute',
    '/#X-Amz-Target=GameLift.DescribeCompute',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeComputeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeCompute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeCompute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeComputeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeCompute']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.DescribeCompute'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeCompute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeCompute']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeCompute']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeComputeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeEC2InstanceLimitsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeEC2InstanceLimits',
    '/#X-Amz-Target=GameLift.DescribeEC2InstanceLimits',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeEC2InstanceLimitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeEC2InstanceLimits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeEC2InstanceLimitsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeEC2InstanceLimits']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeEC2InstanceLimits'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeEC2InstanceLimits<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.DescribeEC2InstanceLimits']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeEC2InstanceLimits']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeEC2InstanceLimitsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeFleetAttributesMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeFleetAttributes',
    '/#X-Amz-Target=GameLift.DescribeFleetAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeFleetAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeFleetAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeFleetAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeFleetAttributes'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeFleetAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.DescribeFleetAttributes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeFleetAttributes']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeFleetAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeFleetCapacityMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeFleetCapacity',
    '/#X-Amz-Target=GameLift.DescribeFleetCapacity',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeFleetCapacityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetCapacity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeFleetCapacityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeFleetCapacity']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeFleetCapacity'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeFleetCapacity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.DescribeFleetCapacity']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeFleetCapacity']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeFleetCapacityMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeFleetEventsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeFleetEvents',
    '/#X-Amz-Target=GameLift.DescribeFleetEvents',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeFleetEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeFleetEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeFleetEvents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeFleetEvents'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeFleetEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetEvents']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeFleetEventsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeFleetLocationAttributesMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeFleetLocationAttributes',
    '/#X-Amz-Target=GameLift.DescribeFleetLocationAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeFleetLocationAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeFleetLocationAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeFleetLocationAttributes'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeFleetLocationAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationAttributes']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeFleetLocationAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeFleetLocationCapacityMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeFleetLocationCapacity',
    '/#X-Amz-Target=GameLift.DescribeFleetLocationCapacity',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeFleetLocationCapacityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationCapacity']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeFleetLocationCapacityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationCapacity']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeFleetLocationCapacity'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeFleetLocationCapacity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationCapacity']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeFleetLocationCapacityMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeFleetLocationUtilizationMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeFleetLocationUtilization',
    '/#X-Amz-Target=GameLift.DescribeFleetLocationUtilization',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeFleetLocationUtilizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationUtilization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeFleetLocationUtilizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationUtilization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeFleetLocationUtilization'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeFleetLocationUtilization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeFleetLocationUtilization']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeFleetLocationUtilizationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeFleetPortSettingsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeFleetPortSettings',
    '/#X-Amz-Target=GameLift.DescribeFleetPortSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeFleetPortSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetPortSettings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeFleetPortSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeFleetPortSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeFleetPortSettings'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeFleetPortSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.DescribeFleetPortSettings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeFleetPortSettings']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeFleetPortSettingsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeFleetUtilizationMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeFleetUtilization',
    '/#X-Amz-Target=GameLift.DescribeFleetUtilization',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeFleetUtilizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeFleetUtilization']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeFleetUtilizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeFleetUtilization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeFleetUtilization'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeFleetUtilization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.DescribeFleetUtilization']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeFleetUtilization']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeFleetUtilizationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeGameServerMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeGameServer',
    '/#X-Amz-Target=GameLift.DescribeGameServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeGameServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameServer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameServer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeGameServerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameServer']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.DescribeGameServer'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeGameServer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameServer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameServer']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeGameServerMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeGameServerGroupMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeGameServerGroup',
    '/#X-Amz-Target=GameLift.DescribeGameServerGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeGameServerGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameServerGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeGameServerGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeGameServerGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeGameServerGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeGameServerGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.DescribeGameServerGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeGameServerGroup']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeGameServerGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeGameServerInstancesMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeGameServerInstances',
    '/#X-Amz-Target=GameLift.DescribeGameServerInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeGameServerInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeGameServerInstances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeGameServerInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeGameServerInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeGameServerInstances'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeGameServerInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeGameServerInstances']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeGameServerInstancesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeGameSessionDetailsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeGameSessionDetails',
    '/#X-Amz-Target=GameLift.DescribeGameSessionDetails',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeGameSessionDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionDetails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeGameSessionDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionDetails']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeGameSessionDetails'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeGameSessionDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionDetails']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeGameSessionDetailsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeGameSessionPlacementMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeGameSessionPlacement',
    '/#X-Amz-Target=GameLift.DescribeGameSessionPlacement',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeGameSessionPlacementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionPlacement']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeGameSessionPlacementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionPlacement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeGameSessionPlacement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeGameSessionPlacement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionPlacement']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeGameSessionPlacementMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeGameSessionQueuesMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeGameSessionQueues',
    '/#X-Amz-Target=GameLift.DescribeGameSessionQueues',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeGameSessionQueuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionQueues']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeGameSessionQueuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionQueues']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeGameSessionQueues'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeGameSessionQueues<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionQueues']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessionQueues']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeGameSessionQueuesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeGameSessionsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeGameSessions',
    '/#X-Amz-Target=GameLift.DescribeGameSessions',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeGameSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameSessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeGameSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeGameSessions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeGameSessions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.DescribeGameSessions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeGameSessions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeGameSessionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeInstancesMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeInstances',
    '/#X-Amz-Target=GameLift.DescribeInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeInstances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeInstances']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.DescribeInstances'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeInstances']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeInstances']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeInstancesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeMatchmakingMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeMatchmaking',
    '/#X-Amz-Target=GameLift.DescribeMatchmaking',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeMatchmakingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeMatchmaking']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeMatchmakingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeMatchmaking']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeMatchmaking'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeMatchmaking<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeMatchmaking']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeMatchmakingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeMatchmakingConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations',
    '/#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeMatchmakingConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeMatchmakingConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeMatchmakingConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeMatchmakingConfigurations']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetGameLiftDescribeMatchmakingConfigurationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeMatchmakingRuleSetsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets',
    '/#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeMatchmakingRuleSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeMatchmakingRuleSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeMatchmakingRuleSets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeMatchmakingRuleSets']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeMatchmakingRuleSetsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribePlayerSessionsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribePlayerSessions',
    '/#X-Amz-Target=GameLift.DescribePlayerSessions',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribePlayerSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribePlayerSessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribePlayerSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribePlayerSessions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribePlayerSessions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribePlayerSessions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.DescribePlayerSessions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribePlayerSessions']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribePlayerSessionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeRuntimeConfigurationMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeRuntimeConfiguration',
    '/#X-Amz-Target=GameLift.DescribeRuntimeConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeRuntimeConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeRuntimeConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeRuntimeConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeRuntimeConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeRuntimeConfiguration'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeRuntimeConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeRuntimeConfiguration']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeRuntimeConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeScalingPoliciesMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeScalingPolicies',
    '/#X-Amz-Target=GameLift.DescribeScalingPolicies',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeScalingPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeScalingPolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeScalingPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeScalingPolicies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeScalingPolicies'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeScalingPolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.DescribeScalingPolicies']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeScalingPolicies']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeScalingPoliciesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeScriptMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeScript',
    '/#X-Amz-Target=GameLift.DescribeScript',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeScriptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeScript']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeScript']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeScriptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeScript']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.DescribeScript'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeScript<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.DescribeScript']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.DescribeScript']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeScriptMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeVpcPeeringAuthorizationsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations',
    '/#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeVpcPeeringAuthorizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeVpcPeeringAuthorizationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeVpcPeeringAuthorizations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeVpcPeeringAuthorizations']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeVpcPeeringAuthorizationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftDescribeVpcPeeringConnectionsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.DescribeVpcPeeringConnections',
    '/#X-Amz-Target=GameLift.DescribeVpcPeeringConnections',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftDescribeVpcPeeringConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.DescribeVpcPeeringConnections']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftDescribeVpcPeeringConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.DescribeVpcPeeringConnections']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.DescribeVpcPeeringConnections'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftDescribeVpcPeeringConnections<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.DescribeVpcPeeringConnections']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftDescribeVpcPeeringConnectionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftGetComputeAccessMutationKey() {
  return [
    '#X-Amz-Target=GameLift.GetComputeAccess',
    '/#X-Amz-Target=GameLift.GetComputeAccess',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftGetComputeAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.GetComputeAccess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetComputeAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftGetComputeAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetComputeAccess']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.GetComputeAccess'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftGetComputeAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.GetComputeAccess']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetComputeAccess']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftGetComputeAccessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftGetComputeAuthTokenMutationKey() {
  return [
    '#X-Amz-Target=GameLift.GetComputeAuthToken',
    '/#X-Amz-Target=GameLift.GetComputeAuthToken',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftGetComputeAuthTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetComputeAuthToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftGetComputeAuthTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.GetComputeAuthToken']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.GetComputeAuthToken'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftGetComputeAuthToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetComputeAuthToken']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftGetComputeAuthTokenMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftGetGameSessionLogUrlMutationKey() {
  return [
    '#X-Amz-Target=GameLift.GetGameSessionLogUrl',
    '/#X-Amz-Target=GameLift.GetGameSessionLogUrl',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftGetGameSessionLogUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetGameSessionLogUrl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftGetGameSessionLogUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.GetGameSessionLogUrl']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.GetGameSessionLogUrl'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftGetGameSessionLogUrl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.GetGameSessionLogUrl']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetGameSessionLogUrl']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftGetGameSessionLogUrlMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftGetInstanceAccessMutationKey() {
  return [
    '#X-Amz-Target=GameLift.GetInstanceAccess',
    '/#X-Amz-Target=GameLift.GetInstanceAccess',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftGetInstanceAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.GetInstanceAccess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetInstanceAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftGetInstanceAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetInstanceAccess']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.GetInstanceAccess'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftGetInstanceAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.GetInstanceAccess']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.GetInstanceAccess']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftGetInstanceAccessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftListAliasesMutationKey() {
  return [
    '#X-Amz-Target=GameLift.ListAliases',
    '/#X-Amz-Target=GameLift.ListAliases',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftListAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListAliases']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListAliases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftListAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListAliases']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.ListAliases'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftListAliases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListAliases']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListAliases']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftListAliasesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftListBuildsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.ListBuilds',
    '/#X-Amz-Target=GameLift.ListBuilds',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftListBuildsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListBuilds']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListBuilds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftListBuildsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListBuilds']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.ListBuilds'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftListBuilds<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListBuilds']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListBuilds']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftListBuildsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftListComputeMutationKey() {
  return [
    '#X-Amz-Target=GameLift.ListCompute',
    '/#X-Amz-Target=GameLift.ListCompute',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftListComputeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListCompute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListCompute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftListComputeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListCompute']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.ListCompute'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftListCompute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListCompute']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListCompute']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftListComputeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftListFleetsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.ListFleets',
    '/#X-Amz-Target=GameLift.ListFleets',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftListFleetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListFleets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListFleets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftListFleetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListFleets']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.ListFleets'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftListFleets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListFleets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListFleets']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftListFleetsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftListGameServerGroupsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.ListGameServerGroups',
    '/#X-Amz-Target=GameLift.ListGameServerGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftListGameServerGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListGameServerGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftListGameServerGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.ListGameServerGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.ListGameServerGroups'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftListGameServerGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.ListGameServerGroups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListGameServerGroups']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftListGameServerGroupsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftListGameServersMutationKey() {
  return [
    '#X-Amz-Target=GameLift.ListGameServers',
    '/#X-Amz-Target=GameLift.ListGameServers',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftListGameServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListGameServers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListGameServers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftListGameServersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListGameServers']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.ListGameServers'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftListGameServers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListGameServers']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListGameServers']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftListGameServersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftListLocationsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.ListLocations',
    '/#X-Amz-Target=GameLift.ListLocations',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftListLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListLocations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListLocations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftListLocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListLocations']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.ListLocations'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftListLocations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListLocations']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListLocations']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftListLocationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftListScriptsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.ListScripts',
    '/#X-Amz-Target=GameLift.ListScripts',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftListScriptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListScripts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListScripts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftListScriptsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListScripts']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.ListScripts'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftListScripts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ListScripts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListScripts']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftListScriptsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=GameLift.ListTagsForResource',
    '/#X-Amz-Target=GameLift.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ListTagsForResource']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftListTagsForResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftPutScalingPolicyMutationKey() {
  return [
    '#X-Amz-Target=GameLift.PutScalingPolicy',
    '/#X-Amz-Target=GameLift.PutScalingPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftPutScalingPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.PutScalingPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.PutScalingPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftPutScalingPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.PutScalingPolicy']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.PutScalingPolicy'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftPutScalingPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.PutScalingPolicy']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.PutScalingPolicy']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftPutScalingPolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftRegisterComputeMutationKey() {
  return [
    '#X-Amz-Target=GameLift.RegisterCompute',
    '/#X-Amz-Target=GameLift.RegisterCompute',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftRegisterComputeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.RegisterCompute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.RegisterCompute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftRegisterComputeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.RegisterCompute']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.RegisterCompute'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftRegisterCompute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.RegisterCompute']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.RegisterCompute']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftRegisterComputeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftRegisterGameServerMutationKey() {
  return [
    '#X-Amz-Target=GameLift.RegisterGameServer',
    '/#X-Amz-Target=GameLift.RegisterGameServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftRegisterGameServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.RegisterGameServer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.RegisterGameServer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftRegisterGameServerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.RegisterGameServer']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.RegisterGameServer'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftRegisterGameServer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.RegisterGameServer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.RegisterGameServer']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftRegisterGameServerMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftRequestUploadCredentialsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.RequestUploadCredentials',
    '/#X-Amz-Target=GameLift.RequestUploadCredentials',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftRequestUploadCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.RequestUploadCredentials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftRequestUploadCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.RequestUploadCredentials']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.RequestUploadCredentials'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftRequestUploadCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.RequestUploadCredentials']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.RequestUploadCredentials']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftRequestUploadCredentialsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftResolveAliasMutationKey() {
  return [
    '#X-Amz-Target=GameLift.ResolveAlias',
    '/#X-Amz-Target=GameLift.ResolveAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftResolveAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ResolveAlias']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ResolveAlias']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftResolveAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ResolveAlias']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.ResolveAlias'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftResolveAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.ResolveAlias']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ResolveAlias']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftResolveAliasMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftResumeGameServerGroupMutationKey() {
  return [
    '#X-Amz-Target=GameLift.ResumeGameServerGroup',
    '/#X-Amz-Target=GameLift.ResumeGameServerGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftResumeGameServerGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ResumeGameServerGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftResumeGameServerGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.ResumeGameServerGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.ResumeGameServerGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftResumeGameServerGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.ResumeGameServerGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.ResumeGameServerGroup']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftResumeGameServerGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftSearchGameSessionsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.SearchGameSessions',
    '/#X-Amz-Target=GameLift.SearchGameSessions',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftSearchGameSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.SearchGameSessions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.SearchGameSessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftSearchGameSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.SearchGameSessions']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.SearchGameSessions'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftSearchGameSessions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.SearchGameSessions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.SearchGameSessions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftSearchGameSessionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftStartFleetActionsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.StartFleetActions',
    '/#X-Amz-Target=GameLift.StartFleetActions',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftStartFleetActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.StartFleetActions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartFleetActions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftStartFleetActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartFleetActions']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.StartFleetActions'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftStartFleetActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.StartFleetActions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartFleetActions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftStartFleetActionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftStartGameSessionPlacementMutationKey() {
  return [
    '#X-Amz-Target=GameLift.StartGameSessionPlacement',
    '/#X-Amz-Target=GameLift.StartGameSessionPlacement',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftStartGameSessionPlacementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartGameSessionPlacement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftStartGameSessionPlacementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.StartGameSessionPlacement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.StartGameSessionPlacement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftStartGameSessionPlacement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.StartGameSessionPlacement']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.StartGameSessionPlacement']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftStartGameSessionPlacementMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftStartMatchBackfillMutationKey() {
  return [
    '#X-Amz-Target=GameLift.StartMatchBackfill',
    '/#X-Amz-Target=GameLift.StartMatchBackfill',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftStartMatchBackfillMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.StartMatchBackfill']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartMatchBackfill']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftStartMatchBackfillMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartMatchBackfill']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.StartMatchBackfill'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftStartMatchBackfill<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.StartMatchBackfill']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartMatchBackfill']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftStartMatchBackfillMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftStartMatchmakingMutationKey() {
  return [
    '#X-Amz-Target=GameLift.StartMatchmaking',
    '/#X-Amz-Target=GameLift.StartMatchmaking',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftStartMatchmakingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.StartMatchmaking']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartMatchmaking']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftStartMatchmakingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartMatchmaking']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.StartMatchmaking'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftStartMatchmaking<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.StartMatchmaking']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StartMatchmaking']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftStartMatchmakingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftStopFleetActionsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.StopFleetActions',
    '/#X-Amz-Target=GameLift.StopFleetActions',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftStopFleetActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.StopFleetActions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StopFleetActions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftStopFleetActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StopFleetActions']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.StopFleetActions'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftStopFleetActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.StopFleetActions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StopFleetActions']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftStopFleetActionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftStopGameSessionPlacementMutationKey() {
  return [
    '#X-Amz-Target=GameLift.StopGameSessionPlacement',
    '/#X-Amz-Target=GameLift.StopGameSessionPlacement',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftStopGameSessionPlacementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StopGameSessionPlacement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftStopGameSessionPlacementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.StopGameSessionPlacement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.StopGameSessionPlacement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftStopGameSessionPlacement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.StopGameSessionPlacement']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.StopGameSessionPlacement']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftStopGameSessionPlacementMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftStopMatchmakingMutationKey() {
  return [
    '#X-Amz-Target=GameLift.StopMatchmaking',
    '/#X-Amz-Target=GameLift.StopMatchmaking',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftStopMatchmakingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.StopMatchmaking']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StopMatchmaking']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftStopMatchmakingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StopMatchmaking']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.StopMatchmaking'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftStopMatchmaking<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.StopMatchmaking']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.StopMatchmaking']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftStopMatchmakingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftSuspendGameServerGroupMutationKey() {
  return [
    '#X-Amz-Target=GameLift.SuspendGameServerGroup',
    '/#X-Amz-Target=GameLift.SuspendGameServerGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftSuspendGameServerGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.SuspendGameServerGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftSuspendGameServerGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.SuspendGameServerGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.SuspendGameServerGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftSuspendGameServerGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.SuspendGameServerGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.SuspendGameServerGroup']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftSuspendGameServerGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftTagResourceMutationKey() {
  return [
    '#X-Amz-Target=GameLift.TagResource',
    '/#X-Amz-Target=GameLift.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.TagResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.TagResource']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.TagResource']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftTagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=GameLift.UntagResource',
    '/#X-Amz-Target=GameLift.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UntagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.UntagResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.UntagResource']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UntagResource']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftUntagResourceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftUpdateAliasMutationKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateAlias',
    '/#X-Amz-Target=GameLift.UpdateAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftUpdateAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateAlias']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateAlias']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftUpdateAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateAlias']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.UpdateAlias'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftUpdateAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateAlias']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateAlias']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftUpdateAliasMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftUpdateBuildMutationKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateBuild',
    '/#X-Amz-Target=GameLift.UpdateBuild',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftUpdateBuildMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateBuild']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateBuild']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftUpdateBuildMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateBuild']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.UpdateBuild'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftUpdateBuild<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateBuild']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateBuild']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftUpdateBuildMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftUpdateFleetAttributesMutationKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateFleetAttributes',
    '/#X-Amz-Target=GameLift.UpdateFleetAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftUpdateFleetAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateFleetAttributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftUpdateFleetAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.UpdateFleetAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.UpdateFleetAttributes'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftUpdateFleetAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.UpdateFleetAttributes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.UpdateFleetAttributes']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftUpdateFleetAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftUpdateFleetCapacityMutationKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateFleetCapacity',
    '/#X-Amz-Target=GameLift.UpdateFleetCapacity',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftUpdateFleetCapacityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateFleetCapacity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftUpdateFleetCapacityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.UpdateFleetCapacity']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.UpdateFleetCapacity'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftUpdateFleetCapacity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateFleetCapacity']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftUpdateFleetCapacityMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftUpdateFleetPortSettingsMutationKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateFleetPortSettings',
    '/#X-Amz-Target=GameLift.UpdateFleetPortSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftUpdateFleetPortSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateFleetPortSettings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftUpdateFleetPortSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.UpdateFleetPortSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.UpdateFleetPortSettings'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftUpdateFleetPortSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.UpdateFleetPortSettings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.UpdateFleetPortSettings']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftUpdateFleetPortSettingsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftUpdateGameServerMutationKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateGameServer',
    '/#X-Amz-Target=GameLift.UpdateGameServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftUpdateGameServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameServer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameServer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftUpdateGameServerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameServer']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.UpdateGameServer'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftUpdateGameServer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameServer']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameServer']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftUpdateGameServerMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftUpdateGameServerGroupMutationKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateGameServerGroup',
    '/#X-Amz-Target=GameLift.UpdateGameServerGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftUpdateGameServerGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameServerGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftUpdateGameServerGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.UpdateGameServerGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.UpdateGameServerGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftUpdateGameServerGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.UpdateGameServerGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.UpdateGameServerGroup']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftUpdateGameServerGroupMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftUpdateGameSessionMutationKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateGameSession',
    '/#X-Amz-Target=GameLift.UpdateGameSession',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftUpdateGameSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameSession']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameSession']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftUpdateGameSessionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameSession']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.UpdateGameSession'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftUpdateGameSession<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameSession']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameSession']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftUpdateGameSessionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftUpdateGameSessionQueueMutationKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateGameSessionQueue',
    '/#X-Amz-Target=GameLift.UpdateGameSessionQueue',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftUpdateGameSessionQueueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateGameSessionQueue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftUpdateGameSessionQueueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.UpdateGameSessionQueue']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.UpdateGameSessionQueue'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftUpdateGameSessionQueue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=GameLift.UpdateGameSessionQueue']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.UpdateGameSessionQueue']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftUpdateGameSessionQueueMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftUpdateMatchmakingConfigurationMutationKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration',
    '/#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftUpdateMatchmakingConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftUpdateMatchmakingConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftUpdateMatchmakingConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.UpdateMatchmakingConfiguration']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftUpdateMatchmakingConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftUpdateRuntimeConfigurationMutationKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateRuntimeConfiguration',
    '/#X-Amz-Target=GameLift.UpdateRuntimeConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftUpdateRuntimeConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateRuntimeConfiguration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftUpdateRuntimeConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.UpdateRuntimeConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.UpdateRuntimeConfiguration'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftUpdateRuntimeConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.UpdateRuntimeConfiguration']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftUpdateRuntimeConfigurationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftUpdateScriptMutationKey() {
  return [
    '#X-Amz-Target=GameLift.UpdateScript',
    '/#X-Amz-Target=GameLift.UpdateScript',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftUpdateScriptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateScript']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateScript']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftUpdateScriptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateScript']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=GameLift.UpdateScript'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetGameLiftUpdateScript<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=GameLift.UpdateScript']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=GameLift.UpdateScript']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftUpdateScriptMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetGameLiftValidateMatchmakingRuleSetMutationKey() {
  return [
    '#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet',
    '/#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetGameLiftValidateMatchmakingRuleSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetGameLiftValidateMatchmakingRuleSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetGameLiftValidateMatchmakingRuleSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=GameLift.ValidateMatchmakingRuleSet']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetGameLiftValidateMatchmakingRuleSetMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
