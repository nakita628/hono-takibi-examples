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

export function getApiKey() {
  return ['api'] as const
}

export function getApiAddonPvtGiftlistGetListIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/addon/pvt/giftlist/get/:listId', keyArgs] as const
}

export function getApiAddonPvtGiftlistGetListIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAddonPvtGiftlistGetListIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.addon.pvt.giftlist.get[':listId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAddonPvtGiftlistGetListIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAddonPvtGiftlistGetListIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAddonPvtGiftlistGetListIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.addon.pvt.giftlist.get[':listId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAddonPvtReviewGetProductRateProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/addon/pvt/review/GetProductRate/:productId', keyArgs] as const
}

export function getApiAddonPvtReviewGetProductRateProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAddonPvtReviewGetProductRateProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.addon.pvt.review.GetProductRate[':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>
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
                    (typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']
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
                    (typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiAddonPvtReviewGetProductRateProductIdQueryKey>
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
            ReturnType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAddonPvtReviewGetProductRateProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAddonPvtReviewGetProductRateProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.addon.pvt.review.GetProductRate[':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/attachment/:attachmentid', keyArgs] as const
}

export function getApiCatalogPvtAttachmentAttachmentidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtAttachmentAttachmentidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.attachment[':attachmentid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtAttachmentAttachmentidQueryKey>
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
          Awaited<ReturnType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtAttachmentAttachmentidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtAttachmentAttachmentidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.attachment[':attachmentid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog.pvt.attachments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/attachments', keyArgs] as const
}

export function getApiCatalogPvtAttachmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog.pvt.attachments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.attachments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCatalogPvtAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.attachments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog.pvt.attachments.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.catalog.pvt.attachments.$get>>
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtAttachmentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.attachments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/brand/:brandId', keyArgs] as const
}

export function getApiCatalogPvtBrandBrandIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtBrandBrandIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.brand[':brandId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtBrandBrandIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtBrandBrandIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtBrandBrandIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.brand[':brandId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.catalog.pvt.category.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.catalog.pvt.category.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/category/:categoryId', keyArgs] as const
}

export function getApiCatalogPvtCategoryCategoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtCategoryCategoryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.category[':categoryId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtCategoryCategoryIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtCategoryCategoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtCategoryCategoryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.category[':categoryId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog.pvt.collection.inactive.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/collection/inactive', keyArgs] as const
}

export function getApiCatalogPvtCollectionInactiveQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog.pvt.collection.inactive.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtCollectionInactiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.collection.inactive.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog.pvt.collection.inactive.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.catalog.pvt.collection.inactive.$get>>
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtCollectionInactiveQueryKey>
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
          Awaited<ReturnType<typeof client.api.catalog.pvt.collection.inactive.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtCollectionInactiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtCollectionInactiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.collection.inactive.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogPvtCollectionStockkeepingunitImportfileexampleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/collection/stockkeepingunit/importfileexample', keyArgs] as const
}

export function getApiCatalogPvtCollectionStockkeepingunitImportfileexampleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogPvtCollectionStockkeepingunitImportfileexampleQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
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
                    typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
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
                    typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtCollectionStockkeepingunitImportfileexampleQueryKey>
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
              typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtCollectionStockkeepingunitImportfileexampleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogPvtCollectionStockkeepingunitImportfileexampleQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogPvtCollectionCollectionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/collection/:collectionId', keyArgs] as const
}

export function getApiCatalogPvtCollectionCollectionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtCollectionCollectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.collection[':collectionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtCollectionCollectionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtCollectionCollectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtCollectionCollectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.collection[':collectionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/collection/:collectionId/products', keyArgs] as const
}

export function getApiCatalogPvtCollectionCollectionIdProductsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtCollectionCollectionIdProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.collection[':collectionId'].products.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
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
                    (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
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
                    (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtCollectionCollectionIdProductsQueryKey>
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
              (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtCollectionCollectionIdProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtCollectionCollectionIdProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.collection[':collectionId'].products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/collection/:collectionId/subcollection', keyArgs] as const
}

export function getApiCatalogPvtCollectionCollectionIdSubcollectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtCollectionCollectionIdSubcollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.collection[':collectionId'].subcollection.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
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
                    (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
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
                    (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtCollectionCollectionIdSubcollectionQueryKey>
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
              (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtCollectionCollectionIdSubcollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtCollectionCollectionIdSubcollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.collection[':collectionId'].subcollection.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/product/:productId', keyArgs] as const
}

export function getApiCatalogPvtProductProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtProductProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.product[':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtProductProductIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtProductProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtProductProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.product[':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/product/:productId/salespolicy', keyArgs] as const
}

export function getApiCatalogPvtProductProductIdSalespolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtProductProductIdSalespolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.product[':productId'].salespolicy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']>
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
                    (typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']
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
                    (typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtProductProductIdSalespolicyQueryKey>
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
            ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtProductProductIdSalespolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtProductProductIdSalespolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.product[':productId'].salespolicy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/product/:productId/similarcategory/', keyArgs] as const
}

export function getApiCatalogPvtProductProductIdSimilarcategoryIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtProductProductIdSimilarcategoryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.product[':productId'].similarcategory.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
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
                    (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
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
                    (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtProductProductIdSimilarcategoryIndexQueryKey>
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
              (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtProductProductIdSimilarcategoryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtProductProductIdSimilarcategoryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.product[':productId'].similarcategory.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/product/:productId/specification', keyArgs] as const
}

export function getApiCatalogPvtProductProductIdSpecificationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtProductProductIdSpecificationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.product[':productId'].specification.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']>
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
                    (typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']
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
                    (typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtProductProductIdSpecificationQueryKey>
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
              (typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtProductProductIdSpecificationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtProductProductIdSpecificationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.product[':productId'].specification.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/skucomplement/:skuComplementId', keyArgs] as const
}

export function getApiCatalogPvtSkucomplementSkuComplementIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtSkucomplementSkuComplementIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.skucomplement[':skuComplementId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>
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
                    (typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']
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
                    (typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtSkucomplementSkuComplementIdQueryKey>
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
            ReturnType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSkucomplementSkuComplementIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtSkucomplementSkuComplementIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.skucomplement[':skuComplementId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/skuservice/:skuServiceId', keyArgs] as const
}

export function getApiCatalogPvtSkuserviceSkuServiceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtSkuserviceSkuServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.skuservice[':skuServiceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtSkuserviceSkuServiceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSkuserviceSkuServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtSkuserviceSkuServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.skuservice[':skuServiceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/skuservicetype/:skuServiceTypeId', keyArgs] as const
}

export function getApiCatalogPvtSkuservicetypeSkuServiceTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtSkuservicetypeSkuServiceTypeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.skuservicetype[':skuServiceTypeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']>
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
                    (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']
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
                    (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtSkuservicetypeSkuServiceTypeIdQueryKey>
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
            ReturnType<(typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSkuservicetypeSkuServiceTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtSkuservicetypeSkuServiceTypeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.skuservicetype[':skuServiceTypeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/skuservicevalue/:skuServiceValueId', keyArgs] as const
}

export function getApiCatalogPvtSkuservicevalueSkuServiceValueIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtSkuservicevalueSkuServiceValueIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.skuservicevalue[':skuServiceValueId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']>
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
                    (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']
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
                    (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtSkuservicevalueSkuServiceValueIdQueryKey>
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
              (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSkuservicevalueSkuServiceValueIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtSkuservicevalueSkuServiceValueIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.skuservicevalue[':skuServiceValueId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/specification/nonstructured', keyArgs] as const
}

export function getApiCatalogPvtSpecificationNonstructuredQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtSpecificationNonstructuredQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.specification.nonstructured.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.catalog.pvt.specification.nonstructured.$get>>
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtSpecificationNonstructuredQueryKey>
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
          Awaited<ReturnType<typeof client.api.catalog.pvt.specification.nonstructured.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSpecificationNonstructuredQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtSpecificationNonstructuredQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.specification.nonstructured.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.api.catalog.pvt.specification.nonstructured.$delete>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$delete>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/specification/nonstructured/:Id', keyArgs] as const
}

export function getApiCatalogPvtSpecificationNonstructuredIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtSpecificationNonstructuredIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.specification.nonstructured[':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']>
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
                    (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']
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
                    (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtSpecificationNonstructuredIdQueryKey>
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
            ReturnType<(typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSpecificationNonstructuredIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtSpecificationNonstructuredIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.specification.nonstructured[':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/specification/:specificationId', keyArgs] as const
}

export function getApiCatalogPvtSpecificationSpecificationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtSpecificationSpecificationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.specification[':specificationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>
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
                    (typeof client.api.catalog.pvt.specification)[':specificationId']['$get']
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
                    (typeof client.api.catalog.pvt.specification)[':specificationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtSpecificationSpecificationIdQueryKey>
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
            ReturnType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSpecificationSpecificationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtSpecificationSpecificationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.specification[':specificationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.api.catalog.pvt.specification)[':specificationId']['$put']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/specificationvalue/:specificationValueId', keyArgs] as const
}

export function getApiCatalogPvtSpecificationvalueSpecificationValueIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtSpecificationvalueSpecificationValueIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.specificationvalue[':specificationValueId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
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
                    (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
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
                    (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtSpecificationvalueSpecificationValueIdQueryKey>
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
              (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSpecificationvalueSpecificationValueIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogPvtSpecificationvalueSpecificationValueIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.specificationvalue[':specificationValueId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog.pvt.stockkeepingunit.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/stockkeepingunit', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog.pvt.stockkeepingunit.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtStockkeepingunitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCatalogPvtStockkeepingunit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunit.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog.pvt.stockkeepingunit.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunit.$get>>
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtStockkeepingunitQueryKey>
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
          Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunit.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtStockkeepingunitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.stockkeepingunit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitSkuIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtStockkeepingunitSkuIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtStockkeepingunitSkuIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/attachment', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitSkuIdAttachmentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtStockkeepingunitSkuIdAttachmentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].attachment.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
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
                    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
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
                    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdAttachmentQueryKey>
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
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdAttachmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtStockkeepingunitSkuIdAttachmentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].attachment.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogPvtStockkeepingunitSkuIdComplementQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/complement', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitSkuIdComplementQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtStockkeepingunitSkuIdComplementQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].complement.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
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
                    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
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
                    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdComplementQueryKey>
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
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdComplementQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtStockkeepingunitSkuIdComplementQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].complement.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/catalog/pvt/stockkeepingunit/:skuId/complement/:complementTypeId',
    keyArgs,
  ] as const
}

export function getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].complement[':complementTypeId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
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
                    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
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
                    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdQueryKey>
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
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].complement[':complementTypeId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogPvtStockkeepingunitSkuIdEanQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/ean', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitSkuIdEanQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtStockkeepingunitSkuIdEanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].ean.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>
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
                    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']
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
                    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdEanQueryKey>
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
            ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdEanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtStockkeepingunitSkuIdEanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].ean.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/file', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitSkuIdFileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtStockkeepingunitSkuIdFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']>
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
                    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']
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
                    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdFileQueryKey>
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
            ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdFileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtStockkeepingunitSkuIdFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/specification', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitSkuIdSpecificationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtStockkeepingunitSkuIdSpecificationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunit[':skuId'].specification.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
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
                    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
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
                    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdSpecificationQueryKey>
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
              (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitSkuIdSpecificationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtStockkeepingunitSkuIdSpecificationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].specification.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/stockkeepingunitkit', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitkitQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtStockkeepingunitkitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunitkit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>>
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtStockkeepingunitkitQueryKey>
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
          Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitkitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtStockkeepingunitkitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.stockkeepingunitkit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/stockkeepingunitkit/:kitId', keyArgs] as const
}

export function getApiCatalogPvtStockkeepingunitkitKitIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtStockkeepingunitkitKitIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.stockkeepingunitkit[':kitId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtStockkeepingunitkitKitIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtStockkeepingunitkitKitIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtStockkeepingunitkitKitIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.stockkeepingunitkit[':kitId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$delete']
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog/pvt/subcollection/:subCollectionId', keyArgs] as const
}

export function getApiCatalogPvtSubcollectionSubCollectionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogPvtSubcollectionSubCollectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog.pvt.subcollection[':subCollectionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>
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
                    (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']
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
                    (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogPvtSubcollectionSubCollectionIdQueryKey>
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
            ReturnType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogPvtSubcollectionSubCollectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogPvtSubcollectionSubCollectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog.pvt.subcollection[':subCollectionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$put']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
      Extract<
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.catalog.pvt.supplier.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.catalog.pvt.supplier.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pub/category/tree/:categoryLevels', keyArgs] as const
}

export function getApiCatalogSystemPubCategoryTreeCategoryLevelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPubCategoryTreeCategoryLevelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.category.tree[':categoryLevels'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
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
                    (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
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
                    (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPubCategoryTreeCategoryLevelsQueryKey>
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
              (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubCategoryTreeCategoryLevelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPubCategoryTreeCategoryLevelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.category.tree[':categoryLevels'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubProductsVariationsProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pub/products/variations/:productId', keyArgs] as const
}

export function getApiCatalogSystemPubProductsVariationsProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPubProductsVariationsProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.products.variations[':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
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
                    (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
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
                    (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPubProductsVariationsProductIdQueryKey>
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
              (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubProductsVariationsProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPubProductsVariationsProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.products.variations[':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubSaleschannelSalesChannelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pub/saleschannel/:salesChannelId', keyArgs] as const
}

export function getApiCatalogSystemPubSaleschannelSalesChannelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPubSaleschannelSalesChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.saleschannel[':salesChannelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']>
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
                    (typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']
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
                    (typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPubSaleschannelSalesChannelIdQueryKey>
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
              (typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubSaleschannelSalesChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPubSaleschannelSalesChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.saleschannel[':salesChannelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/catalog_system/pub/specification/field/listByCategoryId/:categoryId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.specification.field.listByCategoryId[':categoryId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
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
                    (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
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
                    (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdQueryKey
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
              (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.specification.field.listByCategoryId[':categoryId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/catalog_system/pub/specification/field/listTreeByCategoryId/:categoryId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.specification.field.listTreeByCategoryId[':categoryId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
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
                    (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
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
                    (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.specification.field.listTreeByCategoryId[
            ':categoryId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubSpecificationFieldGetFieldIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pub/specification/fieldGet/:fieldId', keyArgs] as const
}

export function getApiCatalogSystemPubSpecificationFieldGetFieldIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPubSpecificationFieldGetFieldIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.specification.fieldGet[':fieldId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
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
                    (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
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
                    (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPubSpecificationFieldGetFieldIdQueryKey>
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
              (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubSpecificationFieldGetFieldIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPubSpecificationFieldGetFieldIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.specification.fieldGet[':fieldId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubSpecificationFieldvalueFieldIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pub/specification/fieldvalue/:fieldId', keyArgs] as const
}

export function getApiCatalogSystemPubSpecificationFieldvalueFieldIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPubSpecificationFieldvalueFieldIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.specification.fieldvalue[':fieldId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
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
                    (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
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
                    (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPubSpecificationFieldvalueFieldIdQueryKey>
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
              (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubSpecificationFieldvalueFieldIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPubSpecificationFieldvalueFieldIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.specification.fieldvalue[':fieldId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPubSpecificationGroupGetGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pub/specification/groupGet/:groupId', keyArgs] as const
}

export function getApiCatalogSystemPubSpecificationGroupGetGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPubSpecificationGroupGetGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pub.specification.groupGet[':groupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
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
                    (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
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
                    (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPubSpecificationGroupGetGroupIdQueryKey>
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
              (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPubSpecificationGroupGetGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPubSpecificationGroupGetGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pub.specification.groupGet[':groupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtBrandListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog_system.pvt.brand.list.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/brand/list', keyArgs] as const
}

export function getApiCatalogSystemPvtBrandListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog_system.pvt.brand.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtBrandListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.brand.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog_system.pvt.brand.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.list.$get>>
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtBrandListQueryKey>
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
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtBrandListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtBrandListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.brand.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtBrandPagedlistQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/brand/pagedlist', keyArgs] as const
}

export function getApiCatalogSystemPvtBrandPagedlistQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtBrandPagedlistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.brand.pagedlist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>>
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtBrandPagedlistQueryKey>
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
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtBrandPagedlistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtBrandPagedlistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.brand.pagedlist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtBrandBrandIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/brand/:brandId', keyArgs] as const
}

export function getApiCatalogSystemPvtBrandBrandIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtBrandBrandIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.brand[':brandId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>
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
                  ReturnType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtBrandBrandIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtBrandBrandIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtBrandBrandIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.brand[':brandId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtCollectionSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.collection.search.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/collection/search', keyArgs] as const
}

export function getApiCatalogSystemPvtCollectionSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.collection.search.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtCollectionSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.collection.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.collection.search.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.catalog_system.pvt.collection.search.$get>>
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtCollectionSearchQueryKey>
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
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.collection.search.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtCollectionSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtCollectionSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.collection.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtCollectionSearchSearchTermsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/collection/search/:searchTerms', keyArgs] as const
}

export function getApiCatalogSystemPvtCollectionSearchSearchTermsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtCollectionSearchSearchTermsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.collection.search[':searchTerms'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
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
                    (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
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
                    (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtCollectionSearchSearchTermsQueryKey>
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
              (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtCollectionSearchSearchTermsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtCollectionSearchSearchTermsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.collection.search[':searchTerms'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtCommercialconditionListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/commercialcondition/list', keyArgs] as const
}

export function getApiCatalogSystemPvtCommercialconditionListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtCommercialconditionListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.commercialcondition.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtCommercialconditionListQueryKey>
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
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtCommercialconditionListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtCommercialconditionListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.commercialcondition.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtCommercialconditionCommercialConditionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/catalog_system/pvt/commercialcondition/:commercialConditionId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPvtCommercialconditionCommercialConditionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogSystemPvtCommercialconditionCommercialConditionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.commercialcondition[':commercialConditionId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
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
                    (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
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
                    (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtCommercialconditionCommercialConditionIdQueryKey>
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
              (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtCommercialconditionCommercialConditionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogSystemPvtCommercialconditionCommercialConditionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.commercialcondition[':commercialConditionId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtProductsGetIndexedInfoProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/products/GetIndexedInfo/:productId', keyArgs] as const
}

export function getApiCatalogSystemPvtProductsGetIndexedInfoProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtProductsGetIndexedInfoProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.products.GetIndexedInfo[':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
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
                    (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
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
                    (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtProductsGetIndexedInfoProductIdQueryKey>
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
              (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtProductsGetIndexedInfoProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtProductsGetIndexedInfoProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.products.GetIndexedInfo[':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtProductsGetProductAndSkuIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/products/GetProductAndSkuIds', keyArgs] as const
}

export function getApiCatalogSystemPvtProductsGetProductAndSkuIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtProductsGetProductAndSkuIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtProductsGetProductAndSkuIdsQueryKey>
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
            ReturnType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtProductsGetProductAndSkuIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtProductsGetProductAndSkuIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtProductsProductgetProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/products/productget/:productId', keyArgs] as const
}

export function getApiCatalogSystemPvtProductsProductgetProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtProductsProductgetProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.products.productget[':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
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
                    (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
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
                    (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtProductsProductgetProductIdQueryKey>
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
              (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtProductsProductgetProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtProductsProductgetProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.products.productget[':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtProductsProductgetbyrefidRefIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/products/productgetbyrefid/:refId', keyArgs] as const
}

export function getApiCatalogSystemPvtProductsProductgetbyrefidRefIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtProductsProductgetbyrefidRefIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.products.productgetbyrefid[':refId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
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
                    (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
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
                    (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtProductsProductgetbyrefidRefIdQueryKey>
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
              (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtProductsProductgetbyrefidRefIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtProductsProductgetbyrefidRefIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.products.productgetbyrefid[':refId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtProductsProductIdSpecificationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/products/:productId/specification', keyArgs] as const
}

export function getApiCatalogSystemPvtProductsProductIdSpecificationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtProductsProductIdSpecificationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.products[':productId'].specification.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
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
                    (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
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
                    (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtProductsProductIdSpecificationQueryKey>
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
              (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtProductsProductIdSpecificationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtProductsProductIdSpecificationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.products[':productId'].specification.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/saleschannel/list', keyArgs] as const
}

export function getApiCatalogSystemPvtSaleschannelListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtSaleschannelListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.saleschannel.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>>
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtSaleschannelListQueryKey>
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
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSaleschannelListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtSaleschannelListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.saleschannel.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog_system.pvt.seller.list.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/seller/list', keyArgs] as const
}

export function getApiCatalogSystemPvtSellerListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog_system.pvt.seller.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtSellerListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.seller.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.catalog_system.pvt.seller.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.list.$get>>
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtSellerListQueryKey>
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
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSellerListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtSellerListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.seller.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSellerSellerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/seller/:sellerId', keyArgs] as const
}

export function getApiCatalogSystemPvtSellerSellerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtSellerSellerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.seller[':sellerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtSellerSellerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSellerSellerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtSellerSellerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.seller[':sellerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSellersSellerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/sellers/:sellerId', keyArgs] as const
}

export function getApiCatalogSystemPvtSellersSellerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtSellersSellerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.sellers[':sellerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtSellersSellerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSellersSellerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtSellersSellerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.sellers[':sellerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/sku/complements/:parentSkuId/:type', keyArgs] as const
}

export function getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.sku.complements[':parentSkuId'][':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
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
                    (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
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
                    (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeQueryKey>
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
              (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.sku.complements[':parentSkuId'][':type'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/catalog_system/pvt/sku/stockkeepingunitByProductId/:productId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.sku.stockkeepingunitByProductId[':productId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
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
                    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
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
                    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdQueryKey>
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
              (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.sku.stockkeepingunitByProductId[':productId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/catalog_system/pvt/sku/stockkeepingunitbyalternateId/:alternateId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId[':alternateId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
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
                    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
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
                    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdQueryKey
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
              (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId[':alternateId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/sku/stockkeepingunitbyean/:ean', keyArgs] as const
}

export function getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.sku.stockkeepingunitbyean[':ean'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
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
                    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
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
                    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanQueryKey>
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
              (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.sku.stockkeepingunitbyean[':ean'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/sku/stockkeepingunitbyid/:skuId', keyArgs] as const
}

export function getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.sku.stockkeepingunitbyid[':skuId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
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
                    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
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
                    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdQueryKey>
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
              (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.sku.stockkeepingunitbyid[':skuId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/:refId', keyArgs] as const
}

export function getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid[':refId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
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
                    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
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
                    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdQueryKey>
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
              (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid[':refId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSkuStockkeepingunitidsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/sku/stockkeepingunitids', keyArgs] as const
}

export function getApiCatalogSystemPvtSkuStockkeepingunitidsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtSkuStockkeepingunitidsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.sku.stockkeepingunitids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>
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
                  ReturnType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitidsQueryKey>
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
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitidsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtSkuStockkeepingunitidsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.sku.stockkeepingunitids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/sku/stockkeepingunitidsbysaleschannel', keyArgs] as const
}

export function getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
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
                    typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
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
                    typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelQueryKey>
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
              typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
      Extract<
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/skuseller/:sellerId/:sellerSkuId', keyArgs] as const
}

export function getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.skuseller[':sellerId'][':sellerSkuId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
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
                    (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
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
                    (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdQueryKey>
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
              (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.skuseller[':sellerId'][':sellerSkuId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/catalog_system/pvt/specification/fieldValue/:fieldValueId', keyArgs] as const
}

export function getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.specification.fieldValue[':fieldValueId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
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
                    (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
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
                    (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdQueryKey>
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
              (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.specification.fieldValue[':fieldValueId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/catalog_system/pvt/specification/groupbycategory/:categoryId',
    keyArgs,
  ] as const
}

export function getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.catalog_system.pvt.specification.groupbycategory[':categoryId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
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
                    (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
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
                    (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdQueryKey>
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
              (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.catalog_system.pvt.specification.groupbycategory[':categoryId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}
