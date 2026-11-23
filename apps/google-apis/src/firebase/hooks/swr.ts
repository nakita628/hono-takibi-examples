import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getGetV1beta1AvailableProjectsKey(
  args: InferRequestType<typeof client.v1beta1.availableProjects.$get>,
) {
  return ['v1beta1', '/v1beta1/availableProjects', args] as const
}

export function useGetV1beta1AvailableProjects<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.availableProjects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.availableProjects.$get>>>
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
        ? getGetV1beta1AvailableProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.availableProjects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.availableProjects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1AvailableProjects<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.availableProjects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.availableProjects.$get>>>
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
        ? getGetV1beta1AvailableProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.availableProjects.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.availableProjects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1ProjectsKey(
  args: InferRequestType<typeof client.v1beta1.projects.$get>,
) {
  return ['v1beta1', '/v1beta1/projects', args] as const
}

export function useGetV1beta1Projects<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.projects.$get>>>>
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
        ? getGetV1beta1ProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1Projects<TError = unknown>(
  args: InferRequestType<typeof client.v1beta1.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.projects.$get>>>>
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
        ? getGetV1beta1ProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta1.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1NameKey(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:name', args] as const
}

export function useGetV1beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1beta1NameKey() {
  return ['v1beta1', '/v1beta1/:name', 'DELETE'] as const
}

export function useDeleteV1beta1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1beta1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name']['$delete']> },
      ) => parseResponse(client.v1beta1[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1beta1NameKey() {
  return ['v1beta1', '/v1beta1/:name', 'PATCH'] as const
}

export function usePatchV1beta1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1beta1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name']['$patch']> },
      ) => parseResponse(client.v1beta1[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameRemoveKey() {
  return ['v1beta1', '/v1beta1/:name:remove', 'POST'] as const
}

export function usePostV1beta1NameRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:remove']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:remove']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameRemoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name:remove']['$post']> },
      ) => parseResponse(client.v1beta1[':name:remove'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameUndeleteKey() {
  return ['v1beta1', '/v1beta1/:name:undelete', 'POST'] as const
}

export function usePostV1beta1NameUndelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:undelete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:undelete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameUndeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name:undelete']['$post']> },
      ) => parseResponse(client.v1beta1[':name:undelete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ParentAndroidAppsKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['androidApps']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/androidApps', args] as const
}

export function useGetV1beta1ParentAndroidApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['androidApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['androidApps']['$get']>>
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
        ? getGetV1beta1ParentAndroidAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['androidApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].androidApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ParentAndroidApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['androidApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['androidApps']['$get']>>
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
        ? getGetV1beta1ParentAndroidAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['androidApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].androidApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1ParentAndroidAppsKey() {
  return ['v1beta1', '/v1beta1/:parent/androidApps', 'POST'] as const
}

export function usePostV1beta1ParentAndroidApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['androidApps']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':parent']['androidApps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ParentAndroidAppsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta1)[':parent']['androidApps']['$post']> },
      ) => parseResponse(client.v1beta1[':parent'].androidApps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ParentAvailableLocationsKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['availableLocations']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/availableLocations', args] as const
}

export function useGetV1beta1ParentAvailableLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['availableLocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['availableLocations']['$get']>>
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
        ? getGetV1beta1ParentAvailableLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['availableLocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1[':parent'].availableLocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ParentAvailableLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['availableLocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['availableLocations']['$get']>>
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
        ? getGetV1beta1ParentAvailableLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['availableLocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1beta1[':parent'].availableLocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1ParentDefaultLocationFinalizeKey() {
  return ['v1beta1', '/v1beta1/:parent/defaultLocation:finalize', 'POST'] as const
}

export function usePostV1beta1ParentDefaultLocationFinalize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta1)[':parent']['defaultLocation:finalize']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':parent']['defaultLocation:finalize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ParentDefaultLocationFinalizeKey()
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
            (typeof client.v1beta1)[':parent']['defaultLocation:finalize']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1[':parent']['defaultLocation:finalize'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ParentIosAppsKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['iosApps']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/iosApps', args] as const
}

export function useGetV1beta1ParentIosApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['iosApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['iosApps']['$get']>>
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
        ? getGetV1beta1ParentIosAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['iosApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].iosApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ParentIosApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['iosApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['iosApps']['$get']>>
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
        ? getGetV1beta1ParentIosAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['iosApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].iosApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1ParentIosAppsKey() {
  return ['v1beta1', '/v1beta1/:parent/iosApps', 'POST'] as const
}

export function usePostV1beta1ParentIosApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['iosApps']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':parent']['iosApps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ParentIosAppsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':parent']['iosApps']['$post']> },
      ) => parseResponse(client.v1beta1[':parent'].iosApps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ParentShaKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['sha']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/sha', args] as const
}

export function useGetV1beta1ParentSha<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['sha']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['sha']['$get']>>
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
        ? getGetV1beta1ParentShaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['sha']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].sha.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ParentSha<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['sha']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['sha']['$get']>>
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
        ? getGetV1beta1ParentShaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['sha']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].sha.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1ParentShaKey() {
  return ['v1beta1', '/v1beta1/:parent/sha', 'POST'] as const
}

export function usePostV1beta1ParentSha<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['sha']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':parent']['sha']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ParentShaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':parent']['sha']['$post']> },
      ) => parseResponse(client.v1beta1[':parent'].sha.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ParentWebAppsKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['webApps']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/webApps', args] as const
}

export function useGetV1beta1ParentWebApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['webApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['webApps']['$get']>>
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
        ? getGetV1beta1ParentWebAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['webApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].webApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ParentWebApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['webApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['webApps']['$get']>>
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
        ? getGetV1beta1ParentWebAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['webApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].webApps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1ParentWebAppsKey() {
  return ['v1beta1', '/v1beta1/:parent/webApps', 'POST'] as const
}

export function usePostV1beta1ParentWebApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['webApps']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':parent']['webApps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ParentWebAppsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':parent']['webApps']['$post']> },
      ) => parseResponse(client.v1beta1[':parent'].webApps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ParentAddGoogleAnalyticsKey() {
  return ['v1beta1', '/v1beta1/:parent:addGoogleAnalytics', 'POST'] as const
}

export function usePostV1beta1ParentAddGoogleAnalytics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent:addGoogleAnalytics']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':parent:addGoogleAnalytics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ParentAddGoogleAnalyticsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1beta1)[':parent:addGoogleAnalytics']['$post']>
        },
      ) => parseResponse(client.v1beta1[':parent:addGoogleAnalytics'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ParentRemoveAnalyticsKey() {
  return ['v1beta1', '/v1beta1/:parent:removeAnalytics', 'POST'] as const
}

export function usePostV1beta1ParentRemoveAnalytics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent:removeAnalytics']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':parent:removeAnalytics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ParentRemoveAnalyticsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta1)[':parent:removeAnalytics']['$post']> },
      ) => parseResponse(client.v1beta1[':parent:removeAnalytics'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ParentSearchAppsKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent:searchApps']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent:searchApps', args] as const
}

export function useGetV1beta1ParentSearchApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent:searchApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent:searchApps']['$get']>>
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
        ? getGetV1beta1ParentSearchAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent:searchApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent:searchApps'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ParentSearchApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent:searchApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent:searchApps']['$get']>>
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
        ? getGetV1beta1ParentSearchAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent:searchApps']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent:searchApps'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1ProjectAddFirebaseKey() {
  return ['v1beta1', '/v1beta1/:project:addFirebase', 'POST'] as const
}

export function usePostV1beta1ProjectAddFirebase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':project:addFirebase']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':project:addFirebase']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ProjectAddFirebaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta1)[':project:addFirebase']['$post']> },
      ) => parseResponse(client.v1beta1[':project:addFirebase'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
