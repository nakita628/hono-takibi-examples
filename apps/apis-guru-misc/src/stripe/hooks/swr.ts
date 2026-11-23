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

export function getGetV1AccountKey(args: InferRequestType<typeof client.v1.account.$get>) {
  return ['v1', '/v1/account', args] as const
}

export function useGetV1Account<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Account<TError = unknown>(
  args: InferRequestType<typeof client.v1.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.account.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountLinksKey() {
  return ['v1', '/v1/account_links', 'POST'] as const
}

export function usePostV1AccountLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.account_links.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.account_links.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.account_links.$post> }) =>
        parseResponse(client.v1.account_links.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsKey(args: InferRequestType<typeof client.v1.accounts.$get>) {
  return ['v1', '/v1/accounts', args] as const
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

export function getPostV1AccountsKey() {
  return ['v1', '/v1/accounts', 'POST'] as const
}

export function usePostV1Accounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.accounts.$post> }) =>
        parseResponse(client.v1.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['$get']>,
) {
  return ['v1', '/v1/accounts/:account', args] as const
}

export function useGetV1AccountsAccount<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':account']['$get']>>>
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
        ? getGetV1AccountsAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':account']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts[':account'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccount<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':account']['$get']>>>
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
        ? getGetV1AccountsAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':account']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts[':account'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountKey() {
  return ['v1', '/v1/accounts/:account', 'POST'] as const
}

export function usePostV1AccountsAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':account']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.accounts)[':account']['$post']> },
      ) => parseResponse(client.v1.accounts[':account'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccountsAccountKey() {
  return ['v1', '/v1/accounts/:account', 'DELETE'] as const
}

export function useDeleteV1AccountsAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccountsAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.accounts)[':account']['$delete']> },
      ) => parseResponse(client.v1.accounts[':account'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AccountsAccountBankAccountsKey() {
  return ['v1', '/v1/accounts/:account/bank_accounts', 'POST'] as const
}

export function usePostV1AccountsAccountBankAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account']['bank_accounts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account']['bank_accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountBankAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.accounts)[':account']['bank_accounts']['$post']>
        },
      ) => parseResponse(client.v1.accounts[':account'].bank_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountBankAccountsIdKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['bank_accounts'][':id']['$get']>,
) {
  return ['v1', '/v1/accounts/:account/bank_accounts/:id', args] as const
}

export function useGetV1AccountsAccountBankAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['bank_accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account']['bank_accounts'][':id']['$get']>
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
        ? getGetV1AccountsAccountBankAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account']['bank_accounts'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.accounts[':account'].bank_accounts[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountBankAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['bank_accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account']['bank_accounts'][':id']['$get']>
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
        ? getGetV1AccountsAccountBankAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account']['bank_accounts'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.accounts[':account'].bank_accounts[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountBankAccountsIdKey() {
  return ['v1', '/v1/accounts/:account/bank_accounts/:id', 'POST'] as const
}

export function usePostV1AccountsAccountBankAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':account']['bank_accounts'][':id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account']['bank_accounts'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountBankAccountsIdKey()
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
            (typeof client.v1.accounts)[':account']['bank_accounts'][':id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':account'].bank_accounts[':id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccountsAccountBankAccountsIdKey() {
  return ['v1', '/v1/accounts/:account/bank_accounts/:id', 'DELETE'] as const
}

export function useDeleteV1AccountsAccountBankAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':account']['bank_accounts'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account']['bank_accounts'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccountsAccountBankAccountsIdKey()
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
            (typeof client.v1.accounts)[':account']['bank_accounts'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':account'].bank_accounts[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountCapabilitiesKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['capabilities']['$get']>,
) {
  return ['v1', '/v1/accounts/:account/capabilities', args] as const
}

export function useGetV1AccountsAccountCapabilities<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['capabilities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account']['capabilities']['$get']>>
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
        ? getGetV1AccountsAccountCapabilitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account']['capabilities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account'].capabilities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountCapabilities<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['capabilities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account']['capabilities']['$get']>>
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
        ? getGetV1AccountsAccountCapabilitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account']['capabilities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account'].capabilities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountsAccountCapabilitiesCapabilityKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account']['capabilities'][':capability']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:account/capabilities/:capability', args] as const
}

export function useGetV1AccountsAccountCapabilitiesCapability<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account']['capabilities'][':capability']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account']['capabilities'][':capability']['$get']
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
        ? getGetV1AccountsAccountCapabilitiesCapabilityKey(args)
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
                (typeof client.v1.accounts)[':account']['capabilities'][':capability']['$get']
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
          client.v1.accounts[':account'].capabilities[':capability'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountCapabilitiesCapability<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account']['capabilities'][':capability']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account']['capabilities'][':capability']['$get']
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
        ? getGetV1AccountsAccountCapabilitiesCapabilityKey(args)
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
                (typeof client.v1.accounts)[':account']['capabilities'][':capability']['$get']
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
          client.v1.accounts[':account'].capabilities[':capability'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountCapabilitiesCapabilityKey() {
  return ['v1', '/v1/accounts/:account/capabilities/:capability', 'POST'] as const
}

export function usePostV1AccountsAccountCapabilitiesCapability<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':account']['capabilities'][':capability']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.accounts)[':account']['capabilities'][':capability']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountCapabilitiesCapabilityKey()
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
            (typeof client.v1.accounts)[':account']['capabilities'][':capability']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':account'].capabilities[':capability'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountExternalAccountsKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['external_accounts']['$get']>,
) {
  return ['v1', '/v1/accounts/:account/external_accounts', args] as const
}

export function useGetV1AccountsAccountExternalAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['external_accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account']['external_accounts']['$get']>
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
        ? getGetV1AccountsAccountExternalAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account']['external_accounts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account'].external_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountExternalAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['external_accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account']['external_accounts']['$get']>
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
        ? getGetV1AccountsAccountExternalAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account']['external_accounts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account'].external_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountExternalAccountsKey() {
  return ['v1', '/v1/accounts/:account/external_accounts', 'POST'] as const
}

export function usePostV1AccountsAccountExternalAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account']['external_accounts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account']['external_accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountExternalAccountsKey()
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
            (typeof client.v1.accounts)[':account']['external_accounts']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.accounts[':account'].external_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountExternalAccountsIdKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account']['external_accounts'][':id']['$get']
  >,
) {
  return ['v1', '/v1/accounts/:account/external_accounts/:id', args] as const
}

export function useGetV1AccountsAccountExternalAccountsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account']['external_accounts'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account']['external_accounts'][':id']['$get']
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
        ? getGetV1AccountsAccountExternalAccountsIdKey(args)
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
                (typeof client.v1.accounts)[':account']['external_accounts'][':id']['$get']
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
          client.v1.accounts[':account'].external_accounts[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountExternalAccountsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account']['external_accounts'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.accounts)[':account']['external_accounts'][':id']['$get']
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
        ? getGetV1AccountsAccountExternalAccountsIdKey(args)
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
                (typeof client.v1.accounts)[':account']['external_accounts'][':id']['$get']
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
          client.v1.accounts[':account'].external_accounts[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountExternalAccountsIdKey() {
  return ['v1', '/v1/accounts/:account/external_accounts/:id', 'POST'] as const
}

export function usePostV1AccountsAccountExternalAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':account']['external_accounts'][':id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account']['external_accounts'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountExternalAccountsIdKey()
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
            (typeof client.v1.accounts)[':account']['external_accounts'][':id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':account'].external_accounts[':id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccountsAccountExternalAccountsIdKey() {
  return ['v1', '/v1/accounts/:account/external_accounts/:id', 'DELETE'] as const
}

export function useDeleteV1AccountsAccountExternalAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':account']['external_accounts'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account']['external_accounts'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccountsAccountExternalAccountsIdKey()
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
            (typeof client.v1.accounts)[':account']['external_accounts'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':account'].external_accounts[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AccountsAccountLoginLinksKey() {
  return ['v1', '/v1/accounts/:account/login_links', 'POST'] as const
}

export function usePostV1AccountsAccountLoginLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account']['login_links']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account']['login_links']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountLoginLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.accounts)[':account']['login_links']['$post']>
        },
      ) => parseResponse(client.v1.accounts[':account'].login_links.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountPeopleKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['people']['$get']>,
) {
  return ['v1', '/v1/accounts/:account/people', args] as const
}

export function useGetV1AccountsAccountPeople<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['people']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account']['people']['$get']>>
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
        ? getGetV1AccountsAccountPeopleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account']['people']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts[':account'].people.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountPeople<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['people']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account']['people']['$get']>>
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
        ? getGetV1AccountsAccountPeopleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account']['people']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts[':account'].people.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountPeopleKey() {
  return ['v1', '/v1/accounts/:account/people', 'POST'] as const
}

export function usePostV1AccountsAccountPeople<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account']['people']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account']['people']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountPeopleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.accounts)[':account']['people']['$post']> },
      ) => parseResponse(client.v1.accounts[':account'].people.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountPeoplePersonKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['people'][':person']['$get']>,
) {
  return ['v1', '/v1/accounts/:account/people/:person', args] as const
}

export function useGetV1AccountsAccountPeoplePerson<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['people'][':person']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account']['people'][':person']['$get']>
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
        ? getGetV1AccountsAccountPeoplePersonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account']['people'][':person']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account'].people[':person'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountPeoplePerson<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['people'][':person']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account']['people'][':person']['$get']>
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
        ? getGetV1AccountsAccountPeoplePersonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account']['people'][':person']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account'].people[':person'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountPeoplePersonKey() {
  return ['v1', '/v1/accounts/:account/people/:person', 'POST'] as const
}

export function usePostV1AccountsAccountPeoplePerson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account']['people'][':person']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account']['people'][':person']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountPeoplePersonKey()
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
            (typeof client.v1.accounts)[':account']['people'][':person']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.accounts[':account'].people[':person'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccountsAccountPeoplePersonKey() {
  return ['v1', '/v1/accounts/:account/people/:person', 'DELETE'] as const
}

export function useDeleteV1AccountsAccountPeoplePerson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':account']['people'][':person']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account']['people'][':person']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccountsAccountPeoplePersonKey()
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
            (typeof client.v1.accounts)[':account']['people'][':person']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.accounts[':account'].people[':person'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountPersonsKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['persons']['$get']>,
) {
  return ['v1', '/v1/accounts/:account/persons', args] as const
}

export function useGetV1AccountsAccountPersons<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['persons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account']['persons']['$get']>>
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
        ? getGetV1AccountsAccountPersonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account']['persons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts[':account'].persons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountPersons<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['persons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account']['persons']['$get']>>
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
        ? getGetV1AccountsAccountPersonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accounts)[':account']['persons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accounts[':account'].persons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountPersonsKey() {
  return ['v1', '/v1/accounts/:account/persons', 'POST'] as const
}

export function usePostV1AccountsAccountPersons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account']['persons']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account']['persons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountPersonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.accounts)[':account']['persons']['$post']> },
      ) => parseResponse(client.v1.accounts[':account'].persons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccountsAccountPersonsPersonKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['persons'][':person']['$get']>,
) {
  return ['v1', '/v1/accounts/:account/persons/:person', args] as const
}

export function useGetV1AccountsAccountPersonsPerson<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['persons'][':person']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account']['persons'][':person']['$get']>
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
        ? getGetV1AccountsAccountPersonsPersonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account']['persons'][':person']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account'].persons[':person'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountsAccountPersonsPerson<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['persons'][':person']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account']['persons'][':person']['$get']>
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
        ? getGetV1AccountsAccountPersonsPersonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.accounts)[':account']['persons'][':person']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.accounts[':account'].persons[':person'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountsAccountPersonsPersonKey() {
  return ['v1', '/v1/accounts/:account/persons/:person', 'POST'] as const
}

export function usePostV1AccountsAccountPersonsPerson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':account']['persons'][':person']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account']['persons'][':person']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountPersonsPersonKey()
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
            (typeof client.v1.accounts)[':account']['persons'][':person']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.accounts[':account'].persons[':person'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccountsAccountPersonsPersonKey() {
  return ['v1', '/v1/accounts/:account/persons/:person', 'DELETE'] as const
}

export function useDeleteV1AccountsAccountPersonsPerson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.accounts)[':account']['persons'][':person']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account']['persons'][':person']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccountsAccountPersonsPersonKey()
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
            (typeof client.v1.accounts)[':account']['persons'][':person']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.accounts[':account'].persons[':person'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1AccountsAccountRejectKey() {
  return ['v1', '/v1/accounts/:account/reject', 'POST'] as const
}

export function usePostV1AccountsAccountReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account']['reject']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accounts)[':account']['reject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountsAccountRejectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.accounts)[':account']['reject']['$post']> },
      ) => parseResponse(client.v1.accounts[':account'].reject.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApplePayDomainsKey(
  args: InferRequestType<typeof client.v1.apple_pay.domains.$get>,
) {
  return ['v1', '/v1/apple_pay/domains', args] as const
}

export function useGetV1ApplePayDomains<TError = unknown>(
  args: InferRequestType<typeof client.v1.apple_pay.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.apple_pay.domains.$get>>>
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
        ? getGetV1ApplePayDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.apple_pay.domains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apple_pay.domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApplePayDomains<TError = unknown>(
  args: InferRequestType<typeof client.v1.apple_pay.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.apple_pay.domains.$get>>>
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
        ? getGetV1ApplePayDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.apple_pay.domains.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apple_pay.domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ApplePayDomainsKey() {
  return ['v1', '/v1/apple_pay/domains', 'POST'] as const
}

export function usePostV1ApplePayDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.apple_pay.domains.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.apple_pay.domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApplePayDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.apple_pay.domains.$post> },
      ) => parseResponse(client.v1.apple_pay.domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApplePayDomainsDomainKey(
  args: InferRequestType<(typeof client.v1.apple_pay.domains)[':domain']['$get']>,
) {
  return ['v1', '/v1/apple_pay/domains/:domain', args] as const
}

export function useGetV1ApplePayDomainsDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apple_pay.domains)[':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apple_pay.domains)[':domain']['$get']>>
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
        ? getGetV1ApplePayDomainsDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apple_pay.domains)[':domain']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apple_pay.domains[':domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApplePayDomainsDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v1.apple_pay.domains)[':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apple_pay.domains)[':domain']['$get']>>
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
        ? getGetV1ApplePayDomainsDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.apple_pay.domains)[':domain']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apple_pay.domains[':domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ApplePayDomainsDomainKey() {
  return ['v1', '/v1/apple_pay/domains/:domain', 'DELETE'] as const
}

export function useDeleteV1ApplePayDomainsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.apple_pay.domains)[':domain']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.apple_pay.domains)[':domain']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ApplePayDomainsDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.apple_pay.domains)[':domain']['$delete']> },
      ) => parseResponse(client.v1.apple_pay.domains[':domain'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApplicationFeesKey(
  args: InferRequestType<typeof client.v1.application_fees.$get>,
) {
  return ['v1', '/v1/application_fees', args] as const
}

export function useGetV1ApplicationFees<TError = unknown>(
  args: InferRequestType<typeof client.v1.application_fees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.application_fees.$get>>>
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
        ? getGetV1ApplicationFeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.application_fees.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.application_fees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApplicationFees<TError = unknown>(
  args: InferRequestType<typeof client.v1.application_fees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.application_fees.$get>>>
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
        ? getGetV1ApplicationFeesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.application_fees.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.application_fees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ApplicationFeesFeeRefundsIdKey(
  args: InferRequestType<(typeof client.v1.application_fees)[':fee']['refunds'][':id']['$get']>,
) {
  return ['v1', '/v1/application_fees/:fee/refunds/:id', args] as const
}

export function useGetV1ApplicationFeesFeeRefundsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.application_fees)[':fee']['refunds'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.application_fees)[':fee']['refunds'][':id']['$get']>
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
        ? getGetV1ApplicationFeesFeeRefundsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.application_fees)[':fee']['refunds'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.application_fees[':fee'].refunds[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApplicationFeesFeeRefundsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.application_fees)[':fee']['refunds'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.application_fees)[':fee']['refunds'][':id']['$get']>
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
        ? getGetV1ApplicationFeesFeeRefundsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.application_fees)[':fee']['refunds'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.application_fees[':fee'].refunds[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ApplicationFeesFeeRefundsIdKey() {
  return ['v1', '/v1/application_fees/:fee/refunds/:id', 'POST'] as const
}

export function usePostV1ApplicationFeesFeeRefundsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.application_fees)[':fee']['refunds'][':id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.application_fees)[':fee']['refunds'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApplicationFeesFeeRefundsIdKey()
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
            (typeof client.v1.application_fees)[':fee']['refunds'][':id']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.application_fees[':fee'].refunds[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApplicationFeesIdKey(
  args: InferRequestType<(typeof client.v1.application_fees)[':id']['$get']>,
) {
  return ['v1', '/v1/application_fees/:id', args] as const
}

export function useGetV1ApplicationFeesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.application_fees)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.application_fees)[':id']['$get']>>
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
        ? getGetV1ApplicationFeesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.application_fees)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.application_fees[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApplicationFeesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.application_fees)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.application_fees)[':id']['$get']>>
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
        ? getGetV1ApplicationFeesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.application_fees)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.application_fees[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ApplicationFeesIdRefundKey() {
  return ['v1', '/v1/application_fees/:id/refund', 'POST'] as const
}

export function usePostV1ApplicationFeesIdRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.application_fees)[':id']['refund']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.application_fees)[':id']['refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApplicationFeesIdRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.application_fees)[':id']['refund']['$post']> },
      ) => parseResponse(client.v1.application_fees[':id'].refund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ApplicationFeesIdRefundsKey(
  args: InferRequestType<(typeof client.v1.application_fees)[':id']['refunds']['$get']>,
) {
  return ['v1', '/v1/application_fees/:id/refunds', args] as const
}

export function useGetV1ApplicationFeesIdRefunds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.application_fees)[':id']['refunds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.application_fees)[':id']['refunds']['$get']>>
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
        ? getGetV1ApplicationFeesIdRefundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.application_fees)[':id']['refunds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.application_fees[':id'].refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ApplicationFeesIdRefunds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.application_fees)[':id']['refunds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.application_fees)[':id']['refunds']['$get']>>
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
        ? getGetV1ApplicationFeesIdRefundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.application_fees)[':id']['refunds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.application_fees[':id'].refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ApplicationFeesIdRefundsKey() {
  return ['v1', '/v1/application_fees/:id/refunds', 'POST'] as const
}

export function usePostV1ApplicationFeesIdRefunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.application_fees)[':id']['refunds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.application_fees)[':id']['refunds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ApplicationFeesIdRefundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.application_fees)[':id']['refunds']['$post']>
        },
      ) => parseResponse(client.v1.application_fees[':id'].refunds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsSecretsKey(args: InferRequestType<typeof client.v1.apps.secrets.$get>) {
  return ['v1', '/v1/apps/secrets', args] as const
}

export function useGetV1AppsSecrets<TError = unknown>(
  args: InferRequestType<typeof client.v1.apps.secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.secrets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AppsSecretsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.secrets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps.secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsSecrets<TError = unknown>(
  args: InferRequestType<typeof client.v1.apps.secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.secrets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1AppsSecretsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.secrets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps.secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AppsSecretsKey() {
  return ['v1', '/v1/apps/secrets', 'POST'] as const
}

export function usePostV1AppsSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.secrets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.apps.secrets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppsSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.apps.secrets.$post> }) =>
        parseResponse(client.v1.apps.secrets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AppsSecretsDeleteKey() {
  return ['v1', '/v1/apps/secrets/delete', 'POST'] as const
}

export function usePostV1AppsSecretsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.secrets.delete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.apps.secrets.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AppsSecretsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.apps.secrets.delete.$post> },
      ) => parseResponse(client.v1.apps.secrets.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AppsSecretsFindKey(
  args: InferRequestType<typeof client.v1.apps.secrets.find.$get>,
) {
  return ['v1', '/v1/apps/secrets/find', args] as const
}

export function useGetV1AppsSecretsFind<TError = unknown>(
  args: InferRequestType<typeof client.v1.apps.secrets.find.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.secrets.find.$get>>>
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
        ? getGetV1AppsSecretsFindKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.secrets.find.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps.secrets.find.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AppsSecretsFind<TError = unknown>(
  args: InferRequestType<typeof client.v1.apps.secrets.find.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.secrets.find.$get>>>
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
        ? getGetV1AppsSecretsFindKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.apps.secrets.find.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.apps.secrets.find.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BalanceKey(args: InferRequestType<typeof client.v1.balance.$get>) {
  return ['v1', '/v1/balance', args] as const
}

export function useGetV1Balance<TError = unknown>(
  args: InferRequestType<typeof client.v1.balance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balance.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BalanceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balance.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.balance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Balance<TError = unknown>(
  args: InferRequestType<typeof client.v1.balance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balance.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BalanceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balance.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.balance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BalanceHistoryKey(
  args: InferRequestType<typeof client.v1.balance.history.$get>,
) {
  return ['v1', '/v1/balance/history', args] as const
}

export function useGetV1BalanceHistory<TError = unknown>(
  args: InferRequestType<typeof client.v1.balance.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balance.history.$get>>>>
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
        ? getGetV1BalanceHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balance.history.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.balance.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BalanceHistory<TError = unknown>(
  args: InferRequestType<typeof client.v1.balance.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balance.history.$get>>>>
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
        ? getGetV1BalanceHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.balance.history.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.balance.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BalanceHistoryIdKey(
  args: InferRequestType<(typeof client.v1.balance.history)[':id']['$get']>,
) {
  return ['v1', '/v1/balance/history/:id', args] as const
}

export function useGetV1BalanceHistoryId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.balance.history)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.balance.history)[':id']['$get']>>
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
        ? getGetV1BalanceHistoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.balance.history)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.balance.history[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BalanceHistoryId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.balance.history)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.balance.history)[':id']['$get']>>
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
        ? getGetV1BalanceHistoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.balance.history)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.balance.history[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BalanceTransactionsKey(
  args: InferRequestType<typeof client.v1.balance_transactions.$get>,
) {
  return ['v1', '/v1/balance_transactions', args] as const
}

export function useGetV1BalanceTransactions<TError = unknown>(
  args: InferRequestType<typeof client.v1.balance_transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.balance_transactions.$get>>>
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
        ? getGetV1BalanceTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.balance_transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.balance_transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BalanceTransactions<TError = unknown>(
  args: InferRequestType<typeof client.v1.balance_transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.balance_transactions.$get>>>
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
        ? getGetV1BalanceTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.balance_transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.balance_transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BalanceTransactionsIdKey(
  args: InferRequestType<(typeof client.v1.balance_transactions)[':id']['$get']>,
) {
  return ['v1', '/v1/balance_transactions/:id', args] as const
}

export function useGetV1BalanceTransactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.balance_transactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.balance_transactions)[':id']['$get']>>
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
        ? getGetV1BalanceTransactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.balance_transactions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.balance_transactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BalanceTransactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.balance_transactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.balance_transactions)[':id']['$get']>>
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
        ? getGetV1BalanceTransactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.balance_transactions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.balance_transactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1BillingPortalConfigurationsKey(
  args: InferRequestType<typeof client.v1.billing_portal.configurations.$get>,
) {
  return ['v1', '/v1/billing_portal/configurations', args] as const
}

export function useGetV1BillingPortalConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.v1.billing_portal.configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.billing_portal.configurations.$get>>
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
        ? getGetV1BillingPortalConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.billing_portal.configurations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.billing_portal.configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BillingPortalConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.v1.billing_portal.configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.billing_portal.configurations.$get>>
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
        ? getGetV1BillingPortalConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.billing_portal.configurations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.billing_portal.configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BillingPortalConfigurationsKey() {
  return ['v1', '/v1/billing_portal/configurations', 'POST'] as const
}

export function usePostV1BillingPortalConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.billing_portal.configurations.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.billing_portal.configurations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingPortalConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.billing_portal.configurations.$post> },
      ) => parseResponse(client.v1.billing_portal.configurations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BillingPortalConfigurationsConfigurationKey(
  args: InferRequestType<
    (typeof client.v1.billing_portal.configurations)[':configuration']['$get']
  >,
) {
  return ['v1', '/v1/billing_portal/configurations/:configuration', args] as const
}

export function useGetV1BillingPortalConfigurationsConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.billing_portal.configurations)[':configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.billing_portal.configurations)[':configuration']['$get']>
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
        ? getGetV1BillingPortalConfigurationsConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.billing_portal.configurations)[':configuration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.billing_portal.configurations[':configuration'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BillingPortalConfigurationsConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.billing_portal.configurations)[':configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.billing_portal.configurations)[':configuration']['$get']>
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
        ? getGetV1BillingPortalConfigurationsConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.billing_portal.configurations)[':configuration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.billing_portal.configurations[':configuration'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1BillingPortalConfigurationsConfigurationKey() {
  return ['v1', '/v1/billing_portal/configurations/:configuration', 'POST'] as const
}

export function usePostV1BillingPortalConfigurationsConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.billing_portal.configurations)[':configuration']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.billing_portal.configurations)[':configuration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingPortalConfigurationsConfigurationKey()
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
            (typeof client.v1.billing_portal.configurations)[':configuration']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.billing_portal.configurations[':configuration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1BillingPortalSessionsKey() {
  return ['v1', '/v1/billing_portal/sessions', 'POST'] as const
}

export function usePostV1BillingPortalSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing_portal.sessions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.billing_portal.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingPortalSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.billing_portal.sessions.$post> },
      ) => parseResponse(client.v1.billing_portal.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ChargesKey(args: InferRequestType<typeof client.v1.charges.$get>) {
  return ['v1', '/v1/charges', args] as const
}

export function useGetV1Charges<TError = unknown>(
  args: InferRequestType<typeof client.v1.charges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.charges.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ChargesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.charges.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.charges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Charges<TError = unknown>(
  args: InferRequestType<typeof client.v1.charges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.charges.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ChargesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.charges.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.charges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ChargesKey() {
  return ['v1', '/v1/charges', 'POST'] as const
}

export function usePostV1Charges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.charges.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.charges.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ChargesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.charges.$post> }) =>
        parseResponse(client.v1.charges.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ChargesSearchKey(
  args: InferRequestType<typeof client.v1.charges.search.$get>,
) {
  return ['v1', '/v1/charges/search', args] as const
}

export function useGetV1ChargesSearch<TError = unknown>(
  args: InferRequestType<typeof client.v1.charges.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.charges.search.$get>>>>
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
        ? getGetV1ChargesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.charges.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.charges.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ChargesSearch<TError = unknown>(
  args: InferRequestType<typeof client.v1.charges.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.charges.search.$get>>>>
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
        ? getGetV1ChargesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.charges.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.charges.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ChargesChargeKey(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['$get']>,
) {
  return ['v1', '/v1/charges/:charge', args] as const
}

export function useGetV1ChargesCharge<TError = unknown>(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.charges)[':charge']['$get']>>>
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
        ? getGetV1ChargesChargeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.charges)[':charge']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.charges[':charge'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ChargesCharge<TError = unknown>(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.charges)[':charge']['$get']>>>
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
        ? getGetV1ChargesChargeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.charges)[':charge']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.charges[':charge'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ChargesChargeKey() {
  return ['v1', '/v1/charges/:charge', 'POST'] as const
}

export function usePostV1ChargesCharge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.charges)[':charge']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.charges)[':charge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ChargesChargeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.charges)[':charge']['$post']> },
      ) => parseResponse(client.v1.charges[':charge'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ChargesChargeCaptureKey() {
  return ['v1', '/v1/charges/:charge/capture', 'POST'] as const
}

export function usePostV1ChargesChargeCapture<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.charges)[':charge']['capture']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.charges)[':charge']['capture']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ChargesChargeCaptureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.charges)[':charge']['capture']['$post']> },
      ) => parseResponse(client.v1.charges[':charge'].capture.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ChargesChargeDisputeKey(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['dispute']['$get']>,
) {
  return ['v1', '/v1/charges/:charge/dispute', args] as const
}

export function useGetV1ChargesChargeDispute<TError = unknown>(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['dispute']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.charges)[':charge']['dispute']['$get']>>
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
        ? getGetV1ChargesChargeDisputeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.charges)[':charge']['dispute']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.charges[':charge'].dispute.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ChargesChargeDispute<TError = unknown>(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['dispute']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.charges)[':charge']['dispute']['$get']>>
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
        ? getGetV1ChargesChargeDisputeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.charges)[':charge']['dispute']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.charges[':charge'].dispute.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ChargesChargeDisputeKey() {
  return ['v1', '/v1/charges/:charge/dispute', 'POST'] as const
}

export function usePostV1ChargesChargeDispute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.charges)[':charge']['dispute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.charges)[':charge']['dispute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ChargesChargeDisputeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.charges)[':charge']['dispute']['$post']> },
      ) => parseResponse(client.v1.charges[':charge'].dispute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ChargesChargeDisputeCloseKey() {
  return ['v1', '/v1/charges/:charge/dispute/close', 'POST'] as const
}

export function usePostV1ChargesChargeDisputeClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.charges)[':charge']['dispute']['close']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.charges)[':charge']['dispute']['close']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ChargesChargeDisputeCloseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.charges)[':charge']['dispute']['close']['$post']>
        },
      ) => parseResponse(client.v1.charges[':charge'].dispute.close.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ChargesChargeRefundKey() {
  return ['v1', '/v1/charges/:charge/refund', 'POST'] as const
}

export function usePostV1ChargesChargeRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.charges)[':charge']['refund']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.charges)[':charge']['refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ChargesChargeRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.charges)[':charge']['refund']['$post']> },
      ) => parseResponse(client.v1.charges[':charge'].refund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ChargesChargeRefundsKey(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['refunds']['$get']>,
) {
  return ['v1', '/v1/charges/:charge/refunds', args] as const
}

export function useGetV1ChargesChargeRefunds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['refunds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.charges)[':charge']['refunds']['$get']>>
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
        ? getGetV1ChargesChargeRefundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.charges)[':charge']['refunds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.charges[':charge'].refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ChargesChargeRefunds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['refunds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.charges)[':charge']['refunds']['$get']>>
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
        ? getGetV1ChargesChargeRefundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.charges)[':charge']['refunds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.charges[':charge'].refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ChargesChargeRefundsKey() {
  return ['v1', '/v1/charges/:charge/refunds', 'POST'] as const
}

export function usePostV1ChargesChargeRefunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.charges)[':charge']['refunds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.charges)[':charge']['refunds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ChargesChargeRefundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.charges)[':charge']['refunds']['$post']> },
      ) => parseResponse(client.v1.charges[':charge'].refunds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ChargesChargeRefundsRefundKey(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['refunds'][':refund']['$get']>,
) {
  return ['v1', '/v1/charges/:charge/refunds/:refund', args] as const
}

export function useGetV1ChargesChargeRefundsRefund<TError = unknown>(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['refunds'][':refund']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.charges)[':charge']['refunds'][':refund']['$get']>>
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
        ? getGetV1ChargesChargeRefundsRefundKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.charges)[':charge']['refunds'][':refund']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.charges[':charge'].refunds[':refund'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ChargesChargeRefundsRefund<TError = unknown>(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['refunds'][':refund']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.charges)[':charge']['refunds'][':refund']['$get']>>
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
        ? getGetV1ChargesChargeRefundsRefundKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.charges)[':charge']['refunds'][':refund']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.charges[':charge'].refunds[':refund'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ChargesChargeRefundsRefundKey() {
  return ['v1', '/v1/charges/:charge/refunds/:refund', 'POST'] as const
}

export function usePostV1ChargesChargeRefundsRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.charges)[':charge']['refunds'][':refund']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.charges)[':charge']['refunds'][':refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ChargesChargeRefundsRefundKey()
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
            (typeof client.v1.charges)[':charge']['refunds'][':refund']['$post']
          >
        },
      ) => parseResponse(client.v1.charges[':charge'].refunds[':refund'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CheckoutSessionsKey(
  args: InferRequestType<typeof client.v1.checkout.sessions.$get>,
) {
  return ['v1', '/v1/checkout/sessions', args] as const
}

export function useGetV1CheckoutSessions<TError = unknown>(
  args: InferRequestType<typeof client.v1.checkout.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.checkout.sessions.$get>>>
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
        ? getGetV1CheckoutSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.checkout.sessions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.checkout.sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CheckoutSessions<TError = unknown>(
  args: InferRequestType<typeof client.v1.checkout.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.checkout.sessions.$get>>>
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
        ? getGetV1CheckoutSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.checkout.sessions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.checkout.sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CheckoutSessionsKey() {
  return ['v1', '/v1/checkout/sessions', 'POST'] as const
}

export function usePostV1CheckoutSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.checkout.sessions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.checkout.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CheckoutSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.checkout.sessions.$post> },
      ) => parseResponse(client.v1.checkout.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CheckoutSessionsSessionKey(
  args: InferRequestType<(typeof client.v1.checkout.sessions)[':session']['$get']>,
) {
  return ['v1', '/v1/checkout/sessions/:session', args] as const
}

export function useGetV1CheckoutSessionsSession<TError = unknown>(
  args: InferRequestType<(typeof client.v1.checkout.sessions)[':session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.checkout.sessions)[':session']['$get']>>
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
        ? getGetV1CheckoutSessionsSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.checkout.sessions)[':session']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.checkout.sessions[':session'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CheckoutSessionsSession<TError = unknown>(
  args: InferRequestType<(typeof client.v1.checkout.sessions)[':session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.checkout.sessions)[':session']['$get']>>
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
        ? getGetV1CheckoutSessionsSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.checkout.sessions)[':session']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.checkout.sessions[':session'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CheckoutSessionsSessionExpireKey() {
  return ['v1', '/v1/checkout/sessions/:session/expire', 'POST'] as const
}

export function usePostV1CheckoutSessionsSessionExpire<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.checkout.sessions)[':session']['expire']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.checkout.sessions)[':session']['expire']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CheckoutSessionsSessionExpireKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.checkout.sessions)[':session']['expire']['$post']>
        },
      ) => parseResponse(client.v1.checkout.sessions[':session'].expire.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CheckoutSessionsSessionLineItemsKey(
  args: InferRequestType<(typeof client.v1.checkout.sessions)[':session']['line_items']['$get']>,
) {
  return ['v1', '/v1/checkout/sessions/:session/line_items', args] as const
}

export function useGetV1CheckoutSessionsSessionLineItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1.checkout.sessions)[':session']['line_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.checkout.sessions)[':session']['line_items']['$get']>
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
        ? getGetV1CheckoutSessionsSessionLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.checkout.sessions)[':session']['line_items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.checkout.sessions[':session'].line_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CheckoutSessionsSessionLineItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1.checkout.sessions)[':session']['line_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.checkout.sessions)[':session']['line_items']['$get']>
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
        ? getGetV1CheckoutSessionsSessionLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.checkout.sessions)[':session']['line_items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.checkout.sessions[':session'].line_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CountrySpecsKey(
  args: InferRequestType<typeof client.v1.country_specs.$get>,
) {
  return ['v1', '/v1/country_specs', args] as const
}

export function useGetV1CountrySpecs<TError = unknown>(
  args: InferRequestType<typeof client.v1.country_specs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.country_specs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CountrySpecsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.country_specs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.country_specs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CountrySpecs<TError = unknown>(
  args: InferRequestType<typeof client.v1.country_specs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.country_specs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CountrySpecsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.country_specs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.country_specs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CountrySpecsCountryKey(
  args: InferRequestType<(typeof client.v1.country_specs)[':country']['$get']>,
) {
  return ['v1', '/v1/country_specs/:country', args] as const
}

export function useGetV1CountrySpecsCountry<TError = unknown>(
  args: InferRequestType<(typeof client.v1.country_specs)[':country']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.country_specs)[':country']['$get']>>
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
        ? getGetV1CountrySpecsCountryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.country_specs)[':country']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.country_specs[':country'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CountrySpecsCountry<TError = unknown>(
  args: InferRequestType<(typeof client.v1.country_specs)[':country']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.country_specs)[':country']['$get']>>
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
        ? getGetV1CountrySpecsCountryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.country_specs)[':country']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.country_specs[':country'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CouponsKey(args: InferRequestType<typeof client.v1.coupons.$get>) {
  return ['v1', '/v1/coupons', args] as const
}

export function useGetV1Coupons<TError = unknown>(
  args: InferRequestType<typeof client.v1.coupons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.coupons.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CouponsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.coupons.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.coupons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Coupons<TError = unknown>(
  args: InferRequestType<typeof client.v1.coupons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.coupons.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CouponsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.coupons.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.coupons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CouponsKey() {
  return ['v1', '/v1/coupons', 'POST'] as const
}

export function usePostV1Coupons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.coupons.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.coupons.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CouponsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.coupons.$post> }) =>
        parseResponse(client.v1.coupons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CouponsCouponKey(
  args: InferRequestType<(typeof client.v1.coupons)[':coupon']['$get']>,
) {
  return ['v1', '/v1/coupons/:coupon', args] as const
}

export function useGetV1CouponsCoupon<TError = unknown>(
  args: InferRequestType<(typeof client.v1.coupons)[':coupon']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.coupons)[':coupon']['$get']>>>
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
        ? getGetV1CouponsCouponKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.coupons)[':coupon']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.coupons[':coupon'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CouponsCoupon<TError = unknown>(
  args: InferRequestType<(typeof client.v1.coupons)[':coupon']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.coupons)[':coupon']['$get']>>>
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
        ? getGetV1CouponsCouponKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.coupons)[':coupon']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.coupons[':coupon'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CouponsCouponKey() {
  return ['v1', '/v1/coupons/:coupon', 'POST'] as const
}

export function usePostV1CouponsCoupon<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.coupons)[':coupon']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.coupons)[':coupon']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CouponsCouponKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.coupons)[':coupon']['$post']> },
      ) => parseResponse(client.v1.coupons[':coupon'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CouponsCouponKey() {
  return ['v1', '/v1/coupons/:coupon', 'DELETE'] as const
}

export function useDeleteV1CouponsCoupon<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.coupons)[':coupon']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.coupons)[':coupon']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CouponsCouponKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.coupons)[':coupon']['$delete']> },
      ) => parseResponse(client.v1.coupons[':coupon'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CreditNotesKey(args: InferRequestType<typeof client.v1.credit_notes.$get>) {
  return ['v1', '/v1/credit_notes', args] as const
}

export function useGetV1CreditNotes<TError = unknown>(
  args: InferRequestType<typeof client.v1.credit_notes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.credit_notes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CreditNotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.credit_notes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.credit_notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CreditNotes<TError = unknown>(
  args: InferRequestType<typeof client.v1.credit_notes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.credit_notes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CreditNotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.credit_notes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.credit_notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CreditNotesKey() {
  return ['v1', '/v1/credit_notes', 'POST'] as const
}

export function usePostV1CreditNotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.credit_notes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.credit_notes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreditNotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.credit_notes.$post> }) =>
        parseResponse(client.v1.credit_notes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CreditNotesPreviewKey(
  args: InferRequestType<typeof client.v1.credit_notes.preview.$get>,
) {
  return ['v1', '/v1/credit_notes/preview', args] as const
}

export function useGetV1CreditNotesPreview<TError = unknown>(
  args: InferRequestType<typeof client.v1.credit_notes.preview.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.credit_notes.preview.$get>>>
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
        ? getGetV1CreditNotesPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.credit_notes.preview.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.credit_notes.preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CreditNotesPreview<TError = unknown>(
  args: InferRequestType<typeof client.v1.credit_notes.preview.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.credit_notes.preview.$get>>>
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
        ? getGetV1CreditNotesPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.credit_notes.preview.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.credit_notes.preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CreditNotesPreviewLinesKey(
  args: InferRequestType<typeof client.v1.credit_notes.preview.lines.$get>,
) {
  return ['v1', '/v1/credit_notes/preview/lines', args] as const
}

export function useGetV1CreditNotesPreviewLines<TError = unknown>(
  args: InferRequestType<typeof client.v1.credit_notes.preview.lines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.credit_notes.preview.lines.$get>>
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
        ? getGetV1CreditNotesPreviewLinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.credit_notes.preview.lines.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.credit_notes.preview.lines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CreditNotesPreviewLines<TError = unknown>(
  args: InferRequestType<typeof client.v1.credit_notes.preview.lines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.credit_notes.preview.lines.$get>>
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
        ? getGetV1CreditNotesPreviewLinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.credit_notes.preview.lines.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.credit_notes.preview.lines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CreditNotesCreditNoteLinesKey(
  args: InferRequestType<(typeof client.v1.credit_notes)[':credit_note']['lines']['$get']>,
) {
  return ['v1', '/v1/credit_notes/:credit_note/lines', args] as const
}

export function useGetV1CreditNotesCreditNoteLines<TError = unknown>(
  args: InferRequestType<(typeof client.v1.credit_notes)[':credit_note']['lines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.credit_notes)[':credit_note']['lines']['$get']>>
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
        ? getGetV1CreditNotesCreditNoteLinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.credit_notes)[':credit_note']['lines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.credit_notes[':credit_note'].lines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CreditNotesCreditNoteLines<TError = unknown>(
  args: InferRequestType<(typeof client.v1.credit_notes)[':credit_note']['lines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.credit_notes)[':credit_note']['lines']['$get']>>
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
        ? getGetV1CreditNotesCreditNoteLinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.credit_notes)[':credit_note']['lines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.credit_notes[':credit_note'].lines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CreditNotesIdKey(
  args: InferRequestType<(typeof client.v1.credit_notes)[':id']['$get']>,
) {
  return ['v1', '/v1/credit_notes/:id', args] as const
}

export function useGetV1CreditNotesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.credit_notes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.credit_notes)[':id']['$get']>>>
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
        ? getGetV1CreditNotesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.credit_notes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.credit_notes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CreditNotesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.credit_notes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.credit_notes)[':id']['$get']>>>
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
        ? getGetV1CreditNotesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.credit_notes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.credit_notes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CreditNotesIdKey() {
  return ['v1', '/v1/credit_notes/:id', 'POST'] as const
}

export function usePostV1CreditNotesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.credit_notes)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.credit_notes)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreditNotesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.credit_notes)[':id']['$post']> },
      ) => parseResponse(client.v1.credit_notes[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CreditNotesIdVoidKey() {
  return ['v1', '/v1/credit_notes/:id/void', 'POST'] as const
}

export function usePostV1CreditNotesIdVoid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.credit_notes)[':id']['void']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.credit_notes)[':id']['void']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CreditNotesIdVoidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.credit_notes)[':id']['void']['$post']> },
      ) => parseResponse(client.v1.credit_notes[':id'].void.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersKey(args: InferRequestType<typeof client.v1.customers.$get>) {
  return ['v1', '/v1/customers', args] as const
}

export function useGetV1Customers<TError = unknown>(
  args: InferRequestType<typeof client.v1.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Customers<TError = unknown>(
  args: InferRequestType<typeof client.v1.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1CustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomersKey() {
  return ['v1', '/v1/customers', 'POST'] as const
}

export function usePostV1Customers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.customers.$post> }) =>
        parseResponse(client.v1.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersSearchKey(
  args: InferRequestType<typeof client.v1.customers.search.$get>,
) {
  return ['v1', '/v1/customers/search', args] as const
}

export function useGetV1CustomersSearch<TError = unknown>(
  args: InferRequestType<typeof client.v1.customers.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.search.$get>>>
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
        ? getGetV1CustomersSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customers.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersSearch<TError = unknown>(
  args: InferRequestType<typeof client.v1.customers.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.search.$get>>>
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
        ? getGetV1CustomersSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.customers.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customers.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomersCustomerKey(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['$get']>,
) {
  return ['v1', '/v1/customers/:customer', args] as const
}

export function useGetV1CustomersCustomer<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['$get']>>
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
        ? getGetV1CustomersCustomerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customers[':customer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomer<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['$get']>>
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
        ? getGetV1CustomersCustomerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customers[':customer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomersCustomerKey() {
  return ['v1', '/v1/customers/:customer', 'POST'] as const
}

export function usePostV1CustomersCustomer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customers)[':customer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersCustomerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.customers)[':customer']['$post']> },
      ) => parseResponse(client.v1.customers[':customer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CustomersCustomerKey() {
  return ['v1', '/v1/customers/:customer', 'DELETE'] as const
}

export function useDeleteV1CustomersCustomer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customers)[':customer']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CustomersCustomerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.customers)[':customer']['$delete']> },
      ) => parseResponse(client.v1.customers[':customer'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerBalanceTransactionsKey(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['balance_transactions']['$get']>,
) {
  return ['v1', '/v1/customers/:customer/balance_transactions', args] as const
}

export function useGetV1CustomersCustomerBalanceTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['balance_transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.customers)[':customer']['balance_transactions']['$get']>
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
        ? getGetV1CustomersCustomerBalanceTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.customers)[':customer']['balance_transactions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.customers[':customer'].balance_transactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerBalanceTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['balance_transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.customers)[':customer']['balance_transactions']['$get']>
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
        ? getGetV1CustomersCustomerBalanceTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.customers)[':customer']['balance_transactions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.customers[':customer'].balance_transactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomersCustomerBalanceTransactionsKey() {
  return ['v1', '/v1/customers/:customer/balance_transactions', 'POST'] as const
}

export function usePostV1CustomersCustomerBalanceTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.customers)[':customer']['balance_transactions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['balance_transactions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersCustomerBalanceTransactionsKey()
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
            (typeof client.v1.customers)[':customer']['balance_transactions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.customers[':customer'].balance_transactions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerBalanceTransactionsTransactionKey(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['balance_transactions'][':transaction']['$get']
  >,
) {
  return ['v1', '/v1/customers/:customer/balance_transactions/:transaction', args] as const
}

export function useGetV1CustomersCustomerBalanceTransactionsTransaction<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['balance_transactions'][':transaction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.customers)[':customer']['balance_transactions'][':transaction']['$get']
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
        ? getGetV1CustomersCustomerBalanceTransactionsTransactionKey(args)
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
                (typeof client.v1.customers)[':customer']['balance_transactions'][':transaction']['$get']
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
          client.v1.customers[':customer'].balance_transactions[':transaction'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerBalanceTransactionsTransaction<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['balance_transactions'][':transaction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.customers)[':customer']['balance_transactions'][':transaction']['$get']
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
        ? getGetV1CustomersCustomerBalanceTransactionsTransactionKey(args)
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
                (typeof client.v1.customers)[':customer']['balance_transactions'][':transaction']['$get']
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
          client.v1.customers[':customer'].balance_transactions[':transaction'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomersCustomerBalanceTransactionsTransactionKey() {
  return ['v1', '/v1/customers/:customer/balance_transactions/:transaction', 'POST'] as const
}

export function usePostV1CustomersCustomerBalanceTransactionsTransaction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.customers)[':customer']['balance_transactions'][':transaction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.customers)[':customer']['balance_transactions'][':transaction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersCustomerBalanceTransactionsTransactionKey()
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
            (typeof client.v1.customers)[':customer']['balance_transactions'][':transaction']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.customers[':customer'].balance_transactions[':transaction'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerBankAccountsKey(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['bank_accounts']['$get']>,
) {
  return ['v1', '/v1/customers/:customer/bank_accounts', args] as const
}

export function useGetV1CustomersCustomerBankAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['bank_accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['bank_accounts']['$get']>>
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
        ? getGetV1CustomersCustomerBankAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['bank_accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.customers[':customer'].bank_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerBankAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['bank_accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['bank_accounts']['$get']>>
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
        ? getGetV1CustomersCustomerBankAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['bank_accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.customers[':customer'].bank_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomersCustomerBankAccountsKey() {
  return ['v1', '/v1/customers/:customer/bank_accounts', 'POST'] as const
}

export function usePostV1CustomersCustomerBankAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customers)[':customer']['bank_accounts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['bank_accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersCustomerBankAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.customers)[':customer']['bank_accounts']['$post']>
        },
      ) => parseResponse(client.v1.customers[':customer'].bank_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerBankAccountsIdKey(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['bank_accounts'][':id']['$get']>,
) {
  return ['v1', '/v1/customers/:customer/bank_accounts/:id', args] as const
}

export function useGetV1CustomersCustomerBankAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['bank_accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.customers)[':customer']['bank_accounts'][':id']['$get']>
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
        ? getGetV1CustomersCustomerBankAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.customers)[':customer']['bank_accounts'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.customers[':customer'].bank_accounts[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerBankAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['bank_accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.customers)[':customer']['bank_accounts'][':id']['$get']>
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
        ? getGetV1CustomersCustomerBankAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.customers)[':customer']['bank_accounts'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.customers[':customer'].bank_accounts[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomersCustomerBankAccountsIdKey() {
  return ['v1', '/v1/customers/:customer/bank_accounts/:id', 'POST'] as const
}

export function usePostV1CustomersCustomerBankAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.customers)[':customer']['bank_accounts'][':id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['bank_accounts'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersCustomerBankAccountsIdKey()
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
            (typeof client.v1.customers)[':customer']['bank_accounts'][':id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.customers[':customer'].bank_accounts[':id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CustomersCustomerBankAccountsIdKey() {
  return ['v1', '/v1/customers/:customer/bank_accounts/:id', 'DELETE'] as const
}

export function useDeleteV1CustomersCustomerBankAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.customers)[':customer']['bank_accounts'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['bank_accounts'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CustomersCustomerBankAccountsIdKey()
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
            (typeof client.v1.customers)[':customer']['bank_accounts'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.customers[':customer'].bank_accounts[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomersCustomerBankAccountsIdVerifyKey() {
  return ['v1', '/v1/customers/:customer/bank_accounts/:id/verify', 'POST'] as const
}

export function usePostV1CustomersCustomerBankAccountsIdVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.customers)[':customer']['bank_accounts'][':id']['verify']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.customers)[':customer']['bank_accounts'][':id']['verify']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersCustomerBankAccountsIdVerifyKey()
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
            (typeof client.v1.customers)[':customer']['bank_accounts'][':id']['verify']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.customers[':customer'].bank_accounts[':id'].verify.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerCardsKey(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['cards']['$get']>,
) {
  return ['v1', '/v1/customers/:customer/cards', args] as const
}

export function useGetV1CustomersCustomerCards<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['cards']['$get']>>
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
        ? getGetV1CustomersCustomerCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['cards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customers[':customer'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerCards<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['cards']['$get']>>
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
        ? getGetV1CustomersCustomerCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['cards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customers[':customer'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomersCustomerCardsKey() {
  return ['v1', '/v1/customers/:customer/cards', 'POST'] as const
}

export function usePostV1CustomersCustomerCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customers)[':customer']['cards']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['cards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersCustomerCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.customers)[':customer']['cards']['$post']> },
      ) => parseResponse(client.v1.customers[':customer'].cards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerCardsIdKey(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['cards'][':id']['$get']>,
) {
  return ['v1', '/v1/customers/:customer/cards/:id', args] as const
}

export function useGetV1CustomersCustomerCardsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['cards'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['cards'][':id']['$get']>>
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
        ? getGetV1CustomersCustomerCardsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['cards'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.customers[':customer'].cards[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerCardsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['cards'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['cards'][':id']['$get']>>
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
        ? getGetV1CustomersCustomerCardsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['cards'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.customers[':customer'].cards[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomersCustomerCardsIdKey() {
  return ['v1', '/v1/customers/:customer/cards/:id', 'POST'] as const
}

export function usePostV1CustomersCustomerCardsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customers)[':customer']['cards'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['cards'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersCustomerCardsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.customers)[':customer']['cards'][':id']['$post']>
        },
      ) => parseResponse(client.v1.customers[':customer'].cards[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CustomersCustomerCardsIdKey() {
  return ['v1', '/v1/customers/:customer/cards/:id', 'DELETE'] as const
}

export function useDeleteV1CustomersCustomerCardsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customers)[':customer']['cards'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['cards'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CustomersCustomerCardsIdKey()
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
            (typeof client.v1.customers)[':customer']['cards'][':id']['$delete']
          >
        },
      ) => parseResponse(client.v1.customers[':customer'].cards[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerCashBalanceKey(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['cash_balance']['$get']>,
) {
  return ['v1', '/v1/customers/:customer/cash_balance', args] as const
}

export function useGetV1CustomersCustomerCashBalance<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['cash_balance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['cash_balance']['$get']>>
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
        ? getGetV1CustomersCustomerCashBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['cash_balance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.customers[':customer'].cash_balance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerCashBalance<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['cash_balance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['cash_balance']['$get']>>
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
        ? getGetV1CustomersCustomerCashBalanceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['cash_balance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.customers[':customer'].cash_balance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomersCustomerCashBalanceKey() {
  return ['v1', '/v1/customers/:customer/cash_balance', 'POST'] as const
}

export function usePostV1CustomersCustomerCashBalance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customers)[':customer']['cash_balance']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['cash_balance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersCustomerCashBalanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.customers)[':customer']['cash_balance']['$post']>
        },
      ) => parseResponse(client.v1.customers[':customer'].cash_balance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerCashBalanceTransactionsKey(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['cash_balance_transactions']['$get']
  >,
) {
  return ['v1', '/v1/customers/:customer/cash_balance_transactions', args] as const
}

export function useGetV1CustomersCustomerCashBalanceTransactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['cash_balance_transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.customers)[':customer']['cash_balance_transactions']['$get']
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
        ? getGetV1CustomersCustomerCashBalanceTransactionsKey(args)
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
                (typeof client.v1.customers)[':customer']['cash_balance_transactions']['$get']
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
          client.v1.customers[':customer'].cash_balance_transactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerCashBalanceTransactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['cash_balance_transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.customers)[':customer']['cash_balance_transactions']['$get']
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
        ? getGetV1CustomersCustomerCashBalanceTransactionsKey(args)
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
                (typeof client.v1.customers)[':customer']['cash_balance_transactions']['$get']
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
          client.v1.customers[':customer'].cash_balance_transactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomersCustomerCashBalanceTransactionsTransactionKey(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['cash_balance_transactions'][':transaction']['$get']
  >,
) {
  return ['v1', '/v1/customers/:customer/cash_balance_transactions/:transaction', args] as const
}

export function useGetV1CustomersCustomerCashBalanceTransactionsTransaction<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['cash_balance_transactions'][':transaction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.customers)[':customer']['cash_balance_transactions'][':transaction']['$get']
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
        ? getGetV1CustomersCustomerCashBalanceTransactionsTransactionKey(args)
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
                (typeof client.v1.customers)[':customer']['cash_balance_transactions'][':transaction']['$get']
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
          client.v1.customers[':customer'].cash_balance_transactions[':transaction'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerCashBalanceTransactionsTransaction<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['cash_balance_transactions'][':transaction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.customers)[':customer']['cash_balance_transactions'][':transaction']['$get']
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
        ? getGetV1CustomersCustomerCashBalanceTransactionsTransactionKey(args)
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
                (typeof client.v1.customers)[':customer']['cash_balance_transactions'][':transaction']['$get']
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
          client.v1.customers[':customer'].cash_balance_transactions[':transaction'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomersCustomerDiscountKey(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['discount']['$get']>,
) {
  return ['v1', '/v1/customers/:customer/discount', args] as const
}

export function useGetV1CustomersCustomerDiscount<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['discount']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['discount']['$get']>>
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
        ? getGetV1CustomersCustomerDiscountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['discount']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.customers[':customer'].discount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerDiscount<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['discount']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['discount']['$get']>>
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
        ? getGetV1CustomersCustomerDiscountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['discount']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.customers[':customer'].discount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1CustomersCustomerDiscountKey() {
  return ['v1', '/v1/customers/:customer/discount', 'DELETE'] as const
}

export function useDeleteV1CustomersCustomerDiscount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customers)[':customer']['discount']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['discount']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CustomersCustomerDiscountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.customers)[':customer']['discount']['$delete']>
        },
      ) => parseResponse(client.v1.customers[':customer'].discount.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomersCustomerFundingInstructionsKey() {
  return ['v1', '/v1/customers/:customer/funding_instructions', 'POST'] as const
}

export function usePostV1CustomersCustomerFundingInstructions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.customers)[':customer']['funding_instructions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['funding_instructions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersCustomerFundingInstructionsKey()
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
            (typeof client.v1.customers)[':customer']['funding_instructions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.customers[':customer'].funding_instructions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerPaymentMethodsKey(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['payment_methods']['$get']>,
) {
  return ['v1', '/v1/customers/:customer/payment_methods', args] as const
}

export function useGetV1CustomersCustomerPaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['payment_methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.customers)[':customer']['payment_methods']['$get']>
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
        ? getGetV1CustomersCustomerPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.customers)[':customer']['payment_methods']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.customers[':customer'].payment_methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerPaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['payment_methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.customers)[':customer']['payment_methods']['$get']>
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
        ? getGetV1CustomersCustomerPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.customers)[':customer']['payment_methods']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.customers[':customer'].payment_methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomersCustomerPaymentMethodsPaymentMethodKey(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['payment_methods'][':payment_method']['$get']
  >,
) {
  return ['v1', '/v1/customers/:customer/payment_methods/:payment_method', args] as const
}

export function useGetV1CustomersCustomerPaymentMethodsPaymentMethod<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['payment_methods'][':payment_method']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.customers)[':customer']['payment_methods'][':payment_method']['$get']
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
        ? getGetV1CustomersCustomerPaymentMethodsPaymentMethodKey(args)
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
                (typeof client.v1.customers)[':customer']['payment_methods'][':payment_method']['$get']
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
          client.v1.customers[':customer'].payment_methods[':payment_method'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerPaymentMethodsPaymentMethod<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['payment_methods'][':payment_method']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.customers)[':customer']['payment_methods'][':payment_method']['$get']
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
        ? getGetV1CustomersCustomerPaymentMethodsPaymentMethodKey(args)
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
                (typeof client.v1.customers)[':customer']['payment_methods'][':payment_method']['$get']
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
          client.v1.customers[':customer'].payment_methods[':payment_method'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomersCustomerSourcesKey(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['sources']['$get']>,
) {
  return ['v1', '/v1/customers/:customer/sources', args] as const
}

export function useGetV1CustomersCustomerSources<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['sources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['sources']['$get']>>
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
        ? getGetV1CustomersCustomerSourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['sources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customers[':customer'].sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerSources<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['sources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['sources']['$get']>>
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
        ? getGetV1CustomersCustomerSourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['sources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customers[':customer'].sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomersCustomerSourcesKey() {
  return ['v1', '/v1/customers/:customer/sources', 'POST'] as const
}

export function usePostV1CustomersCustomerSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customers)[':customer']['sources']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['sources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersCustomerSourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.customers)[':customer']['sources']['$post']> },
      ) => parseResponse(client.v1.customers[':customer'].sources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerSourcesIdKey(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['sources'][':id']['$get']>,
) {
  return ['v1', '/v1/customers/:customer/sources/:id', args] as const
}

export function useGetV1CustomersCustomerSourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['sources'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['sources'][':id']['$get']>>
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
        ? getGetV1CustomersCustomerSourcesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['sources'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.customers[':customer'].sources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerSourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['sources'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['sources'][':id']['$get']>>
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
        ? getGetV1CustomersCustomerSourcesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['sources'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.customers[':customer'].sources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomersCustomerSourcesIdKey() {
  return ['v1', '/v1/customers/:customer/sources/:id', 'POST'] as const
}

export function usePostV1CustomersCustomerSourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customers)[':customer']['sources'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['sources'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersCustomerSourcesIdKey()
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
            (typeof client.v1.customers)[':customer']['sources'][':id']['$post']
          >
        },
      ) => parseResponse(client.v1.customers[':customer'].sources[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CustomersCustomerSourcesIdKey() {
  return ['v1', '/v1/customers/:customer/sources/:id', 'DELETE'] as const
}

export function useDeleteV1CustomersCustomerSourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.customers)[':customer']['sources'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['sources'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CustomersCustomerSourcesIdKey()
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
            (typeof client.v1.customers)[':customer']['sources'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.customers[':customer'].sources[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1CustomersCustomerSourcesIdVerifyKey() {
  return ['v1', '/v1/customers/:customer/sources/:id/verify', 'POST'] as const
}

export function usePostV1CustomersCustomerSourcesIdVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.customers)[':customer']['sources'][':id']['verify']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['sources'][':id']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersCustomerSourcesIdVerifyKey()
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
            (typeof client.v1.customers)[':customer']['sources'][':id']['verify']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.customers[':customer'].sources[':id'].verify.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerSubscriptionsKey(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['subscriptions']['$get']>,
) {
  return ['v1', '/v1/customers/:customer/subscriptions', args] as const
}

export function useGetV1CustomersCustomerSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['subscriptions']['$get']>>
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
        ? getGetV1CustomersCustomerSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.customers[':customer'].subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['subscriptions']['$get']>>
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
        ? getGetV1CustomersCustomerSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.customers[':customer'].subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomersCustomerSubscriptionsKey() {
  return ['v1', '/v1/customers/:customer/subscriptions', 'POST'] as const
}

export function usePostV1CustomersCustomerSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customers)[':customer']['subscriptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['subscriptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersCustomerSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.customers)[':customer']['subscriptions']['$post']>
        },
      ) => parseResponse(client.v1.customers[':customer'].subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerSubscriptionsSubscriptionExposedIdKey(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['$get']
  >,
) {
  return ['v1', '/v1/customers/:customer/subscriptions/:subscription_exposed_id', args] as const
}

export function useGetV1CustomersCustomerSubscriptionsSubscriptionExposedId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['$get']
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
        ? getGetV1CustomersCustomerSubscriptionsSubscriptionExposedIdKey(args)
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
                (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['$get']
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
          client.v1.customers[':customer'].subscriptions[':subscription_exposed_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerSubscriptionsSubscriptionExposedId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['$get']
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
        ? getGetV1CustomersCustomerSubscriptionsSubscriptionExposedIdKey(args)
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
                (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['$get']
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
          client.v1.customers[':customer'].subscriptions[':subscription_exposed_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomersCustomerSubscriptionsSubscriptionExposedIdKey() {
  return ['v1', '/v1/customers/:customer/subscriptions/:subscription_exposed_id', 'POST'] as const
}

export function usePostV1CustomersCustomerSubscriptionsSubscriptionExposedId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersCustomerSubscriptionsSubscriptionExposedIdKey()
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
            (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.customers[':customer'].subscriptions[':subscription_exposed_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1CustomersCustomerSubscriptionsSubscriptionExposedIdKey() {
  return ['v1', '/v1/customers/:customer/subscriptions/:subscription_exposed_id', 'DELETE'] as const
}

export function useDeleteV1CustomersCustomerSubscriptionsSubscriptionExposedId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CustomersCustomerSubscriptionsSubscriptionExposedIdKey()
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
            (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.customers[':customer'].subscriptions[':subscription_exposed_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscountKey(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['discount']['$get']
  >,
) {
  return [
    'v1',
    '/v1/customers/:customer/subscriptions/:subscription_exposed_id/discount',
    args,
  ] as const
}

export function useGetV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscount<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['discount']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['discount']['$get']
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
        ? getGetV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscountKey(args)
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
                (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['discount']['$get']
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
          client.v1.customers[':customer'].subscriptions[':subscription_exposed_id'].discount.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscount<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['discount']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['discount']['$get']
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
        ? getGetV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscountKey(args)
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
                (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['discount']['$get']
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
          client.v1.customers[':customer'].subscriptions[':subscription_exposed_id'].discount.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscountKey() {
  return [
    'v1',
    '/v1/customers/:customer/subscriptions/:subscription_exposed_id/discount',
    'DELETE',
  ] as const
}

export function useDeleteV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscount<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['discount']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['discount']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscountKey()
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
            (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['discount']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.customers[':customer'].subscriptions[
            ':subscription_exposed_id'
          ].discount.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerTaxIdsKey(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['tax_ids']['$get']>,
) {
  return ['v1', '/v1/customers/:customer/tax_ids', args] as const
}

export function useGetV1CustomersCustomerTaxIds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['tax_ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['tax_ids']['$get']>>
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
        ? getGetV1CustomersCustomerTaxIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['tax_ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customers[':customer'].tax_ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerTaxIds<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['tax_ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['tax_ids']['$get']>>
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
        ? getGetV1CustomersCustomerTaxIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['tax_ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.customers[':customer'].tax_ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomersCustomerTaxIdsKey() {
  return ['v1', '/v1/customers/:customer/tax_ids', 'POST'] as const
}

export function usePostV1CustomersCustomerTaxIds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.customers)[':customer']['tax_ids']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['tax_ids']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomersCustomerTaxIdsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.customers)[':customer']['tax_ids']['$post']> },
      ) => parseResponse(client.v1.customers[':customer'].tax_ids.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomersCustomerTaxIdsIdKey(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['tax_ids'][':id']['$get']>,
) {
  return ['v1', '/v1/customers/:customer/tax_ids/:id', args] as const
}

export function useGetV1CustomersCustomerTaxIdsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['tax_ids'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['tax_ids'][':id']['$get']>>
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
        ? getGetV1CustomersCustomerTaxIdsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['tax_ids'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.customers[':customer'].tax_ids[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomersCustomerTaxIdsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['tax_ids'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['tax_ids'][':id']['$get']>>
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
        ? getGetV1CustomersCustomerTaxIdsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.customers)[':customer']['tax_ids'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.customers[':customer'].tax_ids[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1CustomersCustomerTaxIdsIdKey() {
  return ['v1', '/v1/customers/:customer/tax_ids/:id', 'DELETE'] as const
}

export function useDeleteV1CustomersCustomerTaxIdsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.customers)[':customer']['tax_ids'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.customers)[':customer']['tax_ids'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1CustomersCustomerTaxIdsIdKey()
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
            (typeof client.v1.customers)[':customer']['tax_ids'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.customers[':customer'].tax_ids[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DisputesKey(args: InferRequestType<typeof client.v1.disputes.$get>) {
  return ['v1', '/v1/disputes', args] as const
}

export function useGetV1Disputes<TError = unknown>(
  args: InferRequestType<typeof client.v1.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.disputes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Disputes<TError = unknown>(
  args: InferRequestType<typeof client.v1.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.disputes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.disputes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DisputesDisputeKey(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute']['$get']>,
) {
  return ['v1', '/v1/disputes/:dispute', args] as const
}

export function useGetV1DisputesDispute<TError = unknown>(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.disputes)[':dispute']['$get']>>>
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
        ? getGetV1DisputesDisputeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.disputes)[':dispute']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.disputes[':dispute'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DisputesDispute<TError = unknown>(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.disputes)[':dispute']['$get']>>>
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
        ? getGetV1DisputesDisputeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.disputes)[':dispute']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.disputes[':dispute'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DisputesDisputeKey() {
  return ['v1', '/v1/disputes/:dispute', 'POST'] as const
}

export function usePostV1DisputesDispute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.disputes)[':dispute']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.disputes)[':dispute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DisputesDisputeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.disputes)[':dispute']['$post']> },
      ) => parseResponse(client.v1.disputes[':dispute'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DisputesDisputeCloseKey() {
  return ['v1', '/v1/disputes/:dispute/close', 'POST'] as const
}

export function usePostV1DisputesDisputeClose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.disputes)[':dispute']['close']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.disputes)[':dispute']['close']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DisputesDisputeCloseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.disputes)[':dispute']['close']['$post']> },
      ) => parseResponse(client.v1.disputes[':dispute'].close.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EphemeralKeysKey() {
  return ['v1', '/v1/ephemeral_keys', 'POST'] as const
}

export function usePostV1EphemeralKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.ephemeral_keys.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.ephemeral_keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EphemeralKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.ephemeral_keys.$post> }) =>
        parseResponse(client.v1.ephemeral_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1EphemeralKeysKeyKey() {
  return ['v1', '/v1/ephemeral_keys/:key', 'DELETE'] as const
}

export function useDeleteV1EphemeralKeysKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.ephemeral_keys)[':key']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.ephemeral_keys)[':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EphemeralKeysKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.ephemeral_keys)[':key']['$delete']> },
      ) => parseResponse(client.v1.ephemeral_keys[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EventsKey(args: InferRequestType<typeof client.v1.events.$get>) {
  return ['v1', '/v1/events', args] as const
}

export function useGetV1Events<TError = unknown>(
  args: InferRequestType<typeof client.v1.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Events<TError = unknown>(
  args: InferRequestType<typeof client.v1.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EventsIdKey(
  args: InferRequestType<(typeof client.v1.events)[':id']['$get']>,
) {
  return ['v1', '/v1/events/:id', args] as const
}

export function useGetV1EventsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1EventsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1EventsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ExchangeRatesKey(
  args: InferRequestType<typeof client.v1.exchange_rates.$get>,
) {
  return ['v1', '/v1/exchange_rates', args] as const
}

export function useGetV1ExchangeRates<TError = unknown>(
  args: InferRequestType<typeof client.v1.exchange_rates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.exchange_rates.$get>>>>
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
        ? getGetV1ExchangeRatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.exchange_rates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.exchange_rates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExchangeRates<TError = unknown>(
  args: InferRequestType<typeof client.v1.exchange_rates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.exchange_rates.$get>>>>
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
        ? getGetV1ExchangeRatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.exchange_rates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.exchange_rates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ExchangeRatesRateIdKey(
  args: InferRequestType<(typeof client.v1.exchange_rates)[':rate_id']['$get']>,
) {
  return ['v1', '/v1/exchange_rates/:rate_id', args] as const
}

export function useGetV1ExchangeRatesRateId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.exchange_rates)[':rate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.exchange_rates)[':rate_id']['$get']>>
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
        ? getGetV1ExchangeRatesRateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.exchange_rates)[':rate_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.exchange_rates[':rate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ExchangeRatesRateId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.exchange_rates)[':rate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.exchange_rates)[':rate_id']['$get']>>
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
        ? getGetV1ExchangeRatesRateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.exchange_rates)[':rate_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.exchange_rates[':rate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FileLinksKey(args: InferRequestType<typeof client.v1.file_links.$get>) {
  return ['v1', '/v1/file_links', args] as const
}

export function useGetV1FileLinks<TError = unknown>(
  args: InferRequestType<typeof client.v1.file_links.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.file_links.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FileLinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.file_links.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.file_links.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FileLinks<TError = unknown>(
  args: InferRequestType<typeof client.v1.file_links.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.file_links.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FileLinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.file_links.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.file_links.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FileLinksKey() {
  return ['v1', '/v1/file_links', 'POST'] as const
}

export function usePostV1FileLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.file_links.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.file_links.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FileLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.file_links.$post> }) =>
        parseResponse(client.v1.file_links.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FileLinksLinkKey(
  args: InferRequestType<(typeof client.v1.file_links)[':link']['$get']>,
) {
  return ['v1', '/v1/file_links/:link', args] as const
}

export function useGetV1FileLinksLink<TError = unknown>(
  args: InferRequestType<(typeof client.v1.file_links)[':link']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.file_links)[':link']['$get']>>>
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
        ? getGetV1FileLinksLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.file_links)[':link']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.file_links[':link'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FileLinksLink<TError = unknown>(
  args: InferRequestType<(typeof client.v1.file_links)[':link']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.file_links)[':link']['$get']>>>
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
        ? getGetV1FileLinksLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.file_links)[':link']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.file_links[':link'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FileLinksLinkKey() {
  return ['v1', '/v1/file_links/:link', 'POST'] as const
}

export function usePostV1FileLinksLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.file_links)[':link']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.file_links)[':link']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FileLinksLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.file_links)[':link']['$post']> },
      ) => parseResponse(client.v1.file_links[':link'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FilesKey(args: InferRequestType<typeof client.v1.files.$get>) {
  return ['v1', '/v1/files', args] as const
}

export function useGetV1Files<TError = unknown>(
  args: InferRequestType<typeof client.v1.files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.files.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1Files<TError = unknown>(
  args: InferRequestType<typeof client.v1.files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.files.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV1FilesKey() {
  return ['v1', '/v1/files', 'POST'] as const
}

export function usePostV1Files<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.files.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.files.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.files.$post> }) =>
        parseResponse(client.v1.files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FilesFileKey(
  args: InferRequestType<(typeof client.v1.files)[':file']['$get']>,
) {
  return ['v1', '/v1/files/:file', args] as const
}

export function useGetV1FilesFile<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1FilesFileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FilesFile<TError = unknown>(
  args: InferRequestType<(typeof client.v1.files)[':file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1FilesFileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.files)[':file']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.files[':file'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FinancialConnectionsAccountsKey(
  args: InferRequestType<typeof client.v1.financial_connections.accounts.$get>,
) {
  return ['v1', '/v1/financial_connections/accounts', args] as const
}

export function useGetV1FinancialConnectionsAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.financial_connections.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.financial_connections.accounts.$get>>
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
        ? getGetV1FinancialConnectionsAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.financial_connections.accounts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.financial_connections.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialConnectionsAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.financial_connections.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.financial_connections.accounts.$get>>
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
        ? getGetV1FinancialConnectionsAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.financial_connections.accounts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.financial_connections.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FinancialConnectionsAccountsAccountKey(
  args: InferRequestType<(typeof client.v1.financial_connections.accounts)[':account']['$get']>,
) {
  return ['v1', '/v1/financial_connections/accounts/:account', args] as const
}

export function useGetV1FinancialConnectionsAccountsAccount<TError = unknown>(
  args: InferRequestType<(typeof client.v1.financial_connections.accounts)[':account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.financial_connections.accounts)[':account']['$get']>
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
        ? getGetV1FinancialConnectionsAccountsAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.financial_connections.accounts)[':account']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.financial_connections.accounts[':account'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialConnectionsAccountsAccount<TError = unknown>(
  args: InferRequestType<(typeof client.v1.financial_connections.accounts)[':account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.financial_connections.accounts)[':account']['$get']>
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
        ? getGetV1FinancialConnectionsAccountsAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.financial_connections.accounts)[':account']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.financial_connections.accounts[':account'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1FinancialConnectionsAccountsAccountDisconnectKey() {
  return ['v1', '/v1/financial_connections/accounts/:account/disconnect', 'POST'] as const
}

export function usePostV1FinancialConnectionsAccountsAccountDisconnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.financial_connections.accounts)[':account']['disconnect']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.financial_connections.accounts)[':account']['disconnect']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FinancialConnectionsAccountsAccountDisconnectKey()
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
            (typeof client.v1.financial_connections.accounts)[':account']['disconnect']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.financial_connections.accounts[':account'].disconnect.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1FinancialConnectionsAccountsAccountOwnersKey(
  args: InferRequestType<
    (typeof client.v1.financial_connections.accounts)[':account']['owners']['$get']
  >,
) {
  return ['v1', '/v1/financial_connections/accounts/:account/owners', args] as const
}

export function useGetV1FinancialConnectionsAccountsAccountOwners<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.financial_connections.accounts)[':account']['owners']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_connections.accounts)[':account']['owners']['$get']
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
        ? getGetV1FinancialConnectionsAccountsAccountOwnersKey(args)
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
                (typeof client.v1.financial_connections.accounts)[':account']['owners']['$get']
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
          client.v1.financial_connections.accounts[':account'].owners.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialConnectionsAccountsAccountOwners<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.financial_connections.accounts)[':account']['owners']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.financial_connections.accounts)[':account']['owners']['$get']
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
        ? getGetV1FinancialConnectionsAccountsAccountOwnersKey(args)
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
                (typeof client.v1.financial_connections.accounts)[':account']['owners']['$get']
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
          client.v1.financial_connections.accounts[':account'].owners.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1FinancialConnectionsAccountsAccountRefreshKey() {
  return ['v1', '/v1/financial_connections/accounts/:account/refresh', 'POST'] as const
}

export function usePostV1FinancialConnectionsAccountsAccountRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.financial_connections.accounts)[':account']['refresh']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.financial_connections.accounts)[':account']['refresh']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FinancialConnectionsAccountsAccountRefreshKey()
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
            (typeof client.v1.financial_connections.accounts)[':account']['refresh']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.financial_connections.accounts[':account'].refresh.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1FinancialConnectionsSessionsKey() {
  return ['v1', '/v1/financial_connections/sessions', 'POST'] as const
}

export function usePostV1FinancialConnectionsSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.financial_connections.sessions.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.financial_connections.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FinancialConnectionsSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.financial_connections.sessions.$post> },
      ) => parseResponse(client.v1.financial_connections.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FinancialConnectionsSessionsSessionKey(
  args: InferRequestType<(typeof client.v1.financial_connections.sessions)[':session']['$get']>,
) {
  return ['v1', '/v1/financial_connections/sessions/:session', args] as const
}

export function useGetV1FinancialConnectionsSessionsSession<TError = unknown>(
  args: InferRequestType<(typeof client.v1.financial_connections.sessions)[':session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.financial_connections.sessions)[':session']['$get']>
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
        ? getGetV1FinancialConnectionsSessionsSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.financial_connections.sessions)[':session']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.financial_connections.sessions[':session'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FinancialConnectionsSessionsSession<TError = unknown>(
  args: InferRequestType<(typeof client.v1.financial_connections.sessions)[':session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.financial_connections.sessions)[':session']['$get']>
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
        ? getGetV1FinancialConnectionsSessionsSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.financial_connections.sessions)[':session']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.financial_connections.sessions[':session'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1IdentityVerificationReportsKey(
  args: InferRequestType<typeof client.v1.identity.verification_reports.$get>,
) {
  return ['v1', '/v1/identity/verification_reports', args] as const
}

export function useGetV1IdentityVerificationReports<TError = unknown>(
  args: InferRequestType<typeof client.v1.identity.verification_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.identity.verification_reports.$get>>
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
        ? getGetV1IdentityVerificationReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.identity.verification_reports.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.identity.verification_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IdentityVerificationReports<TError = unknown>(
  args: InferRequestType<typeof client.v1.identity.verification_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.identity.verification_reports.$get>>
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
        ? getGetV1IdentityVerificationReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.identity.verification_reports.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.identity.verification_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IdentityVerificationReportsReportKey(
  args: InferRequestType<(typeof client.v1.identity.verification_reports)[':report']['$get']>,
) {
  return ['v1', '/v1/identity/verification_reports/:report', args] as const
}

export function useGetV1IdentityVerificationReportsReport<TError = unknown>(
  args: InferRequestType<(typeof client.v1.identity.verification_reports)[':report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.identity.verification_reports)[':report']['$get']>>
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
        ? getGetV1IdentityVerificationReportsReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.identity.verification_reports)[':report']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.identity.verification_reports[':report'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IdentityVerificationReportsReport<TError = unknown>(
  args: InferRequestType<(typeof client.v1.identity.verification_reports)[':report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.identity.verification_reports)[':report']['$get']>>
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
        ? getGetV1IdentityVerificationReportsReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.identity.verification_reports)[':report']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.identity.verification_reports[':report'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IdentityVerificationSessionsKey(
  args: InferRequestType<typeof client.v1.identity.verification_sessions.$get>,
) {
  return ['v1', '/v1/identity/verification_sessions', args] as const
}

export function useGetV1IdentityVerificationSessions<TError = unknown>(
  args: InferRequestType<typeof client.v1.identity.verification_sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.identity.verification_sessions.$get>>
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
        ? getGetV1IdentityVerificationSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.identity.verification_sessions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.identity.verification_sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IdentityVerificationSessions<TError = unknown>(
  args: InferRequestType<typeof client.v1.identity.verification_sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.identity.verification_sessions.$get>>
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
        ? getGetV1IdentityVerificationSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.identity.verification_sessions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.identity.verification_sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1IdentityVerificationSessionsKey() {
  return ['v1', '/v1/identity/verification_sessions', 'POST'] as const
}

export function usePostV1IdentityVerificationSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.identity.verification_sessions.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.identity.verification_sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IdentityVerificationSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.identity.verification_sessions.$post> },
      ) => parseResponse(client.v1.identity.verification_sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1IdentityVerificationSessionsSessionKey(
  args: InferRequestType<(typeof client.v1.identity.verification_sessions)[':session']['$get']>,
) {
  return ['v1', '/v1/identity/verification_sessions/:session', args] as const
}

export function useGetV1IdentityVerificationSessionsSession<TError = unknown>(
  args: InferRequestType<(typeof client.v1.identity.verification_sessions)[':session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.identity.verification_sessions)[':session']['$get']>
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
        ? getGetV1IdentityVerificationSessionsSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.identity.verification_sessions)[':session']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.identity.verification_sessions[':session'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IdentityVerificationSessionsSession<TError = unknown>(
  args: InferRequestType<(typeof client.v1.identity.verification_sessions)[':session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.identity.verification_sessions)[':session']['$get']>
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
        ? getGetV1IdentityVerificationSessionsSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.identity.verification_sessions)[':session']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.identity.verification_sessions[':session'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1IdentityVerificationSessionsSessionKey() {
  return ['v1', '/v1/identity/verification_sessions/:session', 'POST'] as const
}

export function usePostV1IdentityVerificationSessionsSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.identity.verification_sessions)[':session']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.identity.verification_sessions)[':session']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IdentityVerificationSessionsSessionKey()
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
            (typeof client.v1.identity.verification_sessions)[':session']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.identity.verification_sessions[':session'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1IdentityVerificationSessionsSessionCancelKey() {
  return ['v1', '/v1/identity/verification_sessions/:session/cancel', 'POST'] as const
}

export function usePostV1IdentityVerificationSessionsSessionCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.identity.verification_sessions)[':session']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.identity.verification_sessions)[':session']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IdentityVerificationSessionsSessionCancelKey()
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
            (typeof client.v1.identity.verification_sessions)[':session']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.identity.verification_sessions[':session'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1IdentityVerificationSessionsSessionRedactKey() {
  return ['v1', '/v1/identity/verification_sessions/:session/redact', 'POST'] as const
}

export function usePostV1IdentityVerificationSessionsSessionRedact<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.identity.verification_sessions)[':session']['redact']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.identity.verification_sessions)[':session']['redact']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IdentityVerificationSessionsSessionRedactKey()
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
            (typeof client.v1.identity.verification_sessions)[':session']['redact']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.identity.verification_sessions[':session'].redact.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1InvoiceitemsKey(
  args: InferRequestType<typeof client.v1.invoiceitems.$get>,
) {
  return ['v1', '/v1/invoiceitems', args] as const
}

export function useGetV1Invoiceitems<TError = unknown>(
  args: InferRequestType<typeof client.v1.invoiceitems.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoiceitems.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1InvoiceitemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoiceitems.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoiceitems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Invoiceitems<TError = unknown>(
  args: InferRequestType<typeof client.v1.invoiceitems.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoiceitems.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1InvoiceitemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoiceitems.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoiceitems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1InvoiceitemsKey() {
  return ['v1', '/v1/invoiceitems', 'POST'] as const
}

export function usePostV1Invoiceitems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoiceitems.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.invoiceitems.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoiceitemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.invoiceitems.$post> }) =>
        parseResponse(client.v1.invoiceitems.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InvoiceitemsInvoiceitemKey(
  args: InferRequestType<(typeof client.v1.invoiceitems)[':invoiceitem']['$get']>,
) {
  return ['v1', '/v1/invoiceitems/:invoiceitem', args] as const
}

export function useGetV1InvoiceitemsInvoiceitem<TError = unknown>(
  args: InferRequestType<(typeof client.v1.invoiceitems)[':invoiceitem']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.invoiceitems)[':invoiceitem']['$get']>>
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
        ? getGetV1InvoiceitemsInvoiceitemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.invoiceitems)[':invoiceitem']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoiceitems[':invoiceitem'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InvoiceitemsInvoiceitem<TError = unknown>(
  args: InferRequestType<(typeof client.v1.invoiceitems)[':invoiceitem']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.invoiceitems)[':invoiceitem']['$get']>>
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
        ? getGetV1InvoiceitemsInvoiceitemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.invoiceitems)[':invoiceitem']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoiceitems[':invoiceitem'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1InvoiceitemsInvoiceitemKey() {
  return ['v1', '/v1/invoiceitems/:invoiceitem', 'POST'] as const
}

export function usePostV1InvoiceitemsInvoiceitem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoiceitems)[':invoiceitem']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invoiceitems)[':invoiceitem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoiceitemsInvoiceitemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.invoiceitems)[':invoiceitem']['$post']> },
      ) => parseResponse(client.v1.invoiceitems[':invoiceitem'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1InvoiceitemsInvoiceitemKey() {
  return ['v1', '/v1/invoiceitems/:invoiceitem', 'DELETE'] as const
}

export function useDeleteV1InvoiceitemsInvoiceitem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoiceitems)[':invoiceitem']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invoiceitems)[':invoiceitem']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1InvoiceitemsInvoiceitemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.invoiceitems)[':invoiceitem']['$delete']> },
      ) => parseResponse(client.v1.invoiceitems[':invoiceitem'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InvoicesKey(args: InferRequestType<typeof client.v1.invoices.$get>) {
  return ['v1', '/v1/invoices', args] as const
}

export function useGetV1Invoices<TError = unknown>(
  args: InferRequestType<typeof client.v1.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1InvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Invoices<TError = unknown>(
  args: InferRequestType<typeof client.v1.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1InvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1InvoicesKey() {
  return ['v1', '/v1/invoices', 'POST'] as const
}

export function usePostV1Invoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.invoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.invoices.$post> }) =>
        parseResponse(client.v1.invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InvoicesSearchKey(
  args: InferRequestType<typeof client.v1.invoices.search.$get>,
) {
  return ['v1', '/v1/invoices/search', args] as const
}

export function useGetV1InvoicesSearch<TError = unknown>(
  args: InferRequestType<typeof client.v1.invoices.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.search.$get>>>>
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
        ? getGetV1InvoicesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoices.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InvoicesSearch<TError = unknown>(
  args: InferRequestType<typeof client.v1.invoices.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.search.$get>>>>
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
        ? getGetV1InvoicesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoices.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1InvoicesUpcomingKey(
  args: InferRequestType<typeof client.v1.invoices.upcoming.$get>,
) {
  return ['v1', '/v1/invoices/upcoming', args] as const
}

export function useGetV1InvoicesUpcoming<TError = unknown>(
  args: InferRequestType<typeof client.v1.invoices.upcoming.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.upcoming.$get>>>
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
        ? getGetV1InvoicesUpcomingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.upcoming.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoices.upcoming.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InvoicesUpcoming<TError = unknown>(
  args: InferRequestType<typeof client.v1.invoices.upcoming.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.upcoming.$get>>>
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
        ? getGetV1InvoicesUpcomingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.upcoming.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoices.upcoming.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1InvoicesUpcomingLinesKey(
  args: InferRequestType<typeof client.v1.invoices.upcoming.lines.$get>,
) {
  return ['v1', '/v1/invoices/upcoming/lines', args] as const
}

export function useGetV1InvoicesUpcomingLines<TError = unknown>(
  args: InferRequestType<typeof client.v1.invoices.upcoming.lines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.upcoming.lines.$get>>>
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
        ? getGetV1InvoicesUpcomingLinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.upcoming.lines.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoices.upcoming.lines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InvoicesUpcomingLines<TError = unknown>(
  args: InferRequestType<typeof client.v1.invoices.upcoming.lines.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.upcoming.lines.$get>>>
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
        ? getGetV1InvoicesUpcomingLinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.invoices.upcoming.lines.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoices.upcoming.lines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1InvoicesInvoiceKey(
  args: InferRequestType<(typeof client.v1.invoices)[':invoice']['$get']>,
) {
  return ['v1', '/v1/invoices/:invoice', args] as const
}

export function useGetV1InvoicesInvoice<TError = unknown>(
  args: InferRequestType<(typeof client.v1.invoices)[':invoice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invoices)[':invoice']['$get']>>>
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
        ? getGetV1InvoicesInvoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invoices)[':invoice']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoices[':invoice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InvoicesInvoice<TError = unknown>(
  args: InferRequestType<(typeof client.v1.invoices)[':invoice']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invoices)[':invoice']['$get']>>>
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
        ? getGetV1InvoicesInvoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invoices)[':invoice']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoices[':invoice'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1InvoicesInvoiceKey() {
  return ['v1', '/v1/invoices/:invoice', 'POST'] as const
}

export function usePostV1InvoicesInvoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.invoices)[':invoice']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invoices)[':invoice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoicesInvoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.invoices)[':invoice']['$post']> },
      ) => parseResponse(client.v1.invoices[':invoice'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1InvoicesInvoiceKey() {
  return ['v1', '/v1/invoices/:invoice', 'DELETE'] as const
}

export function useDeleteV1InvoicesInvoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoice']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invoices)[':invoice']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1InvoicesInvoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.invoices)[':invoice']['$delete']> },
      ) => parseResponse(client.v1.invoices[':invoice'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1InvoicesInvoiceFinalizeKey() {
  return ['v1', '/v1/invoices/:invoice/finalize', 'POST'] as const
}

export function usePostV1InvoicesInvoiceFinalize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoice']['finalize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invoices)[':invoice']['finalize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoicesInvoiceFinalizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.invoices)[':invoice']['finalize']['$post']> },
      ) => parseResponse(client.v1.invoices[':invoice'].finalize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1InvoicesInvoiceLinesKey(
  args: InferRequestType<(typeof client.v1.invoices)[':invoice']['lines']['$get']>,
) {
  return ['v1', '/v1/invoices/:invoice/lines', args] as const
}

export function useGetV1InvoicesInvoiceLines<TError = unknown>(
  args: InferRequestType<(typeof client.v1.invoices)[':invoice']['lines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.invoices)[':invoice']['lines']['$get']>>
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
        ? getGetV1InvoicesInvoiceLinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.invoices)[':invoice']['lines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoices[':invoice'].lines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InvoicesInvoiceLines<TError = unknown>(
  args: InferRequestType<(typeof client.v1.invoices)[':invoice']['lines']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.invoices)[':invoice']['lines']['$get']>>
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
        ? getGetV1InvoicesInvoiceLinesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.invoices)[':invoice']['lines']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.invoices[':invoice'].lines.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1InvoicesInvoiceMarkUncollectibleKey() {
  return ['v1', '/v1/invoices/:invoice/mark_uncollectible', 'POST'] as const
}

export function usePostV1InvoicesInvoiceMarkUncollectible<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.invoices)[':invoice']['mark_uncollectible']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invoices)[':invoice']['mark_uncollectible']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoicesInvoiceMarkUncollectibleKey()
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
            (typeof client.v1.invoices)[':invoice']['mark_uncollectible']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.invoices[':invoice'].mark_uncollectible.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1InvoicesInvoicePayKey() {
  return ['v1', '/v1/invoices/:invoice/pay', 'POST'] as const
}

export function usePostV1InvoicesInvoicePay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoice']['pay']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invoices)[':invoice']['pay']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoicesInvoicePayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.invoices)[':invoice']['pay']['$post']> },
      ) => parseResponse(client.v1.invoices[':invoice'].pay.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1InvoicesInvoiceSendKey() {
  return ['v1', '/v1/invoices/:invoice/send', 'POST'] as const
}

export function usePostV1InvoicesInvoiceSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoice']['send']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invoices)[':invoice']['send']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoicesInvoiceSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.invoices)[':invoice']['send']['$post']> },
      ) => parseResponse(client.v1.invoices[':invoice'].send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1InvoicesInvoiceVoidKey() {
  return ['v1', '/v1/invoices/:invoice/void', 'POST'] as const
}

export function usePostV1InvoicesInvoiceVoid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.invoices)[':invoice']['void']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.invoices)[':invoice']['void']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InvoicesInvoiceVoidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.invoices)[':invoice']['void']['$post']> },
      ) => parseResponse(client.v1.invoices[':invoice'].void.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1IssuingAuthorizationsKey(
  args: InferRequestType<typeof client.v1.issuing.authorizations.$get>,
) {
  return ['v1', '/v1/issuing/authorizations', args] as const
}

export function useGetV1IssuingAuthorizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.issuing.authorizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.authorizations.$get>>>
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
        ? getGetV1IssuingAuthorizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.authorizations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.issuing.authorizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IssuingAuthorizations<TError = unknown>(
  args: InferRequestType<typeof client.v1.issuing.authorizations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.authorizations.$get>>>
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
        ? getGetV1IssuingAuthorizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.authorizations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.issuing.authorizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IssuingAuthorizationsAuthorizationKey(
  args: InferRequestType<(typeof client.v1.issuing.authorizations)[':authorization']['$get']>,
) {
  return ['v1', '/v1/issuing/authorizations/:authorization', args] as const
}

export function useGetV1IssuingAuthorizationsAuthorization<TError = unknown>(
  args: InferRequestType<(typeof client.v1.issuing.authorizations)[':authorization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.authorizations)[':authorization']['$get']>>
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
        ? getGetV1IssuingAuthorizationsAuthorizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.authorizations)[':authorization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.issuing.authorizations[':authorization'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IssuingAuthorizationsAuthorization<TError = unknown>(
  args: InferRequestType<(typeof client.v1.issuing.authorizations)[':authorization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.authorizations)[':authorization']['$get']>>
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
        ? getGetV1IssuingAuthorizationsAuthorizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.authorizations)[':authorization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.issuing.authorizations[':authorization'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1IssuingAuthorizationsAuthorizationKey() {
  return ['v1', '/v1/issuing/authorizations/:authorization', 'POST'] as const
}

export function usePostV1IssuingAuthorizationsAuthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.issuing.authorizations)[':authorization']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.issuing.authorizations)[':authorization']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IssuingAuthorizationsAuthorizationKey()
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
            (typeof client.v1.issuing.authorizations)[':authorization']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.issuing.authorizations[':authorization'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1IssuingAuthorizationsAuthorizationApproveKey() {
  return ['v1', '/v1/issuing/authorizations/:authorization/approve', 'POST'] as const
}

export function usePostV1IssuingAuthorizationsAuthorizationApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.issuing.authorizations)[':authorization']['approve']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.issuing.authorizations)[':authorization']['approve']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IssuingAuthorizationsAuthorizationApproveKey()
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
            (typeof client.v1.issuing.authorizations)[':authorization']['approve']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.issuing.authorizations[':authorization'].approve.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1IssuingAuthorizationsAuthorizationDeclineKey() {
  return ['v1', '/v1/issuing/authorizations/:authorization/decline', 'POST'] as const
}

export function usePostV1IssuingAuthorizationsAuthorizationDecline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.issuing.authorizations)[':authorization']['decline']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.issuing.authorizations)[':authorization']['decline']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IssuingAuthorizationsAuthorizationDeclineKey()
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
            (typeof client.v1.issuing.authorizations)[':authorization']['decline']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.issuing.authorizations[':authorization'].decline.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1IssuingCardholdersKey(
  args: InferRequestType<typeof client.v1.issuing.cardholders.$get>,
) {
  return ['v1', '/v1/issuing/cardholders', args] as const
}

export function useGetV1IssuingCardholders<TError = unknown>(
  args: InferRequestType<typeof client.v1.issuing.cardholders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.cardholders.$get>>>
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
        ? getGetV1IssuingCardholdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.cardholders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.issuing.cardholders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IssuingCardholders<TError = unknown>(
  args: InferRequestType<typeof client.v1.issuing.cardholders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.cardholders.$get>>>
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
        ? getGetV1IssuingCardholdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.cardholders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.issuing.cardholders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1IssuingCardholdersKey() {
  return ['v1', '/v1/issuing/cardholders', 'POST'] as const
}

export function usePostV1IssuingCardholders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.cardholders.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.issuing.cardholders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IssuingCardholdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.issuing.cardholders.$post> },
      ) => parseResponse(client.v1.issuing.cardholders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1IssuingCardholdersCardholderKey(
  args: InferRequestType<(typeof client.v1.issuing.cardholders)[':cardholder']['$get']>,
) {
  return ['v1', '/v1/issuing/cardholders/:cardholder', args] as const
}

export function useGetV1IssuingCardholdersCardholder<TError = unknown>(
  args: InferRequestType<(typeof client.v1.issuing.cardholders)[':cardholder']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.cardholders)[':cardholder']['$get']>>
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
        ? getGetV1IssuingCardholdersCardholderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.cardholders)[':cardholder']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.issuing.cardholders[':cardholder'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IssuingCardholdersCardholder<TError = unknown>(
  args: InferRequestType<(typeof client.v1.issuing.cardholders)[':cardholder']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.cardholders)[':cardholder']['$get']>>
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
        ? getGetV1IssuingCardholdersCardholderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.cardholders)[':cardholder']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.issuing.cardholders[':cardholder'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1IssuingCardholdersCardholderKey() {
  return ['v1', '/v1/issuing/cardholders/:cardholder', 'POST'] as const
}

export function usePostV1IssuingCardholdersCardholder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.issuing.cardholders)[':cardholder']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.issuing.cardholders)[':cardholder']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IssuingCardholdersCardholderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.issuing.cardholders)[':cardholder']['$post']>
        },
      ) => parseResponse(client.v1.issuing.cardholders[':cardholder'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1IssuingCardsKey(
  args: InferRequestType<typeof client.v1.issuing.cards.$get>,
) {
  return ['v1', '/v1/issuing/cards', args] as const
}

export function useGetV1IssuingCards<TError = unknown>(
  args: InferRequestType<typeof client.v1.issuing.cards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.cards.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1IssuingCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.cards.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.issuing.cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IssuingCards<TError = unknown>(
  args: InferRequestType<typeof client.v1.issuing.cards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.cards.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1IssuingCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.cards.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.issuing.cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1IssuingCardsKey() {
  return ['v1', '/v1/issuing/cards', 'POST'] as const
}

export function usePostV1IssuingCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.cards.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.issuing.cards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IssuingCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.issuing.cards.$post> }) =>
        parseResponse(client.v1.issuing.cards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1IssuingCardsCardKey(
  args: InferRequestType<(typeof client.v1.issuing.cards)[':card']['$get']>,
) {
  return ['v1', '/v1/issuing/cards/:card', args] as const
}

export function useGetV1IssuingCardsCard<TError = unknown>(
  args: InferRequestType<(typeof client.v1.issuing.cards)[':card']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.cards)[':card']['$get']>>
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
        ? getGetV1IssuingCardsCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.cards)[':card']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.issuing.cards[':card'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IssuingCardsCard<TError = unknown>(
  args: InferRequestType<(typeof client.v1.issuing.cards)[':card']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.cards)[':card']['$get']>>
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
        ? getGetV1IssuingCardsCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.cards)[':card']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.issuing.cards[':card'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1IssuingCardsCardKey() {
  return ['v1', '/v1/issuing/cards/:card', 'POST'] as const
}

export function usePostV1IssuingCardsCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.issuing.cards)[':card']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.issuing.cards)[':card']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IssuingCardsCardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.issuing.cards)[':card']['$post']> },
      ) => parseResponse(client.v1.issuing.cards[':card'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1IssuingDisputesKey(
  args: InferRequestType<typeof client.v1.issuing.disputes.$get>,
) {
  return ['v1', '/v1/issuing/disputes', args] as const
}

export function useGetV1IssuingDisputes<TError = unknown>(
  args: InferRequestType<typeof client.v1.issuing.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.disputes.$get>>>
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
        ? getGetV1IssuingDisputesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.disputes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.issuing.disputes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IssuingDisputes<TError = unknown>(
  args: InferRequestType<typeof client.v1.issuing.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.disputes.$get>>>
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
        ? getGetV1IssuingDisputesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.disputes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.issuing.disputes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1IssuingDisputesKey() {
  return ['v1', '/v1/issuing/disputes', 'POST'] as const
}

export function usePostV1IssuingDisputes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.disputes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.issuing.disputes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IssuingDisputesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.issuing.disputes.$post> }) =>
        parseResponse(client.v1.issuing.disputes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1IssuingDisputesDisputeKey(
  args: InferRequestType<(typeof client.v1.issuing.disputes)[':dispute']['$get']>,
) {
  return ['v1', '/v1/issuing/disputes/:dispute', args] as const
}

export function useGetV1IssuingDisputesDispute<TError = unknown>(
  args: InferRequestType<(typeof client.v1.issuing.disputes)[':dispute']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.disputes)[':dispute']['$get']>>
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
        ? getGetV1IssuingDisputesDisputeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.disputes)[':dispute']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.issuing.disputes[':dispute'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IssuingDisputesDispute<TError = unknown>(
  args: InferRequestType<(typeof client.v1.issuing.disputes)[':dispute']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.disputes)[':dispute']['$get']>>
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
        ? getGetV1IssuingDisputesDisputeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.disputes)[':dispute']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.issuing.disputes[':dispute'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1IssuingDisputesDisputeKey() {
  return ['v1', '/v1/issuing/disputes/:dispute', 'POST'] as const
}

export function usePostV1IssuingDisputesDispute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.issuing.disputes)[':dispute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.issuing.disputes)[':dispute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IssuingDisputesDisputeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.issuing.disputes)[':dispute']['$post']> },
      ) => parseResponse(client.v1.issuing.disputes[':dispute'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1IssuingDisputesDisputeSubmitKey() {
  return ['v1', '/v1/issuing/disputes/:dispute/submit', 'POST'] as const
}

export function usePostV1IssuingDisputesDisputeSubmit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.issuing.disputes)[':dispute']['submit']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.issuing.disputes)[':dispute']['submit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IssuingDisputesDisputeSubmitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.issuing.disputes)[':dispute']['submit']['$post']>
        },
      ) => parseResponse(client.v1.issuing.disputes[':dispute'].submit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1IssuingSettlementsKey(
  args: InferRequestType<typeof client.v1.issuing.settlements.$get>,
) {
  return ['v1', '/v1/issuing/settlements', args] as const
}

export function useGetV1IssuingSettlements<TError = unknown>(
  args: InferRequestType<typeof client.v1.issuing.settlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.settlements.$get>>>
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
        ? getGetV1IssuingSettlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.settlements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.issuing.settlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IssuingSettlements<TError = unknown>(
  args: InferRequestType<typeof client.v1.issuing.settlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.settlements.$get>>>
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
        ? getGetV1IssuingSettlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.settlements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.issuing.settlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IssuingSettlementsSettlementKey(
  args: InferRequestType<(typeof client.v1.issuing.settlements)[':settlement']['$get']>,
) {
  return ['v1', '/v1/issuing/settlements/:settlement', args] as const
}

export function useGetV1IssuingSettlementsSettlement<TError = unknown>(
  args: InferRequestType<(typeof client.v1.issuing.settlements)[':settlement']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.settlements)[':settlement']['$get']>>
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
        ? getGetV1IssuingSettlementsSettlementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.settlements)[':settlement']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.issuing.settlements[':settlement'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IssuingSettlementsSettlement<TError = unknown>(
  args: InferRequestType<(typeof client.v1.issuing.settlements)[':settlement']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.settlements)[':settlement']['$get']>>
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
        ? getGetV1IssuingSettlementsSettlementKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.settlements)[':settlement']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.issuing.settlements[':settlement'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1IssuingSettlementsSettlementKey() {
  return ['v1', '/v1/issuing/settlements/:settlement', 'POST'] as const
}

export function usePostV1IssuingSettlementsSettlement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.issuing.settlements)[':settlement']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.issuing.settlements)[':settlement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IssuingSettlementsSettlementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.issuing.settlements)[':settlement']['$post']>
        },
      ) => parseResponse(client.v1.issuing.settlements[':settlement'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1IssuingTransactionsKey(
  args: InferRequestType<typeof client.v1.issuing.transactions.$get>,
) {
  return ['v1', '/v1/issuing/transactions', args] as const
}

export function useGetV1IssuingTransactions<TError = unknown>(
  args: InferRequestType<typeof client.v1.issuing.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.transactions.$get>>>
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
        ? getGetV1IssuingTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.issuing.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IssuingTransactions<TError = unknown>(
  args: InferRequestType<typeof client.v1.issuing.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.transactions.$get>>>
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
        ? getGetV1IssuingTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.issuing.transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.issuing.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IssuingTransactionsTransactionKey(
  args: InferRequestType<(typeof client.v1.issuing.transactions)[':transaction']['$get']>,
) {
  return ['v1', '/v1/issuing/transactions/:transaction', args] as const
}

export function useGetV1IssuingTransactionsTransaction<TError = unknown>(
  args: InferRequestType<(typeof client.v1.issuing.transactions)[':transaction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.transactions)[':transaction']['$get']>>
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
        ? getGetV1IssuingTransactionsTransactionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.transactions)[':transaction']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.issuing.transactions[':transaction'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IssuingTransactionsTransaction<TError = unknown>(
  args: InferRequestType<(typeof client.v1.issuing.transactions)[':transaction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.transactions)[':transaction']['$get']>>
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
        ? getGetV1IssuingTransactionsTransactionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.issuing.transactions)[':transaction']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.issuing.transactions[':transaction'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1IssuingTransactionsTransactionKey() {
  return ['v1', '/v1/issuing/transactions/:transaction', 'POST'] as const
}

export function usePostV1IssuingTransactionsTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.issuing.transactions)[':transaction']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.issuing.transactions)[':transaction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IssuingTransactionsTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.issuing.transactions)[':transaction']['$post']>
        },
      ) => parseResponse(client.v1.issuing.transactions[':transaction'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1LinkAccountSessionsKey() {
  return ['v1', '/v1/link_account_sessions', 'POST'] as const
}

export function usePostV1LinkAccountSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.link_account_sessions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.link_account_sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LinkAccountSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.link_account_sessions.$post> },
      ) => parseResponse(client.v1.link_account_sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LinkAccountSessionsSessionKey(
  args: InferRequestType<(typeof client.v1.link_account_sessions)[':session']['$get']>,
) {
  return ['v1', '/v1/link_account_sessions/:session', args] as const
}

export function useGetV1LinkAccountSessionsSession<TError = unknown>(
  args: InferRequestType<(typeof client.v1.link_account_sessions)[':session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.link_account_sessions)[':session']['$get']>>
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
        ? getGetV1LinkAccountSessionsSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.link_account_sessions)[':session']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.link_account_sessions[':session'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LinkAccountSessionsSession<TError = unknown>(
  args: InferRequestType<(typeof client.v1.link_account_sessions)[':session']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.link_account_sessions)[':session']['$get']>>
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
        ? getGetV1LinkAccountSessionsSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.link_account_sessions)[':session']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.link_account_sessions[':session'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1LinkedAccountsKey(
  args: InferRequestType<typeof client.v1.linked_accounts.$get>,
) {
  return ['v1', '/v1/linked_accounts', args] as const
}

export function useGetV1LinkedAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.linked_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.linked_accounts.$get>>>>
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
        ? getGetV1LinkedAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.linked_accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.linked_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LinkedAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.linked_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.linked_accounts.$get>>>>
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
        ? getGetV1LinkedAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.linked_accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.linked_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1LinkedAccountsAccountKey(
  args: InferRequestType<(typeof client.v1.linked_accounts)[':account']['$get']>,
) {
  return ['v1', '/v1/linked_accounts/:account', args] as const
}

export function useGetV1LinkedAccountsAccount<TError = unknown>(
  args: InferRequestType<(typeof client.v1.linked_accounts)[':account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.linked_accounts)[':account']['$get']>>
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
        ? getGetV1LinkedAccountsAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.linked_accounts)[':account']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.linked_accounts[':account'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LinkedAccountsAccount<TError = unknown>(
  args: InferRequestType<(typeof client.v1.linked_accounts)[':account']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.linked_accounts)[':account']['$get']>>
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
        ? getGetV1LinkedAccountsAccountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.linked_accounts)[':account']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.linked_accounts[':account'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1LinkedAccountsAccountDisconnectKey() {
  return ['v1', '/v1/linked_accounts/:account/disconnect', 'POST'] as const
}

export function usePostV1LinkedAccountsAccountDisconnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.linked_accounts)[':account']['disconnect']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.linked_accounts)[':account']['disconnect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LinkedAccountsAccountDisconnectKey()
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
            (typeof client.v1.linked_accounts)[':account']['disconnect']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.linked_accounts[':account'].disconnect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LinkedAccountsAccountOwnersKey(
  args: InferRequestType<(typeof client.v1.linked_accounts)[':account']['owners']['$get']>,
) {
  return ['v1', '/v1/linked_accounts/:account/owners', args] as const
}

export function useGetV1LinkedAccountsAccountOwners<TError = unknown>(
  args: InferRequestType<(typeof client.v1.linked_accounts)[':account']['owners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.linked_accounts)[':account']['owners']['$get']>>
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
        ? getGetV1LinkedAccountsAccountOwnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.linked_accounts)[':account']['owners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.linked_accounts[':account'].owners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LinkedAccountsAccountOwners<TError = unknown>(
  args: InferRequestType<(typeof client.v1.linked_accounts)[':account']['owners']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.linked_accounts)[':account']['owners']['$get']>>
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
        ? getGetV1LinkedAccountsAccountOwnersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.linked_accounts)[':account']['owners']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.linked_accounts[':account'].owners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1LinkedAccountsAccountRefreshKey() {
  return ['v1', '/v1/linked_accounts/:account/refresh', 'POST'] as const
}

export function usePostV1LinkedAccountsAccountRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.linked_accounts)[':account']['refresh']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.linked_accounts)[':account']['refresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LinkedAccountsAccountRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.linked_accounts)[':account']['refresh']['$post']>
        },
      ) => parseResponse(client.v1.linked_accounts[':account'].refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MandatesMandateKey(
  args: InferRequestType<(typeof client.v1.mandates)[':mandate']['$get']>,
) {
  return ['v1', '/v1/mandates/:mandate', args] as const
}

export function useGetV1MandatesMandate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.mandates)[':mandate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.mandates)[':mandate']['$get']>>>
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
        ? getGetV1MandatesMandateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.mandates)[':mandate']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.mandates[':mandate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MandatesMandate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.mandates)[':mandate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.mandates)[':mandate']['$get']>>>
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
        ? getGetV1MandatesMandateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.mandates)[':mandate']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.mandates[':mandate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PaymentIntentsKey(
  args: InferRequestType<typeof client.v1.payment_intents.$get>,
) {
  return ['v1', '/v1/payment_intents', args] as const
}

export function useGetV1PaymentIntents<TError = unknown>(
  args: InferRequestType<typeof client.v1.payment_intents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_intents.$get>>>>
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
        ? getGetV1PaymentIntentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_intents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payment_intents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentIntents<TError = unknown>(
  args: InferRequestType<typeof client.v1.payment_intents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_intents.$get>>>>
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
        ? getGetV1PaymentIntentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_intents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payment_intents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentIntentsKey() {
  return ['v1', '/v1/payment_intents', 'POST'] as const
}

export function usePostV1PaymentIntents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_intents.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.payment_intents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentIntentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.payment_intents.$post> }) =>
        parseResponse(client.v1.payment_intents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentIntentsSearchKey(
  args: InferRequestType<typeof client.v1.payment_intents.search.$get>,
) {
  return ['v1', '/v1/payment_intents/search', args] as const
}

export function useGetV1PaymentIntentsSearch<TError = unknown>(
  args: InferRequestType<typeof client.v1.payment_intents.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_intents.search.$get>>>
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
        ? getGetV1PaymentIntentsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_intents.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payment_intents.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentIntentsSearch<TError = unknown>(
  args: InferRequestType<typeof client.v1.payment_intents.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_intents.search.$get>>>
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
        ? getGetV1PaymentIntentsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_intents.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payment_intents.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PaymentIntentsIntentKey(
  args: InferRequestType<(typeof client.v1.payment_intents)[':intent']['$get']>,
) {
  return ['v1', '/v1/payment_intents/:intent', args] as const
}

export function useGetV1PaymentIntentsIntent<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payment_intents)[':intent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payment_intents)[':intent']['$get']>>
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
        ? getGetV1PaymentIntentsIntentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payment_intents)[':intent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payment_intents[':intent'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentIntentsIntent<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payment_intents)[':intent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payment_intents)[':intent']['$get']>>
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
        ? getGetV1PaymentIntentsIntentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payment_intents)[':intent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payment_intents[':intent'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentIntentsIntentKey() {
  return ['v1', '/v1/payment_intents/:intent', 'POST'] as const
}

export function usePostV1PaymentIntentsIntent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payment_intents)[':intent']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payment_intents)[':intent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentIntentsIntentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.payment_intents)[':intent']['$post']> },
      ) => parseResponse(client.v1.payment_intents[':intent'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PaymentIntentsIntentApplyCustomerBalanceKey() {
  return ['v1', '/v1/payment_intents/:intent/apply_customer_balance', 'POST'] as const
}

export function usePostV1PaymentIntentsIntentApplyCustomerBalance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.payment_intents)[':intent']['apply_customer_balance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.payment_intents)[':intent']['apply_customer_balance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentIntentsIntentApplyCustomerBalanceKey()
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
            (typeof client.v1.payment_intents)[':intent']['apply_customer_balance']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.payment_intents[':intent'].apply_customer_balance.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PaymentIntentsIntentCancelKey() {
  return ['v1', '/v1/payment_intents/:intent/cancel', 'POST'] as const
}

export function usePostV1PaymentIntentsIntentCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payment_intents)[':intent']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payment_intents)[':intent']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentIntentsIntentCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.payment_intents)[':intent']['cancel']['$post']>
        },
      ) => parseResponse(client.v1.payment_intents[':intent'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PaymentIntentsIntentCaptureKey() {
  return ['v1', '/v1/payment_intents/:intent/capture', 'POST'] as const
}

export function usePostV1PaymentIntentsIntentCapture<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payment_intents)[':intent']['capture']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payment_intents)[':intent']['capture']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentIntentsIntentCaptureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.payment_intents)[':intent']['capture']['$post']>
        },
      ) => parseResponse(client.v1.payment_intents[':intent'].capture.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PaymentIntentsIntentConfirmKey() {
  return ['v1', '/v1/payment_intents/:intent/confirm', 'POST'] as const
}

export function usePostV1PaymentIntentsIntentConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payment_intents)[':intent']['confirm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payment_intents)[':intent']['confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentIntentsIntentConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.payment_intents)[':intent']['confirm']['$post']>
        },
      ) => parseResponse(client.v1.payment_intents[':intent'].confirm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PaymentIntentsIntentIncrementAuthorizationKey() {
  return ['v1', '/v1/payment_intents/:intent/increment_authorization', 'POST'] as const
}

export function usePostV1PaymentIntentsIntentIncrementAuthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.payment_intents)[':intent']['increment_authorization']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.payment_intents)[':intent']['increment_authorization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentIntentsIntentIncrementAuthorizationKey()
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
            (typeof client.v1.payment_intents)[':intent']['increment_authorization']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.payment_intents[':intent'].increment_authorization.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PaymentIntentsIntentVerifyMicrodepositsKey() {
  return ['v1', '/v1/payment_intents/:intent/verify_microdeposits', 'POST'] as const
}

export function usePostV1PaymentIntentsIntentVerifyMicrodeposits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.payment_intents)[':intent']['verify_microdeposits']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payment_intents)[':intent']['verify_microdeposits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentIntentsIntentVerifyMicrodepositsKey()
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
            (typeof client.v1.payment_intents)[':intent']['verify_microdeposits']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.payment_intents[':intent'].verify_microdeposits.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentLinksKey(
  args: InferRequestType<typeof client.v1.payment_links.$get>,
) {
  return ['v1', '/v1/payment_links', args] as const
}

export function useGetV1PaymentLinks<TError = unknown>(
  args: InferRequestType<typeof client.v1.payment_links.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_links.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PaymentLinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_links.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payment_links.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentLinks<TError = unknown>(
  args: InferRequestType<typeof client.v1.payment_links.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_links.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PaymentLinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_links.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payment_links.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentLinksKey() {
  return ['v1', '/v1/payment_links', 'POST'] as const
}

export function usePostV1PaymentLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_links.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.payment_links.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.payment_links.$post> }) =>
        parseResponse(client.v1.payment_links.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentLinksPaymentLinkKey(
  args: InferRequestType<(typeof client.v1.payment_links)[':payment_link']['$get']>,
) {
  return ['v1', '/v1/payment_links/:payment_link', args] as const
}

export function useGetV1PaymentLinksPaymentLink<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payment_links)[':payment_link']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payment_links)[':payment_link']['$get']>>
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
        ? getGetV1PaymentLinksPaymentLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payment_links)[':payment_link']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payment_links[':payment_link'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentLinksPaymentLink<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payment_links)[':payment_link']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payment_links)[':payment_link']['$get']>>
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
        ? getGetV1PaymentLinksPaymentLinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payment_links)[':payment_link']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payment_links[':payment_link'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentLinksPaymentLinkKey() {
  return ['v1', '/v1/payment_links/:payment_link', 'POST'] as const
}

export function usePostV1PaymentLinksPaymentLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payment_links)[':payment_link']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payment_links)[':payment_link']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentLinksPaymentLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.payment_links)[':payment_link']['$post']> },
      ) => parseResponse(client.v1.payment_links[':payment_link'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentLinksPaymentLinkLineItemsKey(
  args: InferRequestType<(typeof client.v1.payment_links)[':payment_link']['line_items']['$get']>,
) {
  return ['v1', '/v1/payment_links/:payment_link/line_items', args] as const
}

export function useGetV1PaymentLinksPaymentLinkLineItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payment_links)[':payment_link']['line_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.payment_links)[':payment_link']['line_items']['$get']>
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
        ? getGetV1PaymentLinksPaymentLinkLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.payment_links)[':payment_link']['line_items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.payment_links[':payment_link'].line_items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentLinksPaymentLinkLineItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payment_links)[':payment_link']['line_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.payment_links)[':payment_link']['line_items']['$get']>
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
        ? getGetV1PaymentLinksPaymentLinkLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.payment_links)[':payment_link']['line_items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.payment_links[':payment_link'].line_items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1PaymentMethodsKey(
  args: InferRequestType<typeof client.v1.payment_methods.$get>,
) {
  return ['v1', '/v1/payment_methods', args] as const
}

export function useGetV1PaymentMethods<TError = unknown>(
  args: InferRequestType<typeof client.v1.payment_methods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_methods.$get>>>>
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
        ? getGetV1PaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_methods.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payment_methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentMethods<TError = unknown>(
  args: InferRequestType<typeof client.v1.payment_methods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_methods.$get>>>>
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
        ? getGetV1PaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_methods.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payment_methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentMethodsKey() {
  return ['v1', '/v1/payment_methods', 'POST'] as const
}

export function usePostV1PaymentMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment_methods.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.payment_methods.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.payment_methods.$post> }) =>
        parseResponse(client.v1.payment_methods.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentMethodsPaymentMethodKey(
  args: InferRequestType<(typeof client.v1.payment_methods)[':payment_method']['$get']>,
) {
  return ['v1', '/v1/payment_methods/:payment_method', args] as const
}

export function useGetV1PaymentMethodsPaymentMethod<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payment_methods)[':payment_method']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payment_methods)[':payment_method']['$get']>>
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
        ? getGetV1PaymentMethodsPaymentMethodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payment_methods)[':payment_method']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.payment_methods[':payment_method'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentMethodsPaymentMethod<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payment_methods)[':payment_method']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payment_methods)[':payment_method']['$get']>>
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
        ? getGetV1PaymentMethodsPaymentMethodKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payment_methods)[':payment_method']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.payment_methods[':payment_method'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentMethodsPaymentMethodKey() {
  return ['v1', '/v1/payment_methods/:payment_method', 'POST'] as const
}

export function usePostV1PaymentMethodsPaymentMethod<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payment_methods)[':payment_method']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payment_methods)[':payment_method']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentMethodsPaymentMethodKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.payment_methods)[':payment_method']['$post']>
        },
      ) => parseResponse(client.v1.payment_methods[':payment_method'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PaymentMethodsPaymentMethodAttachKey() {
  return ['v1', '/v1/payment_methods/:payment_method/attach', 'POST'] as const
}

export function usePostV1PaymentMethodsPaymentMethodAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.payment_methods)[':payment_method']['attach']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payment_methods)[':payment_method']['attach']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentMethodsPaymentMethodAttachKey()
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
            (typeof client.v1.payment_methods)[':payment_method']['attach']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.payment_methods[':payment_method'].attach.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1PaymentMethodsPaymentMethodDetachKey() {
  return ['v1', '/v1/payment_methods/:payment_method/detach', 'POST'] as const
}

export function usePostV1PaymentMethodsPaymentMethodDetach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.payment_methods)[':payment_method']['detach']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payment_methods)[':payment_method']['detach']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentMethodsPaymentMethodDetachKey()
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
            (typeof client.v1.payment_methods)[':payment_method']['detach']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.payment_methods[':payment_method'].detach.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PayoutsKey(args: InferRequestType<typeof client.v1.payouts.$get>) {
  return ['v1', '/v1/payouts', args] as const
}

export function useGetV1Payouts<TError = unknown>(
  args: InferRequestType<typeof client.v1.payouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payouts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PayoutsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payouts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Payouts<TError = unknown>(
  args: InferRequestType<typeof client.v1.payouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payouts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PayoutsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payouts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PayoutsKey() {
  return ['v1', '/v1/payouts', 'POST'] as const
}

export function usePostV1Payouts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payouts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.payouts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PayoutsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.payouts.$post> }) =>
        parseResponse(client.v1.payouts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PayoutsPayoutKey(
  args: InferRequestType<(typeof client.v1.payouts)[':payout']['$get']>,
) {
  return ['v1', '/v1/payouts/:payout', args] as const
}

export function useGetV1PayoutsPayout<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payouts)[':payout']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payouts)[':payout']['$get']>>>
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
        ? getGetV1PayoutsPayoutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payouts)[':payout']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payouts[':payout'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PayoutsPayout<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payouts)[':payout']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payouts)[':payout']['$get']>>>
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
        ? getGetV1PayoutsPayoutKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payouts)[':payout']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payouts[':payout'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PayoutsPayoutKey() {
  return ['v1', '/v1/payouts/:payout', 'POST'] as const
}

export function usePostV1PayoutsPayout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payouts)[':payout']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payouts)[':payout']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PayoutsPayoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.payouts)[':payout']['$post']> },
      ) => parseResponse(client.v1.payouts[':payout'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PayoutsPayoutCancelKey() {
  return ['v1', '/v1/payouts/:payout/cancel', 'POST'] as const
}

export function usePostV1PayoutsPayoutCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payouts)[':payout']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payouts)[':payout']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PayoutsPayoutCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.payouts)[':payout']['cancel']['$post']> },
      ) => parseResponse(client.v1.payouts[':payout'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PayoutsPayoutReverseKey() {
  return ['v1', '/v1/payouts/:payout/reverse', 'POST'] as const
}

export function usePostV1PayoutsPayoutReverse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payouts)[':payout']['reverse']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payouts)[':payout']['reverse']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PayoutsPayoutReverseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.payouts)[':payout']['reverse']['$post']> },
      ) => parseResponse(client.v1.payouts[':payout'].reverse.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PlansKey(args: InferRequestType<typeof client.v1.plans.$get>) {
  return ['v1', '/v1/plans', args] as const
}

export function useGetV1Plans<TError = unknown>(
  args: InferRequestType<typeof client.v1.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.plans.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.plans.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.plans.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1Plans<TError = unknown>(
  args: InferRequestType<typeof client.v1.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.plans.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.plans.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.plans.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV1PlansKey() {
  return ['v1', '/v1/plans', 'POST'] as const
}

export function usePostV1Plans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.plans.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.plans.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.plans.$post> }) =>
        parseResponse(client.v1.plans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PlansPlanKey(
  args: InferRequestType<(typeof client.v1.plans)[':plan']['$get']>,
) {
  return ['v1', '/v1/plans/:plan', args] as const
}

export function useGetV1PlansPlan<TError = unknown>(
  args: InferRequestType<(typeof client.v1.plans)[':plan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.plans)[':plan']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1PlansPlanKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.plans)[':plan']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.plans[':plan'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PlansPlan<TError = unknown>(
  args: InferRequestType<(typeof client.v1.plans)[':plan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.plans)[':plan']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1PlansPlanKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.plans)[':plan']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.plans[':plan'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PlansPlanKey() {
  return ['v1', '/v1/plans/:plan', 'POST'] as const
}

export function usePostV1PlansPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.plans)[':plan']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.plans)[':plan']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PlansPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.plans)[':plan']['$post']> },
      ) => parseResponse(client.v1.plans[':plan'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1PlansPlanKey() {
  return ['v1', '/v1/plans/:plan', 'DELETE'] as const
}

export function useDeleteV1PlansPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.plans)[':plan']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.plans)[':plan']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1PlansPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.plans)[':plan']['$delete']> },
      ) => parseResponse(client.v1.plans[':plan'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PricesKey(args: InferRequestType<typeof client.v1.prices.$get>) {
  return ['v1', '/v1/prices', args] as const
}

export function useGetV1Prices<TError = unknown>(
  args: InferRequestType<typeof client.v1.prices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PricesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prices.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.prices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Prices<TError = unknown>(
  args: InferRequestType<typeof client.v1.prices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PricesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prices.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.prices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PricesKey() {
  return ['v1', '/v1/prices', 'POST'] as const
}

export function usePostV1Prices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prices.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.prices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PricesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.prices.$post> }) =>
        parseResponse(client.v1.prices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PricesSearchKey(
  args: InferRequestType<typeof client.v1.prices.search.$get>,
) {
  return ['v1', '/v1/prices/search', args] as const
}

export function useGetV1PricesSearch<TError = unknown>(
  args: InferRequestType<typeof client.v1.prices.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prices.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PricesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prices.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.prices.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PricesSearch<TError = unknown>(
  args: InferRequestType<typeof client.v1.prices.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prices.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PricesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.prices.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.prices.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PricesPriceKey(
  args: InferRequestType<(typeof client.v1.prices)[':price']['$get']>,
) {
  return ['v1', '/v1/prices/:price', args] as const
}

export function useGetV1PricesPrice<TError = unknown>(
  args: InferRequestType<(typeof client.v1.prices)[':price']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.prices)[':price']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1PricesPriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.prices)[':price']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.prices[':price'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PricesPrice<TError = unknown>(
  args: InferRequestType<(typeof client.v1.prices)[':price']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.prices)[':price']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1PricesPriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.prices)[':price']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.prices[':price'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PricesPriceKey() {
  return ['v1', '/v1/prices/:price', 'POST'] as const
}

export function usePostV1PricesPrice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.prices)[':price']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.prices)[':price']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PricesPriceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.prices)[':price']['$post']> },
      ) => parseResponse(client.v1.prices[':price'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsKey(args: InferRequestType<typeof client.v1.products.$get>) {
  return ['v1', '/v1/products', args] as const
}

export function useGetV1Products<TError = unknown>(
  args: InferRequestType<typeof client.v1.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Products<TError = unknown>(
  args: InferRequestType<typeof client.v1.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductsKey() {
  return ['v1', '/v1/products', 'POST'] as const
}

export function usePostV1Products<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.products.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.products.$post> }) =>
        parseResponse(client.v1.products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProductsSearchKey(
  args: InferRequestType<typeof client.v1.products.search.$get>,
) {
  return ['v1', '/v1/products/search', args] as const
}

export function useGetV1ProductsSearch<TError = unknown>(
  args: InferRequestType<typeof client.v1.products.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.search.$get>>>>
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
        ? getGetV1ProductsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsSearch<TError = unknown>(
  args: InferRequestType<typeof client.v1.products.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.search.$get>>>>
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
        ? getGetV1ProductsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProductsIdKey(
  args: InferRequestType<(typeof client.v1.products)[':id']['$get']>,
) {
  return ['v1', '/v1/products/:id', args] as const
}

export function useGetV1ProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ProductsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ProductsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProductsIdKey() {
  return ['v1', '/v1/products/:id', 'POST'] as const
}

export function usePostV1ProductsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.products)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProductsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.products)[':id']['$post']> },
      ) => parseResponse(client.v1.products[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProductsIdKey() {
  return ['v1', '/v1/products/:id', 'DELETE'] as const
}

export function useDeleteV1ProductsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.products)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.products)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProductsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.products)[':id']['$delete']> },
      ) => parseResponse(client.v1.products[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PromotionCodesKey(
  args: InferRequestType<typeof client.v1.promotion_codes.$get>,
) {
  return ['v1', '/v1/promotion_codes', args] as const
}

export function useGetV1PromotionCodes<TError = unknown>(
  args: InferRequestType<typeof client.v1.promotion_codes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.promotion_codes.$get>>>>
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
        ? getGetV1PromotionCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.promotion_codes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.promotion_codes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PromotionCodes<TError = unknown>(
  args: InferRequestType<typeof client.v1.promotion_codes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.promotion_codes.$get>>>>
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
        ? getGetV1PromotionCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.promotion_codes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.promotion_codes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PromotionCodesKey() {
  return ['v1', '/v1/promotion_codes', 'POST'] as const
}

export function usePostV1PromotionCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.promotion_codes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.promotion_codes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PromotionCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.promotion_codes.$post> }) =>
        parseResponse(client.v1.promotion_codes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PromotionCodesPromotionCodeKey(
  args: InferRequestType<(typeof client.v1.promotion_codes)[':promotion_code']['$get']>,
) {
  return ['v1', '/v1/promotion_codes/:promotion_code', args] as const
}

export function useGetV1PromotionCodesPromotionCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.promotion_codes)[':promotion_code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.promotion_codes)[':promotion_code']['$get']>>
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
        ? getGetV1PromotionCodesPromotionCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.promotion_codes)[':promotion_code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.promotion_codes[':promotion_code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PromotionCodesPromotionCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.promotion_codes)[':promotion_code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.promotion_codes)[':promotion_code']['$get']>>
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
        ? getGetV1PromotionCodesPromotionCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.promotion_codes)[':promotion_code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.promotion_codes[':promotion_code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PromotionCodesPromotionCodeKey() {
  return ['v1', '/v1/promotion_codes/:promotion_code', 'POST'] as const
}

export function usePostV1PromotionCodesPromotionCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.promotion_codes)[':promotion_code']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.promotion_codes)[':promotion_code']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PromotionCodesPromotionCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.promotion_codes)[':promotion_code']['$post']>
        },
      ) => parseResponse(client.v1.promotion_codes[':promotion_code'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1QuotesKey(args: InferRequestType<typeof client.v1.quotes.$get>) {
  return ['v1', '/v1/quotes', args] as const
}

export function useGetV1Quotes<TError = unknown>(
  args: InferRequestType<typeof client.v1.quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1QuotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Quotes<TError = unknown>(
  args: InferRequestType<typeof client.v1.quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1QuotesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1QuotesKey() {
  return ['v1', '/v1/quotes', 'POST'] as const
}

export function usePostV1Quotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.quotes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.quotes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1QuotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.quotes.$post> }) =>
        parseResponse(client.v1.quotes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1QuotesQuoteKey(
  args: InferRequestType<(typeof client.v1.quotes)[':quote']['$get']>,
) {
  return ['v1', '/v1/quotes/:quote', args] as const
}

export function useGetV1QuotesQuote<TError = unknown>(
  args: InferRequestType<(typeof client.v1.quotes)[':quote']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.quotes)[':quote']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1QuotesQuoteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.quotes)[':quote']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.quotes[':quote'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1QuotesQuote<TError = unknown>(
  args: InferRequestType<(typeof client.v1.quotes)[':quote']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.quotes)[':quote']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1QuotesQuoteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.quotes)[':quote']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.quotes[':quote'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1QuotesQuoteKey() {
  return ['v1', '/v1/quotes/:quote', 'POST'] as const
}

export function usePostV1QuotesQuote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.quotes)[':quote']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.quotes)[':quote']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1QuotesQuoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.quotes)[':quote']['$post']> },
      ) => parseResponse(client.v1.quotes[':quote'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1QuotesQuoteAcceptKey() {
  return ['v1', '/v1/quotes/:quote/accept', 'POST'] as const
}

export function usePostV1QuotesQuoteAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.quotes)[':quote']['accept']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.quotes)[':quote']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1QuotesQuoteAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.quotes)[':quote']['accept']['$post']> },
      ) => parseResponse(client.v1.quotes[':quote'].accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1QuotesQuoteCancelKey() {
  return ['v1', '/v1/quotes/:quote/cancel', 'POST'] as const
}

export function usePostV1QuotesQuoteCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.quotes)[':quote']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.quotes)[':quote']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1QuotesQuoteCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.quotes)[':quote']['cancel']['$post']> },
      ) => parseResponse(client.v1.quotes[':quote'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1QuotesQuoteComputedUpfrontLineItemsKey(
  args: InferRequestType<
    (typeof client.v1.quotes)[':quote']['computed_upfront_line_items']['$get']
  >,
) {
  return ['v1', '/v1/quotes/:quote/computed_upfront_line_items', args] as const
}

export function useGetV1QuotesQuoteComputedUpfrontLineItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.quotes)[':quote']['computed_upfront_line_items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.quotes)[':quote']['computed_upfront_line_items']['$get']>
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
        ? getGetV1QuotesQuoteComputedUpfrontLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.quotes)[':quote']['computed_upfront_line_items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.quotes[':quote'].computed_upfront_line_items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1QuotesQuoteComputedUpfrontLineItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.quotes)[':quote']['computed_upfront_line_items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.quotes)[':quote']['computed_upfront_line_items']['$get']>
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
        ? getGetV1QuotesQuoteComputedUpfrontLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.quotes)[':quote']['computed_upfront_line_items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.quotes[':quote'].computed_upfront_line_items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1QuotesQuoteFinalizeKey() {
  return ['v1', '/v1/quotes/:quote/finalize', 'POST'] as const
}

export function usePostV1QuotesQuoteFinalize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.quotes)[':quote']['finalize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.quotes)[':quote']['finalize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1QuotesQuoteFinalizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.quotes)[':quote']['finalize']['$post']> },
      ) => parseResponse(client.v1.quotes[':quote'].finalize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1QuotesQuoteLineItemsKey(
  args: InferRequestType<(typeof client.v1.quotes)[':quote']['line_items']['$get']>,
) {
  return ['v1', '/v1/quotes/:quote/line_items', args] as const
}

export function useGetV1QuotesQuoteLineItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1.quotes)[':quote']['line_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.quotes)[':quote']['line_items']['$get']>>
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
        ? getGetV1QuotesQuoteLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.quotes)[':quote']['line_items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.quotes[':quote'].line_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1QuotesQuoteLineItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1.quotes)[':quote']['line_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.quotes)[':quote']['line_items']['$get']>>
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
        ? getGetV1QuotesQuoteLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.quotes)[':quote']['line_items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.quotes[':quote'].line_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1QuotesQuotePdfKey(
  args: InferRequestType<(typeof client.v1.quotes)[':quote']['pdf']['$get']>,
) {
  return ['v1', '/v1/quotes/:quote/pdf', args] as const
}

export function useGetV1QuotesQuotePdf<TError = unknown>(
  args: InferRequestType<(typeof client.v1.quotes)[':quote']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.quotes)[':quote']['pdf']['$get']>>
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
        ? getGetV1QuotesQuotePdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.quotes)[':quote']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.quotes[':quote'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1QuotesQuotePdf<TError = unknown>(
  args: InferRequestType<(typeof client.v1.quotes)[':quote']['pdf']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.quotes)[':quote']['pdf']['$get']>>
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
        ? getGetV1QuotesQuotePdfKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.quotes)[':quote']['pdf']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.quotes[':quote'].pdf.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1RadarEarlyFraudWarningsKey(
  args: InferRequestType<typeof client.v1.radar.early_fraud_warnings.$get>,
) {
  return ['v1', '/v1/radar/early_fraud_warnings', args] as const
}

export function useGetV1RadarEarlyFraudWarnings<TError = unknown>(
  args: InferRequestType<typeof client.v1.radar.early_fraud_warnings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.radar.early_fraud_warnings.$get>>
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
        ? getGetV1RadarEarlyFraudWarningsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.radar.early_fraud_warnings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.radar.early_fraud_warnings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RadarEarlyFraudWarnings<TError = unknown>(
  args: InferRequestType<typeof client.v1.radar.early_fraud_warnings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.radar.early_fraud_warnings.$get>>
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
        ? getGetV1RadarEarlyFraudWarningsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.radar.early_fraud_warnings.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.radar.early_fraud_warnings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1RadarEarlyFraudWarningsEarlyFraudWarningKey(
  args: InferRequestType<
    (typeof client.v1.radar.early_fraud_warnings)[':early_fraud_warning']['$get']
  >,
) {
  return ['v1', '/v1/radar/early_fraud_warnings/:early_fraud_warning', args] as const
}

export function useGetV1RadarEarlyFraudWarningsEarlyFraudWarning<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.radar.early_fraud_warnings)[':early_fraud_warning']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.radar.early_fraud_warnings)[':early_fraud_warning']['$get']
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
        ? getGetV1RadarEarlyFraudWarningsEarlyFraudWarningKey(args)
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
                (typeof client.v1.radar.early_fraud_warnings)[':early_fraud_warning']['$get']
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
          client.v1.radar.early_fraud_warnings[':early_fraud_warning'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RadarEarlyFraudWarningsEarlyFraudWarning<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.radar.early_fraud_warnings)[':early_fraud_warning']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.radar.early_fraud_warnings)[':early_fraud_warning']['$get']
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
        ? getGetV1RadarEarlyFraudWarningsEarlyFraudWarningKey(args)
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
                (typeof client.v1.radar.early_fraud_warnings)[':early_fraud_warning']['$get']
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
          client.v1.radar.early_fraud_warnings[':early_fraud_warning'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1RadarValueListItemsKey(
  args: InferRequestType<typeof client.v1.radar.value_list_items.$get>,
) {
  return ['v1', '/v1/radar/value_list_items', args] as const
}

export function useGetV1RadarValueListItems<TError = unknown>(
  args: InferRequestType<typeof client.v1.radar.value_list_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.radar.value_list_items.$get>>>
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
        ? getGetV1RadarValueListItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.radar.value_list_items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.radar.value_list_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RadarValueListItems<TError = unknown>(
  args: InferRequestType<typeof client.v1.radar.value_list_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.radar.value_list_items.$get>>>
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
        ? getGetV1RadarValueListItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.radar.value_list_items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.radar.value_list_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1RadarValueListItemsKey() {
  return ['v1', '/v1/radar/value_list_items', 'POST'] as const
}

export function usePostV1RadarValueListItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.radar.value_list_items.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.radar.value_list_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RadarValueListItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.radar.value_list_items.$post> },
      ) => parseResponse(client.v1.radar.value_list_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RadarValueListItemsItemKey(
  args: InferRequestType<(typeof client.v1.radar.value_list_items)[':item']['$get']>,
) {
  return ['v1', '/v1/radar/value_list_items/:item', args] as const
}

export function useGetV1RadarValueListItemsItem<TError = unknown>(
  args: InferRequestType<(typeof client.v1.radar.value_list_items)[':item']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.radar.value_list_items)[':item']['$get']>>
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
        ? getGetV1RadarValueListItemsItemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.radar.value_list_items)[':item']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.radar.value_list_items[':item'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RadarValueListItemsItem<TError = unknown>(
  args: InferRequestType<(typeof client.v1.radar.value_list_items)[':item']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.radar.value_list_items)[':item']['$get']>>
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
        ? getGetV1RadarValueListItemsItemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.radar.value_list_items)[':item']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.radar.value_list_items[':item'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1RadarValueListItemsItemKey() {
  return ['v1', '/v1/radar/value_list_items/:item', 'DELETE'] as const
}

export function useDeleteV1RadarValueListItemsItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.radar.value_list_items)[':item']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.radar.value_list_items)[':item']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1RadarValueListItemsItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.radar.value_list_items)[':item']['$delete']> },
      ) => parseResponse(client.v1.radar.value_list_items[':item'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RadarValueListsKey(
  args: InferRequestType<typeof client.v1.radar.value_lists.$get>,
) {
  return ['v1', '/v1/radar/value_lists', args] as const
}

export function useGetV1RadarValueLists<TError = unknown>(
  args: InferRequestType<typeof client.v1.radar.value_lists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.radar.value_lists.$get>>>
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
        ? getGetV1RadarValueListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.radar.value_lists.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.radar.value_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RadarValueLists<TError = unknown>(
  args: InferRequestType<typeof client.v1.radar.value_lists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.radar.value_lists.$get>>>
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
        ? getGetV1RadarValueListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.radar.value_lists.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.radar.value_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1RadarValueListsKey() {
  return ['v1', '/v1/radar/value_lists', 'POST'] as const
}

export function usePostV1RadarValueLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.radar.value_lists.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.radar.value_lists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RadarValueListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.radar.value_lists.$post> },
      ) => parseResponse(client.v1.radar.value_lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RadarValueListsValueListKey(
  args: InferRequestType<(typeof client.v1.radar.value_lists)[':value_list']['$get']>,
) {
  return ['v1', '/v1/radar/value_lists/:value_list', args] as const
}

export function useGetV1RadarValueListsValueList<TError = unknown>(
  args: InferRequestType<(typeof client.v1.radar.value_lists)[':value_list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.radar.value_lists)[':value_list']['$get']>>
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
        ? getGetV1RadarValueListsValueListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.radar.value_lists)[':value_list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.radar.value_lists[':value_list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RadarValueListsValueList<TError = unknown>(
  args: InferRequestType<(typeof client.v1.radar.value_lists)[':value_list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.radar.value_lists)[':value_list']['$get']>>
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
        ? getGetV1RadarValueListsValueListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.radar.value_lists)[':value_list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.radar.value_lists[':value_list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1RadarValueListsValueListKey() {
  return ['v1', '/v1/radar/value_lists/:value_list', 'POST'] as const
}

export function usePostV1RadarValueListsValueList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.radar.value_lists)[':value_list']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.radar.value_lists)[':value_list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RadarValueListsValueListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.radar.value_lists)[':value_list']['$post']> },
      ) => parseResponse(client.v1.radar.value_lists[':value_list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1RadarValueListsValueListKey() {
  return ['v1', '/v1/radar/value_lists/:value_list', 'DELETE'] as const
}

export function useDeleteV1RadarValueListsValueList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.radar.value_lists)[':value_list']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.radar.value_lists)[':value_list']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1RadarValueListsValueListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.radar.value_lists)[':value_list']['$delete']>
        },
      ) => parseResponse(client.v1.radar.value_lists[':value_list'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RefundsKey(args: InferRequestType<typeof client.v1.refunds.$get>) {
  return ['v1', '/v1/refunds', args] as const
}

export function useGetV1Refunds<TError = unknown>(
  args: InferRequestType<typeof client.v1.refunds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.refunds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1RefundsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.refunds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Refunds<TError = unknown>(
  args: InferRequestType<typeof client.v1.refunds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.refunds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1RefundsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.refunds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1RefundsKey() {
  return ['v1', '/v1/refunds', 'POST'] as const
}

export function usePostV1Refunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.refunds.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.refunds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RefundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.refunds.$post> }) =>
        parseResponse(client.v1.refunds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RefundsRefundKey(
  args: InferRequestType<(typeof client.v1.refunds)[':refund']['$get']>,
) {
  return ['v1', '/v1/refunds/:refund', args] as const
}

export function useGetV1RefundsRefund<TError = unknown>(
  args: InferRequestType<(typeof client.v1.refunds)[':refund']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.refunds)[':refund']['$get']>>>
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
        ? getGetV1RefundsRefundKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.refunds)[':refund']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.refunds[':refund'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RefundsRefund<TError = unknown>(
  args: InferRequestType<(typeof client.v1.refunds)[':refund']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.refunds)[':refund']['$get']>>>
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
        ? getGetV1RefundsRefundKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.refunds)[':refund']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.refunds[':refund'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1RefundsRefundKey() {
  return ['v1', '/v1/refunds/:refund', 'POST'] as const
}

export function usePostV1RefundsRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.refunds)[':refund']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.refunds)[':refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RefundsRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.refunds)[':refund']['$post']> },
      ) => parseResponse(client.v1.refunds[':refund'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RefundsRefundCancelKey() {
  return ['v1', '/v1/refunds/:refund/cancel', 'POST'] as const
}

export function usePostV1RefundsRefundCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.refunds)[':refund']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.refunds)[':refund']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RefundsRefundCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.refunds)[':refund']['cancel']['$post']> },
      ) => parseResponse(client.v1.refunds[':refund'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ReportingReportRunsKey(
  args: InferRequestType<typeof client.v1.reporting.report_runs.$get>,
) {
  return ['v1', '/v1/reporting/report_runs', args] as const
}

export function useGetV1ReportingReportRuns<TError = unknown>(
  args: InferRequestType<typeof client.v1.reporting.report_runs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.report_runs.$get>>>
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
        ? getGetV1ReportingReportRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.report_runs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reporting.report_runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReportingReportRuns<TError = unknown>(
  args: InferRequestType<typeof client.v1.reporting.report_runs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.report_runs.$get>>>
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
        ? getGetV1ReportingReportRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.report_runs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reporting.report_runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ReportingReportRunsKey() {
  return ['v1', '/v1/reporting/report_runs', 'POST'] as const
}

export function usePostV1ReportingReportRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.report_runs.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.reporting.report_runs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ReportingReportRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.reporting.report_runs.$post> },
      ) => parseResponse(client.v1.reporting.report_runs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ReportingReportRunsReportRunKey(
  args: InferRequestType<(typeof client.v1.reporting.report_runs)[':report_run']['$get']>,
) {
  return ['v1', '/v1/reporting/report_runs/:report_run', args] as const
}

export function useGetV1ReportingReportRunsReportRun<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reporting.report_runs)[':report_run']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.reporting.report_runs)[':report_run']['$get']>>
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
        ? getGetV1ReportingReportRunsReportRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.reporting.report_runs)[':report_run']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.reporting.report_runs[':report_run'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReportingReportRunsReportRun<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reporting.report_runs)[':report_run']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.reporting.report_runs)[':report_run']['$get']>>
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
        ? getGetV1ReportingReportRunsReportRunKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.reporting.report_runs)[':report_run']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.reporting.report_runs[':report_run'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReportingReportTypesKey(
  args: InferRequestType<typeof client.v1.reporting.report_types.$get>,
) {
  return ['v1', '/v1/reporting/report_types', args] as const
}

export function useGetV1ReportingReportTypes<TError = unknown>(
  args: InferRequestType<typeof client.v1.reporting.report_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.report_types.$get>>>
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
        ? getGetV1ReportingReportTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.report_types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reporting.report_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReportingReportTypes<TError = unknown>(
  args: InferRequestType<typeof client.v1.reporting.report_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.report_types.$get>>>
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
        ? getGetV1ReportingReportTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.reporting.report_types.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reporting.report_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReportingReportTypesReportTypeKey(
  args: InferRequestType<(typeof client.v1.reporting.report_types)[':report_type']['$get']>,
) {
  return ['v1', '/v1/reporting/report_types/:report_type', args] as const
}

export function useGetV1ReportingReportTypesReportType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reporting.report_types)[':report_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.reporting.report_types)[':report_type']['$get']>>
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
        ? getGetV1ReportingReportTypesReportTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.reporting.report_types)[':report_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.reporting.report_types[':report_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReportingReportTypesReportType<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reporting.report_types)[':report_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.reporting.report_types)[':report_type']['$get']>>
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
        ? getGetV1ReportingReportTypesReportTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.reporting.report_types)[':report_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.reporting.report_types[':report_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReviewsKey(args: InferRequestType<typeof client.v1.reviews.$get>) {
  return ['v1', '/v1/reviews', args] as const
}

export function useGetV1Reviews<TError = unknown>(
  args: InferRequestType<typeof client.v1.reviews.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reviews.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ReviewsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reviews.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Reviews<TError = unknown>(
  args: InferRequestType<typeof client.v1.reviews.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reviews.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ReviewsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reviews.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReviewsReviewKey(
  args: InferRequestType<(typeof client.v1.reviews)[':review']['$get']>,
) {
  return ['v1', '/v1/reviews/:review', args] as const
}

export function useGetV1ReviewsReview<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reviews)[':review']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reviews)[':review']['$get']>>>
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
        ? getGetV1ReviewsReviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reviews)[':review']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reviews[':review'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReviewsReview<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reviews)[':review']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reviews)[':review']['$get']>>>
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
        ? getGetV1ReviewsReviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.reviews)[':review']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reviews[':review'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ReviewsReviewApproveKey() {
  return ['v1', '/v1/reviews/:review/approve', 'POST'] as const
}

export function usePostV1ReviewsReviewApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.reviews)[':review']['approve']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.reviews)[':review']['approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ReviewsReviewApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.reviews)[':review']['approve']['$post']> },
      ) => parseResponse(client.v1.reviews[':review'].approve.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SetupAttemptsKey(
  args: InferRequestType<typeof client.v1.setup_attempts.$get>,
) {
  return ['v1', '/v1/setup_attempts', args] as const
}

export function useGetV1SetupAttempts<TError = unknown>(
  args: InferRequestType<typeof client.v1.setup_attempts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.setup_attempts.$get>>>>
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
        ? getGetV1SetupAttemptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.setup_attempts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.setup_attempts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SetupAttempts<TError = unknown>(
  args: InferRequestType<typeof client.v1.setup_attempts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.setup_attempts.$get>>>>
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
        ? getGetV1SetupAttemptsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.setup_attempts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.setup_attempts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SetupIntentsKey(
  args: InferRequestType<typeof client.v1.setup_intents.$get>,
) {
  return ['v1', '/v1/setup_intents', args] as const
}

export function useGetV1SetupIntents<TError = unknown>(
  args: InferRequestType<typeof client.v1.setup_intents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.setup_intents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SetupIntentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.setup_intents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.setup_intents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SetupIntents<TError = unknown>(
  args: InferRequestType<typeof client.v1.setup_intents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.setup_intents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SetupIntentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.setup_intents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.setup_intents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SetupIntentsKey() {
  return ['v1', '/v1/setup_intents', 'POST'] as const
}

export function usePostV1SetupIntents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.setup_intents.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.setup_intents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SetupIntentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.setup_intents.$post> }) =>
        parseResponse(client.v1.setup_intents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SetupIntentsIntentKey(
  args: InferRequestType<(typeof client.v1.setup_intents)[':intent']['$get']>,
) {
  return ['v1', '/v1/setup_intents/:intent', args] as const
}

export function useGetV1SetupIntentsIntent<TError = unknown>(
  args: InferRequestType<(typeof client.v1.setup_intents)[':intent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.setup_intents)[':intent']['$get']>>
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
        ? getGetV1SetupIntentsIntentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.setup_intents)[':intent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.setup_intents[':intent'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SetupIntentsIntent<TError = unknown>(
  args: InferRequestType<(typeof client.v1.setup_intents)[':intent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.setup_intents)[':intent']['$get']>>
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
        ? getGetV1SetupIntentsIntentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.setup_intents)[':intent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.setup_intents[':intent'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SetupIntentsIntentKey() {
  return ['v1', '/v1/setup_intents/:intent', 'POST'] as const
}

export function usePostV1SetupIntentsIntent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.setup_intents)[':intent']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.setup_intents)[':intent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SetupIntentsIntentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.setup_intents)[':intent']['$post']> },
      ) => parseResponse(client.v1.setup_intents[':intent'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SetupIntentsIntentCancelKey() {
  return ['v1', '/v1/setup_intents/:intent/cancel', 'POST'] as const
}

export function usePostV1SetupIntentsIntentCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.setup_intents)[':intent']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.setup_intents)[':intent']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SetupIntentsIntentCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.setup_intents)[':intent']['cancel']['$post']>
        },
      ) => parseResponse(client.v1.setup_intents[':intent'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SetupIntentsIntentConfirmKey() {
  return ['v1', '/v1/setup_intents/:intent/confirm', 'POST'] as const
}

export function usePostV1SetupIntentsIntentConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.setup_intents)[':intent']['confirm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.setup_intents)[':intent']['confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SetupIntentsIntentConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.setup_intents)[':intent']['confirm']['$post']>
        },
      ) => parseResponse(client.v1.setup_intents[':intent'].confirm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SetupIntentsIntentVerifyMicrodepositsKey() {
  return ['v1', '/v1/setup_intents/:intent/verify_microdeposits', 'POST'] as const
}

export function usePostV1SetupIntentsIntentVerifyMicrodeposits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.setup_intents)[':intent']['verify_microdeposits']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.setup_intents)[':intent']['verify_microdeposits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SetupIntentsIntentVerifyMicrodepositsKey()
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
            (typeof client.v1.setup_intents)[':intent']['verify_microdeposits']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.setup_intents[':intent'].verify_microdeposits.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ShippingRatesKey(
  args: InferRequestType<typeof client.v1.shipping_rates.$get>,
) {
  return ['v1', '/v1/shipping_rates', args] as const
}

export function useGetV1ShippingRates<TError = unknown>(
  args: InferRequestType<typeof client.v1.shipping_rates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipping_rates.$get>>>>
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
        ? getGetV1ShippingRatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipping_rates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.shipping_rates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ShippingRates<TError = unknown>(
  args: InferRequestType<typeof client.v1.shipping_rates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipping_rates.$get>>>>
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
        ? getGetV1ShippingRatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipping_rates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.shipping_rates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ShippingRatesKey() {
  return ['v1', '/v1/shipping_rates', 'POST'] as const
}

export function usePostV1ShippingRates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipping_rates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.shipping_rates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ShippingRatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.shipping_rates.$post> }) =>
        parseResponse(client.v1.shipping_rates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ShippingRatesShippingRateTokenKey(
  args: InferRequestType<(typeof client.v1.shipping_rates)[':shipping_rate_token']['$get']>,
) {
  return ['v1', '/v1/shipping_rates/:shipping_rate_token', args] as const
}

export function useGetV1ShippingRatesShippingRateToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.shipping_rates)[':shipping_rate_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.shipping_rates)[':shipping_rate_token']['$get']>>
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
        ? getGetV1ShippingRatesShippingRateTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.shipping_rates)[':shipping_rate_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.shipping_rates[':shipping_rate_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ShippingRatesShippingRateToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.shipping_rates)[':shipping_rate_token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.shipping_rates)[':shipping_rate_token']['$get']>>
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
        ? getGetV1ShippingRatesShippingRateTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.shipping_rates)[':shipping_rate_token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.shipping_rates[':shipping_rate_token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ShippingRatesShippingRateTokenKey() {
  return ['v1', '/v1/shipping_rates/:shipping_rate_token', 'POST'] as const
}

export function usePostV1ShippingRatesShippingRateToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.shipping_rates)[':shipping_rate_token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.shipping_rates)[':shipping_rate_token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ShippingRatesShippingRateTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.shipping_rates)[':shipping_rate_token']['$post']>
        },
      ) =>
        parseResponse(client.v1.shipping_rates[':shipping_rate_token'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SigmaScheduledQueryRunsKey(
  args: InferRequestType<typeof client.v1.sigma.scheduled_query_runs.$get>,
) {
  return ['v1', '/v1/sigma/scheduled_query_runs', args] as const
}

export function useGetV1SigmaScheduledQueryRuns<TError = unknown>(
  args: InferRequestType<typeof client.v1.sigma.scheduled_query_runs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.sigma.scheduled_query_runs.$get>>
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
        ? getGetV1SigmaScheduledQueryRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.sigma.scheduled_query_runs.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sigma.scheduled_query_runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SigmaScheduledQueryRuns<TError = unknown>(
  args: InferRequestType<typeof client.v1.sigma.scheduled_query_runs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.sigma.scheduled_query_runs.$get>>
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
        ? getGetV1SigmaScheduledQueryRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.sigma.scheduled_query_runs.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sigma.scheduled_query_runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SigmaScheduledQueryRunsScheduledQueryRunKey(
  args: InferRequestType<
    (typeof client.v1.sigma.scheduled_query_runs)[':scheduled_query_run']['$get']
  >,
) {
  return ['v1', '/v1/sigma/scheduled_query_runs/:scheduled_query_run', args] as const
}

export function useGetV1SigmaScheduledQueryRunsScheduledQueryRun<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.sigma.scheduled_query_runs)[':scheduled_query_run']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.sigma.scheduled_query_runs)[':scheduled_query_run']['$get']
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
        ? getGetV1SigmaScheduledQueryRunsScheduledQueryRunKey(args)
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
                (typeof client.v1.sigma.scheduled_query_runs)[':scheduled_query_run']['$get']
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
          client.v1.sigma.scheduled_query_runs[':scheduled_query_run'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SigmaScheduledQueryRunsScheduledQueryRun<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.sigma.scheduled_query_runs)[':scheduled_query_run']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.sigma.scheduled_query_runs)[':scheduled_query_run']['$get']
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
        ? getGetV1SigmaScheduledQueryRunsScheduledQueryRunKey(args)
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
                (typeof client.v1.sigma.scheduled_query_runs)[':scheduled_query_run']['$get']
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
          client.v1.sigma.scheduled_query_runs[':scheduled_query_run'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1SourcesKey() {
  return ['v1', '/v1/sources', 'POST'] as const
}

export function usePostV1Sources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.sources.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.sources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.sources.$post> }) =>
        parseResponse(client.v1.sources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SourcesSourceKey(
  args: InferRequestType<(typeof client.v1.sources)[':source']['$get']>,
) {
  return ['v1', '/v1/sources/:source', args] as const
}

export function useGetV1SourcesSource<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sources)[':source']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':source']['$get']>>>
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
        ? getGetV1SourcesSourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':source']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sources[':source'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SourcesSource<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sources)[':source']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':source']['$get']>>>
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
        ? getGetV1SourcesSourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':source']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.sources[':source'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SourcesSourceKey() {
  return ['v1', '/v1/sources/:source', 'POST'] as const
}

export function usePostV1SourcesSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.sources)[':source']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.sources)[':source']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesSourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.sources)[':source']['$post']> },
      ) => parseResponse(client.v1.sources[':source'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SourcesSourceMandateNotificationsMandateNotificationKey(
  args: InferRequestType<
    (typeof client.v1.sources)[':source']['mandate_notifications'][':mandate_notification']['$get']
  >,
) {
  return ['v1', '/v1/sources/:source/mandate_notifications/:mandate_notification', args] as const
}

export function useGetV1SourcesSourceMandateNotificationsMandateNotification<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.sources)[':source']['mandate_notifications'][':mandate_notification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.sources)[':source']['mandate_notifications'][':mandate_notification']['$get']
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
        ? getGetV1SourcesSourceMandateNotificationsMandateNotificationKey(args)
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
                (typeof client.v1.sources)[':source']['mandate_notifications'][':mandate_notification']['$get']
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
          client.v1.sources[':source'].mandate_notifications[':mandate_notification'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SourcesSourceMandateNotificationsMandateNotification<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.sources)[':source']['mandate_notifications'][':mandate_notification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.sources)[':source']['mandate_notifications'][':mandate_notification']['$get']
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
        ? getGetV1SourcesSourceMandateNotificationsMandateNotificationKey(args)
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
                (typeof client.v1.sources)[':source']['mandate_notifications'][':mandate_notification']['$get']
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
          client.v1.sources[':source'].mandate_notifications[':mandate_notification'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1SourcesSourceSourceTransactionsKey(
  args: InferRequestType<(typeof client.v1.sources)[':source']['source_transactions']['$get']>,
) {
  return ['v1', '/v1/sources/:source/source_transactions', args] as const
}

export function useGetV1SourcesSourceSourceTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sources)[':source']['source_transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.sources)[':source']['source_transactions']['$get']>
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
        ? getGetV1SourcesSourceSourceTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.sources)[':source']['source_transactions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.sources[':source'].source_transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SourcesSourceSourceTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.sources)[':source']['source_transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.sources)[':source']['source_transactions']['$get']>
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
        ? getGetV1SourcesSourceSourceTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.sources)[':source']['source_transactions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.sources[':source'].source_transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SourcesSourceSourceTransactionsSourceTransactionKey(
  args: InferRequestType<
    (typeof client.v1.sources)[':source']['source_transactions'][':source_transaction']['$get']
  >,
) {
  return ['v1', '/v1/sources/:source/source_transactions/:source_transaction', args] as const
}

export function useGetV1SourcesSourceSourceTransactionsSourceTransaction<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.sources)[':source']['source_transactions'][':source_transaction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.sources)[':source']['source_transactions'][':source_transaction']['$get']
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
        ? getGetV1SourcesSourceSourceTransactionsSourceTransactionKey(args)
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
                (typeof client.v1.sources)[':source']['source_transactions'][':source_transaction']['$get']
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
          client.v1.sources[':source'].source_transactions[':source_transaction'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SourcesSourceSourceTransactionsSourceTransaction<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.sources)[':source']['source_transactions'][':source_transaction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.sources)[':source']['source_transactions'][':source_transaction']['$get']
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
        ? getGetV1SourcesSourceSourceTransactionsSourceTransactionKey(args)
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
                (typeof client.v1.sources)[':source']['source_transactions'][':source_transaction']['$get']
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
          client.v1.sources[':source'].source_transactions[':source_transaction'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1SourcesSourceVerifyKey() {
  return ['v1', '/v1/sources/:source/verify', 'POST'] as const
}

export function usePostV1SourcesSourceVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.sources)[':source']['verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.sources)[':source']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourcesSourceVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.sources)[':source']['verify']['$post']> },
      ) => parseResponse(client.v1.sources[':source'].verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SubscriptionItemsKey(
  args: InferRequestType<typeof client.v1.subscription_items.$get>,
) {
  return ['v1', '/v1/subscription_items', args] as const
}

export function useGetV1SubscriptionItems<TError = unknown>(
  args: InferRequestType<typeof client.v1.subscription_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscription_items.$get>>>
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
        ? getGetV1SubscriptionItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscription_items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.subscription_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SubscriptionItems<TError = unknown>(
  args: InferRequestType<typeof client.v1.subscription_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscription_items.$get>>>
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
        ? getGetV1SubscriptionItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscription_items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.subscription_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SubscriptionItemsKey() {
  return ['v1', '/v1/subscription_items', 'POST'] as const
}

export function usePostV1SubscriptionItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscription_items.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.subscription_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.subscription_items.$post> },
      ) => parseResponse(client.v1.subscription_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SubscriptionItemsItemKey(
  args: InferRequestType<(typeof client.v1.subscription_items)[':item']['$get']>,
) {
  return ['v1', '/v1/subscription_items/:item', args] as const
}

export function useGetV1SubscriptionItemsItem<TError = unknown>(
  args: InferRequestType<(typeof client.v1.subscription_items)[':item']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.subscription_items)[':item']['$get']>>
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
        ? getGetV1SubscriptionItemsItemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.subscription_items)[':item']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.subscription_items[':item'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SubscriptionItemsItem<TError = unknown>(
  args: InferRequestType<(typeof client.v1.subscription_items)[':item']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.subscription_items)[':item']['$get']>>
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
        ? getGetV1SubscriptionItemsItemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.subscription_items)[':item']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.subscription_items[':item'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SubscriptionItemsItemKey() {
  return ['v1', '/v1/subscription_items/:item', 'POST'] as const
}

export function usePostV1SubscriptionItemsItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.subscription_items)[':item']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.subscription_items)[':item']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionItemsItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.subscription_items)[':item']['$post']> },
      ) => parseResponse(client.v1.subscription_items[':item'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SubscriptionItemsItemKey() {
  return ['v1', '/v1/subscription_items/:item', 'DELETE'] as const
}

export function useDeleteV1SubscriptionItemsItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.subscription_items)[':item']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.subscription_items)[':item']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SubscriptionItemsItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.subscription_items)[':item']['$delete']> },
      ) => parseResponse(client.v1.subscription_items[':item'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SubscriptionItemsSubscriptionItemUsageRecordSummariesKey(
  args: InferRequestType<
    (typeof client.v1.subscription_items)[':subscription_item']['usage_record_summaries']['$get']
  >,
) {
  return ['v1', '/v1/subscription_items/:subscription_item/usage_record_summaries', args] as const
}

export function useGetV1SubscriptionItemsSubscriptionItemUsageRecordSummaries<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.subscription_items)[':subscription_item']['usage_record_summaries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.subscription_items)[':subscription_item']['usage_record_summaries']['$get']
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
        ? getGetV1SubscriptionItemsSubscriptionItemUsageRecordSummariesKey(args)
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
                (typeof client.v1.subscription_items)[':subscription_item']['usage_record_summaries']['$get']
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
          client.v1.subscription_items[':subscription_item'].usage_record_summaries.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SubscriptionItemsSubscriptionItemUsageRecordSummaries<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.subscription_items)[':subscription_item']['usage_record_summaries']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.subscription_items)[':subscription_item']['usage_record_summaries']['$get']
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
        ? getGetV1SubscriptionItemsSubscriptionItemUsageRecordSummariesKey(args)
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
                (typeof client.v1.subscription_items)[':subscription_item']['usage_record_summaries']['$get']
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
          client.v1.subscription_items[':subscription_item'].usage_record_summaries.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1SubscriptionItemsSubscriptionItemUsageRecordsKey() {
  return ['v1', '/v1/subscription_items/:subscription_item/usage_records', 'POST'] as const
}

export function usePostV1SubscriptionItemsSubscriptionItemUsageRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.subscription_items)[':subscription_item']['usage_records']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.subscription_items)[':subscription_item']['usage_records']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionItemsSubscriptionItemUsageRecordsKey()
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
            (typeof client.v1.subscription_items)[':subscription_item']['usage_records']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.subscription_items[':subscription_item'].usage_records.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SubscriptionSchedulesKey(
  args: InferRequestType<typeof client.v1.subscription_schedules.$get>,
) {
  return ['v1', '/v1/subscription_schedules', args] as const
}

export function useGetV1SubscriptionSchedules<TError = unknown>(
  args: InferRequestType<typeof client.v1.subscription_schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscription_schedules.$get>>>
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
        ? getGetV1SubscriptionSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscription_schedules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.subscription_schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SubscriptionSchedules<TError = unknown>(
  args: InferRequestType<typeof client.v1.subscription_schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscription_schedules.$get>>>
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
        ? getGetV1SubscriptionSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscription_schedules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.subscription_schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SubscriptionSchedulesKey() {
  return ['v1', '/v1/subscription_schedules', 'POST'] as const
}

export function usePostV1SubscriptionSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscription_schedules.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.subscription_schedules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.subscription_schedules.$post> },
      ) => parseResponse(client.v1.subscription_schedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SubscriptionSchedulesScheduleKey(
  args: InferRequestType<(typeof client.v1.subscription_schedules)[':schedule']['$get']>,
) {
  return ['v1', '/v1/subscription_schedules/:schedule', args] as const
}

export function useGetV1SubscriptionSchedulesSchedule<TError = unknown>(
  args: InferRequestType<(typeof client.v1.subscription_schedules)[':schedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.subscription_schedules)[':schedule']['$get']>>
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
        ? getGetV1SubscriptionSchedulesScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.subscription_schedules)[':schedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.subscription_schedules[':schedule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SubscriptionSchedulesSchedule<TError = unknown>(
  args: InferRequestType<(typeof client.v1.subscription_schedules)[':schedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.subscription_schedules)[':schedule']['$get']>>
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
        ? getGetV1SubscriptionSchedulesScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.subscription_schedules)[':schedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.subscription_schedules[':schedule'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SubscriptionSchedulesScheduleKey() {
  return ['v1', '/v1/subscription_schedules/:schedule', 'POST'] as const
}

export function usePostV1SubscriptionSchedulesSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.subscription_schedules)[':schedule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.subscription_schedules)[':schedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionSchedulesScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.subscription_schedules)[':schedule']['$post']>
        },
      ) => parseResponse(client.v1.subscription_schedules[':schedule'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SubscriptionSchedulesScheduleCancelKey() {
  return ['v1', '/v1/subscription_schedules/:schedule/cancel', 'POST'] as const
}

export function usePostV1SubscriptionSchedulesScheduleCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.subscription_schedules)[':schedule']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.subscription_schedules)[':schedule']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionSchedulesScheduleCancelKey()
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
            (typeof client.v1.subscription_schedules)[':schedule']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.subscription_schedules[':schedule'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SubscriptionSchedulesScheduleReleaseKey() {
  return ['v1', '/v1/subscription_schedules/:schedule/release', 'POST'] as const
}

export function usePostV1SubscriptionSchedulesScheduleRelease<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.subscription_schedules)[':schedule']['release']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.subscription_schedules)[':schedule']['release']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionSchedulesScheduleReleaseKey()
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
            (typeof client.v1.subscription_schedules)[':schedule']['release']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.subscription_schedules[':schedule'].release.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SubscriptionsKey(
  args: InferRequestType<typeof client.v1.subscriptions.$get>,
) {
  return ['v1', '/v1/subscriptions', args] as const
}

export function useGetV1Subscriptions<TError = unknown>(
  args: InferRequestType<typeof client.v1.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.$get>>>>
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
        ? getGetV1SubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Subscriptions<TError = unknown>(
  args: InferRequestType<typeof client.v1.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.$get>>>>
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
        ? getGetV1SubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SubscriptionsKey() {
  return ['v1', '/v1/subscriptions', 'POST'] as const
}

export function usePostV1Subscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.subscriptions.$post> }) =>
        parseResponse(client.v1.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SubscriptionsSearchKey(
  args: InferRequestType<typeof client.v1.subscriptions.search.$get>,
) {
  return ['v1', '/v1/subscriptions/search', args] as const
}

export function useGetV1SubscriptionsSearch<TError = unknown>(
  args: InferRequestType<typeof client.v1.subscriptions.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.search.$get>>>
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
        ? getGetV1SubscriptionsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.subscriptions.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SubscriptionsSearch<TError = unknown>(
  args: InferRequestType<typeof client.v1.subscriptions.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.search.$get>>>
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
        ? getGetV1SubscriptionsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.subscriptions.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SubscriptionsSubscriptionExposedIdKey(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription_exposed_id']['$get']>,
) {
  return ['v1', '/v1/subscriptions/:subscription_exposed_id', args] as const
}

export function useGetV1SubscriptionsSubscriptionExposedId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription_exposed_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.subscriptions)[':subscription_exposed_id']['$get']>
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
        ? getGetV1SubscriptionsSubscriptionExposedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.subscriptions)[':subscription_exposed_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.subscriptions[':subscription_exposed_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SubscriptionsSubscriptionExposedId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription_exposed_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.subscriptions)[':subscription_exposed_id']['$get']>
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
        ? getGetV1SubscriptionsSubscriptionExposedIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.subscriptions)[':subscription_exposed_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.subscriptions[':subscription_exposed_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1SubscriptionsSubscriptionExposedIdKey() {
  return ['v1', '/v1/subscriptions/:subscription_exposed_id', 'POST'] as const
}

export function usePostV1SubscriptionsSubscriptionExposedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscription_exposed_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.subscriptions)[':subscription_exposed_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionsSubscriptionExposedIdKey()
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
            (typeof client.v1.subscriptions)[':subscription_exposed_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.subscriptions[':subscription_exposed_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SubscriptionsSubscriptionExposedIdKey() {
  return ['v1', '/v1/subscriptions/:subscription_exposed_id', 'DELETE'] as const
}

export function useDeleteV1SubscriptionsSubscriptionExposedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.subscriptions)[':subscription_exposed_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.subscriptions)[':subscription_exposed_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SubscriptionsSubscriptionExposedIdKey()
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
            (typeof client.v1.subscriptions)[':subscription_exposed_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.subscriptions[':subscription_exposed_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SubscriptionsSubscriptionExposedIdDiscountKey() {
  return ['v1', '/v1/subscriptions/:subscription_exposed_id/discount', 'DELETE'] as const
}

export function useDeleteV1SubscriptionsSubscriptionExposedIdDiscount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.subscriptions)[':subscription_exposed_id']['discount']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.subscriptions)[':subscription_exposed_id']['discount']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SubscriptionsSubscriptionExposedIdDiscountKey()
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
            (typeof client.v1.subscriptions)[':subscription_exposed_id']['discount']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.subscriptions[':subscription_exposed_id'].discount.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SubscriptionsSubscriptionResumeKey() {
  return ['v1', '/v1/subscriptions/:subscription/resume', 'POST'] as const
}

export function usePostV1SubscriptionsSubscriptionResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.subscriptions)[':subscription']['resume']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.subscriptions)[':subscription']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SubscriptionsSubscriptionResumeKey()
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
            (typeof client.v1.subscriptions)[':subscription']['resume']['$post']
          >
        },
      ) => parseResponse(client.v1.subscriptions[':subscription'].resume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TaxCodesKey(args: InferRequestType<typeof client.v1.tax_codes.$get>) {
  return ['v1', '/v1/tax_codes', args] as const
}

export function useGetV1TaxCodes<TError = unknown>(
  args: InferRequestType<typeof client.v1.tax_codes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax_codes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TaxCodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax_codes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tax_codes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TaxCodes<TError = unknown>(
  args: InferRequestType<typeof client.v1.tax_codes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax_codes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TaxCodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax_codes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tax_codes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TaxCodesIdKey(
  args: InferRequestType<(typeof client.v1.tax_codes)[':id']['$get']>,
) {
  return ['v1', '/v1/tax_codes/:id', args] as const
}

export function useGetV1TaxCodesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tax_codes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tax_codes)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1TaxCodesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tax_codes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tax_codes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TaxCodesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tax_codes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tax_codes)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1TaxCodesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tax_codes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tax_codes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TaxRatesKey(args: InferRequestType<typeof client.v1.tax_rates.$get>) {
  return ['v1', '/v1/tax_rates', args] as const
}

export function useGetV1TaxRates<TError = unknown>(
  args: InferRequestType<typeof client.v1.tax_rates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax_rates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TaxRatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax_rates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tax_rates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TaxRates<TError = unknown>(
  args: InferRequestType<typeof client.v1.tax_rates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax_rates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TaxRatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax_rates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tax_rates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TaxRatesKey() {
  return ['v1', '/v1/tax_rates', 'POST'] as const
}

export function usePostV1TaxRates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tax_rates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.tax_rates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TaxRatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.tax_rates.$post> }) =>
        parseResponse(client.v1.tax_rates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TaxRatesTaxRateKey(
  args: InferRequestType<(typeof client.v1.tax_rates)[':tax_rate']['$get']>,
) {
  return ['v1', '/v1/tax_rates/:tax_rate', args] as const
}

export function useGetV1TaxRatesTaxRate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tax_rates)[':tax_rate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tax_rates)[':tax_rate']['$get']>>
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
        ? getGetV1TaxRatesTaxRateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tax_rates)[':tax_rate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tax_rates[':tax_rate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TaxRatesTaxRate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tax_rates)[':tax_rate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tax_rates)[':tax_rate']['$get']>>
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
        ? getGetV1TaxRatesTaxRateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tax_rates)[':tax_rate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tax_rates[':tax_rate'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TaxRatesTaxRateKey() {
  return ['v1', '/v1/tax_rates/:tax_rate', 'POST'] as const
}

export function usePostV1TaxRatesTaxRate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.tax_rates)[':tax_rate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tax_rates)[':tax_rate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TaxRatesTaxRateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.tax_rates)[':tax_rate']['$post']> },
      ) => parseResponse(client.v1.tax_rates[':tax_rate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TerminalConfigurationsKey(
  args: InferRequestType<typeof client.v1.terminal.configurations.$get>,
) {
  return ['v1', '/v1/terminal/configurations', args] as const
}

export function useGetV1TerminalConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.v1.terminal.configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminal.configurations.$get>>>
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
        ? getGetV1TerminalConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminal.configurations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.terminal.configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TerminalConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.v1.terminal.configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminal.configurations.$get>>>
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
        ? getGetV1TerminalConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminal.configurations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.terminal.configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TerminalConfigurationsKey() {
  return ['v1', '/v1/terminal/configurations', 'POST'] as const
}

export function usePostV1TerminalConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminal.configurations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.terminal.configurations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TerminalConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.terminal.configurations.$post> },
      ) => parseResponse(client.v1.terminal.configurations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TerminalConfigurationsConfigurationKey(
  args: InferRequestType<(typeof client.v1.terminal.configurations)[':configuration']['$get']>,
) {
  return ['v1', '/v1/terminal/configurations/:configuration', args] as const
}

export function useGetV1TerminalConfigurationsConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.v1.terminal.configurations)[':configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.terminal.configurations)[':configuration']['$get']>
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
        ? getGetV1TerminalConfigurationsConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.terminal.configurations)[':configuration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.terminal.configurations[':configuration'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TerminalConfigurationsConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.v1.terminal.configurations)[':configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.terminal.configurations)[':configuration']['$get']>
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
        ? getGetV1TerminalConfigurationsConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.terminal.configurations)[':configuration']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.terminal.configurations[':configuration'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1TerminalConfigurationsConfigurationKey() {
  return ['v1', '/v1/terminal/configurations/:configuration', 'POST'] as const
}

export function usePostV1TerminalConfigurationsConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.terminal.configurations)[':configuration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.terminal.configurations)[':configuration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TerminalConfigurationsConfigurationKey()
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
            (typeof client.v1.terminal.configurations)[':configuration']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.terminal.configurations[':configuration'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TerminalConfigurationsConfigurationKey() {
  return ['v1', '/v1/terminal/configurations/:configuration', 'DELETE'] as const
}

export function useDeleteV1TerminalConfigurationsConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.terminal.configurations)[':configuration']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.terminal.configurations)[':configuration']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TerminalConfigurationsConfigurationKey()
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
            (typeof client.v1.terminal.configurations)[':configuration']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.terminal.configurations[':configuration'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TerminalConnectionTokensKey() {
  return ['v1', '/v1/terminal/connection_tokens', 'POST'] as const
}

export function usePostV1TerminalConnectionTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminal.connection_tokens.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.terminal.connection_tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TerminalConnectionTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.terminal.connection_tokens.$post> },
      ) => parseResponse(client.v1.terminal.connection_tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TerminalLocationsKey(
  args: InferRequestType<typeof client.v1.terminal.locations.$get>,
) {
  return ['v1', '/v1/terminal/locations', args] as const
}

export function useGetV1TerminalLocations<TError = unknown>(
  args: InferRequestType<typeof client.v1.terminal.locations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminal.locations.$get>>>
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
        ? getGetV1TerminalLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminal.locations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.terminal.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TerminalLocations<TError = unknown>(
  args: InferRequestType<typeof client.v1.terminal.locations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminal.locations.$get>>>
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
        ? getGetV1TerminalLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminal.locations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.terminal.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TerminalLocationsKey() {
  return ['v1', '/v1/terminal/locations', 'POST'] as const
}

export function usePostV1TerminalLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminal.locations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.terminal.locations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TerminalLocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.terminal.locations.$post> },
      ) => parseResponse(client.v1.terminal.locations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TerminalLocationsLocationKey(
  args: InferRequestType<(typeof client.v1.terminal.locations)[':location']['$get']>,
) {
  return ['v1', '/v1/terminal/locations/:location', args] as const
}

export function useGetV1TerminalLocationsLocation<TError = unknown>(
  args: InferRequestType<(typeof client.v1.terminal.locations)[':location']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.terminal.locations)[':location']['$get']>>
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
        ? getGetV1TerminalLocationsLocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.terminal.locations)[':location']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.terminal.locations[':location'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TerminalLocationsLocation<TError = unknown>(
  args: InferRequestType<(typeof client.v1.terminal.locations)[':location']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.terminal.locations)[':location']['$get']>>
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
        ? getGetV1TerminalLocationsLocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.terminal.locations)[':location']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.terminal.locations[':location'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TerminalLocationsLocationKey() {
  return ['v1', '/v1/terminal/locations/:location', 'POST'] as const
}

export function usePostV1TerminalLocationsLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.terminal.locations)[':location']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.terminal.locations)[':location']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TerminalLocationsLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.terminal.locations)[':location']['$post']> },
      ) => parseResponse(client.v1.terminal.locations[':location'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TerminalLocationsLocationKey() {
  return ['v1', '/v1/terminal/locations/:location', 'DELETE'] as const
}

export function useDeleteV1TerminalLocationsLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.terminal.locations)[':location']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.terminal.locations)[':location']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TerminalLocationsLocationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.terminal.locations)[':location']['$delete']> },
      ) => parseResponse(client.v1.terminal.locations[':location'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TerminalReadersKey(
  args: InferRequestType<typeof client.v1.terminal.readers.$get>,
) {
  return ['v1', '/v1/terminal/readers', args] as const
}

export function useGetV1TerminalReaders<TError = unknown>(
  args: InferRequestType<typeof client.v1.terminal.readers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminal.readers.$get>>>
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
        ? getGetV1TerminalReadersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminal.readers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.terminal.readers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TerminalReaders<TError = unknown>(
  args: InferRequestType<typeof client.v1.terminal.readers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminal.readers.$get>>>
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
        ? getGetV1TerminalReadersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminal.readers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.terminal.readers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TerminalReadersKey() {
  return ['v1', '/v1/terminal/readers', 'POST'] as const
}

export function usePostV1TerminalReaders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.terminal.readers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.terminal.readers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TerminalReadersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.terminal.readers.$post> }) =>
        parseResponse(client.v1.terminal.readers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TerminalReadersReaderKey(
  args: InferRequestType<(typeof client.v1.terminal.readers)[':reader']['$get']>,
) {
  return ['v1', '/v1/terminal/readers/:reader', args] as const
}

export function useGetV1TerminalReadersReader<TError = unknown>(
  args: InferRequestType<(typeof client.v1.terminal.readers)[':reader']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.terminal.readers)[':reader']['$get']>>
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
        ? getGetV1TerminalReadersReaderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.terminal.readers)[':reader']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.terminal.readers[':reader'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TerminalReadersReader<TError = unknown>(
  args: InferRequestType<(typeof client.v1.terminal.readers)[':reader']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.terminal.readers)[':reader']['$get']>>
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
        ? getGetV1TerminalReadersReaderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.terminal.readers)[':reader']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.terminal.readers[':reader'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TerminalReadersReaderKey() {
  return ['v1', '/v1/terminal/readers/:reader', 'POST'] as const
}

export function usePostV1TerminalReadersReader<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.terminal.readers)[':reader']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.terminal.readers)[':reader']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TerminalReadersReaderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.terminal.readers)[':reader']['$post']> },
      ) => parseResponse(client.v1.terminal.readers[':reader'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TerminalReadersReaderKey() {
  return ['v1', '/v1/terminal/readers/:reader', 'DELETE'] as const
}

export function useDeleteV1TerminalReadersReader<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.terminal.readers)[':reader']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.terminal.readers)[':reader']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TerminalReadersReaderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.terminal.readers)[':reader']['$delete']> },
      ) => parseResponse(client.v1.terminal.readers[':reader'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TerminalReadersReaderCancelActionKey() {
  return ['v1', '/v1/terminal/readers/:reader/cancel_action', 'POST'] as const
}

export function usePostV1TerminalReadersReaderCancelAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.terminal.readers)[':reader']['cancel_action']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.terminal.readers)[':reader']['cancel_action']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TerminalReadersReaderCancelActionKey()
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
            (typeof client.v1.terminal.readers)[':reader']['cancel_action']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.terminal.readers[':reader'].cancel_action.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TerminalReadersReaderProcessPaymentIntentKey() {
  return ['v1', '/v1/terminal/readers/:reader/process_payment_intent', 'POST'] as const
}

export function usePostV1TerminalReadersReaderProcessPaymentIntent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.terminal.readers)[':reader']['process_payment_intent']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.terminal.readers)[':reader']['process_payment_intent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TerminalReadersReaderProcessPaymentIntentKey()
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
            (typeof client.v1.terminal.readers)[':reader']['process_payment_intent']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.terminal.readers[':reader'].process_payment_intent.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TerminalReadersReaderProcessSetupIntentKey() {
  return ['v1', '/v1/terminal/readers/:reader/process_setup_intent', 'POST'] as const
}

export function usePostV1TerminalReadersReaderProcessSetupIntent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.terminal.readers)[':reader']['process_setup_intent']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.terminal.readers)[':reader']['process_setup_intent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TerminalReadersReaderProcessSetupIntentKey()
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
            (typeof client.v1.terminal.readers)[':reader']['process_setup_intent']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.terminal.readers[':reader'].process_setup_intent.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TerminalReadersReaderRefundPaymentKey() {
  return ['v1', '/v1/terminal/readers/:reader/refund_payment', 'POST'] as const
}

export function usePostV1TerminalReadersReaderRefundPayment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.terminal.readers)[':reader']['refund_payment']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.terminal.readers)[':reader']['refund_payment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TerminalReadersReaderRefundPaymentKey()
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
            (typeof client.v1.terminal.readers)[':reader']['refund_payment']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.terminal.readers[':reader'].refund_payment.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TerminalReadersReaderSetReaderDisplayKey() {
  return ['v1', '/v1/terminal/readers/:reader/set_reader_display', 'POST'] as const
}

export function usePostV1TerminalReadersReaderSetReaderDisplay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.terminal.readers)[':reader']['set_reader_display']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.terminal.readers)[':reader']['set_reader_display']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TerminalReadersReaderSetReaderDisplayKey()
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
            (typeof client.v1.terminal.readers)[':reader']['set_reader_display']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.terminal.readers[':reader'].set_reader_display.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersCustomersCustomerFundCashBalanceKey() {
  return ['v1', '/v1/test_helpers/customers/:customer/fund_cash_balance', 'POST'] as const
}

export function usePostV1TestHelpersCustomersCustomerFundCashBalance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.test_helpers.customers)[':customer']['fund_cash_balance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.test_helpers.customers)[':customer']['fund_cash_balance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersCustomersCustomerFundCashBalanceKey()
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
            (typeof client.v1.test_helpers.customers)[':customer']['fund_cash_balance']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.test_helpers.customers[':customer'].fund_cash_balance.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersIssuingCardsCardShippingDeliverKey() {
  return ['v1', '/v1/test_helpers/issuing/cards/:card/shipping/deliver', 'POST'] as const
}

export function usePostV1TestHelpersIssuingCardsCardShippingDeliver<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.test_helpers.issuing.cards)[':card']['shipping']['deliver']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.test_helpers.issuing.cards)[':card']['shipping']['deliver']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersIssuingCardsCardShippingDeliverKey()
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
            (typeof client.v1.test_helpers.issuing.cards)[':card']['shipping']['deliver']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.test_helpers.issuing.cards[':card'].shipping.deliver.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersIssuingCardsCardShippingFailKey() {
  return ['v1', '/v1/test_helpers/issuing/cards/:card/shipping/fail', 'POST'] as const
}

export function usePostV1TestHelpersIssuingCardsCardShippingFail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.test_helpers.issuing.cards)[':card']['shipping']['fail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.test_helpers.issuing.cards)[':card']['shipping']['fail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersIssuingCardsCardShippingFailKey()
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
            (typeof client.v1.test_helpers.issuing.cards)[':card']['shipping']['fail']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.test_helpers.issuing.cards[':card'].shipping.fail.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersIssuingCardsCardShippingReturnKey() {
  return ['v1', '/v1/test_helpers/issuing/cards/:card/shipping/return', 'POST'] as const
}

export function usePostV1TestHelpersIssuingCardsCardShippingReturn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.test_helpers.issuing.cards)[':card']['shipping']['return']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.test_helpers.issuing.cards)[':card']['shipping']['return']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersIssuingCardsCardShippingReturnKey()
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
            (typeof client.v1.test_helpers.issuing.cards)[':card']['shipping']['return']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.test_helpers.issuing.cards[':card'].shipping.return.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersIssuingCardsCardShippingShipKey() {
  return ['v1', '/v1/test_helpers/issuing/cards/:card/shipping/ship', 'POST'] as const
}

export function usePostV1TestHelpersIssuingCardsCardShippingShip<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.test_helpers.issuing.cards)[':card']['shipping']['ship']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.test_helpers.issuing.cards)[':card']['shipping']['ship']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersIssuingCardsCardShippingShipKey()
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
            (typeof client.v1.test_helpers.issuing.cards)[':card']['shipping']['ship']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.test_helpers.issuing.cards[':card'].shipping.ship.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersRefundsRefundExpireKey() {
  return ['v1', '/v1/test_helpers/refunds/:refund/expire', 'POST'] as const
}

export function usePostV1TestHelpersRefundsRefundExpire<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.test_helpers.refunds)[':refund']['expire']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.test_helpers.refunds)[':refund']['expire']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersRefundsRefundExpireKey()
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
            (typeof client.v1.test_helpers.refunds)[':refund']['expire']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.test_helpers.refunds[':refund'].expire.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersTerminalReadersReaderPresentPaymentMethodKey() {
  return ['v1', '/v1/test_helpers/terminal/readers/:reader/present_payment_method', 'POST'] as const
}

export function usePostV1TestHelpersTerminalReadersReaderPresentPaymentMethod<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.test_helpers.terminal.readers)[':reader']['present_payment_method']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.test_helpers.terminal.readers)[':reader']['present_payment_method']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersTerminalReadersReaderPresentPaymentMethodKey()
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
            (typeof client.v1.test_helpers.terminal.readers)[':reader']['present_payment_method']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.test_helpers.terminal.readers[':reader'].present_payment_method.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TestHelpersTestClocksKey(
  args: InferRequestType<typeof client.v1.test_helpers.test_clocks.$get>,
) {
  return ['v1', '/v1/test_helpers/test_clocks', args] as const
}

export function useGetV1TestHelpersTestClocks<TError = unknown>(
  args: InferRequestType<typeof client.v1.test_helpers.test_clocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.test_helpers.test_clocks.$get>>>
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
        ? getGetV1TestHelpersTestClocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.test_helpers.test_clocks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.test_helpers.test_clocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TestHelpersTestClocks<TError = unknown>(
  args: InferRequestType<typeof client.v1.test_helpers.test_clocks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.test_helpers.test_clocks.$get>>>
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
        ? getGetV1TestHelpersTestClocksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.test_helpers.test_clocks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.test_helpers.test_clocks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TestHelpersTestClocksKey() {
  return ['v1', '/v1/test_helpers/test_clocks', 'POST'] as const
}

export function usePostV1TestHelpersTestClocks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.test_helpers.test_clocks.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.test_helpers.test_clocks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersTestClocksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.test_helpers.test_clocks.$post> },
      ) => parseResponse(client.v1.test_helpers.test_clocks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TestHelpersTestClocksTestClockKey(
  args: InferRequestType<(typeof client.v1.test_helpers.test_clocks)[':test_clock']['$get']>,
) {
  return ['v1', '/v1/test_helpers/test_clocks/:test_clock', args] as const
}

export function useGetV1TestHelpersTestClocksTestClock<TError = unknown>(
  args: InferRequestType<(typeof client.v1.test_helpers.test_clocks)[':test_clock']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.test_helpers.test_clocks)[':test_clock']['$get']>>
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
        ? getGetV1TestHelpersTestClocksTestClockKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.test_helpers.test_clocks)[':test_clock']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.test_helpers.test_clocks[':test_clock'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TestHelpersTestClocksTestClock<TError = unknown>(
  args: InferRequestType<(typeof client.v1.test_helpers.test_clocks)[':test_clock']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.test_helpers.test_clocks)[':test_clock']['$get']>>
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
        ? getGetV1TestHelpersTestClocksTestClockKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.test_helpers.test_clocks)[':test_clock']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.test_helpers.test_clocks[':test_clock'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1TestHelpersTestClocksTestClockKey() {
  return ['v1', '/v1/test_helpers/test_clocks/:test_clock', 'DELETE'] as const
}

export function useDeleteV1TestHelpersTestClocksTestClock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.test_helpers.test_clocks)[':test_clock']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.test_helpers.test_clocks)[':test_clock']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TestHelpersTestClocksTestClockKey()
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
            (typeof client.v1.test_helpers.test_clocks)[':test_clock']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.test_helpers.test_clocks[':test_clock'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersTestClocksTestClockAdvanceKey() {
  return ['v1', '/v1/test_helpers/test_clocks/:test_clock/advance', 'POST'] as const
}

export function usePostV1TestHelpersTestClocksTestClockAdvance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.test_helpers.test_clocks)[':test_clock']['advance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.test_helpers.test_clocks)[':test_clock']['advance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersTestClocksTestClockAdvanceKey()
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
            (typeof client.v1.test_helpers.test_clocks)[':test_clock']['advance']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.test_helpers.test_clocks[':test_clock'].advance.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersTreasuryInboundTransfersIdFailKey() {
  return ['v1', '/v1/test_helpers/treasury/inbound_transfers/:id/fail', 'POST'] as const
}

export function usePostV1TestHelpersTreasuryInboundTransfersIdFail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.test_helpers.treasury.inbound_transfers)[':id']['fail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.test_helpers.treasury.inbound_transfers)[':id']['fail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersTreasuryInboundTransfersIdFailKey()
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
            (typeof client.v1.test_helpers.treasury.inbound_transfers)[':id']['fail']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.test_helpers.treasury.inbound_transfers[':id'].fail.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersTreasuryInboundTransfersIdReturnKey() {
  return ['v1', '/v1/test_helpers/treasury/inbound_transfers/:id/return', 'POST'] as const
}

export function usePostV1TestHelpersTreasuryInboundTransfersIdReturn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.test_helpers.treasury.inbound_transfers)[':id']['return']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.test_helpers.treasury.inbound_transfers)[':id']['return']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersTreasuryInboundTransfersIdReturnKey()
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
            (typeof client.v1.test_helpers.treasury.inbound_transfers)[':id']['return']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.test_helpers.treasury.inbound_transfers[':id'].return.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersTreasuryInboundTransfersIdSucceedKey() {
  return ['v1', '/v1/test_helpers/treasury/inbound_transfers/:id/succeed', 'POST'] as const
}

export function usePostV1TestHelpersTreasuryInboundTransfersIdSucceed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.test_helpers.treasury.inbound_transfers)[':id']['succeed']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.test_helpers.treasury.inbound_transfers)[':id']['succeed']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersTreasuryInboundTransfersIdSucceedKey()
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
            (typeof client.v1.test_helpers.treasury.inbound_transfers)[':id']['succeed']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.test_helpers.treasury.inbound_transfers[':id'].succeed.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersTreasuryOutboundPaymentsIdFailKey() {
  return ['v1', '/v1/test_helpers/treasury/outbound_payments/:id/fail', 'POST'] as const
}

export function usePostV1TestHelpersTreasuryOutboundPaymentsIdFail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.test_helpers.treasury.outbound_payments)[':id']['fail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.test_helpers.treasury.outbound_payments)[':id']['fail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersTreasuryOutboundPaymentsIdFailKey()
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
            (typeof client.v1.test_helpers.treasury.outbound_payments)[':id']['fail']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.test_helpers.treasury.outbound_payments[':id'].fail.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersTreasuryOutboundPaymentsIdPostKey() {
  return ['v1', '/v1/test_helpers/treasury/outbound_payments/:id/post', 'POST'] as const
}

export function usePostV1TestHelpersTreasuryOutboundPaymentsIdPost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.test_helpers.treasury.outbound_payments)[':id']['post']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.test_helpers.treasury.outbound_payments)[':id']['post']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersTreasuryOutboundPaymentsIdPostKey()
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
            (typeof client.v1.test_helpers.treasury.outbound_payments)[':id']['post']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.test_helpers.treasury.outbound_payments[':id'].post.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersTreasuryOutboundPaymentsIdReturnKey() {
  return ['v1', '/v1/test_helpers/treasury/outbound_payments/:id/return', 'POST'] as const
}

export function usePostV1TestHelpersTreasuryOutboundPaymentsIdReturn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.test_helpers.treasury.outbound_payments)[':id']['return']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.test_helpers.treasury.outbound_payments)[':id']['return']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersTreasuryOutboundPaymentsIdReturnKey()
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
            (typeof client.v1.test_helpers.treasury.outbound_payments)[':id']['return']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.test_helpers.treasury.outbound_payments[':id'].return.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersTreasuryOutboundTransfersOutboundTransferFailKey() {
  return [
    'v1',
    '/v1/test_helpers/treasury/outbound_transfers/:outbound_transfer/fail',
    'POST',
  ] as const
}

export function usePostV1TestHelpersTreasuryOutboundTransfersOutboundTransferFail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.test_helpers.treasury.outbound_transfers)[':outbound_transfer']['fail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.test_helpers.treasury.outbound_transfers)[':outbound_transfer']['fail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersTreasuryOutboundTransfersOutboundTransferFailKey()
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
            (typeof client.v1.test_helpers.treasury.outbound_transfers)[':outbound_transfer']['fail']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.test_helpers.treasury.outbound_transfers[':outbound_transfer'].fail.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersTreasuryOutboundTransfersOutboundTransferPostKey() {
  return [
    'v1',
    '/v1/test_helpers/treasury/outbound_transfers/:outbound_transfer/post',
    'POST',
  ] as const
}

export function usePostV1TestHelpersTreasuryOutboundTransfersOutboundTransferPost<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.test_helpers.treasury.outbound_transfers)[':outbound_transfer']['post']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.test_helpers.treasury.outbound_transfers)[':outbound_transfer']['post']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersTreasuryOutboundTransfersOutboundTransferPostKey()
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
            (typeof client.v1.test_helpers.treasury.outbound_transfers)[':outbound_transfer']['post']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.test_helpers.treasury.outbound_transfers[':outbound_transfer'].post.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersTreasuryOutboundTransfersOutboundTransferReturnKey() {
  return [
    'v1',
    '/v1/test_helpers/treasury/outbound_transfers/:outbound_transfer/return',
    'POST',
  ] as const
}

export function usePostV1TestHelpersTreasuryOutboundTransfersOutboundTransferReturn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.test_helpers.treasury.outbound_transfers)[':outbound_transfer']['return']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.test_helpers.treasury.outbound_transfers)[':outbound_transfer']['return']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1TestHelpersTreasuryOutboundTransfersOutboundTransferReturnKey()
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
            (typeof client.v1.test_helpers.treasury.outbound_transfers)[':outbound_transfer']['return']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.test_helpers.treasury.outbound_transfers[':outbound_transfer'].return.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersTreasuryReceivedCreditsKey() {
  return ['v1', '/v1/test_helpers/treasury/received_credits', 'POST'] as const
}

export function usePostV1TestHelpersTreasuryReceivedCredits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.test_helpers.treasury.received_credits.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.test_helpers.treasury.received_credits.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersTreasuryReceivedCreditsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.test_helpers.treasury.received_credits.$post> },
      ) =>
        parseResponse(client.v1.test_helpers.treasury.received_credits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TestHelpersTreasuryReceivedDebitsKey() {
  return ['v1', '/v1/test_helpers/treasury/received_debits', 'POST'] as const
}

export function usePostV1TestHelpersTreasuryReceivedDebits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.test_helpers.treasury.received_debits.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.test_helpers.treasury.received_debits.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TestHelpersTreasuryReceivedDebitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.test_helpers.treasury.received_debits.$post> },
      ) => parseResponse(client.v1.test_helpers.treasury.received_debits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TokensKey() {
  return ['v1', '/v1/tokens', 'POST'] as const
}

export function usePostV1Tokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.tokens.$post> }) =>
        parseResponse(client.v1.tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TokensTokenKey(
  args: InferRequestType<(typeof client.v1.tokens)[':token']['$get']>,
) {
  return ['v1', '/v1/tokens/:token', args] as const
}

export function useGetV1TokensToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tokens)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':token']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1TokensTokenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':token']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tokens[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TokensToken<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tokens)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':token']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1TokensTokenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':token']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tokens[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TopupsKey(args: InferRequestType<typeof client.v1.topups.$get>) {
  return ['v1', '/v1/topups', args] as const
}

export function useGetV1Topups<TError = unknown>(
  args: InferRequestType<typeof client.v1.topups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.topups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TopupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.topups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.topups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Topups<TError = unknown>(
  args: InferRequestType<typeof client.v1.topups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.topups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TopupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.topups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.topups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TopupsKey() {
  return ['v1', '/v1/topups', 'POST'] as const
}

export function usePostV1Topups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.topups.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.topups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TopupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.topups.$post> }) =>
        parseResponse(client.v1.topups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TopupsTopupKey(
  args: InferRequestType<(typeof client.v1.topups)[':topup']['$get']>,
) {
  return ['v1', '/v1/topups/:topup', args] as const
}

export function useGetV1TopupsTopup<TError = unknown>(
  args: InferRequestType<(typeof client.v1.topups)[':topup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.topups)[':topup']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1TopupsTopupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.topups)[':topup']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.topups[':topup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TopupsTopup<TError = unknown>(
  args: InferRequestType<(typeof client.v1.topups)[':topup']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.topups)[':topup']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1TopupsTopupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.topups)[':topup']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.topups[':topup'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TopupsTopupKey() {
  return ['v1', '/v1/topups/:topup', 'POST'] as const
}

export function usePostV1TopupsTopup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.topups)[':topup']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.topups)[':topup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TopupsTopupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.topups)[':topup']['$post']> },
      ) => parseResponse(client.v1.topups[':topup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TopupsTopupCancelKey() {
  return ['v1', '/v1/topups/:topup/cancel', 'POST'] as const
}

export function usePostV1TopupsTopupCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.topups)[':topup']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.topups)[':topup']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TopupsTopupCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.topups)[':topup']['cancel']['$post']> },
      ) => parseResponse(client.v1.topups[':topup'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TransfersKey(args: InferRequestType<typeof client.v1.transfers.$get>) {
  return ['v1', '/v1/transfers', args] as const
}

export function useGetV1Transfers<TError = unknown>(
  args: InferRequestType<typeof client.v1.transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TransfersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Transfers<TError = unknown>(
  args: InferRequestType<typeof client.v1.transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TransfersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TransfersKey() {
  return ['v1', '/v1/transfers', 'POST'] as const
}

export function usePostV1Transfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.transfers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.transfers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.transfers.$post> }) =>
        parseResponse(client.v1.transfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TransfersIdReversalsKey(
  args: InferRequestType<(typeof client.v1.transfers)[':id']['reversals']['$get']>,
) {
  return ['v1', '/v1/transfers/:id/reversals', args] as const
}

export function useGetV1TransfersIdReversals<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transfers)[':id']['reversals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.transfers)[':id']['reversals']['$get']>>
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
        ? getGetV1TransfersIdReversalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.transfers)[':id']['reversals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transfers[':id'].reversals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransfersIdReversals<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transfers)[':id']['reversals']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.transfers)[':id']['reversals']['$get']>>
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
        ? getGetV1TransfersIdReversalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.transfers)[':id']['reversals']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transfers[':id'].reversals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TransfersIdReversalsKey() {
  return ['v1', '/v1/transfers/:id/reversals', 'POST'] as const
}

export function usePostV1TransfersIdReversals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.transfers)[':id']['reversals']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.transfers)[':id']['reversals']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TransfersIdReversalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.transfers)[':id']['reversals']['$post']> },
      ) => parseResponse(client.v1.transfers[':id'].reversals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TransfersTransferKey(
  args: InferRequestType<(typeof client.v1.transfers)[':transfer']['$get']>,
) {
  return ['v1', '/v1/transfers/:transfer', args] as const
}

export function useGetV1TransfersTransfer<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transfers)[':transfer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.transfers)[':transfer']['$get']>>
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
        ? getGetV1TransfersTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.transfers)[':transfer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transfers[':transfer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransfersTransfer<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transfers)[':transfer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.transfers)[':transfer']['$get']>>
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
        ? getGetV1TransfersTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.transfers)[':transfer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.transfers[':transfer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TransfersTransferKey() {
  return ['v1', '/v1/transfers/:transfer', 'POST'] as const
}

export function usePostV1TransfersTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.transfers)[':transfer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.transfers)[':transfer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TransfersTransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.transfers)[':transfer']['$post']> },
      ) => parseResponse(client.v1.transfers[':transfer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TransfersTransferReversalsIdKey(
  args: InferRequestType<(typeof client.v1.transfers)[':transfer']['reversals'][':id']['$get']>,
) {
  return ['v1', '/v1/transfers/:transfer/reversals/:id', args] as const
}

export function useGetV1TransfersTransferReversalsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transfers)[':transfer']['reversals'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transfers)[':transfer']['reversals'][':id']['$get']>
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
        ? getGetV1TransfersTransferReversalsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transfers)[':transfer']['reversals'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.transfers[':transfer'].reversals[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TransfersTransferReversalsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.transfers)[':transfer']['reversals'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transfers)[':transfer']['reversals'][':id']['$get']>
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
        ? getGetV1TransfersTransferReversalsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.transfers)[':transfer']['reversals'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.transfers[':transfer'].reversals[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TransfersTransferReversalsIdKey() {
  return ['v1', '/v1/transfers/:transfer/reversals/:id', 'POST'] as const
}

export function usePostV1TransfersTransferReversalsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.transfers)[':transfer']['reversals'][':id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.transfers)[':transfer']['reversals'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TransfersTransferReversalsIdKey()
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
            (typeof client.v1.transfers)[':transfer']['reversals'][':id']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.transfers[':transfer'].reversals[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TreasuryCreditReversalsKey(
  args: InferRequestType<typeof client.v1.treasury.credit_reversals.$get>,
) {
  return ['v1', '/v1/treasury/credit_reversals', args] as const
}

export function useGetV1TreasuryCreditReversals<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.credit_reversals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.credit_reversals.$get>>>
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
        ? getGetV1TreasuryCreditReversalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.credit_reversals.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.credit_reversals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryCreditReversals<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.credit_reversals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.credit_reversals.$get>>>
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
        ? getGetV1TreasuryCreditReversalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.credit_reversals.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.credit_reversals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TreasuryCreditReversalsKey() {
  return ['v1', '/v1/treasury/credit_reversals', 'POST'] as const
}

export function usePostV1TreasuryCreditReversals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.credit_reversals.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.treasury.credit_reversals.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TreasuryCreditReversalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.treasury.credit_reversals.$post> },
      ) => parseResponse(client.v1.treasury.credit_reversals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TreasuryCreditReversalsCreditReversalKey(
  args: InferRequestType<(typeof client.v1.treasury.credit_reversals)[':credit_reversal']['$get']>,
) {
  return ['v1', '/v1/treasury/credit_reversals/:credit_reversal', args] as const
}

export function useGetV1TreasuryCreditReversalsCreditReversal<TError = unknown>(
  args: InferRequestType<(typeof client.v1.treasury.credit_reversals)[':credit_reversal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.treasury.credit_reversals)[':credit_reversal']['$get']>
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
        ? getGetV1TreasuryCreditReversalsCreditReversalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.treasury.credit_reversals)[':credit_reversal']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.treasury.credit_reversals[':credit_reversal'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryCreditReversalsCreditReversal<TError = unknown>(
  args: InferRequestType<(typeof client.v1.treasury.credit_reversals)[':credit_reversal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.treasury.credit_reversals)[':credit_reversal']['$get']>
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
        ? getGetV1TreasuryCreditReversalsCreditReversalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.treasury.credit_reversals)[':credit_reversal']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.treasury.credit_reversals[':credit_reversal'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1TreasuryDebitReversalsKey(
  args: InferRequestType<typeof client.v1.treasury.debit_reversals.$get>,
) {
  return ['v1', '/v1/treasury/debit_reversals', args] as const
}

export function useGetV1TreasuryDebitReversals<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.debit_reversals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.debit_reversals.$get>>>
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
        ? getGetV1TreasuryDebitReversalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.debit_reversals.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.debit_reversals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryDebitReversals<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.debit_reversals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.debit_reversals.$get>>>
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
        ? getGetV1TreasuryDebitReversalsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.debit_reversals.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.debit_reversals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TreasuryDebitReversalsKey() {
  return ['v1', '/v1/treasury/debit_reversals', 'POST'] as const
}

export function usePostV1TreasuryDebitReversals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.debit_reversals.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.treasury.debit_reversals.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TreasuryDebitReversalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.treasury.debit_reversals.$post> },
      ) => parseResponse(client.v1.treasury.debit_reversals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TreasuryDebitReversalsDebitReversalKey(
  args: InferRequestType<(typeof client.v1.treasury.debit_reversals)[':debit_reversal']['$get']>,
) {
  return ['v1', '/v1/treasury/debit_reversals/:debit_reversal', args] as const
}

export function useGetV1TreasuryDebitReversalsDebitReversal<TError = unknown>(
  args: InferRequestType<(typeof client.v1.treasury.debit_reversals)[':debit_reversal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.treasury.debit_reversals)[':debit_reversal']['$get']>
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
        ? getGetV1TreasuryDebitReversalsDebitReversalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.treasury.debit_reversals)[':debit_reversal']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.treasury.debit_reversals[':debit_reversal'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryDebitReversalsDebitReversal<TError = unknown>(
  args: InferRequestType<(typeof client.v1.treasury.debit_reversals)[':debit_reversal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.treasury.debit_reversals)[':debit_reversal']['$get']>
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
        ? getGetV1TreasuryDebitReversalsDebitReversalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.treasury.debit_reversals)[':debit_reversal']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.treasury.debit_reversals[':debit_reversal'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1TreasuryFinancialAccountsKey(
  args: InferRequestType<typeof client.v1.treasury.financial_accounts.$get>,
) {
  return ['v1', '/v1/treasury/financial_accounts', args] as const
}

export function useGetV1TreasuryFinancialAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.financial_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.financial_accounts.$get>>
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
        ? getGetV1TreasuryFinancialAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.financial_accounts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.financial_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryFinancialAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.financial_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.financial_accounts.$get>>
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
        ? getGetV1TreasuryFinancialAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.financial_accounts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.financial_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TreasuryFinancialAccountsKey() {
  return ['v1', '/v1/treasury/financial_accounts', 'POST'] as const
}

export function usePostV1TreasuryFinancialAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.treasury.financial_accounts.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.treasury.financial_accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TreasuryFinancialAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.treasury.financial_accounts.$post> },
      ) => parseResponse(client.v1.treasury.financial_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TreasuryFinancialAccountsFinancialAccountKey(
  args: InferRequestType<
    (typeof client.v1.treasury.financial_accounts)[':financial_account']['$get']
  >,
) {
  return ['v1', '/v1/treasury/financial_accounts/:financial_account', args] as const
}

export function useGetV1TreasuryFinancialAccountsFinancialAccount<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.treasury.financial_accounts)[':financial_account']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.treasury.financial_accounts)[':financial_account']['$get']
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
        ? getGetV1TreasuryFinancialAccountsFinancialAccountKey(args)
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
                (typeof client.v1.treasury.financial_accounts)[':financial_account']['$get']
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
          client.v1.treasury.financial_accounts[':financial_account'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryFinancialAccountsFinancialAccount<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.treasury.financial_accounts)[':financial_account']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.treasury.financial_accounts)[':financial_account']['$get']
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
        ? getGetV1TreasuryFinancialAccountsFinancialAccountKey(args)
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
                (typeof client.v1.treasury.financial_accounts)[':financial_account']['$get']
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
          client.v1.treasury.financial_accounts[':financial_account'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1TreasuryFinancialAccountsFinancialAccountKey() {
  return ['v1', '/v1/treasury/financial_accounts/:financial_account', 'POST'] as const
}

export function usePostV1TreasuryFinancialAccountsFinancialAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.treasury.financial_accounts)[':financial_account']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.treasury.financial_accounts)[':financial_account']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TreasuryFinancialAccountsFinancialAccountKey()
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
            (typeof client.v1.treasury.financial_accounts)[':financial_account']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.treasury.financial_accounts[':financial_account'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TreasuryFinancialAccountsFinancialAccountFeaturesKey(
  args: InferRequestType<
    (typeof client.v1.treasury.financial_accounts)[':financial_account']['features']['$get']
  >,
) {
  return ['v1', '/v1/treasury/financial_accounts/:financial_account/features', args] as const
}

export function useGetV1TreasuryFinancialAccountsFinancialAccountFeatures<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.treasury.financial_accounts)[':financial_account']['features']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.treasury.financial_accounts)[':financial_account']['features']['$get']
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
        ? getGetV1TreasuryFinancialAccountsFinancialAccountFeaturesKey(args)
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
                (typeof client.v1.treasury.financial_accounts)[':financial_account']['features']['$get']
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
          client.v1.treasury.financial_accounts[':financial_account'].features.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryFinancialAccountsFinancialAccountFeatures<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.treasury.financial_accounts)[':financial_account']['features']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.treasury.financial_accounts)[':financial_account']['features']['$get']
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
        ? getGetV1TreasuryFinancialAccountsFinancialAccountFeaturesKey(args)
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
                (typeof client.v1.treasury.financial_accounts)[':financial_account']['features']['$get']
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
          client.v1.treasury.financial_accounts[':financial_account'].features.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1TreasuryFinancialAccountsFinancialAccountFeaturesKey() {
  return ['v1', '/v1/treasury/financial_accounts/:financial_account/features', 'POST'] as const
}

export function usePostV1TreasuryFinancialAccountsFinancialAccountFeatures<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.treasury.financial_accounts)[':financial_account']['features']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.treasury.financial_accounts)[':financial_account']['features']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TreasuryFinancialAccountsFinancialAccountFeaturesKey()
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
            (typeof client.v1.treasury.financial_accounts)[':financial_account']['features']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.treasury.financial_accounts[':financial_account'].features.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TreasuryInboundTransfersKey(
  args: InferRequestType<typeof client.v1.treasury.inbound_transfers.$get>,
) {
  return ['v1', '/v1/treasury/inbound_transfers', args] as const
}

export function useGetV1TreasuryInboundTransfers<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.inbound_transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.inbound_transfers.$get>>
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
        ? getGetV1TreasuryInboundTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.inbound_transfers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.inbound_transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryInboundTransfers<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.inbound_transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.inbound_transfers.$get>>
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
        ? getGetV1TreasuryInboundTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.inbound_transfers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.inbound_transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TreasuryInboundTransfersKey() {
  return ['v1', '/v1/treasury/inbound_transfers', 'POST'] as const
}

export function usePostV1TreasuryInboundTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.inbound_transfers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.treasury.inbound_transfers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TreasuryInboundTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.treasury.inbound_transfers.$post> },
      ) => parseResponse(client.v1.treasury.inbound_transfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TreasuryInboundTransfersIdKey(
  args: InferRequestType<(typeof client.v1.treasury.inbound_transfers)[':id']['$get']>,
) {
  return ['v1', '/v1/treasury/inbound_transfers/:id', args] as const
}

export function useGetV1TreasuryInboundTransfersId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.treasury.inbound_transfers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.inbound_transfers)[':id']['$get']>>
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
        ? getGetV1TreasuryInboundTransfersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.inbound_transfers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.treasury.inbound_transfers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryInboundTransfersId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.treasury.inbound_transfers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.inbound_transfers)[':id']['$get']>>
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
        ? getGetV1TreasuryInboundTransfersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.inbound_transfers)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.treasury.inbound_transfers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TreasuryInboundTransfersInboundTransferCancelKey() {
  return ['v1', '/v1/treasury/inbound_transfers/:inbound_transfer/cancel', 'POST'] as const
}

export function usePostV1TreasuryInboundTransfersInboundTransferCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.treasury.inbound_transfers)[':inbound_transfer']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.treasury.inbound_transfers)[':inbound_transfer']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TreasuryInboundTransfersInboundTransferCancelKey()
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
            (typeof client.v1.treasury.inbound_transfers)[':inbound_transfer']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.treasury.inbound_transfers[':inbound_transfer'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TreasuryOutboundPaymentsKey(
  args: InferRequestType<typeof client.v1.treasury.outbound_payments.$get>,
) {
  return ['v1', '/v1/treasury/outbound_payments', args] as const
}

export function useGetV1TreasuryOutboundPayments<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.outbound_payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.outbound_payments.$get>>
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
        ? getGetV1TreasuryOutboundPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.outbound_payments.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.outbound_payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryOutboundPayments<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.outbound_payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.outbound_payments.$get>>
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
        ? getGetV1TreasuryOutboundPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.outbound_payments.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.outbound_payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TreasuryOutboundPaymentsKey() {
  return ['v1', '/v1/treasury/outbound_payments', 'POST'] as const
}

export function usePostV1TreasuryOutboundPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.outbound_payments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.treasury.outbound_payments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TreasuryOutboundPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.treasury.outbound_payments.$post> },
      ) => parseResponse(client.v1.treasury.outbound_payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TreasuryOutboundPaymentsIdKey(
  args: InferRequestType<(typeof client.v1.treasury.outbound_payments)[':id']['$get']>,
) {
  return ['v1', '/v1/treasury/outbound_payments/:id', args] as const
}

export function useGetV1TreasuryOutboundPaymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.treasury.outbound_payments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.outbound_payments)[':id']['$get']>>
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
        ? getGetV1TreasuryOutboundPaymentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.outbound_payments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.treasury.outbound_payments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryOutboundPaymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.treasury.outbound_payments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.outbound_payments)[':id']['$get']>>
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
        ? getGetV1TreasuryOutboundPaymentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.outbound_payments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.treasury.outbound_payments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TreasuryOutboundPaymentsIdCancelKey() {
  return ['v1', '/v1/treasury/outbound_payments/:id/cancel', 'POST'] as const
}

export function usePostV1TreasuryOutboundPaymentsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.treasury.outbound_payments)[':id']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.treasury.outbound_payments)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TreasuryOutboundPaymentsIdCancelKey()
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
            (typeof client.v1.treasury.outbound_payments)[':id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.treasury.outbound_payments[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TreasuryOutboundTransfersKey(
  args: InferRequestType<typeof client.v1.treasury.outbound_transfers.$get>,
) {
  return ['v1', '/v1/treasury/outbound_transfers', args] as const
}

export function useGetV1TreasuryOutboundTransfers<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.outbound_transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.outbound_transfers.$get>>
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
        ? getGetV1TreasuryOutboundTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.outbound_transfers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.outbound_transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryOutboundTransfers<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.outbound_transfers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.outbound_transfers.$get>>
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
        ? getGetV1TreasuryOutboundTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.outbound_transfers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.outbound_transfers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TreasuryOutboundTransfersKey() {
  return ['v1', '/v1/treasury/outbound_transfers', 'POST'] as const
}

export function usePostV1TreasuryOutboundTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.treasury.outbound_transfers.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.treasury.outbound_transfers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TreasuryOutboundTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.treasury.outbound_transfers.$post> },
      ) => parseResponse(client.v1.treasury.outbound_transfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TreasuryOutboundTransfersOutboundTransferKey(
  args: InferRequestType<
    (typeof client.v1.treasury.outbound_transfers)[':outbound_transfer']['$get']
  >,
) {
  return ['v1', '/v1/treasury/outbound_transfers/:outbound_transfer', args] as const
}

export function useGetV1TreasuryOutboundTransfersOutboundTransfer<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.treasury.outbound_transfers)[':outbound_transfer']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.treasury.outbound_transfers)[':outbound_transfer']['$get']
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
        ? getGetV1TreasuryOutboundTransfersOutboundTransferKey(args)
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
                (typeof client.v1.treasury.outbound_transfers)[':outbound_transfer']['$get']
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
          client.v1.treasury.outbound_transfers[':outbound_transfer'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryOutboundTransfersOutboundTransfer<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.treasury.outbound_transfers)[':outbound_transfer']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.treasury.outbound_transfers)[':outbound_transfer']['$get']
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
        ? getGetV1TreasuryOutboundTransfersOutboundTransferKey(args)
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
                (typeof client.v1.treasury.outbound_transfers)[':outbound_transfer']['$get']
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
          client.v1.treasury.outbound_transfers[':outbound_transfer'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1TreasuryOutboundTransfersOutboundTransferCancelKey() {
  return ['v1', '/v1/treasury/outbound_transfers/:outbound_transfer/cancel', 'POST'] as const
}

export function usePostV1TreasuryOutboundTransfersOutboundTransferCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.treasury.outbound_transfers)[':outbound_transfer']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.treasury.outbound_transfers)[':outbound_transfer']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TreasuryOutboundTransfersOutboundTransferCancelKey()
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
            (typeof client.v1.treasury.outbound_transfers)[':outbound_transfer']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.treasury.outbound_transfers[':outbound_transfer'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TreasuryReceivedCreditsKey(
  args: InferRequestType<typeof client.v1.treasury.received_credits.$get>,
) {
  return ['v1', '/v1/treasury/received_credits', args] as const
}

export function useGetV1TreasuryReceivedCredits<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.received_credits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.received_credits.$get>>>
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
        ? getGetV1TreasuryReceivedCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.received_credits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.received_credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryReceivedCredits<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.received_credits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.received_credits.$get>>>
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
        ? getGetV1TreasuryReceivedCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.received_credits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.received_credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TreasuryReceivedCreditsIdKey(
  args: InferRequestType<(typeof client.v1.treasury.received_credits)[':id']['$get']>,
) {
  return ['v1', '/v1/treasury/received_credits/:id', args] as const
}

export function useGetV1TreasuryReceivedCreditsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.treasury.received_credits)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.received_credits)[':id']['$get']>>
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
        ? getGetV1TreasuryReceivedCreditsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.received_credits)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.treasury.received_credits[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryReceivedCreditsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.treasury.received_credits)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.received_credits)[':id']['$get']>>
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
        ? getGetV1TreasuryReceivedCreditsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.received_credits)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.treasury.received_credits[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TreasuryReceivedDebitsKey(
  args: InferRequestType<typeof client.v1.treasury.received_debits.$get>,
) {
  return ['v1', '/v1/treasury/received_debits', args] as const
}

export function useGetV1TreasuryReceivedDebits<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.received_debits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.received_debits.$get>>>
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
        ? getGetV1TreasuryReceivedDebitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.received_debits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.received_debits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryReceivedDebits<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.received_debits.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.received_debits.$get>>>
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
        ? getGetV1TreasuryReceivedDebitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.received_debits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.received_debits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TreasuryReceivedDebitsIdKey(
  args: InferRequestType<(typeof client.v1.treasury.received_debits)[':id']['$get']>,
) {
  return ['v1', '/v1/treasury/received_debits/:id', args] as const
}

export function useGetV1TreasuryReceivedDebitsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.treasury.received_debits)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.received_debits)[':id']['$get']>>
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
        ? getGetV1TreasuryReceivedDebitsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.received_debits)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.treasury.received_debits[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryReceivedDebitsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.treasury.received_debits)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.received_debits)[':id']['$get']>>
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
        ? getGetV1TreasuryReceivedDebitsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.received_debits)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.treasury.received_debits[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TreasuryTransactionEntriesKey(
  args: InferRequestType<typeof client.v1.treasury.transaction_entries.$get>,
) {
  return ['v1', '/v1/treasury/transaction_entries', args] as const
}

export function useGetV1TreasuryTransactionEntries<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.transaction_entries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.transaction_entries.$get>>
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
        ? getGetV1TreasuryTransactionEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.transaction_entries.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.transaction_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryTransactionEntries<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.transaction_entries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.transaction_entries.$get>>
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
        ? getGetV1TreasuryTransactionEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.treasury.transaction_entries.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.transaction_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TreasuryTransactionEntriesIdKey(
  args: InferRequestType<(typeof client.v1.treasury.transaction_entries)[':id']['$get']>,
) {
  return ['v1', '/v1/treasury/transaction_entries/:id', args] as const
}

export function useGetV1TreasuryTransactionEntriesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.treasury.transaction_entries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.transaction_entries)[':id']['$get']>>
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
        ? getGetV1TreasuryTransactionEntriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.transaction_entries)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.treasury.transaction_entries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryTransactionEntriesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.treasury.transaction_entries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.transaction_entries)[':id']['$get']>>
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
        ? getGetV1TreasuryTransactionEntriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.transaction_entries)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.treasury.transaction_entries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TreasuryTransactionsKey(
  args: InferRequestType<typeof client.v1.treasury.transactions.$get>,
) {
  return ['v1', '/v1/treasury/transactions', args] as const
}

export function useGetV1TreasuryTransactions<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.transactions.$get>>>
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
        ? getGetV1TreasuryTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryTransactions<TError = unknown>(
  args: InferRequestType<typeof client.v1.treasury.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.transactions.$get>>>
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
        ? getGetV1TreasuryTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.treasury.transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TreasuryTransactionsIdKey(
  args: InferRequestType<(typeof client.v1.treasury.transactions)[':id']['$get']>,
) {
  return ['v1', '/v1/treasury/transactions/:id', args] as const
}

export function useGetV1TreasuryTransactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.treasury.transactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.transactions)[':id']['$get']>>
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
        ? getGetV1TreasuryTransactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.transactions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.transactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TreasuryTransactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.treasury.transactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.transactions)[':id']['$get']>>
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
        ? getGetV1TreasuryTransactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.treasury.transactions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.treasury.transactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WebhookEndpointsKey(
  args: InferRequestType<typeof client.v1.webhook_endpoints.$get>,
) {
  return ['v1', '/v1/webhook_endpoints', args] as const
}

export function useGetV1WebhookEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.v1.webhook_endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhook_endpoints.$get>>>
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
        ? getGetV1WebhookEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhook_endpoints.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhook_endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WebhookEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.v1.webhook_endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhook_endpoints.$get>>>
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
        ? getGetV1WebhookEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhook_endpoints.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhook_endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WebhookEndpointsKey() {
  return ['v1', '/v1/webhook_endpoints', 'POST'] as const
}

export function usePostV1WebhookEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhook_endpoints.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.webhook_endpoints.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebhookEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.webhook_endpoints.$post> },
      ) => parseResponse(client.v1.webhook_endpoints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WebhookEndpointsWebhookEndpointKey(
  args: InferRequestType<(typeof client.v1.webhook_endpoints)[':webhook_endpoint']['$get']>,
) {
  return ['v1', '/v1/webhook_endpoints/:webhook_endpoint', args] as const
}

export function useGetV1WebhookEndpointsWebhookEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client.v1.webhook_endpoints)[':webhook_endpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.webhook_endpoints)[':webhook_endpoint']['$get']>>
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
        ? getGetV1WebhookEndpointsWebhookEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.webhook_endpoints)[':webhook_endpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.webhook_endpoints[':webhook_endpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WebhookEndpointsWebhookEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client.v1.webhook_endpoints)[':webhook_endpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.webhook_endpoints)[':webhook_endpoint']['$get']>>
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
        ? getGetV1WebhookEndpointsWebhookEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.webhook_endpoints)[':webhook_endpoint']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.webhook_endpoints[':webhook_endpoint'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WebhookEndpointsWebhookEndpointKey() {
  return ['v1', '/v1/webhook_endpoints/:webhook_endpoint', 'POST'] as const
}

export function usePostV1WebhookEndpointsWebhookEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.webhook_endpoints)[':webhook_endpoint']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.webhook_endpoints)[':webhook_endpoint']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebhookEndpointsWebhookEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.webhook_endpoints)[':webhook_endpoint']['$post']>
        },
      ) =>
        parseResponse(client.v1.webhook_endpoints[':webhook_endpoint'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1WebhookEndpointsWebhookEndpointKey() {
  return ['v1', '/v1/webhook_endpoints/:webhook_endpoint', 'DELETE'] as const
}

export function useDeleteV1WebhookEndpointsWebhookEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.webhook_endpoints)[':webhook_endpoint']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.webhook_endpoints)[':webhook_endpoint']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1WebhookEndpointsWebhookEndpointKey()
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
            (typeof client.v1.webhook_endpoints)[':webhook_endpoint']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.webhook_endpoints[':webhook_endpoint'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
