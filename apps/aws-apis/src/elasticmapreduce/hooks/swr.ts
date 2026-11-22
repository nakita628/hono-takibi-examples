import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetElasticMapReduceAddInstanceFleetKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.AddInstanceFleet',
    '/#X-Amz-Target=ElasticMapReduce.AddInstanceFleet',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceAddInstanceFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddInstanceFleet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceAddInstanceFleetKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.AddInstanceFleet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.AddInstanceFleet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceAddInstanceGroupsKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.AddInstanceGroups',
    '/#X-Amz-Target=ElasticMapReduce.AddInstanceGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceAddInstanceGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddInstanceGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceAddInstanceGroupsKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.AddInstanceGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.AddInstanceGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceAddJobFlowStepsKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps',
    '/#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceAddJobFlowSteps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceAddJobFlowStepsKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.AddJobFlowSteps'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceAddTagsKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.AddTags',
    '/#X-Amz-Target=ElasticMapReduce.AddTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceAddTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceAddTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.AddTags']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=ElasticMapReduce.AddTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceCancelStepsKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.CancelSteps',
    '/#X-Amz-Target=ElasticMapReduce.CancelSteps',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceCancelSteps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.CancelSteps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceCancelStepsKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.CancelSteps']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.CancelSteps'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceCreateSecurityConfigurationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration',
    '/#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceCreateSecurityConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceCreateSecurityConfigurationKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.CreateSecurityConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceCreateStudioKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.CreateStudio',
    '/#X-Amz-Target=ElasticMapReduce.CreateStudio',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceCreateStudio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.CreateStudio']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceCreateStudioKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateStudio']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.CreateStudio'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceCreateStudioSessionMappingKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping',
    '/#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceCreateStudioSessionMapping<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceCreateStudioSessionMappingKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.CreateStudioSessionMapping'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceDeleteSecurityConfigurationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration',
    '/#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceDeleteSecurityConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceDeleteSecurityConfigurationKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.DeleteSecurityConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceDeleteStudioKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DeleteStudio',
    '/#X-Amz-Target=ElasticMapReduce.DeleteStudio',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceDeleteStudio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteStudio']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceDeleteStudioKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteStudio']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.DeleteStudio'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceDeleteStudioSessionMappingKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping',
    '/#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceDeleteStudioSessionMapping<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceDeleteStudioSessionMappingKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.DeleteStudioSessionMapping'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceDescribeClusterKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DescribeCluster',
    '/#X-Amz-Target=ElasticMapReduce.DescribeCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceDescribeCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceDescribeClusterKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeCluster']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.DescribeCluster'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceDescribeJobFlowsKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DescribeJobFlows',
    '/#X-Amz-Target=ElasticMapReduce.DescribeJobFlows',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceDescribeJobFlows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeJobFlows']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceDescribeJobFlowsKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeJobFlows']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.DescribeJobFlows'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceDescribeNotebookExecutionKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution',
    '/#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceDescribeNotebookExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceDescribeNotebookExecutionKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.DescribeNotebookExecution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceDescribeReleaseLabelKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel',
    '/#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceDescribeReleaseLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceDescribeReleaseLabelKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.DescribeReleaseLabel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceDescribeSecurityConfigurationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration',
    '/#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceDescribeSecurityConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceDescribeSecurityConfigurationKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.DescribeSecurityConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceDescribeStepKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DescribeStep',
    '/#X-Amz-Target=ElasticMapReduce.DescribeStep',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceDescribeStep<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeStep']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceDescribeStepKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeStep']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.DescribeStep'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceDescribeStudioKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.DescribeStudio',
    '/#X-Amz-Target=ElasticMapReduce.DescribeStudio',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceDescribeStudio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeStudio']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceDescribeStudioKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.DescribeStudio']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.DescribeStudio'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceGetAutoTerminationPolicyKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy',
    '/#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceGetAutoTerminationPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceGetAutoTerminationPolicyKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.GetAutoTerminationPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration',
    '/#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceGetBlockPublicAccessConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetElasticMapReduceGetBlockPublicAccessConfigurationKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.GetBlockPublicAccessConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceGetClusterSessionCredentialsKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials',
    '/#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceGetClusterSessionCredentials<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceGetClusterSessionCredentialsKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.GetClusterSessionCredentials'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceGetManagedScalingPolicyKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy',
    '/#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceGetManagedScalingPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceGetManagedScalingPolicyKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.GetManagedScalingPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceGetStudioSessionMappingKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping',
    '/#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceGetStudioSessionMapping<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceGetStudioSessionMappingKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.GetStudioSessionMapping'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceListBootstrapActionsKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListBootstrapActions',
    '/#X-Amz-Target=ElasticMapReduce.ListBootstrapActions',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceListBootstrapActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.ListBootstrapActions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceListBootstrapActionsKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.ListBootstrapActions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.ListBootstrapActions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceListClustersKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListClusters',
    '/#X-Amz-Target=ElasticMapReduce.ListClusters',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceListClusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListClusters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceListClustersKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.ListClusters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.ListClusters'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceListInstanceFleetsKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListInstanceFleets',
    '/#X-Amz-Target=ElasticMapReduce.ListInstanceFleets',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceListInstanceFleets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstanceFleets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceListInstanceFleetsKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstanceFleets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.ListInstanceFleets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceListInstanceGroupsKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListInstanceGroups',
    '/#X-Amz-Target=ElasticMapReduce.ListInstanceGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceListInstanceGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstanceGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceListInstanceGroupsKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstanceGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.ListInstanceGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceListInstancesKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListInstances',
    '/#X-Amz-Target=ElasticMapReduce.ListInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceListInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceListInstancesKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.ListInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.ListInstances'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceListNotebookExecutionsKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions',
    '/#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceListNotebookExecutions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceListNotebookExecutionsKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.ListNotebookExecutions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceListReleaseLabelsKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListReleaseLabels',
    '/#X-Amz-Target=ElasticMapReduce.ListReleaseLabels',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceListReleaseLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListReleaseLabels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceListReleaseLabelsKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.ListReleaseLabels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.ListReleaseLabels'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceListSecurityConfigurationsKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations',
    '/#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceListSecurityConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceListSecurityConfigurationsKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.ListSecurityConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceListStepsKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListSteps',
    '/#X-Amz-Target=ElasticMapReduce.ListSteps',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceListSteps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListSteps']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListSteps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceListStepsKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.ListSteps']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=ElasticMapReduce.ListSteps'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceListStudioSessionMappingsKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings',
    '/#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceListStudioSessionMappings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceListStudioSessionMappingsKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.ListStudioSessionMappings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceListStudiosKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ListStudios',
    '/#X-Amz-Target=ElasticMapReduce.ListStudios',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceListStudios<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ListStudios']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceListStudiosKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.ListStudios']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.ListStudios'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceModifyClusterKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ModifyCluster',
    '/#X-Amz-Target=ElasticMapReduce.ModifyCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceModifyCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceModifyClusterKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyCluster']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.ModifyCluster'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceModifyInstanceFleetKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet',
    '/#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceModifyInstanceFleet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceModifyInstanceFleetKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.ModifyInstanceFleet'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceModifyInstanceGroupsKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups',
    '/#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceModifyInstanceGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceModifyInstanceGroupsKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.ModifyInstanceGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReducePutAutoScalingPolicyKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy',
    '/#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReducePutAutoScalingPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReducePutAutoScalingPolicyKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.PutAutoScalingPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReducePutAutoTerminationPolicyKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy',
    '/#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReducePutAutoTerminationPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReducePutAutoTerminationPolicyKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.PutAutoTerminationPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReducePutBlockPublicAccessConfigurationKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration',
    '/#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReducePutBlockPublicAccessConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetElasticMapReducePutBlockPublicAccessConfigurationKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.PutBlockPublicAccessConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReducePutManagedScalingPolicyKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy',
    '/#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReducePutManagedScalingPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReducePutManagedScalingPolicyKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.PutManagedScalingPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceRemoveAutoScalingPolicyKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy',
    '/#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceRemoveAutoScalingPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceRemoveAutoScalingPolicyKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.RemoveAutoScalingPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceRemoveAutoTerminationPolicyKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy',
    '/#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceRemoveAutoTerminationPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceRemoveAutoTerminationPolicyKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.RemoveAutoTerminationPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceRemoveManagedScalingPolicyKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy',
    '/#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceRemoveManagedScalingPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceRemoveManagedScalingPolicyKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.RemoveManagedScalingPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceRemoveTagsKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.RemoveTags',
    '/#X-Amz-Target=ElasticMapReduce.RemoveTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceRemoveTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceRemoveTagsKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.RemoveTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.RemoveTags'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceRunJobFlowKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.RunJobFlow',
    '/#X-Amz-Target=ElasticMapReduce.RunJobFlow',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceRunJobFlow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=ElasticMapReduce.RunJobFlow']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.RunJobFlow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceRunJobFlowKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.RunJobFlow']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.RunJobFlow'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceSetTerminationProtectionKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.SetTerminationProtection',
    '/#X-Amz-Target=ElasticMapReduce.SetTerminationProtection',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceSetTerminationProtection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.SetTerminationProtection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceSetTerminationProtectionKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.SetTerminationProtection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.SetTerminationProtection'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceSetVisibleToAllUsersKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers',
    '/#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceSetVisibleToAllUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceSetVisibleToAllUsersKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.SetVisibleToAllUsers'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceStartNotebookExecutionKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.StartNotebookExecution',
    '/#X-Amz-Target=ElasticMapReduce.StartNotebookExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceStartNotebookExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.StartNotebookExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceStartNotebookExecutionKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.StartNotebookExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.StartNotebookExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceStopNotebookExecutionKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.StopNotebookExecution',
    '/#X-Amz-Target=ElasticMapReduce.StopNotebookExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceStopNotebookExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.StopNotebookExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceStopNotebookExecutionKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.StopNotebookExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.StopNotebookExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceTerminateJobFlowsKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.TerminateJobFlows',
    '/#X-Amz-Target=ElasticMapReduce.TerminateJobFlows',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceTerminateJobFlows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.TerminateJobFlows']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceTerminateJobFlowsKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.TerminateJobFlows']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.TerminateJobFlows'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceUpdateStudioKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.UpdateStudio',
    '/#X-Amz-Target=ElasticMapReduce.UpdateStudio',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceUpdateStudio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=ElasticMapReduce.UpdateStudio']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceUpdateStudioKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.UpdateStudio']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.UpdateStudio'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetElasticMapReduceUpdateStudioSessionMappingKey() {
  return [
    '#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping',
    '/#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping',
    'POST',
  ] as const
}

export function usePostXAmzTargetElasticMapReduceUpdateStudioSessionMapping<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetElasticMapReduceUpdateStudioSessionMappingKey()
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
            (typeof client)['#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ElasticMapReduce.UpdateStudioSessionMapping'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
