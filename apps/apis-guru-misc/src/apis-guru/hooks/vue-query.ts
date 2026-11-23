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

export function getListJsonKey() {
  return ['list.json'] as const
}

export function getMetricsJsonKey() {
  return ['metrics.json'] as const
}

export function getProvidersJsonKey() {
  return ['providers.json'] as const
}

export function getSpecsKey() {
  return ['specs'] as const
}

export function getProviderKey() {
  return ['{provider}'] as const
}

export function getProviderJsonKey() {
  return ['{provider}.json'] as const
}

export function getListJsonQueryKey() {
  return ['list.json', '/list.json'] as const
}

export function getListJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getListJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['list.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useListJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['list.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['list.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['list.json']['$get']>>>
            >
          >,
          ReturnType<typeof getListJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['list.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getListJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['list.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsJsonQueryKey() {
  return ['metrics.json', '/metrics.json'] as const
}

export function getMetricsJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMetricsJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['metrics.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetricsJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['metrics.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['metrics.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['metrics.json']['$get']>>>
            >
          >,
          ReturnType<typeof getMetricsJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['metrics.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMetricsJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['metrics.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProvidersJsonQueryKey() {
  return ['providers.json', '/providers.json'] as const
}

export function getProvidersJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProvidersJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['providers.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProvidersJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['providers.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['providers.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['providers.json']['$get']>>>
            >
          >,
          ReturnType<typeof getProvidersJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['providers.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProvidersJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['providers.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpecsProviderApiJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.specs)[':provider'][':api.json']['$get']>>,
) {
  return ['specs', '/specs/:provider/:api.json', toValue(args)] as const
}

export function getSpecsProviderApiJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.specs)[':provider'][':api.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpecsProviderApiJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.specs[':provider'][':api.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpecsProviderApiJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.specs)[':provider'][':api.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.specs)[':provider'][':api.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.specs)[':provider'][':api.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.specs)[':provider'][':api.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSpecsProviderApiJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.specs)[':provider'][':api.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpecsProviderApiJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpecsProviderApiJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.specs[':provider'][':api.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpecsProviderServiceApiJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.specs)[':provider'][':service'][':api.json']['$get']>
  >,
) {
  return ['specs', '/specs/:provider/:service/:api.json', toValue(args)] as const
}

export function getSpecsProviderServiceApiJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.specs)[':provider'][':service'][':api.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpecsProviderServiceApiJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.specs[':provider'][':service'][':api.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpecsProviderServiceApiJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.specs)[':provider'][':service'][':api.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.specs)[':provider'][':service'][':api.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.specs)[':provider'][':service'][':api.json']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.specs)[':provider'][':service'][':api.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSpecsProviderServiceApiJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.specs)[':provider'][':service'][':api.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpecsProviderServiceApiJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpecsProviderServiceApiJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.specs[':provider'][':service'][':api.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProviderJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':provider.json']['$get']>>,
) {
  return [':provider.json', '/:provider.json', toValue(args)] as const
}

export function getProviderJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':provider.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProviderJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':provider.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProviderJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':provider.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':provider.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':provider.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':provider.json']['$get']>>>
            >
          >,
          ReturnType<typeof getProviderJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':provider.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProviderJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProviderJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':provider.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProviderServicesJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':provider']['services.json']['$get']>>,
) {
  return [':provider', '/:provider/services.json', toValue(args)] as const
}

export function getProviderServicesJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':provider']['services.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProviderServicesJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':provider']['services.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProviderServicesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':provider']['services.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':provider']['services.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':provider']['services.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':provider']['services.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProviderServicesJsonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':provider']['services.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProviderServicesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProviderServicesJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':provider']['services.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
