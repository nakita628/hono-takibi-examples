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

export function getReisezentrenKey() {
  return ['reisezentren'] as const
}

export function getReisezentrenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reisezentren.$get>>,
) {
  return ['reisezentren', '/reisezentren', toValue(args)] as const
}

export function getReisezentrenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reisezentren.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReisezentrenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reisezentren.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReisezentren<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reisezentren.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reisezentren.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reisezentren.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reisezentren.$get>>>>
          >,
          ReturnType<typeof getReisezentrenQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reisezentren.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReisezentrenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReisezentrenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reisezentren.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReisezentrenLocLatLonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>
  >,
) {
  return ['reisezentren', '/reisezentren/loc/:lat/:lon', toValue(args)] as const
}

export function getReisezentrenLocLatLonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReisezentrenLocLatLonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reisezentren.loc[':lat'][':lon'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReisezentrenLocLatLon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReisezentrenLocLatLonQueryKey>
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
          Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReisezentrenLocLatLonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReisezentrenLocLatLonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reisezentren.loc[':lat'][':lon'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReisezentrenLocLatLonDistQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>
  >,
) {
  return ['reisezentren', '/reisezentren/loc/:lat/:lon/:dist', toValue(args)] as const
}

export function getReisezentrenLocLatLonDistQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReisezentrenLocLatLonDistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reisezentren.loc[':lat'][':lon'][':dist'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReisezentrenLocLatLonDist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>
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
                  ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getReisezentrenLocLatLonDistQueryKey>
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
          Awaited<ReturnType<(typeof client.reisezentren.loc)[':lat'][':lon'][':dist']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReisezentrenLocLatLonDistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReisezentrenLocLatLonDistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reisezentren.loc[':lat'][':lon'][':dist'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReisezentrenIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reisezentren)[':id']['$get']>>,
) {
  return ['reisezentren', '/reisezentren/:id', toValue(args)] as const
}

export function getReisezentrenIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reisezentren)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReisezentrenIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reisezentren[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReisezentrenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reisezentren)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reisezentren)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.reisezentren)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.reisezentren)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getReisezentrenIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.reisezentren)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReisezentrenIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReisezentrenIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reisezentren[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
