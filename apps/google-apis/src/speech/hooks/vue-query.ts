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

export function getV2beta1Key() {
  return ['v2beta1'] as const
}

export function getV2beta1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta1)[':name']['$get']>>,
) {
  return ['v2beta1', '/v2beta1/:name', toValue(args)] as const
}

export function getV2beta1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV2beta1NameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1NameOperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta1)[':name']['operations']['$get']>>,
) {
  return ['v2beta1', '/v2beta1/:name/operations', toValue(args)] as const
}

export function getV2beta1NameOperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta1)[':name']['operations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1NameOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1[':name'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2beta1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta1)[':name']['operations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta1)[':name']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta1)[':name']['operations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2beta1NameOperationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2beta1)[':name']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1NameOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1NameOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1[':name'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
