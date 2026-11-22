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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1QueryKey() {
  return ['api', '/api/v1'] as const
}

export function getApiV1QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.$get>>>>>,
          ReturnType<typeof getApiV1QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GroundhogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.groundhogs.$get>>,
) {
  return ['api', '/api/v1/groundhogs', toValue(args)] as const
}

export function getApiV1GroundhogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.groundhogs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroundhogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.groundhogs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Groundhogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groundhogs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.groundhogs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groundhogs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groundhogs.$get>>>
            >
          >,
          ReturnType<typeof getApiV1GroundhogsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groundhogs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroundhogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroundhogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.groundhogs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1GroundhogsSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.groundhogs)[':slug']['$get']>>,
) {
  return ['api', '/api/v1/groundhogs/:slug', toValue(args)] as const
}

export function getApiV1GroundhogsSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.groundhogs)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1GroundhogsSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.groundhogs[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1GroundhogsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.groundhogs)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.groundhogs)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.groundhogs)[':slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.groundhogs)[':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1GroundhogsSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.groundhogs)[':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroundhogsSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1GroundhogsSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.groundhogs[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PredictionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.predictions.$get>>,
) {
  return ['api', '/api/v1/predictions', toValue(args)] as const
}

export function getApiV1PredictionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.predictions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PredictionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.predictions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Predictions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.predictions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.predictions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.predictions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.predictions.$get>>>
            >
          >,
          ReturnType<typeof getApiV1PredictionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.predictions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PredictionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PredictionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.predictions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SpecQueryKey() {
  return ['api', '/api/v1/spec'] as const
}

export function getApiV1SpecQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1SpecQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.spec.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Spec<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.spec.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.spec.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.spec.$get>>>>
          >,
          ReturnType<typeof getApiV1SpecQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.spec.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1SpecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1SpecQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.spec.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
