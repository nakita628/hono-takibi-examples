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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1InitializeCustomerKey() {
  return ['v1:initializeCustomer'] as const
}

export function getPostV1DebugNameItemsSearchByViewUrlMutationKey() {
  return ['v1', '/v1/debug/:name/items:searchByViewUrl', 'POST'] as const
}

export function getPostV1DebugNameItemsSearchByViewUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debug)[':name']['items:searchByViewUrl']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.debug)[':name']['items:searchByViewUrl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DebugNameItemsSearchByViewUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.debug)[':name']['items:searchByViewUrl']['$post']>,
    ) {
      return parseResponse(client.v1.debug[':name']['items:searchByViewUrl'].$post(args, options))
    },
  })
}

export function usePostV1DebugNameItemsSearchByViewUrl<
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
                ReturnType<(typeof client.v1.debug)[':name']['items:searchByViewUrl']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.debug)[':name']['items:searchByViewUrl']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DebugNameItemsSearchByViewUrlMutationOptions<
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

export function getPostV1DebugNameCheckAccessMutationKey() {
  return ['v1', '/v1/debug/:name:checkAccess', 'POST'] as const
}

export function getPostV1DebugNameCheckAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debug)[':name:checkAccess']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.debug)[':name:checkAccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DebugNameCheckAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.debug)[':name:checkAccess']['$post']>,
    ) {
      return parseResponse(client.v1.debug[':name:checkAccess'].$post(args, options))
    },
  })
}

export function usePostV1DebugNameCheckAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.debug)[':name:checkAccess']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.debug)[':name:checkAccess']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DebugNameCheckAccessMutationOptions<TError, TOnMutateResult>(
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

export function getV1DebugParentItemsForunmappedidentityQueryKey(
  args: InferRequestType<(typeof client.v1.debug)[':parent']['items:forunmappedidentity']['$get']>,
) {
  return ['v1', '/v1/debug/:parent/items:forunmappedidentity', args] as const
}

export function getV1DebugParentItemsForunmappedidentityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.debug)[':parent']['items:forunmappedidentity']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.debug)[':parent']['items:forunmappedidentity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.debug)[':parent']['items:forunmappedidentity']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DebugParentItemsForunmappedidentityQueryKey>
  >({
    queryKey: getV1DebugParentItemsForunmappedidentityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.debug[':parent']['items:forunmappedidentity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1DebugParentItemsForunmappedidentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.debug)[':parent']['items:forunmappedidentity']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.debug)[':parent']['items:forunmappedidentity']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.debug)[':parent']['items:forunmappedidentity']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DebugParentItemsForunmappedidentityQueryKey>
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
      ...getV1DebugParentItemsForunmappedidentityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1DebugParentItemsForunmappedidentity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.debug)[':parent']['items:forunmappedidentity']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.debug)[':parent']['items:forunmappedidentity']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.debug)[':parent']['items:forunmappedidentity']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DebugParentItemsForunmappedidentityQueryKey>
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
      ...getV1DebugParentItemsForunmappedidentityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1DebugParentUnmappedidsQueryKey(
  args: InferRequestType<(typeof client.v1.debug)[':parent']['unmappedids']['$get']>,
) {
  return ['v1', '/v1/debug/:parent/unmappedids', args] as const
}

export function getV1DebugParentUnmappedidsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.debug)[':parent']['unmappedids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.debug)[':parent']['unmappedids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.debug)[':parent']['unmappedids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DebugParentUnmappedidsQueryKey>
  >({
    queryKey: getV1DebugParentUnmappedidsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.debug[':parent'].unmappedids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1DebugParentUnmappedids<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.debug)[':parent']['unmappedids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.debug)[':parent']['unmappedids']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.debug)[':parent']['unmappedids']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DebugParentUnmappedidsQueryKey>
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
      ...getV1DebugParentUnmappedidsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1DebugParentUnmappedids<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.debug)[':parent']['unmappedids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.debug)[':parent']['unmappedids']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.debug)[':parent']['unmappedids']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DebugParentUnmappedidsQueryKey>
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
      ...getV1DebugParentUnmappedidsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1IndexingNameQueryKey(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['$get']>,
) {
  return ['v1', '/v1/indexing/:name', args] as const
}

export function getV1IndexingNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.indexing)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.indexing)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndexingNameQueryKey>
  >({
    queryKey: getV1IndexingNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indexing[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1IndexingName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.indexing)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.indexing)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IndexingNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1IndexingNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1IndexingName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.indexing)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.indexing)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IndexingNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1IndexingNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1IndexingNameMutationKey() {
  return ['v1', '/v1/indexing/:name', 'DELETE'] as const
}

export function getDeleteV1IndexingNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.indexing)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.indexing)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1IndexingNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.indexing)[':name']['$delete']>) {
      return parseResponse(client.v1.indexing[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1IndexingName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.indexing)[':name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.indexing)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1IndexingNameMutationOptions<TError, TOnMutateResult>(
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

export function getV1IndexingNameItemsQueryKey(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['items']['$get']>,
) {
  return ['v1', '/v1/indexing/:name/items', args] as const
}

export function getV1IndexingNameItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indexing)[':name']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indexing)[':name']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndexingNameItemsQueryKey>
  >({
    queryKey: getV1IndexingNameItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indexing[':name'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1IndexingNameItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indexing)[':name']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['items']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.indexing)[':name']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IndexingNameItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1IndexingNameItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1IndexingNameItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indexing)[':name']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['items']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.indexing)[':name']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IndexingNameItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1IndexingNameItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1IndexingNameItemsDeleteQueueItemsMutationKey() {
  return ['v1', '/v1/indexing/:name/items:deleteQueueItems', 'POST'] as const
}

export function getPostV1IndexingNameItemsDeleteQueueItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.indexing)[':name']['items:deleteQueueItems']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.indexing)[':name']['items:deleteQueueItems']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IndexingNameItemsDeleteQueueItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.indexing)[':name']['items:deleteQueueItems']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.indexing[':name']['items:deleteQueueItems'].$post(args, options),
      )
    },
  })
}

export function usePostV1IndexingNameItemsDeleteQueueItems<
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
                ReturnType<(typeof client.v1.indexing)[':name']['items:deleteQueueItems']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.indexing)[':name']['items:deleteQueueItems']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1IndexingNameItemsDeleteQueueItemsMutationOptions<
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

export function getPostV1IndexingNameItemsPollMutationKey() {
  return ['v1', '/v1/indexing/:name/items:poll', 'POST'] as const
}

export function getPostV1IndexingNameItemsPollMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indexing)[':name']['items:poll']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.indexing)[':name']['items:poll']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IndexingNameItemsPollMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.indexing)[':name']['items:poll']['$post']>,
    ) {
      return parseResponse(client.v1.indexing[':name']['items:poll'].$post(args, options))
    },
  })
}

export function usePostV1IndexingNameItemsPoll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.indexing)[':name']['items:poll']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.indexing)[':name']['items:poll']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1IndexingNameItemsPollMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1IndexingNameItemsUnreserveMutationKey() {
  return ['v1', '/v1/indexing/:name/items:unreserve', 'POST'] as const
}

export function getPostV1IndexingNameItemsUnreserveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indexing)[':name']['items:unreserve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.indexing)[':name']['items:unreserve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IndexingNameItemsUnreserveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.indexing)[':name']['items:unreserve']['$post']>,
    ) {
      return parseResponse(client.v1.indexing[':name']['items:unreserve'].$post(args, options))
    },
  })
}

export function usePostV1IndexingNameItemsUnreserve<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.indexing)[':name']['items:unreserve']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.indexing)[':name']['items:unreserve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1IndexingNameItemsUnreserveMutationOptions<
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

export function getV1IndexingNameSchemaQueryKey(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['schema']['$get']>,
) {
  return ['v1', '/v1/indexing/:name/schema', args] as const
}

export function getV1IndexingNameSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indexing)[':name']['schema']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['schema']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indexing)[':name']['schema']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IndexingNameSchemaQueryKey>
  >({
    queryKey: getV1IndexingNameSchemaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.indexing[':name'].schema.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1IndexingNameSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indexing)[':name']['schema']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['schema']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.indexing)[':name']['schema']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IndexingNameSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1IndexingNameSchemaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1IndexingNameSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.indexing)[':name']['schema']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.indexing)[':name']['schema']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.indexing)[':name']['schema']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IndexingNameSchemaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1IndexingNameSchemaQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1IndexingNameSchemaMutationKey() {
  return ['v1', '/v1/indexing/:name/schema', 'PUT'] as const
}

export function getPutV1IndexingNameSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indexing)[':name']['schema']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.indexing)[':name']['schema']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1IndexingNameSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.indexing)[':name']['schema']['$put']>,
    ) {
      return parseResponse(client.v1.indexing[':name'].schema.$put(args, options))
    },
  })
}

export function usePutV1IndexingNameSchema<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.indexing)[':name']['schema']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.indexing)[':name']['schema']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1IndexingNameSchemaMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1IndexingNameSchemaMutationKey() {
  return ['v1', '/v1/indexing/:name/schema', 'DELETE'] as const
}

export function getDeleteV1IndexingNameSchemaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indexing)[':name']['schema']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.indexing)[':name']['schema']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1IndexingNameSchemaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.indexing)[':name']['schema']['$delete']>,
    ) {
      return parseResponse(client.v1.indexing[':name'].schema.$delete(args, options))
    },
  })
}

export function useDeleteV1IndexingNameSchema<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.indexing)[':name']['schema']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.indexing)[':name']['schema']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1IndexingNameSchemaMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1IndexingNameIndexMutationKey() {
  return ['v1', '/v1/indexing/:name:index', 'POST'] as const
}

export function getPostV1IndexingNameIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indexing)[':name:index']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.indexing)[':name:index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IndexingNameIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.indexing)[':name:index']['$post']>) {
      return parseResponse(client.v1.indexing[':name:index'].$post(args, options))
    },
  })
}

export function usePostV1IndexingNameIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.indexing)[':name:index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.indexing)[':name:index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1IndexingNameIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1IndexingNamePushMutationKey() {
  return ['v1', '/v1/indexing/:name:push', 'POST'] as const
}

export function getPostV1IndexingNamePushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indexing)[':name:push']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.indexing)[':name:push']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IndexingNamePushMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.indexing)[':name:push']['$post']>) {
      return parseResponse(client.v1.indexing[':name:push'].$post(args, options))
    },
  })
}

export function usePostV1IndexingNamePush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.indexing)[':name:push']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.indexing)[':name:push']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1IndexingNamePushMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1IndexingNameUploadMutationKey() {
  return ['v1', '/v1/indexing/:name:upload', 'POST'] as const
}

export function getPostV1IndexingNameUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.indexing)[':name:upload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.indexing)[':name:upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IndexingNameUploadMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.indexing)[':name:upload']['$post']>) {
      return parseResponse(client.v1.indexing[':name:upload'].$post(args, options))
    },
  })
}

export function usePostV1IndexingNameUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.indexing)[':name:upload']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.indexing)[':name:upload']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1IndexingNameUploadMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1MediaResourceNameMutationKey() {
  return ['v1', '/v1/media/:resourceName', 'POST'] as const
}

export function getPostV1MediaResourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.media)[':resourceName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.media)[':resourceName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1MediaResourceNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.media)[':resourceName']['$post']>) {
      return parseResponse(client.v1.media[':resourceName'].$post(args, options))
    },
  })
}

export function usePostV1MediaResourceName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.media)[':resourceName']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.media)[':resourceName']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1MediaResourceNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1QuerySearchMutationKey() {
  return ['v1', '/v1/query/search', 'POST'] as const
}

export function getPostV1QuerySearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.query.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1QuerySearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.query.search.$post>) {
      return parseResponse(client.v1.query.search.$post(args, options))
    },
  })
}

export function usePostV1QuerySearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.query.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1QuerySearchMutationOptions<TError, TOnMutateResult>(
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

export function getV1QuerySourcesQueryKey(
  args: InferRequestType<typeof client.v1.query.sources.$get>,
) {
  return ['v1', '/v1/query/sources', args] as const
}

export function getV1QuerySourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.sources.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.query.sources.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.sources.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1QuerySourcesQueryKey>
  >({
    queryKey: getV1QuerySourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.query.sources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1QuerySources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.query.sources.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.sources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1QuerySourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1QuerySourcesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1QuerySources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.query.sources.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.sources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1QuerySourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1QuerySourcesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1QuerySuggestMutationKey() {
  return ['v1', '/v1/query/suggest', 'POST'] as const
}

export function getPostV1QuerySuggestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.suggest.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.query.suggest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1QuerySuggestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.query.suggest.$post>) {
      return parseResponse(client.v1.query.suggest.$post(args, options))
    },
  })
}

export function usePostV1QuerySuggest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.query.suggest.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.query.suggest.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1QuerySuggestMutationOptions<TError, TOnMutateResult>(
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

export function getV1SettingsCustomerQueryKey(
  args: InferRequestType<typeof client.v1.settings.customer.$get>,
) {
  return ['v1', '/v1/settings/customer', args] as const
}

export function getV1SettingsCustomerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.customer.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.settings.customer.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.customer.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SettingsCustomerQueryKey>
  >({
    queryKey: getV1SettingsCustomerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.settings.customer.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1SettingsCustomer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.customer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.settings.customer.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.customer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SettingsCustomerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SettingsCustomerQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SettingsCustomer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.customer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.settings.customer.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.customer.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SettingsCustomerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SettingsCustomerQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchV1SettingsCustomerMutationKey() {
  return ['v1', '/v1/settings/customer', 'PATCH'] as const
}

export function getPatchV1SettingsCustomerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.customer.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.settings.customer.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1SettingsCustomerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.settings.customer.$patch>) {
      return parseResponse(client.v1.settings.customer.$patch(args, options))
    },
  })
}

export function usePatchV1SettingsCustomer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.customer.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.settings.customer.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1SettingsCustomerMutationOptions<TError, TOnMutateResult>(
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

export function getV1SettingsDatasourcesQueryKey(
  args: InferRequestType<typeof client.v1.settings.datasources.$get>,
) {
  return ['v1', '/v1/settings/datasources', args] as const
}

export function getV1SettingsDatasourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.datasources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.settings.datasources.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.datasources.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SettingsDatasourcesQueryKey>
  >({
    queryKey: getV1SettingsDatasourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.settings.datasources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SettingsDatasources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.datasources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.settings.datasources.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.datasources.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SettingsDatasourcesQueryKey>
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
      ...getV1SettingsDatasourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1SettingsDatasources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.datasources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.settings.datasources.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.datasources.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SettingsDatasourcesQueryKey>
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
      ...getV1SettingsDatasourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1SettingsDatasourcesMutationKey() {
  return ['v1', '/v1/settings/datasources', 'POST'] as const
}

export function getPostV1SettingsDatasourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.datasources.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.settings.datasources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SettingsDatasourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.settings.datasources.$post>) {
      return parseResponse(client.v1.settings.datasources.$post(args, options))
    },
  })
}

export function usePostV1SettingsDatasources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.datasources.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.settings.datasources.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SettingsDatasourcesMutationOptions<TError, TOnMutateResult>(
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

export function getV1SettingsSearchapplicationsQueryKey(
  args: InferRequestType<typeof client.v1.settings.searchapplications.$get>,
) {
  return ['v1', '/v1/settings/searchapplications', args] as const
}

export function getV1SettingsSearchapplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.searchapplications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.settings.searchapplications.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.searchapplications.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SettingsSearchapplicationsQueryKey>
  >({
    queryKey: getV1SettingsSearchapplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.settings.searchapplications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SettingsSearchapplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.searchapplications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.settings.searchapplications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.settings.searchapplications.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SettingsSearchapplicationsQueryKey>
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
      ...getV1SettingsSearchapplicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1SettingsSearchapplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.settings.searchapplications.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.settings.searchapplications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.settings.searchapplications.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SettingsSearchapplicationsQueryKey>
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
      ...getV1SettingsSearchapplicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1SettingsSearchapplicationsMutationKey() {
  return ['v1', '/v1/settings/searchapplications', 'POST'] as const
}

export function getPostV1SettingsSearchapplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.settings.searchapplications.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.settings.searchapplications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SettingsSearchapplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.settings.searchapplications.$post>) {
      return parseResponse(client.v1.settings.searchapplications.$post(args, options))
    },
  })
}

export function usePostV1SettingsSearchapplications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.settings.searchapplications.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.settings.searchapplications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SettingsSearchapplicationsMutationOptions<
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

export function getV1SettingsNameQueryKey(
  args: InferRequestType<(typeof client.v1.settings)[':name']['$get']>,
) {
  return ['v1', '/v1/settings/:name', args] as const
}

export function getV1SettingsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.settings)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.settings)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.settings)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SettingsNameQueryKey>
  >({
    queryKey: getV1SettingsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.settings[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1SettingsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.settings)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.settings)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.settings)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SettingsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SettingsNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SettingsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.settings)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.settings)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.settings)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SettingsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SettingsNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1SettingsNameMutationKey() {
  return ['v1', '/v1/settings/:name', 'PUT'] as const
}

export function getPutV1SettingsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.settings)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.settings)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SettingsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.settings)[':name']['$put']>) {
      return parseResponse(client.v1.settings[':name'].$put(args, options))
    },
  })
}

export function usePutV1SettingsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.settings)[':name']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.settings)[':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SettingsNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1SettingsNameMutationKey() {
  return ['v1', '/v1/settings/:name', 'DELETE'] as const
}

export function getDeleteV1SettingsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.settings)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.settings)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SettingsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.settings)[':name']['$delete']>) {
      return parseResponse(client.v1.settings[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1SettingsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.settings)[':name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.settings)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1SettingsNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1SettingsNameMutationKey() {
  return ['v1', '/v1/settings/:name', 'PATCH'] as const
}

export function getPatchV1SettingsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.settings)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.settings)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1SettingsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.settings)[':name']['$patch']>) {
      return parseResponse(client.v1.settings[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1SettingsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.settings)[':name']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.settings)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1SettingsNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SettingsNameResetMutationKey() {
  return ['v1', '/v1/settings/:name:reset', 'POST'] as const
}

export function getPostV1SettingsNameResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.settings)[':name:reset']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.settings)[':name:reset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SettingsNameResetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.settings)[':name:reset']['$post']>) {
      return parseResponse(client.v1.settings[':name:reset'].$post(args, options))
    },
  })
}

export function usePostV1SettingsNameReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.settings)[':name:reset']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.settings)[':name:reset']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SettingsNameResetMutationOptions<TError, TOnMutateResult>(
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

export function getV1StatsIndexQueryKey(args: InferRequestType<typeof client.v1.stats.index.$get>) {
  return ['v1', '/v1/stats/index', args] as const
}

export function getV1StatsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.stats.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatsIndexQueryKey>
  >({
    queryKey: getV1StatsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.stats.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1StatsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.stats.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1StatsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1StatsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.stats.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1StatsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1StatsIndexNameQueryKey(
  args: InferRequestType<(typeof client.v1.stats.index)[':name']['$get']>,
) {
  return ['v1', '/v1/stats/index/:name', args] as const
}

export function getV1StatsIndexNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats.index)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stats.index)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats.index)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatsIndexNameQueryKey>
  >({
    queryKey: getV1StatsIndexNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.stats.index[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1StatsIndexName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats.index)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stats.index)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.stats.index)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsIndexNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1StatsIndexNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1StatsIndexName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats.index)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stats.index)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.stats.index)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsIndexNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1StatsIndexNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1StatsQueryQueryKey(args: InferRequestType<typeof client.v1.stats.query.$get>) {
  return ['v1', '/v1/stats/query', args] as const
}

export function getV1StatsQueryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.query.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.stats.query.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.query.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatsQueryQueryKey>
  >({
    queryKey: getV1StatsQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.stats.query.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1StatsQuery<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.query.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.stats.query.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.query.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1StatsQueryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1StatsQuery<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.query.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.stats.query.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.query.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsQueryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1StatsQueryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1StatsQueryNameQueryKey(
  args: InferRequestType<(typeof client.v1.stats.query)[':name']['$get']>,
) {
  return ['v1', '/v1/stats/query/:name', args] as const
}

export function getV1StatsQueryNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats.query)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stats.query)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats.query)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatsQueryNameQueryKey>
  >({
    queryKey: getV1StatsQueryNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.stats.query[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1StatsQueryName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats.query)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stats.query)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.stats.query)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsQueryNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1StatsQueryNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1StatsQueryName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats.query)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stats.query)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.stats.query)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsQueryNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1StatsQueryNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1StatsSearchapplicationQueryKey(
  args: InferRequestType<typeof client.v1.stats.searchapplication.$get>,
) {
  return ['v1', '/v1/stats/searchapplication', args] as const
}

export function getV1StatsSearchapplicationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.searchapplication.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.stats.searchapplication.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.searchapplication.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatsSearchapplicationQueryKey>
  >({
    queryKey: getV1StatsSearchapplicationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.stats.searchapplication.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1StatsSearchapplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.searchapplication.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.stats.searchapplication.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.searchapplication.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsSearchapplicationQueryKey>
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
      ...getV1StatsSearchapplicationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1StatsSearchapplication<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.searchapplication.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.stats.searchapplication.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.searchapplication.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsSearchapplicationQueryKey>
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
      ...getV1StatsSearchapplicationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1StatsSessionQueryKey(
  args: InferRequestType<typeof client.v1.stats.session.$get>,
) {
  return ['v1', '/v1/stats/session', args] as const
}

export function getV1StatsSessionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.session.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.stats.session.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.session.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatsSessionQueryKey>
  >({
    queryKey: getV1StatsSessionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.stats.session.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1StatsSession<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.session.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.stats.session.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.session.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsSessionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1StatsSessionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1StatsSession<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.session.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.stats.session.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.session.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsSessionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1StatsSessionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1StatsSessionNameQueryKey(
  args: InferRequestType<(typeof client.v1.stats.session)[':name']['$get']>,
) {
  return ['v1', '/v1/stats/session/:name', args] as const
}

export function getV1StatsSessionNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats.session)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stats.session)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats.session)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatsSessionNameQueryKey>
  >({
    queryKey: getV1StatsSessionNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.stats.session[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1StatsSessionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats.session)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stats.session)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.stats.session)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsSessionNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1StatsSessionNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1StatsSessionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats.session)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stats.session)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.stats.session)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsSessionNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1StatsSessionNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1StatsUserQueryKey(args: InferRequestType<typeof client.v1.stats.user.$get>) {
  return ['v1', '/v1/stats/user', args] as const
}

export function getV1StatsUserQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.user.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.stats.user.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.user.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatsUserQueryKey>
  >({
    queryKey: getV1StatsUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.stats.user.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1StatsUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.user.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.stats.user.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.user.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1StatsUserQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1StatsUser<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.user.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.stats.user.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stats.user.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1StatsUserQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1StatsUserNameQueryKey(
  args: InferRequestType<(typeof client.v1.stats.user)[':name']['$get']>,
) {
  return ['v1', '/v1/stats/user/:name', args] as const
}

export function getV1StatsUserNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats.user)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stats.user)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats.user)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatsUserNameQueryKey>
  >({
    queryKey: getV1StatsUserNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.stats.user[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1StatsUserName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats.user)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stats.user)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.stats.user)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsUserNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1StatsUserNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1StatsUserName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stats.user)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.stats.user)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.stats.user)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatsUserNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1StatsUserNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1NameQueryKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function getV1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >({
    queryKey: getV1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1NameLroQueryKey(
  args: InferRequestType<(typeof client.v1)[':name']['lro']['$get']>,
) {
  return ['v1', '/v1/:name/lro', args] as const
}

export function getV1NameLroQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['lro']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['lro']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['lro']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameLroQueryKey>
  >({
    queryKey: getV1NameLroQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].lro.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1NameLro<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['lro']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['lro']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['lro']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameLroQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1NameLroQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1NameLro<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['lro']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['lro']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['lro']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameLroQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1NameLroQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1InitializeCustomerMutationKey() {
  return ['v1:initializeCustomer', '/v1:initializeCustomer', 'POST'] as const
}

export function getPostV1InitializeCustomerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v1:initializeCustomer']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['v1:initializeCustomer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InitializeCustomerMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['v1:initializeCustomer']['$post']>) {
      return parseResponse(client['v1:initializeCustomer'].$post(args, options))
    },
  })
}

export function usePostV1InitializeCustomer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['v1:initializeCustomer']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['v1:initializeCustomer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1InitializeCustomerMutationOptions<TError, TOnMutateResult>(
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
