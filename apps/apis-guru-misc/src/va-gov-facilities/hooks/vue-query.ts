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

export function getFacilitiesKey() {
  return ['facilities'] as const
}

export function getIdsKey() {
  return ['ids'] as const
}

export function getNearbyKey() {
  return ['nearby'] as const
}

export function getFacilitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.facilities.$get>>,
) {
  return ['facilities', '/facilities', toValue(args)] as const
}

export function getFacilitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.facilities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFacilitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.facilities.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFacilities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.facilities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
          >,
          ReturnType<typeof getFacilitiesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFacilitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFacilitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.facilities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFacilitiesAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.facilities.all.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['facilities', '/facilities/all', keyArgs] as const
}

export function getFacilitiesAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.facilities.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFacilitiesAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.facilities.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFacilitiesAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.facilities.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.all.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.all.$get>>>>
          >,
          ReturnType<typeof getFacilitiesAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFacilitiesAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFacilitiesAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.facilities.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFacilitiesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.facilities)[':id']['$get']>>,
) {
  return ['facilities', '/facilities/:id', toValue(args)] as const
}

export function getFacilitiesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.facilities)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFacilitiesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.facilities[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFacilitiesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.facilities)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getFacilitiesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFacilitiesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFacilitiesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.facilities[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIdsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.ids.$get>>) {
  return ['ids', '/ids', toValue(args)] as const
}

export function getIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ids.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ids.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIds<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ids.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ids.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ids.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ids.$get>>>>>,
          ReturnType<typeof getIdsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ids.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNearbyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nearby.$get>>,
) {
  return ['nearby', '/nearby', toValue(args)] as const
}

export function getNearbyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nearby.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNearbyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nearby.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNearby<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearby.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nearby.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearby.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearby.$get>>>>>,
          ReturnType<typeof getNearbyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearby.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNearbyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNearbyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nearby.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
