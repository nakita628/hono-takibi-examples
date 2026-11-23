import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.listing_violation.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['listing_violation', '/listing_violation', keyArgs] as const
}

export function getListingViolationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listing_violation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingViolationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing_violation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingViolation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listing_violation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation.$get>>>
            >
          >,
          ReturnType<typeof getListingViolationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListingViolationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingViolationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing_violation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingViolationSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listing_violation_summary.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['listing_violation_summary', '/listing_violation_summary', keyArgs] as const
}

export function getListingViolationSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listing_violation_summary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingViolationSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listing_violation_summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingViolationSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation_summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listing_violation_summary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.listing_violation_summary.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.listing_violation_summary.$get>>
              >
            >
          >,
          ReturnType<typeof getListingViolationSummaryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listing_violation_summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingViolationSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingViolationSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listing_violation_summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
