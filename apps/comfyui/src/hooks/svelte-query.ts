import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getInternalKey() {
  return ['internal'] as const
}

export function getApiAssetsQueryKey(args: InferRequestType<typeof client.api.assets.$get>) {
  return ['api', '/api/assets', args] as const
}

export function getApiAssetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.assets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiAssetsQueryKey>
  >({
    queryKey: getApiAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.assets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAssets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.assets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAssetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiAssetsMutationKey() {
  return ['api', '/api/assets', 'POST'] as const
}

export function getPostApiAssetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.assets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAssetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.assets.$post>) {
      return parseResponse(client.api.assets.$post(args, options))
    },
  })
}

export function createPostApiAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.assets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAssetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAssetsIdQueryKey(
  args: InferRequestType<(typeof client.api.assets)[':id']['$get']>,
) {
  return ['api', '/api/assets/:id', args] as const
}

export function getApiAssetsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.assets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAssetsIdQueryKey>
  >({
    queryKey: getApiAssetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.assets[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAssetsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.assets)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAssetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAssetsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutApiAssetsIdMutationKey() {
  return ['api', '/api/assets/:id', 'PUT'] as const
}

export function getPutApiAssetsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.assets)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiAssetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.assets)[':id']['$put']>) {
      return parseResponse(client.api.assets[':id'].$put(args, options))
    },
  })
}

export function createPutApiAssetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.assets)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiAssetsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiAssetsIdMutationKey() {
  return ['api', '/api/assets/:id', 'DELETE'] as const
}

export function getDeleteApiAssetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.assets)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAssetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.assets)[':id']['$delete']>) {
      return parseResponse(client.api.assets[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiAssetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.assets)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.assets)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiAssetsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAssetsIdContentQueryKey(
  args: InferRequestType<(typeof client.api.assets)[':id']['content']['$get']>,
) {
  return ['api', '/api/assets/:id/content', args] as const
}

export function getApiAssetsIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.assets)[':id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.assets)[':id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.assets)[':id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAssetsIdContentQueryKey>
  >({
    queryKey: getApiAssetsIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.assets[':id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAssetsIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.assets)[':id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.assets)[':id']['content']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.assets)[':id']['content']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAssetsIdContentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAssetsIdContentQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiAssetsIdTagsMutationKey() {
  return ['api', '/api/assets/:id/tags', 'POST'] as const
}

export function getPostApiAssetsIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.assets)[':id']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.assets)[':id']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAssetsIdTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.assets)[':id']['tags']['$post']>) {
      return parseResponse(client.api.assets[':id'].tags.$post(args, options))
    },
  })
}

export function createPostApiAssetsIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.assets)[':id']['tags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.assets)[':id']['tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAssetsIdTagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiAssetsIdTagsMutationKey() {
  return ['api', '/api/assets/:id/tags', 'DELETE'] as const
}

export function getDeleteApiAssetsIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.assets)[':id']['tags']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.assets)[':id']['tags']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAssetsIdTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.assets)[':id']['tags']['$delete']>) {
      return parseResponse(client.api.assets[':id'].tags.$delete(args, options))
    },
  })
}

export function createDeleteApiAssetsIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.assets)[':id']['tags']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.assets)[':id']['tags']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiAssetsIdTagsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiAssetsFromHashMutationKey() {
  return ['api', '/api/assets/from-hash', 'POST'] as const
}

export function getPostApiAssetsFromHashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets)['from-hash']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.assets)['from-hash']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAssetsFromHashMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.assets)['from-hash']['$post']>) {
      return parseResponse(client.api.assets['from-hash'].$post(args, options))
    },
  })
}

export function createPostApiAssetsFromHash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.assets)['from-hash']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.assets)['from-hash']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAssetsFromHashMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHeadApiAssetsHashHashMutationKey() {
  return ['api', '/api/assets/hash/:hash', 'HEAD'] as const
}

export function getHeadApiAssetsHashHashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.assets.hash)[':hash']['$head']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.assets.hash)[':hash']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadApiAssetsHashHashMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.assets.hash)[':hash']['$head']>) {
      return parseResponse(client.api.assets.hash[':hash'].$head(args, options))
    },
  })
}

export function createHeadApiAssetsHashHash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.assets.hash)[':hash']['$head']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.assets.hash)[':hash']['$head']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getHeadApiAssetsHashHashMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiAssetsPruneMutationKey() {
  return ['api', '/api/assets/prune', 'POST'] as const
}

export function getPostApiAssetsPruneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.prune.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiAssetsPruneMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.assets.prune.$post(undefined, options))
    },
  })
}

export function createPostApiAssetsPrune<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.prune.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAssetsPruneMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiAssetsSeedMutationKey() {
  return ['api', '/api/assets/seed', 'POST'] as const
}

export function getPostApiAssetsSeedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.assets.seed.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAssetsSeedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.assets.seed.$post>) {
      return parseResponse(client.api.assets.seed.$post(args, options))
    },
  })
}

export function createPostApiAssetsSeed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.assets.seed.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAssetsSeedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiAssetsSeedCancelMutationKey() {
  return ['api', '/api/assets/seed/cancel', 'POST'] as const
}

export function getPostApiAssetsSeedCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.cancel.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiAssetsSeedCancelMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.assets.seed.cancel.$post(undefined, options))
    },
  })
}

export function createPostApiAssetsSeedCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.cancel.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAssetsSeedCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiAssetsSeedStatusQueryKey() {
  return ['api', '/api/assets/seed/status'] as const
}

export function getApiAssetsSeedStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAssetsSeedStatusQueryKey>
  >({
    queryKey: getApiAssetsSeedStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.assets.seed.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAssetsSeedStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.seed.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAssetsSeedStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAssetsSeedStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiAssetsTagsRefineQueryKey(
  args: InferRequestType<typeof client.api.assets.tags.refine.$get>,
) {
  return ['api', '/api/assets/tags/refine', args] as const
}

export function getApiAssetsTagsRefineQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.tags.refine.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.assets.tags.refine.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.tags.refine.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAssetsTagsRefineQueryKey>
  >({
    queryKey: getApiAssetsTagsRefineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.assets.tags.refine.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAssetsTagsRefine<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.tags.refine.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.assets.tags.refine.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.assets.tags.refine.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAssetsTagsRefineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAssetsTagsRefineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiBillingChurnkeyAuthQueryKey() {
  return ['api', '/api/billing/churnkey/auth'] as const
}

export function getApiBillingChurnkeyAuthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.billing.churnkey.auth.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.billing.churnkey.auth.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBillingChurnkeyAuthQueryKey>
  >({
    queryKey: getApiBillingChurnkeyAuthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.billing.churnkey.auth.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiBillingChurnkeyAuth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.billing.churnkey.auth.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.billing.churnkey.auth.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBillingChurnkeyAuthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiBillingChurnkeyAuthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiDefaultWorkflowQueryKey() {
  return ['api', '/api/default_workflow'] as const
}

export function getApiDefaultWorkflowQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.default_workflow.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.default_workflow.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDefaultWorkflowQueryKey>
  >({
    queryKey: getApiDefaultWorkflowQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.default_workflow.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiDefaultWorkflow<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.default_workflow.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.default_workflow.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDefaultWorkflowQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiDefaultWorkflowQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiDeployBundleMutationKey() {
  return ['api', '/api/deploy/bundle', 'POST'] as const
}

export function getPostApiDeployBundleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.deploy.bundle.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.deploy.bundle.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDeployBundleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.deploy.bundle.$post>) {
      return parseResponse(client.api.deploy.bundle.$post(args, options))
    },
  })
}

export function createPostApiDeployBundle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.deploy.bundle.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.deploy.bundle.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiDeployBundleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiDeploySummaryQueryKey() {
  return ['api', '/api/deploy/summary'] as const
}

export function getApiDeploySummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.deploy.summary.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.deploy.summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDeploySummaryQueryKey>
  >({
    queryKey: getApiDeploySummaryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.deploy.summary.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiDeploySummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.deploy.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.deploy.summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDeploySummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiDeploySummaryQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiEmbeddingsQueryKey() {
  return ['api', '/api/embeddings'] as const
}

export function getApiEmbeddingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEmbeddingsQueryKey>
  >({
    queryKey: getApiEmbeddingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.embeddings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiEmbeddings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiEmbeddingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiEmbeddingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiExperimentModelsQueryKey() {
  return ['api', '/api/experiment/models'] as const
}

export function getApiExperimentModelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.experiment.models.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.experiment.models.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiExperimentModelsQueryKey>
  >({
    queryKey: getApiExperimentModelsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.experiment.models.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiExperimentModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.experiment.models.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.experiment.models.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiExperimentModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiExperimentModelsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiExperimentModelsFolderQueryKey(
  args: InferRequestType<(typeof client.api.experiment.models)[':folder']['$get']>,
) {
  return ['api', '/api/experiment/models/:folder', args] as const
}

export function getApiExperimentModelsFolderQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.experiment.models)[':folder']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.experiment.models)[':folder']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.experiment.models)[':folder']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiExperimentModelsFolderQueryKey>
  >({
    queryKey: getApiExperimentModelsFolderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.experiment.models[':folder'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiExperimentModelsFolder<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.experiment.models)[':folder']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.experiment.models)[':folder']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.experiment.models)[':folder']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiExperimentModelsFolderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiExperimentModelsFolderQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiExtensionsQueryKey() {
  return ['api', '/api/extensions'] as const
}

export function getApiExtensionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.extensions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.extensions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiExtensionsQueryKey>
  >({
    queryKey: getApiExtensionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.extensions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiExtensions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.extensions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.extensions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiExtensionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiExtensionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiFeaturesQueryKey() {
  return ['api', '/api/features'] as const
}

export function getApiFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.features.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.features.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiFeaturesQueryKey>
  >({
    queryKey: getApiFeaturesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.features.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiFeatures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.features.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.features.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFeaturesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiFeedbackMutationKey() {
  return ['api', '/api/feedback', 'POST'] as const
}

export function getPostApiFeedbackMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.feedback.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.feedback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFeedbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.feedback.$post>) {
      return parseResponse(client.api.feedback.$post(args, options))
    },
  })
}

export function createPostApiFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.feedback.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.feedback.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFeedbackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiFilesMaskLayersQueryKey(
  args: InferRequestType<(typeof client.api.files)['mask-layers']['$get']>,
) {
  return ['api', '/api/files/mask-layers', args] as const
}

export function getApiFilesMaskLayersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.files)['mask-layers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.files)['mask-layers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.files)['mask-layers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiFilesMaskLayersQueryKey>
  >({
    queryKey: getApiFilesMaskLayersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.files['mask-layers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiFilesMaskLayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.files)['mask-layers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.files)['mask-layers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.files)['mask-layers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiFilesMaskLayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiFilesMaskLayersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiFreeMutationKey() {
  return ['api', '/api/free', 'POST'] as const
}

export function getPostApiFreeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.free.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.free.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiFreeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.free.$post>) {
      return parseResponse(client.api.free.$post(args, options))
    },
  })
}

export function createPostApiFree<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.free.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.free.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiFreeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiGlobalSubgraphsQueryKey() {
  return ['api', '/api/global_subgraphs'] as const
}

export function getApiGlobalSubgraphsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.global_subgraphs.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.global_subgraphs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiGlobalSubgraphsQueryKey>
  >({
    queryKey: getApiGlobalSubgraphsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.global_subgraphs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiGlobalSubgraphs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.global_subgraphs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.global_subgraphs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGlobalSubgraphsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiGlobalSubgraphsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiGlobalSubgraphsIdQueryKey(
  args: InferRequestType<(typeof client.api.global_subgraphs)[':id']['$get']>,
) {
  return ['api', '/api/global_subgraphs/:id', args] as const
}

export function getApiGlobalSubgraphsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.global_subgraphs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.global_subgraphs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.global_subgraphs)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiGlobalSubgraphsIdQueryKey>
  >({
    queryKey: getApiGlobalSubgraphsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.global_subgraphs[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiGlobalSubgraphsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.global_subgraphs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.global_subgraphs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.global_subgraphs)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiGlobalSubgraphsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiGlobalSubgraphsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiHistoryMutationKey() {
  return ['api', '/api/history', 'POST'] as const
}

export function getPostApiHistoryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.history.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.history.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiHistoryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.history.$post>) {
      return parseResponse(client.api.history.$post(args, options))
    },
  })
}

export function createPostApiHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.history.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.history.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiHistoryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiHistoryV2QueryKey(args: InferRequestType<typeof client.api.history_v2.$get>) {
  return ['api', '/api/history_v2', args] as const
}

export function getApiHistoryV2QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.history_v2.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.history_v2.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.history_v2.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiHistoryV2QueryKey>
  >({
    queryKey: getApiHistoryV2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.history_v2.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiHistoryV2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.history_v2.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.history_v2.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.history_v2.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiHistoryV2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiHistoryV2QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiHistoryV2PromptIdQueryKey(
  args: InferRequestType<(typeof client.api.history_v2)[':prompt_id']['$get']>,
) {
  return ['api', '/api/history_v2/:prompt_id', args] as const
}

export function getApiHistoryV2PromptIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.history_v2)[':prompt_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.history_v2)[':prompt_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.history_v2)[':prompt_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiHistoryV2PromptIdQueryKey>
  >({
    queryKey: getApiHistoryV2PromptIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.history_v2[':prompt_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiHistoryV2PromptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.history_v2)[':prompt_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.history_v2)[':prompt_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.history_v2)[':prompt_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiHistoryV2PromptIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiHistoryV2PromptIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiI18nQueryKey() {
  return ['api', '/api/i18n'] as const
}

export function getApiI18nQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.i18n.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.i18n.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiI18nQueryKey>
  >({
    queryKey: getApiI18nQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.i18n.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiI18n<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.i18n.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.i18n.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiI18nQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiI18nQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiInterruptMutationKey() {
  return ['api', '/api/interrupt', 'POST'] as const
}

export function getPostApiInterruptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.interrupt.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiInterruptMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.interrupt.$post(undefined, options))
    },
  })
}

export function createPostApiInterrupt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.interrupt.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiInterruptMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiJobJobIdStatusQueryKey(
  args: InferRequestType<(typeof client.api.job)[':job_id']['status']['$get']>,
) {
  return ['api', '/api/job/:job_id/status', args] as const
}

export function getApiJobJobIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.job)[':job_id']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.job)[':job_id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.job)[':job_id']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobJobIdStatusQueryKey>
  >({
    queryKey: getApiJobJobIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.job[':job_id'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiJobJobIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.job)[':job_id']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.job)[':job_id']['status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.job)[':job_id']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJobJobIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJobJobIdStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiJobsQueryKey(args: InferRequestType<typeof client.api.jobs.$get>) {
  return ['api', '/api/jobs', args] as const
}

export function getApiJobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiJobsQueryKey>
  >({
    queryKey: getApiJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.jobs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiJobsJobIdQueryKey(
  args: InferRequestType<(typeof client.api.jobs)[':job_id']['$get']>,
) {
  return ['api', '/api/jobs/:job_id', args] as const
}

export function getApiJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsJobIdQueryKey>
  >({
    queryKey: getApiJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs[':job_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.jobs)[':job_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJobsJobIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiJobsJobIdAssetsQueryKey(
  args: InferRequestType<(typeof client.api.jobs)[':job_id']['assets']['$get']>,
) {
  return ['api', '/api/jobs/:job_id/assets', args] as const
}

export function getApiJobsJobIdAssetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':job_id']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['assets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsJobIdAssetsQueryKey>
  >({
    queryKey: getApiJobsJobIdAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs[':job_id'].assets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiJobsJobIdAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.jobs)[':job_id']['assets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['assets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJobsJobIdAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJobsJobIdAssetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiJobsJobIdCancelMutationKey() {
  return ['api', '/api/jobs/:job_id/cancel', 'POST'] as const
}

export function getPostApiJobsJobIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jobs)[':job_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiJobsJobIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.jobs)[':job_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.api.jobs[':job_id'].cancel.$post(args, options))
    },
  })
}

export function createPostApiJobsJobIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jobs)[':job_id']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.jobs)[':job_id']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiJobsJobIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiJobsCancelMutationKey() {
  return ['api', '/api/jobs/cancel', 'POST'] as const
}

export function getPostApiJobsCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.cancel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.jobs.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiJobsCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.jobs.cancel.$post>) {
      return parseResponse(client.api.jobs.cancel.$post(args, options))
    },
  })
}

export function createPostApiJobsCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.cancel.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.jobs.cancel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiJobsCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiNodeReplacementsQueryKey() {
  return ['api', '/api/node_replacements'] as const
}

export function getApiNodeReplacementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.node_replacements.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.node_replacements.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiNodeReplacementsQueryKey>
  >({
    queryKey: getApiNodeReplacementsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.node_replacements.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiNodeReplacements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.node_replacements.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.node_replacements.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiNodeReplacementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiNodeReplacementsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiObjectInfoQueryKey() {
  return ['api', '/api/object_info'] as const
}

export function getApiObjectInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.object_info.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.object_info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiObjectInfoQueryKey>
  >({
    queryKey: getApiObjectInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.object_info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiObjectInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.object_info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.object_info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiObjectInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiObjectInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiPromptQueryKey() {
  return ['api', '/api/prompt'] as const
}

export function getApiPromptQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.prompt.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.prompt.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPromptQueryKey>
  >({
    queryKey: getApiPromptQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.prompt.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiPrompt<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.prompt.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.prompt.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPromptQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPromptQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiPromptMutationKey() {
  return ['api', '/api/prompt', 'POST'] as const
}

export function getPostApiPromptMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.prompt.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.prompt.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPromptMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.prompt.$post>) {
      return parseResponse(client.api.prompt.$post(args, options))
    },
  })
}

export function createPostApiPrompt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.prompt.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.prompt.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPromptMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiQueueQueryKey() {
  return ['api', '/api/queue'] as const
}

export function getApiQueueQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.queue.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.queue.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiQueueQueryKey>
  >({
    queryKey: getApiQueueQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.queue.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiQueue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.queue.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.queue.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiQueueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiQueueQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiQueueMutationKey() {
  return ['api', '/api/queue', 'POST'] as const
}

export function getPostApiQueueMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.queue.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.queue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiQueueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.queue.$post>) {
      return parseResponse(client.api.queue.$post(args, options))
    },
  })
}

export function createPostApiQueue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.queue.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.queue.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiQueueMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSettingsQueryKey() {
  return ['api', '/api/settings'] as const
}

export function getApiSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiSettingsQueryKey>
  >({
    queryKey: getApiSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSettingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiSettingsMutationKey() {
  return ['api', '/api/settings', 'POST'] as const
}

export function getPostApiSettingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.settings.$post>) {
      return parseResponse(client.api.settings.$post(args, options))
    },
  })
}

export function createPostApiSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.settings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSettingsIdQueryKey(
  args: InferRequestType<(typeof client.api.settings)[':id']['$get']>,
) {
  return ['api', '/api/settings/:id', args] as const
}

export function getApiSettingsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.settings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.settings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.settings)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSettingsIdQueryKey>
  >({
    queryKey: getApiSettingsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.settings[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiSettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.settings)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.settings)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.settings)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSettingsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSettingsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiSettingsIdMutationKey() {
  return ['api', '/api/settings/:id', 'POST'] as const
}

export function getPostApiSettingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.settings)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.settings)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSettingsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.settings)[':id']['$post']>) {
      return parseResponse(client.api.settings[':id'].$post(args, options))
    },
  })
}

export function createPostApiSettingsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.settings)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.settings)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSettingsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiSystemStatsQueryKey() {
  return ['api', '/api/system_stats'] as const
}

export function getApiSystemStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system_stats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system_stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSystemStatsQueryKey>
  >({
    queryKey: getApiSystemStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.system_stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiSystemStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system_stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.system_stats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSystemStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSystemStatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiTagsQueryKey(args: InferRequestType<typeof client.api.tags.$get>) {
  return ['api', '/api/tags', args] as const
}

export function getApiTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTagsQueryKey>
  >({
    queryKey: getApiTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.tags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiTasksQueryKey(args: InferRequestType<typeof client.api.tasks.$get>) {
  return ['api', '/api/tasks', args] as const
}

export function getApiTasksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.tasks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTasksQueryKey>
  >({
    queryKey: getApiTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.tasks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.tasks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiTasksTaskIdQueryKey(
  args: InferRequestType<(typeof client.api.tasks)[':task_id']['$get']>,
) {
  return ['api', '/api/tasks/:task_id', args] as const
}

export function getApiTasksTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':task_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.tasks)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':task_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTasksTaskIdQueryKey>
  >({
    queryKey: getApiTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.tasks[':task_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':task_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.tasks)[':task_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.tasks)[':task_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTasksTaskIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTasksTaskIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiUploadImageMutationKey() {
  return ['api', '/api/upload/image', 'POST'] as const
}

export function getPostApiUploadImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.upload.image.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.upload.image.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUploadImageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.upload.image.$post>) {
      return parseResponse(client.api.upload.image.$post(args, options))
    },
  })
}

export function createPostApiUploadImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.upload.image.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.upload.image.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUploadImageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiUploadMaskMutationKey() {
  return ['api', '/api/upload/mask', 'POST'] as const
}

export function getPostApiUploadMaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.upload.mask.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.upload.mask.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUploadMaskMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.upload.mask.$post>) {
      return parseResponse(client.api.upload.mask.$post(args, options))
    },
  })
}

export function createPostApiUploadMask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.upload.mask.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.upload.mask.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUploadMaskMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUserQueryKey() {
  return ['api', '/api/user'] as const
}

export function getApiUserQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUserQueryKey>
  >({
    queryKey: getApiUserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUserQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiUserdataQueryKey(args: InferRequestType<typeof client.api.userdata.$get>) {
  return ['api', '/api/userdata', args] as const
}

export function getApiUserdataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.userdata.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.userdata.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.userdata.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUserdataQueryKey>
  >({
    queryKey: getApiUserdataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.userdata.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUserdata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.userdata.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.userdata.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.userdata.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserdataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUserdataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiUserdataFileQueryKey(
  args: InferRequestType<(typeof client.api.userdata)[':file']['$get']>,
) {
  return ['api', '/api/userdata/:file', args] as const
}

export function getApiUserdataFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.userdata)[':file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.userdata)[':file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.userdata)[':file']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserdataFileQueryKey>
  >({
    queryKey: getApiUserdataFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.userdata[':file'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUserdataFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.userdata)[':file']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.userdata)[':file']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.userdata)[':file']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserdataFileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUserdataFileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiUserdataFileMutationKey() {
  return ['api', '/api/userdata/:file', 'POST'] as const
}

export function getPostApiUserdataFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.userdata)[':file']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.userdata)[':file']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserdataFileMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.userdata)[':file']['$post']>) {
      return parseResponse(client.api.userdata[':file'].$post(args, options))
    },
  })
}

export function createPostApiUserdataFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.userdata)[':file']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.userdata)[':file']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUserdataFileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiUserdataFileMutationKey() {
  return ['api', '/api/userdata/:file', 'DELETE'] as const
}

export function getDeleteApiUserdataFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.userdata)[':file']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.userdata)[':file']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiUserdataFileMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.userdata)[':file']['$delete']>) {
      return parseResponse(client.api.userdata[':file'].$delete(args, options))
    },
  })
}

export function createDeleteApiUserdataFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.userdata)[':file']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.userdata)[':file']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiUserdataFileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiUserdataFileMoveDestMutationKey() {
  return ['api', '/api/userdata/:file/move/:dest', 'POST'] as const
}

export function getPostApiUserdataFileMoveDestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.userdata)[':file']['move'][':dest']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.userdata)[':file']['move'][':dest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserdataFileMoveDestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.userdata)[':file']['move'][':dest']['$post']>,
    ) {
      return parseResponse(client.api.userdata[':file'].move[':dest'].$post(args, options))
    },
  })
}

export function createPostApiUserdataFileMoveDest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.userdata)[':file']['move'][':dest']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.userdata)[':file']['move'][':dest']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUserdataFileMoveDestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUserdataFilePublishQueryKey(
  args: InferRequestType<(typeof client.api.userdata)[':file']['publish']['$get']>,
) {
  return ['api', '/api/userdata/:file/publish', args] as const
}

export function getApiUserdataFilePublishQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.userdata)[':file']['publish']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.userdata)[':file']['publish']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.userdata)[':file']['publish']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUserdataFilePublishQueryKey>
  >({
    queryKey: getApiUserdataFilePublishQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.userdata[':file'].publish.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiUserdataFilePublish<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.userdata)[':file']['publish']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.userdata)[':file']['publish']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.userdata)[':file']['publish']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUserdataFilePublishQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUserdataFilePublishQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiUserdataFilePublishMutationKey() {
  return ['api', '/api/userdata/:file/publish', 'POST'] as const
}

export function getPostApiUserdataFilePublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.userdata)[':file']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.userdata)[':file']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiUserdataFilePublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.userdata)[':file']['publish']['$post']>,
    ) {
      return parseResponse(client.api.userdata[':file'].publish.$post(args, options))
    },
  })
}

export function createPostApiUserdataFilePublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.userdata)[':file']['publish']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.userdata)[':file']['publish']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiUserdataFilePublishMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiUsersQueryKey() {
  return ['api', '/api/users'] as const
}

export function getApiUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiUsersQueryKey>
  >({
    queryKey: getApiUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiUsersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiVhsQueryvideoQueryKey(
  args: InferRequestType<typeof client.api.vhs.queryvideo.$get>,
) {
  return ['api', '/api/vhs/queryvideo', args] as const
}

export function getApiVhsQueryvideoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vhs.queryvideo.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.vhs.queryvideo.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vhs.queryvideo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiVhsQueryvideoQueryKey>
  >({
    queryKey: getApiVhsQueryvideoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.vhs.queryvideo.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiVhsQueryvideo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vhs.queryvideo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.vhs.queryvideo.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.vhs.queryvideo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiVhsQueryvideoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiVhsQueryvideoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiViewQueryKey(args: InferRequestType<typeof client.api.view.$get>) {
  return ['api', '/api/view', args] as const
}

export function getApiViewQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.view.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.view.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.view.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiViewQueryKey>
  >({
    queryKey: getApiViewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.view.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiView<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.view.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.view.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.view.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiViewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiViewQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiWorkflowTemplatesQueryKey() {
  return ['api', '/api/workflow_templates'] as const
}

export function getApiWorkflowTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflow_templates.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.workflow_templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorkflowTemplatesQueryKey>
  >({
    queryKey: getApiWorkflowTemplatesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.workflow_templates.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiWorkflowTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflow_templates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.workflow_templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWorkflowTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiWorkflowTemplatesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiWorkflowsQueryKey(args: InferRequestType<typeof client.api.workflows.$get>) {
  return ['api', '/api/workflows', args] as const
}

export function getApiWorkflowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflows.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.workflows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflows.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorkflowsQueryKey>
  >({
    queryKey: getApiWorkflowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.workflows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiWorkflows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.workflows.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflows.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiWorkflowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiWorkflowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiWorkflowsMutationKey() {
  return ['api', '/api/workflows', 'POST'] as const
}

export function getPostApiWorkflowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflows.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.workflows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWorkflowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.workflows.$post>) {
      return parseResponse(client.api.workflows.$post(args, options))
    },
  })
}

export function createPostApiWorkflows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.workflows.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.workflows.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiWorkflowsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiWorkflowsWorkflowIdQueryKey(
  args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['$get']>,
) {
  return ['api', '/api/workflows/:workflow_id', args] as const
}

export function getApiWorkflowsWorkflowIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorkflowsWorkflowIdQueryKey>
  >({
    queryKey: getApiWorkflowsWorkflowIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.workflows[':workflow_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiWorkflowsWorkflowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.workflows)[':workflow_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWorkflowsWorkflowIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiWorkflowsWorkflowIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiWorkflowsWorkflowIdMutationKey() {
  return ['api', '/api/workflows/:workflow_id', 'DELETE'] as const
}

export function getDeleteApiWorkflowsWorkflowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.workflows)[':workflow_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiWorkflowsWorkflowIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['$delete']>,
    ) {
      return parseResponse(client.api.workflows[':workflow_id'].$delete(args, options))
    },
  })
}

export function createDeleteApiWorkflowsWorkflowId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.workflows)[':workflow_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiWorkflowsWorkflowIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchApiWorkflowsWorkflowIdMutationKey() {
  return ['api', '/api/workflows/:workflow_id', 'PATCH'] as const
}

export function getPatchApiWorkflowsWorkflowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.workflows)[':workflow_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiWorkflowsWorkflowIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['$patch']>,
    ) {
      return parseResponse(client.api.workflows[':workflow_id'].$patch(args, options))
    },
  })
}

export function createPatchApiWorkflowsWorkflowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.workflows)[':workflow_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiWorkflowsWorkflowIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiWorkflowsWorkflowIdContentQueryKey(
  args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>,
) {
  return ['api', '/api/workflows/:workflow_id/content', args] as const
}

export function getApiWorkflowsWorkflowIdContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorkflowsWorkflowIdContentQueryKey>
  >({
    queryKey: getApiWorkflowsWorkflowIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.workflows[':workflow_id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiWorkflowsWorkflowIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['content']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWorkflowsWorkflowIdContentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiWorkflowsWorkflowIdContentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiWorkflowsWorkflowIdForkMutationKey() {
  return ['api', '/api/workflows/:workflow_id/fork', 'POST'] as const
}

export function getPostApiWorkflowsWorkflowIdForkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['fork']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.workflows)[':workflow_id']['fork']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWorkflowsWorkflowIdForkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['fork']['$post']>,
    ) {
      return parseResponse(client.api.workflows[':workflow_id'].fork.$post(args, options))
    },
  })
}

export function createPostApiWorkflowsWorkflowIdFork<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['fork']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.workflows)[':workflow_id']['fork']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiWorkflowsWorkflowIdForkMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiWorkflowsWorkflowIdVersionsMutationKey() {
  return ['api', '/api/workflows/:workflow_id/versions', 'POST'] as const
}

export function getPostApiWorkflowsWorkflowIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.workflows)[':workflow_id']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.workflows)[':workflow_id']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWorkflowsWorkflowIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.workflows)[':workflow_id']['versions']['$post']>,
    ) {
      return parseResponse(client.api.workflows[':workflow_id'].versions.$post(args, options))
    },
  })
}

export function createPostApiWorkflowsWorkflowIdVersions<
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
                ReturnType<(typeof client.api.workflows)[':workflow_id']['versions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.workflows)[':workflow_id']['versions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiWorkflowsWorkflowIdVersionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiWorkflowsPublishedShareIdQueryKey(
  args: InferRequestType<(typeof client.api.workflows.published)[':share_id']['$get']>,
) {
  return ['api', '/api/workflows/published/:share_id', args] as const
}

export function getApiWorkflowsPublishedShareIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.workflows.published)[':share_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.workflows.published)[':share_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.workflows.published)[':share_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWorkflowsPublishedShareIdQueryKey>
  >({
    queryKey: getApiWorkflowsPublishedShareIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.workflows.published[':share_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiWorkflowsPublishedShareId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.workflows.published)[':share_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.workflows.published)[':share_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.workflows.published)[':share_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWorkflowsPublishedShareIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiWorkflowsPublishedShareIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getInternalFolderPathsQueryKey() {
  return ['internal', '/internal/folder_paths'] as const
}

export function getInternalFolderPathsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.folder_paths.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.internal.folder_paths.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInternalFolderPathsQueryKey>
  >({
    queryKey: getInternalFolderPathsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.internal.folder_paths.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInternalFolderPaths<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.folder_paths.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.internal.folder_paths.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternalFolderPathsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInternalFolderPathsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getInternalLogsQueryKey() {
  return ['internal', '/internal/logs'] as const
}

export function getInternalLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInternalLogsQueryKey>
  >({
    queryKey: getInternalLogsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.internal.logs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInternalLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInternalLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInternalLogsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getInternalLogsRawQueryKey() {
  return ['internal', '/internal/logs/raw'] as const
}

export function getInternalLogsRawQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.raw.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.raw.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInternalLogsRawQueryKey>
  >({
    queryKey: getInternalLogsRawQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.internal.logs.raw.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInternalLogsRaw<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.raw.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.raw.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInternalLogsRawQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInternalLogsRawQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPatchInternalLogsSubscribeMutationKey() {
  return ['internal', '/internal/logs/subscribe', 'PATCH'] as const
}

export function getPatchInternalLogsSubscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.subscribe.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.internal.logs.subscribe.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchInternalLogsSubscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.internal.logs.subscribe.$patch>) {
      return parseResponse(client.internal.logs.subscribe.$patch(args, options))
    },
  })
}

export function createPatchInternalLogsSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.internal.logs.subscribe.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.internal.logs.subscribe.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchInternalLogsSubscribeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
