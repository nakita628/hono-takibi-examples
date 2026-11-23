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

export function getGlobalwinescoresKey() {
  return ['globalwinescores'] as const
}

export function getGlobalwinescoresIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.globalwinescores.index.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['globalwinescores', '/globalwinescores/', keyArgs] as const
}

export function getGlobalwinescoresIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.globalwinescores.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGlobalwinescoresIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.globalwinescores.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGlobalwinescoresIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.globalwinescores.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.globalwinescores.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.globalwinescores.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.globalwinescores.index.$get>>>
            >
          >,
          ReturnType<typeof getGlobalwinescoresIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.globalwinescores.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGlobalwinescoresIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGlobalwinescoresIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.globalwinescores.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGlobalwinescoresLatestIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.globalwinescores.latest.index.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['globalwinescores', '/globalwinescores/latest/', keyArgs] as const
}

export function getGlobalwinescoresLatestIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.globalwinescores.latest.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGlobalwinescoresLatestIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.globalwinescores.latest.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGlobalwinescoresLatestIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.globalwinescores.latest.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.globalwinescores.latest.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.globalwinescores.latest.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.globalwinescores.latest.index.$get>>
              >
            >
          >,
          ReturnType<typeof getGlobalwinescoresLatestIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.globalwinescores.latest.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGlobalwinescoresLatestIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGlobalwinescoresLatestIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.globalwinescores.latest.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
