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

export function getDataKey() {
  return ['data'] as const
}

export function getDataDivisionsGroupedbypartyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.Divisions.groupedbyparty.$get>>,
) {
  return ['data', '/data/Divisions/groupedbyparty', toValue(args)] as const
}

export function getDataDivisionsGroupedbypartyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.Divisions.groupedbyparty.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataDivisionsGroupedbypartyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.Divisions.groupedbyparty.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataDivisionsGroupedbyparty<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.groupedbyparty.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.Divisions.groupedbyparty.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.data.Divisions.groupedbyparty.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.data.Divisions.groupedbyparty.$get>>
              >
            >
          >,
          ReturnType<typeof getDataDivisionsGroupedbypartyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.groupedbyparty.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataDivisionsGroupedbypartyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataDivisionsGroupedbypartyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data.Divisions.groupedbyparty.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataDivisionsMembervotingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.Divisions.membervoting.$get>>,
) {
  return ['data', '/data/Divisions/membervoting', toValue(args)] as const
}

export function getDataDivisionsMembervotingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.Divisions.membervoting.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataDivisionsMembervotingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.Divisions.membervoting.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataDivisionsMembervoting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.membervoting.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.Divisions.membervoting.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.data.Divisions.membervoting.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.data.Divisions.membervoting.$get>>
              >
            >
          >,
          ReturnType<typeof getDataDivisionsMembervotingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.membervoting.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataDivisionsMembervotingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataDivisionsMembervotingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data.Divisions.membervoting.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataDivisionsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.Divisions.search.$get>>,
) {
  return ['data', '/data/Divisions/search', toValue(args)] as const
}

export function getDataDivisionsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.Divisions.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataDivisionsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.Divisions.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataDivisionsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.Divisions.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.search.$get>>>
            >
          >,
          ReturnType<typeof getDataDivisionsSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.data.Divisions.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataDivisionsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataDivisionsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data.Divisions.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataDivisionsSearchTotalResultsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.Divisions.searchTotalResults.$get>>,
) {
  return ['data', '/data/Divisions/searchTotalResults', toValue(args)] as const
}

export function getDataDivisionsSearchTotalResultsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.Divisions.searchTotalResults.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataDivisionsSearchTotalResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.Divisions.searchTotalResults.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataDivisionsSearchTotalResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.data.Divisions.searchTotalResults.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.data.Divisions.searchTotalResults.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.data.Divisions.searchTotalResults.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.data.Divisions.searchTotalResults.$get>>
              >
            >
          >,
          ReturnType<typeof getDataDivisionsSearchTotalResultsQueryKey>
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
          Awaited<ReturnType<typeof client.data.Divisions.searchTotalResults.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataDivisionsSearchTotalResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataDivisionsSearchTotalResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data.Divisions.searchTotalResults.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataDivisionsDivisionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.data.Divisions)[':divisionId']['$get']>>,
) {
  return ['data', '/data/Divisions/:divisionId', toValue(args)] as const
}

export function getDataDivisionsDivisionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.data.Divisions)[':divisionId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataDivisionsDivisionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data.Divisions[':divisionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataDivisionsDivisionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data.Divisions)[':divisionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.data.Divisions)[':divisionId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.data.Divisions)[':divisionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.data.Divisions)[':divisionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataDivisionsDivisionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.data.Divisions)[':divisionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataDivisionsDivisionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataDivisionsDivisionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data.Divisions[':divisionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
