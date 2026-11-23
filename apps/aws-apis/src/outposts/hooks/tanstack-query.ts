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

export function getCatalogKey() {
  return ['catalog'] as const
}

export function getConnectionsKey() {
  return ['connections'] as const
}

export function getListOrdersKey() {
  return ['list-orders'] as const
}

export function getOrdersKey() {
  return ['orders'] as const
}

export function getOutpostsKey() {
  return ['outposts'] as const
}

export function getSitesKey() {
  return ['sites'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPostOrdersOrderIdCancelMutationKey() {
  return ['orders', '/orders/:OrderId/cancel', 'POST'] as const
}

export function getPostOrdersOrderIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':OrderId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':OrderId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersOrderIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.orders)[':OrderId']['cancel']['$post']>,
    ) {
      return parseResponse(client.orders[':OrderId'].cancel.$post(args, options))
    },
  })
}

export function usePostOrdersOrderIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orders)[':OrderId']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.orders)[':OrderId']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrdersOrderIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrdersMutationKey() {
  return ['orders', '/orders', 'POST'] as const
}

export function getPostOrdersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$post>>>>>,
    TError,
    InferRequestType<typeof client.orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.orders.$post>) {
      return parseResponse(client.orders.$post(args, options))
    },
  })
}

export function usePostOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$post>>>>>,
        TError,
        InferRequestType<typeof client.orders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrdersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOutpostsQueryKey(args: InferRequestType<typeof client.outposts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['outposts', '/outposts', keyArgs] as const
}

export function getOutpostsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.outposts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.outposts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.outposts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOutpostsQueryKey>
  >({
    queryKey: getOutpostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.outposts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOutposts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.outposts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.outposts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.outposts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOutpostsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOutpostsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOutposts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.outposts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.outposts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.outposts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOutpostsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOutpostsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOutpostsMutationKey() {
  return ['outposts', '/outposts', 'POST'] as const
}

export function getPostOutpostsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.outposts.$post>>>>>,
    TError,
    InferRequestType<typeof client.outposts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOutpostsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.outposts.$post>) {
      return parseResponse(client.outposts.$post(args, options))
    },
  })
}

export function usePostOutposts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.outposts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.outposts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOutpostsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSitesQueryKey(args: InferRequestType<typeof client.sites.$get>) {
  const { header: _, ...keyArgs } = args
  return ['sites', '/sites', keyArgs] as const
}

export function getSitesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sites.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSitesQueryKey>
  >({
    queryKey: getSitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSites<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSites<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSitesMutationKey() {
  return ['sites', '/sites', 'POST'] as const
}

export function getPostSitesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$post>>>>>,
    TError,
    InferRequestType<typeof client.sites.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sites.$post>) {
      return parseResponse(client.sites.$post(args, options))
    },
  })
}

export function usePostSites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$post>>>>>,
        TError,
        InferRequestType<typeof client.sites.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSitesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOutpostsOutpostIdQueryKey(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['outposts', '/outposts/:OutpostId', keyArgs] as const
}

export function getOutpostsOutpostIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOutpostsOutpostIdQueryKey>
  >({
    queryKey: getOutpostsOutpostIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.outposts[':OutpostId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOutpostsOutpostId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOutpostsOutpostIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOutpostsOutpostIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOutpostsOutpostId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOutpostsOutpostIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOutpostsOutpostIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteOutpostsOutpostIdMutationKey() {
  return ['outposts', '/outposts/:OutpostId', 'DELETE'] as const
}

export function getDeleteOutpostsOutpostIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.outposts)[':OutpostId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOutpostsOutpostIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.outposts)[':OutpostId']['$delete']>) {
      return parseResponse(client.outposts[':OutpostId'].$delete(args, options))
    },
  })
}

export function useDeleteOutpostsOutpostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.outposts)[':OutpostId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOutpostsOutpostIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchOutpostsOutpostIdMutationKey() {
  return ['outposts', '/outposts/:OutpostId', 'PATCH'] as const
}

export function getPatchOutpostsOutpostIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.outposts)[':OutpostId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOutpostsOutpostIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.outposts)[':OutpostId']['$patch']>) {
      return parseResponse(client.outposts[':OutpostId'].$patch(args, options))
    },
  })
}

export function usePatchOutpostsOutpostId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.outposts)[':OutpostId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchOutpostsOutpostIdMutationOptions<TError, TOnMutateResult>(
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

export function getSitesSiteIdQueryKey(
  args: InferRequestType<(typeof client.sites)[':SiteId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sites', '/sites/:SiteId', keyArgs] as const
}

export function getSitesSiteIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':SiteId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':SiteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':SiteId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdQueryKey>
  >({
    queryKey: getSitesSiteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':SiteId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSitesSiteId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':SiteId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':SiteId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':SiteId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSitesSiteIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSitesSiteId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':SiteId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':SiteId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':SiteId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSitesSiteIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteSitesSiteIdMutationKey() {
  return ['sites', '/sites/:SiteId', 'DELETE'] as const
}

export function getDeleteSitesSiteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':SiteId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':SiteId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSitesSiteIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':SiteId']['$delete']>) {
      return parseResponse(client.sites[':SiteId'].$delete(args, options))
    },
  })
}

export function useDeleteSitesSiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':SiteId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':SiteId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSitesSiteIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSitesSiteIdMutationKey() {
  return ['sites', '/sites/:SiteId', 'PATCH'] as const
}

export function getPatchSitesSiteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':SiteId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':SiteId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSitesSiteIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':SiteId']['$patch']>) {
      return parseResponse(client.sites[':SiteId'].$patch(args, options))
    },
  })
}

export function usePatchSitesSiteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':SiteId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':SiteId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSitesSiteIdMutationOptions<TError, TOnMutateResult>(
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

export function getCatalogItemCatalogItemIdQueryKey(
  args: InferRequestType<(typeof client.catalog.item)[':CatalogItemId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['catalog', '/catalog/item/:CatalogItemId', keyArgs] as const
}

export function getCatalogItemCatalogItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalog.item)[':CatalogItemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalog.item)[':CatalogItemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalog.item)[':CatalogItemId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogItemCatalogItemIdQueryKey>
  >({
    queryKey: getCatalogItemCatalogItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalog.item[':CatalogItemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCatalogItemCatalogItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalog.item)[':CatalogItemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalog.item)[':CatalogItemId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalog.item)[':CatalogItemId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogItemCatalogItemIdQueryKey>
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
      ...getCatalogItemCatalogItemIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCatalogItemCatalogItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalog.item)[':CatalogItemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalog.item)[':CatalogItemId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.catalog.item)[':CatalogItemId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogItemCatalogItemIdQueryKey>
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
      ...getCatalogItemCatalogItemIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConnectionsConnectionIdQueryKey(
  args: InferRequestType<(typeof client.connections)[':ConnectionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['connections', '/connections/:ConnectionId', keyArgs] as const
}

export function getConnectionsConnectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':ConnectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':ConnectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':ConnectionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsConnectionIdQueryKey>
  >({
    queryKey: getConnectionsConnectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':ConnectionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConnectionsConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':ConnectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':ConnectionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connections)[':ConnectionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsConnectionIdQueryKey>
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
      ...getConnectionsConnectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConnectionsConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':ConnectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':ConnectionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.connections)[':ConnectionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsConnectionIdQueryKey>
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
      ...getConnectionsConnectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrdersOrderIdQueryKey(
  args: InferRequestType<(typeof client.orders)[':OrderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['orders', '/orders/:OrderId', keyArgs] as const
}

export function getOrdersOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':OrderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orders)[':OrderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':OrderId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrdersOrderIdQueryKey>
  >({
    queryKey: getOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orders[':OrderId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':OrderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orders)[':OrderId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':OrderId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrdersOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrdersOrderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':OrderId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orders)[':OrderId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':OrderId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrdersOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrdersOrderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOutpostsOutpostIdInstanceTypesQueryKey(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['outposts', '/outposts/:OutpostId/instanceTypes', keyArgs] as const
}

export function getOutpostsOutpostIdInstanceTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOutpostsOutpostIdInstanceTypesQueryKey>
  >({
    queryKey: getOutpostsOutpostIdInstanceTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.outposts[':OutpostId'].instanceTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOutpostsOutpostIdInstanceTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOutpostsOutpostIdInstanceTypesQueryKey>
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
      ...getOutpostsOutpostIdInstanceTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOutpostsOutpostIdInstanceTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOutpostsOutpostIdInstanceTypesQueryKey>
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
      ...getOutpostsOutpostIdInstanceTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSitesSiteIdAddressAddressTypeQueryKey(
  args: InferRequestType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sites', '/sites/:SiteId/address#AddressType', keyArgs] as const
}

export function getSitesSiteIdAddressAddressTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSitesSiteIdAddressAddressTypeQueryKey>
  >({
    queryKey: getSitesSiteIdAddressAddressTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sites[':SiteId']['address#AddressType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSitesSiteIdAddressAddressType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIdAddressAddressTypeQueryKey>
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
      ...getSitesSiteIdAddressAddressTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSitesSiteIdAddressAddressType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSitesSiteIdAddressAddressTypeQueryKey>
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
      ...getSitesSiteIdAddressAddressTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOutpostsOutpostIdAssetsQueryKey(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['assets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['outposts', '/outposts/:OutpostId/assets', keyArgs] as const
}

export function getOutpostsOutpostIdAssetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['assets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOutpostsOutpostIdAssetsQueryKey>
  >({
    queryKey: getOutpostsOutpostIdAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.outposts[':OutpostId'].assets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOutpostsOutpostIdAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['assets']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['assets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOutpostsOutpostIdAssetsQueryKey>
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
      ...getOutpostsOutpostIdAssetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOutpostsOutpostIdAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['assets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['assets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOutpostsOutpostIdAssetsQueryKey>
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
      ...getOutpostsOutpostIdAssetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCatalogItemsQueryKey(args: InferRequestType<typeof client.catalog.items.$get>) {
  const { header: _, ...keyArgs } = args
  return ['catalog', '/catalog/items', keyArgs] as const
}

export function getCatalogItemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.items.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.catalog.items.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.items.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogItemsQueryKey>
  >({
    queryKey: getCatalogItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalog.items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCatalogItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.catalog.items.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.items.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCatalogItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCatalogItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.catalog.items.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.items.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCatalogItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCatalogItemsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListOrdersQueryKey(
  args: InferRequestType<(typeof client)['list-orders']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['list-orders', '/list-orders', keyArgs] as const
}

export function getListOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['list-orders']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['list-orders']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['list-orders']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListOrdersQueryKey>
  >({
    queryKey: getListOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['list-orders'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['list-orders']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['list-orders']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['list-orders']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['list-orders']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['list-orders']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['list-orders']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':ResourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:ResourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>) {
      return parseResponse(client.tags[':ResourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getPostConnectionsMutationKey() {
  return ['connections', '/connections', 'POST'] as const
}

export function getPostConnectionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>>,
    TError,
    InferRequestType<typeof client.connections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connections.$post>) {
      return parseResponse(client.connections.$post(args, options))
    },
  })
}

export function usePostConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.connections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConnectionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:ResourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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

export function getPutSitesSiteIdAddressMutationKey() {
  return ['sites', '/sites/:SiteId/address', 'PUT'] as const
}

export function getPutSitesSiteIdAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':SiteId']['address']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':SiteId']['address']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSitesSiteIdAddressMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sites)[':SiteId']['address']['$put']>) {
      return parseResponse(client.sites[':SiteId'].address.$put(args, options))
    },
  })
}

export function usePutSitesSiteIdAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sites)[':SiteId']['address']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':SiteId']['address']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSitesSiteIdAddressMutationOptions<TError, TOnMutateResult>(
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

export function getPatchSitesSiteIdRackPhysicalPropertiesMutationKey() {
  return ['sites', '/sites/:SiteId/rackPhysicalProperties', 'PATCH'] as const
}

export function getPatchSitesSiteIdRackPhysicalPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':SiteId']['rackPhysicalProperties']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sites)[':SiteId']['rackPhysicalProperties']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSitesSiteIdRackPhysicalPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sites)[':SiteId']['rackPhysicalProperties']['$patch']>,
    ) {
      return parseResponse(client.sites[':SiteId'].rackPhysicalProperties.$patch(args, options))
    },
  })
}

export function usePatchSitesSiteIdRackPhysicalProperties<
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
                ReturnType<(typeof client.sites)[':SiteId']['rackPhysicalProperties']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sites)[':SiteId']['rackPhysicalProperties']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSitesSiteIdRackPhysicalPropertiesMutationOptions<
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
