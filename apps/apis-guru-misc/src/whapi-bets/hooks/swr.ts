import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBetKey() {
  return ['bet'] as const
}

export function getBetslipsKey() {
  return ['betslips'] as const
}

export function getFreebetsKey() {
  return ['freebets'] as const
}

export function getHistoryKey() {
  return ['history'] as const
}

export function getBetIdKey() {
  return ['{betId}'] as const
}

export function getPostBetComplexKey() {
  return ['bet', '/bet/complex', 'POST'] as const
}

export function usePostBetComplex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bet.complex.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.bet.complex.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetComplexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bet.complex.$post> }) =>
        parseResponse(client.bet.complex.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBetSingleKey() {
  return ['bet', '/bet/single', 'POST'] as const
}

export function usePostBetSingle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bet.single.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.bet.single.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetSingleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bet.single.$post> }) =>
        parseResponse(client.bet.single.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBetslipsKey() {
  return ['betslips', '/betslips', 'POST'] as const
}

export function usePostBetslips<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.betslips.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.betslips.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBetslipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.betslips.$post> }) =>
        parseResponse(client.betslips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFreebetsKey(args: InferRequestType<typeof client.freebets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['freebets', '/freebets', keyArgs] as const
}

export function useGetFreebets<TError = unknown>(
  args: InferRequestType<typeof client.freebets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.freebets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFreebetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.freebets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.freebets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFreebets<TError = unknown>(
  args: InferRequestType<typeof client.freebets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.freebets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFreebetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.freebets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.freebets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetHistoryKey(args: InferRequestType<typeof client.history.$get>) {
  const { header: _, ...keyArgs } = args
  return ['history', '/history', keyArgs] as const
}

export function useGetHistory<TError = unknown>(
  args: InferRequestType<typeof client.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.history.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetHistory<TError = unknown>(
  args: InferRequestType<typeof client.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.history.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutBetIdCashinKey() {
  return [':betId', '/:betId/cashin', 'PUT'] as const
}

export function usePutBetIdCashin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':betId']['cashin']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':betId']['cashin']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBetIdCashinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':betId']['cashin']['$put']> },
      ) => parseResponse(client[':betId'].cashin.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
