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

export function getActionsKey() {
  return ['actions'] as const
}

export function getAddonsKey() {
  return ['addons'] as const
}

export function getCitationsKey() {
  return ['citations'] as const
}

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getCommentsKey() {
  return ['comments'] as const
}

export function getDraftRegistrationsKey() {
  return ['draft_registrations'] as const
}

export function getFilesKey() {
  return ['files'] as const
}

export function getInstitutionsKey() {
  return ['institutions'] as const
}

export function getLicenseKey() {
  return ['license'] as const
}

export function getLicensesKey() {
  return ['licenses'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getNodesKey() {
  return ['nodes'] as const
}

export function getPreprintProvidersKey() {
  return ['preprint_providers'] as const
}

export function getPreprintsKey() {
  return ['preprints'] as const
}

export function getRegistrationsKey() {
  return ['registrations'] as const
}

export function getSchemaResponsesKey() {
  return ['schema_responses'] as const
}

export function getSchemasKey() {
  return ['schemas'] as const
}

export function getTaxonomiesKey() {
  return ['taxonomies'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getViewOnlyLinksKey() {
  return ['view_only_links'] as const
}

export function getWikisKey() {
  return ['wikis'] as const
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getActionsIndexQueryKey() {
  return ['actions', '/actions/'] as const
}

export function getActionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIndexQueryKey>
  >({
    queryKey: getActionsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.actions.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createActionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAddonsIndexQueryKey() {
  return ['addons', '/addons/'] as const
}

export function getAddonsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAddonsIndexQueryKey>
  >({
    queryKey: getAddonsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.addons.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAddonsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAddonsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAddonsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCitationsStylesIndexQueryKey() {
  return ['citations', '/citations/styles/'] as const
}

export function getCitationsStylesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.citations.styles.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.citations.styles.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCitationsStylesIndexQueryKey>
  >({
    queryKey: getCitationsStylesIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.citations.styles.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCitationsStylesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.citations.styles.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.citations.styles.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCitationsStylesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCitationsStylesIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCitationsStylesStyleIdIndexQueryKey(
  args: InferRequestType<(typeof client.citations.styles)[':style_id']['index']['$get']>,
) {
  return ['citations', '/citations/styles/:style_id/', args] as const
}

export function getCitationsStylesStyleIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.citations.styles)[':style_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.citations.styles)[':style_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.citations.styles)[':style_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCitationsStylesStyleIdIndexQueryKey>
  >({
    queryKey: getCitationsStylesStyleIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.citations.styles[':style_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCitationsStylesStyleIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.citations.styles)[':style_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.citations.styles)[':style_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.citations.styles)[':style_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCitationsStylesStyleIdIndexQueryKey>
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
      ...getCitationsStylesStyleIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCollectionsIndexQueryKey() {
  return ['collections', '/collections/'] as const
}

export function getCollectionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsIndexQueryKey>
  >({
    queryKey: getCollectionsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.collections.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.collections.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCollectionsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostCollectionsIndexMutationKey() {
  return ['collections', '/collections/', 'POST'] as const
}

export function getPostCollectionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.collections.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.collections.index.$post>) {
      return parseResponse(client.collections.index.$post(args, options))
    },
  })
}

export function createPostCollectionsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.collections.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.collections.index.$post>,
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
    const mutationDefaults = getPostCollectionsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCollectionsCollectionIdIndexQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection_id']['index']['$get']>,
) {
  return ['collections', '/collections/:collection_id/', args] as const
}

export function getCollectionsCollectionIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdIndexQueryKey>
  >({
    queryKey: getCollectionsCollectionIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionsCollectionIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.collections)[':collection_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collection_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionIdIndexQueryKey>
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
      ...getCollectionsCollectionIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteCollectionsCollectionIdIndexMutationKey() {
  return ['collections', '/collections/:collection_id/', 'DELETE'] as const
}

export function getDeleteCollectionsCollectionIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collections)[':collection_id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.collections)[':collection_id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collection_id']['index']['$delete']>,
    ) {
      return parseResponse(client.collections[':collection_id'].index.$delete(args, options))
    },
  })
}

export function createDeleteCollectionsCollectionIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.collections)[':collection_id']['index']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.collections)[':collection_id']['index']['$delete']>,
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
    const mutationDefaults = getDeleteCollectionsCollectionIdIndexMutationOptions<
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

export function getCollectionsCollectionIdCollectedMetadataIndexQueryKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
  >,
) {
  return ['collections', '/collections/:collection_id/collected_metadata/', args] as const
}

export function getCollectionsCollectionIdCollectedMetadataIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdCollectedMetadataIndexQueryKey>
  >({
    queryKey: getCollectionsCollectionIdCollectedMetadataIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_id'].collected_metadata.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionsCollectionIdCollectedMetadataIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionIdCollectedMetadataIndexQueryKey>
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
      ...getCollectionsCollectionIdCollectedMetadataIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostCollectionsCollectionIdCollectedMetadataIndexMutationKey() {
  return ['collections', '/collections/:collection_id/collected_metadata/', 'POST'] as const
}

export function getPostCollectionsCollectionIdCollectedMetadataIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['collected_metadata']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionIdCollectedMetadataIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_id']['collected_metadata']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_id'].collected_metadata.index.$post(args, options),
      )
    },
  })
}

export function createPostCollectionsCollectionIdCollectedMetadataIndex<
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
                  (typeof client.collections)[':collection_id']['collected_metadata']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.collections)[':collection_id']['collected_metadata']['index']['$post']
        >,
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
    const mutationDefaults = getPostCollectionsCollectionIdCollectedMetadataIndexMutationOptions<
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

export function getCollectionsCollectionIdCollectedMetadataCgmIdQueryKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
  >,
) {
  return ['collections', '/collections/:collection_id/collected_metadata/:cgm_id', args] as const
}

export function getCollectionsCollectionIdCollectedMetadataCgmIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdCollectedMetadataCgmIdQueryKey>
  >({
    queryKey: getCollectionsCollectionIdCollectedMetadataCgmIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_id'].collected_metadata[':cgm_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionsCollectionIdCollectedMetadataCgmId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionIdCollectedMetadataCgmIdQueryKey>
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
      ...getCollectionsCollectionIdCollectedMetadataCgmIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostCollectionsCollectionIdCollectedMetadataCgmIdMutationKey() {
  return ['collections', '/collections/:collection_id/collected_metadata/:cgm_id', 'POST'] as const
}

export function getPostCollectionsCollectionIdCollectedMetadataCgmIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionIdCollectedMetadataCgmIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_id'].collected_metadata[':cgm_id'].$post(args, options),
      )
    },
  })
}

export function createPostCollectionsCollectionIdCollectedMetadataCgmId<
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
                  (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$post']
        >,
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
    const mutationDefaults = getPostCollectionsCollectionIdCollectedMetadataCgmIdMutationOptions<
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

export function getDeleteCollectionsCollectionIdCollectedMetadataCgmIdMutationKey() {
  return [
    'collections',
    '/collections/:collection_id/collected_metadata/:cgm_id',
    'DELETE',
  ] as const
}

export function getDeleteCollectionsCollectionIdCollectedMetadataCgmIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionIdCollectedMetadataCgmIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_id'].collected_metadata[':cgm_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteCollectionsCollectionIdCollectedMetadataCgmId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$delete']
        >,
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
    const mutationDefaults = getDeleteCollectionsCollectionIdCollectedMetadataCgmIdMutationOptions<
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

export function getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexQueryKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
  >,
) {
  return [
    'collections',
    '/collections/:collection_id/collected_metadata/:cgm_id/relationships/subjects/',
    args,
  ] as const
}

export function getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexQueryKey
    >
  >({
    queryKey:
      getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_id'].collected_metadata[
          ':cgm_id'
        ].relationships.subjects.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexQueryKey
        >
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
      ...getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexMutationKey() {
  return [
    'collections',
    '/collections/:collection_id/collected_metadata/:cgm_id/relationships/subjects/',
    'POST',
  ] as const
}

export function getPostCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_id'].collected_metadata[
          ':cgm_id'
        ].relationships.subjects.index.$post(args, options),
      )
    },
  })
}

export function createPostCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndex<
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
                  (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$post']
        >,
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
    const mutationDefaults =
      getPostCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexMutationOptions<
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

export function getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexQueryKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
  >,
) {
  return [
    'collections',
    '/collections/:collection_id/collected_metadata/:cgm_id/subjects/',
    args,
  ] as const
}

export function getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexQueryKey>
  >({
    queryKey: getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_id'].collected_metadata[':cgm_id'].subjects.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexQueryKey>
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
      ...getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCollectionsCollectionIdLinkedNodesQueryKey(
  args: InferRequestType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>,
) {
  return ['collections', '/collections/:collection_id/linked_nodes', args] as const
}

export function getCollectionsCollectionIdLinkedNodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdLinkedNodesQueryKey>
  >({
    queryKey: getCollectionsCollectionIdLinkedNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_id'].linked_nodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionsCollectionIdLinkedNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.collections)[':collection_id']['linked_nodes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionIdLinkedNodesQueryKey>
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
      ...getCollectionsCollectionIdLinkedNodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCollectionsCollectionIdLinkedNodesRelationshipsIndexQueryKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
  >,
) {
  return ['collections', '/collections/:collection_id/linked_nodes/relationships/', args] as const
}

export function getCollectionsCollectionIdLinkedNodesRelationshipsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdLinkedNodesRelationshipsIndexQueryKey>
  >({
    queryKey: getCollectionsCollectionIdLinkedNodesRelationshipsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_id'].linked_nodes.relationships.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionsCollectionIdLinkedNodesRelationshipsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionIdLinkedNodesRelationshipsIndexQueryKey>
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
      ...getCollectionsCollectionIdLinkedNodesRelationshipsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostCollectionsCollectionIdLinkedNodesRelationshipsIndexMutationKey() {
  return ['collections', '/collections/:collection_id/linked_nodes/relationships/', 'POST'] as const
}

export function getPostCollectionsCollectionIdLinkedNodesRelationshipsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionIdLinkedNodesRelationshipsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_id'].linked_nodes.relationships.index.$post(args, options),
      )
    },
  })
}

export function createPostCollectionsCollectionIdLinkedNodesRelationshipsIndex<
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
                  (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$post']
        >,
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
    const mutationDefaults =
      getPostCollectionsCollectionIdLinkedNodesRelationshipsIndexMutationOptions<
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

export function getDeleteCollectionsCollectionIdLinkedNodesRelationshipsIndexMutationKey() {
  return [
    'collections',
    '/collections/:collection_id/linked_nodes/relationships/',
    'DELETE',
  ] as const
}

export function getDeleteCollectionsCollectionIdLinkedNodesRelationshipsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionIdLinkedNodesRelationshipsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_id'].linked_nodes.relationships.index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteCollectionsCollectionIdLinkedNodesRelationshipsIndex<
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
                  (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteCollectionsCollectionIdLinkedNodesRelationshipsIndexMutationOptions<
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

export function getCollectionsCollectionIdLinkedPreprintsIndexQueryKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
  >,
) {
  return ['collections', '/collections/:collection_id/linked_preprints/', args] as const
}

export function getCollectionsCollectionIdLinkedPreprintsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdLinkedPreprintsIndexQueryKey>
  >({
    queryKey: getCollectionsCollectionIdLinkedPreprintsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_id'].linked_preprints.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionsCollectionIdLinkedPreprintsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionIdLinkedPreprintsIndexQueryKey>
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
      ...getCollectionsCollectionIdLinkedPreprintsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCollectionsCollectionIdLinkedRegistrationsIndexQueryKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
  >,
) {
  return ['collections', '/collections/:collection_id/linked_registrations/', args] as const
}

export function getCollectionsCollectionIdLinkedRegistrationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdLinkedRegistrationsIndexQueryKey>
  >({
    queryKey: getCollectionsCollectionIdLinkedRegistrationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_id'].linked_registrations.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionsCollectionIdLinkedRegistrationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionIdLinkedRegistrationsIndexQueryKey>
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
      ...getCollectionsCollectionIdLinkedRegistrationsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexQueryKey(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
  >,
) {
  return [
    'collections',
    '/collections/:collection_id/linked_registrations/relationships/',
    args,
  ] as const
}

export function getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexQueryKey>
  >({
    queryKey: getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collection_id'].linked_registrations.relationships.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCollectionsCollectionIdLinkedRegistrationsRelationshipsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexQueryKey>
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
      ...getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexMutationKey() {
  return [
    'collections',
    '/collections/:collection_id/linked_registrations/relationships/',
    'POST',
  ] as const
}

export function getPostCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_id'].linked_registrations.relationships.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostCollectionsCollectionIdLinkedRegistrationsRelationshipsIndex<
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
                  (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$post']
        >,
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
    const mutationDefaults =
      getPostCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexMutationOptions<
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

export function getDeleteCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexMutationKey() {
  return [
    'collections',
    '/collections/:collection_id/linked_registrations/relationships/',
    'DELETE',
  ] as const
}

export function getDeleteCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.collections[':collection_id'].linked_registrations.relationships.index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteCollectionsCollectionIdLinkedRegistrationsRelationshipsIndex<
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
                  (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexMutationOptions<
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

export function getCommentsCommentIdIndexQueryKey(
  args: InferRequestType<(typeof client.comments)[':comment_id']['index']['$get']>,
) {
  return ['comments', '/comments/:comment_id/', args] as const
}

export function getCommentsCommentIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comments)[':comment_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.comments)[':comment_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.comments)[':comment_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommentsCommentIdIndexQueryKey>
  >({
    queryKey: getCommentsCommentIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.comments[':comment_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCommentsCommentIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.comments)[':comment_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.comments)[':comment_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.comments)[':comment_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommentsCommentIdIndexQueryKey>
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
      ...getCommentsCommentIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutCommentsCommentIdIndexMutationKey() {
  return ['comments', '/comments/:comment_id/', 'PUT'] as const
}

export function getPutCommentsCommentIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.comments)[':comment_id']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.comments)[':comment_id']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCommentsCommentIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.comments)[':comment_id']['index']['$put']>,
    ) {
      return parseResponse(client.comments[':comment_id'].index.$put(args, options))
    },
  })
}

export function createPutCommentsCommentIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.comments)[':comment_id']['index']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.comments)[':comment_id']['index']['$put']>,
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
    const mutationDefaults = getPutCommentsCommentIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCommentsCommentIdIndexMutationKey() {
  return ['comments', '/comments/:comment_id/', 'DELETE'] as const
}

export function getDeleteCommentsCommentIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.comments)[':comment_id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.comments)[':comment_id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCommentsCommentIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.comments)[':comment_id']['index']['$delete']>,
    ) {
      return parseResponse(client.comments[':comment_id'].index.$delete(args, options))
    },
  })
}

export function createDeleteCommentsCommentIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.comments)[':comment_id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.comments)[':comment_id']['index']['$delete']>,
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
    const mutationDefaults = getDeleteCommentsCommentIdIndexMutationOptions<
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

export function getDraftRegistrationsIndexQueryKey() {
  return ['draft_registrations', '/draft_registrations/'] as const
}

export function getDraftRegistrationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.draft_registrations.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.draft_registrations.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDraftRegistrationsIndexQueryKey>
  >({
    queryKey: getDraftRegistrationsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.draft_registrations.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDraftRegistrationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.draft_registrations.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.draft_registrations.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDraftRegistrationsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDraftRegistrationsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostDraftRegistrationsIndexMutationKey() {
  return ['draft_registrations', '/draft_registrations/', 'POST'] as const
}

export function getPostDraftRegistrationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.draft_registrations.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.draft_registrations.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDraftRegistrationsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.draft_registrations.index.$post>) {
      return parseResponse(client.draft_registrations.index.$post(args, options))
    },
  })
}

export function createPostDraftRegistrationsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.draft_registrations.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.draft_registrations.index.$post>,
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
    const mutationDefaults = getPostDraftRegistrationsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDraftRegistrationsDraftIdIndexQueryKey(
  args: InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>,
) {
  return ['draft_registrations', '/draft_registrations/:draft_id/', args] as const
}

export function getDraftRegistrationsDraftIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDraftRegistrationsDraftIdIndexQueryKey>
  >({
    queryKey: getDraftRegistrationsDraftIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.draft_registrations[':draft_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDraftRegistrationsDraftIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDraftRegistrationsDraftIdIndexQueryKey>
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
      ...getDraftRegistrationsDraftIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteDraftRegistrationsDraftIdIndexMutationKey() {
  return ['draft_registrations', '/draft_registrations/:draft_id/', 'DELETE'] as const
}

export function getDeleteDraftRegistrationsDraftIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.draft_registrations)[':draft_id']['index']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDraftRegistrationsDraftIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$delete']>,
    ) {
      return parseResponse(client.draft_registrations[':draft_id'].index.$delete(args, options))
    },
  })
}

export function createDeleteDraftRegistrationsDraftIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.draft_registrations)[':draft_id']['index']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$delete']>,
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
    const mutationDefaults = getDeleteDraftRegistrationsDraftIdIndexMutationOptions<
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

export function getPatchDraftRegistrationsDraftIdIndexMutationKey() {
  return ['draft_registrations', '/draft_registrations/:draft_id/', 'PATCH'] as const
}

export function getPatchDraftRegistrationsDraftIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.draft_registrations)[':draft_id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDraftRegistrationsDraftIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$patch']>,
    ) {
      return parseResponse(client.draft_registrations[':draft_id'].index.$patch(args, options))
    },
  })
}

export function createPatchDraftRegistrationsDraftIdIndex<
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
                ReturnType<(typeof client.draft_registrations)[':draft_id']['index']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$patch']>,
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
    const mutationDefaults = getPatchDraftRegistrationsDraftIdIndexMutationOptions<
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

export function getDraftRegistrationsDraftIdContributorsIndexQueryKey(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
  >,
) {
  return ['draft_registrations', '/draft_registrations/:draft_id/contributors/', args] as const
}

export function getDraftRegistrationsDraftIdContributorsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDraftRegistrationsDraftIdContributorsIndexQueryKey>
  >({
    queryKey: getDraftRegistrationsDraftIdContributorsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.draft_registrations[':draft_id'].contributors.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDraftRegistrationsDraftIdContributorsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDraftRegistrationsDraftIdContributorsIndexQueryKey>
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
      ...getDraftRegistrationsDraftIdContributorsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostDraftRegistrationsDraftIdContributorsIndexMutationKey() {
  return ['draft_registrations', '/draft_registrations/:draft_id/contributors/', 'POST'] as const
}

export function getPostDraftRegistrationsDraftIdContributorsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDraftRegistrationsDraftIdContributorsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.draft_registrations[':draft_id'].contributors.index.$post(args, options),
      )
    },
  })
}

export function createPostDraftRegistrationsDraftIdContributorsIndex<
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
                  (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$post']
        >,
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
    const mutationDefaults = getPostDraftRegistrationsDraftIdContributorsIndexMutationOptions<
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

export function getDraftRegistrationsDraftIdContributorsUserIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
  >,
) {
  return [
    'draft_registrations',
    '/draft_registrations/:draft_id/contributors/:user_id/',
    args,
  ] as const
}

export function getDraftRegistrationsDraftIdContributorsUserIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDraftRegistrationsDraftIdContributorsUserIdIndexQueryKey>
  >({
    queryKey: getDraftRegistrationsDraftIdContributorsUserIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.draft_registrations[':draft_id'].contributors[':user_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDraftRegistrationsDraftIdContributorsUserIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDraftRegistrationsDraftIdContributorsUserIdIndexQueryKey>
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
      ...getDraftRegistrationsDraftIdContributorsUserIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDraftRegistrationsDraftIdInstitutionsIndexQueryKey(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
  >,
) {
  return ['draft_registrations', '/draft_registrations/:draft_id/institutions/', args] as const
}

export function getDraftRegistrationsDraftIdInstitutionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDraftRegistrationsDraftIdInstitutionsIndexQueryKey>
  >({
    queryKey: getDraftRegistrationsDraftIdInstitutionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.draft_registrations[':draft_id'].institutions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDraftRegistrationsDraftIdInstitutionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDraftRegistrationsDraftIdInstitutionsIndexQueryKey>
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
      ...getDraftRegistrationsDraftIdInstitutionsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDraftRegistrationsDraftIdSubjectsIndexQueryKey(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']
  >,
) {
  return ['draft_registrations', '/draft_registrations/:draft_id/subjects/', args] as const
}

export function getDraftRegistrationsDraftIdSubjectsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDraftRegistrationsDraftIdSubjectsIndexQueryKey>
  >({
    queryKey: getDraftRegistrationsDraftIdSubjectsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.draft_registrations[':draft_id'].subjects.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDraftRegistrationsDraftIdSubjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDraftRegistrationsDraftIdSubjectsIndexQueryKey>
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
      ...getDraftRegistrationsDraftIdSubjectsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFilesFileIdIndexQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['index']['$get']>,
) {
  return ['files', '/files/:file_id/', args] as const
}

export function getFilesFileIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdIndexQueryKey>
  >({
    queryKey: getFilesFileIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilesFileIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':file_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFilesFileIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchFilesFileIdIndexMutationKey() {
  return ['files', '/files/:file_id/', 'PATCH'] as const
}

export function getPatchFilesFileIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.files)[':file_id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchFilesFileIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':file_id']['index']['$patch']>) {
      return parseResponse(client.files[':file_id'].index.$patch(args, options))
    },
  })
}

export function createPatchFilesFileIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.files)[':file_id']['index']['$patch']>,
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
    const mutationDefaults = getPatchFilesFileIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesFileIdVersionsIndexQueryKey(
  args: InferRequestType<(typeof client.files)[':file_id']['versions']['index']['$get']>,
) {
  return ['files', '/files/:file_id/versions/', args] as const
}

export function getFilesFileIdVersionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['versions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdVersionsIndexQueryKey>
  >({
    queryKey: getFilesFileIdVersionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].versions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilesFileIdVersionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':file_id']['versions']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdVersionsIndexQueryKey>
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
      ...getFilesFileIdVersionsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFilesFileIdVersionsVersionIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']
  >,
) {
  return ['files', '/files/:file_id/versions/:version_id/', args] as const
}

export function getFilesFileIdVersionsVersionIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesFileIdVersionsVersionIdIndexQueryKey>
  >({
    queryKey: getFilesFileIdVersionsVersionIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':file_id'].versions[':version_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilesFileIdVersionsVersionIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFilesFileIdVersionsVersionIdIndexQueryKey>
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
      ...getFilesFileIdVersionsVersionIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInstitutionsIndexQueryKey() {
  return ['institutions', '/institutions/'] as const
}

export function getInstitutionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutions.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutions.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInstitutionsIndexQueryKey>
  >({
    queryKey: getInstitutionsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.institutions.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInstitutionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutions.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.institutions.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstitutionsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInstitutionsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getInstitutionsInstitutionIdIndexQueryKey(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['index']['$get']>,
) {
  return ['institutions', '/institutions/:institution_id/', args] as const
}

export function getInstitutionsInstitutionIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.institutions)[':institution_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.institutions)[':institution_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstitutionsInstitutionIdIndexQueryKey>
  >({
    queryKey: getInstitutionsInstitutionIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.institutions[':institution_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInstitutionsInstitutionIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.institutions)[':institution_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.institutions)[':institution_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.institutions)[':institution_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstitutionsInstitutionIdIndexQueryKey>
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
      ...getInstitutionsInstitutionIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInstitutionsInstitutionIdNodesIndexQueryKey(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['nodes']['index']['$get']>,
) {
  return ['institutions', '/institutions/:institution_id/nodes/', args] as const
}

export function getInstitutionsInstitutionIdNodesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.institutions)[':institution_id']['nodes']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['nodes']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.institutions)[':institution_id']['nodes']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstitutionsInstitutionIdNodesIndexQueryKey>
  >({
    queryKey: getInstitutionsInstitutionIdNodesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.institutions[':institution_id'].nodes.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInstitutionsInstitutionIdNodesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.institutions)[':institution_id']['nodes']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.institutions)[':institution_id']['nodes']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.institutions)[':institution_id']['nodes']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstitutionsInstitutionIdNodesIndexQueryKey>
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
      ...getInstitutionsInstitutionIdNodesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInstitutionsInstitutionIdRegistrationsIndexQueryKey(
  args: InferRequestType<
    (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
  >,
) {
  return ['institutions', '/institutions/:institution_id/registrations/', args] as const
}

export function getInstitutionsInstitutionIdRegistrationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstitutionsInstitutionIdRegistrationsIndexQueryKey>
  >({
    queryKey: getInstitutionsInstitutionIdRegistrationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.institutions[':institution_id'].registrations.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInstitutionsInstitutionIdRegistrationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstitutionsInstitutionIdRegistrationsIndexQueryKey>
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
      ...getInstitutionsInstitutionIdRegistrationsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getInstitutionsInstitutionIdUsersIndexQueryKey(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['users']['index']['$get']>,
) {
  return ['institutions', '/institutions/:institution_id/users/', args] as const
}

export function getInstitutionsInstitutionIdUsersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.institutions)[':institution_id']['users']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['users']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.institutions)[':institution_id']['users']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInstitutionsInstitutionIdUsersIndexQueryKey>
  >({
    queryKey: getInstitutionsInstitutionIdUsersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.institutions[':institution_id'].users.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInstitutionsInstitutionIdUsersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.institutions)[':institution_id']['users']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.institutions)[':institution_id']['users']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.institutions)[':institution_id']['users']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInstitutionsInstitutionIdUsersIndexQueryKey>
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
      ...getInstitutionsInstitutionIdUsersIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLicenseLicenseIdIndexQueryKey(
  args: InferRequestType<(typeof client.license)[':license_id']['index']['$get']>,
) {
  return ['license', '/license/:license_id/', args] as const
}

export function getLicenseLicenseIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.license)[':license_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.license)[':license_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.license)[':license_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLicenseLicenseIdIndexQueryKey>
  >({
    queryKey: getLicenseLicenseIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.license[':license_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLicenseLicenseIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.license)[':license_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.license)[':license_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.license)[':license_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLicenseLicenseIdIndexQueryKey>
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
      ...getLicenseLicenseIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLicensesIndexQueryKey() {
  return ['licenses', '/licenses/'] as const
}

export function getLicensesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLicensesIndexQueryKey>
  >({
    queryKey: getLicensesIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.licenses.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLicensesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLicensesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLicensesIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLogsLogIdIndexQueryKey(
  args: InferRequestType<(typeof client.logs)[':log_id']['index']['$get']>,
) {
  return ['logs', '/logs/:log_id/', args] as const
}

export function getLogsLogIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':log_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsLogIdIndexQueryKey>
  >({
    queryKey: getLogsLogIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs[':log_id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLogsLogIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.logs)[':log_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs)[':log_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsLogIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogsLogIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNodesIndexQueryKey() {
  return ['nodes', '/nodes/'] as const
}

export function getNodesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodesIndexQueryKey>
  >({
    queryKey: getNodesIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNodesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodesIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostNodesIndexMutationKey() {
  return ['nodes', '/nodes/', 'POST'] as const
}

export function getPostNodesIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.nodes.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNodesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.nodes.index.$post>) {
      return parseResponse(client.nodes.index.$post(args, options))
    },
  })
}

export function createPostNodesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.nodes.index.$post>,
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
    const mutationDefaults = getPostNodesIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNodesNodeIdIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/', args] as const
}

export function getNodesNodeIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdIndexQueryKey>
  >({
    queryKey: getNodesNodeIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nodes)[':node_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNodesNodeIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteNodesNodeIdIndexMutationKey() {
  return ['nodes', '/nodes/:node_id/', 'DELETE'] as const
}

export function getDeleteNodesNodeIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.nodes)[':node_id']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNodesNodeIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.nodes)[':node_id']['index']['$delete']>,
    ) {
      return parseResponse(client.nodes[':node_id'].index.$delete(args, options))
    },
  })
}

export function createDeleteNodesNodeIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.nodes)[':node_id']['index']['$delete']>,
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
    const mutationDefaults = getDeleteNodesNodeIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchNodesNodeIdIndexMutationKey() {
  return ['nodes', '/nodes/:node_id/', 'PATCH'] as const
}

export function getPatchNodesNodeIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nodes)[':node_id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNodesNodeIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.nodes)[':node_id']['index']['$patch']>) {
      return parseResponse(client.nodes[':node_id'].index.$patch(args, options))
    },
  })
}

export function createPatchNodesNodeIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.nodes)[':node_id']['index']['$patch']>,
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
    const mutationDefaults = getPatchNodesNodeIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNodesNodeIdAddonsIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/addons/', args] as const
}

export function getNodesNodeIdAddonsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdAddonsIndexQueryKey>
  >({
    queryKey: getNodesNodeIdAddonsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].addons.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdAddonsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdAddonsIndexQueryKey>
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
      ...getNodesNodeIdAddonsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNodesNodeIdAddonsProviderIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/addons/:provider/', args] as const
}

export function getNodesNodeIdAddonsProviderIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdAddonsProviderIndexQueryKey>
  >({
    queryKey: getNodesNodeIdAddonsProviderIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].addons[':provider'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdAddonsProviderIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdAddonsProviderIndexQueryKey>
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
      ...getNodesNodeIdAddonsProviderIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchNodesNodeIdAddonsProviderIndexMutationKey() {
  return ['nodes', '/nodes/:node_id/addons/:provider/', 'PATCH'] as const
}

export function getPatchNodesNodeIdAddonsProviderIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNodesNodeIdAddonsProviderIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodes)[':node_id']['addons'][':provider']['index']['$patch']
      >,
    ) {
      return parseResponse(client.nodes[':node_id'].addons[':provider'].index.$patch(args, options))
    },
  })
}

export function createPatchNodesNodeIdAddonsProviderIndex<
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
                  (typeof client.nodes)[':node_id']['addons'][':provider']['index']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.nodes)[':node_id']['addons'][':provider']['index']['$patch']
        >,
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
    const mutationDefaults = getPatchNodesNodeIdAddonsProviderIndexMutationOptions<
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

export function getNodesNodeIdAddonsProviderFoldersIndexQueryKey(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
  >,
) {
  return ['nodes', '/nodes/:node_id/addons/:provider/folders/', args] as const
}

export function getNodesNodeIdAddonsProviderFoldersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdAddonsProviderFoldersIndexQueryKey>
  >({
    queryKey: getNodesNodeIdAddonsProviderFoldersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].addons[':provider'].folders.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdAddonsProviderFoldersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdAddonsProviderFoldersIndexQueryKey>
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
      ...getNodesNodeIdAddonsProviderFoldersIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNodesNodeIdChildrenIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['children']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/children/', args] as const
}

export function getNodesNodeIdChildrenIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['children']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['children']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['children']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdChildrenIndexQueryKey>
  >({
    queryKey: getNodesNodeIdChildrenIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].children.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdChildrenIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['children']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nodes)[':node_id']['children']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':node_id']['children']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdChildrenIndexQueryKey>
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
      ...getNodesNodeIdChildrenIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostNodesNodeIdChildrenIndexMutationKey() {
  return ['nodes', '/nodes/:node_id/children/', 'POST'] as const
}

export function getPostNodesNodeIdChildrenIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['children']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nodes)[':node_id']['children']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNodesNodeIdChildrenIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.nodes)[':node_id']['children']['index']['$post']>,
    ) {
      return parseResponse(client.nodes[':node_id'].children.index.$post(args, options))
    },
  })
}

export function createPostNodesNodeIdChildrenIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':node_id']['children']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.nodes)[':node_id']['children']['index']['$post']>,
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
    const mutationDefaults = getPostNodesNodeIdChildrenIndexMutationOptions<
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

export function getNodesNodeIdCitationIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/citation/', args] as const
}

export function getNodesNodeIdCitationIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdCitationIndexQueryKey>
  >({
    queryKey: getNodesNodeIdCitationIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].citation.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdCitationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdCitationIndexQueryKey>
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
      ...getNodesNodeIdCitationIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNodesNodeIdCitationStyleIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']
  >,
) {
  return ['nodes', '/nodes/:node_id/citation/:style_id/', args] as const
}

export function getNodesNodeIdCitationStyleIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdCitationStyleIdIndexQueryKey>
  >({
    queryKey: getNodesNodeIdCitationStyleIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].citation[':style_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdCitationStyleIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdCitationStyleIdIndexQueryKey>
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
      ...getNodesNodeIdCitationStyleIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNodesNodeIdCommentsIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/comments/', args] as const
}

export function getNodesNodeIdCommentsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdCommentsIndexQueryKey>
  >({
    queryKey: getNodesNodeIdCommentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].comments.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdCommentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdCommentsIndexQueryKey>
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
      ...getNodesNodeIdCommentsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostNodesNodeIdCommentsIndexMutationKey() {
  return ['nodes', '/nodes/:node_id/comments/', 'POST'] as const
}

export function getPostNodesNodeIdCommentsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['comments']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nodes)[':node_id']['comments']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNodesNodeIdCommentsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.nodes)[':node_id']['comments']['index']['$post']>,
    ) {
      return parseResponse(client.nodes[':node_id'].comments.index.$post(args, options))
    },
  })
}

export function createPostNodesNodeIdCommentsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':node_id']['comments']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.nodes)[':node_id']['comments']['index']['$post']>,
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
    const mutationDefaults = getPostNodesNodeIdCommentsIndexMutationOptions<
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

export function getNodesNodeIdContributorsIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/contributors/', args] as const
}

export function getNodesNodeIdContributorsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdContributorsIndexQueryKey>
  >({
    queryKey: getNodesNodeIdContributorsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].contributors.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdContributorsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdContributorsIndexQueryKey>
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
      ...getNodesNodeIdContributorsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostNodesNodeIdContributorsIndexMutationKey() {
  return ['nodes', '/nodes/:node_id/contributors/', 'POST'] as const
}

export function getPostNodesNodeIdContributorsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['contributors']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nodes)[':node_id']['contributors']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNodesNodeIdContributorsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.nodes)[':node_id']['contributors']['index']['$post']>,
    ) {
      return parseResponse(client.nodes[':node_id'].contributors.index.$post(args, options))
    },
  })
}

export function createPostNodesNodeIdContributorsIndex<
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
                ReturnType<(typeof client.nodes)[':node_id']['contributors']['index']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.nodes)[':node_id']['contributors']['index']['$post']>,
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
    const mutationDefaults = getPostNodesNodeIdContributorsIndexMutationOptions<
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

export function getNodesNodeIdContributorsUserIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']
  >,
) {
  return ['nodes', '/nodes/:node_id/contributors/:user_id/', args] as const
}

export function getNodesNodeIdContributorsUserIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdContributorsUserIdIndexQueryKey>
  >({
    queryKey: getNodesNodeIdContributorsUserIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].contributors[':user_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdContributorsUserIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdContributorsUserIdIndexQueryKey>
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
      ...getNodesNodeIdContributorsUserIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteNodesNodeIdContributorsUserIdIndexMutationKey() {
  return ['nodes', '/nodes/:node_id/contributors/:user_id/', 'DELETE'] as const
}

export function getDeleteNodesNodeIdContributorsUserIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNodesNodeIdContributorsUserIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.nodes[':node_id'].contributors[':user_id'].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteNodesNodeIdContributorsUserIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$delete']
        >,
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
    const mutationDefaults = getDeleteNodesNodeIdContributorsUserIdIndexMutationOptions<
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

export function getPatchNodesNodeIdContributorsUserIdIndexMutationKey() {
  return ['nodes', '/nodes/:node_id/contributors/:user_id/', 'PATCH'] as const
}

export function getPatchNodesNodeIdContributorsUserIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchNodesNodeIdContributorsUserIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.nodes[':node_id'].contributors[':user_id'].index.$patch(args, options),
      )
    },
  })
}

export function createPatchNodesNodeIdContributorsUserIdIndex<
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
                  (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$patch']
        >,
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
    const mutationDefaults = getPatchNodesNodeIdContributorsUserIdIndexMutationOptions<
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

export function getNodesNodeIdDraftRegistrationsIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/draft_registrations/', args] as const
}

export function getNodesNodeIdDraftRegistrationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdDraftRegistrationsIndexQueryKey>
  >({
    queryKey: getNodesNodeIdDraftRegistrationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].draft_registrations.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdDraftRegistrationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdDraftRegistrationsIndexQueryKey>
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
      ...getNodesNodeIdDraftRegistrationsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostNodesNodeIdDraftRegistrationsIndexMutationKey() {
  return ['nodes', '/nodes/:node_id/draft_registrations/', 'POST'] as const
}

export function getPostNodesNodeIdDraftRegistrationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNodesNodeIdDraftRegistrationsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodes)[':node_id']['draft_registrations']['index']['$post']
      >,
    ) {
      return parseResponse(client.nodes[':node_id'].draft_registrations.index.$post(args, options))
    },
  })
}

export function createPostNodesNodeIdDraftRegistrationsIndex<
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
                  (typeof client.nodes)[':node_id']['draft_registrations']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.nodes)[':node_id']['draft_registrations']['index']['$post']
        >,
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
    const mutationDefaults = getPostNodesNodeIdDraftRegistrationsIndexMutationOptions<
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

export function getNodesNodeIdDraftRegistrationsDraftIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
  >,
) {
  return ['nodes', '/nodes/:node_id/draft_registrations/:draft_id/', args] as const
}

export function getNodesNodeIdDraftRegistrationsDraftIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdDraftRegistrationsDraftIdIndexQueryKey>
  >({
    queryKey: getNodesNodeIdDraftRegistrationsDraftIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].draft_registrations[':draft_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdDraftRegistrationsDraftIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdDraftRegistrationsDraftIdIndexQueryKey>
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
      ...getNodesNodeIdDraftRegistrationsDraftIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteNodesNodeIdDraftRegistrationsDraftIdIndexMutationKey() {
  return ['nodes', '/nodes/:node_id/draft_registrations/:draft_id/', 'DELETE'] as const
}

export function getDeleteNodesNodeIdDraftRegistrationsDraftIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNodesNodeIdDraftRegistrationsDraftIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.nodes[':node_id'].draft_registrations[':draft_id'].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteNodesNodeIdDraftRegistrationsDraftIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$delete']
        >,
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
    const mutationDefaults = getDeleteNodesNodeIdDraftRegistrationsDraftIdIndexMutationOptions<
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

export function getPatchNodesNodeIdDraftRegistrationsDraftIdIndexMutationKey() {
  return ['nodes', '/nodes/:node_id/draft_registrations/:draft_id/', 'PATCH'] as const
}

export function getPatchNodesNodeIdDraftRegistrationsDraftIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchNodesNodeIdDraftRegistrationsDraftIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.nodes[':node_id'].draft_registrations[':draft_id'].index.$patch(args, options),
      )
    },
  })
}

export function createPatchNodesNodeIdDraftRegistrationsDraftIdIndex<
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
                  (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$patch']
        >,
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
    const mutationDefaults = getPatchNodesNodeIdDraftRegistrationsDraftIdIndexMutationOptions<
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

export function getNodesNodeIdFilesIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['files']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/files/', args] as const
}

export function getNodesNodeIdFilesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['files']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['files']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['files']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdFilesIndexQueryKey>
  >({
    queryKey: getNodesNodeIdFilesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].files.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdFilesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['files']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nodes)[':node_id']['files']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':node_id']['files']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdFilesIndexQueryKey>
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
      ...getNodesNodeIdFilesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNodesNodeIdFilesProvidersProviderIndexQueryKey(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
  >,
) {
  return ['nodes', '/nodes/:node_id/files/providers/:provider/', args] as const
}

export function getNodesNodeIdFilesProvidersProviderIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdFilesProvidersProviderIndexQueryKey>
  >({
    queryKey: getNodesNodeIdFilesProvidersProviderIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].files.providers[':provider'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdFilesProvidersProviderIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdFilesProvidersProviderIndexQueryKey>
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
      ...getNodesNodeIdFilesProvidersProviderIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNodesNodeIdFilesProviderIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/files/:provider/', args] as const
}

export function getNodesNodeIdFilesProviderIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdFilesProviderIndexQueryKey>
  >({
    queryKey: getNodesNodeIdFilesProviderIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].files[':provider'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdFilesProviderIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdFilesProviderIndexQueryKey>
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
      ...getNodesNodeIdFilesProviderIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNodesNodeIdFilesProviderPathIndexQueryKey(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
  >,
) {
  return ['nodes', '/nodes/:node_id/files/:provider/:path/', args] as const
}

export function getNodesNodeIdFilesProviderPathIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdFilesProviderPathIndexQueryKey>
  >({
    queryKey: getNodesNodeIdFilesProviderPathIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].files[':provider'][':path'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdFilesProviderPathIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdFilesProviderPathIndexQueryKey>
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
      ...getNodesNodeIdFilesProviderPathIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNodesNodeIdForksIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/forks/', args] as const
}

export function getNodesNodeIdForksIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdForksIndexQueryKey>
  >({
    queryKey: getNodesNodeIdForksIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].forks.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdForksIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdForksIndexQueryKey>
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
      ...getNodesNodeIdForksIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostNodesNodeIdForksIndexMutationKey() {
  return ['nodes', '/nodes/:node_id/forks/', 'POST'] as const
}

export function getPostNodesNodeIdForksIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['forks']['index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nodes)[':node_id']['forks']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNodesNodeIdForksIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.nodes)[':node_id']['forks']['index']['$post']>,
    ) {
      return parseResponse(client.nodes[':node_id'].forks.index.$post(args, options))
    },
  })
}

export function createPostNodesNodeIdForksIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':node_id']['forks']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.nodes)[':node_id']['forks']['index']['$post']>,
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
    const mutationDefaults = getPostNodesNodeIdForksIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNodesNodeIdIdentifiersIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/identifiers/', args] as const
}

export function getNodesNodeIdIdentifiersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdIdentifiersIndexQueryKey>
  >({
    queryKey: getNodesNodeIdIdentifiersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].identifiers.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdIdentifiersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdIdentifiersIndexQueryKey>
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
      ...getNodesNodeIdIdentifiersIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNodesNodeIdInstitutionsIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/institutions/', args] as const
}

export function getNodesNodeIdInstitutionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdInstitutionsIndexQueryKey>
  >({
    queryKey: getNodesNodeIdInstitutionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].institutions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdInstitutionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdInstitutionsIndexQueryKey>
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
      ...getNodesNodeIdInstitutionsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNodesNodeIdLinkedNodesIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/linked_nodes/', args] as const
}

export function getNodesNodeIdLinkedNodesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdLinkedNodesIndexQueryKey>
  >({
    queryKey: getNodesNodeIdLinkedNodesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].linked_nodes.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdLinkedNodesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdLinkedNodesIndexQueryKey>
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
      ...getNodesNodeIdLinkedNodesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNodesNodeIdLogsIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/logs/', args] as const
}

export function getNodesNodeIdLogsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdLogsIndexQueryKey>
  >({
    queryKey: getNodesNodeIdLogsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].logs.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdLogsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdLogsIndexQueryKey>
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
      ...getNodesNodeIdLogsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNodesNodeIdPreprintsIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/preprints/', args] as const
}

export function getNodesNodeIdPreprintsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdPreprintsIndexQueryKey>
  >({
    queryKey: getNodesNodeIdPreprintsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].preprints.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdPreprintsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdPreprintsIndexQueryKey>
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
      ...getNodesNodeIdPreprintsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNodesNodeIdRegistrationsIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/registrations/', args] as const
}

export function getNodesNodeIdRegistrationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdRegistrationsIndexQueryKey>
  >({
    queryKey: getNodesNodeIdRegistrationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].registrations.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdRegistrationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdRegistrationsIndexQueryKey>
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
      ...getNodesNodeIdRegistrationsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNodesNodeIdViewOnlyLinksIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/view_only_links/', args] as const
}

export function getNodesNodeIdViewOnlyLinksIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdViewOnlyLinksIndexQueryKey>
  >({
    queryKey: getNodesNodeIdViewOnlyLinksIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].view_only_links.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdViewOnlyLinksIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.nodes)[':node_id']['view_only_links']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdViewOnlyLinksIndexQueryKey>
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
      ...getNodesNodeIdViewOnlyLinksIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNodesNodeIdViewOnlyLinksLinkIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
  >,
) {
  return ['nodes', '/nodes/:node_id/view_only_links/:link_id/', args] as const
}

export function getNodesNodeIdViewOnlyLinksLinkIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdViewOnlyLinksLinkIdIndexQueryKey>
  >({
    queryKey: getNodesNodeIdViewOnlyLinksLinkIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].view_only_links[':link_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdViewOnlyLinksLinkIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdViewOnlyLinksLinkIdIndexQueryKey>
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
      ...getNodesNodeIdViewOnlyLinksLinkIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNodesNodeIdWikisIndexQueryKey(
  args: InferRequestType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>,
) {
  return ['nodes', '/nodes/:node_id/wikis/', args] as const
}

export function getNodesNodeIdWikisIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdWikisIndexQueryKey>
  >({
    queryKey: getNodesNodeIdWikisIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':node_id'].wikis.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNodesNodeIdWikisIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdWikisIndexQueryKey>
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
      ...getNodesNodeIdWikisIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPreprintProvidersIndexQueryKey() {
  return ['preprint_providers', '/preprint_providers/'] as const
}

export function getPreprintProvidersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.preprint_providers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.preprint_providers.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreprintProvidersIndexQueryKey>
  >({
    queryKey: getPreprintProvidersIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.preprint_providers.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreprintProvidersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.preprint_providers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.preprint_providers.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPreprintProvidersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPreprintProvidersIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPreprintProvidersPreprintProviderIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']
  >,
) {
  return ['preprint_providers', '/preprint_providers/:preprint_provider_id/', args] as const
}

export function getPreprintProvidersPreprintProviderIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreprintProvidersPreprintProviderIdIndexQueryKey>
  >({
    queryKey: getPreprintProvidersPreprintProviderIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preprint_providers[':preprint_provider_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreprintProvidersPreprintProviderIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPreprintProvidersPreprintProviderIdIndexQueryKey>
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
      ...getPreprintProvidersPreprintProviderIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPreprintProvidersPreprintProviderIdLicensesIndexQueryKey(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
  >,
) {
  return [
    'preprint_providers',
    '/preprint_providers/:preprint_provider_id/licenses/',
    args,
  ] as const
}

export function getPreprintProvidersPreprintProviderIdLicensesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreprintProvidersPreprintProviderIdLicensesIndexQueryKey>
  >({
    queryKey: getPreprintProvidersPreprintProviderIdLicensesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preprint_providers[':preprint_provider_id'].licenses.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreprintProvidersPreprintProviderIdLicensesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPreprintProvidersPreprintProviderIdLicensesIndexQueryKey>
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
      ...getPreprintProvidersPreprintProviderIdLicensesIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPreprintProvidersPreprintProviderIdPreprintsIndexQueryKey(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
  >,
) {
  return [
    'preprint_providers',
    '/preprint_providers/:preprint_provider_id/preprints/',
    args,
  ] as const
}

export function getPreprintProvidersPreprintProviderIdPreprintsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreprintProvidersPreprintProviderIdPreprintsIndexQueryKey>
  >({
    queryKey: getPreprintProvidersPreprintProviderIdPreprintsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preprint_providers[':preprint_provider_id'].preprints.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreprintProvidersPreprintProviderIdPreprintsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPreprintProvidersPreprintProviderIdPreprintsIndexQueryKey>
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
      ...getPreprintProvidersPreprintProviderIdPreprintsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPreprintProvidersPreprintProviderIdTaxonomiesIndexQueryKey(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
  >,
) {
  return [
    'preprint_providers',
    '/preprint_providers/:preprint_provider_id/taxonomies/',
    args,
  ] as const
}

export function getPreprintProvidersPreprintProviderIdTaxonomiesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreprintProvidersPreprintProviderIdTaxonomiesIndexQueryKey>
  >({
    queryKey: getPreprintProvidersPreprintProviderIdTaxonomiesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preprint_providers[':preprint_provider_id'].taxonomies.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreprintProvidersPreprintProviderIdTaxonomiesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPreprintProvidersPreprintProviderIdTaxonomiesIndexQueryKey>
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
      ...getPreprintProvidersPreprintProviderIdTaxonomiesIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPreprintsIndexQueryKey() {
  return ['preprints', '/preprints/'] as const
}

export function getPreprintsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPreprintsIndexQueryKey>
  >({
    queryKey: getPreprintsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.preprints.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPreprintsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPreprintsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPreprintsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostPreprintsIndexMutationKey() {
  return ['preprints', '/preprints/', 'POST'] as const
}

export function getPostPreprintsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.preprints.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPreprintsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.preprints.index.$post>) {
      return parseResponse(client.preprints.index.$post(args, options))
    },
  })
}

export function createPostPreprintsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.preprints.index.$post>,
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
    const mutationDefaults = getPostPreprintsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPreprintsPreprintIdIndexQueryKey(
  args: InferRequestType<(typeof client.preprints)[':preprint_id']['index']['$get']>,
) {
  return ['preprints', '/preprints/:preprint_id/', args] as const
}

export function getPreprintsPreprintIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preprints)[':preprint_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.preprints)[':preprint_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.preprints)[':preprint_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreprintsPreprintIdIndexQueryKey>
  >({
    queryKey: getPreprintsPreprintIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preprints[':preprint_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreprintsPreprintIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preprints)[':preprint_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.preprints)[':preprint_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.preprints)[':preprint_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPreprintsPreprintIdIndexQueryKey>
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
      ...getPreprintsPreprintIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchPreprintsPreprintIdIndexMutationKey() {
  return ['preprints', '/preprints/:preprint_id/', 'PATCH'] as const
}

export function getPatchPreprintsPreprintIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.preprints)[':preprint_id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.preprints)[':preprint_id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPreprintsPreprintIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.preprints)[':preprint_id']['index']['$patch']>,
    ) {
      return parseResponse(client.preprints[':preprint_id'].index.$patch(args, options))
    },
  })
}

export function createPatchPreprintsPreprintIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.preprints)[':preprint_id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.preprints)[':preprint_id']['index']['$patch']>,
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
    const mutationDefaults = getPatchPreprintsPreprintIdIndexMutationOptions<
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

export function getPreprintsPreprintIdBibliographicContributorsIndexQueryKey(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
  >,
) {
  return ['preprints', '/preprints/:preprint_id/bibliographic_contributors/', args] as const
}

export function getPreprintsPreprintIdBibliographicContributorsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreprintsPreprintIdBibliographicContributorsIndexQueryKey>
  >({
    queryKey: getPreprintsPreprintIdBibliographicContributorsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preprints[':preprint_id'].bibliographic_contributors.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreprintsPreprintIdBibliographicContributorsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPreprintsPreprintIdBibliographicContributorsIndexQueryKey>
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
      ...getPreprintsPreprintIdBibliographicContributorsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPreprintsPreprintIdCitationIndexQueryKey(
  args: InferRequestType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>,
) {
  return ['preprints', '/preprints/:preprint_id/citation/', args] as const
}

export function getPreprintsPreprintIdCitationIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreprintsPreprintIdCitationIndexQueryKey>
  >({
    queryKey: getPreprintsPreprintIdCitationIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preprints[':preprint_id'].citation.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreprintsPreprintIdCitationIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.preprints)[':preprint_id']['citation']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPreprintsPreprintIdCitationIndexQueryKey>
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
      ...getPreprintsPreprintIdCitationIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPreprintsPreprintIdCitationStyleIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
  >,
) {
  return ['preprints', '/preprints/:preprint_id/citation/:style_id/', args] as const
}

export function getPreprintsPreprintIdCitationStyleIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreprintsPreprintIdCitationStyleIdIndexQueryKey>
  >({
    queryKey: getPreprintsPreprintIdCitationStyleIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preprints[':preprint_id'].citation[':style_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreprintsPreprintIdCitationStyleIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPreprintsPreprintIdCitationStyleIdIndexQueryKey>
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
      ...getPreprintsPreprintIdCitationStyleIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPreprintsPreprintIdContributorsIndexQueryKey(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['contributors']['index']['$get']
  >,
) {
  return ['preprints', '/preprints/:preprint_id/contributors/', args] as const
}

export function getPreprintsPreprintIdContributorsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.preprints)[':preprint_id']['contributors']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['contributors']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.preprints)[':preprint_id']['contributors']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreprintsPreprintIdContributorsIndexQueryKey>
  >({
    queryKey: getPreprintsPreprintIdContributorsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preprints[':preprint_id'].contributors.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreprintsPreprintIdContributorsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.preprints)[':preprint_id']['contributors']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.preprints)[':preprint_id']['contributors']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.preprints)[':preprint_id']['contributors']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPreprintsPreprintIdContributorsIndexQueryKey>
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
      ...getPreprintsPreprintIdContributorsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostPreprintsPreprintIdContributorsIndexMutationKey() {
  return ['preprints', '/preprints/:preprint_id/contributors/', 'POST'] as const
}

export function getPostPreprintsPreprintIdContributorsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.preprints)[':preprint_id']['contributors']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.preprints)[':preprint_id']['contributors']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPreprintsPreprintIdContributorsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.preprints)[':preprint_id']['contributors']['index']['$post']
      >,
    ) {
      return parseResponse(client.preprints[':preprint_id'].contributors.index.$post(args, options))
    },
  })
}

export function createPostPreprintsPreprintIdContributorsIndex<
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
                  (typeof client.preprints)[':preprint_id']['contributors']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.preprints)[':preprint_id']['contributors']['index']['$post']
        >,
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
    const mutationDefaults = getPostPreprintsPreprintIdContributorsIndexMutationOptions<
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

export function getPreprintsPreprintIdContributorsUserIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
  >,
) {
  return ['preprints', '/preprints/:preprint_id/contributors/:user_id/', args] as const
}

export function getPreprintsPreprintIdContributorsUserIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreprintsPreprintIdContributorsUserIdIndexQueryKey>
  >({
    queryKey: getPreprintsPreprintIdContributorsUserIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preprints[':preprint_id'].contributors[':user_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreprintsPreprintIdContributorsUserIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPreprintsPreprintIdContributorsUserIdIndexQueryKey>
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
      ...getPreprintsPreprintIdContributorsUserIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRegistrationsIndexQueryKey() {
  return ['registrations', '/registrations/'] as const
}

export function getRegistrationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrations.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrations.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsIndexQueryKey>
  >({
    queryKey: getRegistrationsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.registrations.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRegistrationsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getRegistrationsRegistrationIdIndexQueryKey(
  args: InferRequestType<(typeof client.registrations)[':registration_id']['index']['$get']>,
) {
  return ['registrations', '/registrations/:registration_id/', args] as const
}

export function getRegistrationsRegistrationIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registrations)[':registration_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.registrations)[':registration_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registrations)[':registration_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registrations)[':registration_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.registrations)[':registration_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.registrations)[':registration_id']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdIndexQueryKey>
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
      ...getRegistrationsRegistrationIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchRegistrationsRegistrationIdIndexMutationKey() {
  return ['registrations', '/registrations/:registration_id/', 'PATCH'] as const
}

export function getPatchRegistrationsRegistrationIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registrations)[':registration_id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.registrations)[':registration_id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRegistrationsRegistrationIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.registrations)[':registration_id']['index']['$patch']>,
    ) {
      return parseResponse(client.registrations[':registration_id'].index.$patch(args, options))
    },
  })
}

export function createPatchRegistrationsRegistrationIdIndex<
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
                ReturnType<(typeof client.registrations)[':registration_id']['index']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.registrations)[':registration_id']['index']['$patch']>,
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
    const mutationDefaults = getPatchRegistrationsRegistrationIdIndexMutationOptions<
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

export function getRegistrationsRegistrationIdChildrenIndexQueryKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['children']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/children/', args] as const
}

export function getRegistrationsRegistrationIdChildrenIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.registrations)[':registration_id']['children']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['children']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registrations)[':registration_id']['children']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdChildrenIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdChildrenIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].children.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdChildrenIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.registrations)[':registration_id']['children']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrations)[':registration_id']['children']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrations)[':registration_id']['children']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdChildrenIndexQueryKey>
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
      ...getRegistrationsRegistrationIdChildrenIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRegistrationsRegistrationIdCitationsIndexQueryKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['citations']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/citations/', args] as const
}

export function getRegistrationsRegistrationIdCitationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['citations']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['citations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registrations)[':registration_id']['citations']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdCitationsIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdCitationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].citations.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdCitationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['citations']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrations)[':registration_id']['citations']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrations)[':registration_id']['citations']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdCitationsIndexQueryKey>
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
      ...getRegistrationsRegistrationIdCitationsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRegistrationsRegistrationIdCitationsCitationIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/citations/:citation_id/', args] as const
}

export function getRegistrationsRegistrationIdCitationsCitationIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdCitationsCitationIdIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdCitationsCitationIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].citations[':citation_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdCitationsCitationIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdCitationsCitationIdIndexQueryKey>
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
      ...getRegistrationsRegistrationIdCitationsCitationIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRegistrationsRegistrationIdCommentsIndexQueryKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['comments']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/comments/', args] as const
}

export function getRegistrationsRegistrationIdCommentsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.registrations)[':registration_id']['comments']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['comments']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registrations)[':registration_id']['comments']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdCommentsIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdCommentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].comments.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdCommentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.registrations)[':registration_id']['comments']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrations)[':registration_id']['comments']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrations)[':registration_id']['comments']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdCommentsIndexQueryKey>
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
      ...getRegistrationsRegistrationIdCommentsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRegistrationsRegistrationIdContributorsIndexQueryKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/contributors/', args] as const
}

export function getRegistrationsRegistrationIdContributorsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdContributorsIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdContributorsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].contributors.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdContributorsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdContributorsIndexQueryKey>
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
      ...getRegistrationsRegistrationIdContributorsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRegistrationsRegistrationIdContributorsUserIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/contributors/:user_id/', args] as const
}

export function getRegistrationsRegistrationIdContributorsUserIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdContributorsUserIdIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdContributorsUserIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].contributors[':user_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdContributorsUserIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdContributorsUserIdIndexQueryKey>
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
      ...getRegistrationsRegistrationIdContributorsUserIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRegistrationsRegistrationIdFilesIndexQueryKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/files/', args] as const
}

export function getRegistrationsRegistrationIdFilesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.registrations)[':registration_id']['files']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.registrations)[':registration_id']['files']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdFilesIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdFilesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].files.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdFilesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.registrations)[':registration_id']['files']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrations)[':registration_id']['files']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrations)[':registration_id']['files']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdFilesIndexQueryKey>
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
      ...getRegistrationsRegistrationIdFilesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRegistrationsRegistrationIdFilesProviderIndexQueryKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/files/:provider/', args] as const
}

export function getRegistrationsRegistrationIdFilesProviderIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdFilesProviderIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdFilesProviderIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].files[':provider'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdFilesProviderIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdFilesProviderIndexQueryKey>
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
      ...getRegistrationsRegistrationIdFilesProviderIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRegistrationsRegistrationIdFilesProviderPathIndexQueryKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/files/:provider/:path/', args] as const
}

export function getRegistrationsRegistrationIdFilesProviderPathIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdFilesProviderPathIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdFilesProviderPathIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].files[':provider'][':path'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdFilesProviderPathIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdFilesProviderPathIndexQueryKey>
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
      ...getRegistrationsRegistrationIdFilesProviderPathIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRegistrationsRegistrationIdForksIndexQueryKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['forks']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/forks/', args] as const
}

export function getRegistrationsRegistrationIdForksIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.registrations)[':registration_id']['forks']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['forks']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.registrations)[':registration_id']['forks']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdForksIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdForksIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].forks.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdForksIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.registrations)[':registration_id']['forks']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrations)[':registration_id']['forks']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrations)[':registration_id']['forks']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdForksIndexQueryKey>
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
      ...getRegistrationsRegistrationIdForksIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostRegistrationsRegistrationIdForksIndexMutationKey() {
  return ['registrations', '/registrations/:registration_id/forks/', 'POST'] as const
}

export function getPostRegistrationsRegistrationIdForksIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.registrations)[':registration_id']['forks']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.registrations)[':registration_id']['forks']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRegistrationsRegistrationIdForksIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.registrations)[':registration_id']['forks']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.registrations[':registration_id'].forks.index.$post(args, options),
      )
    },
  })
}

export function createPostRegistrationsRegistrationIdForksIndex<
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
                  (typeof client.registrations)[':registration_id']['forks']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.registrations)[':registration_id']['forks']['index']['$post']
        >,
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
    const mutationDefaults = getPostRegistrationsRegistrationIdForksIndexMutationOptions<
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

export function getRegistrationsRegistrationIdIdentifiersIndexQueryKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/identifiers/', args] as const
}

export function getRegistrationsRegistrationIdIdentifiersIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdIdentifiersIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdIdentifiersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].identifiers.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdIdentifiersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdIdentifiersIndexQueryKey>
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
      ...getRegistrationsRegistrationIdIdentifiersIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRegistrationsRegistrationIdInstitutionsIndexQueryKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/institutions/', args] as const
}

export function getRegistrationsRegistrationIdInstitutionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdInstitutionsIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdInstitutionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].institutions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdInstitutionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdInstitutionsIndexQueryKey>
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
      ...getRegistrationsRegistrationIdInstitutionsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRegistrationsRegistrationIdLinkedNodesIndexQueryKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/linked_nodes/', args] as const
}

export function getRegistrationsRegistrationIdLinkedNodesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdLinkedNodesIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdLinkedNodesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].linked_nodes.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdLinkedNodesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdLinkedNodesIndexQueryKey>
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
      ...getRegistrationsRegistrationIdLinkedNodesIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRegistrationsRegistrationIdLogsIndexQueryKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['logs']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/logs/', args] as const
}

export function getRegistrationsRegistrationIdLogsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.registrations)[':registration_id']['logs']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['logs']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.registrations)[':registration_id']['logs']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdLogsIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdLogsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].logs.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdLogsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.registrations)[':registration_id']['logs']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrations)[':registration_id']['logs']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrations)[':registration_id']['logs']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdLogsIndexQueryKey>
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
      ...getRegistrationsRegistrationIdLogsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRegistrationsRegistrationIdViewOnlyLinksIndexQueryKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/view_only_links/', args] as const
}

export function getRegistrationsRegistrationIdViewOnlyLinksIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdViewOnlyLinksIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdViewOnlyLinksIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].view_only_links.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdViewOnlyLinksIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdViewOnlyLinksIndexQueryKey>
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
      ...getRegistrationsRegistrationIdViewOnlyLinksIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
  >,
) {
  return [
    'registrations',
    '/registrations/:registration_id/view_only_links/:link_id/',
    args,
  ] as const
}

export function getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].view_only_links[':link_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdViewOnlyLinksLinkIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexQueryKey>
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
      ...getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRegistrationsRegistrationIdWikisIndexQueryKey(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['wikis']['index']['$get']
  >,
) {
  return ['registrations', '/registrations/:registration_id/wikis/', args] as const
}

export function getRegistrationsRegistrationIdWikisIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.registrations)[':registration_id']['wikis']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['wikis']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.registrations)[':registration_id']['wikis']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsRegistrationIdWikisIndexQueryKey>
  >({
    queryKey: getRegistrationsRegistrationIdWikisIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registrations[':registration_id'].wikis.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistrationsRegistrationIdWikisIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.registrations)[':registration_id']['wikis']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.registrations)[':registration_id']['wikis']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.registrations)[':registration_id']['wikis']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationsRegistrationIdWikisIndexQueryKey>
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
      ...getRegistrationsRegistrationIdWikisIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchemaResponsesIndexQueryKey() {
  return ['schema_responses', '/schema_responses/'] as const
}

export function getSchemaResponsesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema_responses.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schema_responses.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemaResponsesIndexQueryKey>
  >({
    queryKey: getSchemaResponsesIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.schema_responses.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchemaResponsesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema_responses.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.schema_responses.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchemaResponsesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchemaResponsesIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostSchemaResponsesIndexMutationKey() {
  return ['schema_responses', '/schema_responses/', 'POST'] as const
}

export function getPostSchemaResponsesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schema_responses.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.schema_responses.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSchemaResponsesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.schema_responses.index.$post>) {
      return parseResponse(client.schema_responses.index.$post(args, options))
    },
  })
}

export function createPostSchemaResponsesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.schema_responses.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.schema_responses.index.$post>,
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
    const mutationDefaults = getPostSchemaResponsesIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSchemaResponsesSchemaResponseIdQueryKey(
  args: InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$get']>,
) {
  return ['schema_responses', '/schema_responses/:schema_response_id', args] as const
}

export function getSchemaResponsesSchemaResponseIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schema_responses)[':schema_response_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schema_responses)[':schema_response_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemaResponsesSchemaResponseIdQueryKey>
  >({
    queryKey: getSchemaResponsesSchemaResponseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schema_responses[':schema_response_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchemaResponsesSchemaResponseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.schema_responses)[':schema_response_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.schema_responses)[':schema_response_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchemaResponsesSchemaResponseIdQueryKey>
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
      ...getSchemaResponsesSchemaResponseIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteSchemaResponsesSchemaResponseIdMutationKey() {
  return ['schema_responses', '/schema_responses/:schema_response_id', 'DELETE'] as const
}

export function getDeleteSchemaResponsesSchemaResponseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.schema_responses)[':schema_response_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSchemaResponsesSchemaResponseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$delete']>,
    ) {
      return parseResponse(client.schema_responses[':schema_response_id'].$delete(args, options))
    },
  })
}

export function createDeleteSchemaResponsesSchemaResponseId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.schema_responses)[':schema_response_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$delete']>,
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
    const mutationDefaults = getDeleteSchemaResponsesSchemaResponseIdMutationOptions<
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

export function getPatchSchemaResponsesSchemaResponseIdMutationKey() {
  return ['schema_responses', '/schema_responses/:schema_response_id', 'PATCH'] as const
}

export function getPatchSchemaResponsesSchemaResponseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.schema_responses)[':schema_response_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSchemaResponsesSchemaResponseIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$patch']>,
    ) {
      return parseResponse(client.schema_responses[':schema_response_id'].$patch(args, options))
    },
  })
}

export function createPatchSchemaResponsesSchemaResponseId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.schema_responses)[':schema_response_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$patch']>,
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
    const mutationDefaults = getPatchSchemaResponsesSchemaResponseIdMutationOptions<
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

export function getSchemaResponsesSchemaResponseIdActionsIndexQueryKey(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
  >,
) {
  return ['schema_responses', '/schema_responses/:schema_response_id/actions/', args] as const
}

export function getSchemaResponsesSchemaResponseIdActionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemaResponsesSchemaResponseIdActionsIndexQueryKey>
  >({
    queryKey: getSchemaResponsesSchemaResponseIdActionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schema_responses[':schema_response_id'].actions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchemaResponsesSchemaResponseIdActionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchemaResponsesSchemaResponseIdActionsIndexQueryKey>
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
      ...getSchemaResponsesSchemaResponseIdActionsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostSchemaResponsesSchemaResponseIdActionsIndexMutationKey() {
  return ['schema_responses', '/schema_responses/:schema_response_id/actions/', 'POST'] as const
}

export function getPostSchemaResponsesSchemaResponseIdActionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSchemaResponsesSchemaResponseIdActionsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.schema_responses[':schema_response_id'].actions.index.$post(args, options),
      )
    },
  })
}

export function createPostSchemaResponsesSchemaResponseIdActionsIndex<
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
                  (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$post']
        >,
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
    const mutationDefaults = getPostSchemaResponsesSchemaResponseIdActionsIndexMutationOptions<
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

export function getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdQueryKey(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
  >,
) {
  return [
    'schema_responses',
    '/schema_responses/:schema_response_id/actions/:schema_response_action_id',
    args,
  ] as const
}

export function getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdQueryKey>
  >({
    queryKey: getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schema_responses[':schema_response_id'].actions[':schema_response_action_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createSchemaResponsesSchemaResponseIdActionsSchemaResponseActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdQueryKey>
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
      ...getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSchemaResponsesSchemaResponseIdSchemaBlocksIndexQueryKey(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
  >,
) {
  return ['schema_responses', '/schema_responses/:schema_response_id/schema_blocks/', args] as const
}

export function getSchemaResponsesSchemaResponseIdSchemaBlocksIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemaResponsesSchemaResponseIdSchemaBlocksIndexQueryKey>
  >({
    queryKey: getSchemaResponsesSchemaResponseIdSchemaBlocksIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schema_responses[':schema_response_id'].schema_blocks.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchemaResponsesSchemaResponseIdSchemaBlocksIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchemaResponsesSchemaResponseIdSchemaBlocksIndexQueryKey>
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
      ...getSchemaResponsesSchemaResponseIdSchemaBlocksIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdQueryKey(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
  >,
) {
  return [
    'schema_responses',
    '/schema_responses/:schema_response_id/schema_blocks/:schema_response_block_id',
    args,
  ] as const
}

export function getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdQueryKey>
  >({
    queryKey: getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schema_responses[':schema_response_id'].schema_blocks[
          ':schema_response_block_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdQueryKey
        >
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
      ...getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSchemasRegistrationsIndexQueryKey() {
  return ['schemas', '/schemas/registrations/'] as const
}

export function getSchemasRegistrationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schemas.registrations.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schemas.registrations.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemasRegistrationsIndexQueryKey>
  >({
    queryKey: getSchemasRegistrationsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.schemas.registrations.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchemasRegistrationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schemas.registrations.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.schemas.registrations.index.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchemasRegistrationsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchemasRegistrationsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSchemasRegistrationsRegistrationSchemaIdQueryKey(
  args: InferRequestType<(typeof client.schemas.registrations)[':registration_schema_id']['$get']>,
) {
  return ['schemas', '/schemas/registrations/:registration_schema_id', args] as const
}

export function getSchemasRegistrationsRegistrationSchemaIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.schemas.registrations)[':registration_schema_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.schemas.registrations)[':registration_schema_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.schemas.registrations)[':registration_schema_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemasRegistrationsRegistrationSchemaIdQueryKey>
  >({
    queryKey: getSchemasRegistrationsRegistrationSchemaIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schemas.registrations[':registration_schema_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSchemasRegistrationsRegistrationSchemaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.schemas.registrations)[':registration_schema_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.schemas.registrations)[':registration_schema_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.schemas.registrations)[':registration_schema_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchemasRegistrationsRegistrationSchemaIdQueryKey>
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
      ...getSchemasRegistrationsRegistrationSchemaIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getTaxonomiesIndexQueryKey() {
  return ['taxonomies', '/taxonomies/'] as const
}

export function getTaxonomiesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaxonomiesIndexQueryKey>
  >({
    queryKey: getTaxonomiesIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.taxonomies.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTaxonomiesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTaxonomiesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTaxonomiesIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getTaxonomiesTaxonomyIdIndexQueryKey(
  args: InferRequestType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>,
) {
  return ['taxonomies', '/taxonomies/:taxonomy_id/', args] as const
}

export function getTaxonomiesTaxonomyIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaxonomiesTaxonomyIdIndexQueryKey>
  >({
    queryKey: getTaxonomiesTaxonomyIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.taxonomies[':taxonomy_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTaxonomiesTaxonomyIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaxonomiesTaxonomyIdIndexQueryKey>
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
      ...getTaxonomiesTaxonomyIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersIndexQueryKey() {
  return ['users', '/users/'] as const
}

export function getUsersIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersIndexQueryKey>
  >({
    queryKey: getUsersIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getUsersUserIdIndexQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['index']['$get']>,
) {
  return ['users', '/users/:user_id/', args] as const
}

export function getUsersUserIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdIndexQueryKey>
  >({
    queryKey: getUsersUserIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchUsersUserIdIndexMutationKey() {
  return ['users', '/users/:user_id/', 'PATCH'] as const
}

export function getPatchUsersUserIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['index']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUserIdIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['index']['$patch']>) {
      return parseResponse(client.users[':user_id'].index.$patch(args, options))
    },
  })
}

export function createPatchUsersUserIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['index']['$patch']>,
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
    const mutationDefaults = getPatchUsersUserIdIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdAddonsIndexQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['addons']['index']['$get']>,
) {
  return ['users', '/users/:user_id/addons/', args] as const
}

export function getUsersUserIdAddonsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['addons']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['addons']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['addons']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAddonsIndexQueryKey>
  >({
    queryKey: getUsersUserIdAddonsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].addons.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdAddonsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['addons']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['addons']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['addons']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAddonsIndexQueryKey>
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
      ...getUsersUserIdAddonsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserIdAddonsProviderIndexQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['addons'][':provider']['index']['$get']>,
) {
  return ['users', '/users/:user_id/addons/:provider/', args] as const
}

export function getUsersUserIdAddonsProviderIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['addons'][':provider']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['addons'][':provider']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':user_id']['addons'][':provider']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAddonsProviderIndexQueryKey>
  >({
    queryKey: getUsersUserIdAddonsProviderIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].addons[':provider'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdAddonsProviderIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':user_id']['addons'][':provider']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':user_id']['addons'][':provider']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['addons'][':provider']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAddonsProviderIndexQueryKey>
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
      ...getUsersUserIdAddonsProviderIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserIdAddonsProviderAccountsIndexQueryKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
  >,
) {
  return ['users', '/users/:user_id/addons/:provider/accounts/', args] as const
}

export function getUsersUserIdAddonsProviderAccountsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAddonsProviderAccountsIndexQueryKey>
  >({
    queryKey: getUsersUserIdAddonsProviderAccountsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].addons[':provider'].accounts.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdAddonsProviderAccountsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAddonsProviderAccountsIndexQueryKey>
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
      ...getUsersUserIdAddonsProviderAccountsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserIdAddonsProviderAccountsAccountIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
  >,
) {
  return ['users', '/users/:user_id/addons/:provider/accounts/:account_id/', args] as const
}

export function getUsersUserIdAddonsProviderAccountsAccountIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdAddonsProviderAccountsAccountIdIndexQueryKey>
  >({
    queryKey: getUsersUserIdAddonsProviderAccountsAccountIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].addons[':provider'].accounts[':account_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdAddonsProviderAccountsAccountIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdAddonsProviderAccountsAccountIdIndexQueryKey>
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
      ...getUsersUserIdAddonsProviderAccountsAccountIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserIdInstitutionsIndexQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['institutions']['index']['$get']>,
) {
  return ['users', '/users/:user_id/institutions/', args] as const
}

export function getUsersUserIdInstitutionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['institutions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['institutions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['institutions']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdInstitutionsIndexQueryKey>
  >({
    queryKey: getUsersUserIdInstitutionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].institutions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdInstitutionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['institutions']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['institutions']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['institutions']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdInstitutionsIndexQueryKey>
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
      ...getUsersUserIdInstitutionsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserIdNodesIndexQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['nodes']['index']['$get']>,
) {
  return ['users', '/users/:user_id/nodes/', args] as const
}

export function getUsersUserIdNodesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['nodes']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['nodes']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['nodes']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdNodesIndexQueryKey>
  >({
    queryKey: getUsersUserIdNodesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].nodes.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdNodesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['nodes']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['nodes']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['nodes']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdNodesIndexQueryKey>
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
      ...getUsersUserIdNodesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserIdPreprintsIndexQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['preprints']['index']['$get']>,
) {
  return ['users', '/users/:user_id/preprints/', args] as const
}

export function getUsersUserIdPreprintsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['preprints']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['preprints']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['preprints']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdPreprintsIndexQueryKey>
  >({
    queryKey: getUsersUserIdPreprintsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].preprints.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdPreprintsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['preprints']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['preprints']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['preprints']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdPreprintsIndexQueryKey>
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
      ...getUsersUserIdPreprintsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersUserIdRegistrationsIndexQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['registrations']['index']['$get']>,
) {
  return ['users', '/users/:user_id/registrations/', args] as const
}

export function getUsersUserIdRegistrationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['registrations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['registrations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['registrations']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdRegistrationsIndexQueryKey>
  >({
    queryKey: getUsersUserIdRegistrationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].registrations.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdRegistrationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':user_id']['registrations']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['registrations']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.users)[':user_id']['registrations']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdRegistrationsIndexQueryKey>
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
      ...getUsersUserIdRegistrationsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getViewOnlyLinksLinkIdIndexQueryKey(
  args: InferRequestType<(typeof client.view_only_links)[':link_id']['index']['$get']>,
) {
  return ['view_only_links', '/view_only_links/:link_id/', args] as const
}

export function getViewOnlyLinksLinkIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.view_only_links)[':link_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.view_only_links)[':link_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.view_only_links)[':link_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getViewOnlyLinksLinkIdIndexQueryKey>
  >({
    queryKey: getViewOnlyLinksLinkIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.view_only_links[':link_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createViewOnlyLinksLinkIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.view_only_links)[':link_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.view_only_links)[':link_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.view_only_links)[':link_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getViewOnlyLinksLinkIdIndexQueryKey>
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
      ...getViewOnlyLinksLinkIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getViewOnlyLinksLinkIdNodesIndexQueryKey(
  args: InferRequestType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>,
) {
  return ['view_only_links', '/view_only_links/:link_id/nodes/', args] as const
}

export function getViewOnlyLinksLinkIdNodesIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getViewOnlyLinksLinkIdNodesIndexQueryKey>
  >({
    queryKey: getViewOnlyLinksLinkIdNodesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.view_only_links[':link_id'].nodes.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createViewOnlyLinksLinkIdNodesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.view_only_links)[':link_id']['nodes']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getViewOnlyLinksLinkIdNodesIndexQueryKey>
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
      ...getViewOnlyLinksLinkIdNodesIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWikisWikiIdIndexQueryKey(
  args: InferRequestType<(typeof client.wikis)[':wiki_id']['index']['$get']>,
) {
  return ['wikis', '/wikis/:wiki_id/', args] as const
}

export function getWikisWikiIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wikis)[':wiki_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikisWikiIdIndexQueryKey>
  >({
    queryKey: getWikisWikiIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wikis[':wiki_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWikisWikiIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wikis)[':wiki_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikisWikiIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWikisWikiIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getWikisWikiIdContentIndexQueryKey(
  args: InferRequestType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>,
) {
  return ['wikis', '/wikis/:wiki_id/content/', args] as const
}

export function getWikisWikiIdContentIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWikisWikiIdContentIndexQueryKey>
  >({
    queryKey: getWikisWikiIdContentIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.wikis[':wiki_id'].content.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWikisWikiIdContentIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWikisWikiIdContentIndexQueryKey>
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
      ...getWikisWikiIdContentIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
