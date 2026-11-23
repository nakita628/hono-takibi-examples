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

export function getForecastKey() {
  return ['forecast'] as const
}

export function getProtectionKey() {
  return ['protection'] as const
}

export function getUvKey() {
  return ['uv'] as const
}

export function getForecastQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.forecast.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['forecast', '/forecast', keyArgs] as const
}

export function getForecastQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.forecast.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getForecastQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.forecast.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useForecast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.forecast.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.$get>>>>
          >,
          ReturnType<typeof getForecastQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getForecastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getForecastQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.forecast.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProtectionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.protection.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['protection', '/protection', keyArgs] as const
}

export function getProtectionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.protection.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProtectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.protection.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProtection<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protection.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.protection.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protection.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protection.$get>>>>
          >,
          ReturnType<typeof getProtectionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protection.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProtectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProtectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.protection.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUvQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.uv.$get>>) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['uv', '/uv', keyArgs] as const
}

export function getUvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.uv.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.uv.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUv<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uv.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.uv.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uv.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uv.$get>>>>>,
          ReturnType<typeof getUvQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uv.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.uv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
