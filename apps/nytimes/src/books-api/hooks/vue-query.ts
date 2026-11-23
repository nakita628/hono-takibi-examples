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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['lists.{format}']['$get']>>,
) {
  return ['lists.{format}', '/lists.{format}', toValue(args)] as const
}

export function getListsFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['lists.{format}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['lists.{format}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsFormat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['lists.{format}']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['lists.{format}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['lists.{format}']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['lists.{format}']['$get']>>>
            >
          >,
          ReturnType<typeof getListsFormatQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['lists.{format}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['lists.{format}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListsBestSellersHistoryJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lists)['best-sellers']['history.json']['$get']>
  >,
) {
  return ['lists', '/lists/best-sellers/history.json', toValue(args)] as const
}

export function getListsBestSellersHistoryJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lists)['best-sellers']['history.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsBestSellersHistoryJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists['best-sellers']['history.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsBestSellersHistoryJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)['best-sellers']['history.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lists)['best-sellers']['history.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)['best-sellers']['history.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)['best-sellers']['history.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListsBestSellersHistoryJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.lists)['best-sellers']['history.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsBestSellersHistoryJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsBestSellersHistoryJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists['best-sellers']['history.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListsNamesFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)['names.{format}']['$get']>>,
) {
  return ['lists', '/lists/names.{format}', toValue(args)] as const
}

export function getListsNamesFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)['names.{format}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsNamesFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists['names.{format}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsNamesFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)['names.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)['names.{format}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)['names.{format}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)['names.{format}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListsNamesFormatQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)['names.{format}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsNamesFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsNamesFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists['names.{format}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListsOverviewFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)['overview.{format}']['$get']>>,
) {
  return ['lists', '/lists/overview.{format}', toValue(args)] as const
}

export function getListsOverviewFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)['overview.{format}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsOverviewFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists['overview.{format}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsOverviewFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lists)['overview.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)['overview.{format}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)['overview.{format}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)['overview.{format}']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListsOverviewFormatQueryKey>
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
          Awaited<ReturnType<(typeof client.lists)['overview.{format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsOverviewFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsOverviewFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists['overview.{format}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListsDateListJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':date'][':list.json']['$get']>>,
) {
  return ['lists', '/lists/:date/:list.json', toValue(args)] as const
}

export function getListsDateListJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':date'][':list.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsDateListJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':date'][':list.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListsDateListJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lists)[':date'][':list.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':date'][':list.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':date'][':list.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lists)[':date'][':list.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getListsDateListJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.lists)[':date'][':list.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsDateListJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsDateListJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':date'][':list.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReviewsFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reviews.{format}']['$get']>>,
) {
  return ['reviews.{format}', '/reviews.{format}', toValue(args)] as const
}

export function getReviewsFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reviews.{format}']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewsFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['reviews.{format}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReviewsFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['reviews.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['reviews.{format}']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['reviews.{format}']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['reviews.{format}']['$get']>>>
            >
          >,
          ReturnType<typeof getReviewsFormatQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reviews.{format}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewsFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewsFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['reviews.{format}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
