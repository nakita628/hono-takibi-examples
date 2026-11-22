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

export function getApisKey() {
  return ['apis'] as const
}

export function getApisQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.apis.$get>>) {
  return ['apis', '/apis', toValue(args)] as const
}

export function getApisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApis<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apis.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
          ReturnType<typeof getApisQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisApiVersionRestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)[':api'][':version']['rest']['$get']>
  >,
) {
  return ['apis', '/apis/:api/:version/rest', toValue(args)] as const
}

export function getApisApiVersionRestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)[':api'][':version']['rest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisApiVersionRestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis[':api'][':version'].rest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisApiVersionRest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)[':api'][':version']['rest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)[':api'][':version']['rest']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apis)[':api'][':version']['rest']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apis)[':api'][':version']['rest']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApisApiVersionRestQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)[':api'][':version']['rest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisApiVersionRestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisApiVersionRestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis[':api'][':version'].rest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
