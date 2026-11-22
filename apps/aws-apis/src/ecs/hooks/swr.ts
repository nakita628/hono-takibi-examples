import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAmazonEC2ContainerServiceV20141113CreateCapacityProviderKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113CreateClusterKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113CreateServiceKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113CreateTaskSetKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAccountSettingKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAttributesKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113DeleteCapacityProviderKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113DeleteClusterKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113DeleteServiceKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskDefinitionsKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskSetKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterContainerInstanceKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterTaskDefinitionKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113DescribeCapacityProvidersKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113DescribeClustersKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113DescribeContainerInstancesKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113DescribeServicesKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskDefinitionKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskSetsKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTasksKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113DiscoverPollEndpointKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113ExecuteCommandKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113GetTaskProtectionKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113ListAccountSettingsKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113ListAttributesKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113ListClustersKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113ListContainerInstancesKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesByNamespaceKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113ListTagsForResourceKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionFamiliesKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionsKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113ListTasksKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingDefaultKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113PutAttributesKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113PutClusterCapacityProvidersKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113RegisterContainerInstanceKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113RegisterTaskDefinitionKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113RunTaskKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113StartTaskKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113StopTaskKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113SubmitAttachmentStateChangesKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113SubmitContainerStateChangeKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113SubmitTaskStateChangeKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113TagResourceKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113UntagResourceKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113UpdateCapacityProviderKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterSettingsKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerAgentKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerInstancesStateKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServiceKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServicePrimaryTaskSetKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskProtectionKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection'] as const
}

export function getXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskSetKey() {
  return ['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet'] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateCapacityProviderKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113CreateCapacityProvider<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateCapacityProviderKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateClusterKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113CreateCluster<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateClusterKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateServiceKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113CreateService<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateServiceKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateTaskSetKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113CreateTaskSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateTaskSetKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAccountSettingKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAccountSetting<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAccountSettingKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAttributesKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAttributesKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteCapacityProviderKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteCapacityProvider<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteCapacityProviderKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteClusterKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteCluster<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteClusterKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteServiceKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteService<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteServiceKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskDefinitionsKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskDefinitions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskDefinitionsKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskSetKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskSetKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterContainerInstanceKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterContainerInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterContainerInstanceKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterTaskDefinitionKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterTaskDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterTaskDefinitionKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeCapacityProvidersKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeCapacityProviders<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeCapacityProvidersKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeClustersKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeClusters<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeClustersKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeContainerInstancesKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeContainerInstances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeContainerInstancesKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeServicesKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeServices<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeServicesKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskDefinitionKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskDefinitionKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskSetsKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskSets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskSetsKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTasksKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTasks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTasksKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DiscoverPollEndpointKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113DiscoverPollEndpoint<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113DiscoverPollEndpointKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ExecuteCommandKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113ExecuteCommand<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113ExecuteCommandKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113GetTaskProtectionKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113GetTaskProtection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113GetTaskProtectionKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListAccountSettingsKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113ListAccountSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListAccountSettingsKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListAttributesKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113ListAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListAttributesKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListClustersKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113ListClusters<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListClustersKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListContainerInstancesKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113ListContainerInstances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListContainerInstancesKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113ListServices<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesByNamespaceKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesByNamespace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesByNamespaceKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113ListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionFamiliesKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionFamilies<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionFamiliesKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionsKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionsKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTasksKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113ListTasks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTasksKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSetting<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingDefaultKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingDefault<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingDefaultKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAttributesKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113PutAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAttributesKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutClusterCapacityProvidersKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113PutClusterCapacityProviders<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutClusterCapacityProvidersKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113RegisterContainerInstanceKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113RegisterContainerInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113RegisterContainerInstanceKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113RegisterTaskDefinitionKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113RegisterTaskDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113RegisterTaskDefinitionKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113RunTaskKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113RunTask<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113RunTaskKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113StartTaskKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113StartTask<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113StartTaskKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113StopTaskKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113StopTask<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113StopTaskKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitAttachmentStateChangesKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitAttachmentStateChanges<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitAttachmentStateChangesKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitContainerStateChangeKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitContainerStateChange<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitContainerStateChangeKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitTaskStateChangeKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitTaskStateChange<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitTaskStateChangeKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113TagResourceKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113TagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113TagResourceKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UntagResourceKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113UntagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateCapacityProviderKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateCapacityProvider<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateCapacityProviderKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateCluster<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterSettingsKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterSettingsKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerAgentKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerAgent<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerAgentKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerInstancesStateKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerInstancesState<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerInstancesStateKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServiceKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateService<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServiceKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServicePrimaryTaskSetKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServicePrimaryTaskSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServicePrimaryTaskSetKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskProtectionKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskProtection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskProtectionKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskSetKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskSet<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskSetKey()
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
            (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
