import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1beta2Key() {
  return ['v1beta2'] as const
}

export function getPostV1beta2InstanceApplySoftwareUpdateKey() {
  return ['v1beta2', '/v1beta2/:instance:applySoftwareUpdate', 'POST'] as const
}

export function usePostV1beta2InstanceApplySoftwareUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':instance:applySoftwareUpdate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta2)[':instance:applySoftwareUpdate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta2InstanceApplySoftwareUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1beta2)[':instance:applySoftwareUpdate']['$post']>
        },
      ) => parseResponse(client.v1beta2[':instance:applySoftwareUpdate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta2InstanceRescheduleMaintenanceKey() {
  return ['v1beta2', '/v1beta2/:instance:rescheduleMaintenance', 'POST'] as const
}

export function usePostV1beta2InstanceRescheduleMaintenance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':instance:rescheduleMaintenance']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta2)[':instance:rescheduleMaintenance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta2InstanceRescheduleMaintenanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1beta2)[':instance:rescheduleMaintenance']['$post']>
        },
      ) =>
        parseResponse(client.v1beta2[':instance:rescheduleMaintenance'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta2NameKey(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$get']>,
) {
  return ['v1beta2', '/v1beta2/:name', args] as const
}

export function useGetV1beta2Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1beta2NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta2[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta2Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta2)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1beta2NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta2[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1beta2NameKey() {
  return ['v1beta2', '/v1beta2/:name', 'DELETE'] as const
}

export function useDeleteV1beta2Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta2)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1beta2NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta2)[':name']['$delete']> },
      ) => parseResponse(client.v1beta2[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1beta2NameKey() {
  return ['v1beta2', '/v1beta2/:name', 'PATCH'] as const
}

export function usePatchV1beta2Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta2)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1beta2NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta2)[':name']['$patch']> },
      ) => parseResponse(client.v1beta2[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta2NameLocationsKey(
  args: InferRequestType<(typeof client.v1beta2)[':name']['locations']['$get']>,
) {
  return ['v1beta2', '/v1beta2/:name/locations', args] as const
}

export function useGetV1beta2NameLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta2)[':name']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta2)[':name']['locations']['$get']>>
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
        ? getGetV1beta2NameLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta2)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta2[':name'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta2NameLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta2)[':name']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta2)[':name']['locations']['$get']>>
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
        ? getGetV1beta2NameLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta2)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta2[':name'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta2NameOperationsKey(
  args: InferRequestType<(typeof client.v1beta2)[':name']['operations']['$get']>,
) {
  return ['v1beta2', '/v1beta2/:name/operations', args] as const
}

export function useGetV1beta2NameOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta2)[':name']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta2)[':name']['operations']['$get']>>
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
        ? getGetV1beta2NameOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta2)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta2[':name'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta2NameOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta2)[':name']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta2)[':name']['operations']['$get']>>
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
        ? getGetV1beta2NameOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta2)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta2[':name'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta2NameApplyParametersKey() {
  return ['v1beta2', '/v1beta2/:name:applyParameters', 'POST'] as const
}

export function usePostV1beta2NameApplyParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':name:applyParameters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta2)[':name:applyParameters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta2NameApplyParametersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta2)[':name:applyParameters']['$post']> },
      ) => parseResponse(client.v1beta2[':name:applyParameters'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta2NameCancelKey() {
  return ['v1beta2', '/v1beta2/:name:cancel', 'POST'] as const
}

export function usePostV1beta2NameCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta2)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta2)[':name:cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta2NameCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta2)[':name:cancel']['$post']> },
      ) => parseResponse(client.v1beta2[':name:cancel'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1beta2NameUpdateParametersKey() {
  return ['v1beta2', '/v1beta2/:name:updateParameters', 'PATCH'] as const
}

export function usePatchV1beta2NameUpdateParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':name:updateParameters']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta2)[':name:updateParameters']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1beta2NameUpdateParametersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta2)[':name:updateParameters']['$patch']> },
      ) => parseResponse(client.v1beta2[':name:updateParameters'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta2ParentInstancesKey(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['instances']['$get']>,
) {
  return ['v1beta2', '/v1beta2/:parent/instances', args] as const
}

export function useGetV1beta2ParentInstances<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta2)[':parent']['instances']['$get']>>
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
        ? getGetV1beta2ParentInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta2)[':parent']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta2[':parent'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta2ParentInstances<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta2)[':parent']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta2)[':parent']['instances']['$get']>>
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
        ? getGetV1beta2ParentInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta2)[':parent']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta2[':parent'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta2ParentInstancesKey() {
  return ['v1beta2', '/v1beta2/:parent/instances', 'POST'] as const
}

export function usePostV1beta2ParentInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta2)[':parent']['instances']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta2)[':parent']['instances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta2ParentInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta2)[':parent']['instances']['$post']> },
      ) => parseResponse(client.v1beta2[':parent'].instances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
