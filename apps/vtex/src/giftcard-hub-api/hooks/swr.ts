import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGiftcardprovidersKey() {
  return ['giftcardproviders'] as const
}

export function getGetGiftcardprovidersKey(
  args: InferRequestType<typeof client.giftcardproviders.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['giftcardproviders', '/giftcardproviders', keyArgs] as const
}

export function useGetGiftcardproviders<TError = unknown>(
  args: InferRequestType<typeof client.giftcardproviders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>>
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
        ? getGetGiftcardprovidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.giftcardproviders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGiftcardproviders<TError = unknown>(
  args: InferRequestType<typeof client.giftcardproviders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>>
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
        ? getGetGiftcardprovidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.giftcardproviders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGiftcardprovidersGiftCardProviderIDKey() {
  return ['giftcardproviders', '/giftcardproviders/:giftCardProviderID', 'PUT'] as const
}

export function usePutGiftcardprovidersGiftCardProviderID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderID']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGiftcardprovidersGiftCardProviderIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$put']>
        },
      ) => parseResponse(client.giftcardproviders[':giftCardProviderID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGiftcardprovidersGiftCardProviderIDKey() {
  return ['giftcardproviders', '/giftcardproviders/:giftCardProviderID', 'DELETE'] as const
}

export function useDeleteGiftcardprovidersGiftCardProviderID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderID']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGiftcardprovidersGiftCardProviderIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$delete']>
        },
      ) =>
        parseResponse(client.giftcardproviders[':giftCardProviderID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsKey() {
  return ['giftcardproviders', '/giftcardproviders/:giftCardProviderID/giftcards', 'POST'] as const
}

export function usePostGiftcardprovidersGiftCardProviderIDGiftcards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGiftcardprovidersGiftCardProviderIDGiftcardsKey()
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
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['$post']
          >
        },
      ) =>
        parseResponse(
          client.giftcardproviders[':giftCardProviderID'].giftcards.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsSearchKey() {
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/_search',
    'POST',
  ] as const
}

export function usePostGiftcardprovidersGiftCardProviderIDGiftcardsSearch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['_search']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['_search']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGiftcardprovidersGiftCardProviderIDGiftcardsSearchKey()
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
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['_search']['$post']
          >
        },
      ) =>
        parseResponse(
          client.giftcardproviders[':giftCardProviderID'].giftcards._search.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID',
    keyArgs,
  ] as const
}

export function useGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardID<TError = unknown>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
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
        ? getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDKey(args)
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
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
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
          client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
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
        ? getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDKey(args)
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
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
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
          client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions',
    keyArgs,
  ] as const
}

export function useGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
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
        ? getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsKey(args)
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
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
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
          client.giftcardproviders[':giftCardProviderID'].giftcards[
            ':giftCardID'
          ].transactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
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
        ? getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsKey(args)
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
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
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
          client.giftcardproviders[':giftCardProviderID'].giftcards[
            ':giftCardID'
          ].transactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsKey() {
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions',
    'POST',
  ] as const
}

export function usePostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsKey()
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
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.giftcardproviders[':giftCardProviderID'].giftcards[
            ':giftCardID'
          ].transactions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:tId/cancellations',
    keyArgs,
  ] as const
}

export function useGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
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
        ? getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsKey(
            args,
          )
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
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
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
          client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
            ':tId'
          ].cancellations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
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
        ? getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsKey(
            args,
          )
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
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
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
          client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
            ':tId'
          ].cancellations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsKey() {
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:tId/cancellations',
    'POST',
  ] as const
}

export function usePostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsKey()
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
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
            ':tId'
          ].cancellations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:tId/settlements',
    keyArgs,
  ] as const
}

export function useGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlements<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
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
        ? getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsKey(
            args,
          )
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
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
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
          client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
            ':tId'
          ].settlements.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlements<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
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
        ? getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsKey(
            args,
          )
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
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
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
          client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
            ':tId'
          ].settlements.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsKey() {
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:tId/settlements',
    'POST',
  ] as const
}

export function usePostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlements<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsKey()
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
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$post']
          >
        },
      ) =>
        parseResponse(
          client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
            ':tId'
          ].settlements.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:transactionID',
    keyArgs,
  ] as const
}

export function useGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
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
        ? getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDKey(
            args,
          )
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
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
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
          client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
            ':transactionID'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionID<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
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
        ? getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDKey(
            args,
          )
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
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
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
          client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
            ':transactionID'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:transactionID/authorization',
    keyArgs,
  ] as const
}

export function useGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorization<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
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
        ? getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationKey(
            args,
          )
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
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
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
          client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
            ':transactionID'
          ].authorization.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorization<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
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
        ? getGetGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationKey(
            args,
          )
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
                (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
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
          client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
            ':transactionID'
          ].authorization.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGiftcardprovidersGiftCardProviderIdKey(
  args: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['giftcardproviders', '/giftcardproviders/:giftCardProviderId', keyArgs] as const
}

export function useGetGiftcardprovidersGiftCardProviderId<TError = unknown>(
  args: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>>
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
        ? getGetGiftcardprovidersGiftCardProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.giftcardproviders[':giftCardProviderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGiftcardprovidersGiftCardProviderId<TError = unknown>(
  args: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>>
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
        ? getGetGiftcardprovidersGiftCardProviderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.giftcardproviders[':giftCardProviderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
