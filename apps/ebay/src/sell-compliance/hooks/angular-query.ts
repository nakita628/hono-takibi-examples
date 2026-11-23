import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectListingViolation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listing_violation.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListingViolationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectListingViolationSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation_summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listing_violation_summary.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getListingViolationSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostSuppressListingViolation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSuppressListingViolationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
