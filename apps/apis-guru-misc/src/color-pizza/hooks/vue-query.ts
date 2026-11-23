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

export function getNamesKey() {
  return ['names'] as const
}

export function getSwatchKey() {
  return ['swatch'] as const
}

export function getQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>) {
  return ['', '/', toValue(args)] as const
}

export function getQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListsIndexQueryKey() {
  return ['lists', '/lists/'] as const
}

export function getListsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getListsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useListsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.index.$get>>>>
          >,
          ReturnType<typeof getListsIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getListsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.lists.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNamesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.index.$get>>,
) {
  return ['names', '/names/', toValue(args)] as const
}

export function getNamesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNamesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.names.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNamesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.names.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.index.$get>>>>
          >,
          ReturnType<typeof getNamesIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNamesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNamesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.names.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSwatchIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.swatch.index.$get>>,
) {
  return ['swatch', '/swatch/', toValue(args)] as const
}

export function getSwatchIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.swatch.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSwatchIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.swatch.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSwatchIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swatch.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.swatch.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swatch.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swatch.index.$get>>>>
          >,
          ReturnType<typeof getSwatchIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swatch.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSwatchIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSwatchIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.swatch.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
