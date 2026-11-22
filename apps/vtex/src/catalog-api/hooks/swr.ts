import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiAddonPvtGiftlistGetListIdKey(
  args: InferRequestType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/addon/pvt/giftlist/get/:listId', keyArgs] as const
}

export function useGetApiAddonPvtGiftlistGetListId<TError = unknown>(
  args: InferRequestType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>>
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
        ? getGetApiAddonPvtGiftlistGetListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.addon.pvt.giftlist.get[':listId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAddonPvtGiftlistGetListId<TError = unknown>(
  args: InferRequestType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>>
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
        ? getGetApiAddonPvtGiftlistGetListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.addon.pvt.giftlist.get[':listId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAddonPvtReviewGetProductRateProductIdKey(
  args: InferRequestType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/addon/pvt/review/GetProductRate/:productId', keyArgs] as const
}

export function useGetApiAddonPvtReviewGetProductRateProductId<TError = unknown>(
  args: InferRequestType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>
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
        ? getGetApiAddonPvtReviewGetProductRateProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.addon.pvt.review.GetProductRate[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAddonPvtReviewGetProductRateProductId<TError = unknown>(
  args: InferRequestType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>
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
        ? getGetApiAddonPvtReviewGetProductRateProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.addon.pvt.review.GetProductRate[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiCatalogPvtAttachmentKey() {
  return ['api', '/api/catalog/pvt/attachment', 'POST'] as const
}

export function usePostApiCatalogPvtAttachment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.attachment.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.attachment.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtAttachmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.attachment.$post> },
      ) => parseResponse(client.api.catalog.pvt.attachment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtAttachmentAttachmentidKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/attachment/:attachmentid', keyArgs] as const
}

export function useGetApiCatalogPvtAttachmentAttachmentid<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>>
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
        ? getGetApiCatalogPvtAttachmentAttachmentidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.attachment[':attachmentid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtAttachmentAttachmentid<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>>
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
        ? getGetApiCatalogPvtAttachmentAttachmentidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.attachment[':attachmentid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogPvtAttachmentAttachmentidKey() {
  return ['api', '/api/catalog/pvt/attachment/:attachmentid', 'PUT'] as const
}

export function usePutApiCatalogPvtAttachmentAttachmentid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtAttachmentAttachmentidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$put']>
        },
      ) =>
        parseResponse(client.api.catalog.pvt.attachment[':attachmentid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtAttachmentAttachmentidKey() {
  return ['api', '/api/catalog/pvt/attachment/:attachmentid', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtAttachmentAttachmentid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtAttachmentAttachmentidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.attachment)[':attachmentid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.attachment[':attachmentid'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtAttachmentsKey(
  args: InferRequestType<typeof client.api.catalog.pvt.attachments.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/attachments', keyArgs] as const
}

export function useGetApiCatalogPvtAttachments<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog.pvt.attachments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.attachments.$get>>>
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
        ? getGetApiCatalogPvtAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.attachments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.catalog.pvt.attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtAttachments<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog.pvt.attachments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.attachments.$get>>>
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
        ? getGetApiCatalogPvtAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.attachments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.catalog.pvt.attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiCatalogPvtBrandKey() {
  return ['api', '/api/catalog/pvt/brand', 'POST'] as const
}

export function usePostApiCatalogPvtBrand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.brand.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.brand.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtBrandKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.brand.$post> },
      ) => parseResponse(client.api.catalog.pvt.brand.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtBrandBrandIdKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/brand/:brandId', keyArgs] as const
}

export function useGetApiCatalogPvtBrandBrandId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>>
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
        ? getGetApiCatalogPvtBrandBrandIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.catalog.pvt.brand[':brandId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtBrandBrandId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>>
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
        ? getGetApiCatalogPvtBrandBrandIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.catalog.pvt.brand[':brandId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogPvtBrandBrandIdKey() {
  return ['api', '/api/catalog/pvt/brand/:brandId', 'PUT'] as const
}

export function usePutApiCatalogPvtBrandBrandId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtBrandBrandIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$put']> },
      ) => parseResponse(client.api.catalog.pvt.brand[':brandId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtBrandBrandIdKey() {
  return ['api', '/api/catalog/pvt/brand/:brandId', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtBrandBrandId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.brand)[':brandId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtBrandBrandIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$delete']> },
      ) => parseResponse(client.api.catalog.pvt.brand[':brandId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtCategoryKey() {
  return ['api', '/api/catalog/pvt/category', 'POST'] as const
}

export function usePostApiCatalogPvtCategory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.category.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.category.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtCategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.category.$post> },
      ) => parseResponse(client.api.catalog.pvt.category.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtCategoryCategoryIdKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/category/:categoryId', keyArgs] as const
}

export function useGetApiCatalogPvtCategoryCategoryId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>>
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
        ? getGetApiCatalogPvtCategoryCategoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.category[':categoryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtCategoryCategoryId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>>
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
        ? getGetApiCatalogPvtCategoryCategoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.category[':categoryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogPvtCategoryCategoryIdKey() {
  return ['api', '/api/catalog/pvt/category/:categoryId', 'PUT'] as const
}

export function usePutApiCatalogPvtCategoryCategoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.category)[':categoryId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.category)[':categoryId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtCategoryCategoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.catalog.pvt.category)[':categoryId']['$put']>
        },
      ) => parseResponse(client.api.catalog.pvt.category[':categoryId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtCollectionKey() {
  return ['api', '/api/catalog/pvt/collection', 'POST'] as const
}

export function usePostApiCatalogPvtCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.collection.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.collection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.collection.$post> },
      ) => parseResponse(client.api.catalog.pvt.collection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtCollectionIndexKey() {
  return ['api', '/api/catalog/pvt/collection/', 'POST'] as const
}

export function usePostApiCatalogPvtCollectionIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.collection.index.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.collection.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtCollectionIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.collection.index.$post> },
      ) => parseResponse(client.api.catalog.pvt.collection.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtCollectionInactiveKey(
  args: InferRequestType<typeof client.api.catalog.pvt.collection.inactive.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/collection/inactive', keyArgs] as const
}

export function useGetApiCatalogPvtCollectionInactive<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog.pvt.collection.inactive.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog.pvt.collection.inactive.$get>>
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
        ? getGetApiCatalogPvtCollectionInactiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog.pvt.collection.inactive.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.collection.inactive.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtCollectionInactive<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog.pvt.collection.inactive.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog.pvt.collection.inactive.$get>>
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
        ? getGetApiCatalogPvtCollectionInactiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog.pvt.collection.inactive.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.collection.inactive.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogPvtCollectionStockkeepingunitImportfileexampleKey(
  args: InferRequestType<
    typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/collection/stockkeepingunit/importfileexample', keyArgs] as const
}

export function useGetApiCatalogPvtCollectionStockkeepingunitImportfileexample<TError = unknown>(
  args: InferRequestType<
    typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtCollectionStockkeepingunitImportfileexampleKey(args)
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
                typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
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
          client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtCollectionStockkeepingunitImportfileexample<
  TError = unknown,
>(
  args: InferRequestType<
    typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtCollectionStockkeepingunitImportfileexampleKey(args)
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
                typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
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
          client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogPvtCollectionCollectionIdKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/collection/:collectionId', keyArgs] as const
}

export function useGetApiCatalogPvtCollectionCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>>
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
        ? getGetApiCatalogPvtCollectionCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.collection[':collectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtCollectionCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>>
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
        ? getGetApiCatalogPvtCollectionCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.collection[':collectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogPvtCollectionCollectionIdKey() {
  return ['api', '/api/catalog/pvt/collection/:collectionId', 'PUT'] as const
}

export function usePutApiCatalogPvtCollectionCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtCollectionCollectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$put']>
        },
      ) =>
        parseResponse(client.api.catalog.pvt.collection[':collectionId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtCollectionCollectionIdKey() {
  return ['api', '/api/catalog/pvt/collection/:collectionId', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtCollectionCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtCollectionCollectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.collection)[':collectionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.collection[':collectionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtCollectionCollectionIdPositionKey() {
  return ['api', '/api/catalog/pvt/collection/:collectionId/position', 'POST'] as const
}

export function usePostApiCatalogPvtCollectionCollectionIdPosition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.collection)[':collectionId']['position']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtCollectionCollectionIdPositionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.collection)[':collectionId']['position']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.collection[':collectionId'].position.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtCollectionCollectionIdProductsKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/collection/:collectionId/products', keyArgs] as const
}

export function useGetApiCatalogPvtCollectionCollectionIdProducts<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtCollectionCollectionIdProductsKey(args)
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
                (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
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
          client.api.catalog.pvt.collection[':collectionId'].products.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtCollectionCollectionIdProducts<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtCollectionCollectionIdProductsKey(args)
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
                (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
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
          client.api.catalog.pvt.collection[':collectionId'].products.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiCatalogPvtCollectionCollectionIdStockkeepingunitImportexcludeKey() {
  return [
    'api',
    '/api/catalog/pvt/collection/:collectionId/stockkeepingunit/importexclude',
    'POST',
  ] as const
}

export function usePostApiCatalogPvtCollectionCollectionIdStockkeepingunitImportexclude<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.collection)[':collectionId']['stockkeepingunit']['importexclude']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiCatalogPvtCollectionCollectionIdStockkeepingunitImportexcludeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.collection)[':collectionId']['stockkeepingunit']['importexclude']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.collection[':collectionId'].stockkeepingunit.importexclude.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtCollectionCollectionIdStockkeepingunitImportinsertKey() {
  return [
    'api',
    '/api/catalog/pvt/collection/:collectionId/stockkeepingunit/importinsert',
    'POST',
  ] as const
}

export function usePostApiCatalogPvtCollectionCollectionIdStockkeepingunitImportinsert<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.collection)[':collectionId']['stockkeepingunit']['importinsert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiCatalogPvtCollectionCollectionIdStockkeepingunitImportinsertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.collection)[':collectionId']['stockkeepingunit']['importinsert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.collection[':collectionId'].stockkeepingunit.importinsert.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtCollectionCollectionIdSubcollectionKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/collection/:collectionId/subcollection', keyArgs] as const
}

export function useGetApiCatalogPvtCollectionCollectionIdSubcollection<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtCollectionCollectionIdSubcollectionKey(args)
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
                (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
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
          client.api.catalog.pvt.collection[':collectionId'].subcollection.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtCollectionCollectionIdSubcollection<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtCollectionCollectionIdSubcollectionKey(args)
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
                (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
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
          client.api.catalog.pvt.collection[':collectionId'].subcollection.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiCatalogPvtProductKey() {
  return ['api', '/api/catalog/pvt/product', 'POST'] as const
}

export function usePostApiCatalogPvtProduct<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.product.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.product.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtProductKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.product.$post> },
      ) => parseResponse(client.api.catalog.pvt.product.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtProductProductIdKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/product/:productId', keyArgs] as const
}

export function useGetApiCatalogPvtProductProductId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>>
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
        ? getGetApiCatalogPvtProductProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.product[':productId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtProductProductId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>>
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
        ? getGetApiCatalogPvtProductProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.product[':productId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogPvtProductProductIdKey() {
  return ['api', '/api/catalog/pvt/product/:productId', 'PUT'] as const
}

export function usePutApiCatalogPvtProductProductId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.product)[':productId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtProductProductIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['$put']> },
      ) => parseResponse(client.api.catalog.pvt.product[':productId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtProductProductIdSalespolicyKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/product/:productId/salespolicy', keyArgs] as const
}

export function useGetApiCatalogPvtProductProductIdSalespolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtProductProductIdSalespolicyKey(args)
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
                (typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']
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
          client.api.catalog.pvt.product[':productId'].salespolicy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtProductProductIdSalespolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtProductProductIdSalespolicyKey(args)
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
                (typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']
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
          client.api.catalog.pvt.product[':productId'].salespolicy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiCatalogPvtProductProductIdSalespolicyTradepolicyIdKey() {
  return ['api', '/api/catalog/pvt/product/:productId/salespolicy/:tradepolicyId', 'POST'] as const
}

export function usePostApiCatalogPvtProductProductIdSalespolicyTradepolicyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['salespolicy'][':tradepolicyId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtProductProductIdSalespolicyTradepolicyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.product)[':productId']['salespolicy'][':tradepolicyId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.product[':productId'].salespolicy[':tradepolicyId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtProductProductIdSalespolicyTradepolicyIdKey() {
  return [
    'api',
    '/api/catalog/pvt/product/:productId/salespolicy/:tradepolicyId',
    'DELETE',
  ] as const
}

export function useDeleteApiCatalogPvtProductProductIdSalespolicyTradepolicyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['salespolicy'][':tradepolicyId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtProductProductIdSalespolicyTradepolicyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.product)[':productId']['salespolicy'][':tradepolicyId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.product[':productId'].salespolicy[':tradepolicyId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtProductProductIdSimilarcategoryIndexKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/product/:productId/similarcategory/', keyArgs] as const
}

export function useGetApiCatalogPvtProductProductIdSimilarcategoryIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtProductProductIdSimilarcategoryIndexKey(args)
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
                (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
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
          client.api.catalog.pvt.product[':productId'].similarcategory.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtProductProductIdSimilarcategoryIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtProductProductIdSimilarcategoryIndexKey(args)
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
                (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
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
          client.api.catalog.pvt.product[':productId'].similarcategory.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiCatalogPvtProductProductIdSimilarcategoryCategoryIdKey() {
  return ['api', '/api/catalog/pvt/product/:productId/similarcategory/:categoryId', 'POST'] as const
}

export function usePostApiCatalogPvtProductProductIdSimilarcategoryCategoryId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['similarcategory'][':categoryId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtProductProductIdSimilarcategoryCategoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.product)[':productId']['similarcategory'][':categoryId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.product[':productId'].similarcategory[':categoryId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtProductProductIdSimilarcategoryCategoryIdKey() {
  return [
    'api',
    '/api/catalog/pvt/product/:productId/similarcategory/:categoryId',
    'DELETE',
  ] as const
}

export function useDeleteApiCatalogPvtProductProductIdSimilarcategoryCategoryId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['similarcategory'][':categoryId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtProductProductIdSimilarcategoryCategoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.product)[':productId']['similarcategory'][':categoryId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.product[':productId'].similarcategory[':categoryId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtProductProductIdSpecificationKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/product/:productId/specification', keyArgs] as const
}

export function useGetApiCatalogPvtProductProductIdSpecification<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtProductProductIdSpecificationKey(args)
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
                (typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']
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
          client.api.catalog.pvt.product[':productId'].specification.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtProductProductIdSpecification<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtProductProductIdSpecificationKey(args)
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
                (typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']
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
          client.api.catalog.pvt.product[':productId'].specification.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiCatalogPvtProductProductIdSpecificationKey() {
  return ['api', '/api/catalog/pvt/product/:productId/specification', 'POST'] as const
}

export function usePostApiCatalogPvtProductProductIdSpecification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['specification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtProductProductIdSpecificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.product)[':productId']['specification']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.product[':productId'].specification.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtProductProductIdSpecificationKey() {
  return ['api', '/api/catalog/pvt/product/:productId/specification', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtProductProductIdSpecification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['specification']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtProductProductIdSpecificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.product)[':productId']['specification']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.product[':productId'].specification.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtProductProductIdSpecificationSpecificationIdKey() {
  return [
    'api',
    '/api/catalog/pvt/product/:productId/specification/:specificationId',
    'DELETE',
  ] as const
}

export function useDeleteApiCatalogPvtProductProductIdSpecificationSpecificationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['specification'][':specificationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiCatalogPvtProductProductIdSpecificationSpecificationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.product)[':productId']['specification'][':specificationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.product[':productId'].specification[':specificationId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiCatalogPvtProductProductIdSpecificationvalueKey() {
  return ['api', '/api/catalog/pvt/product/:productId/specificationvalue', 'PUT'] as const
}

export function usePutApiCatalogPvtProductProductIdSpecificationvalue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.product)[':productId']['specificationvalue']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtProductProductIdSpecificationvalueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.product)[':productId']['specificationvalue']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.product[':productId'].specificationvalue.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtSkuattachmentKey() {
  return ['api', '/api/catalog/pvt/skuattachment', 'POST'] as const
}

export function usePostApiCatalogPvtSkuattachment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.skuattachment.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.skuattachment.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtSkuattachmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.skuattachment.$post> },
      ) => parseResponse(client.api.catalog.pvt.skuattachment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtSkuattachmentKey() {
  return ['api', '/api/catalog/pvt/skuattachment', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtSkuattachment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.skuattachment.$delete>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.skuattachment.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtSkuattachmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.skuattachment.$delete> },
      ) => parseResponse(client.api.catalog.pvt.skuattachment.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtSkuattachmentSkuAttachmentAssociationIdKey() {
  return ['api', '/api/catalog/pvt/skuattachment/:skuAttachmentAssociationId', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtSkuattachmentSkuAttachmentAssociationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.skuattachment)[':skuAttachmentAssociationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtSkuattachmentSkuAttachmentAssociationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.skuattachment)[':skuAttachmentAssociationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.skuattachment[':skuAttachmentAssociationId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtSkucomplementKey() {
  return ['api', '/api/catalog/pvt/skucomplement', 'POST'] as const
}

export function usePostApiCatalogPvtSkucomplement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.skucomplement.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.skucomplement.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtSkucomplementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.skucomplement.$post> },
      ) => parseResponse(client.api.catalog.pvt.skucomplement.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtSkucomplementSkuComplementIdKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/skucomplement/:skuComplementId', keyArgs] as const
}

export function useGetApiCatalogPvtSkucomplementSkuComplementId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>
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
        ? getGetApiCatalogPvtSkucomplementSkuComplementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog.pvt.skucomplement[':skuComplementId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtSkucomplementSkuComplementId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>
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
        ? getGetApiCatalogPvtSkucomplementSkuComplementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog.pvt.skucomplement[':skuComplementId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtSkucomplementSkuComplementIdKey() {
  return ['api', '/api/catalog/pvt/skucomplement/:skuComplementId', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtSkucomplementSkuComplementId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtSkucomplementSkuComplementIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.skucomplement[':skuComplementId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtSkuserviceKey() {
  return ['api', '/api/catalog/pvt/skuservice', 'POST'] as const
}

export function usePostApiCatalogPvtSkuservice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.skuservice.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.skuservice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtSkuserviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.skuservice.$post> },
      ) => parseResponse(client.api.catalog.pvt.skuservice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtSkuserviceSkuServiceIdKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/skuservice/:skuServiceId', keyArgs] as const
}

export function useGetApiCatalogPvtSkuserviceSkuServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>>
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
        ? getGetApiCatalogPvtSkuserviceSkuServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.skuservice[':skuServiceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtSkuserviceSkuServiceId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>>
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
        ? getGetApiCatalogPvtSkuserviceSkuServiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.skuservice[':skuServiceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogPvtSkuserviceSkuServiceIdKey() {
  return ['api', '/api/catalog/pvt/skuservice/:skuServiceId', 'PUT'] as const
}

export function usePutApiCatalogPvtSkuserviceSkuServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtSkuserviceSkuServiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$put']>
        },
      ) =>
        parseResponse(client.api.catalog.pvt.skuservice[':skuServiceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtSkuserviceSkuServiceIdKey() {
  return ['api', '/api/catalog/pvt/skuservice/:skuServiceId', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtSkuserviceSkuServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtSkuserviceSkuServiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.skuservice[':skuServiceId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtSkuservicetypeKey() {
  return ['api', '/api/catalog/pvt/skuservicetype', 'POST'] as const
}

export function usePostApiCatalogPvtSkuservicetype<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.skuservicetype.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.skuservicetype.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtSkuservicetypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.skuservicetype.$post> },
      ) => parseResponse(client.api.catalog.pvt.skuservicetype.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtSkuservicetypeSkuServiceTypeIdKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/skuservicetype/:skuServiceTypeId', keyArgs] as const
}

export function useGetApiCatalogPvtSkuservicetypeSkuServiceTypeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtSkuservicetypeSkuServiceTypeIdKey(args)
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
                (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']
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
          client.api.catalog.pvt.skuservicetype[':skuServiceTypeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtSkuservicetypeSkuServiceTypeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtSkuservicetypeSkuServiceTypeIdKey(args)
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
                (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']
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
          client.api.catalog.pvt.skuservicetype[':skuServiceTypeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogPvtSkuservicetypeSkuServiceTypeIdKey() {
  return ['api', '/api/catalog/pvt/skuservicetype/:skuServiceTypeId', 'PUT'] as const
}

export function usePutApiCatalogPvtSkuservicetypeSkuServiceTypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtSkuservicetypeSkuServiceTypeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.skuservicetype[':skuServiceTypeId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtSkuservicetypeSkuServiceTypeIdKey() {
  return ['api', '/api/catalog/pvt/skuservicetype/:skuServiceTypeId', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtSkuservicetypeSkuServiceTypeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtSkuservicetypeSkuServiceTypeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.skuservicetype[':skuServiceTypeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtSkuservicetypeattachmentKey() {
  return ['api', '/api/catalog/pvt/skuservicetypeattachment', 'POST'] as const
}

export function usePostApiCatalogPvtSkuservicetypeattachment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.skuservicetypeattachment.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.skuservicetypeattachment.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtSkuservicetypeattachmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.catalog.pvt.skuservicetypeattachment.$post> },
      ) => parseResponse(client.api.catalog.pvt.skuservicetypeattachment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtSkuservicetypeattachmentKey() {
  return ['api', '/api/catalog/pvt/skuservicetypeattachment', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtSkuservicetypeattachment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.skuservicetypeattachment.$delete>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.skuservicetypeattachment.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtSkuservicetypeattachmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.api.catalog.pvt.skuservicetypeattachment.$delete>
        },
      ) =>
        parseResponse(client.api.catalog.pvt.skuservicetypeattachment.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtSkuservicetypeattachmentSkuServiceTypeAttachmentIdKey() {
  return [
    'api',
    '/api/catalog/pvt/skuservicetypeattachment/:skuServiceTypeAttachmentId',
    'DELETE',
  ] as const
}

export function useDeleteApiCatalogPvtSkuservicetypeattachmentSkuServiceTypeAttachmentId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.skuservicetypeattachment)[':skuServiceTypeAttachmentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiCatalogPvtSkuservicetypeattachmentSkuServiceTypeAttachmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.skuservicetypeattachment)[':skuServiceTypeAttachmentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.skuservicetypeattachment[':skuServiceTypeAttachmentId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtSkuservicevalueKey() {
  return ['api', '/api/catalog/pvt/skuservicevalue', 'POST'] as const
}

export function usePostApiCatalogPvtSkuservicevalue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.skuservicevalue.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.skuservicevalue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtSkuservicevalueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.skuservicevalue.$post> },
      ) => parseResponse(client.api.catalog.pvt.skuservicevalue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtSkuservicevalueSkuServiceValueIdKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/skuservicevalue/:skuServiceValueId', keyArgs] as const
}

export function useGetApiCatalogPvtSkuservicevalueSkuServiceValueId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtSkuservicevalueSkuServiceValueIdKey(args)
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
                (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']
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
          client.api.catalog.pvt.skuservicevalue[':skuServiceValueId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtSkuservicevalueSkuServiceValueId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtSkuservicevalueSkuServiceValueIdKey(args)
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
                (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']
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
          client.api.catalog.pvt.skuservicevalue[':skuServiceValueId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogPvtSkuservicevalueSkuServiceValueIdKey() {
  return ['api', '/api/catalog/pvt/skuservicevalue/:skuServiceValueId', 'PUT'] as const
}

export function usePutApiCatalogPvtSkuservicevalueSkuServiceValueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtSkuservicevalueSkuServiceValueIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.skuservicevalue[':skuServiceValueId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtSkuservicevalueSkuServiceValueIdKey() {
  return ['api', '/api/catalog/pvt/skuservicevalue/:skuServiceValueId', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtSkuservicevalueSkuServiceValueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtSkuservicevalueSkuServiceValueIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.skuservicevalue[':skuServiceValueId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtSpecificationKey() {
  return ['api', '/api/catalog/pvt/specification', 'POST'] as const
}

export function usePostApiCatalogPvtSpecification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.specification.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.specification.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtSpecificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.specification.$post> },
      ) => parseResponse(client.api.catalog.pvt.specification.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtSpecificationNonstructuredKey(
  args: InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/specification/nonstructured', keyArgs] as const
}

export function useGetApiCatalogPvtSpecificationNonstructured<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog.pvt.specification.nonstructured.$get>>
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
        ? getGetApiCatalogPvtSpecificationNonstructuredKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog.pvt.specification.nonstructured.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.specification.nonstructured.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtSpecificationNonstructured<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog.pvt.specification.nonstructured.$get>>
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
        ? getGetApiCatalogPvtSpecificationNonstructuredKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog.pvt.specification.nonstructured.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.specification.nonstructured.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtSpecificationNonstructuredKey() {
  return ['api', '/api/catalog/pvt/specification/nonstructured', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtSpecificationNonstructured<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.specification.nonstructured.$delete>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtSpecificationNonstructuredKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$delete>
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.specification.nonstructured.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtSpecificationNonstructuredIdKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/specification/nonstructured/:Id', keyArgs] as const
}

export function useGetApiCatalogPvtSpecificationNonstructuredId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']>
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
        ? getGetApiCatalogPvtSpecificationNonstructuredIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog.pvt.specification.nonstructured[':Id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtSpecificationNonstructuredId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']>
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
        ? getGetApiCatalogPvtSpecificationNonstructuredIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog.pvt.specification.nonstructured[':Id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtSpecificationNonstructuredIdKey() {
  return ['api', '/api/catalog/pvt/specification/nonstructured/:Id', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtSpecificationNonstructuredId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtSpecificationNonstructuredIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.specification.nonstructured[':Id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtSpecificationSpecificationIdKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/specification/:specificationId', keyArgs] as const
}

export function useGetApiCatalogPvtSpecificationSpecificationId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>
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
        ? getGetApiCatalogPvtSpecificationSpecificationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog.pvt.specification[':specificationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtSpecificationSpecificationId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>
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
        ? getGetApiCatalogPvtSpecificationSpecificationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog.pvt.specification[':specificationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogPvtSpecificationSpecificationIdKey() {
  return ['api', '/api/catalog/pvt/specification/:specificationId', 'PUT'] as const
}

export function usePutApiCatalogPvtSpecificationSpecificationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtSpecificationSpecificationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.specification)[':specificationId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.specification[':specificationId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtSpecificationgroupKey() {
  return ['api', '/api/catalog/pvt/specificationgroup', 'POST'] as const
}

export function usePostApiCatalogPvtSpecificationgroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.specificationgroup.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.specificationgroup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtSpecificationgroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.specificationgroup.$post> },
      ) => parseResponse(client.api.catalog.pvt.specificationgroup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiCatalogPvtSpecificationgroupGroupIdKey() {
  return ['api', '/api/catalog/pvt/specificationgroup/:groupId', 'PUT'] as const
}

export function usePutApiCatalogPvtSpecificationgroupGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.specificationgroup)[':groupId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtSpecificationgroupGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.specificationgroup)[':groupId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.specificationgroup[':groupId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtSpecificationvalueKey() {
  return ['api', '/api/catalog/pvt/specificationvalue', 'POST'] as const
}

export function usePostApiCatalogPvtSpecificationvalue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.specificationvalue.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.specificationvalue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtSpecificationvalueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.specificationvalue.$post> },
      ) => parseResponse(client.api.catalog.pvt.specificationvalue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtSpecificationvalueSpecificationValueIdKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/specificationvalue/:specificationValueId', keyArgs] as const
}

export function useGetApiCatalogPvtSpecificationvalueSpecificationValueId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtSpecificationvalueSpecificationValueIdKey(args)
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
                (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
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
          client.api.catalog.pvt.specificationvalue[':specificationValueId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtSpecificationvalueSpecificationValueId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtSpecificationvalueSpecificationValueIdKey(args)
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
                (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
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
          client.api.catalog.pvt.specificationvalue[':specificationValueId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogPvtSpecificationvalueSpecificationValueIdKey() {
  return ['api', '/api/catalog/pvt/specificationvalue/:specificationValueId', 'PUT'] as const
}

export function usePutApiCatalogPvtSpecificationvalueSpecificationValueId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtSpecificationvalueSpecificationValueIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.specificationvalue[':specificationValueId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtStockkeepingunitKey(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunit.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunit', keyArgs] as const
}

export function useGetApiCatalogPvtStockkeepingunit<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunit.$get>>
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
        ? getGetApiCatalogPvtStockkeepingunitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunit.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.catalog.pvt.stockkeepingunit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtStockkeepingunit<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunit.$get>>
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
        ? getGetApiCatalogPvtStockkeepingunitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunit.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.catalog.pvt.stockkeepingunit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiCatalogPvtStockkeepingunitKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit', 'POST'] as const
}

export function usePostApiCatalogPvtStockkeepingunit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunit.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.stockkeepingunit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtStockkeepingunitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunit.$post> },
      ) => parseResponse(client.api.catalog.pvt.stockkeepingunit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiCatalogPvtStockkeepingunitCopySkuIdfromSkuIdtoFileIndexKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/copy/:skuIdfrom/:skuIdto/file/', 'PUT'] as const
}

export function usePutApiCatalogPvtStockkeepingunitCopySkuIdfromSkuIdtoFileIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit.copy)[':skuIdfrom'][':skuIdto']['file']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtStockkeepingunitCopySkuIdfromSkuIdtoFileIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.stockkeepingunit.copy)[':skuIdfrom'][':skuIdto']['file']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit.copy[':skuIdfrom'][':skuIdto'].file.index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtStockkeepingunitDisassociateSkuIdFileSkuFileIdKey() {
  return [
    'api',
    '/api/catalog/pvt/stockkeepingunit/disassociate/:skuId/file/:skuFileId',
    'DELETE',
  ] as const
}

export function useDeleteApiCatalogPvtStockkeepingunitDisassociateSkuIdFileSkuFileId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit.disassociate)[':skuId']['file'][':skuFileId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiCatalogPvtStockkeepingunitDisassociateSkuIdFileSkuFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.stockkeepingunit.disassociate)[':skuId']['file'][':skuFileId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit.disassociate[':skuId'].file[':skuFileId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtStockkeepingunitSkuIdKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId', keyArgs] as const
}

export function useGetApiCatalogPvtStockkeepingunitSkuId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>>
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
        ? getGetApiCatalogPvtStockkeepingunitSkuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.stockkeepingunit[':skuId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtStockkeepingunitSkuId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>>
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
        ? getGetApiCatalogPvtStockkeepingunitSkuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.stockkeepingunit[':skuId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogPvtStockkeepingunitSkuIdKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId', 'PUT'] as const
}

export function usePutApiCatalogPvtStockkeepingunitSkuId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtStockkeepingunitSkuIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$put']>
        },
      ) =>
        parseResponse(client.api.catalog.pvt.stockkeepingunit[':skuId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtStockkeepingunitSkuIdAttachmentKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/attachment', keyArgs] as const
}

export function useGetApiCatalogPvtStockkeepingunitSkuIdAttachment<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtStockkeepingunitSkuIdAttachmentKey(args)
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
                (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
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
          client.api.catalog.pvt.stockkeepingunit[':skuId'].attachment.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtStockkeepingunitSkuIdAttachment<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtStockkeepingunitSkuIdAttachmentKey(args)
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
                (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
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
          client.api.catalog.pvt.stockkeepingunit[':skuId'].attachment.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogPvtStockkeepingunitSkuIdComplementKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/complement', keyArgs] as const
}

export function useGetApiCatalogPvtStockkeepingunitSkuIdComplement<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtStockkeepingunitSkuIdComplementKey(args)
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
                (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
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
          client.api.catalog.pvt.stockkeepingunit[':skuId'].complement.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtStockkeepingunitSkuIdComplement<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtStockkeepingunitSkuIdComplementKey(args)
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
                (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
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
          client.api.catalog.pvt.stockkeepingunit[':skuId'].complement.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdKey(
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

export function useGetApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdKey(args)
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
                (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
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
          client.api.catalog.pvt.stockkeepingunit[':skuId'].complement[':complementTypeId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdKey(args)
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
                (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
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
          client.api.catalog.pvt.stockkeepingunit[':skuId'].complement[':complementTypeId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogPvtStockkeepingunitSkuIdEanKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/ean', keyArgs] as const
}

export function useGetApiCatalogPvtStockkeepingunitSkuIdEan<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>
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
        ? getGetApiCatalogPvtStockkeepingunitSkuIdEanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].ean.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtStockkeepingunitSkuIdEan<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>
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
        ? getGetApiCatalogPvtStockkeepingunitSkuIdEanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].ean.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdEanKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/ean', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtStockkeepingunitSkuIdEan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtStockkeepingunitSkuIdEanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].ean.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtStockkeepingunitSkuIdEanEanKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/ean/:ean', 'POST'] as const
}

export function usePostApiCatalogPvtStockkeepingunitSkuIdEanEan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean'][':ean']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtStockkeepingunitSkuIdEanEanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean'][':ean']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].ean[':ean'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdEanEanKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/ean/:ean', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtStockkeepingunitSkuIdEanEan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean'][':ean']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtStockkeepingunitSkuIdEanEanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean'][':ean']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].ean[':ean'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtStockkeepingunitSkuIdFileKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/file', keyArgs] as const
}

export function useGetApiCatalogPvtStockkeepingunitSkuIdFile<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']>
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
        ? getGetApiCatalogPvtStockkeepingunitSkuIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].file.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtStockkeepingunitSkuIdFile<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']>
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
        ? getGetApiCatalogPvtStockkeepingunitSkuIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].file.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiCatalogPvtStockkeepingunitSkuIdFileKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/file', 'POST'] as const
}

export function usePostApiCatalogPvtStockkeepingunitSkuIdFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtStockkeepingunitSkuIdFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].file.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdFileKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/file', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtStockkeepingunitSkuIdFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtStockkeepingunitSkuIdFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].file.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/file/:skuFileId', 'PUT'] as const
}

export function usePutApiCatalogPvtStockkeepingunitSkuIdFileSkuFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file'][':skuFileId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file'][':skuFileId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].file[':skuFileId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/file/:skuFileId', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtStockkeepingunitSkuIdFileSkuFileId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file'][':skuFileId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file'][':skuFileId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].file[':skuFileId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtStockkeepingunitSkuIdSpecificationKey(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/specification', keyArgs] as const
}

export function useGetApiCatalogPvtStockkeepingunitSkuIdSpecification<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtStockkeepingunitSkuIdSpecificationKey(args)
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
                (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
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
          client.api.catalog.pvt.stockkeepingunit[':skuId'].specification.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtStockkeepingunitSkuIdSpecification<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogPvtStockkeepingunitSkuIdSpecificationKey(args)
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
                (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
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
          client.api.catalog.pvt.stockkeepingunit[':skuId'].specification.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogPvtStockkeepingunitSkuIdSpecificationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/specification', 'PUT'] as const
}

export function usePutApiCatalogPvtStockkeepingunitSkuIdSpecification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtStockkeepingunitSkuIdSpecificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].specification.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtStockkeepingunitSkuIdSpecificationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/specification', 'POST'] as const
}

export function usePostApiCatalogPvtStockkeepingunitSkuIdSpecification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtStockkeepingunitSkuIdSpecificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].specification.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdSpecificationKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/specification', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtStockkeepingunitSkuIdSpecification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtStockkeepingunitSkuIdSpecificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].specification.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtStockkeepingunitSkuIdSpecificationSpecificationIdKey() {
  return [
    'api',
    '/api/catalog/pvt/stockkeepingunit/:skuId/specification/:specificationId',
    'DELETE',
  ] as const
}

export function useDeleteApiCatalogPvtStockkeepingunitSkuIdSpecificationSpecificationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification'][':specificationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiCatalogPvtStockkeepingunitSkuIdSpecificationSpecificationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification'][':specificationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].specification[
            ':specificationId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiCatalogPvtStockkeepingunitSkuIdSpecificationvalueKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunit/:skuId/specificationvalue', 'PUT'] as const
}

export function usePutApiCatalogPvtStockkeepingunitSkuIdSpecificationvalue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specificationvalue']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtStockkeepingunitSkuIdSpecificationvalueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specificationvalue']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunit[':skuId'].specificationvalue.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtStockkeepingunitkitKey(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunitkit', keyArgs] as const
}

export function useGetApiCatalogPvtStockkeepingunitkit<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>>
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
        ? getGetApiCatalogPvtStockkeepingunitkitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.stockkeepingunitkit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtStockkeepingunitkit<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>>
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
        ? getGetApiCatalogPvtStockkeepingunitkitKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog.pvt.stockkeepingunitkit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiCatalogPvtStockkeepingunitkitKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunitkit', 'POST'] as const
}

export function usePostApiCatalogPvtStockkeepingunitkit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtStockkeepingunitkitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$post> },
      ) => parseResponse(client.api.catalog.pvt.stockkeepingunitkit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtStockkeepingunitkitKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunitkit', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtStockkeepingunitkit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog.pvt.stockkeepingunitkit.$delete>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtStockkeepingunitkitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$delete> },
      ) => parseResponse(client.api.catalog.pvt.stockkeepingunitkit.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtStockkeepingunitkitKitIdKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/stockkeepingunitkit/:kitId', keyArgs] as const
}

export function useGetApiCatalogPvtStockkeepingunitkitKitId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>
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
        ? getGetApiCatalogPvtStockkeepingunitkitKitIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunitkit[':kitId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtStockkeepingunitkitKitId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>
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
        ? getGetApiCatalogPvtStockkeepingunitkitKitIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunitkit[':kitId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtStockkeepingunitkitKitIdKey() {
  return ['api', '/api/catalog/pvt/stockkeepingunitkit/:kitId', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtStockkeepingunitkitKitId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtStockkeepingunitkitKitIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.stockkeepingunitkit[':kitId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtSubcollectionKey() {
  return ['api', '/api/catalog/pvt/subcollection', 'POST'] as const
}

export function usePostApiCatalogPvtSubcollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.subcollection.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.subcollection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtSubcollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.subcollection.$post> },
      ) => parseResponse(client.api.catalog.pvt.subcollection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogPvtSubcollectionSubCollectionIdKey(
  args: InferRequestType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog/pvt/subcollection/:subCollectionId', keyArgs] as const
}

export function useGetApiCatalogPvtSubcollectionSubCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>
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
        ? getGetApiCatalogPvtSubcollectionSubCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog.pvt.subcollection[':subCollectionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogPvtSubcollectionSubCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>
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
        ? getGetApiCatalogPvtSubcollectionSubCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog.pvt.subcollection[':subCollectionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogPvtSubcollectionSubCollectionIdKey() {
  return ['api', '/api/catalog/pvt/subcollection/:subCollectionId', 'PUT'] as const
}

export function usePutApiCatalogPvtSubcollectionSubCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtSubcollectionSubCollectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.subcollection[':subCollectionId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtSubcollectionSubCollectionIdKey() {
  return ['api', '/api/catalog/pvt/subcollection/:subCollectionId', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtSubcollectionSubCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtSubcollectionSubCollectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.subcollection[':subCollectionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtSubcollectionSubCollectionIdBrandKey() {
  return ['api', '/api/catalog/pvt/subcollection/:subCollectionId/brand', 'POST'] as const
}

export function usePostApiCatalogPvtSubcollectionSubCollectionIdBrand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtSubcollectionSubCollectionIdBrandKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.subcollection[':subCollectionId'].brand.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtSubcollectionSubCollectionIdBrandBrandIdKey() {
  return [
    'api',
    '/api/catalog/pvt/subcollection/:subCollectionId/brand/:brandId',
    'DELETE',
  ] as const
}

export function useDeleteApiCatalogPvtSubcollectionSubCollectionIdBrandBrandId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand'][':brandId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtSubcollectionSubCollectionIdBrandBrandIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand'][':brandId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.subcollection[':subCollectionId'].brand[':brandId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtSubcollectionSubCollectionIdBrandCategoryIdKey() {
  return [
    'api',
    '/api/catalog/pvt/subcollection/:subCollectionId/brand/:categoryId',
    'DELETE',
  ] as const
}

export function useDeleteApiCatalogPvtSubcollectionSubCollectionIdBrandCategoryId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand'][':categoryId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtSubcollectionSubCollectionIdBrandCategoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand'][':categoryId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.subcollection[':subCollectionId'].brand[':categoryId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtSubcollectionSubCollectionIdCategoryKey() {
  return ['api', '/api/catalog/pvt/subcollection/:subCollectionId/category', 'POST'] as const
}

export function usePostApiCatalogPvtSubcollectionSubCollectionIdCategory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['category']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtSubcollectionSubCollectionIdCategoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['category']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.subcollection[':subCollectionId'].category.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitKey() {
  return [
    'api',
    '/api/catalog/pvt/subcollection/:subCollectionId/stockkeepingunit',
    'POST',
  ] as const
}

export function usePostApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['stockkeepingunit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['stockkeepingunit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.subcollection[':subCollectionId'].stockkeepingunit.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitSkuIdKey() {
  return [
    'api',
    '/api/catalog/pvt/subcollection/:subCollectionId/stockkeepingunit/:skuId',
    'DELETE',
  ] as const
}

export function useDeleteApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitSkuId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['stockkeepingunit'][':skuId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitSkuIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['stockkeepingunit'][':skuId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog.pvt.subcollection[':subCollectionId'].stockkeepingunit[
            ':skuId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogPvtSupplierKey() {
  return ['api', '/api/catalog/pvt/supplier', 'POST'] as const
}

export function usePostApiCatalogPvtSupplier<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog.pvt.supplier.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog.pvt.supplier.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogPvtSupplierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog.pvt.supplier.$post> },
      ) => parseResponse(client.api.catalog.pvt.supplier.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiCatalogPvtSupplierSupplierIdKey() {
  return ['api', '/api/catalog/pvt/supplier/:supplierId', 'PUT'] as const
}

export function usePutApiCatalogPvtSupplierSupplierId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogPvtSupplierSupplierIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$put']>
        },
      ) => parseResponse(client.api.catalog.pvt.supplier[':supplierId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiCatalogPvtSupplierSupplierIdKey() {
  return ['api', '/api/catalog/pvt/supplier/:supplierId', 'DELETE'] as const
}

export function useDeleteApiCatalogPvtSupplierSupplierId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCatalogPvtSupplierSupplierIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$delete']>
        },
      ) =>
        parseResponse(client.api.catalog.pvt.supplier[':supplierId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubCategoryTreeCategoryLevelsKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/category/tree/:categoryLevels', keyArgs] as const
}

export function useGetApiCatalogSystemPubCategoryTreeCategoryLevels<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubCategoryTreeCategoryLevelsKey(args)
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
                (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
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
          client.api.catalog_system.pub.category.tree[':categoryLevels'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubCategoryTreeCategoryLevels<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubCategoryTreeCategoryLevelsKey(args)
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
                (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
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
          client.api.catalog_system.pub.category.tree[':categoryLevels'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubProductsVariationsProductIdKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/products/variations/:productId', keyArgs] as const
}

export function useGetApiCatalogSystemPubProductsVariationsProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsVariationsProductIdKey(args)
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
                (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
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
          client.api.catalog_system.pub.products.variations[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubProductsVariationsProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubProductsVariationsProductIdKey(args)
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
                (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
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
          client.api.catalog_system.pub.products.variations[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubSaleschannelSalesChannelIdKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/saleschannel/:salesChannelId', keyArgs] as const
}

export function useGetApiCatalogSystemPubSaleschannelSalesChannelId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubSaleschannelSalesChannelIdKey(args)
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
                (typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']
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
          client.api.catalog_system.pub.saleschannel[':salesChannelId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubSaleschannelSalesChannelId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubSaleschannelSalesChannelIdKey(args)
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
                (typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']
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
          client.api.catalog_system.pub.saleschannel[':salesChannelId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiCatalogSystemPubSkuStockkeepingunitidsbyrefidsKey() {
  return ['api', '/api/catalog_system/pub/sku/stockkeepingunitidsbyrefids', 'POST'] as const
}

export function usePostApiCatalogSystemPubSkuStockkeepingunitidsbyrefids<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<typeof client.api.catalog_system.pub.sku.stockkeepingunitidsbyrefids.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogSystemPubSkuStockkeepingunitidsbyrefidsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            typeof client.api.catalog_system.pub.sku.stockkeepingunitidsbyrefids.$post
          >
        },
      ) =>
        parseResponse(
          client.api.catalog_system.pub.sku.stockkeepingunitidsbyrefids.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdKey(
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

export function useGetApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdKey(args)
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
                (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
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
          client.api.catalog_system.pub.specification.field.listByCategoryId[':categoryId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdKey(args)
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
                (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
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
          client.api.catalog_system.pub.specification.field.listByCategoryId[':categoryId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdKey(
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

export function useGetApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdKey(args)
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
                (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
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
          client.api.catalog_system.pub.specification.field.listTreeByCategoryId[
            ':categoryId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdKey(args)
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
                (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
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
          client.api.catalog_system.pub.specification.field.listTreeByCategoryId[
            ':categoryId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubSpecificationFieldGetFieldIdKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/specification/fieldGet/:fieldId', keyArgs] as const
}

export function useGetApiCatalogSystemPubSpecificationFieldGetFieldId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubSpecificationFieldGetFieldIdKey(args)
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
                (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
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
          client.api.catalog_system.pub.specification.fieldGet[':fieldId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubSpecificationFieldGetFieldId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubSpecificationFieldGetFieldIdKey(args)
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
                (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
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
          client.api.catalog_system.pub.specification.fieldGet[':fieldId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubSpecificationFieldvalueFieldIdKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/specification/fieldvalue/:fieldId', keyArgs] as const
}

export function useGetApiCatalogSystemPubSpecificationFieldvalueFieldId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubSpecificationFieldvalueFieldIdKey(args)
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
                (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
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
          client.api.catalog_system.pub.specification.fieldvalue[':fieldId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubSpecificationFieldvalueFieldId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubSpecificationFieldvalueFieldIdKey(args)
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
                (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
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
          client.api.catalog_system.pub.specification.fieldvalue[':fieldId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPubSpecificationGroupGetGroupIdKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pub/specification/groupGet/:groupId', keyArgs] as const
}

export function useGetApiCatalogSystemPubSpecificationGroupGetGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubSpecificationGroupGetGroupIdKey(args)
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
                (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
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
          client.api.catalog_system.pub.specification.groupGet[':groupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPubSpecificationGroupGetGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPubSpecificationGroupGetGroupIdKey(args)
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
                (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
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
          client.api.catalog_system.pub.specification.groupGet[':groupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtBrandListKey(
  args: InferRequestType<typeof client.api.catalog_system.pvt.brand.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/brand/list', keyArgs] as const
}

export function useGetApiCatalogSystemPvtBrandList<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.brand.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.list.$get>>
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
        ? getGetApiCatalogSystemPvtBrandListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.catalog_system.pvt.brand.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtBrandList<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.brand.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.list.$get>>
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
        ? getGetApiCatalogSystemPvtBrandListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.catalog_system.pvt.brand.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtBrandPagedlistKey(
  args: InferRequestType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/brand/pagedlist', keyArgs] as const
}

export function useGetApiCatalogSystemPvtBrandPagedlist<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>>
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
        ? getGetApiCatalogSystemPvtBrandPagedlistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog_system.pvt.brand.pagedlist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtBrandPagedlist<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>>
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
        ? getGetApiCatalogSystemPvtBrandPagedlistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog_system.pvt.brand.pagedlist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtBrandBrandIdKey(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/brand/:brandId', keyArgs] as const
}

export function useGetApiCatalogSystemPvtBrandBrandId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>>
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
        ? getGetApiCatalogSystemPvtBrandBrandIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog_system.pvt.brand[':brandId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtBrandBrandId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>>
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
        ? getGetApiCatalogSystemPvtBrandBrandIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog_system.pvt.brand[':brandId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtCollectionSearchKey(
  args: InferRequestType<typeof client.api.catalog_system.pvt.collection.search.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/collection/search', keyArgs] as const
}

export function useGetApiCatalogSystemPvtCollectionSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.collection.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.collection.search.$get>>
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
        ? getGetApiCatalogSystemPvtCollectionSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.collection.search.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog_system.pvt.collection.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtCollectionSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.collection.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.collection.search.$get>>
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
        ? getGetApiCatalogSystemPvtCollectionSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.collection.search.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog_system.pvt.collection.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtCollectionSearchSearchTermsKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/collection/search/:searchTerms', keyArgs] as const
}

export function useGetApiCatalogSystemPvtCollectionSearchSearchTerms<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtCollectionSearchSearchTermsKey(args)
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
                (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
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
          client.api.catalog_system.pvt.collection.search[':searchTerms'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtCollectionSearchSearchTerms<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtCollectionSearchSearchTermsKey(args)
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
                (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
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
          client.api.catalog_system.pvt.collection.search[':searchTerms'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtCommercialconditionListKey(
  args: InferRequestType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/commercialcondition/list', keyArgs] as const
}

export function useGetApiCatalogSystemPvtCommercialconditionList<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>>
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
        ? getGetApiCatalogSystemPvtCommercialconditionListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pvt.commercialcondition.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtCommercialconditionList<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>>
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
        ? getGetApiCatalogSystemPvtCommercialconditionListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pvt.commercialcondition.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtCommercialconditionCommercialConditionIdKey(
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

export function useGetApiCatalogSystemPvtCommercialconditionCommercialConditionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtCommercialconditionCommercialConditionIdKey(args)
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
                (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
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
          client.api.catalog_system.pvt.commercialcondition[':commercialConditionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtCommercialconditionCommercialConditionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtCommercialconditionCommercialConditionIdKey(args)
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
                (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
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
          client.api.catalog_system.pvt.commercialcondition[':commercialConditionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtProductsGetIndexedInfoProductIdKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/products/GetIndexedInfo/:productId', keyArgs] as const
}

export function useGetApiCatalogSystemPvtProductsGetIndexedInfoProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtProductsGetIndexedInfoProductIdKey(args)
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
                (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
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
          client.api.catalog_system.pvt.products.GetIndexedInfo[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtProductsGetIndexedInfoProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtProductsGetIndexedInfoProductIdKey(args)
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
                (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
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
          client.api.catalog_system.pvt.products.GetIndexedInfo[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtProductsGetProductAndSkuIdsKey(
  args: InferRequestType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/products/GetProductAndSkuIds', keyArgs] as const
}

export function useGetApiCatalogSystemPvtProductsGetProductAndSkuIds<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>
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
        ? getGetApiCatalogSystemPvtProductsGetProductAndSkuIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtProductsGetProductAndSkuIds<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>
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
        ? getGetApiCatalogSystemPvtProductsGetProductAndSkuIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtProductsProductgetProductIdKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/products/productget/:productId', keyArgs] as const
}

export function useGetApiCatalogSystemPvtProductsProductgetProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtProductsProductgetProductIdKey(args)
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
                (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
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
          client.api.catalog_system.pvt.products.productget[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtProductsProductgetProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtProductsProductgetProductIdKey(args)
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
                (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
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
          client.api.catalog_system.pvt.products.productget[':productId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtProductsProductgetbyrefidRefIdKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/products/productgetbyrefid/:refId', keyArgs] as const
}

export function useGetApiCatalogSystemPvtProductsProductgetbyrefidRefId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtProductsProductgetbyrefidRefIdKey(args)
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
                (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
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
          client.api.catalog_system.pvt.products.productgetbyrefid[':refId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtProductsProductgetbyrefidRefId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtProductsProductgetbyrefidRefIdKey(args)
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
                (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
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
          client.api.catalog_system.pvt.products.productgetbyrefid[':refId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtProductsProductIdSpecificationKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/products/:productId/specification', keyArgs] as const
}

export function useGetApiCatalogSystemPvtProductsProductIdSpecification<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtProductsProductIdSpecificationKey(args)
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
                (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
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
          client.api.catalog_system.pvt.products[':productId'].specification.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtProductsProductIdSpecification<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtProductsProductIdSpecificationKey(args)
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
                (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
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
          client.api.catalog_system.pvt.products[':productId'].specification.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiCatalogSystemPvtProductsProductIdSpecificationKey() {
  return ['api', '/api/catalog_system/pvt/products/:productId/specification', 'POST'] as const
}

export function usePostApiCatalogSystemPvtProductsProductIdSpecification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogSystemPvtProductsProductIdSpecificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog_system.pvt.products[':productId'].specification.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtSaleschannelListKey(
  args: InferRequestType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/saleschannel/list', keyArgs] as const
}

export function useGetApiCatalogSystemPvtSaleschannelList<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>>
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
        ? getGetApiCatalogSystemPvtSaleschannelListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog_system.pvt.saleschannel.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtSaleschannelList<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>>
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
        ? getGetApiCatalogSystemPvtSaleschannelListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog_system.pvt.saleschannel.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogSystemPvtSellerKey() {
  return ['api', '/api/catalog_system/pvt/seller', 'PUT'] as const
}

export function usePutApiCatalogSystemPvtSeller<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog_system.pvt.seller.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogSystemPvtSellerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog_system.pvt.seller.$put> },
      ) => parseResponse(client.api.catalog_system.pvt.seller.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogSystemPvtSellerKey() {
  return ['api', '/api/catalog_system/pvt/seller', 'POST'] as const
}

export function usePostApiCatalogSystemPvtSeller<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog_system.pvt.seller.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogSystemPvtSellerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.catalog_system.pvt.seller.$post> },
      ) => parseResponse(client.api.catalog_system.pvt.seller.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtSellerListKey(
  args: InferRequestType<typeof client.api.catalog_system.pvt.seller.list.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/seller/list', keyArgs] as const
}

export function useGetApiCatalogSystemPvtSellerList<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.seller.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.list.$get>>
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
        ? getGetApiCatalogSystemPvtSellerListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog_system.pvt.seller.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtSellerList<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.seller.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.list.$get>>
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
        ? getGetApiCatalogSystemPvtSellerListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.seller.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog_system.pvt.seller.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtSellerSellerIdKey(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/seller/:sellerId', keyArgs] as const
}

export function useGetApiCatalogSystemPvtSellerSellerId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>>
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
        ? getGetApiCatalogSystemPvtSellerSellerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog_system.pvt.seller[':sellerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtSellerSellerId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>>
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
        ? getGetApiCatalogSystemPvtSellerSellerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog_system.pvt.seller[':sellerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtSellersSellerIdKey(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/sellers/:sellerId', keyArgs] as const
}

export function useGetApiCatalogSystemPvtSellersSellerId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>>
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
        ? getGetApiCatalogSystemPvtSellersSellerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog_system.pvt.sellers[':sellerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtSellersSellerId<TError = unknown>(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>>
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
        ? getGetApiCatalogSystemPvtSellersSellerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.catalog_system.pvt.sellers[':sellerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiCatalogSystemPvtSkuAssociateattachmentsKey() {
  return ['api', '/api/catalog_system/pvt/sku/associateattachments', 'POST'] as const
}

export function usePostApiCatalogSystemPvtSkuAssociateattachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.sku.associateattachments.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog_system.pvt.sku.associateattachments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogSystemPvtSkuAssociateattachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.api.catalog_system.pvt.sku.associateattachments.$post>
        },
      ) =>
        parseResponse(
          client.api.catalog_system.pvt.sku.associateattachments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtSkuComplementsParentSkuIdTypeKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/sku/complements/:parentSkuId/:type', keyArgs] as const
}

export function useGetApiCatalogSystemPvtSkuComplementsParentSkuIdType<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSkuComplementsParentSkuIdTypeKey(args)
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
                (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
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
          client.api.catalog_system.pvt.sku.complements[':parentSkuId'][':type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtSkuComplementsParentSkuIdType<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSkuComplementsParentSkuIdTypeKey(args)
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
                (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
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
          client.api.catalog_system.pvt.sku.complements[':parentSkuId'][':type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdKey(
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

export function useGetApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdKey(args)
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
                (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
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
          client.api.catalog_system.pvt.sku.stockkeepingunitByProductId[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdKey(args)
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
                (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
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
          client.api.catalog_system.pvt.sku.stockkeepingunitByProductId[':productId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdKey(
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

export function useGetApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdKey(args)
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
                (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
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
          client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId[':alternateId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdKey(args)
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
                (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
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
          client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId[':alternateId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtSkuStockkeepingunitbyeanEanKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/sku/stockkeepingunitbyean/:ean', keyArgs] as const
}

export function useGetApiCatalogSystemPvtSkuStockkeepingunitbyeanEan<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSkuStockkeepingunitbyeanEanKey(args)
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
                (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
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
          client.api.catalog_system.pvt.sku.stockkeepingunitbyean[':ean'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtSkuStockkeepingunitbyeanEan<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSkuStockkeepingunitbyeanEanKey(args)
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
                (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
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
          client.api.catalog_system.pvt.sku.stockkeepingunitbyean[':ean'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/sku/stockkeepingunitbyid/:skuId', keyArgs] as const
}

export function useGetApiCatalogSystemPvtSkuStockkeepingunitbyidSkuId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdKey(args)
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
                (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
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
          client.api.catalog_system.pvt.sku.stockkeepingunitbyid[':skuId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtSkuStockkeepingunitbyidSkuId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdKey(args)
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
                (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
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
          client.api.catalog_system.pvt.sku.stockkeepingunitbyid[':skuId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/:refId', keyArgs] as const
}

export function useGetApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdKey(args)
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
                (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
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
          client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid[':refId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdKey(args)
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
                (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
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
          client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid[':refId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtSkuStockkeepingunitidsKey(
  args: InferRequestType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/sku/stockkeepingunitids', keyArgs] as const
}

export function useGetApiCatalogSystemPvtSkuStockkeepingunitids<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>>
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
        ? getGetApiCatalogSystemPvtSkuStockkeepingunitidsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pvt.sku.stockkeepingunitids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtSkuStockkeepingunitids<TError = unknown>(
  args: InferRequestType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>>
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
        ? getGetApiCatalogSystemPvtSkuStockkeepingunitidsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.catalog_system.pvt.sku.stockkeepingunitids.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelKey(
  args: InferRequestType<
    typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/sku/stockkeepingunitidsbysaleschannel', keyArgs] as const
}

export function useGetApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannel<TError = unknown>(
  args: InferRequestType<
    typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelKey(args)
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
                typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
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
          client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannel<
  TError = unknown,
>(
  args: InferRequestType<
    typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelKey(args)
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
                typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
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
          client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiCatalogSystemPvtSkusellerChangenotificationSellerIdSellerSkuIdKey() {
  return [
    'api',
    '/api/catalog_system/pvt/skuseller/changenotification/:sellerId/:sellerSkuId',
    'POST',
  ] as const
}

export function usePostApiCatalogSystemPvtSkusellerChangenotificationSellerIdSellerSkuId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog_system.pvt.skuseller.changenotification)[':sellerId'][':sellerSkuId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiCatalogSystemPvtSkusellerChangenotificationSellerIdSellerSkuIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog_system.pvt.skuseller.changenotification)[':sellerId'][':sellerSkuId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog_system.pvt.skuseller.changenotification[':sellerId'][
            ':sellerSkuId'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogSystemPvtSkusellerChangenotificationSkuIdKey() {
  return ['api', '/api/catalog_system/pvt/skuseller/changenotification/:skuId', 'POST'] as const
}

export function usePostApiCatalogSystemPvtSkusellerChangenotificationSkuId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog_system.pvt.skuseller.changenotification)[':skuId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogSystemPvtSkusellerChangenotificationSkuIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog_system.pvt.skuseller.changenotification)[':skuId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog_system.pvt.skuseller.changenotification[':skuId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogSystemPvtSkusellerRemoveSellerIdSellerSkuIdKey() {
  return ['api', '/api/catalog_system/pvt/skuseller/remove/:sellerId/:sellerSkuId', 'POST'] as const
}

export function usePostApiCatalogSystemPvtSkusellerRemoveSellerIdSellerSkuId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.catalog_system.pvt.skuseller.remove)[':sellerId'][':sellerSkuId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogSystemPvtSkusellerRemoveSellerIdSellerSkuIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.catalog_system.pvt.skuseller.remove)[':sellerId'][':sellerSkuId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.catalog_system.pvt.skuseller.remove[':sellerId'][':sellerSkuId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/skuseller/:sellerId/:sellerSkuId', keyArgs] as const
}

export function useGetApiCatalogSystemPvtSkusellerSellerIdSellerSkuId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdKey(args)
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
                (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
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
          client.api.catalog_system.pvt.skuseller[':sellerId'][':sellerSkuId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtSkusellerSellerIdSellerSkuId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdKey(args)
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
                (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
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
          client.api.catalog_system.pvt.skuseller[':sellerId'][':sellerSkuId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiCatalogSystemPvtSpecificationFieldKey() {
  return ['api', '/api/catalog_system/pvt/specification/field', 'PUT'] as const
}

export function usePutApiCatalogSystemPvtSpecificationField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.specification.field.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog_system.pvt.specification.field.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogSystemPvtSpecificationFieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.api.catalog_system.pvt.specification.field.$put> },
      ) =>
        parseResponse(client.api.catalog_system.pvt.specification.field.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogSystemPvtSpecificationFieldKey() {
  return ['api', '/api/catalog_system/pvt/specification/field', 'POST'] as const
}

export function usePostApiCatalogSystemPvtSpecificationField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.specification.field.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog_system.pvt.specification.field.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogSystemPvtSpecificationFieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.api.catalog_system.pvt.specification.field.$post>
        },
      ) =>
        parseResponse(client.api.catalog_system.pvt.specification.field.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiCatalogSystemPvtSpecificationFieldValueKey() {
  return ['api', '/api/catalog_system/pvt/specification/fieldValue', 'PUT'] as const
}

export function usePutApiCatalogSystemPvtSpecificationFieldValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.specification.fieldValue.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog_system.pvt.specification.fieldValue.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiCatalogSystemPvtSpecificationFieldValueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.api.catalog_system.pvt.specification.fieldValue.$put>
        },
      ) =>
        parseResponse(
          client.api.catalog_system.pvt.specification.fieldValue.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCatalogSystemPvtSpecificationFieldValueKey() {
  return ['api', '/api/catalog_system/pvt/specification/fieldValue', 'POST'] as const
}

export function usePostApiCatalogSystemPvtSpecificationFieldValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.catalog_system.pvt.specification.fieldValue.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.catalog_system.pvt.specification.fieldValue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCatalogSystemPvtSpecificationFieldValueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.api.catalog_system.pvt.specification.fieldValue.$post>
        },
      ) =>
        parseResponse(
          client.api.catalog_system.pvt.specification.fieldValue.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtSpecificationFieldValueFieldValueIdKey(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/catalog_system/pvt/specification/fieldValue/:fieldValueId', keyArgs] as const
}

export function useGetApiCatalogSystemPvtSpecificationFieldValueFieldValueId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSpecificationFieldValueFieldValueIdKey(args)
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
                (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
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
          client.api.catalog_system.pvt.specification.fieldValue[':fieldValueId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtSpecificationFieldValueFieldValueId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSpecificationFieldValueFieldValueIdKey(args)
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
                (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
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
          client.api.catalog_system.pvt.specification.fieldValue[':fieldValueId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdKey(
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

export function useGetApiCatalogSystemPvtSpecificationGroupbycategoryCategoryId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdKey(args)
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
                (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
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
          client.api.catalog_system.pvt.specification.groupbycategory[':categoryId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCatalogSystemPvtSpecificationGroupbycategoryCategoryId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdKey(args)
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
                (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
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
          client.api.catalog_system.pvt.specification.groupbycategory[':categoryId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
