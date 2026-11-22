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

export function getAboutKey() {
  return ['about'] as const
}

export function getEcKey() {
  return ['ec'] as const
}

export function getAboutQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.about.$get>>,
) {
  return ['about', '/about', toValue(args)] as const
}

export function getAboutQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.about.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAboutQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.about.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAbout<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.about.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
          ReturnType<typeof getAboutQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAboutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAboutQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.about.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.ec.$get>>) {
  return ['ec', '/ec', toValue(args)] as const
}

export function getEcQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ec.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ec.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEc<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ec.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ec.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ec.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ec.$get>>>>>,
          ReturnType<typeof getEcQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ec.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEcQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ec.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
