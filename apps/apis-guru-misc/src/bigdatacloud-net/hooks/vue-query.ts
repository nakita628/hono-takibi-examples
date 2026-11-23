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

export function getDataIpGeolocationFullQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.data)['ip-geolocation-full']['$get']>>,
) {
  return ['data', '/data/ip-geolocation-full', toValue(args)] as const
}

export function getDataIpGeolocationFullQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.data)['ip-geolocation-full']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataIpGeolocationFullQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data['ip-geolocation-full'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataIpGeolocationFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.data)['ip-geolocation-full']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.data)['ip-geolocation-full']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.data)['ip-geolocation-full']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.data)['ip-geolocation-full']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataIpGeolocationFullQueryKey>
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
          Awaited<ReturnType<(typeof client.data)['ip-geolocation-full']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataIpGeolocationFullQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataIpGeolocationFullQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data['ip-geolocation-full'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDataIpGeolocationWithConfidenceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>
  >,
) {
  return ['data', '/data/ip-geolocation-with-confidence', toValue(args)] as const
}

export function getDataIpGeolocationWithConfidenceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDataIpGeolocationWithConfidenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.data['ip-geolocation-with-confidence'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDataIpGeolocationWithConfidence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDataIpGeolocationWithConfidenceQueryKey>
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
          Awaited<ReturnType<(typeof client.data)['ip-geolocation-with-confidence']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDataIpGeolocationWithConfidenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDataIpGeolocationWithConfidenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.data['ip-geolocation-with-confidence'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
