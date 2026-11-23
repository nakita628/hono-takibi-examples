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

export function getCriticsKey() {
  return ['critics'] as const
}

export function getReviewsKey() {
  return ['reviews'] as const
}

export function getCriticsResourceTypeJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.critics)[':resource-type.json']['$get']>>,
) {
  return ['critics', '/critics/:resource-type.json', toValue(args)] as const
}

export function getCriticsResourceTypeJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.critics)[':resource-type.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCriticsResourceTypeJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.critics[':resource-type.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCriticsResourceTypeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.critics)[':resource-type.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.critics)[':resource-type.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.critics)[':resource-type.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.critics)[':resource-type.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCriticsResourceTypeJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.critics)[':resource-type.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCriticsResourceTypeJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCriticsResourceTypeJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.critics[':resource-type.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReviewsSearchJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reviews)['search.json']['$get']>>,
) {
  return ['reviews', '/reviews/search.json', toValue(args)] as const
}

export function getReviewsSearchJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reviews)['search.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewsSearchJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reviews['search.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReviewsSearchJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)['search.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reviews)['search.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reviews)['search.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reviews)['search.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReviewsSearchJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.reviews)['search.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewsSearchJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewsSearchJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reviews['search.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReviewsResourceTypeJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reviews)[':resource-type.json']['$get']>>,
) {
  return ['reviews', '/reviews/:resource-type.json', toValue(args)] as const
}

export function getReviewsResourceTypeJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reviews)[':resource-type.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewsResourceTypeJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reviews[':resource-type.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReviewsResourceTypeJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reviews)[':resource-type.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reviews)[':resource-type.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reviews)[':resource-type.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reviews)[':resource-type.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReviewsResourceTypeJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.reviews)[':resource-type.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewsResourceTypeJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewsResourceTypeJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reviews[':resource-type.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
