import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1AccountReportsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['accountReports:search']['$get']>>,
) {
  return ['v1', '/v1/accountReports:search', toValue(args)] as const
}

export function getV1AccountReportsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['accountReports:search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountReportsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['accountReports:search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountReportsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['accountReports:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['accountReports:search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['accountReports:search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['accountReports:search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccountReportsSearchQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['accountReports:search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountReportsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountReportsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['accountReports:search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DetailedLeadReportsSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['detailedLeadReports:search']['$get']>
  >,
) {
  return ['v1', '/v1/detailedLeadReports:search', toValue(args)] as const
}

export function getV1DetailedLeadReportsSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['detailedLeadReports:search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DetailedLeadReportsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['detailedLeadReports:search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DetailedLeadReportsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['detailedLeadReports:search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['detailedLeadReports:search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['detailedLeadReports:search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['detailedLeadReports:search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DetailedLeadReportsSearchQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['detailedLeadReports:search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DetailedLeadReportsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DetailedLeadReportsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['detailedLeadReports:search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
