import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGiftcardsKey() {
  return ['giftcards'] as const
}

export function getPostGiftcardsKey() {
  return ['giftcards', '/giftcards', 'POST'] as const
}

export function usePostGiftcards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcards.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.giftcards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGiftcardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.giftcards.$post> }) =>
        parseResponse(client.giftcards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGiftcardsSearchKey() {
  return ['giftcards', '/giftcards/_search', 'POST'] as const
}

export function usePostGiftcardsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcards._search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.giftcards._search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGiftcardsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.giftcards._search.$post> }) =>
        parseResponse(client.giftcards._search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGiftcardsGiftCardIDKey(
  args: InferRequestType<(typeof client.giftcards)[':giftCardID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['giftcards', '/giftcards/:giftCardID', keyArgs] as const
}

export function useGetGiftcardsGiftCardID<TError = unknown>(
  args: InferRequestType<(typeof client.giftcards)[':giftCardID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['$get']>>
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
        ? getGetGiftcardsGiftCardIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.giftcards[':giftCardID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGiftcardsGiftCardID<TError = unknown>(
  args: InferRequestType<(typeof client.giftcards)[':giftCardID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['$get']>>
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
        ? getGetGiftcardsGiftCardIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.giftcards[':giftCardID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGiftcardsGiftCardIDTransactionsKey(
  args: InferRequestType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['giftcards', '/giftcards/:giftCardID/transactions', keyArgs] as const
}

export function useGetGiftcardsGiftCardIDTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>>
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
        ? getGetGiftcardsGiftCardIDTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.giftcards[':giftCardID'].transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGiftcardsGiftCardIDTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>>
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
        ? getGetGiftcardsGiftCardIDTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.giftcards[':giftCardID'].transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGiftcardsGiftCardIDTransactionsKey() {
  return ['giftcards', '/giftcards/:giftCardID/transactions', 'POST'] as const
}

export function usePostGiftcardsGiftCardIDTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['transactions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.giftcards)[':giftCardID']['transactions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGiftcardsGiftCardIDTransactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.giftcards)[':giftCardID']['transactions']['$post']>
        },
      ) => parseResponse(client.giftcards[':giftCardID'].transactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGiftcardsGiftCardIDTransactionsTransactionIDKey(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['giftcards', '/giftcards/:giftCardID/transactions/:transactionID', keyArgs] as const
}

export function useGetGiftcardsGiftCardIDTransactionsTransactionID<TError = unknown>(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
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
        ? getGetGiftcardsGiftCardIDTransactionsTransactionIDKey(args)
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
                (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
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
          client.giftcards[':giftCardID'].transactions[':transactionID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGiftcardsGiftCardIDTransactionsTransactionID<TError = unknown>(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
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
        ? getGetGiftcardsGiftCardIDTransactionsTransactionIDKey(args)
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
                (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
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
          client.giftcards[':giftCardID'].transactions[':transactionID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationKey(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcards',
    '/giftcards/:giftCardID/transactions/:transactionID/authorization',
    keyArgs,
  ] as const
}

export function useGetGiftcardsGiftCardIDTransactionsTransactionIDAuthorization<TError = unknown>(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
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
        ? getGetGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationKey(args)
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
                (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
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
          client.giftcards[':giftCardID'].transactions[':transactionID'].authorization.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGiftcardsGiftCardIDTransactionsTransactionIDAuthorization<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
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
        ? getGetGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationKey(args)
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
                (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
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
          client.giftcards[':giftCardID'].transactions[':transactionID'].authorization.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGiftcardsGiftCardIDTransactionsTransactionIDCancellationsKey(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcards',
    '/giftcards/:giftCardID/transactions/:transactionID/cancellations',
    keyArgs,
  ] as const
}

export function useGetGiftcardsGiftCardIDTransactionsTransactionIDCancellations<TError = unknown>(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
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
        ? getGetGiftcardsGiftCardIDTransactionsTransactionIDCancellationsKey(args)
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
                (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
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
          client.giftcards[':giftCardID'].transactions[':transactionID'].cancellations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGiftcardsGiftCardIDTransactionsTransactionIDCancellations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
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
        ? getGetGiftcardsGiftCardIDTransactionsTransactionIDCancellationsKey(args)
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
                (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
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
          client.giftcards[':giftCardID'].transactions[':transactionID'].cancellations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGiftcardsGiftCardIDTransactionsTransactionIDCancellationsKey() {
  return [
    'giftcards',
    '/giftcards/:giftCardID/transactions/:transactionID/cancellations',
    'POST',
  ] as const
}

export function usePostGiftcardsGiftCardIDTransactionsTransactionIDCancellations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGiftcardsGiftCardIDTransactionsTransactionIDCancellationsKey()
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
            (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.giftcards[':giftCardID'].transactions[':transactionID'].cancellations.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGiftcardsGiftCardIDTransactionsTransactionIDSettlementsKey(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcards',
    '/giftcards/:giftCardID/transactions/:transactionID/settlements',
    keyArgs,
  ] as const
}

export function useGetGiftcardsGiftCardIDTransactionsTransactionIDSettlements<TError = unknown>(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
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
        ? getGetGiftcardsGiftCardIDTransactionsTransactionIDSettlementsKey(args)
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
                (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
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
          client.giftcards[':giftCardID'].transactions[':transactionID'].settlements.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGiftcardsGiftCardIDTransactionsTransactionIDSettlements<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
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
        ? getGetGiftcardsGiftCardIDTransactionsTransactionIDSettlementsKey(args)
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
                (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
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
          client.giftcards[':giftCardID'].transactions[':transactionID'].settlements.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGiftcardsGiftCardIDTransactionsTransactionIDSettlementsKey() {
  return [
    'giftcards',
    '/giftcards/:giftCardID/transactions/:transactionID/settlements',
    'POST',
  ] as const
}

export function usePostGiftcardsGiftCardIDTransactionsTransactionIDSettlements<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGiftcardsGiftCardIDTransactionsTransactionIDSettlementsKey()
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
            (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$post']
          >
        },
      ) =>
        parseResponse(
          client.giftcards[':giftCardID'].transactions[':transactionID'].settlements.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
