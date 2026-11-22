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

export function getJb2008Key() {
  return ['jb2008'] as const
}

export function getNrlmsise00Key() {
  return ['nrlmsise00'] as const
}

export function getWamIpeKey() {
  return ['wam-ipe'] as const
}

export function getJb2008QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jb2008.$get>>,
) {
  return ['jb2008', '/jb2008', toValue(args)] as const
}

export function getJb2008QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jb2008.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJb2008QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jb2008.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJb2008<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jb2008.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jb2008.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jb2008.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jb2008.$get>>>>>,
          ReturnType<typeof getJb2008QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jb2008.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJb2008QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJb2008QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jb2008.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNrlmsise00QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nrlmsise00.$get>>,
) {
  return ['nrlmsise00', '/nrlmsise00', toValue(args)] as const
}

export function getNrlmsise00QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nrlmsise00.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNrlmsise00QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nrlmsise00.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNrlmsise00<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nrlmsise00.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nrlmsise00.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nrlmsise00.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nrlmsise00.$get>>>>
          >,
          ReturnType<typeof getNrlmsise00QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nrlmsise00.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNrlmsise00QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNrlmsise00QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nrlmsise00.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWamIpeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['wam-ipe']['$get']>>,
) {
  return ['wam-ipe', '/wam-ipe', toValue(args)] as const
}

export function getWamIpeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['wam-ipe']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWamIpeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['wam-ipe'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWamIpe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['wam-ipe']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['wam-ipe']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['wam-ipe']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['wam-ipe']['$get']>>>
            >
          >,
          ReturnType<typeof getWamIpeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['wam-ipe']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWamIpeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWamIpeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['wam-ipe'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
