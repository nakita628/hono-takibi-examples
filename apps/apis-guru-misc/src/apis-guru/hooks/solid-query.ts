import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function getListJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['list.json']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['list.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListJsonQueryKey>
  >({
    queryKey: getListJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['list.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createListJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['list.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['list.json']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListJsonQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMetricsJsonQueryKey() {
  return ['metrics.json', '/metrics.json'] as const
}

export function getMetricsJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['metrics.json']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['metrics.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsJsonQueryKey>
  >({
    queryKey: getMetricsJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['metrics.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetricsJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['metrics.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['metrics.json']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsJsonQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getProvidersJsonQueryKey() {
  return ['providers.json', '/providers.json'] as const
}

export function getProvidersJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['providers.json']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['providers.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProvidersJsonQueryKey>
  >({
    queryKey: getProvidersJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['providers.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProvidersJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['providers.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['providers.json']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProvidersJsonQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProvidersJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSpecsProviderApiJsonQueryKey(
  args: InferRequestType<(typeof client.specs)[':provider'][':api.json']['$get']>,
) {
  return ['specs', '/specs/:provider/:api.json', args] as const
}

export function getSpecsProviderApiJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.specs)[':provider'][':api.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.specs)[':provider'][':api.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSpecsProviderApiJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.specs[':provider'][':api.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSpecsProviderApiJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.specs)[':provider'][':api.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.specs)[':provider'][':api.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSpecsProviderApiJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSpecsProviderServiceApiJsonQueryKey(
  args: InferRequestType<(typeof client.specs)[':provider'][':service'][':api.json']['$get']>,
) {
  return ['specs', '/specs/:provider/:service/:api.json', args] as const
}

export function getSpecsProviderServiceApiJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.specs)[':provider'][':service'][':api.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.specs)[':provider'][':service'][':api.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSpecsProviderServiceApiJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.specs[':provider'][':service'][':api.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSpecsProviderServiceApiJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.specs)[':provider'][':service'][':api.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.specs)[':provider'][':service'][':api.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getSpecsProviderServiceApiJsonQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSpecsProviderServiceApiJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProviderJsonQueryKey(
  args: InferRequestType<(typeof client)[':provider.json']['$get']>,
) {
  return [':provider.json', '/:provider.json', args] as const
}

export function getProviderJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':provider.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':provider.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':provider.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProviderJsonQueryKey>
  >({
    queryKey: getProviderJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':provider.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProviderJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':provider.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':provider.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':provider.json']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProviderJsonQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProviderJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProviderServicesJsonQueryKey(
  args: InferRequestType<(typeof client)[':provider']['services.json']['$get']>,
) {
  return [':provider', '/:provider/services.json', args] as const
}

export function getProviderServicesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':provider']['services.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':provider']['services.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getProviderServicesJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':provider']['services.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProviderServicesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':provider']['services.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':provider']['services.json']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProviderServicesJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
