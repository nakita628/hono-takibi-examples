import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getPostBetComplexMutationKey() {
  return ['bet', '/bet/complex', 'POST'] as const
}

export function getPostBetComplexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bet.complex.$post>>>>>,
    TError,
    InferRequestType<typeof client.bet.complex.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetComplexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bet.complex.$post>) {
      return parseResponse(client.bet.complex.$post(args, options))
    },
  })
}

export function createPostBetComplex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bet.complex.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.bet.complex.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBetComplexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBetSingleMutationKey() {
  return ['bet', '/bet/single', 'POST'] as const
}

export function getPostBetSingleMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bet.single.$post>>>>>,
    TError,
    InferRequestType<typeof client.bet.single.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetSingleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bet.single.$post>) {
      return parseResponse(client.bet.single.$post(args, options))
    },
  })
}

export function createPostBetSingle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bet.single.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.bet.single.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBetSingleMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBetslipsMutationKey() {
  return ['betslips', '/betslips', 'POST'] as const
}

export function getPostBetslipsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.betslips.$post>>>>>,
    TError,
    InferRequestType<typeof client.betslips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBetslipsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.betslips.$post>) {
      return parseResponse(client.betslips.$post(args, options))
    },
  })
}

export function createPostBetslips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.betslips.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.betslips.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBetslipsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFreebetsQueryKey(args: InferRequestType<typeof client.freebets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['freebets', '/freebets', keyArgs] as const
}

export function getFreebetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.freebets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.freebets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.freebets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFreebetsQueryKey>
  >({
    queryKey: getFreebetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.freebets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFreebets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.freebets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.freebets.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.freebets.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getFreebetsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFreebetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHistoryQueryKey(args: InferRequestType<typeof client.history.$get>) {
  const { header: _, ...keyArgs } = args
  return ['history', '/history', keyArgs] as const
}

export function getHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.history.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHistoryQueryKey>
  >({
    queryKey: getHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.history.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.history.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getHistoryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBetIdCashinMutationKey() {
  return [':betId', '/:betId/cashin', 'PUT'] as const
}

export function getPutBetIdCashinMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':betId']['cashin']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':betId']['cashin']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBetIdCashinMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':betId']['cashin']['$put']>) {
      return parseResponse(client[':betId'].cashin.$put(args, options))
    },
  })
}

export function createPutBetIdCashin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':betId']['cashin']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)[':betId']['cashin']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutBetIdCashinMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
