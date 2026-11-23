import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIndexQueryKey() {
  return ['actions', '/actions/'] as const
}

export function getActionsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getActionsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useActionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.index.$get>>>>
          >,
          ReturnType<typeof getActionsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getActionsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.actions.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAddonsIndexQueryKey() {
  return ['addons', '/addons/'] as const
}

export function getAddonsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAddonsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.addons.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAddonsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>
          >,
          ReturnType<typeof getAddonsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addons.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAddonsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAddonsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.addons.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCitationsStylesIndexQueryKey() {
  return ['citations', '/citations/styles/'] as const
}

export function getCitationsStylesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCitationsStylesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.citations.styles.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCitationsStylesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.citations.styles.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.citations.styles.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.citations.styles.index.$get>>>
            >
          >,
          ReturnType<typeof getCitationsStylesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.citations.styles.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCitationsStylesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCitationsStylesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.citations.styles.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCitationsStylesStyleIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.citations.styles)[':style_id']['index']['$get']>
  >,
) {
  return ['citations', '/citations/styles/:style_id/', toValue(args)] as const
}

export function getCitationsStylesStyleIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.citations.styles)[':style_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCitationsStylesStyleIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.citations.styles[':style_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.citations.styles)[':style_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.citations.styles)[':style_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCitationsStylesStyleIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCitationsStylesStyleIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.citations.styles[':style_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCollectionsIndexQueryKey() {
  return ['collections', '/collections/'] as const
}

export function getCollectionsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCollectionsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.collections.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.collections.index.$get>>>
            >
          >,
          ReturnType<typeof getCollectionsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCollectionsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.collections.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_id']['index']['$get']>
  >,
) {
  return ['collections', '/collections/:collection_id/', toValue(args)] as const
}

export function getCollectionsCollectionIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collections)[':collection_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
    >
  >,
) {
  return ['collections', '/collections/:collection_id/collected_metadata/', toValue(args)] as const
}

export function getCollectionsCollectionIdCollectedMetadataIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionIdCollectedMetadataIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_id'].collected_metadata.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getCollectionsCollectionIdCollectedMetadataIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionIdCollectedMetadataIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_id'].collected_metadata.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
    >
  >,
) {
  return [
    'collections',
    '/collections/:collection_id/collected_metadata/:cgm_id',
    toValue(args),
  ] as const
}

export function getCollectionsCollectionIdCollectedMetadataCgmIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionIdCollectedMetadataCgmIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_id'].collected_metadata[':cgm_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getCollectionsCollectionIdCollectedMetadataCgmIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionIdCollectedMetadataCgmIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_id'].collected_metadata[':cgm_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
    >
  >,
) {
  return [
    'collections',
    '/collections/:collection_id/collected_metadata/:cgm_id/relationships/subjects/',
    toValue(args),
  ] as const
}

export function getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_id'].collected_metadata[
          ':cgm_id'
        ].relationships.subjects.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_id'].collected_metadata[
            ':cgm_id'
          ].relationships.subjects.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
    >
  >,
) {
  return [
    'collections',
    '/collections/:collection_id/collected_metadata/:cgm_id/subjects/',
    toValue(args),
  ] as const
}

export function getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_id'].collected_metadata[':cgm_id'].subjects.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_id'].collected_metadata[':cgm_id'].subjects.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCollectionsCollectionIdLinkedNodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>
  >,
) {
  return ['collections', '/collections/:collection_id/linked_nodes', toValue(args)] as const
}

export function getCollectionsCollectionIdLinkedNodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionIdLinkedNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_id'].linked_nodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCollectionsCollectionIdLinkedNodesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionIdLinkedNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_id'].linked_nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCollectionsCollectionIdLinkedNodesRelationshipsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
    >
  >,
) {
  return [
    'collections',
    '/collections/:collection_id/linked_nodes/relationships/',
    toValue(args),
  ] as const
}

export function getCollectionsCollectionIdLinkedNodesRelationshipsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionIdLinkedNodesRelationshipsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_id'].linked_nodes.relationships.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getCollectionsCollectionIdLinkedNodesRelationshipsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCollectionsCollectionIdLinkedNodesRelationshipsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_id'].linked_nodes.relationships.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
    >
  >,
) {
  return ['collections', '/collections/:collection_id/linked_preprints/', toValue(args)] as const
}

export function getCollectionsCollectionIdLinkedPreprintsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionIdLinkedPreprintsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_id'].linked_preprints.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getCollectionsCollectionIdLinkedPreprintsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionIdLinkedPreprintsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_id'].linked_preprints.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCollectionsCollectionIdLinkedRegistrationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
    >
  >,
) {
  return [
    'collections',
    '/collections/:collection_id/linked_registrations/',
    toValue(args),
  ] as const
}

export function getCollectionsCollectionIdLinkedRegistrationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionsCollectionIdLinkedRegistrationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_id'].linked_registrations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getCollectionsCollectionIdLinkedRegistrationsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionsCollectionIdLinkedRegistrationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_id'].linked_registrations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
    >
  >,
) {
  return [
    'collections',
    '/collections/:collection_id/linked_registrations/relationships/',
    toValue(args),
  ] as const
}

export function getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collections[':collection_id'].linked_registrations.relationships.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.collections[':collection_id'].linked_registrations.relationships.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comments)[':comment_id']['index']['$get']>
  >,
) {
  return ['comments', '/comments/:comment_id/', toValue(args)] as const
}

export function getCommentsCommentIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comments)[':comment_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCommentsCommentIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.comments[':comment_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.comments)[':comment_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.comments)[':comment_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCommentsCommentIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCommentsCommentIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.comments[':comment_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getDraftRegistrationsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDraftRegistrationsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.draft_registrations.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.draft_registrations.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.draft_registrations.index.$get>>
              >
            >
          >,
          ReturnType<typeof getDraftRegistrationsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.draft_registrations.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDraftRegistrationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDraftRegistrationsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.draft_registrations.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.draft_registrations.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.draft_registrations.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>
  >,
) {
  return ['draft_registrations', '/draft_registrations/:draft_id/', toValue(args)] as const
}

export function getDraftRegistrationsDraftIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDraftRegistrationsDraftIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.draft_registrations[':draft_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDraftRegistrationsDraftIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDraftRegistrationsDraftIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.draft_registrations[':draft_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
    >
  >,
) {
  return [
    'draft_registrations',
    '/draft_registrations/:draft_id/contributors/',
    toValue(args),
  ] as const
}

export function getDraftRegistrationsDraftIdContributorsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDraftRegistrationsDraftIdContributorsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.draft_registrations[':draft_id'].contributors.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getDraftRegistrationsDraftIdContributorsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDraftRegistrationsDraftIdContributorsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.draft_registrations[':draft_id'].contributors.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
    >
  >,
) {
  return [
    'draft_registrations',
    '/draft_registrations/:draft_id/contributors/:user_id/',
    toValue(args),
  ] as const
}

export function getDraftRegistrationsDraftIdContributorsUserIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDraftRegistrationsDraftIdContributorsUserIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.draft_registrations[':draft_id'].contributors[':user_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getDraftRegistrationsDraftIdContributorsUserIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDraftRegistrationsDraftIdContributorsUserIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.draft_registrations[':draft_id'].contributors[':user_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDraftRegistrationsDraftIdInstitutionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
    >
  >,
) {
  return [
    'draft_registrations',
    '/draft_registrations/:draft_id/institutions/',
    toValue(args),
  ] as const
}

export function getDraftRegistrationsDraftIdInstitutionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDraftRegistrationsDraftIdInstitutionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.draft_registrations[':draft_id'].institutions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getDraftRegistrationsDraftIdInstitutionsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDraftRegistrationsDraftIdInstitutionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.draft_registrations[':draft_id'].institutions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDraftRegistrationsDraftIdSubjectsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']>
  >,
) {
  return ['draft_registrations', '/draft_registrations/:draft_id/subjects/', toValue(args)] as const
}

export function getDraftRegistrationsDraftIdSubjectsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDraftRegistrationsDraftIdSubjectsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.draft_registrations[':draft_id'].subjects.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getDraftRegistrationsDraftIdSubjectsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDraftRegistrationsDraftIdSubjectsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.draft_registrations[':draft_id'].subjects.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilesFileIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['index']['$get']>>,
) {
  return ['files', '/files/:file_id/', toValue(args)] as const
}

export function getFilesFileIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesFileIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':file_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':file_id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id']['versions']['index']['$get']>
  >,
) {
  return ['files', '/files/:file_id/versions/', toValue(args)] as const
}

export function getFilesFileIdVersionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id']['versions']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdVersionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].versions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id']['versions']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':file_id']['versions']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesFileIdVersionsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdVersionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].versions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilesFileIdVersionsVersionIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']>
  >,
) {
  return ['files', '/files/:file_id/versions/:version_id/', toValue(args)] as const
}

export function getFilesFileIdVersionsVersionIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesFileIdVersionsVersionIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':file_id'].versions[':version_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getFilesFileIdVersionsVersionIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesFileIdVersionsVersionIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':file_id'].versions[':version_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstitutionsIndexQueryKey() {
  return ['institutions', '/institutions/'] as const
}

export function getInstitutionsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInstitutionsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.institutions.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInstitutionsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutions.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.institutions.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.institutions.index.$get>>>
            >
          >,
          ReturnType<typeof getInstitutionsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.institutions.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInstitutionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInstitutionsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.institutions.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstitutionsInstitutionIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.institutions)[':institution_id']['index']['$get']>
  >,
) {
  return ['institutions', '/institutions/:institution_id/', toValue(args)] as const
}

export function getInstitutionsInstitutionIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.institutions)[':institution_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstitutionsInstitutionIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.institutions[':institution_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.institutions)[':institution_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.institutions)[':institution_id']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.institutions)[':institution_id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInstitutionsInstitutionIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstitutionsInstitutionIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.institutions[':institution_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstitutionsInstitutionIdNodesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.institutions)[':institution_id']['nodes']['index']['$get']>
  >,
) {
  return ['institutions', '/institutions/:institution_id/nodes/', toValue(args)] as const
}

export function getInstitutionsInstitutionIdNodesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.institutions)[':institution_id']['nodes']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstitutionsInstitutionIdNodesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.institutions[':institution_id'].nodes.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.institutions)[':institution_id']['nodes']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getInstitutionsInstitutionIdNodesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstitutionsInstitutionIdNodesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.institutions[':institution_id'].nodes.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstitutionsInstitutionIdRegistrationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
    >
  >,
) {
  return ['institutions', '/institutions/:institution_id/registrations/', toValue(args)] as const
}

export function getInstitutionsInstitutionIdRegistrationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstitutionsInstitutionIdRegistrationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.institutions[':institution_id'].registrations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getInstitutionsInstitutionIdRegistrationsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstitutionsInstitutionIdRegistrationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.institutions[':institution_id'].registrations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInstitutionsInstitutionIdUsersIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.institutions)[':institution_id']['users']['index']['$get']>
  >,
) {
  return ['institutions', '/institutions/:institution_id/users/', toValue(args)] as const
}

export function getInstitutionsInstitutionIdUsersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.institutions)[':institution_id']['users']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInstitutionsInstitutionIdUsersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.institutions[':institution_id'].users.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.institutions)[':institution_id']['users']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getInstitutionsInstitutionIdUsersIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInstitutionsInstitutionIdUsersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.institutions[':institution_id'].users.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLicenseLicenseIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.license)[':license_id']['index']['$get']>>,
) {
  return ['license', '/license/:license_id/', toValue(args)] as const
}

export function getLicenseLicenseIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.license)[':license_id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLicenseLicenseIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.license[':license_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.license)[':license_id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.license)[':license_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLicenseLicenseIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLicenseLicenseIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.license[':license_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLicensesIndexQueryKey() {
  return ['licenses', '/licenses/'] as const
}

export function getLicensesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLicensesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.licenses.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLicensesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.index.$get>>>>
          >,
          ReturnType<typeof getLicensesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licenses.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLicensesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLicensesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.licenses.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsLogIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':log_id']['index']['$get']>>,
) {
  return ['logs', '/logs/:log_id/', toValue(args)] as const
}

export function getLogsLogIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':log_id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsLogIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs[':log_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsLogIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':log_id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.logs)[':log_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLogsLogIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':log_id']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsLogIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsLogIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs[':log_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesIndexQueryKey() {
  return ['nodes', '/nodes/'] as const
}

export function getNodesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNodesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$get>>>>
          >,
          ReturnType<typeof getNodesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNodesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.nodes.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nodes)[':node_id']['index']['$get']>>,
) {
  return ['nodes', '/nodes/:node_id/', toValue(args)] as const
}

export function getNodesNodeIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nodes)[':node_id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodesNodeIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nodes)[':node_id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nodes)[':node_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/addons/', toValue(args)] as const
}

export function getNodesNodeIdAddonsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdAddonsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].addons.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdAddonsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdAddonsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].addons.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesNodeIdAddonsProviderIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/addons/:provider/', toValue(args)] as const
}

export function getNodesNodeIdAddonsProviderIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdAddonsProviderIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].addons[':provider'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getNodesNodeIdAddonsProviderIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdAddonsProviderIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].addons[':provider'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
    >
  >,
) {
  return ['nodes', '/nodes/:node_id/addons/:provider/folders/', toValue(args)] as const
}

export function getNodesNodeIdAddonsProviderFoldersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdAddonsProviderFoldersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].addons[':provider'].folders.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getNodesNodeIdAddonsProviderFoldersIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdAddonsProviderFoldersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].addons[':provider'].folders.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesNodeIdChildrenIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['children']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/children/', toValue(args)] as const
}

export function getNodesNodeIdChildrenIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['children']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdChildrenIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].children.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['children']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nodes)[':node_id']['children']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdChildrenIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdChildrenIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].children.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/citation/', toValue(args)] as const
}

export function getNodesNodeIdCitationIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdCitationIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].citation.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdCitationIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdCitationIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].citation.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesNodeIdCitationStyleIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/citation/:style_id/', toValue(args)] as const
}

export function getNodesNodeIdCitationStyleIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdCitationStyleIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].citation[':style_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getNodesNodeIdCitationStyleIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdCitationStyleIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].citation[':style_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesNodeIdCommentsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/comments/', toValue(args)] as const
}

export function getNodesNodeIdCommentsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdCommentsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].comments.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdCommentsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdCommentsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].comments.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/contributors/', toValue(args)] as const
}

export function getNodesNodeIdContributorsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdContributorsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].contributors.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdContributorsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdContributorsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].contributors.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/contributors/:user_id/', toValue(args)] as const
}

export function getNodesNodeIdContributorsUserIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdContributorsUserIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].contributors[':user_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getNodesNodeIdContributorsUserIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdContributorsUserIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].contributors[':user_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/draft_registrations/', toValue(args)] as const
}

export function getNodesNodeIdDraftRegistrationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdDraftRegistrationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].draft_registrations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getNodesNodeIdDraftRegistrationsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdDraftRegistrationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].draft_registrations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
    >
  >,
) {
  return ['nodes', '/nodes/:node_id/draft_registrations/:draft_id/', toValue(args)] as const
}

export function getNodesNodeIdDraftRegistrationsDraftIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdDraftRegistrationsDraftIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].draft_registrations[':draft_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getNodesNodeIdDraftRegistrationsDraftIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdDraftRegistrationsDraftIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].draft_registrations[':draft_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['files']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/files/', toValue(args)] as const
}

export function getNodesNodeIdFilesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['files']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdFilesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].files.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['files']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nodes)[':node_id']['files']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdFilesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdFilesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].files.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesNodeIdFilesProvidersProviderIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
    >
  >,
) {
  return ['nodes', '/nodes/:node_id/files/providers/:provider/', toValue(args)] as const
}

export function getNodesNodeIdFilesProvidersProviderIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdFilesProvidersProviderIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].files.providers[':provider'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getNodesNodeIdFilesProvidersProviderIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdFilesProvidersProviderIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].files.providers[':provider'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesNodeIdFilesProviderIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/files/:provider/', toValue(args)] as const
}

export function getNodesNodeIdFilesProviderIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdFilesProviderIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].files[':provider'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdFilesProviderIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdFilesProviderIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].files[':provider'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesNodeIdFilesProviderPathIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
    >
  >,
) {
  return ['nodes', '/nodes/:node_id/files/:provider/:path/', toValue(args)] as const
}

export function getNodesNodeIdFilesProviderPathIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdFilesProviderPathIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].files[':provider'][':path'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getNodesNodeIdFilesProviderPathIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdFilesProviderPathIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].files[':provider'][':path'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesNodeIdForksIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/forks/', toValue(args)] as const
}

export function getNodesNodeIdForksIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdForksIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].forks.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdForksIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdForksIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].forks.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/identifiers/', toValue(args)] as const
}

export function getNodesNodeIdIdentifiersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdIdentifiersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].identifiers.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdIdentifiersIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdIdentifiersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].identifiers.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesNodeIdInstitutionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/institutions/', toValue(args)] as const
}

export function getNodesNodeIdInstitutionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdInstitutionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].institutions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdInstitutionsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdInstitutionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].institutions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesNodeIdLinkedNodesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/linked_nodes/', toValue(args)] as const
}

export function getNodesNodeIdLinkedNodesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdLinkedNodesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].linked_nodes.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdLinkedNodesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdLinkedNodesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].linked_nodes.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesNodeIdLogsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/logs/', toValue(args)] as const
}

export function getNodesNodeIdLogsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdLogsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].logs.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdLogsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdLogsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].logs.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesNodeIdPreprintsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/preprints/', toValue(args)] as const
}

export function getNodesNodeIdPreprintsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdPreprintsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].preprints.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdPreprintsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdPreprintsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].preprints.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesNodeIdRegistrationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/registrations/', toValue(args)] as const
}

export function getNodesNodeIdRegistrationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdRegistrationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].registrations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdRegistrationsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdRegistrationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].registrations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesNodeIdViewOnlyLinksIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/view_only_links/', toValue(args)] as const
}

export function getNodesNodeIdViewOnlyLinksIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdViewOnlyLinksIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].view_only_links.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdViewOnlyLinksIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdViewOnlyLinksIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].view_only_links.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesNodeIdViewOnlyLinksLinkIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
    >
  >,
) {
  return ['nodes', '/nodes/:node_id/view_only_links/:link_id/', toValue(args)] as const
}

export function getNodesNodeIdViewOnlyLinksLinkIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdViewOnlyLinksLinkIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].view_only_links[':link_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getNodesNodeIdViewOnlyLinksLinkIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdViewOnlyLinksLinkIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].view_only_links[':link_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesNodeIdWikisIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>
  >,
) {
  return ['nodes', '/nodes/:node_id/wikis/', toValue(args)] as const
}

export function getNodesNodeIdWikisIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdWikisIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':node_id'].wikis.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdWikisIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdWikisIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':node_id'].wikis.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPreprintProvidersIndexQueryKey() {
  return ['preprint_providers', '/preprint_providers/'] as const
}

export function getPreprintProvidersIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPreprintProvidersIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preprint_providers.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.preprint_providers.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.preprint_providers.index.$get>>>
            >
          >,
          ReturnType<typeof getPreprintProvidersIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.preprint_providers.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreprintProvidersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPreprintProvidersIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.preprint_providers.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPreprintProvidersPreprintProviderIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']>
  >,
) {
  return [
    'preprint_providers',
    '/preprint_providers/:preprint_provider_id/',
    toValue(args),
  ] as const
}

export function getPreprintProvidersPreprintProviderIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreprintProvidersPreprintProviderIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preprint_providers[':preprint_provider_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getPreprintProvidersPreprintProviderIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreprintProvidersPreprintProviderIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preprint_providers[':preprint_provider_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPreprintProvidersPreprintProviderIdLicensesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
    >
  >,
) {
  return [
    'preprint_providers',
    '/preprint_providers/:preprint_provider_id/licenses/',
    toValue(args),
  ] as const
}

export function getPreprintProvidersPreprintProviderIdLicensesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreprintProvidersPreprintProviderIdLicensesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preprint_providers[':preprint_provider_id'].licenses.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getPreprintProvidersPreprintProviderIdLicensesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreprintProvidersPreprintProviderIdLicensesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preprint_providers[':preprint_provider_id'].licenses.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPreprintProvidersPreprintProviderIdPreprintsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
    >
  >,
) {
  return [
    'preprint_providers',
    '/preprint_providers/:preprint_provider_id/preprints/',
    toValue(args),
  ] as const
}

export function getPreprintProvidersPreprintProviderIdPreprintsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreprintProvidersPreprintProviderIdPreprintsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preprint_providers[':preprint_provider_id'].preprints.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getPreprintProvidersPreprintProviderIdPreprintsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreprintProvidersPreprintProviderIdPreprintsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preprint_providers[':preprint_provider_id'].preprints.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPreprintProvidersPreprintProviderIdTaxonomiesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
    >
  >,
) {
  return [
    'preprint_providers',
    '/preprint_providers/:preprint_provider_id/taxonomies/',
    toValue(args),
  ] as const
}

export function getPreprintProvidersPreprintProviderIdTaxonomiesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreprintProvidersPreprintProviderIdTaxonomiesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preprint_providers[':preprint_provider_id'].taxonomies.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getPreprintProvidersPreprintProviderIdTaxonomiesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreprintProvidersPreprintProviderIdTaxonomiesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preprint_providers[':preprint_provider_id'].taxonomies.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPreprintsIndexQueryKey() {
  return ['preprints', '/preprints/'] as const
}

export function getPreprintsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPreprintsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preprints.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePreprintsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$get>>>
            >
          >,
          ReturnType<typeof getPreprintsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPreprintsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPreprintsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.preprints.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.preprints.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.preprints.index.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preprints)[':preprint_id']['index']['$get']>
  >,
) {
  return ['preprints', '/preprints/:preprint_id/', toValue(args)] as const
}

export function getPreprintsPreprintIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preprints)[':preprint_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreprintsPreprintIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preprints[':preprint_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preprints)[':preprint_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.preprints)[':preprint_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPreprintsPreprintIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreprintsPreprintIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preprints[':preprint_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
    >
  >,
) {
  return [
    'preprints',
    '/preprints/:preprint_id/bibliographic_contributors/',
    toValue(args),
  ] as const
}

export function getPreprintsPreprintIdBibliographicContributorsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreprintsPreprintIdBibliographicContributorsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preprints[':preprint_id'].bibliographic_contributors.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getPreprintsPreprintIdBibliographicContributorsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreprintsPreprintIdBibliographicContributorsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preprints[':preprint_id'].bibliographic_contributors.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPreprintsPreprintIdCitationIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>
  >,
) {
  return ['preprints', '/preprints/:preprint_id/citation/', toValue(args)] as const
}

export function getPreprintsPreprintIdCitationIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreprintsPreprintIdCitationIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preprints[':preprint_id'].citation.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPreprintsPreprintIdCitationIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreprintsPreprintIdCitationIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preprints[':preprint_id'].citation.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPreprintsPreprintIdCitationStyleIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
    >
  >,
) {
  return ['preprints', '/preprints/:preprint_id/citation/:style_id/', toValue(args)] as const
}

export function getPreprintsPreprintIdCitationStyleIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreprintsPreprintIdCitationStyleIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preprints[':preprint_id'].citation[':style_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getPreprintsPreprintIdCitationStyleIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreprintsPreprintIdCitationStyleIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preprints[':preprint_id'].citation[':style_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPreprintsPreprintIdContributorsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preprints)[':preprint_id']['contributors']['index']['$get']>
  >,
) {
  return ['preprints', '/preprints/:preprint_id/contributors/', toValue(args)] as const
}

export function getPreprintsPreprintIdContributorsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preprints)[':preprint_id']['contributors']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreprintsPreprintIdContributorsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preprints[':preprint_id'].contributors.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preprints)[':preprint_id']['contributors']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getPreprintsPreprintIdContributorsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreprintsPreprintIdContributorsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preprints[':preprint_id'].contributors.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
    >
  >,
) {
  return ['preprints', '/preprints/:preprint_id/contributors/:user_id/', toValue(args)] as const
}

export function getPreprintsPreprintIdContributorsUserIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreprintsPreprintIdContributorsUserIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preprints[':preprint_id'].contributors[':user_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getPreprintsPreprintIdContributorsUserIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreprintsPreprintIdContributorsUserIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preprints[':preprint_id'].contributors[':user_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrationsIndexQueryKey() {
  return ['registrations', '/registrations/'] as const
}

export function getRegistrationsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRegistrationsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegistrationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registrations.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registrations.index.$get>>>
            >
          >,
          ReturnType<typeof getRegistrationsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registrations.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRegistrationsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrationsRegistrationIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['index']['$get']>
  >,
) {
  return ['registrations', '/registrations/:registration_id/', toValue(args)] as const
}

export function getRegistrationsRegistrationIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.registrations)[':registration_id']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRegistrationsRegistrationIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationsRegistrationIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['children']['index']['$get']>
  >,
) {
  return ['registrations', '/registrations/:registration_id/children/', toValue(args)] as const
}

export function getRegistrationsRegistrationIdChildrenIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['children']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdChildrenIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].children.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['children']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrationsRegistrationIdChildrenIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationsRegistrationIdChildrenIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].children.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrationsRegistrationIdCitationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['citations']['index']['$get']
    >
  >,
) {
  return ['registrations', '/registrations/:registration_id/citations/', toValue(args)] as const
}

export function getRegistrationsRegistrationIdCitationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['citations']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdCitationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].citations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['citations']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrationsRegistrationIdCitationsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationsRegistrationIdCitationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].citations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrationsRegistrationIdCitationsCitationIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
    >
  >,
) {
  return [
    'registrations',
    '/registrations/:registration_id/citations/:citation_id/',
    toValue(args),
  ] as const
}

export function getRegistrationsRegistrationIdCitationsCitationIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdCitationsCitationIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].citations[':citation_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrationsRegistrationIdCitationsCitationIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRegistrationsRegistrationIdCitationsCitationIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].citations[':citation_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrationsRegistrationIdCommentsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['comments']['index']['$get']>
  >,
) {
  return ['registrations', '/registrations/:registration_id/comments/', toValue(args)] as const
}

export function getRegistrationsRegistrationIdCommentsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['comments']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdCommentsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].comments.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['comments']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrationsRegistrationIdCommentsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationsRegistrationIdCommentsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].comments.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrationsRegistrationIdContributorsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
    >
  >,
) {
  return ['registrations', '/registrations/:registration_id/contributors/', toValue(args)] as const
}

export function getRegistrationsRegistrationIdContributorsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdContributorsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].contributors.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrationsRegistrationIdContributorsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationsRegistrationIdContributorsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].contributors.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrationsRegistrationIdContributorsUserIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
    >
  >,
) {
  return [
    'registrations',
    '/registrations/:registration_id/contributors/:user_id/',
    toValue(args),
  ] as const
}

export function getRegistrationsRegistrationIdContributorsUserIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdContributorsUserIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].contributors[':user_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrationsRegistrationIdContributorsUserIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationsRegistrationIdContributorsUserIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].contributors[':user_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrationsRegistrationIdFilesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['files']['index']['$get']>
  >,
) {
  return ['registrations', '/registrations/:registration_id/files/', toValue(args)] as const
}

export function getRegistrationsRegistrationIdFilesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['files']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdFilesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].files.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['files']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrationsRegistrationIdFilesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationsRegistrationIdFilesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].files.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrationsRegistrationIdFilesProviderIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
    >
  >,
) {
  return [
    'registrations',
    '/registrations/:registration_id/files/:provider/',
    toValue(args),
  ] as const
}

export function getRegistrationsRegistrationIdFilesProviderIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdFilesProviderIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].files[':provider'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrationsRegistrationIdFilesProviderIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationsRegistrationIdFilesProviderIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].files[':provider'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrationsRegistrationIdFilesProviderPathIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
    >
  >,
) {
  return [
    'registrations',
    '/registrations/:registration_id/files/:provider/:path/',
    toValue(args),
  ] as const
}

export function getRegistrationsRegistrationIdFilesProviderPathIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdFilesProviderPathIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].files[':provider'][':path'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrationsRegistrationIdFilesProviderPathIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationsRegistrationIdFilesProviderPathIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].files[':provider'][':path'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrationsRegistrationIdForksIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['forks']['index']['$get']>
  >,
) {
  return ['registrations', '/registrations/:registration_id/forks/', toValue(args)] as const
}

export function getRegistrationsRegistrationIdForksIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['forks']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdForksIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].forks.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['forks']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrationsRegistrationIdForksIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationsRegistrationIdForksIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].forks.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
    >
  >,
) {
  return ['registrations', '/registrations/:registration_id/identifiers/', toValue(args)] as const
}

export function getRegistrationsRegistrationIdIdentifiersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdIdentifiersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].identifiers.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrationsRegistrationIdIdentifiersIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationsRegistrationIdIdentifiersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].identifiers.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrationsRegistrationIdInstitutionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
    >
  >,
) {
  return ['registrations', '/registrations/:registration_id/institutions/', toValue(args)] as const
}

export function getRegistrationsRegistrationIdInstitutionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdInstitutionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].institutions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrationsRegistrationIdInstitutionsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationsRegistrationIdInstitutionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].institutions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrationsRegistrationIdLinkedNodesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
    >
  >,
) {
  return ['registrations', '/registrations/:registration_id/linked_nodes/', toValue(args)] as const
}

export function getRegistrationsRegistrationIdLinkedNodesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdLinkedNodesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].linked_nodes.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrationsRegistrationIdLinkedNodesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationsRegistrationIdLinkedNodesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].linked_nodes.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrationsRegistrationIdLogsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['logs']['index']['$get']>
  >,
) {
  return ['registrations', '/registrations/:registration_id/logs/', toValue(args)] as const
}

export function getRegistrationsRegistrationIdLogsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['logs']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdLogsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].logs.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['logs']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrationsRegistrationIdLogsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationsRegistrationIdLogsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].logs.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrationsRegistrationIdViewOnlyLinksIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
    >
  >,
) {
  return [
    'registrations',
    '/registrations/:registration_id/view_only_links/',
    toValue(args),
  ] as const
}

export function getRegistrationsRegistrationIdViewOnlyLinksIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdViewOnlyLinksIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].view_only_links.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrationsRegistrationIdViewOnlyLinksIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationsRegistrationIdViewOnlyLinksIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].view_only_links.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
    >
  >,
) {
  return [
    'registrations',
    '/registrations/:registration_id/view_only_links/:link_id/',
    toValue(args),
  ] as const
}

export function getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].view_only_links[':link_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].view_only_links[':link_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRegistrationsRegistrationIdWikisIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['wikis']['index']['$get']>
  >,
) {
  return ['registrations', '/registrations/:registration_id/wikis/', toValue(args)] as const
}

export function getRegistrationsRegistrationIdWikisIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['wikis']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationsRegistrationIdWikisIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registrations[':registration_id'].wikis.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registrations)[':registration_id']['wikis']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getRegistrationsRegistrationIdWikisIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationsRegistrationIdWikisIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registrations[':registration_id'].wikis.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchemaResponsesIndexQueryKey() {
  return ['schema_responses', '/schema_responses/'] as const
}

export function getSchemaResponsesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSchemaResponsesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schema_responses.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSchemaResponsesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schema_responses.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.schema_responses.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.schema_responses.index.$get>>>
            >
          >,
          ReturnType<typeof getSchemaResponsesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schema_responses.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemaResponsesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSchemaResponsesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.schema_responses.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$get']>
  >,
) {
  return ['schema_responses', '/schema_responses/:schema_response_id', toValue(args)] as const
}

export function getSchemaResponsesSchemaResponseIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchemaResponsesSchemaResponseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schema_responses[':schema_response_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.schema_responses)[':schema_response_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSchemaResponsesSchemaResponseIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchemaResponsesSchemaResponseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schema_responses[':schema_response_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.schema_responses)[':schema_response_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
    >
  >,
) {
  return [
    'schema_responses',
    '/schema_responses/:schema_response_id/actions/',
    toValue(args),
  ] as const
}

export function getSchemaResponsesSchemaResponseIdActionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchemaResponsesSchemaResponseIdActionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schema_responses[':schema_response_id'].actions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSchemaResponsesSchemaResponseIdActionsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchemaResponsesSchemaResponseIdActionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schema_responses[':schema_response_id'].actions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
    >
  >,
) {
  return [
    'schema_responses',
    '/schema_responses/:schema_response_id/actions/:schema_response_action_id',
    toValue(args),
  ] as const
}

export function getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schema_responses[':schema_response_id'].actions[':schema_response_action_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.schema_responses[':schema_response_id'].actions[':schema_response_action_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSchemaResponsesSchemaResponseIdSchemaBlocksIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
    >
  >,
) {
  return [
    'schema_responses',
    '/schema_responses/:schema_response_id/schema_blocks/',
    toValue(args),
  ] as const
}

export function getSchemaResponsesSchemaResponseIdSchemaBlocksIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchemaResponsesSchemaResponseIdSchemaBlocksIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schema_responses[':schema_response_id'].schema_blocks.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getSchemaResponsesSchemaResponseIdSchemaBlocksIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchemaResponsesSchemaResponseIdSchemaBlocksIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schema_responses[':schema_response_id'].schema_blocks.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
    >
  >,
) {
  return [
    'schema_responses',
    '/schema_responses/:schema_response_id/schema_blocks/:schema_response_block_id',
    toValue(args),
  ] as const
}

export function getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schema_responses[':schema_response_id'].schema_blocks[
          ':schema_response_block_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.schema_responses[':schema_response_id'].schema_blocks[
            ':schema_response_block_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getSchemasRegistrationsIndexQueryKey() {
  return ['schemas', '/schemas/registrations/'] as const
}

export function getSchemasRegistrationsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSchemasRegistrationsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schemas.registrations.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.schemas.registrations.index.$get>>
              >
            >
          >,
          ReturnType<typeof getSchemasRegistrationsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.schemas.registrations.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemasRegistrationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSchemasRegistrationsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.schemas.registrations.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchemasRegistrationsRegistrationSchemaIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schemas.registrations)[':registration_schema_id']['$get']>
  >,
) {
  return ['schemas', '/schemas/registrations/:registration_schema_id', toValue(args)] as const
}

export function getSchemasRegistrationsRegistrationSchemaIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schemas.registrations)[':registration_schema_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchemasRegistrationsRegistrationSchemaIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schemas.registrations[':registration_schema_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.schemas.registrations)[':registration_schema_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.schemas.registrations)[':registration_schema_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.schemas.registrations)[':registration_schema_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSchemasRegistrationsRegistrationSchemaIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchemasRegistrationsRegistrationSchemaIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schemas.registrations[':registration_schema_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaxonomiesIndexQueryKey() {
  return ['taxonomies', '/taxonomies/'] as const
}

export function getTaxonomiesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTaxonomiesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.taxonomies.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTaxonomiesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.index.$get>>>
            >
          >,
          ReturnType<typeof getTaxonomiesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.taxonomies.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaxonomiesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTaxonomiesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.taxonomies.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTaxonomiesTaxonomyIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>
  >,
) {
  return ['taxonomies', '/taxonomies/:taxonomy_id/', toValue(args)] as const
}

export function getTaxonomiesTaxonomyIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaxonomiesTaxonomyIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.taxonomies[':taxonomy_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTaxonomiesTaxonomyIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaxonomiesTaxonomyIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.taxonomies[':taxonomy_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersIndexQueryKey() {
  return ['users', '/users/'] as const
}

export function getUsersIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>
          >,
          ReturnType<typeof getUsersIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['index']['$get']>>,
) {
  return ['users', '/users/:user_id/', toValue(args)] as const
}

export function getUsersUserIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['addons']['index']['$get']>
  >,
) {
  return ['users', '/users/:user_id/addons/', toValue(args)] as const
}

export function getUsersUserIdAddonsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['addons']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdAddonsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].addons.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['addons']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['addons']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdAddonsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdAddonsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].addons.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdAddonsProviderIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['addons'][':provider']['index']['$get']>
  >,
) {
  return ['users', '/users/:user_id/addons/:provider/', toValue(args)] as const
}

export function getUsersUserIdAddonsProviderIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['addons'][':provider']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdAddonsProviderIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].addons[':provider'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['addons'][':provider']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getUsersUserIdAddonsProviderIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdAddonsProviderIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].addons[':provider'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdAddonsProviderAccountsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
    >
  >,
) {
  return ['users', '/users/:user_id/addons/:provider/accounts/', toValue(args)] as const
}

export function getUsersUserIdAddonsProviderAccountsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdAddonsProviderAccountsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].addons[':provider'].accounts.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getUsersUserIdAddonsProviderAccountsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdAddonsProviderAccountsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].addons[':provider'].accounts.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdAddonsProviderAccountsAccountIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
    >
  >,
) {
  return ['users', '/users/:user_id/addons/:provider/accounts/:account_id/', toValue(args)] as const
}

export function getUsersUserIdAddonsProviderAccountsAccountIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdAddonsProviderAccountsAccountIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].addons[':provider'].accounts[':account_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getUsersUserIdAddonsProviderAccountsAccountIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdAddonsProviderAccountsAccountIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].addons[':provider'].accounts[':account_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdInstitutionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['institutions']['index']['$get']>
  >,
) {
  return ['users', '/users/:user_id/institutions/', toValue(args)] as const
}

export function getUsersUserIdInstitutionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['institutions']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdInstitutionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].institutions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['institutions']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['institutions']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdInstitutionsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdInstitutionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].institutions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdNodesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['nodes']['index']['$get']>
  >,
) {
  return ['users', '/users/:user_id/nodes/', toValue(args)] as const
}

export function getUsersUserIdNodesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['nodes']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdNodesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].nodes.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['nodes']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['nodes']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdNodesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdNodesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].nodes.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdPreprintsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['preprints']['index']['$get']>
  >,
) {
  return ['users', '/users/:user_id/preprints/', toValue(args)] as const
}

export function getUsersUserIdPreprintsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['preprints']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdPreprintsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].preprints.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['preprints']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['preprints']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdPreprintsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdPreprintsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].preprints.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdRegistrationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['registrations']['index']['$get']>
  >,
) {
  return ['users', '/users/:user_id/registrations/', toValue(args)] as const
}

export function getUsersUserIdRegistrationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['registrations']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdRegistrationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].registrations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':user_id']['registrations']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':user_id']['registrations']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUserIdRegistrationsIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdRegistrationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].registrations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getViewOnlyLinksLinkIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.view_only_links)[':link_id']['index']['$get']>
  >,
) {
  return ['view_only_links', '/view_only_links/:link_id/', toValue(args)] as const
}

export function getViewOnlyLinksLinkIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.view_only_links)[':link_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getViewOnlyLinksLinkIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.view_only_links[':link_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.view_only_links)[':link_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.view_only_links)[':link_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getViewOnlyLinksLinkIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getViewOnlyLinksLinkIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.view_only_links[':link_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getViewOnlyLinksLinkIdNodesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>
  >,
) {
  return ['view_only_links', '/view_only_links/:link_id/nodes/', toValue(args)] as const
}

export function getViewOnlyLinksLinkIdNodesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getViewOnlyLinksLinkIdNodesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.view_only_links[':link_id'].nodes.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getViewOnlyLinksLinkIdNodesIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getViewOnlyLinksLinkIdNodesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.view_only_links[':link_id'].nodes.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikisWikiIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wikis)[':wiki_id']['index']['$get']>>,
) {
  return ['wikis', '/wikis/:wiki_id/', toValue(args)] as const
}

export function getWikisWikiIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wikis)[':wiki_id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikisWikiIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wikis[':wiki_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWikisWikiIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.wikis)[':wiki_id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWikisWikiIdIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikisWikiIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wikis[':wiki_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWikisWikiIdContentIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>
  >,
) {
  return ['wikis', '/wikis/:wiki_id/content/', toValue(args)] as const
}

export function getWikisWikiIdContentIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWikisWikiIdContentIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wikis[':wiki_id'].content.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWikisWikiIdContentIndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWikisWikiIdContentIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wikis[':wiki_id'].content.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
