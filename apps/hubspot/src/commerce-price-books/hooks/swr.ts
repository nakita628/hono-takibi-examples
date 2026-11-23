import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCommerceKey() {
  return ['commerce'] as const
}

export function getGetCommercePriceBooks202609PriceBooksKey(
  args: InferRequestType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$get']>,
) {
  return ['commerce', '/commerce/price-books/2026-09/price-books', args] as const
}

export function useGetCommercePriceBooks202609PriceBooks<TError = unknown>(
  args: InferRequestType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$get']>
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
        ? getGetCommercePriceBooks202609PriceBooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.commerce['price-books']['2026-09']['price-books'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommercePriceBooks202609PriceBooks<TError = unknown>(
  args: InferRequestType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$get']>
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
        ? getGetCommercePriceBooks202609PriceBooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.commerce['price-books']['2026-09']['price-books'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCommercePriceBooks202609PriceBooksKey() {
  return ['commerce', '/commerce/price-books/2026-09/price-books', 'POST'] as const
}

export function usePostCommercePriceBooks202609PriceBooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommercePriceBooks202609PriceBooksKey()
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
            (typeof client.commerce)['price-books']['2026-09']['price-books']['$post']
          >
        },
      ) =>
        parseResponse(
          client.commerce['price-books']['2026-09']['price-books'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCommercePriceBooks202609PriceBooksPriceBookIdKey(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
  >,
) {
  return ['commerce', '/commerce/price-books/2026-09/price-books/:priceBookId', args] as const
}

export function useGetCommercePriceBooks202609PriceBooksPriceBookId<TError = unknown>(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
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
        ? getGetCommercePriceBooks202609PriceBooksPriceBookIdKey(args)
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
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
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
          client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommercePriceBooks202609PriceBooksPriceBookId<TError = unknown>(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
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
        ? getGetCommercePriceBooks202609PriceBooksPriceBookIdKey(args)
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
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
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
          client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCommercePriceBooks202609PriceBooksPriceBookIdKey() {
  return ['commerce', '/commerce/price-books/2026-09/price-books/:priceBookId', 'DELETE'] as const
}

export function useDeleteCommercePriceBooks202609PriceBooksPriceBookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCommercePriceBooks202609PriceBooksPriceBookIdKey()
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
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCommercePriceBooks202609PriceBooksPriceBookIdKey() {
  return ['commerce', '/commerce/price-books/2026-09/price-books/:priceBookId', 'PATCH'] as const
}

export function usePatchCommercePriceBooks202609PriceBooksPriceBookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCommercePriceBooks202609PriceBooksPriceBookIdKey()
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
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdActivateKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/activate',
    'POST',
  ] as const
}

export function usePostCommercePriceBooks202609PriceBooksPriceBookIdActivate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['activate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommercePriceBooks202609PriceBooksPriceBookIdActivateKey()
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
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].activate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdDeactivateKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/deactivate',
    'POST',
  ] as const
}

export function usePostCommercePriceBooks202609PriceBooksPriceBookIdDeactivate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['deactivate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['deactivate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommercePriceBooks202609PriceBooksPriceBookIdDeactivateKey()
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
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['deactivate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].deactivate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCommercePriceBooks202609PriceBooksPriceBookIdItemsKey(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
  >,
) {
  return ['commerce', '/commerce/price-books/2026-09/price-books/:priceBookId/items', args] as const
}

export function useGetCommercePriceBooks202609PriceBooksPriceBookIdItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
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
        ? getGetCommercePriceBooks202609PriceBooksPriceBookIdItemsKey(args)
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
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
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
          client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].items.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommercePriceBooks202609PriceBooksPriceBookIdItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
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
        ? getGetCommercePriceBooks202609PriceBooksPriceBookIdItemsKey(args)
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
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
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
          client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].items.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/items',
    'POST',
  ] as const
}

export function usePostCommercePriceBooks202609PriceBooksPriceBookIdItems<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsKey()
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
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].items.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchArchiveKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/items/batch/archive',
    'POST',
  ] as const
}

export function usePostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchArchive<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchArchiveKey()
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
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.commerce['price-books']['2026-09']['price-books'][
            ':priceBookId'
          ].items.batch.archive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchCreateKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/items/batch/create',
    'POST',
  ] as const
}

export function usePostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchCreate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchCreateKey()
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
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.commerce['price-books']['2026-09']['price-books'][
            ':priceBookId'
          ].items.batch.create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchUpdateKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/items/batch/update',
    'POST',
  ] as const
}

export function usePostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchUpdate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchUpdateKey()
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
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.commerce['price-books']['2026-09']['price-books'][
            ':priceBookId'
          ].items.batch.update.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdKey(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
  >,
) {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/items/:priceBookItemId',
    args,
  ] as const
}

export function useGetCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
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
        ? getGetCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdKey(args)
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
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
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
          client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].items[
            ':priceBookItemId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
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
        ? getGetCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdKey(args)
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
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
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
          client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].items[
            ':priceBookItemId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/items/:priceBookItemId',
    'DELETE',
  ] as const
}

export function useDeleteCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdKey()
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
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].items[
            ':priceBookItemId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/items/:priceBookItemId',
    'PATCH',
  ] as const
}

export function usePatchCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdKey()
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
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].items[
            ':priceBookItemId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdValidateKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/validate',
    'POST',
  ] as const
}

export function usePostCommercePriceBooks202609PriceBooksPriceBookIdValidate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['validate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommercePriceBooks202609PriceBooksPriceBookIdValidateKey()
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
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['validate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].validate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
