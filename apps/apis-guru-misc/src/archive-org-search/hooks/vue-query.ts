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

export function getSearchKey() {
  return ['search'] as const
}

export function getSearchV1FieldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.v1.fields.$get>>,
) {
  return ['search', '/search/v1/fields', toValue(args)] as const
}

export function getSearchV1FieldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.v1.fields.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchV1FieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.v1.fields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchV1Fields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.v1.fields.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>
            >
          >,
          ReturnType<typeof getSearchV1FieldsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchV1FieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchV1FieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.v1.fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchV1OrganicQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.v1.organic.$get>>,
) {
  return ['search', '/search/v1/organic', toValue(args)] as const
}

export function getSearchV1OrganicQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.v1.organic.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchV1OrganicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.v1.organic.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchV1Organic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.v1.organic.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>
            >
          >,
          ReturnType<typeof getSearchV1OrganicQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchV1OrganicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchV1OrganicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.v1.organic.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchV1ScrapeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.v1.scrape.$get>>,
) {
  return ['search', '/search/v1/scrape', toValue(args)] as const
}

export function getSearchV1ScrapeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.v1.scrape.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchV1ScrapeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.v1.scrape.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchV1Scrape<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.v1.scrape.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>
            >
          >,
          ReturnType<typeof getSearchV1ScrapeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchV1ScrapeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchV1ScrapeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.v1.scrape.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
