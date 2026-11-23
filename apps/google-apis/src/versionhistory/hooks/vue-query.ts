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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ParentChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['channels']['$get']>>,
) {
  return ['v1', '/v1/:parent/channels', toValue(args)] as const
}

export function getV1ParentChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['channels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['channels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['channels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['channels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['channels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentChannelsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['channels']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ParentPlatformsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['platforms']['$get']>>,
) {
  return ['v1', '/v1/:parent/platforms', toValue(args)] as const
}

export function getV1ParentPlatformsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['platforms']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentPlatformsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].platforms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentPlatforms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['platforms']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['platforms']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['platforms']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['platforms']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentPlatformsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':parent']['platforms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentPlatformsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentPlatformsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].platforms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ParentReleasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['releases']['$get']>>,
) {
  return ['v1', '/v1/:parent/releases', toValue(args)] as const
}

export function getV1ParentReleasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['releases']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentReleasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].releases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentReleases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['releases']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['releases']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['releases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['releases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentReleasesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['releases']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentReleasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentReleasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].releases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ParentVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['versions']['$get']>>,
) {
  return ['v1', '/v1/:parent/versions', toValue(args)] as const
}

export function getV1ParentVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['versions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['versions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentVersionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['versions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
