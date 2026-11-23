import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1StatusBuildinfoQueryKey() {
  return ['api', '/api/v1/status/buildinfo'] as const
}

export function getApiV1StatusBuildinfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.buildinfo.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.buildinfo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusBuildinfoQueryKey>
  >({
    queryKey: getApiV1StatusBuildinfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.status.buildinfo.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1StatusBuildinfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.buildinfo.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.buildinfo.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatusBuildinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1StatusBuildinfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1StatusConfigQueryKey() {
  return ['api', '/api/v1/status/config'] as const
}

export function getApiV1StatusConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusConfigQueryKey>
  >({
    queryKey: getApiV1StatusConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.status.config.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1StatusConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatusConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1StatusConfigQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1StatusConfigDefaultQueryKey() {
  return ['api', '/api/v1/status/config/default'] as const
}

export function getApiV1StatusConfigDefaultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.default.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.default.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusConfigDefaultQueryKey>
  >({
    queryKey: getApiV1StatusConfigDefaultQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.status.config.default.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1StatusConfigDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.status.config.default.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatusConfigDefaultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1StatusConfigDefaultQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1StatusConfigDiffQueryKey() {
  return ['api', '/api/v1/status/config/diff'] as const
}

export function getApiV1StatusConfigDiffQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.diff.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.diff.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusConfigDiffQueryKey>
  >({
    queryKey: getApiV1StatusConfigDiffQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.status.config.diff.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1StatusConfigDiff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.diff.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.config.diff.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatusConfigDiffQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1StatusConfigDiffQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
