import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountVerificationKey() {
  return ['accountVerification'] as const
}

export function getAccountVerificationReportsCodeQueryKey(
  args: InferRequestType<(typeof client.accountVerification.reports)[':code']['$get']>,
) {
  return ['accountVerification', '/accountVerification/reports/:code', args] as const
}

export function getAccountVerificationReportsCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountVerification.reports)[':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accountVerification.reports)[':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accountVerification.reports)[':code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountVerificationReportsCodeQueryKey>
  >({
    queryKey: getAccountVerificationReportsCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accountVerification.reports[':code'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountVerificationReportsCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountVerification.reports)[':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accountVerification.reports)[':code']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accountVerification.reports)[':code']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountVerificationReportsCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAccountVerificationReportsCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountVerificationReportsCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accountVerification.reports)[':code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accountVerification.reports)[':code']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accountVerification.reports)[':code']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountVerificationReportsCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAccountVerificationReportsCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAccountVerificationRoutesMutationKey() {
  return ['accountVerification', '/accountVerification/routes', 'POST'] as const
}

export function getPostAccountVerificationRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.accountVerification.routes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.accountVerification.routes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountVerificationRoutesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accountVerification.routes.$post>) {
      return parseResponse(client.accountVerification.routes.$post(args, options))
    },
  })
}

export function usePostAccountVerificationRoutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.accountVerification.routes.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.accountVerification.routes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountVerificationRoutesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
