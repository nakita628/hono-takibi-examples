import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOauth2Key() {
  return ['oauth2'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getPostOauth2TokensKey() {
  return ['oauth2', '/oauth2/tokens', 'POST'] as const
}

export function usePostOauth2Tokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.tokens.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauth2TokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth2.tokens.$post> }) =>
        parseResponse(client.oauth2.tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOauth2TokensKey() {
  return ['oauth2', '/oauth2/tokens', 'DELETE'] as const
}

export function useDeleteOauth2Tokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth2.tokens.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.oauth2.tokens.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOauth2TokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth2.tokens.$delete> }) =>
        parseResponse(client.oauth2.tokens.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BalancesKey(args: InferRequestType<typeof client.v2.balances.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/balances', keyArgs] as const
}

export function useGetV2Balances<TError = unknown>(
  args: InferRequestType<typeof client.v2.balances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2BalancesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Balances<TError = unknown>(
  args: InferRequestType<typeof client.v2.balances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2BalancesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.balances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BalancesBalanceIdKey(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/balances/:balanceId', keyArgs] as const
}

export function useGetV2BalancesBalanceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BalancesBalanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.balances[':balanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BalancesBalanceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BalancesBalanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.balances[':balanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BalancesPrimaryKey(
  args: InferRequestType<typeof client.v2.balances.primary.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/balances/primary', keyArgs] as const
}

export function useGetV2BalancesPrimary<TError = unknown>(
  args: InferRequestType<typeof client.v2.balances.primary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.primary.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BalancesPrimaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.primary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.balances.primary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BalancesPrimary<TError = unknown>(
  args: InferRequestType<typeof client.v2.balances.primary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.primary.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BalancesPrimaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.balances.primary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.balances.primary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BalancesBalanceIdReportKey(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['report']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/balances/:balanceId/report', keyArgs] as const
}

export function useGetV2BalancesBalanceIdReport<TError = unknown>(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['report']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BalancesBalanceIdReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['report']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.balances[':balanceId'].report.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BalancesBalanceIdReport<TError = unknown>(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['report']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BalancesBalanceIdReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['report']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.balances[':balanceId'].report.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2BalancesBalanceIdTransactionsKey(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/balances/:balanceId/transactions', keyArgs] as const
}

export function useGetV2BalancesBalanceIdTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BalancesBalanceIdTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.balances[':balanceId'].transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BalancesBalanceIdTransactions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BalancesBalanceIdTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.balances)[':balanceId']['transactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.balances[':balanceId'].transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ReportsKey() {
  return ['v2', '/v2/reports', 'POST'] as const
}

export function usePostV2Reports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.reports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.reports.$post> }) =>
        parseResponse(client.v2.reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ReportsReportIdKey(
  args: InferRequestType<(typeof client.v2.reports)[':reportId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/reports/:reportId', keyArgs] as const
}

export function useGetV2ReportsReportId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.reports)[':reportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.reports)[':reportId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ReportsReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.reports)[':reportId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.reports[':reportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ReportsReportId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.reports)[':reportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.reports)[':reportId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ReportsReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.reports)[':reportId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.reports[':reportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SettlementsKey(args: InferRequestType<typeof client.v2.settlements.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/settlements', keyArgs] as const
}

export function useGetV2Settlements<TError = unknown>(
  args: InferRequestType<typeof client.v2.settlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SettlementsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.settlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Settlements<TError = unknown>(
  args: InferRequestType<typeof client.v2.settlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SettlementsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.settlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SettlementsSettlementIdKey(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/settlements/:settlementId', keyArgs] as const
}

export function useGetV2SettlementsSettlementId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SettlementsSettlementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.settlements[':settlementId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SettlementsSettlementId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SettlementsSettlementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.settlements[':settlementId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SettlementsOpenKey(
  args: InferRequestType<typeof client.v2.settlements.open.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/settlements/open', keyArgs] as const
}

export function useGetV2SettlementsOpen<TError = unknown>(
  args: InferRequestType<typeof client.v2.settlements.open.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.open.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SettlementsOpenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.open.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.settlements.open.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SettlementsOpen<TError = unknown>(
  args: InferRequestType<typeof client.v2.settlements.open.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.open.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SettlementsOpenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.open.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.settlements.open.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SettlementsNextKey(
  args: InferRequestType<typeof client.v2.settlements.next.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/settlements/next', keyArgs] as const
}

export function useGetV2SettlementsNext<TError = unknown>(
  args: InferRequestType<typeof client.v2.settlements.next.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.next.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SettlementsNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.next.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.settlements.next.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SettlementsNext<TError = unknown>(
  args: InferRequestType<typeof client.v2.settlements.next.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.next.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SettlementsNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.settlements.next.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.settlements.next.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SettlementsSettlementIdPaymentsKey(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/settlements/:settlementId/payments', keyArgs] as const
}

export function useGetV2SettlementsSettlementIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SettlementsSettlementIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.settlements[':settlementId'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SettlementsSettlementIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SettlementsSettlementIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.settlements[':settlementId'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SettlementsSettlementIdCapturesKey(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/settlements/:settlementId/captures', keyArgs] as const
}

export function useGetV2SettlementsSettlementIdCaptures<TError = unknown>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SettlementsSettlementIdCapturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.settlements[':settlementId'].captures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SettlementsSettlementIdCaptures<TError = unknown>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SettlementsSettlementIdCapturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['captures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.settlements[':settlementId'].captures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SettlementsSettlementIdRefundsKey(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/settlements/:settlementId/refunds', keyArgs] as const
}

export function useGetV2SettlementsSettlementIdRefunds<TError = unknown>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SettlementsSettlementIdRefundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.settlements[':settlementId'].refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SettlementsSettlementIdRefunds<TError = unknown>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SettlementsSettlementIdRefundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.settlements)[':settlementId']['refunds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.settlements[':settlementId'].refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SettlementsSettlementIdChargebacksKey(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/settlements/:settlementId/chargebacks', keyArgs] as const
}

export function useGetV2SettlementsSettlementIdChargebacks<TError = unknown>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>
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
        ? getGetV2SettlementsSettlementIdChargebacksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.settlements[':settlementId'].chargebacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SettlementsSettlementIdChargebacks<TError = unknown>(
  args: InferRequestType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>
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
        ? getGetV2SettlementsSettlementIdChargebacksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.settlements)[':settlementId']['chargebacks']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.settlements[':settlementId'].chargebacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2InvoicesKey(args: InferRequestType<typeof client.v2.invoices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/invoices', keyArgs] as const
}

export function useGetV2Invoices<TError = unknown>(
  args: InferRequestType<typeof client.v2.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2InvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Invoices<TError = unknown>(
  args: InferRequestType<typeof client.v2.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2InvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.invoices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2InvoicesInvoiceIdKey(
  args: InferRequestType<(typeof client.v2.invoices)[':invoiceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/invoices/:invoiceId', keyArgs] as const
}

export function useGetV2InvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.invoices)[':invoiceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoices)[':invoiceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2InvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoices)[':invoiceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.invoices[':invoiceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.invoices)[':invoiceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoices)[':invoiceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2InvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.invoices)[':invoiceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.invoices[':invoiceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2PermissionsKey(args: InferRequestType<typeof client.v2.permissions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/permissions', keyArgs] as const
}

export function useGetV2Permissions<TError = unknown>(
  args: InferRequestType<typeof client.v2.permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.permissions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PermissionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.permissions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Permissions<TError = unknown>(
  args: InferRequestType<typeof client.v2.permissions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.permissions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PermissionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.permissions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2PermissionsPermissionIdKey(
  args: InferRequestType<(typeof client.v2.permissions)[':permissionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/permissions/:permissionId', keyArgs] as const
}

export function useGetV2PermissionsPermissionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.permissions)[':permissionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.permissions)[':permissionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PermissionsPermissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.permissions)[':permissionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.permissions[':permissionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PermissionsPermissionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.permissions)[':permissionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.permissions)[':permissionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PermissionsPermissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.permissions)[':permissionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.permissions[':permissionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2OrganizationsOrganizationIdKey(
  args: InferRequestType<(typeof client.v2.organizations)[':organizationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/organizations/:organizationId', keyArgs] as const
}

export function useGetV2OrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.organizations)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2OrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.organizations[':organizationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2OrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.organizations)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2OrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.organizations[':organizationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2OrganizationsMeKey(
  args: InferRequestType<typeof client.v2.organizations.me.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/organizations/me', keyArgs] as const
}

export function useGetV2OrganizationsMe<TError = unknown>(
  args: InferRequestType<typeof client.v2.organizations.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2OrganizationsMeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.organizations.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2OrganizationsMe<TError = unknown>(
  args: InferRequestType<typeof client.v2.organizations.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2OrganizationsMeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.organizations.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2OrganizationsMePartnerKey(
  args: InferRequestType<typeof client.v2.organizations.me.partner.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/organizations/me/partner', keyArgs] as const
}

export function useGetV2OrganizationsMePartner<TError = unknown>(
  args: InferRequestType<typeof client.v2.organizations.me.partner.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.partner.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2OrganizationsMePartnerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.partner.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.organizations.me.partner.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2OrganizationsMePartner<TError = unknown>(
  args: InferRequestType<typeof client.v2.organizations.me.partner.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.partner.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2OrganizationsMePartnerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.organizations.me.partner.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.organizations.me.partner.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ProfilesKey(args: InferRequestType<typeof client.v2.profiles.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/profiles', keyArgs] as const
}

export function useGetV2Profiles<TError = unknown>(
  args: InferRequestType<typeof client.v2.profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ProfilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Profiles<TError = unknown>(
  args: InferRequestType<typeof client.v2.profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ProfilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ProfilesKey() {
  return ['v2', '/v2/profiles', 'POST'] as const
}

export function usePostV2Profiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.profiles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.profiles.$post> }) =>
        parseResponse(client.v2.profiles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProfilesProfileIdKey(
  args: InferRequestType<(typeof client.v2.profiles)[':profileId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/profiles/:profileId', keyArgs] as const
}

export function useGetV2ProfilesProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.profiles)[':profileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.profiles)[':profileId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ProfilesProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.profiles)[':profileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.profiles[':profileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProfilesProfileId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.profiles)[':profileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.profiles)[':profileId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ProfilesProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.profiles)[':profileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.profiles[':profileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2ProfilesProfileIdKey() {
  return ['v2', '/v2/profiles/:profileId', 'DELETE'] as const
}

export function useDeleteV2ProfilesProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.profiles)[':profileId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.profiles)[':profileId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ProfilesProfileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.profiles)[':profileId']['$delete']> },
      ) => parseResponse(client.v2.profiles[':profileId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2ProfilesProfileIdKey() {
  return ['v2', '/v2/profiles/:profileId', 'PATCH'] as const
}

export function usePatchV2ProfilesProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.profiles)[':profileId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.profiles)[':profileId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2ProfilesProfileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.profiles)[':profileId']['$patch']> },
      ) => parseResponse(client.v2.profiles[':profileId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProfilesMeKey(args: InferRequestType<typeof client.v2.profiles.me.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/profiles/me', keyArgs] as const
}

export function useGetV2ProfilesMe<TError = unknown>(
  args: InferRequestType<typeof client.v2.profiles.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.me.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ProfilesMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.profiles.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProfilesMe<TError = unknown>(
  args: InferRequestType<typeof client.v2.profiles.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.me.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ProfilesMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.profiles.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.profiles.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2OnboardingMeKey(
  args: InferRequestType<typeof client.v2.onboarding.me.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/onboarding/me', keyArgs] as const
}

export function useGetV2OnboardingMe<TError = unknown>(
  args: InferRequestType<typeof client.v2.onboarding.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onboarding.me.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2OnboardingMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onboarding.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.onboarding.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2OnboardingMe<TError = unknown>(
  args: InferRequestType<typeof client.v2.onboarding.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onboarding.me.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2OnboardingMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onboarding.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.onboarding.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2OnboardingMeKey() {
  return ['v2', '/v2/onboarding/me', 'POST'] as const
}

export function usePostV2OnboardingMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.onboarding.me.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.onboarding.me.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2OnboardingMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.onboarding.me.$post> }) =>
        parseResponse(client.v2.onboarding.me.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CapabilitiesKey(
  args: InferRequestType<typeof client.v2.capabilities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/capabilities', keyArgs] as const
}

export function useGetV2Capabilities<TError = unknown>(
  args: InferRequestType<typeof client.v2.capabilities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.capabilities.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CapabilitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.capabilities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.capabilities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Capabilities<TError = unknown>(
  args: InferRequestType<typeof client.v2.capabilities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.capabilities.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CapabilitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.capabilities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.capabilities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ClientsKey(args: InferRequestType<typeof client.v2.clients.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/clients', keyArgs] as const
}

export function useGetV2Clients<TError = unknown>(
  args: InferRequestType<typeof client.v2.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clients.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clients.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Clients<TError = unknown>(
  args: InferRequestType<typeof client.v2.clients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clients.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ClientsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clients.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.clients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ClientsOrganizationIdKey(
  args: InferRequestType<(typeof client.v2.clients)[':organizationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/clients/:organizationId', keyArgs] as const
}

export function useGetV2ClientsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.clients)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.clients)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ClientsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.clients)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.clients[':organizationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ClientsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.clients)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.clients)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ClientsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.clients)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.clients[':organizationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ClientLinksKey() {
  return ['v2', '/v2/client-links', 'POST'] as const
}

export function usePostV2ClientLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['client-links']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['client-links']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ClientLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['client-links']['$post']> },
      ) => parseResponse(client.v2['client-links'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2WebhooksKey(args: InferRequestType<typeof client.v2.webhooks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/webhooks', keyArgs] as const
}

export function useGetV2Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v2.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v2.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2WebhooksKey() {
  return ['v2', '/v2/webhooks', 'POST'] as const
}

export function usePostV2Webhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.webhooks.$post> }) =>
        parseResponse(client.v2.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2WebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/webhooks/:webhookId', keyArgs] as const
}

export function useGetV2WebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2WebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2WebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2WebhooksWebhookIdKey() {
  return ['v2', '/v2/webhooks/:webhookId', 'DELETE'] as const
}

export function useDeleteV2WebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2WebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$delete']> },
      ) => parseResponse(client.v2.webhooks[':webhookId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2WebhooksWebhookIdKey() {
  return ['v2', '/v2/webhooks/:webhookId', 'PATCH'] as const
}

export function usePatchV2WebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2WebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['$patch']> },
      ) => parseResponse(client.v2.webhooks[':webhookId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2WebhooksWebhookIdPingKey() {
  return ['v2', '/v2/webhooks/:webhookId/ping', 'POST'] as const
}

export function usePostV2WebhooksWebhookIdPing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.webhooks)[':webhookId']['ping']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.webhooks)[':webhookId']['ping']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WebhooksWebhookIdPingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.webhooks)[':webhookId']['ping']['$post']> },
      ) => parseResponse(client.v2.webhooks[':webhookId'].ping.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2EventsWebhookEventIdKey(
  args: InferRequestType<(typeof client.v2.events)[':webhookEventId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/events/:webhookEventId', keyArgs] as const
}

export function useGetV2EventsWebhookEventId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.events)[':webhookEventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.events)[':webhookEventId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2EventsWebhookEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.events)[':webhookEventId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.events[':webhookEventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2EventsWebhookEventId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.events)[':webhookEventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.events)[':webhookEventId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2EventsWebhookEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.events)[':webhookEventId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.events[':webhookEventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ConnectBalanceTransfersKey(
  args: InferRequestType<(typeof client.v2.connect)['balance-transfers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/connect/balance-transfers', keyArgs] as const
}

export function useGetV2ConnectBalanceTransfers<TError = unknown>(
  args: InferRequestType<(typeof client.v2.connect)['balance-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.connect)['balance-transfers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ConnectBalanceTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.connect)['balance-transfers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.connect['balance-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ConnectBalanceTransfers<TError = unknown>(
  args: InferRequestType<(typeof client.v2.connect)['balance-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.connect)['balance-transfers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ConnectBalanceTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.connect)['balance-transfers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.connect['balance-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ConnectBalanceTransfersKey() {
  return ['v2', '/v2/connect/balance-transfers', 'POST'] as const
}

export function usePostV2ConnectBalanceTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.connect)['balance-transfers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.connect)['balance-transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ConnectBalanceTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.connect)['balance-transfers']['$post']> },
      ) => parseResponse(client.v2.connect['balance-transfers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ConnectBalanceTransfersBalanceTransferIdKey(
  args: InferRequestType<
    (typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/connect/balance-transfers/:balanceTransferId', keyArgs] as const
}

export function useGetV2ConnectBalanceTransfersBalanceTransferId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']
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
        ? getGetV2ConnectBalanceTransfersBalanceTransferIdKey(args)
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
                (typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']
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
          client.v2.connect['balance-transfers'][':balanceTransferId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ConnectBalanceTransfersBalanceTransferId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']
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
        ? getGetV2ConnectBalanceTransfersBalanceTransferIdKey(args)
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
                (typeof client.v2.connect)['balance-transfers'][':balanceTransferId']['$get']
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
          client.v2.connect['balance-transfers'][':balanceTransferId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2PaymentsKey(args: InferRequestType<typeof client.v2.payments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments', keyArgs] as const
}

export function useGetV2Payments<TError = unknown>(
  args: InferRequestType<typeof client.v2.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Payments<TError = unknown>(
  args: InferRequestType<typeof client.v2.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2PaymentsKey() {
  return ['v2', '/v2/payments', 'POST'] as const
}

export function usePostV2Payments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payments.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.payments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.payments.$post> }) =>
        parseResponse(client.v2.payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentsPaymentIdKey(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId', keyArgs] as const
}

export function useGetV2PaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payments[':paymentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payments[':paymentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2PaymentsPaymentIdKey() {
  return ['v2', '/v2/payments/:paymentId', 'DELETE'] as const
}

export function useDeleteV2PaymentsPaymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.payments)[':paymentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2PaymentsPaymentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.payments)[':paymentId']['$delete']> },
      ) => parseResponse(client.v2.payments[':paymentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2PaymentsPaymentIdKey() {
  return ['v2', '/v2/payments/:paymentId', 'PATCH'] as const
}

export function usePatchV2PaymentsPaymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.payments)[':paymentId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2PaymentsPaymentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.payments)[':paymentId']['$patch']> },
      ) => parseResponse(client.v2.payments[':paymentId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2PaymentsPaymentIdReleaseAuthorizationKey() {
  return ['v2', '/v2/payments/:paymentId/release-authorization', 'POST'] as const
}

export function usePostV2PaymentsPaymentIdReleaseAuthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.payments)[':paymentId']['release-authorization']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.payments)[':paymentId']['release-authorization']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentsPaymentIdReleaseAuthorizationKey()
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
            (typeof client.v2.payments)[':paymentId']['release-authorization']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.payments[':paymentId']['release-authorization'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UnmatchedCreditTransfersKey(
  args: InferRequestType<(typeof client.v2)['unmatched-credit-transfers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/unmatched-credit-transfers', keyArgs] as const
}

export function useGetV2UnmatchedCreditTransfers<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['unmatched-credit-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['unmatched-credit-transfers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UnmatchedCreditTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['unmatched-credit-transfers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['unmatched-credit-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UnmatchedCreditTransfers<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['unmatched-credit-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['unmatched-credit-transfers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2UnmatchedCreditTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['unmatched-credit-transfers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['unmatched-credit-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UnmatchedCreditTransfersUnmatchedCreditTransferIdKey(
  args: InferRequestType<
    (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/unmatched-credit-transfers/:unmatchedCreditTransferId', keyArgs] as const
}

export function useGetV2UnmatchedCreditTransfersUnmatchedCreditTransferId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
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
        ? getGetV2UnmatchedCreditTransfersUnmatchedCreditTransferIdKey(args)
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
                (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
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
          client.v2['unmatched-credit-transfers'][':unmatchedCreditTransferId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UnmatchedCreditTransfersUnmatchedCreditTransferId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
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
        ? getGetV2UnmatchedCreditTransfersUnmatchedCreditTransferIdKey(args)
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
                (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['$get']
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
          client.v2['unmatched-credit-transfers'][':unmatchedCreditTransferId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatchKey() {
  return ['v2', '/v2/unmatched-credit-transfers/:unmatchedCreditTransferId/match', 'POST'] as const
}

export function usePostV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['match']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['match']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UnmatchedCreditTransfersUnmatchedCreditTransferIdMatchKey()
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
            (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['match']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['unmatched-credit-transfers'][':unmatchedCreditTransferId'].match.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturnKey() {
  return ['v2', '/v2/unmatched-credit-transfers/:unmatchedCreditTransferId/return', 'POST'] as const
}

export function usePostV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['return']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['return']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UnmatchedCreditTransfersUnmatchedCreditTransferIdReturnKey()
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
            (typeof client.v2)['unmatched-credit-transfers'][':unmatchedCreditTransferId']['return']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['unmatched-credit-transfers'][':unmatchedCreditTransferId'].return.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2SessionsKey() {
  return ['v2', '/v2/sessions', 'POST'] as const
}

export function usePostV2Sessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sessions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.sessions.$post> }) =>
        parseResponse(client.v2.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SessionsSessionIdKey(
  args: InferRequestType<(typeof client.v2.sessions)[':sessionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/sessions/:sessionId', keyArgs] as const
}

export function useGetV2SessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sessions)[':sessionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sessions)[':sessionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sessions)[':sessionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sessions[':sessionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sessions)[':sessionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sessions)[':sessionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sessions)[':sessionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sessions[':sessionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2MethodsKey(args: InferRequestType<typeof client.v2.methods.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/methods', keyArgs] as const
}

export function useGetV2Methods<TError = unknown>(
  args: InferRequestType<typeof client.v2.methods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2MethodsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Methods<TError = unknown>(
  args: InferRequestType<typeof client.v2.methods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2MethodsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2MethodsAllKey(args: InferRequestType<typeof client.v2.methods.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/methods/all', keyArgs] as const
}

export function useGetV2MethodsAll<TError = unknown>(
  args: InferRequestType<typeof client.v2.methods.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2MethodsAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.methods.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MethodsAll<TError = unknown>(
  args: InferRequestType<typeof client.v2.methods.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2MethodsAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.methods.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.methods.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2MethodsMethodIdKey(
  args: InferRequestType<(typeof client.v2.methods)[':methodId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/methods/:methodId', keyArgs] as const
}

export function useGetV2MethodsMethodId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.methods)[':methodId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.methods)[':methodId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2MethodsMethodIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.methods)[':methodId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.methods[':methodId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2MethodsMethodId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.methods)[':methodId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.methods)[':methodId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2MethodsMethodIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.methods)[':methodId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.methods[':methodId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ProfilesProfileIdMethodsMethodIdKey() {
  return ['v2', '/v2/profiles/:profileId/methods/:methodId', 'POST'] as const
}

export function usePostV2ProfilesProfileIdMethodsMethodId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ProfilesProfileIdMethodsMethodIdKey()
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
            (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.profiles[':profileId'].methods[':methodId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2ProfilesProfileIdMethodsMethodIdKey() {
  return ['v2', '/v2/profiles/:profileId/methods/:methodId', 'DELETE'] as const
}

export function useDeleteV2ProfilesProfileIdMethodsMethodId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ProfilesProfileIdMethodsMethodIdKey()
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
            (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.profiles[':profileId'].methods[':methodId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdKey() {
  return ['v2', '/v2/profiles/:profileId/methods/:methodId/issuers/:issuerId', 'POST'] as const
}

export function usePostV2ProfilesProfileIdMethodsMethodIdIssuersIssuerId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdKey()
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
            (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.profiles[':profileId'].methods[':methodId'].issuers[':issuerId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdKey() {
  return ['v2', '/v2/profiles/:profileId/methods/:methodId/issuers/:issuerId', 'DELETE'] as const
}

export function useDeleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ProfilesProfileIdMethodsMethodIdIssuersIssuerIdKey()
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
            (typeof client.v2.profiles)[':profileId']['methods'][':methodId']['issuers'][':issuerId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.profiles[':profileId'].methods[':methodId'].issuers[':issuerId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentsPaymentIdRefundsKey(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId/refunds', keyArgs] as const
}

export function useGetV2PaymentsPaymentIdRefunds<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PaymentsPaymentIdRefundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payments[':paymentId'].refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentsPaymentIdRefunds<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PaymentsPaymentIdRefundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['refunds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payments[':paymentId'].refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2PaymentsPaymentIdRefundsKey() {
  return ['v2', '/v2/payments/:paymentId/refunds', 'POST'] as const
}

export function usePostV2PaymentsPaymentIdRefunds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['refunds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentsPaymentIdRefundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds']['$post']> },
      ) => parseResponse(client.v2.payments[':paymentId'].refunds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentsPaymentIdRefundsRefundIdKey(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId/refunds/:refundId', keyArgs] as const
}

export function useGetV2PaymentsPaymentIdRefundsRefundId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']>
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
        ? getGetV2PaymentsPaymentIdRefundsRefundIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.payments[':paymentId'].refunds[':refundId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentsPaymentIdRefundsRefundId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']>
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
        ? getGetV2PaymentsPaymentIdRefundsRefundIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.payments[':paymentId'].refunds[':refundId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2PaymentsPaymentIdRefundsRefundIdKey() {
  return ['v2', '/v2/payments/:paymentId/refunds/:refundId', 'DELETE'] as const
}

export function useDeleteV2PaymentsPaymentIdRefundsRefundId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2PaymentsPaymentIdRefundsRefundIdKey()
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
            (typeof client.v2.payments)[':paymentId']['refunds'][':refundId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.payments[':paymentId'].refunds[':refundId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2RefundsKey(args: InferRequestType<typeof client.v2.refunds.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/refunds', keyArgs] as const
}

export function useGetV2Refunds<TError = unknown>(
  args: InferRequestType<typeof client.v2.refunds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2RefundsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Refunds<TError = unknown>(
  args: InferRequestType<typeof client.v2.refunds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2RefundsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.refunds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.refunds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2PaymentsPaymentIdChargebacksKey(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId/chargebacks', keyArgs] as const
}

export function useGetV2PaymentsPaymentIdChargebacks<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PaymentsPaymentIdChargebacksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.payments[':paymentId'].chargebacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentsPaymentIdChargebacks<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PaymentsPaymentIdChargebacksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['chargebacks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.payments[':paymentId'].chargebacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2PaymentsPaymentIdChargebacksChargebackIdKey(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId/chargebacks/:chargebackId', keyArgs] as const
}

export function useGetV2PaymentsPaymentIdChargebacksChargebackId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
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
        ? getGetV2PaymentsPaymentIdChargebacksChargebackIdKey(args)
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
                (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
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
          client.v2.payments[':paymentId'].chargebacks[':chargebackId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentsPaymentIdChargebacksChargebackId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
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
        ? getGetV2PaymentsPaymentIdChargebacksChargebackIdKey(args)
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
                (typeof client.v2.payments)[':paymentId']['chargebacks'][':chargebackId']['$get']
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
          client.v2.payments[':paymentId'].chargebacks[':chargebackId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2ChargebacksKey(args: InferRequestType<typeof client.v2.chargebacks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/chargebacks', keyArgs] as const
}

export function useGetV2Chargebacks<TError = unknown>(
  args: InferRequestType<typeof client.v2.chargebacks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.chargebacks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ChargebacksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.chargebacks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.chargebacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Chargebacks<TError = unknown>(
  args: InferRequestType<typeof client.v2.chargebacks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.chargebacks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ChargebacksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.chargebacks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.chargebacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2PaymentsPaymentIdCapturesKey(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId/captures', keyArgs] as const
}

export function useGetV2PaymentsPaymentIdCaptures<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PaymentsPaymentIdCapturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.payments[':paymentId'].captures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentsPaymentIdCaptures<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PaymentsPaymentIdCapturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['captures']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.payments[':paymentId'].captures.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2PaymentsPaymentIdCapturesKey() {
  return ['v2', '/v2/payments/:paymentId/captures', 'POST'] as const
}

export function usePostV2PaymentsPaymentIdCaptures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['captures']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.payments)[':paymentId']['captures']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentsPaymentIdCapturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.payments)[':paymentId']['captures']['$post']>
        },
      ) => parseResponse(client.v2.payments[':paymentId'].captures.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentsPaymentIdCapturesCaptureIdKey(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId/captures/:captureId', keyArgs] as const
}

export function useGetV2PaymentsPaymentIdCapturesCaptureId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']
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
        ? getGetV2PaymentsPaymentIdCapturesCaptureIdKey(args)
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
                (typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']
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
          client.v2.payments[':paymentId'].captures[':captureId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentsPaymentIdCapturesCaptureId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']
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
        ? getGetV2PaymentsPaymentIdCapturesCaptureIdKey(args)
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
                (typeof client.v2.payments)[':paymentId']['captures'][':captureId']['$get']
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
          client.v2.payments[':paymentId'].captures[':captureId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2WalletsApplepaySessionsKey() {
  return ['v2', '/v2/wallets/applepay/sessions', 'POST'] as const
}

export function usePostV2WalletsApplepaySessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.applepay.sessions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.wallets.applepay.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WalletsApplepaySessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.wallets.applepay.sessions.$post> },
      ) => parseResponse(client.v2.wallets.applepay.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentLinksKey(
  args: InferRequestType<(typeof client.v2)['payment-links']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payment-links', keyArgs] as const
}

export function useGetV2PaymentLinks<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['payment-links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-links']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PaymentLinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-links']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['payment-links'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentLinks<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['payment-links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-links']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PaymentLinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-links']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['payment-links'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2PaymentLinksKey() {
  return ['v2', '/v2/payment-links', 'POST'] as const
}

export function usePostV2PaymentLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['payment-links']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['payment-links']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['payment-links']['$post']> },
      ) => parseResponse(client.v2['payment-links'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentLinksPaymentLinkIdKey(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payment-links/:paymentLinkId', keyArgs] as const
}

export function useGetV2PaymentLinksPaymentLinkId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PaymentLinksPaymentLinkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['payment-links'][':paymentLinkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentLinksPaymentLinkId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PaymentLinksPaymentLinkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['payment-links'][':paymentLinkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2PaymentLinksPaymentLinkIdKey() {
  return ['v2', '/v2/payment-links/:paymentLinkId', 'DELETE'] as const
}

export function useDeleteV2PaymentLinksPaymentLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2PaymentLinksPaymentLinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$delete']>
        },
      ) => parseResponse(client.v2['payment-links'][':paymentLinkId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2PaymentLinksPaymentLinkIdKey() {
  return ['v2', '/v2/payment-links/:paymentLinkId', 'PATCH'] as const
}

export function usePatchV2PaymentLinksPaymentLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2PaymentLinksPaymentLinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['$patch']>
        },
      ) => parseResponse(client.v2['payment-links'][':paymentLinkId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentLinksPaymentLinkIdPaymentsKey(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payment-links/:paymentLinkId/payments', keyArgs] as const
}

export function useGetV2PaymentLinksPaymentLinkIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']>
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
        ? getGetV2PaymentLinksPaymentLinkIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-links'][':paymentLinkId'].payments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentLinksPaymentLinkIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']>
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
        ? getGetV2PaymentLinksPaymentLinkIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2)['payment-links'][':paymentLinkId']['payments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2['payment-links'][':paymentLinkId'].payments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2TerminalsKey(args: InferRequestType<typeof client.v2.terminals.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/terminals', keyArgs] as const
}

export function useGetV2Terminals<TError = unknown>(
  args: InferRequestType<typeof client.v2.terminals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TerminalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.terminals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Terminals<TError = unknown>(
  args: InferRequestType<typeof client.v2.terminals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TerminalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.terminals.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.terminals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2TerminalsTerminalIdKey(
  args: InferRequestType<(typeof client.v2.terminals)[':terminalId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/terminals/:terminalId', keyArgs] as const
}

export function useGetV2TerminalsTerminalId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.terminals)[':terminalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.terminals)[':terminalId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TerminalsTerminalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.terminals)[':terminalId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.terminals[':terminalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TerminalsTerminalId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.terminals)[':terminalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.terminals)[':terminalId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TerminalsTerminalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.terminals)[':terminalId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.terminals[':terminalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2TerminalsPairingCodesKey(
  args: InferRequestType<(typeof client.v2.terminals)['pairing-codes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/terminals/pairing-codes', keyArgs] as const
}

export function useGetV2TerminalsPairingCodes<TError = unknown>(
  args: InferRequestType<(typeof client.v2.terminals)['pairing-codes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.terminals)['pairing-codes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TerminalsPairingCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.terminals)['pairing-codes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.terminals['pairing-codes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TerminalsPairingCodes<TError = unknown>(
  args: InferRequestType<(typeof client.v2.terminals)['pairing-codes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.terminals)['pairing-codes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TerminalsPairingCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.terminals)['pairing-codes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.terminals['pairing-codes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2TerminalsPairingCodesKey() {
  return ['v2', '/v2/terminals/pairing-codes', 'POST'] as const
}

export function usePostV2TerminalsPairingCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.terminals)['pairing-codes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.terminals)['pairing-codes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TerminalsPairingCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.terminals)['pairing-codes']['$post']> },
      ) => parseResponse(client.v2.terminals['pairing-codes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TerminalsPairingCodesPairingCodeIdKey(
  args: InferRequestType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/terminals/pairing-codes/:pairingCodeId', keyArgs] as const
}

export function useGetV2TerminalsPairingCodesPairingCodeId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>
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
        ? getGetV2TerminalsPairingCodesPairingCodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.terminals['pairing-codes'][':pairingCodeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TerminalsPairingCodesPairingCodeId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>
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
        ? getGetV2TerminalsPairingCodesPairingCodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.terminals['pairing-codes'][':pairingCodeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2TerminalsPairingCodesPairingCodeIdKey() {
  return ['v2', '/v2/terminals/pairing-codes/:pairingCodeId', 'DELETE'] as const
}

export function useDeleteV2TerminalsPairingCodesPairingCodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2TerminalsPairingCodesPairingCodeIdKey()
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
            (typeof client.v2.terminals)['pairing-codes'][':pairingCodeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.terminals['pairing-codes'][':pairingCodeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentsPaymentIdRoutesKey(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId/routes', keyArgs] as const
}

export function useGetV2PaymentsPaymentIdRoutes<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PaymentsPaymentIdRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payments[':paymentId'].routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentsPaymentIdRoutes<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PaymentsPaymentIdRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['routes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payments[':paymentId'].routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2PaymentsPaymentIdRoutesKey() {
  return ['v2', '/v2/payments/:paymentId/routes', 'POST'] as const
}

export function usePostV2PaymentsPaymentIdRoutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payments)[':paymentId']['routes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.payments)[':paymentId']['routes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PaymentsPaymentIdRoutesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes']['$post']> },
      ) => parseResponse(client.v2.payments[':paymentId'].routes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PaymentsPaymentIdRoutesRouteIdKey(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payments/:paymentId/routes/:routeId', keyArgs] as const
}

export function useGetV2PaymentsPaymentIdRoutesRouteId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>
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
        ? getGetV2PaymentsPaymentIdRoutesRouteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.payments[':paymentId'].routes[':routeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PaymentsPaymentIdRoutesRouteId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>
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
        ? getGetV2PaymentsPaymentIdRoutesRouteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.payments)[':paymentId']['routes'][':routeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.payments[':paymentId'].routes[':routeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersKey(args: InferRequestType<typeof client.v2.customers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers', keyArgs] as const
}

export function useGetV2Customers<TError = unknown>(
  args: InferRequestType<typeof client.v2.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Customers<TError = unknown>(
  args: InferRequestType<typeof client.v2.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CustomersKey() {
  return ['v2', '/v2/customers', 'POST'] as const
}

export function usePostV2Customers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.customers.$post> }) =>
        parseResponse(client.v2.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdKey(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId', keyArgs] as const
}

export function useGetV2CustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers[':customerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customers[':customerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2CustomersCustomerIdKey() {
  return ['v2', '/v2/customers/:customerId', 'DELETE'] as const
}

export function useDeleteV2CustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.customers)[':customerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.customers)[':customerId']['$delete']> },
      ) => parseResponse(client.v2.customers[':customerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2CustomersCustomerIdKey() {
  return ['v2', '/v2/customers/:customerId', 'PATCH'] as const
}

export function usePatchV2CustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.customers)[':customerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2CustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.customers)[':customerId']['$patch']> },
      ) => parseResponse(client.v2.customers[':customerId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdPaymentsKey(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['payments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId/payments', keyArgs] as const
}

export function useGetV2CustomersCustomerIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['payments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomersCustomerIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customers[':customerId'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['payments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomersCustomerIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customers[':customerId'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CustomersCustomerIdPaymentsKey() {
  return ['v2', '/v2/customers/:customerId/payments', 'POST'] as const
}

export function usePostV2CustomersCustomerIdPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['payments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.customers)[':customerId']['payments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomersCustomerIdPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.customers)[':customerId']['payments']['$post']>
        },
      ) => parseResponse(client.v2.customers[':customerId'].payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdMandatesKey(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId/mandates', keyArgs] as const
}

export function useGetV2CustomersCustomerIdMandates<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomersCustomerIdMandatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customers[':customerId'].mandates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdMandates<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2CustomersCustomerIdMandatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['mandates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customers[':customerId'].mandates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CustomersCustomerIdMandatesKey() {
  return ['v2', '/v2/customers/:customerId/mandates', 'POST'] as const
}

export function usePostV2CustomersCustomerIdMandates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['mandates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.customers)[':customerId']['mandates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomersCustomerIdMandatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.customers)[':customerId']['mandates']['$post']>
        },
      ) => parseResponse(client.v2.customers[':customerId'].mandates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdMandatesMandateIdKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId/mandates/:mandateId', keyArgs] as const
}

export function useGetV2CustomersCustomerIdMandatesMandateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']
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
        ? getGetV2CustomersCustomerIdMandatesMandateIdKey(args)
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
                (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']
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
          client.v2.customers[':customerId'].mandates[':mandateId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdMandatesMandateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']
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
        ? getGetV2CustomersCustomerIdMandatesMandateIdKey(args)
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
                (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$get']
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
          client.v2.customers[':customerId'].mandates[':mandateId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2CustomersCustomerIdMandatesMandateIdKey() {
  return ['v2', '/v2/customers/:customerId/mandates/:mandateId', 'DELETE'] as const
}

export function useDeleteV2CustomersCustomerIdMandatesMandateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CustomersCustomerIdMandatesMandateIdKey()
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
            (typeof client.v2.customers)[':customerId']['mandates'][':mandateId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.customers[':customerId'].mandates[':mandateId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdSubscriptionsKey(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId/subscriptions', keyArgs] as const
}

export function useGetV2CustomersCustomerIdSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>
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
        ? getGetV2CustomersCustomerIdSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customers[':customerId'].subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>
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
        ? getGetV2CustomersCustomerIdSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.customers)[':customerId']['subscriptions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.customers[':customerId'].subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CustomersCustomerIdSubscriptionsKey() {
  return ['v2', '/v2/customers/:customerId/subscriptions', 'POST'] as const
}

export function usePostV2CustomersCustomerIdSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers)[':customerId']['subscriptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.customers)[':customerId']['subscriptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomersCustomerIdSubscriptionsKey()
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
            (typeof client.v2.customers)[':customerId']['subscriptions']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.customers[':customerId'].subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdSubscriptionsSubscriptionIdKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/customers/:customerId/subscriptions/:subscriptionId', keyArgs] as const
}

export function useGetV2CustomersCustomerIdSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
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
        ? getGetV2CustomersCustomerIdSubscriptionsSubscriptionIdKey(args)
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
                (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
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
          client.v2.customers[':customerId'].subscriptions[':subscriptionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
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
        ? getGetV2CustomersCustomerIdSubscriptionsSubscriptionIdKey(args)
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
                (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
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
          client.v2.customers[':customerId'].subscriptions[':subscriptionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2CustomersCustomerIdSubscriptionsSubscriptionIdKey() {
  return ['v2', '/v2/customers/:customerId/subscriptions/:subscriptionId', 'DELETE'] as const
}

export function useDeleteV2CustomersCustomerIdSubscriptionsSubscriptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2CustomersCustomerIdSubscriptionsSubscriptionIdKey()
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
            (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.customers[':customerId'].subscriptions[':subscriptionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2CustomersCustomerIdSubscriptionsSubscriptionIdKey() {
  return ['v2', '/v2/customers/:customerId/subscriptions/:subscriptionId', 'PATCH'] as const
}

export function usePatchV2CustomersCustomerIdSubscriptionsSubscriptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2CustomersCustomerIdSubscriptionsSubscriptionIdKey()
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
            (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.customers[':customerId'].subscriptions[':subscriptionId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2SubscriptionsKey(
  args: InferRequestType<typeof client.v2.subscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/subscriptions', keyArgs] as const
}

export function useGetV2Subscriptions<TError = unknown>(
  args: InferRequestType<typeof client.v2.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscriptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Subscriptions<TError = unknown>(
  args: InferRequestType<typeof client.v2.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscriptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsKey(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v2',
    '/v2/customers/:customerId/subscriptions/:subscriptionId/payments',
    keyArgs,
  ] as const
}

export function useGetV2CustomersCustomerIdSubscriptionsSubscriptionIdPayments<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
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
        ? getGetV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsKey(args)
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
                (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
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
          client.v2.customers[':customerId'].subscriptions[':subscriptionId'].payments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomersCustomerIdSubscriptionsSubscriptionIdPayments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
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
        ? getGetV2CustomersCustomerIdSubscriptionsSubscriptionIdPaymentsKey(args)
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
                (typeof client.v2.customers)[':customerId']['subscriptions'][':subscriptionId']['payments']['$get']
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
          client.v2.customers[':customerId'].subscriptions[':subscriptionId'].payments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2SalesInvoicesKey(
  args: InferRequestType<(typeof client.v2)['sales-invoices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/sales-invoices', keyArgs] as const
}

export function useGetV2SalesInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['sales-invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['sales-invoices']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SalesInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['sales-invoices']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['sales-invoices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SalesInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['sales-invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['sales-invoices']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SalesInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['sales-invoices']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['sales-invoices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2SalesInvoicesKey() {
  return ['v2', '/v2/sales-invoices', 'POST'] as const
}

export function usePostV2SalesInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['sales-invoices']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['sales-invoices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SalesInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2)['sales-invoices']['$post']> },
      ) => parseResponse(client.v2['sales-invoices'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SalesInvoicesSalesInvoiceIdKey(
  args: InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/sales-invoices/:salesInvoiceId', keyArgs] as const
}

export function useGetV2SalesInvoicesSalesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SalesInvoicesSalesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['sales-invoices'][':salesInvoiceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SalesInvoicesSalesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SalesInvoicesSalesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['sales-invoices'][':salesInvoiceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2SalesInvoicesSalesInvoiceIdKey() {
  return ['v2', '/v2/sales-invoices/:salesInvoiceId', 'DELETE'] as const
}

export function useDeleteV2SalesInvoicesSalesInvoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2SalesInvoicesSalesInvoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$delete']>
        },
      ) =>
        parseResponse(client.v2['sales-invoices'][':salesInvoiceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2SalesInvoicesSalesInvoiceIdKey() {
  return ['v2', '/v2/sales-invoices/:salesInvoiceId', 'PATCH'] as const
}

export function usePatchV2SalesInvoicesSalesInvoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2SalesInvoicesSalesInvoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2)['sales-invoices'][':salesInvoiceId']['$patch']>
        },
      ) => parseResponse(client.v2['sales-invoices'][':salesInvoiceId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BusinessAccountsAccountsKey(
  args: InferRequestType<(typeof client.v2)['business-accounts']['accounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/business-accounts/accounts', keyArgs] as const
}

export function useGetV2BusinessAccountsAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['business-accounts']['accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['business-accounts']['accounts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BusinessAccountsAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['business-accounts']['accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['business-accounts'].accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BusinessAccountsAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['business-accounts']['accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['business-accounts']['accounts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BusinessAccountsAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['business-accounts']['accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['business-accounts'].accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BusinessAccountsAccountsKey() {
  return ['v2', '/v2/business-accounts/accounts', 'POST'] as const
}

export function usePostV2BusinessAccountsAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['business-accounts']['accounts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['business-accounts']['accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BusinessAccountsAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['business-accounts']['accounts']['$post']> },
      ) => parseResponse(client.v2['business-accounts'].accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BusinessAccountsAccountsBusinessAccountIdKey(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/business-accounts/accounts/:businessAccountId', keyArgs] as const
}

export function useGetV2BusinessAccountsAccountsBusinessAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
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
        ? getGetV2BusinessAccountsAccountsBusinessAccountIdKey(args)
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
                (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
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
          client.v2['business-accounts'].accounts[':businessAccountId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BusinessAccountsAccountsBusinessAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
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
        ? getGetV2BusinessAccountsAccountsBusinessAccountIdKey(args)
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
                (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['$get']
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
          client.v2['business-accounts'].accounts[':businessAccountId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2BusinessAccountsAccountsBusinessAccountIdTransactionsKey(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/business-accounts/accounts/:businessAccountId/transactions', keyArgs] as const
}

export function useGetV2BusinessAccountsAccountsBusinessAccountIdTransactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
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
        ? getGetV2BusinessAccountsAccountsBusinessAccountIdTransactionsKey(args)
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
                (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
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
          client.v2['business-accounts'].accounts[':businessAccountId'].transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BusinessAccountsAccountsBusinessAccountIdTransactions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
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
        ? getGetV2BusinessAccountsAccountsBusinessAccountIdTransactionsKey(args)
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
                (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions']['$get']
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
          client.v2['business-accounts'].accounts[':businessAccountId'].transactions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdKey(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v2',
    '/v2/business-accounts/accounts/:businessAccountId/transactions/:transactionId',
    keyArgs,
  ] as const
}

export function useGetV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
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
        ? getGetV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdKey(args)
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
                (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
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
          client.v2['business-accounts'].accounts[':businessAccountId'].transactions[
            ':transactionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
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
        ? getGetV2BusinessAccountsAccountsBusinessAccountIdTransactionsTransactionIdKey(args)
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
                (typeof client.v2)['business-accounts']['accounts'][':businessAccountId']['transactions'][':transactionId']['$get']
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
          client.v2['business-accounts'].accounts[':businessAccountId'].transactions[
            ':transactionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2BusinessAccountsTransfersKey() {
  return ['v2', '/v2/business-accounts/transfers', 'POST'] as const
}

export function usePostV2BusinessAccountsTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['business-accounts']['transfers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['business-accounts']['transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BusinessAccountsTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2)['business-accounts']['transfers']['$post']> },
      ) => parseResponse(client.v2['business-accounts'].transfers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BusinessAccountsTransfersBusinessAccountsTransferIdKey(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/business-accounts/transfers/:businessAccountsTransferId', keyArgs] as const
}

export function useGetV2BusinessAccountsTransfersBusinessAccountsTransferId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
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
        ? getGetV2BusinessAccountsTransfersBusinessAccountsTransferIdKey(args)
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
                (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
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
          client.v2['business-accounts'].transfers[':businessAccountsTransferId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BusinessAccountsTransfersBusinessAccountsTransferId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
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
        ? getGetV2BusinessAccountsTransfersBusinessAccountsTransferIdKey(args)
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
                (typeof client.v2)['business-accounts']['transfers'][':businessAccountsTransferId']['$get']
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
          client.v2['business-accounts'].transfers[':businessAccountsTransferId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2BusinessAccountsPayeeVerificationsKey() {
  return ['v2', '/v2/business-accounts/payee-verifications', 'POST'] as const
}

export function usePostV2BusinessAccountsPayeeVerifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2)['business-accounts']['payee-verifications']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['business-accounts']['payee-verifications']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BusinessAccountsPayeeVerificationsKey()
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
            (typeof client.v2)['business-accounts']['payee-verifications']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2['business-accounts']['payee-verifications'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2BusinessAccountsDraftTransfersKey(
  args: InferRequestType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/business-accounts/draft-transfers', keyArgs] as const
}

export function useGetV2BusinessAccountsDraftTransfers<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BusinessAccountsDraftTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['business-accounts']['draft-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BusinessAccountsDraftTransfers<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2BusinessAccountsDraftTransfersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['business-accounts']['draft-transfers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2['business-accounts']['draft-transfers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2BusinessAccountsDraftTransfersKey() {
  return ['v2', '/v2/business-accounts/draft-transfers', 'POST'] as const
}

export function usePostV2BusinessAccountsDraftTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['business-accounts']['draft-transfers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2)['business-accounts']['draft-transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BusinessAccountsDraftTransfersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2)['business-accounts']['draft-transfers']['$post']>
        },
      ) =>
        parseResponse(client.v2['business-accounts']['draft-transfers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2BusinessAccountsDraftTransfersDraftTransferIdKey(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/business-accounts/draft-transfers/:draftTransferId', keyArgs] as const
}

export function useGetV2BusinessAccountsDraftTransfersDraftTransferId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
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
        ? getGetV2BusinessAccountsDraftTransfersDraftTransferIdKey(args)
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
                (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
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
          client.v2['business-accounts']['draft-transfers'][':draftTransferId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2BusinessAccountsDraftTransfersDraftTransferId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
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
        ? getGetV2BusinessAccountsDraftTransfersDraftTransferIdKey(args)
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
                (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$get']
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
          client.v2['business-accounts']['draft-transfers'][':draftTransferId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2BusinessAccountsDraftTransfersDraftTransferIdKey() {
  return ['v2', '/v2/business-accounts/draft-transfers/:draftTransferId', 'DELETE'] as const
}

export function useDeleteV2BusinessAccountsDraftTransfersDraftTransferId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2BusinessAccountsDraftTransfersDraftTransferIdKey()
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
            (typeof client.v2)['business-accounts']['draft-transfers'][':draftTransferId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2['business-accounts']['draft-transfers'][':draftTransferId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2PayoutsKey(args: InferRequestType<typeof client.v2.payouts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payouts', keyArgs] as const
}

export function useGetV2Payouts<TError = unknown>(
  args: InferRequestType<typeof client.v2.payouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payouts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PayoutsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payouts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Payouts<TError = unknown>(
  args: InferRequestType<typeof client.v2.payouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payouts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PayoutsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payouts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2PayoutsKey() {
  return ['v2', '/v2/payouts', 'POST'] as const
}

export function usePostV2Payouts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.payouts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.payouts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PayoutsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.payouts.$post> }) =>
        parseResponse(client.v2.payouts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2PayoutsPayoutIdKey(
  args: InferRequestType<(typeof client.v2.payouts)[':payoutId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/payouts/:payoutId', keyArgs] as const
}

export function useGetV2PayoutsPayoutId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payouts)[':payoutId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payouts)[':payoutId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PayoutsPayoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payouts)[':payoutId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payouts[':payoutId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PayoutsPayoutId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payouts)[':payoutId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payouts)[':payoutId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2PayoutsPayoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payouts)[':payoutId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payouts[':payoutId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2PayoutsPayoutIdKey() {
  return ['v2', '/v2/payouts/:payoutId', 'DELETE'] as const
}

export function useDeleteV2PayoutsPayoutId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.payouts)[':payoutId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.payouts)[':payoutId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2PayoutsPayoutIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.payouts)[':payoutId']['$delete']> },
      ) => parseResponse(client.v2.payouts[':payoutId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
