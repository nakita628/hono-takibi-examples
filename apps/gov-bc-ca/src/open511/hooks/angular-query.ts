import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAreasKey() {
  return ['areas'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getJurisdictionKey() {
  return ['jurisdiction'] as const
}

export function getJurisdictiongeographyKey() {
  return ['jurisdictiongeography'] as const
}

export function getAreasQueryKey(args: InferRequestType<typeof client.areas.$get>) {
  return ['areas', '/areas', args] as const
}

export function getAreasQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areas.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.areas.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAreasQueryKey>
  >({
    queryKey: getAreasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.areas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAreas<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areas.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.areas.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areas.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAreasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAreasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEventsQueryKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function getEventsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >({
    queryKey: getEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getJurisdictionQueryKey(args: InferRequestType<typeof client.jurisdiction.$get>) {
  return ['jurisdiction', '/jurisdiction', args] as const
}

export function getJurisdictionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdiction.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.jurisdiction.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdiction.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJurisdictionQueryKey>
  >({
    queryKey: getJurisdictionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jurisdiction.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectJurisdiction<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdiction.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.jurisdiction.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdiction.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getJurisdictionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJurisdictionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getJurisdictiongeographyQueryKey(
  args: InferRequestType<typeof client.jurisdictiongeography.$get>,
) {
  return ['jurisdictiongeography', '/jurisdictiongeography', args] as const
}

export function getJurisdictiongeographyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictiongeography.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.jurisdictiongeography.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictiongeography.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJurisdictiongeographyQueryKey>
  >({
    queryKey: getJurisdictiongeographyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jurisdictiongeography.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectJurisdictiongeography<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictiongeography.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.jurisdictiongeography.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictiongeography.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJurisdictiongeographyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJurisdictiongeographyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
