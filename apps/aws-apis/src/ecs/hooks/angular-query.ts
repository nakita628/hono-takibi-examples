import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateCapacityProviderMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateCapacityProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateCapacityProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateCapacityProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateCapacityProviderMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateClusterMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateCluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateClusterMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateServiceMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateService<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateServiceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateTaskSetMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateTaskSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateTaskSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateTaskSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113CreateTaskSetMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAccountSettingMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAccountSettingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAccountSettingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAccountSetting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAccountSettingMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAttributesMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAttributesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteCapacityProviderMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteCapacityProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteCapacityProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteCapacityProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteCapacityProviderMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteClusterMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteCluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteClusterMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteServiceMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteService<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteServiceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskDefinitionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskDefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskDefinitionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskSetMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskSetMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterContainerInstanceMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterContainerInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterContainerInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterContainerInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterContainerInstanceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterTaskDefinitionMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterTaskDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterTaskDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterTaskDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterTaskDefinitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeCapacityProvidersMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeCapacityProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeCapacityProvidersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeCapacityProviders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeCapacityProvidersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeClustersMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeClustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeClusters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeClustersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeContainerInstancesMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeContainerInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeContainerInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeContainerInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeContainerInstancesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeServicesMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeServices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeServicesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskDefinitionMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskDefinitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskSetsMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskSets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskSetsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTasksMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTasks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTasksMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DiscoverPollEndpointMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113DiscoverPollEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DiscoverPollEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113DiscoverPollEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113DiscoverPollEndpointMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ExecuteCommandMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ExecuteCommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113ExecuteCommandMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113ExecuteCommand<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113ExecuteCommandMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113GetTaskProtectionMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113GetTaskProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113GetTaskProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113GetTaskProtection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113GetTaskProtectionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListAccountSettingsMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListAccountSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListAccountSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113ListAccountSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListAccountSettingsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListAttributesMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113ListAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListAttributesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListClustersMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListClustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113ListClusters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListClustersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListContainerInstancesMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListContainerInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListContainerInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113ListContainerInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListContainerInstancesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113ListServices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesByNamespaceMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesByNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesByNamespaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesByNamespace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesByNamespaceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTagsForResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionFamiliesMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionFamiliesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionFamiliesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionFamilies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionFamiliesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionsMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTasksMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTasks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113ListTasksMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSetting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingDefaultMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingDefault<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingDefaultMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAttributesMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutAttributesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutClusterCapacityProvidersMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutClusterCapacityProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutClusterCapacityProvidersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113PutClusterCapacityProviders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113PutClusterCapacityProvidersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113RegisterContainerInstanceMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113RegisterContainerInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113RegisterContainerInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113RegisterContainerInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113RegisterContainerInstanceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113RegisterTaskDefinitionMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113RegisterTaskDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113RegisterTaskDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113RegisterTaskDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113RegisterTaskDefinitionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113RunTaskMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113RunTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113RunTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113RunTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113RunTaskMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113StartTaskMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113StartTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113StartTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113StartTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113StartTaskMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113StopTaskMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113StopTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113StopTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113StopTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113StopTaskMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitAttachmentStateChangesMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitAttachmentStateChangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitAttachmentStateChangesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitAttachmentStateChanges<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitAttachmentStateChangesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitContainerStateChangeMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitContainerStateChangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitContainerStateChangeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitContainerStateChange<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitContainerStateChangeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitTaskStateChangeMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitTaskStateChangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitTaskStateChangeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitTaskStateChange<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113SubmitTaskStateChangeMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113TagResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113TagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113TagResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113UntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113UntagResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateCapacityProviderMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateCapacityProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateCapacityProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateCapacityProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateCapacityProviderMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateCluster<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterSettingsMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterSettingsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerAgentMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerAgentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerAgentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerAgent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerAgentMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerInstancesStateMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerInstancesStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerInstancesStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerInstancesState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerInstancesStateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServiceMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateService<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServiceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServicePrimaryTaskSetMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServicePrimaryTaskSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServicePrimaryTaskSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServicePrimaryTaskSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServicePrimaryTaskSetMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskProtectionMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskProtection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskProtectionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskSetMutationKey() {
  return [
    '#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet',
    '/#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskSetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskSetMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
