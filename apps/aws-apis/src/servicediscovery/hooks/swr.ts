import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetRoute53AutoNamingV20170314CreateHttpNamespaceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespaceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespaceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314CreateServiceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.CreateService'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314DeleteNamespaceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314DeleteServiceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314DeregisterInstanceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314DiscoverInstancesKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314GetInstanceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatusKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314GetNamespaceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314GetOperationKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314GetServiceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.GetService'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314ListInstancesKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314ListNamespacesKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314ListOperationsKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314ListServicesKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.ListServices'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314ListTagsForResourceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314RegisterInstanceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314TagResourceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.TagResource'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314UntagResourceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespaceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatusKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespaceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespaceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace'] as const
}

export function getXAmzTargetRoute53AutoNamingV20170314UpdateServiceKey() {
  return ['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService'] as const
}

export function getPostXAmzTargetRoute53AutoNamingV20170314CreateHttpNamespaceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314CreateHttpNamespace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314CreateHttpNamespaceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespaceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespaceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespaceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespaceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314CreateServiceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.CreateService',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.CreateService',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314CreateService<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateService']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateService']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314CreateServiceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateService']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.CreateService'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314DeleteNamespaceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314DeleteNamespace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314DeleteNamespaceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314DeleteServiceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314DeleteService<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314DeleteServiceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314DeregisterInstanceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314DeregisterInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314DeregisterInstanceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314DiscoverInstancesKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314DiscoverInstances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314DiscoverInstancesKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314GetInstanceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314GetInstance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314GetInstanceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatusKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatusKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314GetNamespaceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314GetNamespace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314GetNamespaceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314GetOperationKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314GetOperation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314GetOperationKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314GetServiceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.GetService',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.GetService',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314GetService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetService']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetService']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314GetServiceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetService']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.GetService'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314ListInstancesKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314ListInstances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314ListInstancesKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314ListNamespacesKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314ListNamespaces<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314ListNamespacesKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314ListOperationsKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314ListOperations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314ListOperationsKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314ListServicesKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.ListServices',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListServices',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314ListServices<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListServices']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListServices']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314ListServicesKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListServices']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.ListServices'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314ListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314RegisterInstanceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314RegisterInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314RegisterInstanceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314TagResourceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.TagResource',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.TagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314TagResourceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314UntagResourceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314UntagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespaceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespaceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatusKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatusKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespaceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespaceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespaceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespaceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRoute53AutoNamingV20170314UpdateServiceKey() {
  return [
    '#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService',
    '/#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService',
    'POST',
  ] as const
}

export function usePostXAmzTargetRoute53AutoNamingV20170314UpdateService<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRoute53AutoNamingV20170314UpdateServiceKey()
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
            (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
