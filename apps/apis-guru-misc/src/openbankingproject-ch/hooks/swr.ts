import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1AccountsKey(args: InferRequestType<typeof client.v1.accounts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounts', keyArgs] as const
}

export function useGetV1Accounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Accounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounts/:account-id', keyArgs] as const
}

export function useGetV1AccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['$get']>>
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
        ? getGetV1AccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts[':account-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['$get']>>
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
        ? getGetV1AccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts[':account-id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdBalancesKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounts/:account-id/balances', keyArgs] as const
}

export function useGetV1AccountsAccountIdBalances<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>>
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
        ? getGetV1AccountsAccountIdBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account-id'].balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdBalances<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>>
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
        ? getGetV1AccountsAccountIdBalancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account-id'].balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdTransactionsKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounts/:account-id/transactions', keyArgs] as const
}

export function useGetV1AccountsAccountIdTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>>
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
        ? getGetV1AccountsAccountIdTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account-id'].transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>>
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
        ? getGetV1AccountsAccountIdTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account-id'].transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsAccountIdTransactionsTransactionIdKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounts/:account-id/transactions/:transactionId', keyArgs] as const
}

export function useGetV1AccountsAccountIdTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
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
        ? getGetV1AccountsAccountIdTransactionsTransactionIdKey(args)
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
                (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
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
          client.v1.accounts[':account-id'].transactions[':transactionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountIdTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
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
        ? getGetV1AccountsAccountIdTransactionsTransactionIdKey(args)
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
                (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
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
          client.v1.accounts[':account-id'].transactions[':transactionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConsentsKey() {
  return ['v1', '/v1/consents', 'POST'] as const
}

export function usePostV1Consents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.consents.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.consents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConsentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.consents.$post> }) =>
        parseResponse(client.v1.consents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConsentsConsentIdKey(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/consents/:consentId', keyArgs] as const
}

export function useGetV1ConsentsConsentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['$get']>>
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
        ? getGetV1ConsentsConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.consents[':consentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConsentsConsentId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['$get']>>
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
        ? getGetV1ConsentsConsentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.consents[':consentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ConsentsConsentIdKey() {
  return ['v1', '/v1/consents/:consentId', 'DELETE'] as const
}

export function useDeleteV1ConsentsConsentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.consents)[':consentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConsentsConsentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.consents)[':consentId']['$delete']> },
      ) => parseResponse(client.v1.consents[':consentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConsentsConsentIdAuthorisationsKey(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/consents/:consentId/authorisations', keyArgs] as const
}

export function useGetV1ConsentsConsentIdAuthorisations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>>
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
        ? getGetV1ConsentsConsentIdAuthorisationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.consents[':consentId'].authorisations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConsentsConsentIdAuthorisations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>>
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
        ? getGetV1ConsentsConsentIdAuthorisationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.consents[':consentId'].authorisations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConsentsConsentIdAuthorisationsKey() {
  return ['v1', '/v1/consents/:consentId/authorisations', 'POST'] as const
}

export function usePostV1ConsentsConsentIdAuthorisations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['authorisations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.consents)[':consentId']['authorisations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConsentsConsentIdAuthorisationsKey()
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
            (typeof client.v1.consents)[':consentId']['authorisations']['$post']
          >
        },
      ) => parseResponse(client.v1.consents[':consentId'].authorisations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConsentsConsentIdAuthorisationsAuthorisationIdKey(
  args: InferRequestType<
    (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/consents/:consentId/authorisations/:authorisationId', keyArgs] as const
}

export function useGetV1ConsentsConsentIdAuthorisationsAuthorisationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
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
        ? getGetV1ConsentsConsentIdAuthorisationsAuthorisationIdKey(args)
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
                (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
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
          client.v1.consents[':consentId'].authorisations[':authorisationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConsentsConsentIdAuthorisationsAuthorisationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
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
        ? getGetV1ConsentsConsentIdAuthorisationsAuthorisationIdKey(args)
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
                (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
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
          client.v1.consents[':consentId'].authorisations[':authorisationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ConsentsConsentIdAuthorisationsAuthorisationIdKey() {
  return ['v1', '/v1/consents/:consentId/authorisations/:authorisationId', 'PUT'] as const
}

export function usePutV1ConsentsConsentIdAuthorisationsAuthorisationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConsentsConsentIdAuthorisationsAuthorisationIdKey()
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
            (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.consents[':consentId'].authorisations[':authorisationId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConsentsConsentIdStatusKey(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/consents/:consentId/status', keyArgs] as const
}

export function useGetV1ConsentsConsentIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['status']['$get']>>
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
        ? getGetV1ConsentsConsentIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.consents[':consentId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConsentsConsentIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['status']['$get']>>
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
        ? getGetV1ConsentsConsentIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.consents[':consentId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FundsConfirmationsKey() {
  return ['v1', '/v1/funds-confirmations', 'POST'] as const
}

export function usePostV1FundsConfirmations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['funds-confirmations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['funds-confirmations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FundsConfirmationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['funds-confirmations']['$post']> },
      ) => parseResponse(client.v1['funds-confirmations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SigningBasketsKey() {
  return ['v1', '/v1/signing-baskets', 'POST'] as const
}

export function usePostV1SigningBaskets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['signing-baskets']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['signing-baskets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SigningBasketsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['signing-baskets']['$post']> },
      ) => parseResponse(client.v1['signing-baskets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SigningBasketsBasketIdKey(
  args: InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/signing-baskets/:basketId', keyArgs] as const
}

export function useGetV1SigningBasketsBasketId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>>
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
        ? getGetV1SigningBasketsBasketIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['signing-baskets'][':basketId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SigningBasketsBasketId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>>
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
        ? getGetV1SigningBasketsBasketIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['signing-baskets'][':basketId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1SigningBasketsBasketIdKey() {
  return ['v1', '/v1/signing-baskets/:basketId', 'DELETE'] as const
}

export function useDeleteV1SigningBasketsBasketId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SigningBasketsBasketIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['$delete']> },
      ) => parseResponse(client.v1['signing-baskets'][':basketId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SigningBasketsBasketIdAuthorisationsKey(
  args: InferRequestType<
    (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/signing-baskets/:basketId/authorisations', keyArgs] as const
}

export function useGetV1SigningBasketsBasketIdAuthorisations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']
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
        ? getGetV1SigningBasketsBasketIdAuthorisationsKey(args)
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
                (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']
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
          client.v1['signing-baskets'][':basketId'].authorisations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SigningBasketsBasketIdAuthorisations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']
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
        ? getGetV1SigningBasketsBasketIdAuthorisationsKey(args)
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
                (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']
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
          client.v1['signing-baskets'][':basketId'].authorisations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1SigningBasketsBasketIdAuthorisationsKey() {
  return ['v1', '/v1/signing-baskets/:basketId/authorisations', 'POST'] as const
}

export function usePostV1SigningBasketsBasketIdAuthorisations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SigningBasketsBasketIdAuthorisationsKey()
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
            (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['signing-baskets'][':basketId'].authorisations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SigningBasketsBasketIdAuthorisationsAuthorisationIdKey(
  args: InferRequestType<
    (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/signing-baskets/:basketId/authorisations/:authorisationId', keyArgs] as const
}

export function useGetV1SigningBasketsBasketIdAuthorisationsAuthorisationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
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
        ? getGetV1SigningBasketsBasketIdAuthorisationsAuthorisationIdKey(args)
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
                (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
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
          client.v1['signing-baskets'][':basketId'].authorisations[':authorisationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SigningBasketsBasketIdAuthorisationsAuthorisationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
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
        ? getGetV1SigningBasketsBasketIdAuthorisationsAuthorisationIdKey(args)
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
                (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
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
          client.v1['signing-baskets'][':basketId'].authorisations[':authorisationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1SigningBasketsBasketIdAuthorisationsAuthorisationIdKey() {
  return ['v1', '/v1/signing-baskets/:basketId/authorisations/:authorisationId', 'PUT'] as const
}

export function usePutV1SigningBasketsBasketIdAuthorisationsAuthorisationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SigningBasketsBasketIdAuthorisationsAuthorisationIdKey()
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
            (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['signing-baskets'][':basketId'].authorisations[':authorisationId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SigningBasketsBasketIdStatusKey(
  args: InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/signing-baskets/:basketId/status', keyArgs] as const
}

export function useGetV1SigningBasketsBasketIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>
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
        ? getGetV1SigningBasketsBasketIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['signing-baskets'][':basketId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SigningBasketsBasketIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>
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
        ? getGetV1SigningBasketsBasketIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['signing-baskets'][':basketId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentServicePaymentProductKey() {
  return ['v1', '/v1/:payment-service/:payment-product', 'POST'] as const
}

export function usePostV1PaymentServicePaymentProduct<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':payment-service'][':payment-product']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':payment-service'][':payment-product']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentServicePaymentProductKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)[':payment-service'][':payment-product']['$post']>
        },
      ) =>
        parseResponse(client.v1[':payment-service'][':payment-product'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentServicePaymentProductPaymentIdKey(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/:payment-service/:payment-product/:paymentId', keyArgs] as const
}

export function useGetV1PaymentServicePaymentProductPaymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
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
        ? getGetV1PaymentServicePaymentProductPaymentIdKey(args)
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
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
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
          client.v1[':payment-service'][':payment-product'][':paymentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentServicePaymentProductPaymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
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
        ? getGetV1PaymentServicePaymentProductPaymentIdKey(args)
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
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
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
          client.v1[':payment-service'][':payment-product'][':paymentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1PaymentServicePaymentProductPaymentIdKey() {
  return ['v1', '/v1/:payment-service/:payment-product/:paymentId', 'DELETE'] as const
}

export function useDeleteV1PaymentServicePaymentProductPaymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PaymentServicePaymentProductPaymentIdKey()
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
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1[':payment-service'][':payment-product'][':paymentId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentServicePaymentProductPaymentIdAuthorisationsKey(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/:payment-service/:payment-product/:paymentId/authorisations', keyArgs] as const
}

export function useGetV1PaymentServicePaymentProductPaymentIdAuthorisations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
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
        ? getGetV1PaymentServicePaymentProductPaymentIdAuthorisationsKey(args)
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
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
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
          client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentServicePaymentProductPaymentIdAuthorisations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
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
        ? getGetV1PaymentServicePaymentProductPaymentIdAuthorisationsKey(args)
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
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
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
          client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentServicePaymentProductPaymentIdAuthorisationsKey() {
  return ['v1', '/v1/:payment-service/:payment-product/:paymentId/authorisations', 'POST'] as const
}

export function usePostV1PaymentServicePaymentProductPaymentIdAuthorisations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentServicePaymentProductPaymentIdAuthorisationsKey()
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
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdKey(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/:payment-service/:payment-product/:paymentId/authorisations/:authorisationId',
    keyArgs,
  ] as const
}

export function useGetV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
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
        ? getGetV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdKey(args)
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
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
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
          client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations[
            ':authorisationId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
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
        ? getGetV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdKey(args)
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
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
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
          client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations[
            ':authorisationId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdKey() {
  return [
    'v1',
    '/v1/:payment-service/:payment-product/:paymentId/authorisations/:authorisationId',
    'PUT',
  ] as const
}

export function usePutV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdKey()
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
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations[
            ':authorisationId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsKey(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/:payment-service/:payment-product/:paymentId/cancellation-authorisations',
    keyArgs,
  ] as const
}

export function useGetV1PaymentServicePaymentProductPaymentIdCancellationAuthorisations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
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
        ? getGetV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsKey(args)
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
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
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
          client.v1[':payment-service'][':payment-product'][':paymentId'][
            'cancellation-authorisations'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentServicePaymentProductPaymentIdCancellationAuthorisations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
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
        ? getGetV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsKey(args)
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
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
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
          client.v1[':payment-service'][':payment-product'][':paymentId'][
            'cancellation-authorisations'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsKey() {
  return [
    'v1',
    '/v1/:payment-service/:payment-product/:paymentId/cancellation-authorisations',
    'POST',
  ] as const
}

export function usePostV1PaymentServicePaymentProductPaymentIdCancellationAuthorisations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsKey()
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
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1[':payment-service'][':payment-product'][':paymentId'][
            'cancellation-authorisations'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdKey(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/:payment-service/:payment-product/:paymentId/cancellation-authorisations/:authorisationId',
    keyArgs,
  ] as const
}

export function useGetV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
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
        ? getGetV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdKey(
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
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
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
          client.v1[':payment-service'][':payment-product'][':paymentId'][
            'cancellation-authorisations'
          ][':authorisationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
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
        ? getGetV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdKey(
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
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
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
          client.v1[':payment-service'][':payment-product'][':paymentId'][
            'cancellation-authorisations'
          ][':authorisationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdKey() {
  return [
    'v1',
    '/v1/:payment-service/:payment-product/:paymentId/cancellation-authorisations/:authorisationId',
    'PUT',
  ] as const
}

export function usePutV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdKey()
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
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1[':payment-service'][':payment-product'][':paymentId'][
            'cancellation-authorisations'
          ][':authorisationId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentServicePaymentProductPaymentIdStatusKey(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/:payment-service/:payment-product/:paymentId/status', keyArgs] as const
}

export function useGetV1PaymentServicePaymentProductPaymentIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
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
        ? getGetV1PaymentServicePaymentProductPaymentIdStatusKey(args)
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
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
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
          client.v1[':payment-service'][':payment-product'][':paymentId'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentServicePaymentProductPaymentIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
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
        ? getGetV1PaymentServicePaymentProductPaymentIdStatusKey(args)
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
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
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
          client.v1[':payment-service'][':payment-product'][':paymentId'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
