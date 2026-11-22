import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getPostRefreshMutationKey() {
  return ['refresh', '/refresh', 'POST'] as const
}

export function getPostRefreshMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh.$post>>>>>,
    TError,
    InferRequestType<typeof client.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.refresh.$post>) {
      return parseResponse(client.refresh.$post(args, options))
    },
  })
}

export function injectPostRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.refresh.$post>>>>>,
        TError,
        InferRequestType<typeof client.refresh.$post>,
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
    const mutationDefaults = getPostRefreshMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEntitiesQueryKey(args: InferRequestType<typeof client.entities.$get>) {
  return ['entities', '/entities', args] as const
}

export function getEntitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.entities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEntitiesQueryKey>
  >({
    queryKey: getEntitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEntities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.entities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.entities.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEntitiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEntitiesByUidUidQueryKey(
  args: InferRequestType<(typeof client.entities)['by-uid'][':uid']['$get']>,
) {
  return ['entities', '/entities/by-uid/:uid', args] as const
}

export function getEntitiesByUidUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['by-uid'][':uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['by-uid'][':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.entities)['by-uid'][':uid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesByUidUidQueryKey>
  >({
    queryKey: getEntitiesByUidUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['by-uid'][':uid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEntitiesByUidUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['by-uid'][':uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['by-uid'][':uid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.entities)['by-uid'][':uid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEntitiesByUidUidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEntitiesByUidUidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteEntitiesByUidUidMutationKey() {
  return ['entities', '/entities/by-uid/:uid', 'DELETE'] as const
}

export function getDeleteEntitiesByUidUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.entities)['by-uid'][':uid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.entities)['by-uid'][':uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEntitiesByUidUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.entities)['by-uid'][':uid']['$delete']>,
    ) {
      return parseResponse(client.entities['by-uid'][':uid'].$delete(args, options))
    },
  })
}

export function injectDeleteEntitiesByUidUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.entities)['by-uid'][':uid']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.entities)['by-uid'][':uid']['$delete']>,
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
    const mutationDefaults = getDeleteEntitiesByUidUidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEntitiesByNameKindNamespaceNameQueryKey(
  args: InferRequestType<
    (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['$get']
  >,
) {
  return ['entities', '/entities/by-name/:kind/:namespace/:name', args] as const
}

export function getEntitiesByNameKindNamespaceNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.entities)['by-name'][':kind'][':namespace'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.entities)['by-name'][':kind'][':namespace'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesByNameKindNamespaceNameQueryKey>
  >({
    queryKey: getEntitiesByNameKindNamespaceNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['by-name'][':kind'][':namespace'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEntitiesByNameKindNamespaceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.entities)['by-name'][':kind'][':namespace'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getEntitiesByNameKindNamespaceNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEntitiesByNameKindNamespaceNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEntitiesByNameKindNamespaceNameAncestryQueryKey(
  args: InferRequestType<
    (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['ancestry']['$get']
  >,
) {
  return ['entities', '/entities/by-name/:kind/:namespace/:name/ancestry', args] as const
}

export function getEntitiesByNameKindNamespaceNameAncestryQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['ancestry']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getEntitiesByNameKindNamespaceNameAncestryQueryKey>
  >({
    queryKey: getEntitiesByNameKindNamespaceNameAncestryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['by-name'][':kind'][':namespace'][':name'].ancestry.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEntitiesByNameKindNamespaceNameAncestry<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.entities)['by-name'][':kind'][':namespace'][':name']['ancestry']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getEntitiesByNameKindNamespaceNameAncestryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEntitiesByNameKindNamespaceNameAncestryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostEntitiesByRefsMutationKey() {
  return ['entities', '/entities/by-refs', 'POST'] as const
}

export function getPostEntitiesByRefsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['by-refs']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.entities)['by-refs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEntitiesByRefsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.entities)['by-refs']['$post']>) {
      return parseResponse(client.entities['by-refs'].$post(args, options))
    },
  })
}

export function injectPostEntitiesByRefs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['by-refs']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.entities)['by-refs']['$post']>,
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
    const mutationDefaults = getPostEntitiesByRefsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEntitiesByQueryQueryKey(
  args: InferRequestType<(typeof client.entities)['by-query']['$get']>,
) {
  return ['entities', '/entities/by-query', args] as const
}

export function getEntitiesByQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['by-query']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.entities)['by-query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['by-query']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntitiesByQueryQueryKey>
  >({
    queryKey: getEntitiesByQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.entities['by-query'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEntitiesByQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['by-query']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.entities)['by-query']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['by-query']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEntitiesByQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEntitiesByQueryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostEntitiesByQueryMutationKey() {
  return ['entities', '/entities/by-query', 'POST'] as const
}

export function getPostEntitiesByQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['by-query']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.entities)['by-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEntitiesByQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.entities)['by-query']['$post']>) {
      return parseResponse(client.entities['by-query'].$post(args, options))
    },
  })
}

export function injectPostEntitiesByQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.entities)['by-query']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.entities)['by-query']['$post']>,
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
    const mutationDefaults = getPostEntitiesByQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEntityFacetsQueryKey(
  args: InferRequestType<(typeof client)['entity-facets']['$get']>,
) {
  return ['entity-facets', '/entity-facets', args] as const
}

export function getEntityFacetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['entity-facets']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['entity-facets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['entity-facets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEntityFacetsQueryKey>
  >({
    queryKey: getEntityFacetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['entity-facets'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEntityFacets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['entity-facets']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['entity-facets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['entity-facets']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEntityFacetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEntityFacetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostEntityFacetsMutationKey() {
  return ['entity-facets', '/entity-facets', 'POST'] as const
}

export function getPostEntityFacetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['entity-facets']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['entity-facets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEntityFacetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['entity-facets']['$post']>) {
      return parseResponse(client['entity-facets'].$post(args, options))
    },
  })
}

export function injectPostEntityFacets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['entity-facets']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['entity-facets']['$post']>,
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
    const mutationDefaults = getPostEntityFacetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLocationsQueryKey() {
  return ['locations', '/locations'] as const
}

export function getLocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLocationsQueryKey>
  >({
    queryKey: getLocationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.locations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostLocationsMutationKey() {
  return ['locations', '/locations', 'POST'] as const
}

export function getPostLocationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$post>>>>>,
    TError,
    InferRequestType<typeof client.locations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLocationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.locations.$post>) {
      return parseResponse(client.locations.$post(args, options))
    },
  })
}

export function injectPostLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.locations.$post>,
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
    const mutationDefaults = getPostLocationsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostLocationsByQueryMutationKey() {
  return ['locations', '/locations/by-query', 'POST'] as const
}

export function getPostLocationsByQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.locations)['by-query']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.locations)['by-query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLocationsByQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.locations)['by-query']['$post']>) {
      return parseResponse(client.locations['by-query'].$post(args, options))
    },
  })
}

export function injectPostLocationsByQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.locations)['by-query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.locations)['by-query']['$post']>,
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
    const mutationDefaults = getPostLocationsByQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLocationsIdQueryKey(
  args: InferRequestType<(typeof client.locations)[':id']['$get']>,
) {
  return ['locations', '/locations/:id', args] as const
}

export function getLocationsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.locations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocationsIdQueryKey>
  >({
    queryKey: getLocationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.locations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLocationsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.locations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutLocationsIdMutationKey() {
  return ['locations', '/locations/:id', 'PUT'] as const
}

export function getPutLocationsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.locations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLocationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.locations)[':id']['$put']>) {
      return parseResponse(client.locations[':id'].$put(args, options))
    },
  })
}

export function injectPutLocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.locations)[':id']['$put']>,
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
    const mutationDefaults = getPutLocationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteLocationsIdMutationKey() {
  return ['locations', '/locations/:id', 'DELETE'] as const
}

export function getDeleteLocationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.locations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLocationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.locations)[':id']['$delete']>) {
      return parseResponse(client.locations[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteLocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.locations)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteLocationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLocationsByEntityKindNamespaceNameQueryKey(
  args: InferRequestType<
    (typeof client.locations)['by-entity'][':kind'][':namespace'][':name']['$get']
  >,
) {
  return ['locations', '/locations/by-entity/:kind/:namespace/:name', args] as const
}

export function getLocationsByEntityKindNamespaceNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.locations)['by-entity'][':kind'][':namespace'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.locations)['by-entity'][':kind'][':namespace'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getLocationsByEntityKindNamespaceNameQueryKey>
  >({
    queryKey: getLocationsByEntityKindNamespaceNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.locations['by-entity'][':kind'][':namespace'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLocationsByEntityKindNamespaceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.locations)['by-entity'][':kind'][':namespace'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.locations)['by-entity'][':kind'][':namespace'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getLocationsByEntityKindNamespaceNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getLocationsByEntityKindNamespaceNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAnalyzeLocationMutationKey() {
  return ['analyze-location', '/analyze-location', 'POST'] as const
}

export function getPostAnalyzeLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['analyze-location']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['analyze-location']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnalyzeLocationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['analyze-location']['$post']>) {
      return parseResponse(client['analyze-location'].$post(args, options))
    },
  })
}

export function injectPostAnalyzeLocation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['analyze-location']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['analyze-location']['$post']>,
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
    const mutationDefaults = getPostAnalyzeLocationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostValidateEntityMutationKey() {
  return ['validate-entity', '/validate-entity', 'POST'] as const
}

export function getPostValidateEntityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['validate-entity']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['validate-entity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostValidateEntityMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['validate-entity']['$post']>) {
      return parseResponse(client['validate-entity'].$post(args, options))
    },
  })
}

export function injectPostValidateEntity<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['validate-entity']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['validate-entity']['$post']>,
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
    const mutationDefaults = getPostValidateEntityMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
