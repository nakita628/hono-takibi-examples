import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAppRunnerAssociateCustomDomainKey() {
  return ['#X-Amz-Target=AppRunner.AssociateCustomDomain'] as const
}

export function getXAmzTargetAppRunnerCreateAutoScalingConfigurationKey() {
  return ['#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration'] as const
}

export function getXAmzTargetAppRunnerCreateConnectionKey() {
  return ['#X-Amz-Target=AppRunner.CreateConnection'] as const
}

export function getXAmzTargetAppRunnerCreateObservabilityConfigurationKey() {
  return ['#X-Amz-Target=AppRunner.CreateObservabilityConfiguration'] as const
}

export function getXAmzTargetAppRunnerCreateServiceKey() {
  return ['#X-Amz-Target=AppRunner.CreateService'] as const
}

export function getXAmzTargetAppRunnerCreateVpcConnectorKey() {
  return ['#X-Amz-Target=AppRunner.CreateVpcConnector'] as const
}

export function getXAmzTargetAppRunnerCreateVpcIngressConnectionKey() {
  return ['#X-Amz-Target=AppRunner.CreateVpcIngressConnection'] as const
}

export function getXAmzTargetAppRunnerDeleteAutoScalingConfigurationKey() {
  return ['#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration'] as const
}

export function getXAmzTargetAppRunnerDeleteConnectionKey() {
  return ['#X-Amz-Target=AppRunner.DeleteConnection'] as const
}

export function getXAmzTargetAppRunnerDeleteObservabilityConfigurationKey() {
  return ['#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration'] as const
}

export function getXAmzTargetAppRunnerDeleteServiceKey() {
  return ['#X-Amz-Target=AppRunner.DeleteService'] as const
}

export function getXAmzTargetAppRunnerDeleteVpcConnectorKey() {
  return ['#X-Amz-Target=AppRunner.DeleteVpcConnector'] as const
}

export function getXAmzTargetAppRunnerDeleteVpcIngressConnectionKey() {
  return ['#X-Amz-Target=AppRunner.DeleteVpcIngressConnection'] as const
}

export function getXAmzTargetAppRunnerDescribeAutoScalingConfigurationKey() {
  return ['#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration'] as const
}

export function getXAmzTargetAppRunnerDescribeCustomDomainsKey() {
  return ['#X-Amz-Target=AppRunner.DescribeCustomDomains'] as const
}

export function getXAmzTargetAppRunnerDescribeObservabilityConfigurationKey() {
  return ['#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration'] as const
}

export function getXAmzTargetAppRunnerDescribeServiceKey() {
  return ['#X-Amz-Target=AppRunner.DescribeService'] as const
}

export function getXAmzTargetAppRunnerDescribeVpcConnectorKey() {
  return ['#X-Amz-Target=AppRunner.DescribeVpcConnector'] as const
}

export function getXAmzTargetAppRunnerDescribeVpcIngressConnectionKey() {
  return ['#X-Amz-Target=AppRunner.DescribeVpcIngressConnection'] as const
}

export function getXAmzTargetAppRunnerDisassociateCustomDomainKey() {
  return ['#X-Amz-Target=AppRunner.DisassociateCustomDomain'] as const
}

export function getXAmzTargetAppRunnerListAutoScalingConfigurationsKey() {
  return ['#X-Amz-Target=AppRunner.ListAutoScalingConfigurations'] as const
}

export function getXAmzTargetAppRunnerListConnectionsKey() {
  return ['#X-Amz-Target=AppRunner.ListConnections'] as const
}

export function getXAmzTargetAppRunnerListObservabilityConfigurationsKey() {
  return ['#X-Amz-Target=AppRunner.ListObservabilityConfigurations'] as const
}

export function getXAmzTargetAppRunnerListOperationsKey() {
  return ['#X-Amz-Target=AppRunner.ListOperations'] as const
}

export function getXAmzTargetAppRunnerListServicesKey() {
  return ['#X-Amz-Target=AppRunner.ListServices'] as const
}

export function getXAmzTargetAppRunnerListTagsForResourceKey() {
  return ['#X-Amz-Target=AppRunner.ListTagsForResource'] as const
}

export function getXAmzTargetAppRunnerListVpcConnectorsKey() {
  return ['#X-Amz-Target=AppRunner.ListVpcConnectors'] as const
}

export function getXAmzTargetAppRunnerListVpcIngressConnectionsKey() {
  return ['#X-Amz-Target=AppRunner.ListVpcIngressConnections'] as const
}

export function getXAmzTargetAppRunnerPauseServiceKey() {
  return ['#X-Amz-Target=AppRunner.PauseService'] as const
}

export function getXAmzTargetAppRunnerResumeServiceKey() {
  return ['#X-Amz-Target=AppRunner.ResumeService'] as const
}

export function getXAmzTargetAppRunnerStartDeploymentKey() {
  return ['#X-Amz-Target=AppRunner.StartDeployment'] as const
}

export function getXAmzTargetAppRunnerTagResourceKey() {
  return ['#X-Amz-Target=AppRunner.TagResource'] as const
}

export function getXAmzTargetAppRunnerUntagResourceKey() {
  return ['#X-Amz-Target=AppRunner.UntagResource'] as const
}

export function getXAmzTargetAppRunnerUpdateServiceKey() {
  return ['#X-Amz-Target=AppRunner.UpdateService'] as const
}

export function getXAmzTargetAppRunnerUpdateVpcIngressConnectionKey() {
  return ['#X-Amz-Target=AppRunner.UpdateVpcIngressConnection'] as const
}

export function getPostXAmzTargetAppRunnerAssociateCustomDomainKey() {
  return [
    '#X-Amz-Target=AppRunner.AssociateCustomDomain',
    '/#X-Amz-Target=AppRunner.AssociateCustomDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerAssociateCustomDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AppRunner.AssociateCustomDomain']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.AssociateCustomDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerAssociateCustomDomainKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.AssociateCustomDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.AssociateCustomDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerCreateAutoScalingConfigurationKey() {
  return [
    '#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration',
    '/#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerCreateAutoScalingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerCreateAutoScalingConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerCreateConnectionKey() {
  return [
    '#X-Amz-Target=AppRunner.CreateConnection',
    '/#X-Amz-Target=AppRunner.CreateConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerCreateConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.CreateConnection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.CreateConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerCreateConnectionKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.CreateConnection']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AppRunner.CreateConnection'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerCreateObservabilityConfigurationKey() {
  return [
    '#X-Amz-Target=AppRunner.CreateObservabilityConfiguration',
    '/#X-Amz-Target=AppRunner.CreateObservabilityConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerCreateObservabilityConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.CreateObservabilityConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.CreateObservabilityConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerCreateObservabilityConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.CreateObservabilityConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.CreateObservabilityConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerCreateServiceKey() {
  return [
    '#X-Amz-Target=AppRunner.CreateService',
    '/#X-Amz-Target=AppRunner.CreateService',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerCreateService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.CreateService']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.CreateService']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerCreateServiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.CreateService']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AppRunner.CreateService'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerCreateVpcConnectorKey() {
  return [
    '#X-Amz-Target=AppRunner.CreateVpcConnector',
    '/#X-Amz-Target=AppRunner.CreateVpcConnector',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerCreateVpcConnector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AppRunner.CreateVpcConnector']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.CreateVpcConnector']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerCreateVpcConnectorKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.CreateVpcConnector']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.CreateVpcConnector'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerCreateVpcIngressConnectionKey() {
  return [
    '#X-Amz-Target=AppRunner.CreateVpcIngressConnection',
    '/#X-Amz-Target=AppRunner.CreateVpcIngressConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerCreateVpcIngressConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.CreateVpcIngressConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.CreateVpcIngressConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerCreateVpcIngressConnectionKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.CreateVpcIngressConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.CreateVpcIngressConnection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerDeleteAutoScalingConfigurationKey() {
  return [
    '#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration',
    '/#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerDeleteAutoScalingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerDeleteAutoScalingConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerDeleteConnectionKey() {
  return [
    '#X-Amz-Target=AppRunner.DeleteConnection',
    '/#X-Amz-Target=AppRunner.DeleteConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerDeleteConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DeleteConnection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DeleteConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerDeleteConnectionKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.DeleteConnection']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AppRunner.DeleteConnection'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerDeleteObservabilityConfigurationKey() {
  return [
    '#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration',
    '/#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerDeleteObservabilityConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerDeleteObservabilityConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerDeleteServiceKey() {
  return [
    '#X-Amz-Target=AppRunner.DeleteService',
    '/#X-Amz-Target=AppRunner.DeleteService',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerDeleteService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DeleteService']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DeleteService']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerDeleteServiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DeleteService']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AppRunner.DeleteService'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerDeleteVpcConnectorKey() {
  return [
    '#X-Amz-Target=AppRunner.DeleteVpcConnector',
    '/#X-Amz-Target=AppRunner.DeleteVpcConnector',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerDeleteVpcConnector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DeleteVpcConnector']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DeleteVpcConnector']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerDeleteVpcConnectorKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.DeleteVpcConnector']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.DeleteVpcConnector'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerDeleteVpcIngressConnectionKey() {
  return [
    '#X-Amz-Target=AppRunner.DeleteVpcIngressConnection',
    '/#X-Amz-Target=AppRunner.DeleteVpcIngressConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerDeleteVpcIngressConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.DeleteVpcIngressConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DeleteVpcIngressConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerDeleteVpcIngressConnectionKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.DeleteVpcIngressConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.DeleteVpcIngressConnection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerDescribeAutoScalingConfigurationKey() {
  return [
    '#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration',
    '/#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerDescribeAutoScalingConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerDescribeAutoScalingConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerDescribeCustomDomainsKey() {
  return [
    '#X-Amz-Target=AppRunner.DescribeCustomDomains',
    '/#X-Amz-Target=AppRunner.DescribeCustomDomains',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerDescribeCustomDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DescribeCustomDomains']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DescribeCustomDomains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerDescribeCustomDomainsKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.DescribeCustomDomains']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.DescribeCustomDomains'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerDescribeObservabilityConfigurationKey() {
  return [
    '#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration',
    '/#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerDescribeObservabilityConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerDescribeObservabilityConfigurationKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerDescribeServiceKey() {
  return [
    '#X-Amz-Target=AppRunner.DescribeService',
    '/#X-Amz-Target=AppRunner.DescribeService',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerDescribeService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DescribeService']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DescribeService']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerDescribeServiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DescribeService']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AppRunner.DescribeService'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerDescribeVpcConnectorKey() {
  return [
    '#X-Amz-Target=AppRunner.DescribeVpcConnector',
    '/#X-Amz-Target=AppRunner.DescribeVpcConnector',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerDescribeVpcConnector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DescribeVpcConnector']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DescribeVpcConnector']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerDescribeVpcConnectorKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.DescribeVpcConnector']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.DescribeVpcConnector'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerDescribeVpcIngressConnectionKey() {
  return [
    '#X-Amz-Target=AppRunner.DescribeVpcIngressConnection',
    '/#X-Amz-Target=AppRunner.DescribeVpcIngressConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerDescribeVpcIngressConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.DescribeVpcIngressConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.DescribeVpcIngressConnection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerDescribeVpcIngressConnectionKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.DescribeVpcIngressConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.DescribeVpcIngressConnection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerDisassociateCustomDomainKey() {
  return [
    '#X-Amz-Target=AppRunner.DisassociateCustomDomain',
    '/#X-Amz-Target=AppRunner.DisassociateCustomDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerDisassociateCustomDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AppRunner.DisassociateCustomDomain']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.DisassociateCustomDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerDisassociateCustomDomainKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.DisassociateCustomDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.DisassociateCustomDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerListAutoScalingConfigurationsKey() {
  return [
    '#X-Amz-Target=AppRunner.ListAutoScalingConfigurations',
    '/#X-Amz-Target=AppRunner.ListAutoScalingConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerListAutoScalingConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.ListAutoScalingConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.ListAutoScalingConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerListAutoScalingConfigurationsKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.ListAutoScalingConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.ListAutoScalingConfigurations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerListConnectionsKey() {
  return [
    '#X-Amz-Target=AppRunner.ListConnections',
    '/#X-Amz-Target=AppRunner.ListConnections',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerListConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.ListConnections']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListConnections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerListConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListConnections']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AppRunner.ListConnections'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerListObservabilityConfigurationsKey() {
  return [
    '#X-Amz-Target=AppRunner.ListObservabilityConfigurations',
    '/#X-Amz-Target=AppRunner.ListObservabilityConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerListObservabilityConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.ListObservabilityConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AppRunner.ListObservabilityConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerListObservabilityConfigurationsKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.ListObservabilityConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.ListObservabilityConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerListOperationsKey() {
  return [
    '#X-Amz-Target=AppRunner.ListOperations',
    '/#X-Amz-Target=AppRunner.ListOperations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerListOperations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.ListOperations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListOperations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerListOperationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListOperations']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AppRunner.ListOperations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerListServicesKey() {
  return [
    '#X-Amz-Target=AppRunner.ListServices',
    '/#X-Amz-Target=AppRunner.ListServices',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerListServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.ListServices']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListServices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerListServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListServices']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AppRunner.ListServices'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AppRunner.ListTagsForResource',
    '/#X-Amz-Target=AppRunner.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AppRunner.ListTagsForResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerListVpcConnectorsKey() {
  return [
    '#X-Amz-Target=AppRunner.ListVpcConnectors',
    '/#X-Amz-Target=AppRunner.ListVpcConnectors',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerListVpcConnectors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.ListVpcConnectors']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListVpcConnectors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerListVpcConnectorsKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.ListVpcConnectors']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.ListVpcConnectors'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerListVpcIngressConnectionsKey() {
  return [
    '#X-Amz-Target=AppRunner.ListVpcIngressConnections',
    '/#X-Amz-Target=AppRunner.ListVpcIngressConnections',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerListVpcIngressConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.ListVpcIngressConnections']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ListVpcIngressConnections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerListVpcIngressConnectionsKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.ListVpcIngressConnections']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.ListVpcIngressConnections'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerPauseServiceKey() {
  return [
    '#X-Amz-Target=AppRunner.PauseService',
    '/#X-Amz-Target=AppRunner.PauseService',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerPauseService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.PauseService']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.PauseService']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerPauseServiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.PauseService']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AppRunner.PauseService'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerResumeServiceKey() {
  return [
    '#X-Amz-Target=AppRunner.ResumeService',
    '/#X-Amz-Target=AppRunner.ResumeService',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerResumeService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.ResumeService']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ResumeService']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerResumeServiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.ResumeService']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AppRunner.ResumeService'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerStartDeploymentKey() {
  return [
    '#X-Amz-Target=AppRunner.StartDeployment',
    '/#X-Amz-Target=AppRunner.StartDeployment',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerStartDeployment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.StartDeployment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.StartDeployment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerStartDeploymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.StartDeployment']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AppRunner.StartDeployment'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerTagResourceKey() {
  return [
    '#X-Amz-Target=AppRunner.TagResource',
    '/#X-Amz-Target=AppRunner.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.TagResource']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AppRunner.TagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerUntagResourceKey() {
  return [
    '#X-Amz-Target=AppRunner.UntagResource',
    '/#X-Amz-Target=AppRunner.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.UntagResource']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AppRunner.UntagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerUpdateServiceKey() {
  return [
    '#X-Amz-Target=AppRunner.UpdateService',
    '/#X-Amz-Target=AppRunner.UpdateService',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerUpdateService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AppRunner.UpdateService']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.UpdateService']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerUpdateServiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.UpdateService']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AppRunner.UpdateService'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAppRunnerUpdateVpcIngressConnectionKey() {
  return [
    '#X-Amz-Target=AppRunner.UpdateVpcIngressConnection',
    '/#X-Amz-Target=AppRunner.UpdateVpcIngressConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetAppRunnerUpdateVpcIngressConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AppRunner.UpdateVpcIngressConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AppRunner.UpdateVpcIngressConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAppRunnerUpdateVpcIngressConnectionKey()
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
            (typeof client)['#X-Amz-Target=AppRunner.UpdateVpcIngressConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AppRunner.UpdateVpcIngressConnection'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
