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

export function getCustomsearchKey() {
  return ['customsearch'] as const
}

export function getCustomsearchV1QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customsearch.v1.$get>>,
) {
  return ['customsearch', '/customsearch/v1', toValue(args)] as const
}

export function getCustomsearchV1QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customsearch.v1.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomsearchV1QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customsearch.v1.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomsearchV1<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customsearch.v1.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.$get>>>
            >
          >,
          ReturnType<typeof getCustomsearchV1QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCustomsearchV1QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomsearchV1QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customsearch.v1.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomsearchV1SiterestrictQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customsearch.v1.siterestrict.$get>>,
) {
  return ['customsearch', '/customsearch/v1/siterestrict', toValue(args)] as const
}

export function getCustomsearchV1SiterestrictQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customsearch.v1.siterestrict.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomsearchV1SiterestrictQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customsearch.v1.siterestrict.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomsearchV1Siterestrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.siterestrict.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customsearch.v1.siterestrict.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.customsearch.v1.siterestrict.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.customsearch.v1.siterestrict.$get>>
              >
            >
          >,
          ReturnType<typeof getCustomsearchV1SiterestrictQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.siterestrict.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomsearchV1SiterestrictQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomsearchV1SiterestrictQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customsearch.v1.siterestrict.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
