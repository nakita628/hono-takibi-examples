import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1alpha1Key() {
  return ['v1alpha1'] as const
}

export function getGetV1alpha1CustomersKey(
  args: InferRequestType<typeof client.v1alpha1.customers.$get>,
) {
  return ['v1alpha1', '/v1alpha1/customers', args] as const
}

export function useGetV1alpha1Customers<TError = unknown>(
  args: InferRequestType<typeof client.v1alpha1.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1CustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1Customers<TError = unknown>(
  args: InferRequestType<typeof client.v1alpha1.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1CustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1alpha1CustomersProvisionDeploymentKey() {
  return ['v1alpha1', '/v1alpha1/customers:provisionDeployment', 'POST'] as const
}

export function usePostV1alpha1CustomersProvisionDeployment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)['customers:provisionDeployment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)['customers:provisionDeployment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1CustomersProvisionDeploymentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1alpha1)['customers:provisionDeployment']['$post']>
        },
      ) =>
        parseResponse(client.v1alpha1['customers:provisionDeployment'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1InstallerGenerateSecretKey() {
  return ['v1alpha1', '/v1alpha1/installer:generateSecret', 'POST'] as const
}

export function usePostV1alpha1InstallerGenerateSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)['installer:generateSecret']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)['installer:generateSecret']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1InstallerGenerateSecretKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1alpha1)['installer:generateSecret']['$post']> },
      ) => parseResponse(client.v1alpha1['installer:generateSecret'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1InstallerValidateKey() {
  return ['v1alpha1', '/v1alpha1/installer:validate', 'POST'] as const
}

export function usePostV1alpha1InstallerValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)['installer:validate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)['installer:validate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1InstallerValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)['installer:validate']['$post']> },
      ) => parseResponse(client.v1alpha1['installer:validate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1PoliciesGetKey() {
  return ['v1alpha1', '/v1alpha1/policies:get', 'POST'] as const
}

export function usePostV1alpha1PoliciesGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)['policies:get']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)['policies:get']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1PoliciesGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)['policies:get']['$post']> },
      ) => parseResponse(client.v1alpha1['policies:get'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1PoliciesSetKey() {
  return ['v1alpha1', '/v1alpha1/policies:set', 'POST'] as const
}

export function usePostV1alpha1PoliciesSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)['policies:set']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)['policies:set']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1PoliciesSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)['policies:set']['$post']> },
      ) => parseResponse(client.v1alpha1['policies:set'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1PoliciesTestKey() {
  return ['v1alpha1', '/v1alpha1/policies:test', 'POST'] as const
}

export function usePostV1alpha1PoliciesTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)['policies:test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)['policies:test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1PoliciesTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)['policies:test']['$post']> },
      ) => parseResponse(client.v1alpha1['policies:test'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1alpha1NameKey(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:name', args] as const
}

export function useGetV1alpha1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1alpha1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1alpha1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1alpha1NameKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'DELETE'] as const
}

export function useDeleteV1alpha1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1alpha1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':name']['$delete']> },
      ) => parseResponse(client.v1alpha1[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1alpha1NameKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'PATCH'] as const
}

export function usePatchV1alpha1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1alpha1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':name']['$patch']> },
      ) => parseResponse(client.v1alpha1[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1NameMoveKey() {
  return ['v1alpha1', '/v1alpha1/:name:move', 'POST'] as const
}

export function usePostV1alpha1NameMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name:move']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name:move']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1NameMoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':name:move']['$post']> },
      ) => parseResponse(client.v1alpha1[':name:move'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1NameSignDeviceKey() {
  return ['v1alpha1', '/v1alpha1/:name:signDevice', 'POST'] as const
}

export function usePostV1alpha1NameSignDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name:signDevice']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name:signDevice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1NameSignDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':name:signDevice']['$post']> },
      ) => parseResponse(client.v1alpha1[':name:signDevice'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1alpha1NameUpdateSignedKey() {
  return ['v1alpha1', '/v1alpha1/:name:updateSigned', 'PATCH'] as const
}

export function usePatchV1alpha1NameUpdateSigned<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':name:updateSigned']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':name:updateSigned']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1alpha1NameUpdateSignedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1alpha1)[':name:updateSigned']['$patch']> },
      ) => parseResponse(client.v1alpha1[':name:updateSigned'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1alpha1ParentDeploymentsKey(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['deployments']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/deployments', args] as const
}

export function useGetV1alpha1ParentDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['deployments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ParentDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':parent'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1ParentDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['deployments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ParentDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':parent'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1alpha1ParentDeploymentsKey() {
  return ['v1alpha1', '/v1alpha1/:parent/deployments', 'POST'] as const
}

export function usePostV1alpha1ParentDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['deployments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':parent']['deployments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1ParentDeploymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1alpha1)[':parent']['deployments']['$post']> },
      ) => parseResponse(client.v1alpha1[':parent'].deployments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1alpha1ParentDevicesKey(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['devices']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/devices', args] as const
}

export function useGetV1alpha1ParentDevices<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['devices']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ParentDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':parent'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1ParentDevices<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['devices']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ParentDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':parent'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1alpha1ParentDevicesKey() {
  return ['v1alpha1', '/v1alpha1/:parent/devices', 'POST'] as const
}

export function usePostV1alpha1ParentDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['devices']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':parent']['devices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1ParentDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':parent']['devices']['$post']> },
      ) => parseResponse(client.v1alpha1[':parent'].devices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1ParentDevicesCreateSignedKey() {
  return ['v1alpha1', '/v1alpha1/:parent/devices:createSigned', 'POST'] as const
}

export function usePostV1alpha1ParentDevicesCreateSigned<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['devices:createSigned']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':parent']['devices:createSigned']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1ParentDevicesCreateSignedKey()
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
            (typeof client.v1alpha1)[':parent']['devices:createSigned']['$post']
          >
        },
      ) =>
        parseResponse(client.v1alpha1[':parent']['devices:createSigned'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1alpha1ParentNodesKey(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['nodes']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/nodes', args] as const
}

export function useGetV1alpha1ParentNodes<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['nodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['nodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ParentNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['nodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':parent'].nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1alpha1ParentNodes<TError = unknown>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['nodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['nodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1alpha1ParentNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['nodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1alpha1[':parent'].nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1alpha1ParentNodesKey() {
  return ['v1alpha1', '/v1alpha1/:parent/nodes', 'POST'] as const
}

export function usePostV1alpha1ParentNodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['nodes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)[':parent']['nodes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1ParentNodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)[':parent']['nodes']['$post']> },
      ) => parseResponse(client.v1alpha1[':parent'].nodes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
