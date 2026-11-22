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

export function getCmsKey() {
  return ['cms'] as const
}

export function getCmsSiteSearch202609IndexedDataContentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
    >
  >,
) {
  return ['cms', '/cms/site-search/2026-09/indexed-data/:contentId', toValue(args)] as const
}

export function getCmsSiteSearch202609IndexedDataContentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsSiteSearch202609IndexedDataContentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms['site-search']['2026-09']['indexed-data'][':contentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsSiteSearch202609IndexedDataContentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsSiteSearch202609IndexedDataContentIdQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsSiteSearch202609IndexedDataContentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsSiteSearch202609IndexedDataContentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms['site-search']['2026-09']['indexed-data'][':contentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCmsSiteSearch202609SearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>
  >,
) {
  return ['cms', '/cms/site-search/2026-09/search', toValue(args)] as const
}

export function getCmsSiteSearch202609SearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsSiteSearch202609SearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms['site-search']['2026-09'].search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsSiteSearch202609Search<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCmsSiteSearch202609SearchQueryKey>
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
          Awaited<ReturnType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsSiteSearch202609SearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsSiteSearch202609SearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms['site-search']['2026-09'].search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
