import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSearchKey() {
  return ['search'] as const
}

export function getSearchV1FieldsQueryKey(
  args: InferRequestType<typeof client.search.v1.fields.$get>,
) {
  return ['search', '/search/v1/fields', args] as const
}

export function getSearchV1FieldsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.v1.fields.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchV1FieldsQueryKey>
  >({
    queryKey: getSearchV1FieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.v1.fields.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearchV1Fields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.v1.fields.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchV1FieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchV1FieldsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSearchV1OrganicQueryKey(
  args: InferRequestType<typeof client.search.v1.organic.$get>,
) {
  return ['search', '/search/v1/organic', args] as const
}

export function getSearchV1OrganicQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.v1.organic.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchV1OrganicQueryKey>
  >({
    queryKey: getSearchV1OrganicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.v1.organic.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearchV1Organic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.v1.organic.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchV1OrganicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchV1OrganicQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSearchV1ScrapeQueryKey(
  args: InferRequestType<typeof client.search.v1.scrape.$get>,
) {
  return ['search', '/search/v1/scrape', args] as const
}

export function getSearchV1ScrapeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.v1.scrape.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchV1ScrapeQueryKey>
  >({
    queryKey: getSearchV1ScrapeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.v1.scrape.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearchV1Scrape<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.v1.scrape.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchV1ScrapeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchV1ScrapeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
