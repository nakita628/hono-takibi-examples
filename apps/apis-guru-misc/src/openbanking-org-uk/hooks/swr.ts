import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAtmsKey() {
  return ['atms'] as const
}

export function getBranchesKey() {
  return ['branches'] as const
}

export function getBusinessCurrentAccountsKey() {
  return ['business-current-accounts'] as const
}

export function getCommercialCreditCardsKey() {
  return ['commercial-credit-cards'] as const
}

export function getPersonalCurrentAccountsKey() {
  return ['personal-current-accounts'] as const
}

export function getUnsecuredSmeLoansKey() {
  return ['unsecured-sme-loans'] as const
}

export function getGetAtmsKey(args: InferRequestType<typeof client.atms.$get>) {
  const { header: _, ...keyArgs } = args
  return ['atms', '/atms', keyArgs] as const
}

export function useGetAtms<TError = unknown>(
  args: InferRequestType<typeof client.atms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atms.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAtmsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atms.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.atms.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAtms<TError = unknown>(
  args: InferRequestType<typeof client.atms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atms.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAtmsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atms.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.atms.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getHeadAtmsKey() {
  return ['atms', '/atms', 'HEAD'] as const
}

export function useHeadAtms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.atms.$head>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.atms.$head>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadAtmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.atms.$head> }) =>
        parseResponse(client.atms.$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBranchesKey(args: InferRequestType<typeof client.branches.$get>) {
  const { header: _, ...keyArgs } = args
  return ['branches', '/branches', keyArgs] as const
}

export function useGetBranches<TError = unknown>(
  args: InferRequestType<typeof client.branches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBranchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branches.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.branches.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBranches<TError = unknown>(
  args: InferRequestType<typeof client.branches.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branches.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBranchesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branches.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.branches.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getHeadBranchesKey() {
  return ['branches', '/branches', 'HEAD'] as const
}

export function useHeadBranches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branches.$head>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.branches.$head>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadBranchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.branches.$head> }) =>
        parseResponse(client.branches.$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBusinessCurrentAccountsKey(
  args: InferRequestType<(typeof client)['business-current-accounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['business-current-accounts', '/business-current-accounts', keyArgs] as const
}

export function useGetBusinessCurrentAccounts<TError = unknown>(
  args: InferRequestType<(typeof client)['business-current-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['business-current-accounts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessCurrentAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['business-current-accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['business-current-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBusinessCurrentAccounts<TError = unknown>(
  args: InferRequestType<(typeof client)['business-current-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['business-current-accounts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBusinessCurrentAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['business-current-accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['business-current-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadBusinessCurrentAccountsKey() {
  return ['business-current-accounts', '/business-current-accounts', 'HEAD'] as const
}

export function useHeadBusinessCurrentAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['business-current-accounts']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['business-current-accounts']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadBusinessCurrentAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['business-current-accounts']['$head']> },
      ) => parseResponse(client['business-current-accounts'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCommercialCreditCardsKey(
  args: InferRequestType<(typeof client)['commercial-credit-cards']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['commercial-credit-cards', '/commercial-credit-cards', keyArgs] as const
}

export function useGetCommercialCreditCards<TError = unknown>(
  args: InferRequestType<(typeof client)['commercial-credit-cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['commercial-credit-cards']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommercialCreditCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['commercial-credit-cards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['commercial-credit-cards'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCommercialCreditCards<TError = unknown>(
  args: InferRequestType<(typeof client)['commercial-credit-cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['commercial-credit-cards']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCommercialCreditCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['commercial-credit-cards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['commercial-credit-cards'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadCommercialCreditCardsKey() {
  return ['commercial-credit-cards', '/commercial-credit-cards', 'HEAD'] as const
}

export function useHeadCommercialCreditCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['commercial-credit-cards']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['commercial-credit-cards']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadCommercialCreditCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['commercial-credit-cards']['$head']> },
      ) => parseResponse(client['commercial-credit-cards'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPersonalCurrentAccountsKey(
  args: InferRequestType<(typeof client)['personal-current-accounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['personal-current-accounts', '/personal-current-accounts', keyArgs] as const
}

export function useGetPersonalCurrentAccounts<TError = unknown>(
  args: InferRequestType<(typeof client)['personal-current-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['personal-current-accounts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPersonalCurrentAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['personal-current-accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['personal-current-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPersonalCurrentAccounts<TError = unknown>(
  args: InferRequestType<(typeof client)['personal-current-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['personal-current-accounts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPersonalCurrentAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['personal-current-accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['personal-current-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadPersonalCurrentAccountsKey() {
  return ['personal-current-accounts', '/personal-current-accounts', 'HEAD'] as const
}

export function useHeadPersonalCurrentAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['personal-current-accounts']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['personal-current-accounts']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadPersonalCurrentAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['personal-current-accounts']['$head']> },
      ) => parseResponse(client['personal-current-accounts'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUnsecuredSmeLoansKey(
  args: InferRequestType<(typeof client)['unsecured-sme-loans']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['unsecured-sme-loans', '/unsecured-sme-loans', keyArgs] as const
}

export function useGetUnsecuredSmeLoans<TError = unknown>(
  args: InferRequestType<(typeof client)['unsecured-sme-loans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['unsecured-sme-loans']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUnsecuredSmeLoansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['unsecured-sme-loans']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['unsecured-sme-loans'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUnsecuredSmeLoans<TError = unknown>(
  args: InferRequestType<(typeof client)['unsecured-sme-loans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['unsecured-sme-loans']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUnsecuredSmeLoansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['unsecured-sme-loans']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['unsecured-sme-loans'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getHeadUnsecuredSmeLoansKey() {
  return ['unsecured-sme-loans', '/unsecured-sme-loans', 'HEAD'] as const
}

export function useHeadUnsecuredSmeLoans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['unsecured-sme-loans']['$head']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['unsecured-sme-loans']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadUnsecuredSmeLoansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['unsecured-sme-loans']['$head']> },
      ) => parseResponse(client['unsecured-sme-loans'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
