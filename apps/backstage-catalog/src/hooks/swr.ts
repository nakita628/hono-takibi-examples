import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnalyzeLocationKey() {
  return ['analyze-location'] as const
}

export function getEntitiesKey() {
  return ['entities'] as const
}

export function getEntityFacetsKey() {
  return ['entity-facets'] as const
}

export function getLocationsKey() {
  return ['locations'] as const
}

export function getRefreshKey() {
  return ['refresh'] as const
}

export function getValidateEntityKey() {
  return ['validate-entity'] as const
}

export function getPostRefreshKey() {
  return ['refresh', '/refresh', 'POST'] as const
}

export function usePostRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.refresh.$post> }) =>
        parseResponse(client.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEntitiesKey(args: InferRequestType<typeof client.entities.$get>) {
  return ['entities', '/entities', args] as const
}

export function useGetEntities<TError = unknown>(
  args: InferRequestType<typeof client.entities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEntitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.entities.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEntities<TError = unknown>(
  args: InferRequestType<typeof client.entities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEntitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.entities.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEntitiesByUidUidKey(
  args: InferRequestType<(typeof client.entities)['by-uid'][':uid']['$get']>,
) {
  return ['entities', '/entities/by-uid/:uid', args] as const
}

export function useGetEntitiesByUidUid<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['by-uid'][':uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['by-uid'][':uid']['$get']>>
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
        ? getGetEntitiesByUidUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['by-uid'][':uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['by-uid'][':uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesByUidUid<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['by-uid'][':uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['by-uid'][':uid']['$get']>>
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
        ? getGetEntitiesByUidUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['by-uid'][':uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['by-uid'][':uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEntitiesByUidUidKey() {
  return ['entities', '/entities/by-uid/:uid', 'DELETE'] as const
}

export function useDeleteEntitiesByUidUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['by-uid'][':uid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.entities)['by-uid'][':uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEntitiesByUidUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.entities)['by-uid'][':uid']['$delete']> },
      ) => parseResponse(client.entities['by-uid'][':uid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEntitiesByNameKindNamespaceNameKey(
  args: InferRequestType<
    (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['$get']
  >,
) {
  return ['entities', '/entities/by-name/:kind/:namespace/:name', args] as const
}

export function useGetEntitiesByNameKindNamespaceName<TError = unknown>(
  args: InferRequestType<
    (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['$get']
              >
            >
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
        ? getGetEntitiesByNameKindNamespaceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entities['by-name'][':kind'][':namespace'][':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesByNameKindNamespaceName<TError = unknown>(
  args: InferRequestType<
    (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['$get']
              >
            >
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
        ? getGetEntitiesByNameKindNamespaceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entities['by-name'][':kind'][':namespace'][':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEntitiesByNameKindNamespaceNameAncestryKey(
  args: InferRequestType<
    (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['ancestry']['$get']
  >,
) {
  return ['entities', '/entities/by-name/:kind/:namespace/:name/ancestry', args] as const
}

export function useGetEntitiesByNameKindNamespaceNameAncestry<TError = unknown>(
  args: InferRequestType<
    (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['ancestry']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['ancestry']['$get']
              >
            >
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
        ? getGetEntitiesByNameKindNamespaceNameAncestryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['ancestry']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entities['by-name'][':kind'][':namespace'][':name'].ancestry.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesByNameKindNamespaceNameAncestry<TError = unknown>(
  args: InferRequestType<
    (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['ancestry']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['ancestry']['$get']
              >
            >
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
        ? getGetEntitiesByNameKindNamespaceNameAncestryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['ancestry']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.entities['by-name'][':kind'][':namespace'][':name'].ancestry.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEntitiesByRefsKey() {
  return ['entities', '/entities/by-refs', 'POST'] as const
}

export function usePostEntitiesByRefs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['by-refs']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.entities)['by-refs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEntitiesByRefsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.entities)['by-refs']['$post']> },
      ) => parseResponse(client.entities['by-refs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEntitiesByQueryKey(
  args: InferRequestType<(typeof client.entities)['by-query']['$get']>,
) {
  return ['entities', '/entities/by-query', args] as const
}

export function useGetEntitiesByQuery<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['by-query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['by-query']['$get']>>>
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
        ? getGetEntitiesByQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['by-query']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['by-query'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntitiesByQuery<TError = unknown>(
  args: InferRequestType<(typeof client.entities)['by-query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['by-query']['$get']>>>
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
        ? getGetEntitiesByQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['by-query']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.entities['by-query'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEntitiesByQueryKey() {
  return ['entities', '/entities/by-query', 'POST'] as const
}

export function usePostEntitiesByQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['by-query']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.entities)['by-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEntitiesByQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.entities)['by-query']['$post']> },
      ) => parseResponse(client.entities['by-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEntityFacetsKey(
  args: InferRequestType<(typeof client)['entity-facets']['$get']>,
) {
  return ['entity-facets', '/entity-facets', args] as const
}

export function useGetEntityFacets<TError = unknown>(
  args: InferRequestType<(typeof client)['entity-facets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['entity-facets']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEntityFacetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['entity-facets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['entity-facets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEntityFacets<TError = unknown>(
  args: InferRequestType<(typeof client)['entity-facets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['entity-facets']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEntityFacetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['entity-facets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['entity-facets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEntityFacetsKey() {
  return ['entity-facets', '/entity-facets', 'POST'] as const
}

export function usePostEntityFacets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['entity-facets']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['entity-facets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEntityFacetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['entity-facets']['$post']> },
      ) => parseResponse(client['entity-facets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLocationsKey() {
  return ['locations', '/locations'] as const
}

export function useGetLocations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLocationsKey() {
  return ['locations', '/locations', 'POST'] as const
}

export function usePostLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.locations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.locations.$post> }) =>
        parseResponse(client.locations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLocationsByQueryKey() {
  return ['locations', '/locations/by-query', 'POST'] as const
}

export function usePostLocationsByQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.locations)['by-query']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.locations)['by-query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLocationsByQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.locations)['by-query']['$post']> },
      ) => parseResponse(client.locations['by-query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLocationsIdKey(
  args: InferRequestType<(typeof client.locations)[':id']['$get']>,
) {
  return ['locations', '/locations/:id', args] as const
}

export function useGetLocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.locations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLocationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.locations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLocationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLocationsIdKey() {
  return ['locations', '/locations/:id', 'PUT'] as const
}

export function usePutLocationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.locations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLocationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.locations)[':id']['$put']> },
      ) => parseResponse(client.locations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLocationsIdKey() {
  return ['locations', '/locations/:id', 'DELETE'] as const
}

export function useDeleteLocationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.locations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLocationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.locations)[':id']['$delete']> },
      ) => parseResponse(client.locations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLocationsByEntityKindNamespaceNameKey(
  args: InferRequestType<
    (typeof client.locations)['by-entity'][':kind'][':namespace'][':name']['$get']
  >,
) {
  return ['locations', '/locations/by-entity/:kind/:namespace/:name', args] as const
}

export function useGetLocationsByEntityKindNamespaceName<TError = unknown>(
  args: InferRequestType<
    (typeof client.locations)['by-entity'][':kind'][':namespace'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.locations)['by-entity'][':kind'][':namespace'][':name']['$get']
              >
            >
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
        ? getGetLocationsByEntityKindNamespaceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.locations)['by-entity'][':kind'][':namespace'][':name']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.locations['by-entity'][':kind'][':namespace'][':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocationsByEntityKindNamespaceName<TError = unknown>(
  args: InferRequestType<
    (typeof client.locations)['by-entity'][':kind'][':namespace'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.locations)['by-entity'][':kind'][':namespace'][':name']['$get']
              >
            >
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
        ? getGetLocationsByEntityKindNamespaceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.locations)['by-entity'][':kind'][':namespace'][':name']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.locations['by-entity'][':kind'][':namespace'][':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAnalyzeLocationKey() {
  return ['analyze-location', '/analyze-location', 'POST'] as const
}

export function usePostAnalyzeLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['analyze-location']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['analyze-location']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalyzeLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['analyze-location']['$post']> },
      ) => parseResponse(client['analyze-location'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostValidateEntityKey() {
  return ['validate-entity', '/validate-entity', 'POST'] as const
}

export function usePostValidateEntity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['validate-entity']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['validate-entity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostValidateEntityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['validate-entity']['$post']> },
      ) => parseResponse(client['validate-entity'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
