import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getListingViolationKey() {
  return ['listing_violation'] as const
}

export function getListingViolationSummaryKey() {
  return ['listing_violation_summary'] as const
}

export function getSuppressListingViolationKey() {
  return ['suppress_listing_violation'] as const
}

export function getListingViolationQueryKey(
  args: InferRequestType<typeof client.listing_violation.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['listing_violation', '/listing_violation', keyArgs] as const
}

export function getListingViolationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.listing_violation.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListingViolationQueryKey>
  >({
    queryKey: getListingViolationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing_violation.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListingViolation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listing_violation.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListingViolationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListingViolationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListingViolation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listing_violation.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListingViolationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListingViolationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListingViolationSummaryQueryKey(
  args: InferRequestType<typeof client.listing_violation_summary.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['listing_violation_summary', '/listing_violation_summary', keyArgs] as const
}

export function getListingViolationSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation_summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listing_violation_summary.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation_summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingViolationSummaryQueryKey>
  >({
    queryKey: getListingViolationSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listing_violation_summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useListingViolationSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation_summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listing_violation_summary.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation_summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListingViolationSummaryQueryKey>
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
      ...getListingViolationSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseListingViolationSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation_summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listing_violation_summary.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation_summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListingViolationSummaryQueryKey>
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
      ...getListingViolationSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSuppressListingViolationMutationKey() {
  return ['suppress_listing_violation', '/suppress_listing_violation', 'POST'] as const
}

export function getPostSuppressListingViolationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.suppress_listing_violation.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.suppress_listing_violation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSuppressListingViolationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.suppress_listing_violation.$post>) {
      return parseResponse(client.suppress_listing_violation.$post(args, options))
    },
  })
}

export function usePostSuppressListingViolation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.suppress_listing_violation.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.suppress_listing_violation.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSuppressListingViolationMutationOptions<TError, TOnMutateResult>(
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
