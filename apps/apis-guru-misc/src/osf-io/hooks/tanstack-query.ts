import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useActionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useAddonsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAddonsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAddonsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAddonsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCitationsStylesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.citations.styles.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCitationsStylesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCitationsStylesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.citations.styles.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCitationsStylesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useCitationsStylesStyleIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCitationsStylesStyleIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCitationsStylesStyleIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCitationsStylesStyleIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCollectionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCollectionsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCollectionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCollectionsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostCollectionsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollectionsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useCollectionsCollectionIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCollectionsCollectionIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollectionsCollectionIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCollectionsCollectionIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDeleteCollectionsCollectionIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCollectionsCollectionIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useCollectionsCollectionIdCollectedMetadataIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCollectionsCollectionIdCollectedMetadataIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollectionsCollectionIdCollectedMetadataIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCollectionsCollectionIdCollectedMetadataIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostCollectionsCollectionIdCollectedMetadataIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollectionsCollectionIdCollectedMetadataIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useCollectionsCollectionIdCollectedMetadataCgmId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCollectionsCollectionIdCollectedMetadataCgmIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollectionsCollectionIdCollectedMetadataCgmId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCollectionsCollectionIdCollectedMetadataCgmIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostCollectionsCollectionIdCollectedMetadataCgmId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCollectionsCollectionIdCollectedMetadataCgmIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteCollectionsCollectionIdCollectedMetadataCgmId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCollectionsCollectionIdCollectedMetadataCgmIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCollectionsCollectionIdLinkedNodes<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCollectionsCollectionIdLinkedNodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollectionsCollectionIdLinkedNodes<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCollectionsCollectionIdLinkedNodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCollectionsCollectionIdLinkedNodesRelationshipsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCollectionsCollectionIdLinkedNodesRelationshipsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollectionsCollectionIdLinkedNodesRelationshipsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCollectionsCollectionIdLinkedNodesRelationshipsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostCollectionsCollectionIdLinkedNodesRelationshipsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostCollectionsCollectionIdLinkedNodesRelationshipsIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteCollectionsCollectionIdLinkedNodesRelationshipsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteCollectionsCollectionIdLinkedNodesRelationshipsIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useCollectionsCollectionIdLinkedPreprintsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCollectionsCollectionIdLinkedPreprintsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollectionsCollectionIdLinkedPreprintsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCollectionsCollectionIdLinkedPreprintsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCollectionsCollectionIdLinkedRegistrationsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCollectionsCollectionIdLinkedRegistrationsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollectionsCollectionIdLinkedRegistrationsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCollectionsCollectionIdLinkedRegistrationsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useCollectionsCollectionIdLinkedRegistrationsRelationshipsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCollectionsCollectionIdLinkedRegistrationsRelationshipsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostCollectionsCollectionIdLinkedRegistrationsRelationshipsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteCollectionsCollectionIdLinkedRegistrationsRelationshipsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useCommentsCommentIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCommentsCommentIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommentsCommentIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCommentsCommentIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePutCommentsCommentIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCommentsCommentIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteCommentsCommentIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCommentsCommentIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDraftRegistrationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.draft_registrations.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDraftRegistrationsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDraftRegistrationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.draft_registrations.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDraftRegistrationsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostDraftRegistrationsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDraftRegistrationsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDraftRegistrationsDraftIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDraftRegistrationsDraftIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDraftRegistrationsDraftIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDraftRegistrationsDraftIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDeleteDraftRegistrationsDraftIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDraftRegistrationsDraftIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchDraftRegistrationsDraftIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDraftRegistrationsDraftIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDraftRegistrationsDraftIdContributorsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDraftRegistrationsDraftIdContributorsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDraftRegistrationsDraftIdContributorsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDraftRegistrationsDraftIdContributorsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostDraftRegistrationsDraftIdContributorsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDraftRegistrationsDraftIdContributorsIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDraftRegistrationsDraftIdContributorsUserIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDraftRegistrationsDraftIdContributorsUserIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDraftRegistrationsDraftIdContributorsUserIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDraftRegistrationsDraftIdContributorsUserIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDraftRegistrationsDraftIdInstitutionsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDraftRegistrationsDraftIdInstitutionsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDraftRegistrationsDraftIdInstitutionsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDraftRegistrationsDraftIdInstitutionsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDraftRegistrationsDraftIdSubjectsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDraftRegistrationsDraftIdSubjectsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDraftRegistrationsDraftIdSubjectsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDraftRegistrationsDraftIdSubjectsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useFilesFileIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFilesFileIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFilesFileIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':file_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFilesFileIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePatchFilesFileIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchFilesFileIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useFilesFileIdVersionsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getFilesFileIdVersionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFilesFileIdVersionsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getFilesFileIdVersionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useFilesFileIdVersionsVersionIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getFilesFileIdVersionsVersionIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFilesFileIdVersionsVersionIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getFilesFileIdVersionsVersionIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useInstitutionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutions.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInstitutionsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInstitutionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutions.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInstitutionsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useInstitutionsInstitutionIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getInstitutionsInstitutionIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstitutionsInstitutionIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getInstitutionsInstitutionIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useInstitutionsInstitutionIdNodesIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getInstitutionsInstitutionIdNodesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstitutionsInstitutionIdNodesIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getInstitutionsInstitutionIdNodesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useInstitutionsInstitutionIdRegistrationsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getInstitutionsInstitutionIdRegistrationsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstitutionsInstitutionIdRegistrationsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getInstitutionsInstitutionIdRegistrationsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useInstitutionsInstitutionIdUsersIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getInstitutionsInstitutionIdUsersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInstitutionsInstitutionIdUsersIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getInstitutionsInstitutionIdUsersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useLicenseLicenseIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getLicenseLicenseIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLicenseLicenseIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getLicenseLicenseIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useLicensesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLicensesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLicensesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLicensesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useLogsLogIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':log_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogsLogIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogsLogIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':log_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogsLogIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostNodesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodesIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useNodesNodeIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodesNodeIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':node_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodesNodeIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDeleteNodesNodeIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNodesNodeIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchNodesNodeIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNodesNodeIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useNodesNodeIdAddonsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdAddonsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdAddonsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdAddonsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNodesNodeIdAddonsProviderIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdAddonsProviderIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdAddonsProviderIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdAddonsProviderIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePatchNodesNodeIdAddonsProviderIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNodesNodeIdAddonsProviderIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useNodesNodeIdAddonsProviderFoldersIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdAddonsProviderFoldersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdAddonsProviderFoldersIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdAddonsProviderFoldersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNodesNodeIdChildrenIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdChildrenIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdChildrenIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdChildrenIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostNodesNodeIdChildrenIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodesNodeIdChildrenIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useNodesNodeIdCitationIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdCitationIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdCitationIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdCitationIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNodesNodeIdCitationStyleIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdCitationStyleIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdCitationStyleIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdCitationStyleIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNodesNodeIdCommentsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdCommentsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdCommentsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdCommentsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostNodesNodeIdCommentsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodesNodeIdCommentsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useNodesNodeIdContributorsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdContributorsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdContributorsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdContributorsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostNodesNodeIdContributorsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodesNodeIdContributorsIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useNodesNodeIdContributorsUserIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdContributorsUserIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdContributorsUserIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdContributorsUserIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDeleteNodesNodeIdContributorsUserIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNodesNodeIdContributorsUserIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchNodesNodeIdContributorsUserIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNodesNodeIdContributorsUserIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useNodesNodeIdDraftRegistrationsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdDraftRegistrationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdDraftRegistrationsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdDraftRegistrationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostNodesNodeIdDraftRegistrationsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodesNodeIdDraftRegistrationsIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useNodesNodeIdDraftRegistrationsDraftIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdDraftRegistrationsDraftIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdDraftRegistrationsDraftIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdDraftRegistrationsDraftIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDeleteNodesNodeIdDraftRegistrationsDraftIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNodesNodeIdDraftRegistrationsDraftIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchNodesNodeIdDraftRegistrationsDraftIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchNodesNodeIdDraftRegistrationsDraftIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useNodesNodeIdFilesIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdFilesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdFilesIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdFilesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNodesNodeIdFilesProvidersProviderIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdFilesProvidersProviderIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdFilesProvidersProviderIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdFilesProvidersProviderIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNodesNodeIdFilesProviderIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdFilesProviderIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdFilesProviderIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdFilesProviderIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNodesNodeIdFilesProviderPathIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdFilesProviderPathIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdFilesProviderPathIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdFilesProviderPathIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNodesNodeIdForksIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdForksIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdForksIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdForksIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostNodesNodeIdForksIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodesNodeIdForksIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useNodesNodeIdIdentifiersIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdIdentifiersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdIdentifiersIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdIdentifiersIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNodesNodeIdInstitutionsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdInstitutionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdInstitutionsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdInstitutionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNodesNodeIdLinkedNodesIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdLinkedNodesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdLinkedNodesIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdLinkedNodesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNodesNodeIdLogsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodesNodeIdLogsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdLogsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodesNodeIdLogsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useNodesNodeIdPreprintsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdPreprintsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdPreprintsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdPreprintsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNodesNodeIdRegistrationsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdRegistrationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdRegistrationsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdRegistrationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNodesNodeIdViewOnlyLinksIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdViewOnlyLinksIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdViewOnlyLinksIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdViewOnlyLinksIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNodesNodeIdViewOnlyLinksLinkIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdViewOnlyLinksLinkIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdViewOnlyLinksLinkIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdViewOnlyLinksLinkIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useNodesNodeIdWikisIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNodesNodeIdWikisIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdWikisIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNodesNodeIdWikisIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePreprintProvidersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.preprint_providers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPreprintProvidersIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePreprintProvidersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.preprint_providers.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPreprintProvidersIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePreprintProvidersPreprintProviderIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPreprintProvidersPreprintProviderIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePreprintProvidersPreprintProviderIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPreprintProvidersPreprintProviderIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePreprintProvidersPreprintProviderIdLicensesIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPreprintProvidersPreprintProviderIdLicensesIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePreprintProvidersPreprintProviderIdLicensesIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPreprintProvidersPreprintProviderIdLicensesIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePreprintProvidersPreprintProviderIdPreprintsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPreprintProvidersPreprintProviderIdPreprintsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePreprintProvidersPreprintProviderIdPreprintsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPreprintProvidersPreprintProviderIdPreprintsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePreprintProvidersPreprintProviderIdTaxonomiesIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPreprintProvidersPreprintProviderIdTaxonomiesIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePreprintProvidersPreprintProviderIdTaxonomiesIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPreprintProvidersPreprintProviderIdTaxonomiesIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePreprintsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPreprintsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePreprintsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPreprintsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostPreprintsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPreprintsIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePreprintsPreprintIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPreprintsPreprintIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePreprintsPreprintIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPreprintsPreprintIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePatchPreprintsPreprintIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchPreprintsPreprintIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePreprintsPreprintIdBibliographicContributorsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPreprintsPreprintIdBibliographicContributorsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePreprintsPreprintIdBibliographicContributorsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPreprintsPreprintIdBibliographicContributorsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePreprintsPreprintIdCitationIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPreprintsPreprintIdCitationIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePreprintsPreprintIdCitationIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPreprintsPreprintIdCitationIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePreprintsPreprintIdCitationStyleIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPreprintsPreprintIdCitationStyleIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePreprintsPreprintIdCitationStyleIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPreprintsPreprintIdCitationStyleIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePreprintsPreprintIdContributorsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPreprintsPreprintIdContributorsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePreprintsPreprintIdContributorsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPreprintsPreprintIdContributorsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostPreprintsPreprintIdContributorsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPreprintsPreprintIdContributorsIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePreprintsPreprintIdContributorsUserIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPreprintsPreprintIdContributorsUserIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePreprintsPreprintIdContributorsUserIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPreprintsPreprintIdContributorsUserIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistrationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRegistrationsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRegistrationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRegistrationsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePatchRegistrationsRegistrationIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchRegistrationsRegistrationIdIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdChildrenIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdChildrenIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdChildrenIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdChildrenIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdCitationsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdCitationsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdCitationsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdCitationsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdCitationsCitationIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdCitationsCitationIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdCitationsCitationIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdCitationsCitationIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdCommentsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdCommentsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdCommentsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdCommentsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdContributorsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdContributorsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdContributorsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdContributorsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdContributorsUserIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdContributorsUserIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdContributorsUserIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdContributorsUserIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdFilesIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdFilesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdFilesIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdFilesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdFilesProviderIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdFilesProviderIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdFilesProviderIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdFilesProviderIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdFilesProviderPathIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdFilesProviderPathIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdFilesProviderPathIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdFilesProviderPathIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdForksIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdForksIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdForksIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdForksIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostRegistrationsRegistrationIdForksIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRegistrationsRegistrationIdForksIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdIdentifiersIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdIdentifiersIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdIdentifiersIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdIdentifiersIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdInstitutionsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdInstitutionsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdInstitutionsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdInstitutionsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdLinkedNodesIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdLinkedNodesIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdLinkedNodesIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdLinkedNodesIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdLogsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdLogsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdLogsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdLogsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdViewOnlyLinksIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdViewOnlyLinksIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdViewOnlyLinksIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdViewOnlyLinksIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdViewOnlyLinksLinkIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdViewOnlyLinksLinkIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useRegistrationsRegistrationIdWikisIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getRegistrationsRegistrationIdWikisIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRegistrationsRegistrationIdWikisIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getRegistrationsRegistrationIdWikisIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchemaResponsesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema_responses.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSchemaResponsesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSchemaResponsesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema_responses.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSchemaResponsesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostSchemaResponsesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSchemaResponsesIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useSchemaResponsesSchemaResponseId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchemaResponsesSchemaResponseIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchemaResponsesSchemaResponseId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchemaResponsesSchemaResponseIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useDeleteSchemaResponsesSchemaResponseId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSchemaResponsesSchemaResponseIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchSchemaResponsesSchemaResponseId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSchemaResponsesSchemaResponseIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useSchemaResponsesSchemaResponseIdActionsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchemaResponsesSchemaResponseIdActionsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchemaResponsesSchemaResponseIdActionsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchemaResponsesSchemaResponseIdActionsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostSchemaResponsesSchemaResponseIdActionsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSchemaResponsesSchemaResponseIdActionsIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useSchemaResponsesSchemaResponseIdActionsSchemaResponseActionId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchemaResponsesSchemaResponseIdActionsSchemaResponseActionId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchemaResponsesSchemaResponseIdSchemaBlocksIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchemaResponsesSchemaResponseIdSchemaBlocksIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchemaResponsesSchemaResponseIdSchemaBlocksIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchemaResponsesSchemaResponseIdSchemaBlocksIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useSchemasRegistrationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schemas.registrations.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSchemasRegistrationsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSchemasRegistrationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.schemas.registrations.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSchemasRegistrationsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useSchemasRegistrationsRegistrationSchemaId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSchemasRegistrationsRegistrationSchemaIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSchemasRegistrationsRegistrationSchemaId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSchemasRegistrationsRegistrationSchemaIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useTaxonomiesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTaxonomiesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTaxonomiesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTaxonomiesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useTaxonomiesTaxonomyIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTaxonomiesTaxonomyIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTaxonomiesTaxonomyIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTaxonomiesTaxonomyIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useUsersUserIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePatchUsersUserIdIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUsersUserIdIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useUsersUserIdAddonsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserIdAddonsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdAddonsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserIdAddonsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersUserIdAddonsProviderIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserIdAddonsProviderIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdAddonsProviderIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserIdAddonsProviderIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersUserIdAddonsProviderAccountsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserIdAddonsProviderAccountsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdAddonsProviderAccountsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserIdAddonsProviderAccountsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersUserIdAddonsProviderAccountsAccountIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserIdAddonsProviderAccountsAccountIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdAddonsProviderAccountsAccountIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserIdAddonsProviderAccountsAccountIdIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersUserIdInstitutionsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserIdInstitutionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdInstitutionsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserIdInstitutionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersUserIdNodesIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserIdNodesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdNodesIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserIdNodesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersUserIdPreprintsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserIdPreprintsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdPreprintsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserIdPreprintsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useUsersUserIdRegistrationsIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUsersUserIdRegistrationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUsersUserIdRegistrationsIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUsersUserIdRegistrationsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useViewOnlyLinksLinkIdIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getViewOnlyLinksLinkIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseViewOnlyLinksLinkIdIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getViewOnlyLinksLinkIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useViewOnlyLinksLinkIdNodesIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getViewOnlyLinksLinkIdNodesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseViewOnlyLinksLinkIdNodesIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getViewOnlyLinksLinkIdNodesIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useWikisWikiIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wikis)[':wiki_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWikisWikiIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWikisWikiIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.wikis)[':wiki_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWikisWikiIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useWikisWikiIdContentIndex<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWikisWikiIdContentIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWikisWikiIdContentIndex<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWikisWikiIdContentIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
