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

export function getListsKey() {
  return ['lists'] as const
}

export function getListsFormatKey() {
  return ['lists.{format}'] as const
}

export function getReviewsFormatKey() {
  return ['reviews.{format}'] as const
}

export function getListsFormatQueryKey(
  args: InferRequestType<(typeof client)['lists.{format}']['$get']>,
) {
  return ['lists.{format}', '/lists.{format}', args] as const
}

export function getListsFormatQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['lists.{format}']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['lists.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['lists.{format}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsFormatQueryKey>
  >({
    queryKey: getListsFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['lists.{format}'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectListsFormat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['lists.{format}']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['lists.{format}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['lists.{format}']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsFormatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getListsBestSellersHistoryJsonQueryKey(
  args: InferRequestType<(typeof client.lists)['best-sellers']['history.json']['$get']>,
) {
  return ['lists', '/lists/best-sellers/history.json', args] as const
}

export function getListsBestSellersHistoryJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)['best-sellers']['history.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)['best-sellers']['history.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)['best-sellers']['history.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsBestSellersHistoryJsonQueryKey>
  >({
    queryKey: getListsBestSellersHistoryJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists['best-sellers']['history.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectListsBestSellersHistoryJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)['best-sellers']['history.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)['best-sellers']['history.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)['best-sellers']['history.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsBestSellersHistoryJsonQueryKey>
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
      ...getListsBestSellersHistoryJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getListsNamesFormatQueryKey(
  args: InferRequestType<(typeof client.lists)['names.{format}']['$get']>,
) {
  return ['lists', '/lists/names.{format}', args] as const
}

export function getListsNamesFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)['names.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)['names.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)['names.{format}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsNamesFormatQueryKey>
  >({
    queryKey: getListsNamesFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists['names.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectListsNamesFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)['names.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)['names.{format}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)['names.{format}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsNamesFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsNamesFormatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getListsOverviewFormatQueryKey(
  args: InferRequestType<(typeof client.lists)['overview.{format}']['$get']>,
) {
  return ['lists', '/lists/overview.{format}', args] as const
}

export function getListsOverviewFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)['overview.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)['overview.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)['overview.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsOverviewFormatQueryKey>
  >({
    queryKey: getListsOverviewFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists['overview.{format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectListsOverviewFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)['overview.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)['overview.{format}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)['overview.{format}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsOverviewFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsOverviewFormatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getListsDateListJsonQueryKey(
  args: InferRequestType<(typeof client.lists)[':date'][':list.json']['$get']>,
) {
  return ['lists', '/lists/:date/:list.json', args] as const
}

export function getListsDateListJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':date'][':list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':date'][':list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':date'][':list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsDateListJsonQueryKey>
  >({
    queryKey: getListsDateListJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':date'][':list.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectListsDateListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':date'][':list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':date'][':list.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lists)[':date'][':list.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsDateListJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsDateListJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReviewsFormatQueryKey(
  args: InferRequestType<(typeof client)['reviews.{format}']['$get']>,
) {
  return ['reviews.{format}', '/reviews.{format}', args] as const
}

export function getReviewsFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['reviews.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['reviews.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reviews.{format}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewsFormatQueryKey>
  >({
    queryKey: getReviewsFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['reviews.{format}'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReviewsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['reviews.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['reviews.{format}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['reviews.{format}']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReviewsFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReviewsFormatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
