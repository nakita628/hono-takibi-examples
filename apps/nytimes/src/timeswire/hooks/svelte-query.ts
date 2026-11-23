import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getContentKey() {
  return ['content'] as const
}

export function getContentJsonKey() {
  return ['content.json'] as const
}

export function getContentJsonQueryKey(
  args: InferRequestType<(typeof client)['content.json']['$get']>,
) {
  return ['content.json', '/content.json', args] as const
}

export function getContentJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['content.json']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['content.json']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['content.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContentJsonQueryKey>
  >({
    queryKey: getContentJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['content.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createContentJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['content.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['content.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['content.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContentJsonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getContentSourceSectionJsonQueryKey(
  args: InferRequestType<(typeof client.content)[':source'][':section.json']['$get']>,
) {
  return ['content', '/content/:source/:section.json', args] as const
}

export function getContentSourceSectionJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.content)[':source'][':section.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.content)[':source'][':section.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.content)[':source'][':section.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentSourceSectionJsonQueryKey>
  >({
    queryKey: getContentSourceSectionJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.content[':source'][':section.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContentSourceSectionJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.content)[':source'][':section.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.content)[':source'][':section.json']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.content)[':source'][':section.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentSourceSectionJsonQueryKey>
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
      ...getContentSourceSectionJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getContentSourceSectionTimePeriodJsonQueryKey(
  args: InferRequestType<
    (typeof client.content)[':source'][':section'][':time-period.json']['$get']
  >,
) {
  return ['content', '/content/:source/:section/:time-period.json', args] as const
}

export function getContentSourceSectionTimePeriodJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.content)[':source'][':section'][':time-period.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.content)[':source'][':section'][':time-period.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.content)[':source'][':section'][':time-period.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContentSourceSectionTimePeriodJsonQueryKey>
  >({
    queryKey: getContentSourceSectionTimePeriodJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.content[':source'][':section'][':time-period.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContentSourceSectionTimePeriodJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.content)[':source'][':section'][':time-period.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.content)[':source'][':section'][':time-period.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.content)[':source'][':section'][':time-period.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentSourceSectionTimePeriodJsonQueryKey>
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
      ...getContentSourceSectionTimePeriodJsonQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
