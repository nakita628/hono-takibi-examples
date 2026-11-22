import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetElasticMapReduceAddInstanceFleetKey() {
  return ['#X-Amz-Target=ElasticMapReduce.AddInstanceFleet'] as const
}

export function getXAmzTargetElasticMapReduceAddInstanceGroupsKey() {
  return ['#X-Amz-Target=ElasticMapReduce.AddInstanceGroups'] as const
}

export function getXAmzTargetElasticMapReduceAddJobFlowStepsKey() {
  return ['#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps'] as const
}

export function getXAmzTargetElasticMapReduceAddTagsKey() {
  return ['#X-Amz-Target=ElasticMapReduce.AddTags'] as const
}

export function getXAmzTargetElasticMapReduceCancelStepsKey() {
  return ['#X-Amz-Target=ElasticMapReduce.CancelSteps'] as const
}

export function getXAmzTargetElasticMapReduceCreateSecurityConfigurationKey() {
  return ['#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration'] as const
}

export function getXAmzTargetElasticMapReduceCreateStudioKey() {
  return ['#X-Amz-Target=ElasticMapReduce.CreateStudio'] as const
}

export function getXAmzTargetElasticMapReduceCreateStudioSessionMappingKey() {
  return ['#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping'] as const
}

export function getXAmzTargetElasticMapReduceDeleteSecurityConfigurationKey() {
  return ['#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration'] as const
}

export function getXAmzTargetElasticMapReduceDeleteStudioKey() {
  return ['#X-Amz-Target=ElasticMapReduce.DeleteStudio'] as const
}

export function getXAmzTargetElasticMapReduceDeleteStudioSessionMappingKey() {
  return ['#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping'] as const
}

export function getXAmzTargetElasticMapReduceDescribeClusterKey() {
  return ['#X-Amz-Target=ElasticMapReduce.DescribeCluster'] as const
}

export function getXAmzTargetElasticMapReduceDescribeJobFlowsKey() {
  return ['#X-Amz-Target=ElasticMapReduce.DescribeJobFlows'] as const
}

export function getXAmzTargetElasticMapReduceDescribeNotebookExecutionKey() {
  return ['#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution'] as const
}

export function getXAmzTargetElasticMapReduceDescribeReleaseLabelKey() {
  return ['#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel'] as const
}

export function getXAmzTargetElasticMapReduceDescribeSecurityConfigurationKey() {
  return ['#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration'] as const
}

export function getXAmzTargetElasticMapReduceDescribeStepKey() {
  return ['#X-Amz-Target=ElasticMapReduce.DescribeStep'] as const
}

export function getXAmzTargetElasticMapReduceDescribeStudioKey() {
  return ['#X-Amz-Target=ElasticMapReduce.DescribeStudio'] as const
}

export function getXAmzTargetElasticMapReduceGetAutoTerminationPolicyKey() {
  return ['#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy'] as const
}

export function getXAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationKey() {
  return ['#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration'] as const
}

export function getXAmzTargetElasticMapReduceGetClusterSessionCredentialsKey() {
  return ['#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials'] as const
}

export function getXAmzTargetElasticMapReduceGetManagedScalingPolicyKey() {
  return ['#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy'] as const
}

export function getXAmzTargetElasticMapReduceGetStudioSessionMappingKey() {
  return ['#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping'] as const
}

export function getXAmzTargetElasticMapReduceListBootstrapActionsKey() {
  return ['#X-Amz-Target=ElasticMapReduce.ListBootstrapActions'] as const
}

export function getXAmzTargetElasticMapReduceListClustersKey() {
  return ['#X-Amz-Target=ElasticMapReduce.ListClusters'] as const
}

export function getXAmzTargetElasticMapReduceListInstanceFleetsKey() {
  return ['#X-Amz-Target=ElasticMapReduce.ListInstanceFleets'] as const
}

export function getXAmzTargetElasticMapReduceListInstanceGroupsKey() {
  return ['#X-Amz-Target=ElasticMapReduce.ListInstanceGroups'] as const
}

export function getXAmzTargetElasticMapReduceListInstancesKey() {
  return ['#X-Amz-Target=ElasticMapReduce.ListInstances'] as const
}

export function getXAmzTargetElasticMapReduceListNotebookExecutionsKey() {
  return ['#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions'] as const
}

export function getXAmzTargetElasticMapReduceListReleaseLabelsKey() {
  return ['#X-Amz-Target=ElasticMapReduce.ListReleaseLabels'] as const
}

export function getXAmzTargetElasticMapReduceListSecurityConfigurationsKey() {
  return ['#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations'] as const
}

export function getXAmzTargetElasticMapReduceListStepsKey() {
  return ['#X-Amz-Target=ElasticMapReduce.ListSteps'] as const
}

export function getXAmzTargetElasticMapReduceListStudioSessionMappingsKey() {
  return ['#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings'] as const
}

export function getXAmzTargetElasticMapReduceListStudiosKey() {
  return ['#X-Amz-Target=ElasticMapReduce.ListStudios'] as const
}

export function getXAmzTargetElasticMapReduceModifyClusterKey() {
  return ['#X-Amz-Target=ElasticMapReduce.ModifyCluster'] as const
}

export function getXAmzTargetElasticMapReduceModifyInstanceFleetKey() {
  return ['#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet'] as const
}

export function getXAmzTargetElasticMapReduceModifyInstanceGroupsKey() {
  return ['#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups'] as const
}

export function getXAmzTargetElasticMapReducePutAutoScalingPolicyKey() {
  return ['#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy'] as const
}

export function getXAmzTargetElasticMapReducePutAutoTerminationPolicyKey() {
  return ['#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy'] as const
}

export function getXAmzTargetElasticMapReducePutBlockPublicAccessConfigurationKey() {
  return ['#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration'] as const
}

export function getXAmzTargetElasticMapReducePutManagedScalingPolicyKey() {
  return ['#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy'] as const
}

export function getXAmzTargetElasticMapReduceRemoveAutoScalingPolicyKey() {
  return ['#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy'] as const
}

export function getXAmzTargetElasticMapReduceRemoveAutoTerminationPolicyKey() {
  return ['#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy'] as const
}

export function getXAmzTargetElasticMapReduceRemoveManagedScalingPolicyKey() {
  return ['#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy'] as const
}

export function getXAmzTargetElasticMapReduceRemoveTagsKey() {
  return ['#X-Amz-Target=ElasticMapReduce.RemoveTags'] as const
}

export function getXAmzTargetElasticMapReduceRunJobFlowKey() {
  return ['#X-Amz-Target=ElasticMapReduce.RunJobFlow'] as const
}

export function getXAmzTargetElasticMapReduceSetTerminationProtectionKey() {
  return ['#X-Amz-Target=ElasticMapReduce.SetTerminationProtection'] as const
}

export function getXAmzTargetElasticMapReduceSetVisibleToAllUsersKey() {
  return ['#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers'] as const
}

export function getXAmzTargetElasticMapReduceStartNotebookExecutionKey() {
  return ['#X-Amz-Target=ElasticMapReduce.StartNotebookExecution'] as const
}

export function getXAmzTargetElasticMapReduceStopNotebookExecutionKey() {
  return ['#X-Amz-Target=ElasticMapReduce.StopNotebookExecution'] as const
}

export function getXAmzTargetElasticMapReduceTerminateJobFlowsKey() {
  return ['#X-Amz-Target=ElasticMapReduce.TerminateJobFlows'] as const
}

export function getXAmzTargetElasticMapReduceUpdateStudioKey() {
  return ['#X-Amz-Target=ElasticMapReduce.UpdateStudio'] as const
}

export function getXAmzTargetElasticMapReduceUpdateStudioSessionMappingKey() {
  return ['#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping'] as const
}

export function getPostXAmzTargetElasticMapReduceAddInstanceFleetMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.AddInstanceFleet',
    '/#X-Amz-Target=ElasticMapReduce.AddInstanceFleet',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceAddInstanceFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddInstanceFleet']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddInstanceFleet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceAddInstanceFleetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.AddInstanceFleet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.AddInstanceFleet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceAddInstanceFleet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.AddInstanceFleet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.AddInstanceFleet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceAddInstanceFleetMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceAddInstanceGroupsMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.AddInstanceGroups',
    '/#X-Amz-Target=ElasticMapReduce.AddInstanceGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceAddInstanceGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddInstanceGroups']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddInstanceGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceAddInstanceGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.AddInstanceGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.AddInstanceGroups'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceAddInstanceGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.AddInstanceGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.AddInstanceGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceAddInstanceGroupsMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceAddJobFlowStepsMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps',
    '/#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceAddJobFlowStepsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceAddJobFlowStepsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceAddJobFlowSteps<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceAddJobFlowStepsMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceAddTagsMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.AddTags',
    '/#X-Amz-Target=ElasticMapReduce.AddTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceAddTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceAddTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddTags']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=ElasticMapReduce.AddTags'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetElasticMapReduceAddTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddTags']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceAddTagsMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceCancelStepsMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.CancelSteps',
    '/#X-Amz-Target=ElasticMapReduce.CancelSteps',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceCancelStepsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.CancelSteps']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.CancelSteps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceCancelStepsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.CancelSteps']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.CancelSteps'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceCancelSteps<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.CancelSteps']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.CancelSteps']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceCancelStepsMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceCreateSecurityConfigurationMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration',
    '/#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceCreateSecurityConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceCreateSecurityConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceCreateSecurityConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetElasticMapReduceCreateSecurityConfigurationMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceCreateStudioMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.CreateStudio',
    '/#X-Amz-Target=ElasticMapReduce.CreateStudio',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceCreateStudioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.CreateStudio']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.CreateStudio']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceCreateStudioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateStudio']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.CreateStudio'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceCreateStudio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.CreateStudio']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.CreateStudio']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceCreateStudioMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceCreateStudioSessionMappingMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping',
    '/#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceCreateStudioSessionMappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceCreateStudioSessionMappingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceCreateStudioSessionMapping<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetElasticMapReduceCreateStudioSessionMappingMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceDeleteSecurityConfigurationMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration',
    '/#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceDeleteSecurityConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceDeleteSecurityConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceDeleteSecurityConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetElasticMapReduceDeleteSecurityConfigurationMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceDeleteStudioMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DeleteStudio',
    '/#X-Amz-Target=ElasticMapReduce.DeleteStudio',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceDeleteStudioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteStudio']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteStudio']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceDeleteStudioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteStudio']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.DeleteStudio'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceDeleteStudio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteStudio']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteStudio']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceDeleteStudioMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceDeleteStudioSessionMappingMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping',
    '/#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceDeleteStudioSessionMappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceDeleteStudioSessionMappingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceDeleteStudioSessionMapping<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetElasticMapReduceDeleteStudioSessionMappingMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceDescribeClusterMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DescribeCluster',
    '/#X-Amz-Target=ElasticMapReduce.DescribeCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceDescribeClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeCluster']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceDescribeClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeCluster']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.DescribeCluster'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceDescribeCluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeCluster']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeCluster']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceDescribeClusterMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceDescribeJobFlowsMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DescribeJobFlows',
    '/#X-Amz-Target=ElasticMapReduce.DescribeJobFlows',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceDescribeJobFlowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeJobFlows']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeJobFlows']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceDescribeJobFlowsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeJobFlows']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.DescribeJobFlows'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceDescribeJobFlows<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeJobFlows']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeJobFlows']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceDescribeJobFlowsMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceDescribeNotebookExecutionMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution',
    '/#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceDescribeNotebookExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceDescribeNotebookExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceDescribeNotebookExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetElasticMapReduceDescribeNotebookExecutionMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceDescribeReleaseLabelMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel',
    '/#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceDescribeReleaseLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceDescribeReleaseLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceDescribeReleaseLabel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceDescribeReleaseLabelMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceDescribeSecurityConfigurationMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration',
    '/#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceDescribeSecurityConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceDescribeSecurityConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceDescribeSecurityConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetElasticMapReduceDescribeSecurityConfigurationMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceDescribeStepMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DescribeStep',
    '/#X-Amz-Target=ElasticMapReduce.DescribeStep',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceDescribeStepMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeStep']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeStep']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceDescribeStepMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeStep']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.DescribeStep'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceDescribeStep<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeStep']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeStep']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceDescribeStepMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceDescribeStudioMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DescribeStudio',
    '/#X-Amz-Target=ElasticMapReduce.DescribeStudio',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceDescribeStudioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeStudio']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeStudio']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceDescribeStudioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeStudio']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.DescribeStudio'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceDescribeStudio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeStudio']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeStudio']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceDescribeStudioMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceGetAutoTerminationPolicyMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy',
    '/#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceGetAutoTerminationPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceGetAutoTerminationPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceGetAutoTerminationPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceGetAutoTerminationPolicyMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration',
    '/#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceGetBlockPublicAccessConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceGetClusterSessionCredentialsMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials',
    '/#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceGetClusterSessionCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceGetClusterSessionCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceGetClusterSessionCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetElasticMapReduceGetClusterSessionCredentialsMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceGetManagedScalingPolicyMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy',
    '/#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceGetManagedScalingPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceGetManagedScalingPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceGetManagedScalingPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceGetManagedScalingPolicyMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceGetStudioSessionMappingMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping',
    '/#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceGetStudioSessionMappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceGetStudioSessionMappingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceGetStudioSessionMapping<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceGetStudioSessionMappingMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceListBootstrapActionsMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListBootstrapActions',
    '/#X-Amz-Target=ElasticMapReduce.ListBootstrapActions',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceListBootstrapActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.ListBootstrapActions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.ListBootstrapActions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceListBootstrapActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.ListBootstrapActions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.ListBootstrapActions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceListBootstrapActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.ListBootstrapActions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.ListBootstrapActions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceListBootstrapActionsMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceListClustersMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListClusters',
    '/#X-Amz-Target=ElasticMapReduce.ListClusters',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceListClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListClusters']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListClusters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceListClustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.ListClusters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.ListClusters'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceListClusters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListClusters']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListClusters']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceListClustersMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceListInstanceFleetsMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListInstanceFleets',
    '/#X-Amz-Target=ElasticMapReduce.ListInstanceFleets',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceListInstanceFleetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstanceFleets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstanceFleets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceListInstanceFleetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstanceFleets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.ListInstanceFleets'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceListInstanceFleets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstanceFleets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstanceFleets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceListInstanceFleetsMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceListInstanceGroupsMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListInstanceGroups',
    '/#X-Amz-Target=ElasticMapReduce.ListInstanceGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceListInstanceGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstanceGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstanceGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceListInstanceGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstanceGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.ListInstanceGroups'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceListInstanceGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstanceGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstanceGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceListInstanceGroupsMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceListInstancesMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListInstances',
    '/#X-Amz-Target=ElasticMapReduce.ListInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceListInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstances']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceListInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.ListInstances'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceListInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstances']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstances']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceListInstancesMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceListNotebookExecutionsMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions',
    '/#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceListNotebookExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceListNotebookExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceListNotebookExecutions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceListNotebookExecutionsMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceListReleaseLabelsMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListReleaseLabels',
    '/#X-Amz-Target=ElasticMapReduce.ListReleaseLabels',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceListReleaseLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListReleaseLabels']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListReleaseLabels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceListReleaseLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.ListReleaseLabels']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.ListReleaseLabels'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceListReleaseLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.ListReleaseLabels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.ListReleaseLabels']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceListReleaseLabelsMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceListSecurityConfigurationsMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations',
    '/#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceListSecurityConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceListSecurityConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceListSecurityConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetElasticMapReduceListSecurityConfigurationsMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceListStepsMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListSteps',
    '/#X-Amz-Target=ElasticMapReduce.ListSteps',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceListStepsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListSteps']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListSteps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceListStepsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListSteps']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=ElasticMapReduce.ListSteps'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetElasticMapReduceListSteps<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListSteps']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListSteps']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceListStepsMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceListStudioSessionMappingsMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings',
    '/#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceListStudioSessionMappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceListStudioSessionMappingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceListStudioSessionMappings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetElasticMapReduceListStudioSessionMappingsMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceListStudiosMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListStudios',
    '/#X-Amz-Target=ElasticMapReduce.ListStudios',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceListStudiosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListStudios']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListStudios']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceListStudiosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.ListStudios']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.ListStudios'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceListStudios<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListStudios']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListStudios']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceListStudiosMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceModifyClusterMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ModifyCluster',
    '/#X-Amz-Target=ElasticMapReduce.ModifyCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceModifyClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyCluster']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceModifyClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyCluster']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.ModifyCluster'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceModifyCluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyCluster']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyCluster']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceModifyClusterMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceModifyInstanceFleetMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet',
    '/#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceModifyInstanceFleetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceModifyInstanceFleetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceModifyInstanceFleet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceModifyInstanceFleetMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceModifyInstanceGroupsMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups',
    '/#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceModifyInstanceGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceModifyInstanceGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceModifyInstanceGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceModifyInstanceGroupsMutationOptions<
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

export function getPostXAmzTargetElasticMapReducePutAutoScalingPolicyMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy',
    '/#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReducePutAutoScalingPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReducePutAutoScalingPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReducePutAutoScalingPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReducePutAutoScalingPolicyMutationOptions<
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

export function getPostXAmzTargetElasticMapReducePutAutoTerminationPolicyMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy',
    '/#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReducePutAutoTerminationPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReducePutAutoTerminationPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReducePutAutoTerminationPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReducePutAutoTerminationPolicyMutationOptions<
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

export function getPostXAmzTargetElasticMapReducePutBlockPublicAccessConfigurationMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration',
    '/#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReducePutBlockPublicAccessConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReducePutBlockPublicAccessConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReducePutBlockPublicAccessConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetElasticMapReducePutBlockPublicAccessConfigurationMutationOptions<
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

export function getPostXAmzTargetElasticMapReducePutManagedScalingPolicyMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy',
    '/#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReducePutManagedScalingPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReducePutManagedScalingPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReducePutManagedScalingPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReducePutManagedScalingPolicyMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceRemoveAutoScalingPolicyMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy',
    '/#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceRemoveAutoScalingPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceRemoveAutoScalingPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceRemoveAutoScalingPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceRemoveAutoScalingPolicyMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceRemoveAutoTerminationPolicyMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy',
    '/#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceRemoveAutoTerminationPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceRemoveAutoTerminationPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceRemoveAutoTerminationPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetElasticMapReduceRemoveAutoTerminationPolicyMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceRemoveManagedScalingPolicyMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy',
    '/#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceRemoveManagedScalingPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceRemoveManagedScalingPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceRemoveManagedScalingPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetElasticMapReduceRemoveManagedScalingPolicyMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceRemoveTagsMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.RemoveTags',
    '/#X-Amz-Target=ElasticMapReduce.RemoveTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceRemoveTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceRemoveTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveTags']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=ElasticMapReduce.RemoveTags'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetElasticMapReduceRemoveTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveTags']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceRemoveTagsMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceRunJobFlowMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.RunJobFlow',
    '/#X-Amz-Target=ElasticMapReduce.RunJobFlow',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceRunJobFlowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.RunJobFlow']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.RunJobFlow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceRunJobFlowMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.RunJobFlow']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=ElasticMapReduce.RunJobFlow'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetElasticMapReduceRunJobFlow<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.RunJobFlow']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.RunJobFlow']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceRunJobFlowMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceSetTerminationProtectionMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.SetTerminationProtection',
    '/#X-Amz-Target=ElasticMapReduce.SetTerminationProtection',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceSetTerminationProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.SetTerminationProtection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.SetTerminationProtection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceSetTerminationProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.SetTerminationProtection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.SetTerminationProtection'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceSetTerminationProtection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.SetTerminationProtection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.SetTerminationProtection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceSetTerminationProtectionMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceSetVisibleToAllUsersMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers',
    '/#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceSetVisibleToAllUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceSetVisibleToAllUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceSetVisibleToAllUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceSetVisibleToAllUsersMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceStartNotebookExecutionMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.StartNotebookExecution',
    '/#X-Amz-Target=ElasticMapReduce.StartNotebookExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceStartNotebookExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.StartNotebookExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.StartNotebookExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceStartNotebookExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.StartNotebookExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.StartNotebookExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceStartNotebookExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.StartNotebookExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.StartNotebookExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceStartNotebookExecutionMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceStopNotebookExecutionMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.StopNotebookExecution',
    '/#X-Amz-Target=ElasticMapReduce.StopNotebookExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceStopNotebookExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.StopNotebookExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.StopNotebookExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceStopNotebookExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.StopNotebookExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.StopNotebookExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceStopNotebookExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.StopNotebookExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.StopNotebookExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceStopNotebookExecutionMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceTerminateJobFlowsMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.TerminateJobFlows',
    '/#X-Amz-Target=ElasticMapReduce.TerminateJobFlows',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceTerminateJobFlowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.TerminateJobFlows']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.TerminateJobFlows']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceTerminateJobFlowsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.TerminateJobFlows']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.TerminateJobFlows'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceTerminateJobFlows<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.TerminateJobFlows']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.TerminateJobFlows']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceTerminateJobFlowsMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceUpdateStudioMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.UpdateStudio',
    '/#X-Amz-Target=ElasticMapReduce.UpdateStudio',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceUpdateStudioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.UpdateStudio']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.UpdateStudio']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceUpdateStudioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.UpdateStudio']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.UpdateStudio'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceUpdateStudio<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.UpdateStudio']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.UpdateStudio']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetElasticMapReduceUpdateStudioMutationOptions<
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

export function getPostXAmzTargetElasticMapReduceUpdateStudioSessionMappingMutationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping',
    '/#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping',
    'POST',
  ] as const
}

export function getPostXAmzTargetElasticMapReduceUpdateStudioSessionMappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetElasticMapReduceUpdateStudioSessionMappingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetElasticMapReduceUpdateStudioSessionMapping<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetElasticMapReduceUpdateStudioSessionMappingMutationOptions<
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
