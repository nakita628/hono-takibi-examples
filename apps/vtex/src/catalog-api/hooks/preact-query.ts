import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiAddonPvtGiftlistGetListIdQueryKey(
  args: InferRequestType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/addon/pvt/giftlist/get/:listId', keyArgs] as const
}

export function getApiAddonPvtGiftlistGetListIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAddonPvtGiftlistGetListIdQueryKey>
  >({
    queryKey: getApiAddonPvtGiftlistGetListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.addon.pvt.giftlist.get[':listId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAddonPvtGiftlistGetListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAddonPvtGiftlistGetListIdQueryKey>
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
      ...getApiAddonPvtGiftlistGetListIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAddonPvtGiftlistGetListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAddonPvtGiftlistGetListIdQueryKey>
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
      ...getApiAddonPvtGiftlistGetListIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiAddonPvtReviewGetProductRateProductIdQueryKey(
  args: InferRequestType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/addon/pvt/review/GetProductRate/:productId', keyArgs] as const
}

export function getApiAddonPvtReviewGetProductRateProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAddonPvtReviewGetProductRateProductIdQueryKey>
  >({
    queryKey: getApiAddonPvtReviewGetProductRateProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.addon.pvt.review.GetProductRate[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiAddonPvtReviewGetProductRateProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAddonPvtReviewGetProductRateProductIdQueryKey>
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
      ...getApiAddonPvtReviewGetProductRateProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiAddonPvtReviewGetProductRateProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAddonPvtReviewGetProductRateProductIdQueryKey>
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
      ...getApiAddonPvtReviewGetProductRateProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiCatalogPvtAttachmentMutationKey() {
  return ['api', '/api/catalog/pvt/attachment', 'POST'] as const
}

export function getPostApiCatalogPvtAttachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.attachment.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.attachment.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtAttachmentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog.pvt.attachment.$post>) {
      return parseResponse(client.api.catalog.pvt.attachment.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtAttachment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.attachment.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.attachment.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtAttachmentMutationOptions<TError, TOnMutateResult>(
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

export function getApiCatalogPvtAttachmentAttachmentidQueryKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/attachment/:attachmentid', keyArgs] as const
}

export function getApiCatalogPvtAttachmentAttachmentidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtAttachmentAttachmentidQueryKey>
  >({
    queryKey: getApiCatalogPvtAttachmentAttachmentidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.attachment[':attachmentid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtAttachmentAttachmentid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtAttachmentAttachmentidQueryKey>
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
      ...getApiCatalogPvtAttachmentAttachmentidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtAttachmentAttachmentid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtAttachmentAttachmentidQueryKey>
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
      ...getApiCatalogPvtAttachmentAttachmentidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogPvtAttachmentAttachmentidMutationKey() {
  return ['api', '/api/catalog/pvt/attachment/:attachmentid', 'PUT'] as const
}

export function getPutApiCatalogPvtAttachmentAttachmentidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtAttachmentAttachmentidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$put']>,
    ) {
      return parseResponse(client.api.catalog.pvt.attachment[':attachmentid'].$put(args, options))
    },
  })
}

export function usePutApiCatalogPvtAttachmentAttachmentid<
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
                ReturnType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogPvtAttachmentAttachmentidMutationOptions<
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

export function getDeleteApiCatalogPvtAttachmentAttachmentidMutationKey() {
  return ['api', '/api/catalog/pvt/attachment/:attachmentid', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtAttachmentAttachmentidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtAttachmentAttachmentidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.attachment)[':attachmentid']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.attachment[':attachmentid'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCatalogPvtAttachmentAttachmentid<
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
                ReturnType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiCatalogPvtAttachmentAttachmentidMutationOptions<
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

export function getApiCatalogPvtAttachmentsQueryKey(
  args: InferRequestType<typeof client.api.catalog.pvt.attachments.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/attachments', keyArgs] as const
}

export function getApiCatalogPvtAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.attachments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog.pvt.attachments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.attachments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtAttachmentsQueryKey>
  >({
    queryKey: getApiCatalogPvtAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.attachments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog.pvt.attachments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.attachments.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtAttachmentsQueryKey>
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
      ...getApiCatalogPvtAttachmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.attachments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog.pvt.attachments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.attachments.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtAttachmentsQueryKey>
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
      ...getApiCatalogPvtAttachmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiCatalogPvtBrandMutationKey() {
  return ['api', '/api/catalog/pvt/brand', 'POST'] as const
}

export function getPostApiCatalogPvtBrandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.brand.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.brand.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtBrandMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog.pvt.brand.$post>) {
      return parseResponse(client.api.catalog.pvt.brand.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtBrand<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.brand.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.brand.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtBrandMutationOptions<TError, TOnMutateResult>(
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

export function getApiCatalogPvtBrandBrandIdQueryKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/brand/:brandId', keyArgs] as const
}

export function getApiCatalogPvtBrandBrandIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtBrandBrandIdQueryKey>
  >({
    queryKey: getApiCatalogPvtBrandBrandIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.brand[':brandId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtBrandBrandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtBrandBrandIdQueryKey>
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
      ...getApiCatalogPvtBrandBrandIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtBrandBrandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtBrandBrandIdQueryKey>
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
      ...getApiCatalogPvtBrandBrandIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogPvtBrandBrandIdMutationKey() {
  return ['api', '/api/catalog/pvt/brand/:brandId', 'PUT'] as const
}

export function getPutApiCatalogPvtBrandBrandIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtBrandBrandIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$put']>,
    ) {
      return parseResponse(client.api.catalog.pvt.brand[':brandId'].$put(args, options))
    },
  })
}

export function usePutApiCatalogPvtBrandBrandId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogPvtBrandBrandIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiCatalogPvtBrandBrandIdMutationKey() {
  return ['api', '/api/catalog/pvt/brand/:brandId', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtBrandBrandIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtBrandBrandIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$delete']>,
    ) {
      return parseResponse(client.api.catalog.pvt.brand[':brandId'].$delete(args, options))
    },
  })
}

export function useDeleteApiCatalogPvtBrandBrandId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiCatalogPvtBrandBrandIdMutationOptions<
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

export function getPostApiCatalogPvtCategoryMutationKey() {
  return ['api', '/api/catalog/pvt/category', 'POST'] as const
}

export function getPostApiCatalogPvtCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.category.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.category.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtCategoryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog.pvt.category.$post>) {
      return parseResponse(client.api.catalog.pvt.category.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtCategory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.category.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.category.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtCategoryMutationOptions<TError, TOnMutateResult>(
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

export function getApiCatalogPvtCategoryCategoryIdQueryKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/category/:categoryId', keyArgs] as const
}

export function getApiCatalogPvtCategoryCategoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtCategoryCategoryIdQueryKey>
  >({
    queryKey: getApiCatalogPvtCategoryCategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.category[':categoryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtCategoryCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtCategoryCategoryIdQueryKey>
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
      ...getApiCatalogPvtCategoryCategoryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtCategoryCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtCategoryCategoryIdQueryKey>
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
      ...getApiCatalogPvtCategoryCategoryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogPvtCategoryCategoryIdMutationKey() {
  return ['api', '/api/catalog/pvt/category/:categoryId', 'PUT'] as const
}

export function getPutApiCatalogPvtCategoryCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.category)[':categoryId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.category)[':categoryId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtCategoryCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.catalog.pvt.category)[':categoryId']['$put']>,
    ) {
      return parseResponse(client.api.catalog.pvt.category[':categoryId'].$put(args, options))
    },
  })
}

export function usePutApiCatalogPvtCategoryCategoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.catalog.pvt.category)[':categoryId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.catalog.pvt.category)[':categoryId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogPvtCategoryCategoryIdMutationOptions<
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

export function getPostApiCatalogPvtCollectionMutationKey() {
  return ['api', '/api/catalog/pvt/collection', 'POST'] as const
}

export function getPostApiCatalogPvtCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.collection.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.collection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtCollectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog.pvt.collection.$post>) {
      return parseResponse(client.api.catalog.pvt.collection.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtCollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.collection.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.collection.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtCollectionMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiCatalogPvtCollectionIndexMutationKey() {
  return ['api', '/api/catalog/pvt/collection/', 'POST'] as const
}

export function getPostApiCatalogPvtCollectionIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.collection.index.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.collection.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtCollectionIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog.pvt.collection.index.$post>) {
      return parseResponse(client.api.catalog.pvt.collection.index.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtCollectionIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.collection.index.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.collection.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtCollectionIndexMutationOptions<
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

export function getApiCatalogPvtCollectionInactiveQueryKey(
  args: InferRequestType<typeof client.api.catalog.pvt.collection.inactive.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/collection/inactive', keyArgs] as const
}

export function getApiCatalogPvtCollectionInactiveQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog.pvt.collection.inactive.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog.pvt.collection.inactive.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.collection.inactive.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtCollectionInactiveQueryKey>
  >({
    queryKey: getApiCatalogPvtCollectionInactiveQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.collection.inactive.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtCollectionInactive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog.pvt.collection.inactive.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog.pvt.collection.inactive.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.collection.inactive.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtCollectionInactiveQueryKey>
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
      ...getApiCatalogPvtCollectionInactiveQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtCollectionInactive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog.pvt.collection.inactive.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog.pvt.collection.inactive.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.collection.inactive.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtCollectionInactiveQueryKey>
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
      ...getApiCatalogPvtCollectionInactiveQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogPvtCollectionStockkeepingunitImportfileexampleQueryKey(
  args: InferRequestType<
    typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/collection/stockkeepingunit/importfileexample', keyArgs] as const
}

export function getApiCatalogPvtCollectionStockkeepingunitImportfileexampleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtCollectionStockkeepingunitImportfileexampleQueryKey>
  >({
    queryKey: getApiCatalogPvtCollectionStockkeepingunitImportfileexampleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtCollectionStockkeepingunitImportfileexample<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtCollectionStockkeepingunitImportfileexampleQueryKey>
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
      ...getApiCatalogPvtCollectionStockkeepingunitImportfileexampleQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtCollectionStockkeepingunitImportfileexample<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtCollectionStockkeepingunitImportfileexampleQueryKey>
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
      ...getApiCatalogPvtCollectionStockkeepingunitImportfileexampleQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogPvtCollectionCollectionIdQueryKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/collection/:collectionId', keyArgs] as const
}

export function getApiCatalogPvtCollectionCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtCollectionCollectionIdQueryKey>
  >({
    queryKey: getApiCatalogPvtCollectionCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.collection[':collectionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtCollectionCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtCollectionCollectionIdQueryKey>
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
      ...getApiCatalogPvtCollectionCollectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtCollectionCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtCollectionCollectionIdQueryKey>
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
      ...getApiCatalogPvtCollectionCollectionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogPvtCollectionCollectionIdMutationKey() {
  return ['api', '/api/catalog/pvt/collection/:collectionId', 'PUT'] as const
}

export function getPutApiCatalogPvtCollectionCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtCollectionCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$put']>,
    ) {
      return parseResponse(client.api.catalog.pvt.collection[':collectionId'].$put(args, options))
    },
  })
}

export function usePutApiCatalogPvtCollectionCollectionId<
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
                ReturnType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogPvtCollectionCollectionIdMutationOptions<
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

export function getDeleteApiCatalogPvtCollectionCollectionIdMutationKey() {
  return ['api', '/api/catalog/pvt/collection/:collectionId', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtCollectionCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtCollectionCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.collection)[':collectionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.collection[':collectionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCatalogPvtCollectionCollectionId<
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
                ReturnType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiCatalogPvtCollectionCollectionIdMutationOptions<
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

export function getPostApiCatalogPvtCollectionCollectionIdPositionMutationKey() {
  return ['api', '/api/catalog/pvt/collection/:collectionId/position', 'POST'] as const
}

export function getPostApiCatalogPvtCollectionCollectionIdPositionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.collection)[':collectionId']['position']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.collection)[':collectionId']['position']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtCollectionCollectionIdPositionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.collection)[':collectionId']['position']['$post']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.collection[':collectionId'].position.$post(args, options),
      )
    },
  })
}

export function usePostApiCatalogPvtCollectionCollectionIdPosition<
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
                  (typeof client.api.catalog.pvt.collection)[':collectionId']['position']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.collection)[':collectionId']['position']['$post']
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
  const mutationDefaults = getPostApiCatalogPvtCollectionCollectionIdPositionMutationOptions<
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

export function getApiCatalogPvtCollectionCollectionIdProductsQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/collection/:collectionId/products', keyArgs] as const
}

export function getApiCatalogPvtCollectionCollectionIdProductsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtCollectionCollectionIdProductsQueryKey>
  >({
    queryKey: getApiCatalogPvtCollectionCollectionIdProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.collection[':collectionId'].products.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtCollectionCollectionIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtCollectionCollectionIdProductsQueryKey>
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
      ...getApiCatalogPvtCollectionCollectionIdProductsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtCollectionCollectionIdProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtCollectionCollectionIdProductsQueryKey>
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
      ...getApiCatalogPvtCollectionCollectionIdProductsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiCatalogPvtCollectionCollectionIdStockkeepingunitImportexcludeMutationKey() {
  return [
    'api',
    '/api/catalog/pvt/collection/:collectionId/stockkeepingunit/importexclude',
    'POST',
  ] as const
}

export function getPostApiCatalogPvtCollectionCollectionIdStockkeepingunitImportexcludeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.collection)[':collectionId']['stockkeepingunit']['importexclude']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.collection)[':collectionId']['stockkeepingunit']['importexclude']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiCatalogPvtCollectionCollectionIdStockkeepingunitImportexcludeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.collection)[':collectionId']['stockkeepingunit']['importexclude']['$post']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.collection[':collectionId'].stockkeepingunit.importexclude.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiCatalogPvtCollectionCollectionIdStockkeepingunitImportexclude<
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
                  (typeof client.api.catalog.pvt.collection)[':collectionId']['stockkeepingunit']['importexclude']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.collection)[':collectionId']['stockkeepingunit']['importexclude']['$post']
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
    getPostApiCatalogPvtCollectionCollectionIdStockkeepingunitImportexcludeMutationOptions<
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

export function getPostApiCatalogPvtCollectionCollectionIdStockkeepingunitImportinsertMutationKey() {
  return [
    'api',
    '/api/catalog/pvt/collection/:collectionId/stockkeepingunit/importinsert',
    'POST',
  ] as const
}

export function getPostApiCatalogPvtCollectionCollectionIdStockkeepingunitImportinsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.collection)[':collectionId']['stockkeepingunit']['importinsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.collection)[':collectionId']['stockkeepingunit']['importinsert']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiCatalogPvtCollectionCollectionIdStockkeepingunitImportinsertMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.collection)[':collectionId']['stockkeepingunit']['importinsert']['$post']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.collection[':collectionId'].stockkeepingunit.importinsert.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiCatalogPvtCollectionCollectionIdStockkeepingunitImportinsert<
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
                  (typeof client.api.catalog.pvt.collection)[':collectionId']['stockkeepingunit']['importinsert']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.collection)[':collectionId']['stockkeepingunit']['importinsert']['$post']
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
    getPostApiCatalogPvtCollectionCollectionIdStockkeepingunitImportinsertMutationOptions<
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

export function getApiCatalogPvtCollectionCollectionIdSubcollectionQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/collection/:collectionId/subcollection', keyArgs] as const
}

export function getApiCatalogPvtCollectionCollectionIdSubcollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtCollectionCollectionIdSubcollectionQueryKey>
  >({
    queryKey: getApiCatalogPvtCollectionCollectionIdSubcollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.collection[':collectionId'].subcollection.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtCollectionCollectionIdSubcollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtCollectionCollectionIdSubcollectionQueryKey>
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
      ...getApiCatalogPvtCollectionCollectionIdSubcollectionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtCollectionCollectionIdSubcollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtCollectionCollectionIdSubcollectionQueryKey>
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
      ...getApiCatalogPvtCollectionCollectionIdSubcollectionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiCatalogPvtProductMutationKey() {
  return ['api', '/api/catalog/pvt/product', 'POST'] as const
}

export function getPostApiCatalogPvtProductMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.product.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.product.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtProductMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog.pvt.product.$post>) {
      return parseResponse(client.api.catalog.pvt.product.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtProduct<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.product.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.product.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtProductMutationOptions<TError, TOnMutateResult>(
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

export function getApiCatalogPvtProductProductIdQueryKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/product/:productId', keyArgs] as const
}

export function getApiCatalogPvtProductProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtProductProductIdQueryKey>
  >({
    queryKey: getApiCatalogPvtProductProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.product[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtProductProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtProductProductIdQueryKey>
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
      ...getApiCatalogPvtProductProductIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtProductProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtProductProductIdQueryKey>
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
      ...getApiCatalogPvtProductProductIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogPvtProductProductIdMutationKey() {
  return ['api', '/api/catalog/pvt/product/:productId', 'PUT'] as const
}

export function getPutApiCatalogPvtProductProductIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtProductProductIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['$put']>,
    ) {
      return parseResponse(client.api.catalog.pvt.product[':productId'].$put(args, options))
    },
  })
}

export function usePutApiCatalogPvtProductProductId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogPvtProductProductIdMutationOptions<
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

export function getApiCatalogPvtProductProductIdSalespolicyQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/product/:productId/salespolicy', keyArgs] as const
}

export function getApiCatalogPvtProductProductIdSalespolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtProductProductIdSalespolicyQueryKey>
  >({
    queryKey: getApiCatalogPvtProductProductIdSalespolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.product[':productId'].salespolicy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtProductProductIdSalespolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtProductProductIdSalespolicyQueryKey>
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
      ...getApiCatalogPvtProductProductIdSalespolicyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtProductProductIdSalespolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtProductProductIdSalespolicyQueryKey>
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
      ...getApiCatalogPvtProductProductIdSalespolicyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiCatalogPvtProductProductIdSalespolicyTradepolicyIdMutationKey() {
  return ['api', '/api/catalog/pvt/product/:productId/salespolicy/:tradepolicyId', 'POST'] as const
}

export function getPostApiCatalogPvtProductProductIdSalespolicyTradepolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.product)[':productId']['salespolicy'][':tradepolicyId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['salespolicy'][':tradepolicyId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtProductProductIdSalespolicyTradepolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.product)[':productId']['salespolicy'][':tradepolicyId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.product[':productId'].salespolicy[':tradepolicyId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiCatalogPvtProductProductIdSalespolicyTradepolicyId<
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
                  (typeof client.api.catalog.pvt.product)[':productId']['salespolicy'][':tradepolicyId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.product)[':productId']['salespolicy'][':tradepolicyId']['$post']
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
    getPostApiCatalogPvtProductProductIdSalespolicyTradepolicyIdMutationOptions<
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

export function getDeleteApiCatalogPvtProductProductIdSalespolicyTradepolicyIdMutationKey() {
  return [
    'api',
    '/api/catalog/pvt/product/:productId/salespolicy/:tradepolicyId',
    'DELETE',
  ] as const
}

export function getDeleteApiCatalogPvtProductProductIdSalespolicyTradepolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.product)[':productId']['salespolicy'][':tradepolicyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['salespolicy'][':tradepolicyId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtProductProductIdSalespolicyTradepolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.product)[':productId']['salespolicy'][':tradepolicyId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.product[':productId'].salespolicy[':tradepolicyId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiCatalogPvtProductProductIdSalespolicyTradepolicyId<
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
                  (typeof client.api.catalog.pvt.product)[':productId']['salespolicy'][':tradepolicyId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.product)[':productId']['salespolicy'][':tradepolicyId']['$delete']
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
    getDeleteApiCatalogPvtProductProductIdSalespolicyTradepolicyIdMutationOptions<
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

export function getApiCatalogPvtProductProductIdSimilarcategoryIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/product/:productId/similarcategory/', keyArgs] as const
}

export function getApiCatalogPvtProductProductIdSimilarcategoryIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtProductProductIdSimilarcategoryIndexQueryKey>
  >({
    queryKey: getApiCatalogPvtProductProductIdSimilarcategoryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.product[':productId'].similarcategory.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtProductProductIdSimilarcategoryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtProductProductIdSimilarcategoryIndexQueryKey>
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
      ...getApiCatalogPvtProductProductIdSimilarcategoryIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtProductProductIdSimilarcategoryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtProductProductIdSimilarcategoryIndexQueryKey>
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
      ...getApiCatalogPvtProductProductIdSimilarcategoryIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiCatalogPvtProductProductIdSimilarcategoryCategoryIdMutationKey() {
  return ['api', '/api/catalog/pvt/product/:productId/similarcategory/:categoryId', 'POST'] as const
}

export function getPostApiCatalogPvtProductProductIdSimilarcategoryCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.product)[':productId']['similarcategory'][':categoryId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['similarcategory'][':categoryId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtProductProductIdSimilarcategoryCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.product)[':productId']['similarcategory'][':categoryId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.product[':productId'].similarcategory[':categoryId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiCatalogPvtProductProductIdSimilarcategoryCategoryId<
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
                  (typeof client.api.catalog.pvt.product)[':productId']['similarcategory'][':categoryId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.product)[':productId']['similarcategory'][':categoryId']['$post']
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
    getPostApiCatalogPvtProductProductIdSimilarcategoryCategoryIdMutationOptions<
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

export function getDeleteApiCatalogPvtProductProductIdSimilarcategoryCategoryIdMutationKey() {
  return [
    'api',
    '/api/catalog/pvt/product/:productId/similarcategory/:categoryId',
    'DELETE',
  ] as const
}

export function getDeleteApiCatalogPvtProductProductIdSimilarcategoryCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.product)[':productId']['similarcategory'][':categoryId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['similarcategory'][':categoryId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtProductProductIdSimilarcategoryCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.product)[':productId']['similarcategory'][':categoryId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.product[':productId'].similarcategory[':categoryId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiCatalogPvtProductProductIdSimilarcategoryCategoryId<
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
                  (typeof client.api.catalog.pvt.product)[':productId']['similarcategory'][':categoryId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.product)[':productId']['similarcategory'][':categoryId']['$delete']
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
    getDeleteApiCatalogPvtProductProductIdSimilarcategoryCategoryIdMutationOptions<
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

export function getApiCatalogPvtProductProductIdSpecificationQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/product/:productId/specification', keyArgs] as const
}

export function getApiCatalogPvtProductProductIdSpecificationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtProductProductIdSpecificationQueryKey>
  >({
    queryKey: getApiCatalogPvtProductProductIdSpecificationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.product[':productId'].specification.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtProductProductIdSpecification<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtProductProductIdSpecificationQueryKey>
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
      ...getApiCatalogPvtProductProductIdSpecificationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtProductProductIdSpecification<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtProductProductIdSpecificationQueryKey>
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
      ...getApiCatalogPvtProductProductIdSpecificationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiCatalogPvtProductProductIdSpecificationMutationKey() {
  return ['api', '/api/catalog/pvt/product/:productId/specification', 'POST'] as const
}

export function getPostApiCatalogPvtProductProductIdSpecificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.product)[':productId']['specification']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['specification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtProductProductIdSpecificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.product)[':productId']['specification']['$post']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.product[':productId'].specification.$post(args, options),
      )
    },
  })
}

export function usePostApiCatalogPvtProductProductIdSpecification<
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
                  (typeof client.api.catalog.pvt.product)[':productId']['specification']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.product)[':productId']['specification']['$post']
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
  const mutationDefaults = getPostApiCatalogPvtProductProductIdSpecificationMutationOptions<
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

export function getDeleteApiCatalogPvtProductProductIdSpecificationMutationKey() {
  return ['api', '/api/catalog/pvt/product/:productId/specification', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtProductProductIdSpecificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.product)[':productId']['specification']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['specification']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtProductProductIdSpecificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.product)[':productId']['specification']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.product[':productId'].specification.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCatalogPvtProductProductIdSpecification<
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
                  (typeof client.api.catalog.pvt.product)[':productId']['specification']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.product)[':productId']['specification']['$delete']
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
  const mutationDefaults = getDeleteApiCatalogPvtProductProductIdSpecificationMutationOptions<
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

export function getDeleteApiCatalogPvtProductProductIdSpecificationSpecificationIdMutationKey() {
  return [
    'api',
    '/api/catalog/pvt/product/:productId/specification/:specificationId',
    'DELETE',
  ] as const
}

export function getDeleteApiCatalogPvtProductProductIdSpecificationSpecificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.product)[':productId']['specification'][':specificationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['specification'][':specificationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtProductProductIdSpecificationSpecificationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.product)[':productId']['specification'][':specificationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.product[':productId'].specification[':specificationId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiCatalogPvtProductProductIdSpecificationSpecificationId<
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
                  (typeof client.api.catalog.pvt.product)[':productId']['specification'][':specificationId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.product)[':productId']['specification'][':specificationId']['$delete']
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
    getDeleteApiCatalogPvtProductProductIdSpecificationSpecificationIdMutationOptions<
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

export function getPutApiCatalogPvtProductProductIdSpecificationvalueMutationKey() {
  return ['api', '/api/catalog/pvt/product/:productId/specificationvalue', 'PUT'] as const
}

export function getPutApiCatalogPvtProductProductIdSpecificationvalueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.product)[':productId']['specificationvalue']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['specificationvalue']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtProductProductIdSpecificationvalueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.product)[':productId']['specificationvalue']['$put']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.product[':productId'].specificationvalue.$put(args, options),
      )
    },
  })
}

export function usePutApiCatalogPvtProductProductIdSpecificationvalue<
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
                  (typeof client.api.catalog.pvt.product)[':productId']['specificationvalue']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.product)[':productId']['specificationvalue']['$put']
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
  const mutationDefaults = getPutApiCatalogPvtProductProductIdSpecificationvalueMutationOptions<
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

export function getPostApiCatalogPvtSkuattachmentMutationKey() {
  return ['api', '/api/catalog/pvt/skuattachment', 'POST'] as const
}

export function getPostApiCatalogPvtSkuattachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.skuattachment.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.skuattachment.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtSkuattachmentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog.pvt.skuattachment.$post>) {
      return parseResponse(client.api.catalog.pvt.skuattachment.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtSkuattachment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.skuattachment.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.skuattachment.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtSkuattachmentMutationOptions<
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

export function getDeleteApiCatalogPvtSkuattachmentMutationKey() {
  return ['api', '/api/catalog/pvt/skuattachment', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtSkuattachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.skuattachment.$delete>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.skuattachment.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtSkuattachmentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog.pvt.skuattachment.$delete>) {
      return parseResponse(client.api.catalog.pvt.skuattachment.$delete(args, options))
    },
  })
}

export function useDeleteApiCatalogPvtSkuattachment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.skuattachment.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.skuattachment.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiCatalogPvtSkuattachmentMutationOptions<
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

export function getDeleteApiCatalogPvtSkuattachmentSkuAttachmentAssociationIdMutationKey() {
  return ['api', '/api/catalog/pvt/skuattachment/:skuAttachmentAssociationId', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtSkuattachmentSkuAttachmentAssociationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.skuattachment)[':skuAttachmentAssociationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.skuattachment)[':skuAttachmentAssociationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtSkuattachmentSkuAttachmentAssociationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.skuattachment)[':skuAttachmentAssociationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.skuattachment[':skuAttachmentAssociationId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCatalogPvtSkuattachmentSkuAttachmentAssociationId<
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
                  (typeof client.api.catalog.pvt.skuattachment)[':skuAttachmentAssociationId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.skuattachment)[':skuAttachmentAssociationId']['$delete']
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
    getDeleteApiCatalogPvtSkuattachmentSkuAttachmentAssociationIdMutationOptions<
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

export function getPostApiCatalogPvtSkucomplementMutationKey() {
  return ['api', '/api/catalog/pvt/skucomplement', 'POST'] as const
}

export function getPostApiCatalogPvtSkucomplementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.skucomplement.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.skucomplement.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtSkucomplementMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog.pvt.skucomplement.$post>) {
      return parseResponse(client.api.catalog.pvt.skucomplement.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtSkucomplement<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.skucomplement.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.skucomplement.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtSkucomplementMutationOptions<
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

export function getApiCatalogPvtSkucomplementSkuComplementIdQueryKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/skucomplement/:skuComplementId', keyArgs] as const
}

export function getApiCatalogPvtSkucomplementSkuComplementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSkucomplementSkuComplementIdQueryKey>
  >({
    queryKey: getApiCatalogPvtSkucomplementSkuComplementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.skucomplement[':skuComplementId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtSkucomplementSkuComplementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSkucomplementSkuComplementIdQueryKey>
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
      ...getApiCatalogPvtSkucomplementSkuComplementIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtSkucomplementSkuComplementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSkucomplementSkuComplementIdQueryKey>
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
      ...getApiCatalogPvtSkucomplementSkuComplementIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiCatalogPvtSkucomplementSkuComplementIdMutationKey() {
  return ['api', '/api/catalog/pvt/skucomplement/:skuComplementId', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtSkucomplementSkuComplementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtSkucomplementSkuComplementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.skucomplement[':skuComplementId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCatalogPvtSkucomplementSkuComplementId<
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
                  (typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$delete']
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
  const mutationDefaults = getDeleteApiCatalogPvtSkucomplementSkuComplementIdMutationOptions<
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

export function getPostApiCatalogPvtSkuserviceMutationKey() {
  return ['api', '/api/catalog/pvt/skuservice', 'POST'] as const
}

export function getPostApiCatalogPvtSkuserviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.skuservice.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.skuservice.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtSkuserviceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog.pvt.skuservice.$post>) {
      return parseResponse(client.api.catalog.pvt.skuservice.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtSkuservice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.skuservice.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.skuservice.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtSkuserviceMutationOptions<TError, TOnMutateResult>(
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

export function getApiCatalogPvtSkuserviceSkuServiceIdQueryKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/skuservice/:skuServiceId', keyArgs] as const
}

export function getApiCatalogPvtSkuserviceSkuServiceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSkuserviceSkuServiceIdQueryKey>
  >({
    queryKey: getApiCatalogPvtSkuserviceSkuServiceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.skuservice[':skuServiceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtSkuserviceSkuServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSkuserviceSkuServiceIdQueryKey>
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
      ...getApiCatalogPvtSkuserviceSkuServiceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtSkuserviceSkuServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSkuserviceSkuServiceIdQueryKey>
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
      ...getApiCatalogPvtSkuserviceSkuServiceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogPvtSkuserviceSkuServiceIdMutationKey() {
  return ['api', '/api/catalog/pvt/skuservice/:skuServiceId', 'PUT'] as const
}

export function getPutApiCatalogPvtSkuserviceSkuServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtSkuserviceSkuServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$put']>,
    ) {
      return parseResponse(client.api.catalog.pvt.skuservice[':skuServiceId'].$put(args, options))
    },
  })
}

export function usePutApiCatalogPvtSkuserviceSkuServiceId<
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
                ReturnType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogPvtSkuserviceSkuServiceIdMutationOptions<
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

export function getDeleteApiCatalogPvtSkuserviceSkuServiceIdMutationKey() {
  return ['api', '/api/catalog/pvt/skuservice/:skuServiceId', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtSkuserviceSkuServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtSkuserviceSkuServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.skuservice[':skuServiceId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCatalogPvtSkuserviceSkuServiceId<
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
                ReturnType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiCatalogPvtSkuserviceSkuServiceIdMutationOptions<
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

export function getPostApiCatalogPvtSkuservicetypeMutationKey() {
  return ['api', '/api/catalog/pvt/skuservicetype', 'POST'] as const
}

export function getPostApiCatalogPvtSkuservicetypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.skuservicetype.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.skuservicetype.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtSkuservicetypeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog.pvt.skuservicetype.$post>) {
      return parseResponse(client.api.catalog.pvt.skuservicetype.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtSkuservicetype<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.skuservicetype.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.skuservicetype.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtSkuservicetypeMutationOptions<
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

export function getApiCatalogPvtSkuservicetypeSkuServiceTypeIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/skuservicetype/:skuServiceTypeId', keyArgs] as const
}

export function getApiCatalogPvtSkuservicetypeSkuServiceTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSkuservicetypeSkuServiceTypeIdQueryKey>
  >({
    queryKey: getApiCatalogPvtSkuservicetypeSkuServiceTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.skuservicetype[':skuServiceTypeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtSkuservicetypeSkuServiceTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSkuservicetypeSkuServiceTypeIdQueryKey>
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
      ...getApiCatalogPvtSkuservicetypeSkuServiceTypeIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtSkuservicetypeSkuServiceTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSkuservicetypeSkuServiceTypeIdQueryKey>
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
      ...getApiCatalogPvtSkuservicetypeSkuServiceTypeIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogPvtSkuservicetypeSkuServiceTypeIdMutationKey() {
  return ['api', '/api/catalog/pvt/skuservicetype/:skuServiceTypeId', 'PUT'] as const
}

export function getPutApiCatalogPvtSkuservicetypeSkuServiceTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtSkuservicetypeSkuServiceTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.skuservicetype[':skuServiceTypeId'].$put(args, options),
      )
    },
  })
}

export function usePutApiCatalogPvtSkuservicetypeSkuServiceTypeId<
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
                  (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$put']
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
  const mutationDefaults = getPutApiCatalogPvtSkuservicetypeSkuServiceTypeIdMutationOptions<
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

export function getDeleteApiCatalogPvtSkuservicetypeSkuServiceTypeIdMutationKey() {
  return ['api', '/api/catalog/pvt/skuservicetype/:skuServiceTypeId', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtSkuservicetypeSkuServiceTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtSkuservicetypeSkuServiceTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.skuservicetype[':skuServiceTypeId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCatalogPvtSkuservicetypeSkuServiceTypeId<
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
                  (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$delete']
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
  const mutationDefaults = getDeleteApiCatalogPvtSkuservicetypeSkuServiceTypeIdMutationOptions<
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

export function getPostApiCatalogPvtSkuservicetypeattachmentMutationKey() {
  return ['api', '/api/catalog/pvt/skuservicetypeattachment', 'POST'] as const
}

export function getPostApiCatalogPvtSkuservicetypeattachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.skuservicetypeattachment.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.skuservicetypeattachment.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtSkuservicetypeattachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.catalog.pvt.skuservicetypeattachment.$post>,
    ) {
      return parseResponse(client.api.catalog.pvt.skuservicetypeattachment.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtSkuservicetypeattachment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.skuservicetypeattachment.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.skuservicetypeattachment.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtSkuservicetypeattachmentMutationOptions<
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

export function getDeleteApiCatalogPvtSkuservicetypeattachmentMutationKey() {
  return ['api', '/api/catalog/pvt/skuservicetypeattachment', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtSkuservicetypeattachmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.skuservicetypeattachment.$delete>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.skuservicetypeattachment.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtSkuservicetypeattachmentMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.catalog.pvt.skuservicetypeattachment.$delete>,
    ) {
      return parseResponse(client.api.catalog.pvt.skuservicetypeattachment.$delete(args, options))
    },
  })
}

export function useDeleteApiCatalogPvtSkuservicetypeattachment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.skuservicetypeattachment.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.skuservicetypeattachment.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiCatalogPvtSkuservicetypeattachmentMutationOptions<
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

export function getDeleteApiCatalogPvtSkuservicetypeattachmentSkuServiceTypeAttachmentIdMutationKey() {
  return [
    'api',
    '/api/catalog/pvt/skuservicetypeattachment/:skuServiceTypeAttachmentId',
    'DELETE',
  ] as const
}

export function getDeleteApiCatalogPvtSkuservicetypeattachmentSkuServiceTypeAttachmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.skuservicetypeattachment)[':skuServiceTypeAttachmentId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.skuservicetypeattachment)[':skuServiceTypeAttachmentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiCatalogPvtSkuservicetypeattachmentSkuServiceTypeAttachmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.skuservicetypeattachment)[':skuServiceTypeAttachmentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.skuservicetypeattachment[':skuServiceTypeAttachmentId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiCatalogPvtSkuservicetypeattachmentSkuServiceTypeAttachmentId<
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
                  (typeof client.api.catalog.pvt.skuservicetypeattachment)[':skuServiceTypeAttachmentId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.skuservicetypeattachment)[':skuServiceTypeAttachmentId']['$delete']
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
    getDeleteApiCatalogPvtSkuservicetypeattachmentSkuServiceTypeAttachmentIdMutationOptions<
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

export function getPostApiCatalogPvtSkuservicevalueMutationKey() {
  return ['api', '/api/catalog/pvt/skuservicevalue', 'POST'] as const
}

export function getPostApiCatalogPvtSkuservicevalueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.skuservicevalue.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.skuservicevalue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtSkuservicevalueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog.pvt.skuservicevalue.$post>) {
      return parseResponse(client.api.catalog.pvt.skuservicevalue.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtSkuservicevalue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.skuservicevalue.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.skuservicevalue.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtSkuservicevalueMutationOptions<
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

export function getApiCatalogPvtSkuservicevalueSkuServiceValueIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/skuservicevalue/:skuServiceValueId', keyArgs] as const
}

export function getApiCatalogPvtSkuservicevalueSkuServiceValueIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSkuservicevalueSkuServiceValueIdQueryKey>
  >({
    queryKey: getApiCatalogPvtSkuservicevalueSkuServiceValueIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.skuservicevalue[':skuServiceValueId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtSkuservicevalueSkuServiceValueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSkuservicevalueSkuServiceValueIdQueryKey>
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
      ...getApiCatalogPvtSkuservicevalueSkuServiceValueIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtSkuservicevalueSkuServiceValueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSkuservicevalueSkuServiceValueIdQueryKey>
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
      ...getApiCatalogPvtSkuservicevalueSkuServiceValueIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogPvtSkuservicevalueSkuServiceValueIdMutationKey() {
  return ['api', '/api/catalog/pvt/skuservicevalue/:skuServiceValueId', 'PUT'] as const
}

export function getPutApiCatalogPvtSkuservicevalueSkuServiceValueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtSkuservicevalueSkuServiceValueIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.skuservicevalue[':skuServiceValueId'].$put(args, options),
      )
    },
  })
}

export function usePutApiCatalogPvtSkuservicevalueSkuServiceValueId<
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
                  (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$put']
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
  const mutationDefaults = getPutApiCatalogPvtSkuservicevalueSkuServiceValueIdMutationOptions<
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

export function getDeleteApiCatalogPvtSkuservicevalueSkuServiceValueIdMutationKey() {
  return ['api', '/api/catalog/pvt/skuservicevalue/:skuServiceValueId', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtSkuservicevalueSkuServiceValueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtSkuservicevalueSkuServiceValueIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.skuservicevalue[':skuServiceValueId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCatalogPvtSkuservicevalueSkuServiceValueId<
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
                  (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$delete']
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
  const mutationDefaults = getDeleteApiCatalogPvtSkuservicevalueSkuServiceValueIdMutationOptions<
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

export function getPostApiCatalogPvtSpecificationMutationKey() {
  return ['api', '/api/catalog/pvt/specification', 'POST'] as const
}

export function getPostApiCatalogPvtSpecificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.specification.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.specification.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtSpecificationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog.pvt.specification.$post>) {
      return parseResponse(client.api.catalog.pvt.specification.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtSpecification<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.specification.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.specification.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtSpecificationMutationOptions<
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

export function getApiCatalogPvtSpecificationNonstructuredQueryKey(
  args: InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/specification/nonstructured', keyArgs] as const
}

export function getApiCatalogPvtSpecificationNonstructuredQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog.pvt.specification.nonstructured.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.specification.nonstructured.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSpecificationNonstructuredQueryKey>
  >({
    queryKey: getApiCatalogPvtSpecificationNonstructuredQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.specification.nonstructured.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtSpecificationNonstructured<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog.pvt.specification.nonstructured.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.specification.nonstructured.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSpecificationNonstructuredQueryKey>
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
      ...getApiCatalogPvtSpecificationNonstructuredQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtSpecificationNonstructured<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog.pvt.specification.nonstructured.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.specification.nonstructured.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSpecificationNonstructuredQueryKey>
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
      ...getApiCatalogPvtSpecificationNonstructuredQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiCatalogPvtSpecificationNonstructuredMutationKey() {
  return ['api', '/api/catalog/pvt/specification/nonstructured', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtSpecificationNonstructuredMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.specification.nonstructured.$delete>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtSpecificationNonstructuredMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$delete>,
    ) {
      return parseResponse(
        client.api.catalog.pvt.specification.nonstructured.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCatalogPvtSpecificationNonstructured<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.specification.nonstructured.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiCatalogPvtSpecificationNonstructuredMutationOptions<
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

export function getApiCatalogPvtSpecificationNonstructuredIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/specification/nonstructured/:Id', keyArgs] as const
}

export function getApiCatalogPvtSpecificationNonstructuredIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSpecificationNonstructuredIdQueryKey>
  >({
    queryKey: getApiCatalogPvtSpecificationNonstructuredIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.specification.nonstructured[':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtSpecificationNonstructuredId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSpecificationNonstructuredIdQueryKey>
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
      ...getApiCatalogPvtSpecificationNonstructuredIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtSpecificationNonstructuredId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSpecificationNonstructuredIdQueryKey>
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
      ...getApiCatalogPvtSpecificationNonstructuredIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiCatalogPvtSpecificationNonstructuredIdMutationKey() {
  return ['api', '/api/catalog/pvt/specification/nonstructured/:Id', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtSpecificationNonstructuredIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtSpecificationNonstructuredIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.specification.nonstructured[':Id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCatalogPvtSpecificationNonstructuredId<
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
                  (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$delete']
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
  const mutationDefaults = getDeleteApiCatalogPvtSpecificationNonstructuredIdMutationOptions<
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

export function getApiCatalogPvtSpecificationSpecificationIdQueryKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/specification/:specificationId', keyArgs] as const
}

export function getApiCatalogPvtSpecificationSpecificationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSpecificationSpecificationIdQueryKey>
  >({
    queryKey: getApiCatalogPvtSpecificationSpecificationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.specification[':specificationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtSpecificationSpecificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.specification)[':specificationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSpecificationSpecificationIdQueryKey>
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
      ...getApiCatalogPvtSpecificationSpecificationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtSpecificationSpecificationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.specification)[':specificationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSpecificationSpecificationIdQueryKey>
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
      ...getApiCatalogPvtSpecificationSpecificationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogPvtSpecificationSpecificationIdMutationKey() {
  return ['api', '/api/catalog/pvt/specification/:specificationId', 'PUT'] as const
}

export function getPutApiCatalogPvtSpecificationSpecificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtSpecificationSpecificationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.specification)[':specificationId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.specification[':specificationId'].$put(args, options),
      )
    },
  })
}

export function usePutApiCatalogPvtSpecificationSpecificationId<
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
                  (typeof client.api.catalog.pvt.specification)[':specificationId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogPvtSpecificationSpecificationIdMutationOptions<
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

export function getPostApiCatalogPvtSpecificationgroupMutationKey() {
  return ['api', '/api/catalog/pvt/specificationgroup', 'POST'] as const
}

export function getPostApiCatalogPvtSpecificationgroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.specificationgroup.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.specificationgroup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtSpecificationgroupMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.catalog.pvt.specificationgroup.$post>,
    ) {
      return parseResponse(client.api.catalog.pvt.specificationgroup.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtSpecificationgroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.specificationgroup.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.specificationgroup.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtSpecificationgroupMutationOptions<
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

export function getPutApiCatalogPvtSpecificationgroupGroupIdMutationKey() {
  return ['api', '/api/catalog/pvt/specificationgroup/:groupId', 'PUT'] as const
}

export function getPutApiCatalogPvtSpecificationgroupGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.specificationgroup)[':groupId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.specificationgroup)[':groupId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtSpecificationgroupGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.specificationgroup)[':groupId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.specificationgroup[':groupId'].$put(args, options),
      )
    },
  })
}

export function usePutApiCatalogPvtSpecificationgroupGroupId<
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
                ReturnType<(typeof client.api.catalog.pvt.specificationgroup)[':groupId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.catalog.pvt.specificationgroup)[':groupId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogPvtSpecificationgroupGroupIdMutationOptions<
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

export function getPostApiCatalogPvtSpecificationvalueMutationKey() {
  return ['api', '/api/catalog/pvt/specificationvalue', 'POST'] as const
}

export function getPostApiCatalogPvtSpecificationvalueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.specificationvalue.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.specificationvalue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtSpecificationvalueMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.catalog.pvt.specificationvalue.$post>,
    ) {
      return parseResponse(client.api.catalog.pvt.specificationvalue.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtSpecificationvalue<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.specificationvalue.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.specificationvalue.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtSpecificationvalueMutationOptions<
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

export function getApiCatalogPvtSpecificationvalueSpecificationValueIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/specificationvalue/:specificationValueId', keyArgs] as const
}

export function getApiCatalogPvtSpecificationvalueSpecificationValueIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSpecificationvalueSpecificationValueIdQueryKey>
  >({
    queryKey: getApiCatalogPvtSpecificationvalueSpecificationValueIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.specificationvalue[':specificationValueId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtSpecificationvalueSpecificationValueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSpecificationvalueSpecificationValueIdQueryKey>
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
      ...getApiCatalogPvtSpecificationvalueSpecificationValueIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtSpecificationvalueSpecificationValueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSpecificationvalueSpecificationValueIdQueryKey>
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
      ...getApiCatalogPvtSpecificationvalueSpecificationValueIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogPvtSpecificationvalueSpecificationValueIdMutationKey() {
  return ['api', '/api/catalog/pvt/specificationvalue/:specificationValueId', 'PUT'] as const
}

export function getPutApiCatalogPvtSpecificationvalueSpecificationValueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtSpecificationvalueSpecificationValueIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.specificationvalue[':specificationValueId'].$put(args, options),
      )
    },
  })
}

export function usePutApiCatalogPvtSpecificationvalueSpecificationValueId<
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
                  (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$put']
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
  const mutationDefaults = getPutApiCatalogPvtSpecificationvalueSpecificationValueIdMutationOptions<
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

export function getApiCatalogPvtStockkeepingunitQueryKey(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunit.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunit', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunit.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunit.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunit.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitQueryKey>
  >({
    queryKey: getApiCatalogPvtStockkeepingunitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtStockkeepingunit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunit.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunit.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunit.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtStockkeepingunit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunit.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunit.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunit.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiCatalogPvtStockkeepingunitMutationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit', 'POST'] as const
}

export function getPostApiCatalogPvtStockkeepingunitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunit.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.stockkeepingunit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtStockkeepingunitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunit.$post>) {
      return parseResponse(client.api.catalog.pvt.stockkeepingunit.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtStockkeepingunit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunit.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.stockkeepingunit.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtStockkeepingunitMutationOptions<
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

export function getPutApiCatalogPvtStockkeepingunitCopySkuIdfromSkuIdtoFileIndexMutationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/copy/:skuIdfrom/:skuIdto/file/', 'PUT'] as const
}

export function getPutApiCatalogPvtStockkeepingunitCopySkuIdfromSkuIdtoFileIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.stockkeepingunit.copy)[':skuIdfrom'][':skuIdto']['file']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit.copy)[':skuIdfrom'][':skuIdto']['file']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtStockkeepingunitCopySkuIdfromSkuIdtoFileIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.stockkeepingunit.copy)[':skuIdfrom'][':skuIdto']['file']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit.copy[':skuIdfrom'][':skuIdto'].file.index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApiCatalogPvtStockkeepingunitCopySkuIdfromSkuIdtoFileIndex<
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
                  (typeof client.api.catalog.pvt.stockkeepingunit.copy)[':skuIdfrom'][':skuIdto']['file']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.stockkeepingunit.copy)[':skuIdfrom'][':skuIdto']['file']['index']['$put']
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
    getPutApiCatalogPvtStockkeepingunitCopySkuIdfromSkuIdtoFileIndexMutationOptions<
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

export function getDeleteApiCatalogPvtStockkeepingunitDisassociateSkuIdFileSkuFileIdMutationKey() {
  return [
    'api',
    '/api/catalog/pvt/stockkeepingunit/disassociate/:skuId/file/:skuFileId',
    'DELETE',
  ] as const
}

export function getDeleteApiCatalogPvtStockkeepingunitDisassociateSkuIdFileSkuFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.stockkeepingunit.disassociate)[':skuId']['file'][':skuFileId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit.disassociate)[':skuId']['file'][':skuFileId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtStockkeepingunitDisassociateSkuIdFileSkuFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.stockkeepingunit.disassociate)[':skuId']['file'][':skuFileId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit.disassociate[':skuId'].file[':skuFileId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiCatalogPvtStockkeepingunitDisassociateSkuIdFileSkuFileId<
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
                  (typeof client.api.catalog.pvt.stockkeepingunit.disassociate)[':skuId']['file'][':skuFileId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.stockkeepingunit.disassociate)[':skuId']['file'][':skuFileId']['$delete']
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
    getDeleteApiCatalogPvtStockkeepingunitDisassociateSkuIdFileSkuFileIdMutationOptions<
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

export function getApiCatalogPvtStockkeepingunitSkuIdQueryKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitSkuIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdQueryKey>
  >({
    queryKey: getApiCatalogPvtStockkeepingunitSkuIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtStockkeepingunitSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitSkuIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtStockkeepingunitSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitSkuIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogPvtStockkeepingunitSkuIdMutationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId', 'PUT'] as const
}

export function getPutApiCatalogPvtStockkeepingunitSkuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtStockkeepingunitSkuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$put']>,
    ) {
      return parseResponse(client.api.catalog.pvt.stockkeepingunit[':skuId'].$put(args, options))
    },
  })
}

export function usePutApiCatalogPvtStockkeepingunitSkuId<
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
                ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogPvtStockkeepingunitSkuIdMutationOptions<
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

export function getApiCatalogPvtStockkeepingunitSkuIdAttachmentQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/attachment', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitSkuIdAttachmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdAttachmentQueryKey>
  >({
    queryKey: getApiCatalogPvtStockkeepingunitSkuIdAttachmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].attachment.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtStockkeepingunitSkuIdAttachment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdAttachmentQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitSkuIdAttachmentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtStockkeepingunitSkuIdAttachment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdAttachmentQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitSkuIdAttachmentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogPvtStockkeepingunitSkuIdComplementQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/complement', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitSkuIdComplementQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdComplementQueryKey>
  >({
    queryKey: getApiCatalogPvtStockkeepingunitSkuIdComplementQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].complement.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtStockkeepingunitSkuIdComplement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdComplementQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitSkuIdComplementQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtStockkeepingunitSkuIdComplement<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdComplementQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitSkuIdComplementQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/catalog/pvt/stockkeepingunit/:skuId/complement/:complementTypeId',
    keyArgs,
  ] as const
}

export function getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdQueryKey>
  >({
    queryKey: getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].complement[':complementTypeId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogPvtStockkeepingunitSkuIdEanQueryKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/ean', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitSkuIdEanQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdEanQueryKey>
  >({
    queryKey: getApiCatalogPvtStockkeepingunitSkuIdEanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].ean.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtStockkeepingunitSkuIdEan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdEanQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitSkuIdEanQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtStockkeepingunitSkuIdEan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdEanQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitSkuIdEanQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdEanMutationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/ean', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdEanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtStockkeepingunitSkuIdEanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].ean.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCatalogPvtStockkeepingunitSkuIdEan<
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
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$delete']
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
  const mutationDefaults = getDeleteApiCatalogPvtStockkeepingunitSkuIdEanMutationOptions<
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

export function getPostApiCatalogPvtStockkeepingunitSkuIdEanEanMutationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/ean/:ean', 'POST'] as const
}

export function getPostApiCatalogPvtStockkeepingunitSkuIdEanEanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean'][':ean']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean'][':ean']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtStockkeepingunitSkuIdEanEanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean'][':ean']['$post']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].ean[':ean'].$post(args, options),
      )
    },
  })
}

export function usePostApiCatalogPvtStockkeepingunitSkuIdEanEan<
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
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean'][':ean']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean'][':ean']['$post']
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
  const mutationDefaults = getPostApiCatalogPvtStockkeepingunitSkuIdEanEanMutationOptions<
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

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdEanEanMutationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/ean/:ean', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdEanEanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean'][':ean']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean'][':ean']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtStockkeepingunitSkuIdEanEanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean'][':ean']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].ean[':ean'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCatalogPvtStockkeepingunitSkuIdEanEan<
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
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean'][':ean']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean'][':ean']['$delete']
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
  const mutationDefaults = getDeleteApiCatalogPvtStockkeepingunitSkuIdEanEanMutationOptions<
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

export function getApiCatalogPvtStockkeepingunitSkuIdFileQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/file', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitSkuIdFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdFileQueryKey>
  >({
    queryKey: getApiCatalogPvtStockkeepingunitSkuIdFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].file.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtStockkeepingunitSkuIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdFileQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitSkuIdFileQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtStockkeepingunitSkuIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdFileQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitSkuIdFileQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiCatalogPvtStockkeepingunitSkuIdFileMutationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/file', 'POST'] as const
}

export function getPostApiCatalogPvtStockkeepingunitSkuIdFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtStockkeepingunitSkuIdFileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$post']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].file.$post(args, options),
      )
    },
  })
}

export function usePostApiCatalogPvtStockkeepingunitSkuIdFile<
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
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$post']
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
  const mutationDefaults = getPostApiCatalogPvtStockkeepingunitSkuIdFileMutationOptions<
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

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdFileMutationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/file', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtStockkeepingunitSkuIdFileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].file.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCatalogPvtStockkeepingunitSkuIdFile<
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
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$delete']
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
  const mutationDefaults = getDeleteApiCatalogPvtStockkeepingunitSkuIdFileMutationOptions<
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

export function getPutApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdMutationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/file/:skuFileId', 'PUT'] as const
}

export function getPutApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file'][':skuFileId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file'][':skuFileId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file'][':skuFileId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].file[':skuFileId'].$put(args, options),
      )
    },
  })
}

export function usePutApiCatalogPvtStockkeepingunitSkuIdFileSkuFileId<
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
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file'][':skuFileId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file'][':skuFileId']['$put']
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
  const mutationDefaults = getPutApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdMutationOptions<
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

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdMutationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/file/:skuFileId', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file'][':skuFileId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file'][':skuFileId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file'][':skuFileId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].file[':skuFileId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCatalogPvtStockkeepingunitSkuIdFileSkuFileId<
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
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file'][':skuFileId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file'][':skuFileId']['$delete']
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
  const mutationDefaults = getDeleteApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdMutationOptions<
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

export function getApiCatalogPvtStockkeepingunitSkuIdSpecificationQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/specification', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitSkuIdSpecificationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdSpecificationQueryKey>
  >({
    queryKey: getApiCatalogPvtStockkeepingunitSkuIdSpecificationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].specification.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtStockkeepingunitSkuIdSpecification<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdSpecificationQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitSkuIdSpecificationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtStockkeepingunitSkuIdSpecification<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdSpecificationQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitSkuIdSpecificationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogPvtStockkeepingunitSkuIdSpecificationMutationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/specification', 'PUT'] as const
}

export function getPutApiCatalogPvtStockkeepingunitSkuIdSpecificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtStockkeepingunitSkuIdSpecificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$put']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].specification.$put(args, options),
      )
    },
  })
}

export function usePutApiCatalogPvtStockkeepingunitSkuIdSpecification<
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
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$put']
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
  const mutationDefaults = getPutApiCatalogPvtStockkeepingunitSkuIdSpecificationMutationOptions<
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

export function getPostApiCatalogPvtStockkeepingunitSkuIdSpecificationMutationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/specification', 'POST'] as const
}

export function getPostApiCatalogPvtStockkeepingunitSkuIdSpecificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtStockkeepingunitSkuIdSpecificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$post']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].specification.$post(args, options),
      )
    },
  })
}

export function usePostApiCatalogPvtStockkeepingunitSkuIdSpecification<
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
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$post']
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
  const mutationDefaults = getPostApiCatalogPvtStockkeepingunitSkuIdSpecificationMutationOptions<
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

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdSpecificationMutationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/specification', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdSpecificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtStockkeepingunitSkuIdSpecificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].specification.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCatalogPvtStockkeepingunitSkuIdSpecification<
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
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$delete']
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
  const mutationDefaults = getDeleteApiCatalogPvtStockkeepingunitSkuIdSpecificationMutationOptions<
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

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdSpecificationSpecificationIdMutationKey() {
  return [
    'api',
    '/api/catalog/pvt/stockkeepingunit/:skuId/specification/:specificationId',
    'DELETE',
  ] as const
}

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdSpecificationSpecificationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification'][':specificationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification'][':specificationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiCatalogPvtStockkeepingunitSkuIdSpecificationSpecificationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification'][':specificationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].specification[':specificationId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiCatalogPvtStockkeepingunitSkuIdSpecificationSpecificationId<
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
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification'][':specificationId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification'][':specificationId']['$delete']
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
    getDeleteApiCatalogPvtStockkeepingunitSkuIdSpecificationSpecificationIdMutationOptions<
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

export function getPutApiCatalogPvtStockkeepingunitSkuIdSpecificationvalueMutationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/specificationvalue', 'PUT'] as const
}

export function getPutApiCatalogPvtStockkeepingunitSkuIdSpecificationvalueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specificationvalue']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specificationvalue']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtStockkeepingunitSkuIdSpecificationvalueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specificationvalue']['$put']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].specificationvalue.$put(args, options),
      )
    },
  })
}

export function usePutApiCatalogPvtStockkeepingunitSkuIdSpecificationvalue<
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
                  (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specificationvalue']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specificationvalue']['$put']
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
    getPutApiCatalogPvtStockkeepingunitSkuIdSpecificationvalueMutationOptions<
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

export function getApiCatalogPvtStockkeepingunitkitQueryKey(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunitkit', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitkitQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitkitQueryKey>
  >({
    queryKey: getApiCatalogPvtStockkeepingunitkitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunitkit.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtStockkeepingunitkit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitkitQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitkitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtStockkeepingunitkit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitkitQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitkitQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiCatalogPvtStockkeepingunitkitMutationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunitkit', 'POST'] as const
}

export function getPostApiCatalogPvtStockkeepingunitkitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtStockkeepingunitkitMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$post>,
    ) {
      return parseResponse(client.api.catalog.pvt.stockkeepingunitkit.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtStockkeepingunitkit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtStockkeepingunitkitMutationOptions<
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

export function getDeleteApiCatalogPvtStockkeepingunitkitMutationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunitkit', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtStockkeepingunitkitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$delete>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtStockkeepingunitkitMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$delete>,
    ) {
      return parseResponse(client.api.catalog.pvt.stockkeepingunitkit.$delete(args, options))
    },
  })
}

export function useDeleteApiCatalogPvtStockkeepingunitkit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiCatalogPvtStockkeepingunitkitMutationOptions<
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

export function getApiCatalogPvtStockkeepingunitkitKitIdQueryKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunitkit/:kitId', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitkitKitIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitkitKitIdQueryKey>
  >({
    queryKey: getApiCatalogPvtStockkeepingunitkitKitIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunitkit[':kitId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtStockkeepingunitkitKitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitkitKitIdQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitkitKitIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtStockkeepingunitkitKitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtStockkeepingunitkitKitIdQueryKey>
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
      ...getApiCatalogPvtStockkeepingunitkitKitIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiCatalogPvtStockkeepingunitkitKitIdMutationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunitkit/:kitId', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtStockkeepingunitkitKitIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtStockkeepingunitkitKitIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunitkit[':kitId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCatalogPvtStockkeepingunitkitKitId<
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
                ReturnType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiCatalogPvtStockkeepingunitkitKitIdMutationOptions<
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

export function getPostApiCatalogPvtSubcollectionMutationKey() {
  return ['api', '/api/catalog/pvt/subcollection', 'POST'] as const
}

export function getPostApiCatalogPvtSubcollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.subcollection.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.subcollection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtSubcollectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog.pvt.subcollection.$post>) {
      return parseResponse(client.api.catalog.pvt.subcollection.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtSubcollection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog.pvt.subcollection.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.subcollection.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtSubcollectionMutationOptions<
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

export function getApiCatalogPvtSubcollectionSubCollectionIdQueryKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/subcollection/:subCollectionId', keyArgs] as const
}

export function getApiCatalogPvtSubcollectionSubCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSubcollectionSubCollectionIdQueryKey>
  >({
    queryKey: getApiCatalogPvtSubcollectionSubCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog.pvt.subcollection[':subCollectionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogPvtSubcollectionSubCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSubcollectionSubCollectionIdQueryKey>
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
      ...getApiCatalogPvtSubcollectionSubCollectionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogPvtSubcollectionSubCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogPvtSubcollectionSubCollectionIdQueryKey>
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
      ...getApiCatalogPvtSubcollectionSubCollectionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogPvtSubcollectionSubCollectionIdMutationKey() {
  return ['api', '/api/catalog/pvt/subcollection/:subCollectionId', 'PUT'] as const
}

export function getPutApiCatalogPvtSubcollectionSubCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtSubcollectionSubCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.subcollection[':subCollectionId'].$put(args, options),
      )
    },
  })
}

export function usePutApiCatalogPvtSubcollectionSubCollectionId<
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
                  (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogPvtSubcollectionSubCollectionIdMutationOptions<
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

export function getDeleteApiCatalogPvtSubcollectionSubCollectionIdMutationKey() {
  return ['api', '/api/catalog/pvt/subcollection/:subCollectionId', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtSubcollectionSubCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtSubcollectionSubCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.subcollection[':subCollectionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiCatalogPvtSubcollectionSubCollectionId<
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
                  (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$delete']
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
  const mutationDefaults = getDeleteApiCatalogPvtSubcollectionSubCollectionIdMutationOptions<
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

export function getPostApiCatalogPvtSubcollectionSubCollectionIdBrandMutationKey() {
  return ['api', '/api/catalog/pvt/subcollection/:subCollectionId/brand', 'POST'] as const
}

export function getPostApiCatalogPvtSubcollectionSubCollectionIdBrandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtSubcollectionSubCollectionIdBrandMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand']['$post']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.subcollection[':subCollectionId'].brand.$post(args, options),
      )
    },
  })
}

export function usePostApiCatalogPvtSubcollectionSubCollectionIdBrand<
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
                  (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand']['$post']
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
  const mutationDefaults = getPostApiCatalogPvtSubcollectionSubCollectionIdBrandMutationOptions<
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

export function getDeleteApiCatalogPvtSubcollectionSubCollectionIdBrandBrandIdMutationKey() {
  return [
    'api',
    '/api/catalog/pvt/subcollection/:subCollectionId/brand/:brandId',
    'DELETE',
  ] as const
}

export function getDeleteApiCatalogPvtSubcollectionSubCollectionIdBrandBrandIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand'][':brandId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand'][':brandId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtSubcollectionSubCollectionIdBrandBrandIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand'][':brandId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.subcollection[':subCollectionId'].brand[':brandId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiCatalogPvtSubcollectionSubCollectionIdBrandBrandId<
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
                  (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand'][':brandId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand'][':brandId']['$delete']
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
    getDeleteApiCatalogPvtSubcollectionSubCollectionIdBrandBrandIdMutationOptions<
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

export function getDeleteApiCatalogPvtSubcollectionSubCollectionIdBrandCategoryIdMutationKey() {
  return [
    'api',
    '/api/catalog/pvt/subcollection/:subCollectionId/brand/:categoryId',
    'DELETE',
  ] as const
}

export function getDeleteApiCatalogPvtSubcollectionSubCollectionIdBrandCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand'][':categoryId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand'][':categoryId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtSubcollectionSubCollectionIdBrandCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand'][':categoryId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.subcollection[':subCollectionId'].brand[':categoryId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiCatalogPvtSubcollectionSubCollectionIdBrandCategoryId<
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
                  (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand'][':categoryId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand'][':categoryId']['$delete']
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
    getDeleteApiCatalogPvtSubcollectionSubCollectionIdBrandCategoryIdMutationOptions<
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

export function getPostApiCatalogPvtSubcollectionSubCollectionIdCategoryMutationKey() {
  return ['api', '/api/catalog/pvt/subcollection/:subCollectionId/category', 'POST'] as const
}

export function getPostApiCatalogPvtSubcollectionSubCollectionIdCategoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['category']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['category']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtSubcollectionSubCollectionIdCategoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['category']['$post']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.subcollection[':subCollectionId'].category.$post(args, options),
      )
    },
  })
}

export function usePostApiCatalogPvtSubcollectionSubCollectionIdCategory<
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
                  (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['category']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['category']['$post']
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
  const mutationDefaults = getPostApiCatalogPvtSubcollectionSubCollectionIdCategoryMutationOptions<
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

export function getPostApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitMutationKey() {
  return [
    'api',
    '/api/catalog/pvt/subcollection/:subCollectionId/stockkeepingunit',
    'POST',
  ] as const
}

export function getPostApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['stockkeepingunit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['stockkeepingunit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['stockkeepingunit']['$post']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.subcollection[':subCollectionId'].stockkeepingunit.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunit<
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
                  (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['stockkeepingunit']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['stockkeepingunit']['$post']
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
    getPostApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitMutationOptions<
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

export function getDeleteApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitSkuIdMutationKey() {
  return [
    'api',
    '/api/catalog/pvt/subcollection/:subCollectionId/stockkeepingunit/:skuId',
    'DELETE',
  ] as const
}

export function getDeleteApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitSkuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['stockkeepingunit'][':skuId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['stockkeepingunit'][':skuId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitSkuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['stockkeepingunit'][':skuId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.catalog.pvt.subcollection[':subCollectionId'].stockkeepingunit[':skuId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitSkuId<
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
                  (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['stockkeepingunit'][':skuId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['stockkeepingunit'][':skuId']['$delete']
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
    getDeleteApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitSkuIdMutationOptions<
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

export function getPostApiCatalogPvtSupplierMutationKey() {
  return ['api', '/api/catalog/pvt/supplier', 'POST'] as const
}

export function getPostApiCatalogPvtSupplierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.supplier.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog.pvt.supplier.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogPvtSupplierMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog.pvt.supplier.$post>) {
      return parseResponse(client.api.catalog.pvt.supplier.$post(args, options))
    },
  })
}

export function usePostApiCatalogPvtSupplier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.supplier.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog.pvt.supplier.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogPvtSupplierMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiCatalogPvtSupplierSupplierIdMutationKey() {
  return ['api', '/api/catalog/pvt/supplier/:supplierId', 'PUT'] as const
}

export function getPutApiCatalogPvtSupplierSupplierIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogPvtSupplierSupplierIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$put']>,
    ) {
      return parseResponse(client.api.catalog.pvt.supplier[':supplierId'].$put(args, options))
    },
  })
}

export function usePutApiCatalogPvtSupplierSupplierId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogPvtSupplierSupplierIdMutationOptions<
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

export function getDeleteApiCatalogPvtSupplierSupplierIdMutationKey() {
  return ['api', '/api/catalog/pvt/supplier/:supplierId', 'DELETE'] as const
}

export function getDeleteApiCatalogPvtSupplierSupplierIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCatalogPvtSupplierSupplierIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$delete']>,
    ) {
      return parseResponse(client.api.catalog.pvt.supplier[':supplierId'].$delete(args, options))
    },
  })
}

export function useDeleteApiCatalogPvtSupplierSupplierId<
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
                ReturnType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiCatalogPvtSupplierSupplierIdMutationOptions<
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

export function getApiCatalogSystemPubCategoryTreeCategoryLevelsQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/category/tree/:categoryLevels', keyArgs] as const
}

export function getApiCatalogSystemPubCategoryTreeCategoryLevelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubCategoryTreeCategoryLevelsQueryKey>
  >({
    queryKey: getApiCatalogSystemPubCategoryTreeCategoryLevelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.category.tree[':categoryLevels'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubCategoryTreeCategoryLevels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubCategoryTreeCategoryLevelsQueryKey>
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
      ...getApiCatalogSystemPubCategoryTreeCategoryLevelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubCategoryTreeCategoryLevels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubCategoryTreeCategoryLevelsQueryKey>
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
      ...getApiCatalogSystemPubCategoryTreeCategoryLevelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsVariationsProductIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/products/variations/:productId', keyArgs] as const
}

export function getApiCatalogSystemPubProductsVariationsProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubProductsVariationsProductIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPubProductsVariationsProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.products.variations[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubProductsVariationsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsVariationsProductIdQueryKey>
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
      ...getApiCatalogSystemPubProductsVariationsProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubProductsVariationsProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubProductsVariationsProductIdQueryKey>
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
      ...getApiCatalogSystemPubProductsVariationsProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubSaleschannelSalesChannelIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/saleschannel/:salesChannelId', keyArgs] as const
}

export function getApiCatalogSystemPubSaleschannelSalesChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubSaleschannelSalesChannelIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPubSaleschannelSalesChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.saleschannel[':salesChannelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubSaleschannelSalesChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubSaleschannelSalesChannelIdQueryKey>
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
      ...getApiCatalogSystemPubSaleschannelSalesChannelIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubSaleschannelSalesChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubSaleschannelSalesChannelIdQueryKey>
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
      ...getApiCatalogSystemPubSaleschannelSalesChannelIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiCatalogSystemPubSkuStockkeepingunitidsbyrefidsMutationKey() {
  return ['api', '/api/catalog_system/pub/sku/stockkeepingunitidsbyrefids', 'POST'] as const
}

export function getPostApiCatalogSystemPubSkuStockkeepingunitidsbyrefidsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.api.catalog_system.pub.sku.stockkeepingunitidsbyrefids.$post>
          >
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog_system.pub.sku.stockkeepingunitidsbyrefids.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogSystemPubSkuStockkeepingunitidsbyrefidsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.api.catalog_system.pub.sku.stockkeepingunitidsbyrefids.$post
      >,
    ) {
      return parseResponse(
        client.api.catalog_system.pub.sku.stockkeepingunitidsbyrefids.$post(args, options),
      )
    },
  })
}

export function usePostApiCatalogSystemPubSkuStockkeepingunitidsbyrefids<
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
                  typeof client.api.catalog_system.pub.sku.stockkeepingunitidsbyrefids.$post
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          typeof client.api.catalog_system.pub.sku.stockkeepingunitidsbyrefids.$post
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
  const mutationDefaults = getPostApiCatalogSystemPubSkuStockkeepingunitidsbyrefidsMutationOptions<
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

export function getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/catalog_system/pub/specification/field/listByCategoryId/:categoryId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.specification.field.listByCategoryId[':categoryId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdQueryKey
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
      ...getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdQueryKey
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
      ...getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/catalog_system/pub/specification/field/listTreeByCategoryId/:categoryId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdQueryKey
    >
  >({
    queryKey: getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.specification.field.listTreeByCategoryId[':categoryId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdQueryKey
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
      ...getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdQueryKey
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
      ...getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubSpecificationFieldGetFieldIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/specification/fieldGet/:fieldId', keyArgs] as const
}

export function getApiCatalogSystemPubSpecificationFieldGetFieldIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubSpecificationFieldGetFieldIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPubSpecificationFieldGetFieldIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.specification.fieldGet[':fieldId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubSpecificationFieldGetFieldId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubSpecificationFieldGetFieldIdQueryKey>
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
      ...getApiCatalogSystemPubSpecificationFieldGetFieldIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubSpecificationFieldGetFieldId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubSpecificationFieldGetFieldIdQueryKey>
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
      ...getApiCatalogSystemPubSpecificationFieldGetFieldIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubSpecificationFieldvalueFieldIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/specification/fieldvalue/:fieldId', keyArgs] as const
}

export function getApiCatalogSystemPubSpecificationFieldvalueFieldIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubSpecificationFieldvalueFieldIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPubSpecificationFieldvalueFieldIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.specification.fieldvalue[':fieldId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubSpecificationFieldvalueFieldId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubSpecificationFieldvalueFieldIdQueryKey>
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
      ...getApiCatalogSystemPubSpecificationFieldvalueFieldIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubSpecificationFieldvalueFieldId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubSpecificationFieldvalueFieldIdQueryKey>
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
      ...getApiCatalogSystemPubSpecificationFieldvalueFieldIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubSpecificationGroupGetGroupIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/specification/groupGet/:groupId', keyArgs] as const
}

export function getApiCatalogSystemPubSpecificationGroupGetGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubSpecificationGroupGetGroupIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPubSpecificationGroupGetGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pub.specification.groupGet[':groupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPubSpecificationGroupGetGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubSpecificationGroupGetGroupIdQueryKey>
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
      ...getApiCatalogSystemPubSpecificationGroupGetGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPubSpecificationGroupGetGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPubSpecificationGroupGetGroupIdQueryKey>
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
      ...getApiCatalogSystemPubSpecificationGroupGetGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtBrandListQueryKey(
  args: InferRequestType<typeof client.api.catalog_system.pvt.brand.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/brand/list', keyArgs] as const
}

export function getApiCatalogSystemPvtBrandListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.brand.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtBrandListQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtBrandListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.brand.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtBrandList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.brand.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtBrandListQueryKey>
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
      ...getApiCatalogSystemPvtBrandListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtBrandList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.brand.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtBrandListQueryKey>
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
      ...getApiCatalogSystemPvtBrandListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtBrandPagedlistQueryKey(
  args: InferRequestType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/brand/pagedlist', keyArgs] as const
}

export function getApiCatalogSystemPvtBrandPagedlistQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtBrandPagedlistQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtBrandPagedlistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.brand.pagedlist.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtBrandPagedlist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtBrandPagedlistQueryKey>
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
      ...getApiCatalogSystemPvtBrandPagedlistQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtBrandPagedlist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtBrandPagedlistQueryKey>
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
      ...getApiCatalogSystemPvtBrandPagedlistQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtBrandBrandIdQueryKey(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/brand/:brandId', keyArgs] as const
}

export function getApiCatalogSystemPvtBrandBrandIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtBrandBrandIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtBrandBrandIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.brand[':brandId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtBrandBrandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtBrandBrandIdQueryKey>
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
      ...getApiCatalogSystemPvtBrandBrandIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtBrandBrandId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtBrandBrandIdQueryKey>
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
      ...getApiCatalogSystemPvtBrandBrandIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtCollectionSearchQueryKey(
  args: InferRequestType<typeof client.api.catalog_system.pvt.collection.search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/collection/search', keyArgs] as const
}

export function getApiCatalogSystemPvtCollectionSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.collection.search.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.collection.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.collection.search.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtCollectionSearchQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtCollectionSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.collection.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtCollectionSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.collection.search.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.collection.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pvt.collection.search.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtCollectionSearchQueryKey>
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
      ...getApiCatalogSystemPvtCollectionSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtCollectionSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.collection.search.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.collection.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pvt.collection.search.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtCollectionSearchQueryKey>
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
      ...getApiCatalogSystemPvtCollectionSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtCollectionSearchSearchTermsQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/collection/search/:searchTerms', keyArgs] as const
}

export function getApiCatalogSystemPvtCollectionSearchSearchTermsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtCollectionSearchSearchTermsQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtCollectionSearchSearchTermsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.collection.search[':searchTerms'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtCollectionSearchSearchTerms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtCollectionSearchSearchTermsQueryKey>
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
      ...getApiCatalogSystemPvtCollectionSearchSearchTermsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtCollectionSearchSearchTerms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtCollectionSearchSearchTermsQueryKey>
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
      ...getApiCatalogSystemPvtCollectionSearchSearchTermsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtCommercialconditionListQueryKey(
  args: InferRequestType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/commercialcondition/list', keyArgs] as const
}

export function getApiCatalogSystemPvtCommercialconditionListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtCommercialconditionListQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtCommercialconditionListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.commercialcondition.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtCommercialconditionList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtCommercialconditionListQueryKey>
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
      ...getApiCatalogSystemPvtCommercialconditionListQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtCommercialconditionList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtCommercialconditionListQueryKey>
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
      ...getApiCatalogSystemPvtCommercialconditionListQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtCommercialconditionCommercialConditionIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/catalog_system/pvt/commercialcondition/:commercialConditionId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPvtCommercialconditionCommercialConditionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtCommercialconditionCommercialConditionIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtCommercialconditionCommercialConditionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.commercialcondition[':commercialConditionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtCommercialconditionCommercialConditionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtCommercialconditionCommercialConditionIdQueryKey>
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
      ...getApiCatalogSystemPvtCommercialconditionCommercialConditionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtCommercialconditionCommercialConditionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtCommercialconditionCommercialConditionIdQueryKey>
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
      ...getApiCatalogSystemPvtCommercialconditionCommercialConditionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtProductsGetIndexedInfoProductIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/products/GetIndexedInfo/:productId', keyArgs] as const
}

export function getApiCatalogSystemPvtProductsGetIndexedInfoProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtProductsGetIndexedInfoProductIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtProductsGetIndexedInfoProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.products.GetIndexedInfo[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtProductsGetIndexedInfoProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtProductsGetIndexedInfoProductIdQueryKey>
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
      ...getApiCatalogSystemPvtProductsGetIndexedInfoProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtProductsGetIndexedInfoProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtProductsGetIndexedInfoProductIdQueryKey>
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
      ...getApiCatalogSystemPvtProductsGetIndexedInfoProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtProductsGetProductAndSkuIdsQueryKey(
  args: InferRequestType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/products/GetProductAndSkuIds', keyArgs] as const
}

export function getApiCatalogSystemPvtProductsGetProductAndSkuIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtProductsGetProductAndSkuIdsQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtProductsGetProductAndSkuIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtProductsGetProductAndSkuIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtProductsGetProductAndSkuIdsQueryKey>
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
      ...getApiCatalogSystemPvtProductsGetProductAndSkuIdsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtProductsGetProductAndSkuIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtProductsGetProductAndSkuIdsQueryKey>
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
      ...getApiCatalogSystemPvtProductsGetProductAndSkuIdsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtProductsProductgetProductIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/products/productget/:productId', keyArgs] as const
}

export function getApiCatalogSystemPvtProductsProductgetProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtProductsProductgetProductIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtProductsProductgetProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.products.productget[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtProductsProductgetProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtProductsProductgetProductIdQueryKey>
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
      ...getApiCatalogSystemPvtProductsProductgetProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtProductsProductgetProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtProductsProductgetProductIdQueryKey>
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
      ...getApiCatalogSystemPvtProductsProductgetProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtProductsProductgetbyrefidRefIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/products/productgetbyrefid/:refId', keyArgs] as const
}

export function getApiCatalogSystemPvtProductsProductgetbyrefidRefIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtProductsProductgetbyrefidRefIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtProductsProductgetbyrefidRefIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.products.productgetbyrefid[':refId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtProductsProductgetbyrefidRefId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtProductsProductgetbyrefidRefIdQueryKey>
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
      ...getApiCatalogSystemPvtProductsProductgetbyrefidRefIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtProductsProductgetbyrefidRefId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtProductsProductgetbyrefidRefIdQueryKey>
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
      ...getApiCatalogSystemPvtProductsProductgetbyrefidRefIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtProductsProductIdSpecificationQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/products/:productId/specification', keyArgs] as const
}

export function getApiCatalogSystemPvtProductsProductIdSpecificationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtProductsProductIdSpecificationQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtProductsProductIdSpecificationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.products[':productId'].specification.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtProductsProductIdSpecification<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtProductsProductIdSpecificationQueryKey>
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
      ...getApiCatalogSystemPvtProductsProductIdSpecificationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtProductsProductIdSpecification<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtProductsProductIdSpecificationQueryKey>
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
      ...getApiCatalogSystemPvtProductsProductIdSpecificationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiCatalogSystemPvtProductsProductIdSpecificationMutationKey() {
  return ['api', '/api/catalog_system/pvt/products/:productId/specification', 'POST'] as const
}

export function getPostApiCatalogSystemPvtProductsProductIdSpecificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogSystemPvtProductsProductIdSpecificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$post']
      >,
    ) {
      return parseResponse(
        client.api.catalog_system.pvt.products[':productId'].specification.$post(args, options),
      )
    },
  })
}

export function usePostApiCatalogSystemPvtProductsProductIdSpecification<
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
                  (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$post']
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
  const mutationDefaults = getPostApiCatalogSystemPvtProductsProductIdSpecificationMutationOptions<
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

export function getApiCatalogSystemPvtSaleschannelListQueryKey(
  args: InferRequestType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/saleschannel/list', keyArgs] as const
}

export function getApiCatalogSystemPvtSaleschannelListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSaleschannelListQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtSaleschannelListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.saleschannel.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtSaleschannelList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSaleschannelListQueryKey>
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
      ...getApiCatalogSystemPvtSaleschannelListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtSaleschannelList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSaleschannelListQueryKey>
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
      ...getApiCatalogSystemPvtSaleschannelListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogSystemPvtSellerMutationKey() {
  return ['api', '/api/catalog_system/pvt/seller', 'PUT'] as const
}

export function getPutApiCatalogSystemPvtSellerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog_system.pvt.seller.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogSystemPvtSellerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog_system.pvt.seller.$put>) {
      return parseResponse(client.api.catalog_system.pvt.seller.$put(args, options))
    },
  })
}

export function usePutApiCatalogSystemPvtSeller<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog_system.pvt.seller.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogSystemPvtSellerMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiCatalogSystemPvtSellerMutationKey() {
  return ['api', '/api/catalog_system/pvt/seller', 'POST'] as const
}

export function getPostApiCatalogSystemPvtSellerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog_system.pvt.seller.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogSystemPvtSellerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.catalog_system.pvt.seller.$post>) {
      return parseResponse(client.api.catalog_system.pvt.seller.$post(args, options))
    },
  })
}

export function usePostApiCatalogSystemPvtSeller<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog_system.pvt.seller.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogSystemPvtSellerMutationOptions<TError, TOnMutateResult>(
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

export function getApiCatalogSystemPvtSellerListQueryKey(
  args: InferRequestType<typeof client.api.catalog_system.pvt.seller.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/seller/list', keyArgs] as const
}

export function getApiCatalogSystemPvtSellerListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.seller.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSellerListQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtSellerListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.seller.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtSellerList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.seller.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSellerListQueryKey>
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
      ...getApiCatalogSystemPvtSellerListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtSellerList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.list.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.seller.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.list.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSellerListQueryKey>
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
      ...getApiCatalogSystemPvtSellerListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSellerSellerIdQueryKey(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/seller/:sellerId', keyArgs] as const
}

export function getApiCatalogSystemPvtSellerSellerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSellerSellerIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtSellerSellerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.seller[':sellerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtSellerSellerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSellerSellerIdQueryKey>
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
      ...getApiCatalogSystemPvtSellerSellerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtSellerSellerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSellerSellerIdQueryKey>
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
      ...getApiCatalogSystemPvtSellerSellerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSellersSellerIdQueryKey(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/sellers/:sellerId', keyArgs] as const
}

export function getApiCatalogSystemPvtSellersSellerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSellersSellerIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtSellersSellerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.sellers[':sellerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtSellersSellerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSellersSellerIdQueryKey>
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
      ...getApiCatalogSystemPvtSellersSellerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtSellersSellerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSellersSellerIdQueryKey>
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
      ...getApiCatalogSystemPvtSellersSellerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiCatalogSystemPvtSkuAssociateattachmentsMutationKey() {
  return ['api', '/api/catalog_system/pvt/sku/associateattachments', 'POST'] as const
}

export function getPostApiCatalogSystemPvtSkuAssociateattachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.sku.associateattachments.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog_system.pvt.sku.associateattachments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogSystemPvtSkuAssociateattachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.catalog_system.pvt.sku.associateattachments.$post>,
    ) {
      return parseResponse(
        client.api.catalog_system.pvt.sku.associateattachments.$post(args, options),
      )
    },
  })
}

export function usePostApiCatalogSystemPvtSkuAssociateattachments<
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
                ReturnType<typeof client.api.catalog_system.pvt.sku.associateattachments.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog_system.pvt.sku.associateattachments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogSystemPvtSkuAssociateattachmentsMutationOptions<
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

export function getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/sku/complements/:parentSkuId/:type', keyArgs] as const
}

export function getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.sku.complements[':parentSkuId'][':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtSkuComplementsParentSkuIdType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeQueryKey>
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
      ...getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtSkuComplementsParentSkuIdType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeQueryKey>
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
      ...getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/catalog_system/pvt/sku/stockkeepingunitByProductId/:productId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.sku.stockkeepingunitByProductId[':productId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdQueryKey>
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
      ...getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdQueryKey>
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
      ...getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/catalog_system/pvt/sku/stockkeepingunitbyalternateId/:alternateId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId[':alternateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdQueryKey>
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
      ...getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdQueryKey>
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
      ...getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/sku/stockkeepingunitbyean/:ean', keyArgs] as const
}

export function getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.sku.stockkeepingunitbyean[':ean'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtSkuStockkeepingunitbyeanEan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanQueryKey>
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
      ...getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtSkuStockkeepingunitbyeanEan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanQueryKey>
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
      ...getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/sku/stockkeepingunitbyid/:skuId', keyArgs] as const
}

export function getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.sku.stockkeepingunitbyid[':skuId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtSkuStockkeepingunitbyidSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdQueryKey>
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
      ...getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtSkuStockkeepingunitbyidSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdQueryKey>
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
      ...getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/:refId', keyArgs] as const
}

export function getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid[':refId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdQueryKey>
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
      ...getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdQueryKey>
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
      ...getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSkuStockkeepingunitidsQueryKey(
  args: InferRequestType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/sku/stockkeepingunitids', keyArgs] as const
}

export function getApiCatalogSystemPvtSkuStockkeepingunitidsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitidsQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtSkuStockkeepingunitidsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.sku.stockkeepingunitids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtSkuStockkeepingunitids<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitidsQueryKey>
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
      ...getApiCatalogSystemPvtSkuStockkeepingunitidsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtSkuStockkeepingunitids<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitidsQueryKey>
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
      ...getApiCatalogSystemPvtSkuStockkeepingunitidsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelQueryKey(
  args: InferRequestType<
    typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/sku/stockkeepingunitidsbysaleschannel', keyArgs] as const
}

export function getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelQueryKey>
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
      ...getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelQueryKey>
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
      ...getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiCatalogSystemPvtSkusellerChangenotificationSellerIdSellerSkuIdMutationKey() {
  return [
    'api',
    '/api/catalog_system/pvt/skuseller/changenotification/:sellerId/:sellerSkuId',
    'POST',
  ] as const
}

export function getPostApiCatalogSystemPvtSkusellerChangenotificationSellerIdSellerSkuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.catalog_system.pvt.skuseller.changenotification)[':sellerId'][':sellerSkuId']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.catalog_system.pvt.skuseller.changenotification)[':sellerId'][':sellerSkuId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiCatalogSystemPvtSkusellerChangenotificationSellerIdSellerSkuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog_system.pvt.skuseller.changenotification)[':sellerId'][':sellerSkuId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.catalog_system.pvt.skuseller.changenotification[':sellerId'][
          ':sellerSkuId'
        ].$post(args, options),
      )
    },
  })
}

export function usePostApiCatalogSystemPvtSkusellerChangenotificationSellerIdSellerSkuId<
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
                    (typeof client.api.catalog_system.pvt.skuseller.changenotification)[':sellerId'][':sellerSkuId']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.catalog_system.pvt.skuseller.changenotification)[':sellerId'][':sellerSkuId']['$post']
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
    getPostApiCatalogSystemPvtSkusellerChangenotificationSellerIdSellerSkuIdMutationOptions<
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

export function getPostApiCatalogSystemPvtSkusellerChangenotificationSkuIdMutationKey() {
  return ['api', '/api/catalog_system/pvt/skuseller/changenotification/:skuId', 'POST'] as const
}

export function getPostApiCatalogSystemPvtSkusellerChangenotificationSkuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.skuseller.changenotification)[':skuId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog_system.pvt.skuseller.changenotification)[':skuId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogSystemPvtSkusellerChangenotificationSkuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog_system.pvt.skuseller.changenotification)[':skuId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.catalog_system.pvt.skuseller.changenotification[':skuId'].$post(args, options),
      )
    },
  })
}

export function usePostApiCatalogSystemPvtSkusellerChangenotificationSkuId<
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
                  (typeof client.api.catalog_system.pvt.skuseller.changenotification)[':skuId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog_system.pvt.skuseller.changenotification)[':skuId']['$post']
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
    getPostApiCatalogSystemPvtSkusellerChangenotificationSkuIdMutationOptions<
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

export function getPostApiCatalogSystemPvtSkusellerRemoveSellerIdSellerSkuIdMutationKey() {
  return ['api', '/api/catalog_system/pvt/skuseller/remove/:sellerId/:sellerSkuId', 'POST'] as const
}

export function getPostApiCatalogSystemPvtSkusellerRemoveSellerIdSellerSkuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.skuseller.remove)[':sellerId'][':sellerSkuId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.catalog_system.pvt.skuseller.remove)[':sellerId'][':sellerSkuId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogSystemPvtSkusellerRemoveSellerIdSellerSkuIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.catalog_system.pvt.skuseller.remove)[':sellerId'][':sellerSkuId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.catalog_system.pvt.skuseller.remove[':sellerId'][':sellerSkuId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiCatalogSystemPvtSkusellerRemoveSellerIdSellerSkuId<
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
                  (typeof client.api.catalog_system.pvt.skuseller.remove)[':sellerId'][':sellerSkuId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.catalog_system.pvt.skuseller.remove)[':sellerId'][':sellerSkuId']['$post']
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
    getPostApiCatalogSystemPvtSkusellerRemoveSellerIdSellerSkuIdMutationOptions<
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

export function getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/skuseller/:sellerId/:sellerSkuId', keyArgs] as const
}

export function getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.skuseller[':sellerId'][':sellerSkuId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtSkusellerSellerIdSellerSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdQueryKey>
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
      ...getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtSkusellerSellerIdSellerSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdQueryKey>
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
      ...getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiCatalogSystemPvtSpecificationFieldMutationKey() {
  return ['api', '/api/catalog_system/pvt/specification/field', 'PUT'] as const
}

export function getPutApiCatalogSystemPvtSpecificationFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.specification.field.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog_system.pvt.specification.field.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogSystemPvtSpecificationFieldMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.catalog_system.pvt.specification.field.$put>,
    ) {
      return parseResponse(client.api.catalog_system.pvt.specification.field.$put(args, options))
    },
  })
}

export function usePutApiCatalogSystemPvtSpecificationField<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pvt.specification.field.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog_system.pvt.specification.field.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogSystemPvtSpecificationFieldMutationOptions<
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

export function getPostApiCatalogSystemPvtSpecificationFieldMutationKey() {
  return ['api', '/api/catalog_system/pvt/specification/field', 'POST'] as const
}

export function getPostApiCatalogSystemPvtSpecificationFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.specification.field.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog_system.pvt.specification.field.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogSystemPvtSpecificationFieldMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.catalog_system.pvt.specification.field.$post>,
    ) {
      return parseResponse(client.api.catalog_system.pvt.specification.field.$post(args, options))
    },
  })
}

export function usePostApiCatalogSystemPvtSpecificationField<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.catalog_system.pvt.specification.field.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog_system.pvt.specification.field.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogSystemPvtSpecificationFieldMutationOptions<
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

export function getPutApiCatalogSystemPvtSpecificationFieldValueMutationKey() {
  return ['api', '/api/catalog_system/pvt/specification/fieldValue', 'PUT'] as const
}

export function getPutApiCatalogSystemPvtSpecificationFieldValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.specification.fieldValue.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog_system.pvt.specification.fieldValue.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiCatalogSystemPvtSpecificationFieldValueMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.catalog_system.pvt.specification.fieldValue.$put>,
    ) {
      return parseResponse(
        client.api.catalog_system.pvt.specification.fieldValue.$put(args, options),
      )
    },
  })
}

export function usePutApiCatalogSystemPvtSpecificationFieldValue<
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
                ReturnType<typeof client.api.catalog_system.pvt.specification.fieldValue.$put>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog_system.pvt.specification.fieldValue.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiCatalogSystemPvtSpecificationFieldValueMutationOptions<
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

export function getPostApiCatalogSystemPvtSpecificationFieldValueMutationKey() {
  return ['api', '/api/catalog_system/pvt/specification/fieldValue', 'POST'] as const
}

export function getPostApiCatalogSystemPvtSpecificationFieldValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.specification.fieldValue.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.catalog_system.pvt.specification.fieldValue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCatalogSystemPvtSpecificationFieldValueMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.catalog_system.pvt.specification.fieldValue.$post>,
    ) {
      return parseResponse(
        client.api.catalog_system.pvt.specification.fieldValue.$post(args, options),
      )
    },
  })
}

export function usePostApiCatalogSystemPvtSpecificationFieldValue<
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
                ReturnType<typeof client.api.catalog_system.pvt.specification.fieldValue.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.catalog_system.pvt.specification.fieldValue.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCatalogSystemPvtSpecificationFieldValueMutationOptions<
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

export function getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/specification/fieldValue/:fieldValueId', keyArgs] as const
}

export function getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.specification.fieldValue[':fieldValueId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtSpecificationFieldValueFieldValueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdQueryKey>
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
      ...getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtSpecificationFieldValueFieldValueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdQueryKey>
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
      ...getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdQueryKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/catalog_system/pvt/specification/groupbycategory/:categoryId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdQueryKey>
  >({
    queryKey: getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.catalog_system.pvt.specification.groupbycategory[':categoryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiCatalogSystemPvtSpecificationGroupbycategoryCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdQueryKey>
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
      ...getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiCatalogSystemPvtSpecificationGroupbycategoryCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdQueryKey>
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
      ...getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
